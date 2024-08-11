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

const heading = 'Maintenance'
const subHeading = 'See All Jobs'
//const data = axios
const tableHeader = ['Contractor', 'Property', 'Schedule', 'Type', 'Actions']
const tableRows = [
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
        name: 'John Michael Corp.',
        email: 'john@creative-tim.com',
        property: '123, Onitsuka Tiger Village, Colorado',
        property_type: 'Studio',
        online: true,
        date: '23/04/18',
        job: 'Plumbing'

    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
        name: 'Alexa Corp',
        email: 'alexa@creative-tim.com',
        property: '20 Cooper Square, New York, NY 10003, USA',
        property_type: 'Duplex',
        online: false,
        date: '23/04/18',
        job: 'Plumbing'
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg',
        name: 'Laurent Corp',
        email: 'laurent@creative-tim.com',
        property: ' USA 2nd Street Dorm 1 E 2nd St, New York, NY 10003, USA',
        property_type: 'Condo Unit',
        online: false,
        date: '19/09/17',
        job: 'Finishing'
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg',
        name: 'Michael Builders',
        email: 'michael@creative-tim.com',
        property: '22 Washington Square N, New York, NY 10011, USA',
        property_type: '2 Storey House',
        online: true,
        date: '24/12/08',
        job: 'Repaint'
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg',
        name: 'Richard The Builder',
        email: 'richard@creative-tim.com',
        property: '853 Broadway, New York, NY 10003, USA',
        property_type: 'Bungalow',
        online: false,
        date: '04/10/21',
        job: 'Install door lock security'
    },
]
const tabs = [
    {
        label: 'All',
        value: 'all',
    },
    {
        label: 'Urgent',
        value: 'urgent',
    },

]

const controls = (
    <Button className="flex items-center gap-3" size="sm">
        <PlusIcon strokeWidth={2} className="h-4 w-4" /> Request Job
    </Button>
)

const table = (
    <>
        {tableRows.map(
            (
                { img, name, email, property, property_type, online, date, job },
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
                                {job}
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
        controls={controls}
        tabs={tabs}
        tbody={table}
    />
)

export default Applications
