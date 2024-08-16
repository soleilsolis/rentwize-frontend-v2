'use client'

import Information from '@/components/locals/Landlord/Tenants/View/Information'
import Invoices from '@/components/locals/Landlord/Tenants/View/Invoices'
import Stats from '@/components/locals/Landlord/Tenants/View/Stats'
import Actions from '@/components/locals/Landlord/Tenants/View/Actions'
import Payments from '@/components/locals/Landlord/Tenants/View/Payments'
import { Typography } from '@/components/MaterialTailwind'
import {
    BanknotesIcon,
    PresentationChartLineIcon,
    CogIcon,
    DocumentCurrencyDollarIcon,
    InformationCircleIcon,
} from '@heroicons/react/24/outline'
import { Chip, List, ListItem } from '@material-tailwind/react'
import { Metadata } from 'next'
import Link from 'next/link'
import { useState } from 'react'

const ViewTenant = () => {
    const [selected, setSelected] = useState(1)
    const setSelectedItem = value => setSelected(value)

    const activePage = useState(0)

    const pages = [
        {
            label: 'Information',
            icon: InformationCircleIcon,
            content: <Information />,
        },
        {
            label: 'Stats',
            icon: PresentationChartLineIcon,
            content: <Stats />,
            notification: {
                count: 0,
                color: 'red',
            },
        },
        {
            label: 'Invoices',
            icon: DocumentCurrencyDollarIcon,
            content: <Invoices />,
            notification: {
                count: 5,
                color: 'red',
            },
        },
        {
            label: 'Payments',
            icon: BanknotesIcon,
            content: <Payments />,
            notification: {
                count: 0,
                color: 'red',
            },
        },
        {
            label: 'Actions',
            icon: CogIcon,
            content: <Actions />,
            notification: {
                count: 0,
                color: 'red',
            },
        },
    ]

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 min-h-100 h-100 gap-8">
            <div className="space-y-4">
                <img
                    className="object-cover object-center w-full aspect-1 rounded-lg"
                    src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
                    alt=""
                />

                <List className="p-0">
                    {pages.map((page, index) => {
                        return (
                            <a href="#" className="text-initial">
                                <ListItem
                                    className="gap-2"
                                    selected={selected === index + 1}
                                    onClick={() => setSelectedItem(index + 1)}>
                                    {page.icon ? (
                                        <page.icon className="w-6 h-6" />
                                    ) : (
                                        ''
                                    )}
                                    {page?.label}

                                    {page?.notification &&
                                    page.notification.count ? (
                                        <Chip
                                            color="red"
                                            value={page.notification.count}
                                        />
                                    ) : (
                                        ''
                                    )}
                                </ListItem>
                            </a>
                        )
                    })}
                </List>
            </div>

            <div className="lg:col-span-3 space-y-2">
                <Typography
                    variant="h6"
                    color="gray"
                    className="mb-4 uppercase">
                    Tenant
                </Typography>
                <Typography variant="h1">Hissune Carly</Typography>

                <section className="space-y-8 pt-4">
                    {pages[selected - 1].content}
                </section>
            </div>
        </div>
    )
}

export default ViewTenant
