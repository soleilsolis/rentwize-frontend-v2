'use client'

import '@/app/global.css'
import Breadcrumb from '@/components/globals/Breadcrumb'

import Navbar from '@/components/Navbar'
import { DefaultSkeleton } from '@/components/Skeleton'

import { useAuth } from '@/hooks/auth'

import { useParams } from 'next/navigation'

const Layout = ({ children }) => {
    //const { user } = useAuth({ middleware: 'auth' })

    return (
        <>
            <Navbar></Navbar>
            <main className="container mx-auto p-6 py-24 space-y-4">
                <Breadcrumb></Breadcrumb>

                {/* {!user ? <DefaultSkeleton /> : children} */}
                {children}
            </main>
        </>
    )
}

export default Layout
