'use client'

import '@/app/global.css'
import Breadcrumb from '@/components/globals/Breadcrumb'

import Navbar from '@/components/Navbar'
import NotFoundPage from '@/components/not-found'
import { DefaultSkeleton } from '@/components/Skeleton'

import { useAuth } from '@/hooks/auth'
import {
    HomeIcon,
    PresentationChartBarIcon,
    ReceiptPercentIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline'

import { useParams } from 'next/navigation'

const menuLists = [
    [
        {
            name: 'Dashboard',
            icon: PresentationChartBarIcon,
            link: '/landlord',
        },
        {
            name: 'Properties',
            icon: HomeIcon,
            items: [
                {
                    name: 'All Properties',
                    link: '/landlord/properties',
                },
                {
                    name: 'Applications',
                    link: '/landlord/properties/applications',
                },

                {
                    name: 'Prequalifications',
                    link: '/landlord/properties/prequalifications',
                },

                {
                    name: 'Maintenance',
                    link: '/landlord/properties/maintenance',
                },
            ],
        },
        {
            name: 'Tenants',
            icon: UserGroupIcon,
            items: [
                {
                    name: 'All Tenants',
                    link: '/landlord/tenants',
                },

                {
                    name: 'Maintenance',
                    link: '/landlord/maintenance',
                },
            ],
        },
        {
            name: 'Billing',
            icon: ReceiptPercentIcon,
            items: [
                {
                    name: 'Invoices',
                    link: '/landlord/billing/invoices',
                },

                {
                    name: 'Payments',
                    link: '/landlord/billing/payments',
                },
            ],
        },
    ],
]

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth({ middleware: 'auth' })

    return user?.type !== 'landlord' ? <NotFoundPage /> : (
        <>
            <Navbar title={null} menuLists={menuLists}></Navbar>
            <div className="container mx-auto p-6 py-24 space-y-4">
                <Breadcrumb></Breadcrumb>

                {/* {!user ? <DefaultSkeleton /> : children} */}
                <main>{children}</main>
            </div>
        </>
    )
}

export default Layout
