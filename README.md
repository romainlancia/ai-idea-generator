## Setup

1) Install deps
```bash
pnpm i
```

2) Start Keycloak (dev)
```bash
cd infra/keycloak && docker compose up -d
```

3) Create Supabase project, run infra/supabase/schema.sql.
4) Configure .env (copy .env.example).
5) Run apps
```bash 
pnpm dev
```

## Deploy to Vercel
- Fork this repo, then use the Deploy button in the header.
- Set env vars in Vercel (API as separate service on e.g. Render/Fly/railway, or Vercel functions if desired).

## Quota
- 5 générations / mois par userId (Keycloak) sinon fallback sur hash d'IP.
- Implémenté côté API, stocké dans Supabase via RPC.

---

## Notes d’architecture

- **Hexagonale (backend)**: domaine pur (prompting/shape), ports pour LLM/images/repo/quota, adaptateurs pour OpenAI/Replicate/Supabase. Controller fin et orchestration en Use Case.
- **FSD (frontend)**: UI composable (features: generation, entities: project). App Router sépare server/client.
- **Auth**: Keycloak guard JWT au niveau API. Front peut être public; si authentifié, quota par userId et projets persistés par user.
