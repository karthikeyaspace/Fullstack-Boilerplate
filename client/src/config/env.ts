const config: { [key: string]: any } = {
  //frontend url
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",
  // backend api url
  API_URL: process.env.API_URL,

  // supabase config for auth in frontend (optional)
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  SUPABASE_TABLE_NAME: process.env.SUPABASE_TABLE_NAME,
};

export default config;
