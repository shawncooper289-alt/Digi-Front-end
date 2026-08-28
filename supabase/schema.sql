create table if not exists public.ava_client_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  stage text not null default 'Absolute Beginner',
  profile jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.ava_conversations (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  stage text not null,
  user_message text not null,
  assistant_message text not null,
  created_at timestamptz not null default now()
);

alter table public.ava_client_profiles enable row level security;
alter table public.ava_conversations enable row level security;
drop policy if exists "Users read their own Ava profile" on public.ava_client_profiles;
create policy "Users read their own Ava profile" on public.ava_client_profiles for select using (auth.uid() = user_id);
drop policy if exists "Users read their own Ava conversations" on public.ava_conversations;
create policy "Users read their own Ava conversations" on public.ava_conversations for select using (auth.uid() = user_id);
