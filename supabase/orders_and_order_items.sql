-- Run this in the Supabase SQL Editor for the connected DigiMark101 project.

create extension if not exists pgcrypto;

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid null references auth.users(id) on delete set null,
  customer_email text not null,
  status text not null default 'pending' check (status in ('pending', 'paid', 'failed', 'refunded', 'canceled')),
  currency text not null default 'USD',
  subtotal_cents integer not null default 0 check (subtotal_cents >= 0),
  tax_cents integer not null default 0 check (tax_cents >= 0),
  total_cents integer not null default 0 check (total_cents >= 0),
  payment_provider text null,
  provider_session_id text null,
  provider_payment_id text null,
  notes text null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_name text not null,
  quantity integer not null default 1 check (quantity > 0),
  unit_price_cents integer not null default 0 check (unit_price_cents >= 0),
  line_total_cents integer not null default 0 check (line_total_cents >= 0),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_orders_user_id on public.orders(user_id);
create index if not exists idx_orders_status on public.orders(status);
create index if not exists idx_orders_created_at on public.orders(created_at desc);
create index if not exists idx_order_items_order_id on public.order_items(order_id);

alter table public.orders enable row level security;
alter table public.order_items enable row level security;

grant select, insert, update, delete on public.orders to authenticated;
grant select, insert, update, delete on public.order_items to authenticated;
grant all on public.orders to service_role;
grant all on public.order_items to service_role;

drop policy if exists "orders_select_own" on public.orders;
create policy "orders_select_own"
  on public.orders
  for select
  to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "orders_insert_own" on public.orders;
create policy "orders_insert_own"
  on public.orders
  for insert
  to authenticated
  with check (user_id = (select auth.uid()));

drop policy if exists "orders_update_own" on public.orders;
create policy "orders_update_own"
  on public.orders
  for update
  to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

drop policy if exists "orders_delete_own" on public.orders;
create policy "orders_delete_own"
  on public.orders
  for delete
  to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "order_items_select_by_owner" on public.order_items;
create policy "order_items_select_by_owner"
  on public.order_items
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.orders o
      where o.id = order_items.order_id
        and o.user_id = (select auth.uid())
    )
  );

drop policy if exists "order_items_insert_by_owner" on public.order_items;
create policy "order_items_insert_by_owner"
  on public.order_items
  for insert
  to authenticated
  with check (
    exists (
      select 1
      from public.orders o
      where o.id = order_items.order_id
        and o.user_id = (select auth.uid())
    )
  );

drop policy if exists "order_items_update_by_owner" on public.order_items;
create policy "order_items_update_by_owner"
  on public.order_items
  for update
  to authenticated
  using (
    exists (
      select 1
      from public.orders o
      where o.id = order_items.order_id
        and o.user_id = (select auth.uid())
    )
  )
  with check (
    exists (
      select 1
      from public.orders o
      where o.id = order_items.order_id
        and o.user_id = (select auth.uid())
    )
  );

drop policy if exists "order_items_delete_by_owner" on public.order_items;
create policy "order_items_delete_by_owner"
  on public.order_items
  for delete
  to authenticated
  using (
    exists (
      select 1
      from public.orders o
      where o.id = order_items.order_id
        and o.user_id = (select auth.uid())
    )
  );
