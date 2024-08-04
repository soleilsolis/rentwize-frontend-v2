'use client'

import Information from '@/components/locals/Landlord/Tenants/View/Information'
import Invoices from '@/components/locals/Landlord/Tenants/View/Invoices'
import { Typography } from '@/components/MaterialTailwind'
import {
    BanknotesIcon,
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
            content: <></>,
            notification: {
                count: 0,
                color: 'red',
            },
        },
        {
            label: 'Actions',
            icon: CogIcon,
            content: <></>,
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
                    src="https://scontent.fmnl38-1.fna.fbcdn.net/v/t1.6435-9/58381640_2263950487205981_712399563893243904_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEMtzw7l_ZVIcmjj-e6eEJEAoXmJhkY9E8CheYmGRj0T1cKAS52F4ZfPOITYShrcFgURIDA-8e2vB4JfVCkgdA5&_nc_ohc=CJr3ePG71nUQ7kNvgGXFjA6&_nc_ht=scontent.fmnl38-1.fna&oh=00_AYCc2CmcsV9GGOUHW9XEquarYxYdy9MdCuZ5V9tQVsmFnw&oe=66D6DDD4"
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
                <Typography variant="h1">Hilgen Joy Rabot</Typography>
      

                <section className="space-y-8 pt-4">
                    {pages[selected - 1].content}
                </section>
            </div>
        </div>
    )
}

export default ViewTenant
