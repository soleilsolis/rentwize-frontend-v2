'use client'
import IndexTable from '@/components/globals/IndexTable'
import {
    Avatar,
    Typography,
    Tooltip,
    IconButton,
    Button,
} from '@/components/MaterialTailwind'
import { PencilIcon, PlusIcon } from '@heroicons/react/24/outline'
import { Metadata } from 'next'
import { useRouter } from 'next/navigation'

const heading = 'Payments'
const subHeading = 'See All Payments'
//const data = axios
const tableHeader = ['Name', 'Property', 'Date', 'Amount', 'Actions']
const tableRows = [
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
        name: 'John Michael',
        email: 'john@creative-tim.com',
        property: '123, Onitsuka Tiger Village, Colorado',
        property_type: 'Bungalow',
        online: true,
        date: '23/04/18',
        amount: '$300',
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
        name: 'John Michael',
        email: 'john@creative-tim.com',
        property: '123, Onitsuka Tiger Village, Colorado',
        property_type: 'Bungalow',
        online: false,
        date: '23/04/18',
        amount: '$300',
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg',
        name: 'John Michael',
        email: 'john@creative-tim.com',
        property: '123, Onitsuka Tiger Village, Colorado',
        property_type: 'Bungalow',
        online: false,
        date: '19/09/17',
        amount: '$300',
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg',
        name: 'John Michael',
        email: 'john@creative-tim.com',
        property: '123, Onitsuka Tiger Village, Colorado',
        property_type: 'Bungalow',
        online: true,
        date: '24/12/08',
        amount: '$300',
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg',
        name: 'John Michael',
        email: 'john@creative-tim.com',
        property: '123, Onitsuka Tiger Village, Colorado',
        property_type: 'Bungalow',
        online: false,
        date: '04/10/21',
        amount: '$300',
    },
]
const tabs = [
    {
        label: 'All',
        value: 'all',
    },
    {
        label: 'Recent',
        value: 'recent',
    },
    {
        label: 'Oldest',
        value: 'oldest',
    },
]
const controls = (
    <Button className="flex items-center gap-3" size="sm">
        <PlusIcon strokeWidth={2} className="h-4 w-4" /> Create Payment
    </Button>
)

const Applications = () => {
    const router = useRouter()
    const tbody = tableRows.map(
        (
            { img, name, email, property, property_type, online, date, amount },
            index,
        ) => {
            const isLast = index === tableRows.length - 1
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
                        <div className="flex flex-col">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal">
                                {property}
                            </Typography>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70">
                                {property_type}
                            </Typography>
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
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal">
                            {amount}
                        </Typography>
                    </td>
                    <td className={classes}>
                        <Tooltip content="Edit User">
                            <IconButton
                                variant="text"
                                onClick={() =>
                                    router.push(
                                        '/landlord/properties/applications/view/1',
                                    )
                                }>
                                <PencilIcon className="h-4 w-4" />
                            </IconButton>
                        </Tooltip>
                    </td>
                </tr>
            )
        },
    )
    return (
        <IndexTable
            heading={heading}
            subHeading={subHeading}
            tableHeader={tableHeader}
            controls={controls}
            tabs={tabs}
            tbody={tbody}
        />
    )
}

export default Applications
