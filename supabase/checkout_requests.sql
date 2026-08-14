-- Run this in Supabase SQL Editor before using /checkout in production.
-- It creates the checkout_requests table used by the DigiMark101 checkout form.

create extension if not exists pgcrypto;

create table if not exists public.checkout_requests (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  customer_email text not null,
  customer_phone text,
  business_name text,
  package_name text not null,
  package_price numeric not null,
  currency text not null default 'USD',
  payment_status text not null default 'pending',
  payment_provider text not null default 'not_connected_yet',
  notes text,
  created_at timestamptz not null default now()
);

alter table public.checkout_requests enable row level security;

-- Public website visitors can create checkout requests.
create policy "Public can create checkout requests"
  on public.checkout_requests
  for insert
  to anon
  with check (true);

-- Authenticated owner/founder users can read checkout requests in the dashboard.
-- For stricter access, replace this with an owner-only role/profile check.
create policy "Authenticated users can read checkout requests"
  on public.checkout_requests
  for select
  to authenticated
  using (true);
