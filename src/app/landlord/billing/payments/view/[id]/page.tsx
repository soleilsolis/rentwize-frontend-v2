'use client'
import { ClassContext } from '@/components/contexts/ClassContext'
import AccordionGlobal from '@/components/globals/AccordionGlobal'
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
    Button,
    Accordion,
} from '@material-tailwind/react'
import { useRouter } from 'next/navigation'

const TABLE_HEAD = ['Property', 'Qty', 'Total']

const TABLE_ROWS = [
    {
        label: '5 Mariveles St., Highway Hills, Mandaluyong',
        quantity: 1,
        value: 5000,
    },
]
const ViewPayment = () => {
    const router = useRouter()
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
                <Card>
                    <CardBody className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="space-y-2 col-span-2">
                                <Typography
                                    variant="h4"
                                    as="h1"
                                    color="black"
                                    className="flex items-center gap-2">
                                    Payment #00001
                                    <Chip color="blue" value="Partial" />
                                </Typography>
                                <div className="flex items-center gap-4">
                                    <Avatar
                                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                                        alt="avatar"
                                        size="sm"
                                    />
                                    <div>
                                        <Typography variant="h6">
                                            Xuan Ming
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            color="gray"
                                            className="font-normal">
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
                                        icon={<EnvelopeIcon className="w-5" />}
                                    />
                                    <PrimaryButton
                                        variant="text"
                                        icon={
                                            <ArrowDownTrayIcon className="w-5" />
                                        }
                                    />

                                    <Menu>
                                        <MenuHandler>
                                            <PrimaryButton
                                                variant="text"
                                                icon={
                                                    <EllipsisHorizontalIcon className="w-5" />
                                                }
                                            />
                                        </MenuHandler>
                                        <MenuList>
                                            <MenuItem>Menu Item 1</MenuItem>
                                            <MenuItem>Menu Item 2</MenuItem>
                                            <MenuItem>Menu Item 3</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </ClassContext.Provider>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Typography variant="paragraph">
                                <span>Sender</span>: Blissful Homes, LLC
                            </Typography>

                            <table className="w-full table-auto text-right">
                                <thead>
                                    <tr>
                                        {TABLE_HEAD.map(head => (
                                            <th
                                                key={head}
                                                className="border-b border-blue-gray-100 p-4">
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
                                <tbody className="text-right">
                                    {TABLE_ROWS.map(
                                        ({ label, quantity, value }, index) => {
                                            const isLast =
                                                index === TABLE_ROWS.length - 1
                                            const classes = isLast
                                                ? 'p-4 border-b'
                                                : 'p-4 border-b border-blue-gray-50'

                                            return (
                                                <tr key={label}>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal">
                                                            {label}
                                                        </Typography>
                                                    </td>
                                                    <td
                                                        className={`${classes} bg-blue-gray-50/50`}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal">
                                                            {quantity}
                                                        </Typography>
                                                    </td>
                                                    <td className={classes}>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-semibold tracking-wider">
                                                            ${value.toFixed(2)}
                                                        </Typography>
                                                    </td>
                                                </tr>
                                            )
                                        },
                                    )}

                                    <tr>
                                        <td className="p-4"></td>
                                        <td className="p-4 border-b"></td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <Typography variant="small">
                                                Subtotal
                                            </Typography>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-semibold tracking-wider">
                                                $5000.00
                                            </Typography>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td className="border-b"></td>
                                        <td className="p-4 border-b border-blue-gray-50">
                                            <Typography variant="small">
                                                TOTAL PRICE
                                            </Typography>
                                            <Typography
                                                variant="h5"
                                                color="blue"
                                                className="font-medium tracking-wider">
                                                $5000.00
                                            </Typography>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td className="p-4">
                                            <Typography variant="small">
                                                AMOUNT DUE
                                            </Typography>
                                            <Typography
                                                variant="h5"
                                                color="blue"
                                                className="font-medium tracking-wider">
                                                $5000.00
                                            </Typography>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </div>

            <div className="space-y-8">
                <Card className='h-full'>
                    <CardBody className="space-y-4">
                        <Typography variant="h6" as="h2" className="uppercase">
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
        </section>
    )
}

export default ViewPayment
