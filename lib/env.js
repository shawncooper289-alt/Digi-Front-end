export function getPublicSupabaseConfig() {
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '',
    publishableKey:
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      process.env.SUPABASE_PUBLISHABLE_KEY ||
      process.env.SUPABASE_ANON_KEY ||
      ''
  };
}

export function getServerSupabaseConfig() {
  const publicConfig = getPublicSupabaseConfig();

  return {
    ...publicConfig,
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY || '',
    postgresUrl: process.env.POSTGRES_URL || process.env.POSTGRES_PRISMA_URL || ''
  };
}

export function getSupabaseReadiness() {
  const config = getServerSupabaseConfig();

  return {
    hasUrl: Boolean(config.url),
    hasPublishableKey: Boolean(config.publishableKey),
    hasServiceRoleKey: Boolean(config.serviceRoleKey),
    hasPostgresUrl: Boolean(config.postgresUrl),
    readyForPublicReads: Boolean(config.url && config.publishableKey),
    readyForServerWrites: Boolean(config.url && (config.serviceRoleKey || config.publishableKey))
  };
}
