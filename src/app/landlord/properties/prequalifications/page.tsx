'use client'
import IndexTable from '@/components/globals/IndexTable'
import {
    Avatar,
    Typography,
    Tooltip,
    IconButton,
} from '@/components/MaterialTailwind'
import { PencilIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

const heading = 'Prequalifications'
const subHeading = 'See All Prequalifications'
//const data = axios
const tableHeader = ['Name', 'Property', 'Planned Move in Date', 'Actions']
const tableRows = [
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
        name: 'John Michael',
        email: 'john@creative-tim.com',
        property: '123, Onitsuka Tiger Village, Colorado',
        property_type: 'Studio',
        online: true,
        date: '23/04/18',
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
        name: 'Alexa Liras',
        email: 'alexa@creative-tim.com',
        property: '20 Cooper Square, New York, NY 10003, USA',
        property_type: 'Duplex',
        online: false,
        date: '23/04/18',
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg',
        name: 'Laurent Perrier',
        email: 'laurent@creative-tim.com',
        property: ' USA 2nd Street Dorm 1 E 2nd St, New York, NY 10003, USA',
        property_type: 'Condo Unit',
        online: false,
        date: '19/09/17',
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg',
        name: 'Michael Levi',
        email: 'michael@creative-tim.com',
        property: '22 Washington Square N, New York, NY 10011, USA',
        property_type: '2 Storey House',
        online: true,
        date: '24/12/08',
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg',
        name: 'Richard Gran',
        email: 'richard@creative-tim.com',
        property: '853 Broadway, New York, NY 10003, USA',
        property_type: 'Bungalow',
        online: false,
        date: '04/10/21',
    },
]
const tabs = [
    {
        label: 'All',
        value: 'all',
    },
    {
        label: 'Prospect',
        value: 'prospect',
    },
]

const Applications = () => {
    const router = useRouter()
    const table = (
        <>
            {tableRows.map(
                (
                    { img, name, email, property, property_type, online, date },
                    index,
                ) => {
                    const classes = isLast
                        ? 'p-4'
                        : 'p-4 border-b border-blue-gray-50'

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
                                <div className="flex flex-col">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        {property}
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal opacity-70" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        {property_type}
                                    </Typography>
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
                                <Tooltip content="Edit User">
                                    <IconButton
                                        variant="text"
                                        onClick={() => router.push(
                                            '/landlord/properties/prequalifications/view/1'
                                        )} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
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

    return (
        <IndexTable
            heading={heading}
            subHeading={subHeading}
            tableHeader={tableHeader}
            controls={null}
            tabs={tabs}
            tbody={table}
        />
    )
}

export default Applications
