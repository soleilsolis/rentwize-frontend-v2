'use client'
import { Modal } from '@/components/globals/Modal'
import PrimaryButton from '@/components/globals/PrimaryButton'
import {
    Card,
    CardBody,
    Input,
    Typography,
    Switch,
    Select,
    Option,
} from '@material-tailwind/react'
import Link from 'next/link'
import { useState } from 'react'
const NewInvoice = () => {
    const [draft, setDraft] = useState(false)
    const [proforma, setProforma] = useState(false)
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <section>
                    <Typography variant="h3" as="h1" className="text-gray-900" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        New Invoice
                    </Typography>
                    <Typography
                        color="gray"
                        className="my-2 font-normal"
                        as="p" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Hissune Carly
                    </Typography>
                </section>
            </div>

            <Card className="max-w-4xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <div className="space-y-4">
                        {!draft ? (
                            <Input
                                label="Invoice Number"
                                type="number"
                                required
                            />
                        ) : (
                            ''
                        )}
                        <Switch
                            label="Draft invoice?"
                            color="blue"
                            ripple={true}
                            onChange={() => setDraft(!draft)} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}                        />

                        <Select
                            label={
                                !proforma
                                    ? 'Proforma Invoice Template'
                                    : 'Invoice Template'
                            }
                            required>
                            <Option>sdf</Option>
                        </Select>

                        <Switch
                            label="Proforma invoice?"
                            color="blue"
                            ripple={true}
                            onChange={() => setProforma(!proforma)} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}                        />
                    </div>

                    <div>
                        <Input type="date" label="Created date" required onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                    </div>
                </CardBody>
            </Card>

            <section className="flex gap-2 mt-4 ">
                <Link href="/landlord/billing/invoices">
                    <PrimaryButton onClick="" variant="text" color="black">
                        Cancel
                    </PrimaryButton>
                </Link>
                <Link href="/landlord/billing/invoices/view/1">
                    <PrimaryButton onClick="" color="gray" >Save</PrimaryButton>
                </Link>

                <Modal
                    buttonColor="blue"
                    label="Save and Send"
                    children="Do you want to send the invoice to the tenant?"
                    size="md"
                    heading="Send and Save Invoice?"
                    controls={<Link href="/landlord/billing/invoices/view/1">
                        <PrimaryButton onClick="">Yes</PrimaryButton>
                    </Link>} buttonVariant={undefined} buttonSize={undefined} buttonIcon={undefined}                />
            </section>
        </div>
    )
}

export default NewInvoice
