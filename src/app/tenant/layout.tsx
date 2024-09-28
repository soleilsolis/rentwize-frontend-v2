'use client'

import '@/app/global.css'
import Breadcrumb from '@/components/globals/Breadcrumb'
import NotificationAlert from '@/components/globals/NotificationAlert'

import Navbar from '@/components/Navbar'
import {
    BanknotesIcon,
    HomeIcon,
    PresentationChartBarIcon,
    ReceiptPercentIcon,

    ShieldCheckIcon,

} from '@heroicons/react/24/outline'
import { useAuth } from '@/hooks/auth'
import NotFoundPage from '@/components/not-found'

const menuLists = [
    [
        {
            name: 'Dashboard',
            icon: PresentationChartBarIcon,
            link: '/tenant',
        },
        {
            name: 'Payment',
            icon: BanknotesIcon,
            link: '/tenant/payments',
        },
        {
            name: 'Invoices',
            icon: HomeIcon,
            link: '/tenant/invoices',
        },
        {
            name: 'Insurance',
            icon: ShieldCheckIcon,
            link: '/tenant/insurance',
        },
        {
            name: 'Ticketing',
            icon: ReceiptPercentIcon,
            link: '/tenant/ticketing',
        },
    ],
]

const Layout = ({ children }: { children: React.ReactNode }) => {

    const { user } = useAuth({ middleware: 'auth' })

    return user?.type !== "tenant" ? <NotFoundPage />  : (
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
