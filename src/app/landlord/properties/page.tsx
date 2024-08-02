import { Metadata } from 'next'

import { PencilIcon, PlusIcon } from '@heroicons/react/24/solid'
import {
    Typography,
    Button,
    Chip,
    Avatar,
    IconButton,
    Tooltip,
} from '@/components/MaterialTailwind'

import properties from './properties.json'
import Link from 'next/link'
import IndexTable from '@/components/globals/IndexTable'

export const metadata: Metadata = {
    title: 'All Properties > Landlord - Rentwize',
}

const tabs = [
    {
        label: 'All',
        value: 'all',
    },
    {
        label: 'Vacant',
        value: false,
    },
    {
        label: 'Occupied',
        value: true,
    },
    {
        label: 'Unlisted',
        value: true,
    },
]

const heading = 'Properties'
const subHeading = 'See All of Your Properties'

const tableHeader = ['Property', 'Price', 'Type', 'Status', 'Created', '']

const data = properties

const tbody = data.map(
    ({ img, name, price, email, job, org, occupied, date }, index) => {
        const isLast = index === data.length - 1
        const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

        return (
            <tr key={name}>
                <td className={classes}>
                    <div className="flex items-center gap-3">
                        <Avatar src={img} alt={name} size="sm" />
                        <div className="flex flex-col">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal">
                                {name}
                            </Typography>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70">
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
                            className="font-normal">
                            {job}
                        </Typography>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70">
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
                        className="font-normal">
                        {date}
                    </Typography>
                </td>
                <td className={classes}>
                    <Tooltip content="Edit Property">
                        <Link href="/landlord/properties/view/1">
                            <IconButton variant="text">
                                <PencilIcon className="h-4 w-4" />
                            </IconButton>
                        </Link>
                    </Tooltip>
                </td>
            </tr>
        )
    },
)

const controls = (
    <>
        <Button variant="outlined" size="sm">
            view all
        </Button>
        <Link href="/landlord/properties/new">
            <Button
                className="flex items-center justify-center gap-3"
                size="sm">
                <PlusIcon strokeWidth={2} className="h-4 w-4" /> Add Property
            </Button>
        </Link>
    </>
)

const Properties = () => (
    <IndexTable
        heading={heading}
        subHeading={subHeading}
        tableHeader={tableHeader}
        controls={controls}
        tabs={tabs}
        tbody={tbody}
    />
)

export default Properties
