-- Run in the connected Supabase SQL Editor after the account has used the magic-link sign-in once.
-- This grants the account access to the Founder Hub.
insert into public.profiles (id, role)
select id, 'founder'
from auth.users
where email = 'shawncooper289@gmail.com'
on conflict (id) do update set role = excluded.role;
