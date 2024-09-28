'use client'
import IndexTable from '@/components/globals/IndexTable'
import {
    Avatar,
    Typography,
    Tooltip,
    IconButton,
    Button,
} from '@/components/MaterialTailwind'
import { PencilIcon } from '@heroicons/react/24/outline'
import { Drawer } from '@material-tailwind/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

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

const Invoices = () => {
    const [openRight, setOpenRight] = useState(false)
    const [selectedRow, setSelectedRow] = useState(null)
    const openDrawerRight = row => {
        setSelectedRow(row)
        setOpenRight(true)
    }

    const closeDrawerRight = () => {
        setOpenRight(false)
        setSelectedRow(null)
    }
    const router = useRouter()
    const tbody = tableRows.map(
        (
            { img, name, email, property, property_type, date, amount },
            index,
        ) => {
            const isLast = index === tableRows.length - 1
            const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

            return (
                <tr
                    key={name}
                    className="hover:bg-gray-100 cursor-pointer"
                    onClick={() =>
                        openDrawerRight({
                            img,
                            name,
                            email,
                            property,
                            property_type,
                            date,
                            amount,
                        })
                    }>
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
                            {amount}
                        </Typography>
                    </td>
                    <td className={classes}>
                        <Tooltip content="Edit User">
                            <IconButton
                                variant="text"
                                onClick={() => router.push(
                                    '/landlord/properties/applications/view/1'
                                )} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                <PencilIcon className="h-4 w-4" />
                            </IconButton>
                        </Tooltip>
                    </td>
                </tr>
            )
        },
    )
    return (
        <>
            <Drawer
                placement="right"
                open={openRight}
                onClose={closeDrawerRight}
                className="p-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {selectedRow && (
                    <div className="space-y-4">
                    
                        <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{selectedRow.name}</Typography>
      <table className="table-auto w-full border-collapse">
        <tbody>
            <tr>
                <td className="py-2 border-b border-gray-300 text-left">Property:</td>
                <td className="py-2 border-b border-gray-300 text-right">{selectedRow.property}</td>
            </tr>
            <tr>
                <td className="py-2 border-b border-gray-300 text-left">Property Type:</td>
                <td className="py-2 border-b border-gray-300 text-right">{selectedRow.property_type}</td>
            </tr>
            <tr>
                <td className="py-2 border-b border-gray-300 text-left">Breakdown:</td>
                <td className="py-2 border-b border-gray-300 text-right">{selectedRow.amount}</td>
            </tr>
            <tr>
                <td className="py-2 border-b border-gray-300 text-left">Date:</td>
                <td className="py-2 border-b border-gray-300 text-right">{selectedRow.date}</td>
            </tr>
        </tbody>
    </table>
                        <Button
                            className="w-full"
                            color="blue"
                            variant="gradient"
                            onClick={() => router.push('/tenant/payments')} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Pay
                        </Button>
                    </div>
                )}
            </Drawer>
            <IndexTable
                heading={heading}
                subHeading={subHeading}
                tableHeader={tableHeader}
                controls={null}
                tabs={tabs}
                tbody={tbody}
            />
        </>
    )
}

export default Invoices
