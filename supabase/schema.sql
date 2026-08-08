-- DigiMark101 Vercel frontend + Supabase backend schema
-- Run this in the Supabase SQL Editor for the connected project.

create table if not exists public.leads (
  id bigint primary key generated always as identity,
  name text not null,
  email text not null,
  company text,
  message text,
  source text not null default 'vercel-frontend',
  created_at timestamptz not null default now()
);

create table if not exists public.campaigns (
  id bigint primary key generated always as identity,
  name text not null,
  status text not null default 'draft',
  channel text not null default 'web',
  description text,
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;
alter table public.campaigns enable row level security;

-- Public users should not read leads directly from the browser.
-- The Vercel API route uses the server-side service role key for inserts and dashboard reads.
drop policy if exists "public cannot read leads" on public.leads;
create policy "public cannot read leads"
on public.leads
for select to anon
using (false);

-- Campaigns are safe for public marketing-page reads.
drop policy if exists "public can read campaigns" on public.campaigns;
create policy "public can read campaigns"
on public.campaigns
for select to anon
using (true);

insert into public.campaigns (name, status, channel, description)
values
  ('Supabase launch funnel', 'ready', 'web', 'Capture qualified traffic through the Vercel frontend.'),
  ('Client onboarding', 'draft', 'email', 'Move new leads into a Supabase-backed follow-up workflow.'),
  ('Local services growth', 'ready', 'social', 'Track outreach campaigns from one Supabase source of truth.')
on conflict do nothing;
