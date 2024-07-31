
import { Metadata } from 'next'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { PencilIcon, PlusIcon } from '@heroicons/react/24/solid'
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
} from '@/components/MaterialTailwind'

import properties from './properties.json'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

export const metadata: Metadata = {
    title: 'All Properties > Landlord - Rentwize',
}

const TABS = [
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
]

const TABLE_HEAD = ['Property', 'Price', 'Type', 'Status', 'Created', '']

const TABLE_ROWS = properties

const Properties = () => {
    return (
        <>
            <Card className="h-full w-md">
                <CardHeader
                    floated={false}
                    shadow={false}
                    className="rounded-none">
                    <div className="mb-8 md:flex items-center justify-between gap-8">
                        <div>
                            <Typography
                                variant="h1"
                                className="mb-6 font-semibold text-2xl text-gray-900">
                                Property List
                            </Typography>
                            <Typography
                                color="gray"
                                className="mt-1 font-normal">
                                See information about all properties
                            </Typography>
                        </div>
                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                            <Button variant="outlined" size="sm">
                                view all
                            </Button>
                            <Button
                                className="flex items-center gap-3"
                                size="sm">
                                <PlusIcon strokeWidth={2} className="h-4 w-4" />{' '}
                                Add Property
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <Tabs value="all" className="w-full md:w-max">
                            <TabsHeader>
                                {TABS.map(({ label, value }) => (
                                    <Tab key={value} value={value}>
                                        &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                    </Tab>
                                ))}
                            </TabsHeader>
                        </Tabs>
                        <div className="w-full md:w-72">
                            <Input
                                label="Search"
                                icon={
                                    <MagnifyingGlassIcon className="h-5 w-5" />
                                }
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="overflow-scroll px-0">
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map(head => (
                                    <th
                                        key={head}
                                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70">
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_ROWS.map(
                                (
                                    {
                                        img,
                                        name,
                                        price,
                                        email,
                                        job,
                                        org,
                                        occupied,
                                        date,
                                    },
                                    index,
                                ) => {
                                    const isLast =
                                        index === TABLE_ROWS.length - 1
                                    const classes = isLast
                                        ? 'p-4'
                                        : 'p-4 border-b border-blue-gray-50'

                                    return (
                                        <tr key={name}>
                                            <td className={classes}>
                                                <div className="flex items-center gap-3">
                                                    <Avatar
                                                        src={img}
                                                        alt={name}
                                                        size="sm"
                                                    />
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
                                                        value={
                                                            occupied
                                                                ? 'occupied'
                                                                : 'vacant'
                                                        }
                                                        color={
                                                            !occupied
                                                                ? 'green'
                                                                : 'blue-gray'
                                                        }
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
                                                    <Link href="properties/1">
                                                        <IconButton variant="text">
                                                            <PencilIcon className="h-4 w-4" />
                                                        </IconButton>
                                                    </Link>
                                                </Tooltip>
                                            </td>
                                        </tr>
                                    )
                                },
                            )}
                        </tbody>
                    </table>
                </CardBody>
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal">
                        Page 1 of 10
                    </Typography>
                    <div className="flex gap-2">
                        <Button variant="outlined" size="sm">
                            Previous
                        </Button>
                        <Button variant="outlined" size="sm">
                            Next
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}

export default Properties
