'use client'

import '@/app/global.css'
import Breadcrumb from '@/components/globals/Breadcrumb'
import NotificationAlert from '@/components/globals/NotificationAlert'
import Loading from '@/app/(app)/Loading'

import Navbar from '@/components/Navbar'
import {
    HomeIcon,
    PresentationChartBarIcon,
    ReceiptPercentIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline'
import { useAuth } from '@/hooks/auth'

const menuLists = [
    [
        {
            name: 'Dashboard',
            icon: PresentationChartBarIcon,
            link: '/tenant',
        },
        {
            name: 'Payment',
            icon: PresentationChartBarIcon,
            link: '/tenant/payments',
        },
        {
            name: 'Invoices',
            icon: HomeIcon,
            link: '/tenant/invoices',
        },
        {
            name: 'Ticketing',
            icon: ReceiptPercentIcon,
            link: '/tenant/ticketing',
        },
    ],
]

const Layout = ({ children }: { children: React.ReactNode }) => {

    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Navbar title={null} menuLists={menuLists}></Navbar>
            <main className="container mx-auto p-6 py-24 space-y-4 min-h-screen">
                <Breadcrumb></Breadcrumb>
                {children}
    

            </main>
            <NotificationAlert />
        </>
    )
}

export default Layout
