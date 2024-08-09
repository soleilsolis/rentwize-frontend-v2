'use client'
import { ClassContext } from '@/components/contexts/ClassContext'
import PrimaryButton from '@/components/globals/PrimaryButton'
import Section from '@/components/globals/Section'
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
} from '@material-tailwind/react'

const ViewInvoice = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Card>
                    <CardBody>
                        <section className="grid grid-cols-1 md:grid-cols-3">
                            <div className="space-y-2 col-span-2">
                                <Typography
                                    variant="h4"
                                    as="h1"
                                    color="black"
                                    className="flex items-center gap-2">
                                    Invoice #00001
                                    <Chip color="blue" value="Unpaid" />
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
                                    <PrimaryButton
                                        variant="text"
                                        icon={
                                            <EllipsisHorizontalIcon className="w-5" />
                                        }
                                    />
                                </ClassContext.Provider>
                            </div>
                        </section>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default ViewInvoice
