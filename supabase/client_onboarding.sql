-- Run in Supabase SQL Editor. Creates the persisted Ava-guided client journey.
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'client' check (role in ('client', 'founder')),
  created_at timestamptz not null default now()
);

create or replace function public.create_client_profile()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, role) values (new.id, 'client')
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_profile on auth.users;
create trigger on_auth_user_created_profile
  after insert on auth.users
  for each row execute procedure public.create_client_profile();

create table if not exists public.client_onboarding (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  status text not null default 'in_progress' check (status in ('in_progress', 'blocked', 'ready_for_launch', 'launched')),
  current_step integer not null default 0 check (current_step between 0 and 5),
  answers jsonb not null default '{}'::jsonb,
  milestones jsonb not null default '{"foundation":false,"presence":false,"offer":false,"funnel":false,"campaign":false,"first_sale":false}'::jsonb,
  founder_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.client_onboarding enable row level security;

drop policy if exists "Clients manage their onboarding" on public.client_onboarding;
create policy "Clients manage their onboarding"
  on public.client_onboarding for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());
