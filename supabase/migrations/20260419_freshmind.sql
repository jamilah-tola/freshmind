create extension if not exists pgcrypto;

create table if not exists public.fm_venues (
  id text primary key,
  name text not null,
  city text not null,
  region text not null,
  address text not null,
  map_url text not null,
  notes text not null default ''
);

create table if not exists public.fm_openings (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text not null,
  status text not null default 'draft',
  featured boolean not null default false,
  summary text not null,
  destination_country text not null,
  destination_city text not null,
  employer text not null,
  openings_count integer not null default 0,
  salary_range text not null,
  contract_duration text not null,
  closing_date date not null,
  posted_date date not null default current_date,
  benefits jsonb not null default '[]'::jsonb,
  requirements jsonb not null default '[]'::jsonb,
  documents jsonb not null default '[]'::jsonb,
  process_highlights jsonb not null default '[]'::jsonb,
  interview_regions jsonb not null default '[]'::jsonb,
  visa_support text not null,
  accommodation text not null,
  transport text not null,
  fee_policy text not null,
  trust_note text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.fm_slots (
  id uuid primary key default gen_random_uuid(),
  opening_id uuid not null references public.fm_openings(id) on delete cascade,
  venue_id text not null references public.fm_venues(id) on delete restrict,
  date date not null,
  start_time text not null,
  end_time text not null,
  capacity integer not null,
  note text not null default '',
  status text not null default 'open',
  created_at timestamptz not null default now()
);

create table if not exists public.fm_registrations (
  id uuid primary key default gen_random_uuid(),
  reference text unique not null,
  opening_id uuid not null references public.fm_openings(id) on delete cascade,
  slot_id uuid not null references public.fm_slots(id) on delete cascade,
  venue_id text not null references public.fm_venues(id) on delete restrict,
  full_name text not null,
  phone text not null,
  district text not null,
  email text,
  age_band text not null,
  education text not null,
  category text not null,
  years_of_experience text not null,
  passport_status text not null,
  preferred_country text not null,
  notes text,
  document_name text,
  document_path text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create or replace view public.fm_registration_admin_view as
select
  r.*,
  o.title as opening_title,
  v.name as venue_name,
  v.city as venue_city,
  s.date as slot_date,
  s.start_time,
  s.end_time
from public.fm_registrations r
join public.fm_openings o on o.id = r.opening_id
join public.fm_slots s on s.id = r.slot_id
join public.fm_venues v on v.id = r.venue_id;

alter table public.fm_venues enable row level security;
alter table public.fm_openings enable row level security;
alter table public.fm_slots enable row level security;
alter table public.fm_registrations enable row level security;

create policy "Public can read active openings"
on public.fm_openings
for select
using (status in ('active', 'upcoming', 'closed'));

create policy "Public can read venues"
on public.fm_venues
for select
using (true);

create policy "Public can read slots"
on public.fm_slots
for select
using (true);

create policy "Service role manages all venue data"
on public.fm_venues
for all
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');

create policy "Service role manages all openings"
on public.fm_openings
for all
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');

create policy "Service role manages all slots"
on public.fm_slots
for all
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');

create policy "Service role manages all registrations"
on public.fm_registrations
for all
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');

insert into storage.buckets (id, name, public)
values ('candidate-documents', 'candidate-documents', false)
on conflict (id) do nothing;
