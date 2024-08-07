'use client'
import {
    Button,
    Card,
    CardBody,
    Input,
    Typography,
    Switch,
} from '@material-tailwind/react'
import { useState } from 'react'
const NewInvoice = () => {

    const [draft, setDraft] = useState(false)
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <section>
                    <Typography variant="h3" as="h1" className="text-gray-900">
                        New Invoice
                    </Typography>
                    <Typography
                        color="gray"
                        className="my-2 font-normal"
                        as="p">
                        Hissune Carly
                    </Typography>
                </section>
            </div>

            <Card className="max-w-4xl">
                <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                        {!draft ? <Input label="Invoice Number" type="number" /> : ''}
                        <Switch label="Draft invoice?" color="blue" ripple={true} onChange={() => setDraft(!draft)} />
                    </div>
                </CardBody>
            </Card>

            <section className="flex gap-2 mt-4 ">
                <Button color="blue">Save</Button>
                <Button variant="text">Cancel</Button>
            </section>
        </div>
    )
}

export default NewInvoice
