'use client'
import AccordionGlobal from '@/components/globals/AccordionGlobal'
import { Card, CardBody, Typography } from '@material-tailwind/react'

const ViewInvoice = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
                <Card placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <CardBody className="space-y-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <Typography variant="h3" as="h4" className="" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Policy Holder's Information
                        </Typography>
                        <div className="grid grid-cols-2">
                            <Typography variant="h5" as="h4" className="" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Policy Holder:
                            </Typography>
                            <Typography variant="h4" as="h5" className="" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Xuan Ming
                            </Typography>
                        </div>
                        <div className="grid grid-cols-2">
                            <Typography variant="h5" as="h4" className="" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Property Address:
                            </Typography>
                            <Typography variant="h4" as="h5" className="" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                785 Onitsuka Tiger Vilalge Davao
                            </Typography>
                        </div>
                        <table className="table-auto w-full">
                            <thead>
                                <Typography variant="h4" as="h5" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
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
                <Card className="h-full" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <CardBody className="space-y-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <Typography variant="h3" as="h4" className="" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Insurance Company's Information
                        </Typography>
                        <div className="grid grid-cols-2">
                            <Typography variant="h5" as="h4" className="" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Address:
                            </Typography>
                            <Typography variant="h4" as="h5" className="" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                2234 Makaturing Mandaluyong City
                            </Typography>
                        </div>
                        <div className="grid grid-cols-2">
                            <Typography variant="h5" as="h4" className="" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Contact Number:
                            </Typography>
                            <Typography variant="h4" as="h5" className="" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                +63911446255
                            </Typography>
                        </div>
                    </CardBody>
                </Card>
            </div>

            <div className="lg:col-span-2">
                <Card placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <AccordionGlobal
                            heading={
                                <Typography
                                    variant="h6"
                                    as="h2"
                                    className="uppercase" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
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
