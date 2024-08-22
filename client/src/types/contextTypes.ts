import { Session } from "@supabase/supabase-js";

interface AuthContextTypes {
  session: Session | null;
  signOut: () => void;
}

interface ThemeContextTypes {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export type { Session, AuthContextTypes, ThemeContextTypes };
