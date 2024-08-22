import {
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { supabase } from "../services/supabase/supabase";
import { AuthContextTypes, Session } from "../types/contextTypes";


const AuthContext = createContext<AuthContextTypes | undefined>(undefined);

type Props = { children: ReactNode };

export const AuthProvider = ({ children }: Props) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const auth = supabase.auth.onAuthStateChange(async (_, session) => {
      setSession(session);
    });
    return () => {
      auth.data.subscription.unsubscribe();
    };
  }, [supabase]);

  const signOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  return (
    <AuthContext.Provider value={{ session, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};


export { AuthContext };