'use client'
import { ClassContext } from '@/components/contexts/ClassContext'
import PrimaryButton from '@/components/globals/PrimaryButton'
import {
    ArrowDownTrayIcon,
    EllipsisHorizontalIcon,
    EnvelopeIcon,
} from '@heroicons/react/24/outline'
import {
    Avatar,
    Card,
    CardBody,
    Chip,
    Typography,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Textarea,
} from '@material-tailwind/react'
import { useRouter } from 'next/navigation'


const ViewPayment = () => {
    const router = useRouter()
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
                <Card placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <CardBody className="space-y-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="space-y-2 col-span-2">
                                <Typography
                                    variant="h4"
                                    as="h1"
                                    color="black"
                                    className="flex items-center gap-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    Payment #00001
                                    <Chip color="yellow" value="Unpaid" />
                                    <Chip color="blue" value="Partial" />
                                    <Chip color="gray" value="Paid" />
                                </Typography>
                                <div className="flex items-center gap-4">
                                    <Avatar
                                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                                        alt="avatar"
                                        size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                                    />
                                    <div>
                                        <Typography variant="h6" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                            Xuan Ming
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            color="gray"
                                            className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                            ID: 1
                                        </Typography>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <ClassContext.Provider
                                    value={'h-min rounded-full aspect-1 p-2'}>
                                    <PrimaryButton
                                        variant="text"
                                        icon={<EnvelopeIcon className="w-5" />} children={undefined} onClick={undefined}                                    />
                                    <PrimaryButton
                                        variant="text"
                                        icon={<ArrowDownTrayIcon className="w-5" />} children={undefined} onClick={undefined}                                    />

                                    <Menu>
                                        <MenuHandler>
                                            <PrimaryButton
                                                variant="text"
                                                icon={<EllipsisHorizontalIcon className="w-5" />} children={undefined} onClick={undefined}                                            />
                                        </MenuHandler>
                                        <MenuList placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                            <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Menu Item 1</MenuItem>
                                            <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Menu Item 2</MenuItem>
                                            <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Menu Item 3</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </ClassContext.Provider>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Typography variant="paragraph" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Sender: <strong>Blissful Homes, LLC</strong>
                            </Typography>
                            <Typography variant="paragraph" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Method: <strong>Credit Card</strong>
                            </Typography>
                            <Typography variant="paragraph" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Amount: <strong>$5,000.00</strong>
                            </Typography>


                         
                        </div>
                    </CardBody>
                </Card>
            </div>

            <div className="space-y-8">
                <Card className='h-full' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <CardBody className="space-y-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <Typography variant="h6" as="h2" className="uppercase" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Invoices
                        </Typography>

                        <table className="w-full text-left space-y-4">
                            <thead>
                                <tr>
                                    <th className="uppercase font-normal text-xs py-2 border-b border-blue-gray-100">
                                        Invoice Number
                                    </th>
                                    <th className="uppercase font-normal text-xs py-2 border-b border-blue-gray-100">
                                        Total
                                    </th>
                                    <th className="uppercase font-normal text-xs py-2 border-b border-blue-gray-100 text-right">
                                        Payment Amount
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="mt-4">
                                <tr
                                    className="hover:bg-gray-100"
                                    onClick={() =>
                                        router.push(
                                            '/landlord/billing/invoices/view/1',
                                        )
                                    }>
                                    <td className="border-r-[1px] border-blue-gray-100">
                                        1 Aug 2024
                                    </td>
                                    <td className="border-r-[1px] pl-2 border-blue-gray-100">
                                        Credit Card
                                    </td>
                                    <td className="text-right">$55.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </CardBody>
                </Card>
            </div>
            <div className='lg:col-span-2'>
                <Card placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <CardBody className='space-y-2' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <Typography as="h2" variant='h6' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>NOTES</Typography>
                        <Textarea label='Add notes here...' onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}></Textarea>
                    </CardBody>
                </Card>
            </div>
        </section>
    )
}

export default ViewPayment
