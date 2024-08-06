'use client'
import { Button, Typography } from '@material-tailwind/react'

const NewInvoice = () => {
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

            <section className="flex gap-2 mt-4 ">
                <Button color="blue">Save</Button>
                <Button variant="text">Cancel</Button>
            </section>
        </div>
    )
}

export default NewInvoice
