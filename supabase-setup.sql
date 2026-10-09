-- Replace YOUR_EMAIL@example.com with the email you will use to sign in.
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  created_at timestamptz not null default now()
);
create table if not exists public.videos (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  url text not null,
  created_at timestamptz not null default now()
);

alter table public.posts enable row level security;
alter table public.videos enable row level security;

create policy "Posts are public" on public.posts for select using (true);
create policy "Only author adds posts" on public.posts for insert to authenticated with check ((auth.jwt() ->> 'email') = 'YOUR_EMAIL@example.com');
create policy "Videos are public" on public.videos for select using (true);
create policy "Only author adds videos" on public.videos for insert to authenticated with check ((auth.jwt() ->> 'email') = 'YOUR_EMAIL@example.com');

insert into storage.buckets (id, name, public)
values ('videos', 'videos', true)
on conflict (id) do update set public = true;

create policy "Public videos can be viewed" on storage.objects for select using (bucket_id = 'videos');
create policy "Only author uploads videos" on storage.objects for insert to authenticated with check (bucket_id = 'videos' and (auth.jwt() ->> 'email') = 'YOUR_EMAIL@example.com');
