-- Capture selected seat tier before sending buyers to checkout / onboarding.
create table if not exists public.purchase_handoffs (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  email text not null,
  tier text not null check (tier in ('starter-seat', 'growth-team', 'agency-command')),
  tier_name text not null,
  seats text,
  price text,
  status text default 'checkout_started' check (status in ('checkout_started', 'paid', 'onboarding_started', 'cancelled')),
  source text default 'digi-front-end',
  checkout_session_id text,
  metadata jsonb default '{}'::jsonb
);

create index if not exists purchase_handoffs_email_idx on public.purchase_handoffs (email);
create index if not exists purchase_handoffs_status_idx on public.purchase_handoffs (status);
create index if not exists purchase_handoffs_created_at_idx on public.purchase_handoffs (created_at desc);

alter table public.purchase_handoffs enable row level security;

-- The public website can create purchase handoffs with the anon key.
drop policy if exists "Allow public insert to purchase handoffs" on public.purchase_handoffs;
create policy "Allow public insert to purchase handoffs"
on public.purchase_handoffs
for insert
with check (true);

-- Existing allowlisted admins can read purchase handoffs.
drop policy if exists "Allow admin read to purchase handoffs" on public.purchase_handoffs;
create policy "Allow admin read to purchase handoffs"
on public.purchase_handoffs
for select
using (
  exists (
    select 1
    from public.admin_users
    where admin_users.user_id = auth.uid()
  )
);
