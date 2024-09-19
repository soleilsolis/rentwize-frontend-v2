"use client"
import { useAuth } from "@/hooks/auth"
import { useRouter } from "next/navigation"

const Auth = ({children}) => {
    const { user } = useAuth({
        middleware: 'guest'
    })
    
    const router = useRouter()
    
    return  !user ? children : router.push(`/${user?.type}`)
}

export default Auth