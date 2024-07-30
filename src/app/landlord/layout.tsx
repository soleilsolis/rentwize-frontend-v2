'use client'

import '@/app/global.css'

import Navbar from '@/components/Navbar'
import { DefaultSkeleton } from '@/components/Skeleton'
import { useAuth } from '@/hooks/auth'

const Layout = ({ children }) => {
    //const { user } = useAuth({ middleware: 'auth' })

    return (
        <>
            <Navbar></Navbar>
            <main className="container mx-auto p-6 pt-24">
                {/* {!user ? <DefaultSkeleton /> : children} */}
                {children}
            </main>
        </>
    )
}

export default Layout
