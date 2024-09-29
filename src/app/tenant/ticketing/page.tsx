'use client'
import IndexTable from '@/components/globals/IndexTable'
import { Modal } from '@/components/globals/Modal'
import {
    Avatar,
    Typography,
    Tooltip,
    IconButton,
    Button,
    Input,
    Select,
    Option,
} from '@/components/MaterialTailwind'
import {
    PencilIcon,
    PencilSquareIcon,
    PlusIcon,
} from '@heroicons/react/24/outline'
import { Drawer } from '@material-tailwind/react'
import { Metadata } from 'next'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const heading = 'Ticketing'
const subHeading = 'See All Tickets'
//const data = axios
const tableHeader = [
    'Landlord',
    'Property',
    'Date',
    'Type',
    'Urgency',
    'Actions',
]
const tableRows = [
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
        name: 'John Michael',
        email: 'john@creative-tim.com',
        property: '123, Onitsuka Tiger Village, Colorado',
        property_type: 'Bungalow',
        online: true,
        date: '23/04/18',
        type: 'sink leak',
        urgency: 'normal',
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
        name: 'John Michael',
        email: 'john@creative-tim.com',
        property: '123, Onitsuka Tiger Village, Colorado',
        property_type: 'Bungalow',
        online: false,
        date: '23/04/18',
        type: 'door knob not working',
        urgency: 'normal',
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg',
        name: 'John Michael',
        email: 'john@creative-tim.com',
        property: '123, Onitsuka Tiger Village, Colorado',
        property_type: 'Bungalow',
        online: false,
        date: '19/09/17',
        type: 'plumbing',
        urgency: 'normal',
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg',
        name: 'John Michael',
        email: 'john@creative-tim.com',
        property: '123, Onitsuka Tiger Village, Colorado',
        property_type: 'Bungalow',
        online: true,
        date: '24/12/08',
        type: 'electrical',
        urgency: 'priority',
    },
    {
        img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg',
        name: 'John Michael',
        email: 'john@creative-tim.com',
        property: '123, Onitsuka Tiger Village, Colorado',
        property_type: 'Bungalow',
        online: false,
        date: '04/10/21',
        type: 'window broken',
        urgency: 'medium',
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
    {
        label: 'Low-prio',
        value: 'low-prio',
    },
]
const controls = (
    <>
        <Modal
            label="Create Payment"
            size="sm"
            controls={null}
            buttonSize="sm"
            heading="Create Ticket"
            buttonIcon={<PlusIcon className="w-3 h-3" />}  buttonColor={undefined} buttonVariant={undefined}>
            <div className="space-y-4">
                <Input type="text" label="Property" required crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                <Select label="Type" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <Option>Plumbing</Option>
                    <Option>Renovation</Option>
                    <Option>Quick Fix</Option>
                </Select>
                <Input type="date" label="Created date" required crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                <Select label="Urgency" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <Option>Low</Option>
                    <Option>High</Option>
                    <Option>Medium</Option>
                </Select>
            </div>
        </Modal>
    </>
)

const Applications = () => {
    const router = useRouter()
    const [openRight, setOpenRight] = useState(false)
    const [selectedRow, setSelectedRow] = useState(null)
    const openDrawerRight = (row: { img: string; name: string; email: string; property: string; property_type: string; date: string; type: string; urgency: string }) => {
        setSelectedRow(row)
        setOpenRight(true)
    }

    const closeDrawerRight = () => {
        setOpenRight(false)
        setSelectedRow(null)
    }
    const tbody = tableRows.map(
        (
            {
                img,
                name,
                email,
                property,
                property_type,
                date,
                type,
                urgency,
            },
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
                            type,
                            urgency
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
                            {type}
                        </Typography>
                    </td>
                    <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            {urgency}
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
                        <Typography variant="h6" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{selectedRow.name}</Typography>
                        <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}> {selectedRow.property}</Typography>
                        <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}> {selectedRow.type}</Typography>
                        <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}> {selectedRow.date} </Typography>
                        <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{selectedRow.property_type} </Typography>
                        <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{selectedRow.urgency} </Typography>
                        <div className='flex flex-nowrap space-x-3'>
                            <Modal
                                label="Edit"
                                size="sm"
                                controls={null}
                                buttonSize="sm"
                                heading="Edit Ticket"
                                buttonIcon={<PencilSquareIcon className="w-3 h-3" />} buttonColor={undefined} buttonVariant={undefined}>
                                <div className="space-y-4">
                                    <Input
                                        type="text"
                                        label="Property"
                                        value={selectedRow.property}
                                        required crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                                    />
                                    <Select
                                        label="Type"
                                        value={selectedRow.type} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        <Option>Plumbing</Option>
                                        <Option>Renovation</Option>
                                        <Option>Quick Fix</Option>
                                    </Select>
                                    <Input
                                        type="date"
                                        label="Created date"
                                        value={selectedRow.date}
                                        required crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                                    />
                                    <Select label="Urgency" value={selectedRow.urgency} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        <Option>Low</Option>
                                        <Option>High</Option>
                                        <Option>Medium</Option>
                                    </Select>
                                </div>
                            </Modal>

                            <Button color='red' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Cancel Ticket</Button>
                        </div>

                        
                    </div>
                )}
            </Drawer>

            <IndexTable
                heading={heading}
                subHeading={subHeading}
                tableHeader={tableHeader}
                controls={controls}
                tabs={tabs}
                tbody={tbody}
            />
        </>
    )
}

export default Applications
