'use client'
import { Modal } from '@/components/globals/Modal'
import {
    Button,
    Typography,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from '@/components/MaterialTailwind'
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline'
import { DocumentArrowUpIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const ViewApplication = () => {
    const router = useRouter()

    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(!open)

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 min-h-100 h-100 gap-8">
            <div className="">
                <img
                    className="object-cover object-center w-full aspect-1 rounded-lg"
                    src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
                    alt=""
                />
            </div>

            <div className="lg:col-span-3 space-y-2">
                <Typography
                    variant="lead"
                    color="gray"
                    className="text-lg tracking-wide" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    PREQUALIFICATIONS
                </Typography>
                <Typography variant="h1" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Hissune Carly</Typography>
                <Typography
                    variant="paragraph"
                    className="text-lg font-medium text-gray-700" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <Link href="/landlord/properties/view/1">
                        #5 Mariveles St., Highway Hills, Mandaluyong
                    </Link>
                </Typography>

                <section className="space-y-8">
                    <div className="flex gap-4 max-w-md mt-4">
                        <Modal
                            label={<span className="flex items-center gap-3 justify-center">
                                <ArrowLeftEndOnRectangleIcon className="h-5 w-5" />
                                Move In
                            </span>}
                            buttonColor="blue"
                            heading="Accept Applicant"
                            controls={<Button
                                onClick={handleOpen}
                                variant="gradient"
                                color="blue" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Yes
                            </Button>}
                            size="md" children={undefined} buttonVariant={undefined} buttonSize={undefined} buttonIcon={undefined}>
                            <span className="font-medium">
                                Move In Hisun to the Property?
                            </span>
                        </Modal>

                        <Modal
                            label={<span className="flex items-center gap-3 justify-center">
                                Cancel
                            </span>}
                            buttonColor="red"
                            buttonVariant="text"
                            heading="Reject Hissune Carly?"
                            controls={<Button
                                color="blue"
                                variant="gradient"
                                onClick={() => router.push(
                                    '/landlord/properties/applications'
                                )} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Yes
                            </Button>}
                            size="md" children={undefined} buttonSize={undefined} buttonIcon={undefined}>
                            <span className="font-medium">
                                Reject Hissune Carly as an Applicant?
                            </span>
                        </Modal>
                    </div>

                    <Typography variant="h2" className="font-semibold text-3xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Bio
                    </Typography>
                    <Typography variant="paragraph" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus ipsum pariatur quam totam aspernatur,
                        similique quaerat optio laboriosam quae fuga esse,
                        placeat dolorem excepturi rerum odit enim mollitia
                        explicabo ullam!
                    </Typography>

                    <div className="flex max-w-md gap-2">
                        <Button className="grow flex items-center gap-3 justify-center" variant='gradient' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            <DocumentArrowUpIcon className="h-5 w-5" />
                            Send Contract
                        </Button>

                        <Button
                            variant="text"
                            className="grow flex items-center gap-3 justify-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            View Contract
                        </Button>
                    </div>
                </section>
            </div>

            <Dialog open={open} handler={function (value: any): void {
                throw new Error('Function not implemented.')
            } } placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <DialogHeader placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <div className="mx-auto">New Tenant Added!</div>
                </DialogHeader>
                <DialogBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    The key to more success is to have a lot of pillows. Put it
                    this way, it took me twenty five years to get these plants,
                    twenty five years of blood sweat and tears, and I&apos;m
                    never giving up, I&apos;m just getting started. I&apos;m up
                    to something. Fan luv.
                </DialogBody>
                <DialogFooter placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <Button
                        variant="text"
                        onClick={() => router.push('/landlord/tenants/view/1')}
                        className="mr-1 flex justify-center items-center gap-2 mx-auto" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <span>Go To Tenant Page</span>
                        <ArrowRightIcon className="w-4 h-4" />
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    )
}

export default ViewApplication
