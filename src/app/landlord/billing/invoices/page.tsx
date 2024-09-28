import IndexTable from '@/components/globals/IndexTable'
import { Modal } from '@/components/globals/Modal'
import PrimaryButton from '@/components/globals/PrimaryButton'
import {
    Avatar,
    Typography,
    Tooltip,
    IconButton,
    Select,
    Option,
} from '@/components/MaterialTailwind'
import { EyeIcon, PlusIcon } from '@heroicons/react/24/outline'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'All Properties > Landlord - Leasewize',
}

const heading = 'Invoices'
const subHeading = 'See All Invoices'
//const data = axios
const tableHeader = ['#', 'Name', 'Property', 'Due Date', 'Amount', 'Actions']
const tableRows = [
    {
        number: '3',

        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
        name: 'John Michael',
        email: 'john@creative-tim.com',
        property: '123, Onitsuka Tiger Village, Colorado',
        property_type: 'Studio',
        online: true,
        date: '23/04/18',
        amount: 2500,
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
        name: 'Alexa Liras',
        email: 'alexa@creative-tim.com',
        property: '20 Cooper Square, New York, NY 10003, USA',
        property_type: 'Duplex',
        online: false,
        date: '23/04/18',
        amount: 3000,
    },
    {
        number: '3',

        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg',
        name: 'Laurent Perrier',
        email: 'laurent@creative-tim.com',
        property: ' USA 2nd Street Dorm 1 E 2nd St, New York, NY 10003, USA',
        property_type: 'Condo Unit',
        online: false,
        date: '19/09/17',
        amount: 800,
    },
    {
        number: '3',
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg',
        name: 'Michael Levi',
        email: 'michael@creative-tim.com',
        property: '22 Washington Square N, New York, NY 10011, USA',
        property_type: '2 Storey House',
        online: true,
        date: '24/12/08',
        amount: 1000,
    },
    {
        number: '3',

        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg',
        name: 'Richard Gran',
        email: 'richard@creative-tim.com',
        property: '853 Broadway, New York, NY 10003, USA',
        property_type: 'Bungalow',
        online: false,
        date: '04/10/21',
        amount: 500,
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

const table = tableRows.map(
    (
        { img, number, name, email, property, property_type, date, amount },
        index,
    ) => {
        const isLast = index === tableRows.length - 1
        const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

        return (
            <tr key={name}>
                <td className={classes}>
                    <div className="flex flex-col">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            {number}
                        </Typography>
                    </div>
                </td>
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
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        ${amount}
                    </Typography>
                </td>
                <td className={classes}>
                    <Tooltip content="View Invoice">
                        <Link href="/landlord/billing/invoices/view/1">
                            <IconButton variant="text" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                <EyeIcon className="h-4 w-4" />
                            </IconButton>
                        </Link>
                    </Tooltip>
                </td>
            </tr>
        )
    },
)

const Applications = () => {
    const controls = () => {
        const modalControls = (
            <Link href="/landlord/billing/invoices/new/1">
                <PrimaryButton children="Select" onClick={undefined} />
            </Link>
        )
        return (
            <Modal
                label="Invoice"
                size="sm"
                controls={modalControls}
                buttonSize="sm"
                heading="Select Tenant"
                buttonIcon={<PlusIcon className="w-3 h-3" />} children={undefined} buttonColor={undefined} buttonVariant={undefined}>
                <Select label="Tenant" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <Option children={''}></Option>
                </Select>
            </Modal>
        )
    }
    return (
        <IndexTable
            heading={heading}
            subHeading={subHeading}
            tableHeader={tableHeader}
            controls={controls()}
            tabs={tabs}
            tbody={table}
        />
    )
}

export default Applications
