import IndexTable from '@/components/globals/IndexTable'
import {
    Button,
    Avatar,
    Typography,
    Tooltip,
    IconButton,
} from '@/components/MaterialTailwind'
import { PencilIcon, PlusIcon } from '@heroicons/react/24/outline'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'All Properties > Landlord - Rentwize',
}

const heading = 'Invoices'
const subHeading = 'See All Invoices'
//const data = axios
const tableHeader = ['Name', 'Property', 'Due Date', 'Amount', 'Actions']
const tableRows = [
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
        name: 'John Michael',
        email: 'john@creative-tim.com',
        property: '123, Onitsuka Tiger Village, Colorado',
        property_type: 'Studio',
        online: true,
        date: '23/04/18',
        amount: 2500
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
        name: 'Alexa Liras',
        email: 'alexa@creative-tim.com',
        property: '20 Cooper Square, New York, NY 10003, USA',
        property_type: 'Duplex',
        online: false,
        date: '23/04/18',
        amount: 3000
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg',
        name: 'Laurent Perrier',
        email: 'laurent@creative-tim.com',
        property: ' USA 2nd Street Dorm 1 E 2nd St, New York, NY 10003, USA',
        property_type: 'Condo Unit',
        online: false,
        date: '19/09/17',
        amount: 800
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg',
        name: 'Michael Levi',
        email: 'michael@creative-tim.com',
        property: '22 Washington Square N, New York, NY 10011, USA',
        property_type: '2 Storey House',
        online: true,
        date: '24/12/08',
        amount: 1000
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg',
        name: 'Richard Gran',
        email: 'richard@creative-tim.com',
        property: '853 Broadway, New York, NY 10003, USA',
        property_type: 'Bungalow',
        online: false,
        date: '04/10/21',
        amount: 500
    },
]
const tabs = [
    {
        label: 'All',
        value: 'all',
    },
    {
        label: 'Overdue',
        value: 'overdue',
    },
]

const table = (
    <>
        {tableRows.map(
            (
                { img, name, email, property, property_type, online, date, amount },
                index,
            ) => {
                const isLast = index === tableRows.length - 1
                const classes = isLast
                    ? 'p-4'
                    : 'p-4 border-b border-blue-gray-50'

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
                                ${amount}
                            </Typography>
                        </td>
                        <td className={classes}>
                            <Tooltip content="Edit User">
                                <IconButton variant="text">
                                    <PencilIcon className="h-4 w-4" />
                                </IconButton>
                            </Tooltip>
                        </td>
                    </tr>
                )
            },
        )}
    </>
)

const Applications = () => (
    <IndexTable
        heading={heading}
        subHeading={subHeading}
        tableHeader={tableHeader}
        controls={null}
        tabs={tabs}
        tbody={table}
    />
)

export default Applications
