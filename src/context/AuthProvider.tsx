import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export const defaultValue: {
  
} = {
  
}

interface Props {
  children: ReactNode
}

export default function AuthProvider({ children }: Props) {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}