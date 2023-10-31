import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { ReactNode, createContext } from "react";

interface CustomSession extends Session {
  provider: AuthProviders
}

export const defaultValue: {
  session: CustomSession
  status: "authenticated" | "loading" | "unauthenticated",
  update: (data?: any) => Promise<Session | null>
} = {
  session: {
    expires: new Date().toISOString(),
    provider: 'naver'
  },
  status: 'loading',
  update: async (data) => null
}

interface Props {
  children: ReactNode
}

export const AuthContext = createContext(defaultValue)

export default function AuthProvider({ children }: Props) {
  const { data, status, update } = useSession()
  if( status === 'unauthenticated' ) {
    return <></>
  }
  return (
    <AuthContext.Provider value={{
      session: data as CustomSession,
      status,
      update
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}