-- Create waitlist / lead capture table
create table if not exists public.leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  email text unique not null,
  full_name text,
  business_type text,
  status text default 'pending' check (status in ('pending', 'contacted', 'converted'))
);

-- Create admin allowlist table for lead management access.
-- Insert an auth.users id into public.admin_users to grant lead read access.
create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.leads enable row level security;
alter table public.admin_users enable row level security;

-- Allow public insert access for lead generation / waitlist form
drop policy if exists "Allow public insert to leads" on public.leads;
create policy "Allow public insert to leads"
on public.leads
for insert
with check (true);

-- Restrict read access to explicitly allowlisted admin users only
drop policy if exists "Allow admin read to leads" on public.leads;
create policy "Allow admin read to leads"
on public.leads
for select
using (
  exists (
    select 1
    from public.admin_users
    where admin_users.user_id = auth.uid()
  )
);

-- Let admins verify their own admin allowlist record without exposing other admins
drop policy if exists "Allow admins to read own admin record" on public.admin_users;
create policy "Allow admins to read own admin record"
on public.admin_users
for select
using (user_id = auth.uid());
