import config from "../config/env";
import logger from "../utils/logger";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = config.SUPABASE_URL;
const supabaseKey: string = config.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey)
  logger("Supabase URL or Key not found in .env file", "server/db/supabase.ts");

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
