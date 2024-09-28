'use client'

import { PencilIcon, PlusIcon } from '@heroicons/react/24/solid'
import {
    Typography,
    Button,
    Chip,
    Avatar,
    IconButton,
    Tooltip,
} from '@/components/MaterialTailwind'
import { useEffect, useState } from 'react'

//import properties from './properties.json'
import Link from 'next/link'
import IndexTable from '@/components/globals/IndexTable'
import { useProperty } from '@/hooks/property'

import { useAuth } from '@/hooks/auth'


const tableHeader = ['Property', 'Price', 'Type', 'Status', 'Created', '']

const controls = (
    <>
        <Button variant="outlined" size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            view all
        </Button>
        <Link href="/landlord/properties/new">
            <Button
                className="flex items-center justify-center gap-3"
                size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <PlusIcon strokeWidth={2} className="h-4 w-4" /> Add Property
            </Button>
        </Link>
    </>
)

const Properties = () => {
    const [properties, setProperties] = useState([])

    const tbody = properties.map(
        ({ img, name, price, email, job, org, occupied, date }, index) => {
            const isLast = index === properties.length - 1
            const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

            return (
                <tr key={name}>
                    <td className={classes}>
                        <div className="flex items-center gap-3">
                            <Avatar src={img} alt={name} size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                            <div className="flex flex-col">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    {name}
                                </Typography>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal opacity-70" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    {email}
                                </Typography>
                            </div>
                        </div>
                    </td>
                    <td className={classes}>
                        <div className="flex items-center gap-3">
                            <Typography
                                variant="large"
                                color="blue-gray"
                                className="font-bold">
                                ${price}
                            </Typography>
                        </div>
                    </td>
                    <td className={classes}>
                        <div className="flex flex-col">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                {job}
                            </Typography>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                {org}
                            </Typography>
                        </div>
                    </td>
                    <td className={classes}>
                        <div className="w-max">
                            <Chip
                                variant="ghost"
                                size="sm"
                                value={occupied ? 'occupied' : 'vacant'}
                                color={!occupied ? 'green' : 'blue-gray'}
                            />
                        </div>
                    </td>
                    <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            {date}
                        </Typography>
                    </td>
                    <td className={classes}>
                        <Tooltip content="Edit Property">
                            <Link href="/landlord/properties/view/1">
                                <IconButton variant="text" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    <PencilIcon className="h-4 w-4" />
                                </IconButton>
                            </Link>
                        </Tooltip>
                    </td>
                </tr>
            )
        },
    )

    const { indexProperties } = useProperty()

    useEffect(() => {
        indexProperties({
            setProperties
        })
    }, [])

    return (
        <IndexTable
            heading="Properties"
            subHeading="See All of Your Properties"
            tableHeader={tableHeader}
            controls={controls}
            tabs={tabs}
            tbody={tbody}
        />
    )
}

export default Properties
