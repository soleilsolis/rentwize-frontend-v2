'use client'
import {
    Card,
    CardBody,
    CardHeader,
    Chip,
    Typography,
} from '@material-tailwind/react'
import Head from 'next/head'

const ViewInvoice = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <section>
                    <Typography
                        variant="h3"
                        as="h1"
                        className="flex items-center gap-2">
                        Invoice #00001 <Chip color="blue" value="Unpaid" />
                    </Typography>
                    <Typography
                        color="gray"
                        className="my-2 font-normal"
                        as="p">
                        Hissune Carly
                    </Typography>
                </section>
                <Card>
                    <CardHeader></CardHeader>
                    <CardBody></CardBody>
                </Card>
            </div>
        </div>
    )
}

export default ViewInvoice
