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
const ViewInvoice = () => {
    const router = useRouter()
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
                <Card>
                    <CardBody className="space-y-4">
                    <Typography variant="h3" as="h4" className="">
                            Policy Holder's Information
                        </Typography>
                        <div className="grid grid-cols-2">
                            <Typography variant="h5" as="h4" className="">
                                Policy Holder:
                            </Typography>
                            <Typography variant="h4" as="h5" className="">
                                Xuan Ming
                            </Typography>
                        </div>
                        <div className="grid grid-cols-2">
                            <Typography variant="h5" as="h4" className="">
                                Property Address:
                            </Typography>
                            <Typography variant="h4" as="h5" className="">
                                785 Onitsuka Tiger Vilalge Davao
                            </Typography>
                        </div>
                        <table className="table-auto w-full">
                            <thead>
                                <Typography variant="h4" as="h5">
                                    Coverages:
                                </Typography>
                            </thead>
                            <tbody className="text-center">
                                <th>Coverages</th>
                                <th>Limits</th>

                                <tr>
                                    <td>Dwelling</td>
                                    <td>$450,000</td>
                                </tr>
                                <tr>
                                    <td>Other Structures</td>
                                    <td>$45,000</td>
                                </tr>
                                <tr>
                                    <td>Personal Property</td>
                                    <td>$225,000</td>
                                </tr>
                                <tr>
                                    <td>Loss Of Use</td>
                                    <td>$90,000</td>
                                </tr>
                                <tr>
                                    <td>Liability</td>
                                    <td>$300,000 each occurence</td>
                                </tr>
                                <tr>
                                    <td>Medical</td>
                                    <td>$1,000 each</td>
                                </tr>
                            </tbody>
                        </table>
                    </CardBody>
                </Card>
            </div>

            <div className="space-y-8">
                <Card className="h-full">
                    <CardBody className="space-y-4">
                        <Typography variant="h3" as="h4" className="">
                            Insurance Company's Information
                        </Typography>
                        <div className="grid grid-cols-2">
                            <Typography variant="h5" as="h4" className="">
                                Address:
                            </Typography>
                            <Typography variant="h4" as="h5" className="">
                                2234 Makaturing Mandaluyong City
                            </Typography>
                        </div>
                        <div className="grid grid-cols-2">
                            <Typography variant="h5" as="h4" className="">
                                Contact Number:
                            </Typography>
                            <Typography variant="h4" as="h5" className="">
                                +63911446255
                            </Typography>
                        </div>
                    </CardBody>
                </Card>
            </div>

            <div className="lg:col-span-2">
                <Card>
                    <CardBody>
                        <AccordionGlobal
                            heading={
                                <Typography
                                    variant="h6"
                                    as="h2"
                                    className="uppercase">
                                    PDF Preview
                                </Typography>
                            }>
                            <object
                                data=" https://pdfobject.com/pdf/sample.pdf"
                                type="application/pdf"
                                className="w-full h-[100vh] md:h-[1366px]"></object>
                        </AccordionGlobal>
                    </CardBody>
                </Card>
            </div>
        </section>
    )
}

export default ViewInvoice
