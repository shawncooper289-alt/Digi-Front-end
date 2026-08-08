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

-- Ava Skye account access tables
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  role text not null default 'client' check (role in ('client', 'premium', 'founder')),
  created_at timestamptz not null default now()
);

create table if not exists public.subscriptions (
  id bigint primary key generated always as identity,
  user_id uuid not null references auth.users(id) on delete cascade,
  plan text not null default 'launch' check (plan in ('launch', 'growth', 'premium', 'founder', 'elite', 'white-label-partner', 'white-label-enterprise')),
  status text not null default 'active' check (status in ('active', 'trialing', 'past_due', 'canceled')),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.subscriptions enable row level security;

drop policy if exists "users can read own profile" on public.profiles;
create policy "users can read own profile"
on public.profiles
for select to authenticated
using (id = (select auth.uid()));

drop policy if exists "users can read own subscription" on public.subscriptions;
create policy "users can read own subscription"
on public.subscriptions
for select to authenticated
using (user_id = (select auth.uid()));

-- The Ava Skye dashboard is unlocked when profiles.role = 'founder'
-- or subscriptions.plan is 'premium' / 'founder'. Use Supabase Auth to create
-- the founder account, then insert or update its profile row accordingly.
