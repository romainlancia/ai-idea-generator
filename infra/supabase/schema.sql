create table if not exists projects (
    id uuid primary key,
    user_id text,
    ip_hash text,
    input jsonb not null,
    output jsonb not null,
    created_at timestamptz not null default now()
);

-- Simple function to count projects since a date
create or replace function count_generations_month(p_user_id text, p_ip_hash text, p_from timestamptz)
returns integer language plpgsql as $$
begin
    if p_user_id is not null then
        return (select count(*) from projects where user_id = p_user_id and created_at >= p_from);
    else
        return (select count(*) from projects where ip_hash = p_ip_hash and created_at >= p_from);
    end if;
end; $$;
