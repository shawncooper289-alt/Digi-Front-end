-- Run this in Supabase SQL Editor before using /dashboard-sales in production.
-- This table tracks founder-reviewed premium buyer / opt-in lead package requests.

create extension if not exists pgcrypto;

create table if not exists public.lead_sale_requests (
  id uuid primary key default gen_random_uuid(),
  package_id text not null,
  package_name text not null,
  quantity text not null,
  price numeric not null,
  currency text not null default 'USD',
  status text not null default 'pending_founder_review',
  client_name text not null,
  client_email text not null,
  target_niche text not null,
  notes text,
  created_by text,
  created_at timestamptz not null default now()
);

alter table public.lead_sale_requests enable row level security;

-- Founder-only access by email. Update this if you add more admin accounts later.
create policy "Founder can create lead sale requests"
  on public.lead_sale_requests
  for insert
  to authenticated
  with check ((auth.jwt() ->> 'email') = 'digimark101s@gmail.com');

create policy "Founder can read lead sale requests"
  on public.lead_sale_requests
  for select
  to authenticated
  using ((auth.jwt() ->> 'email') = 'digimark101s@gmail.com');
