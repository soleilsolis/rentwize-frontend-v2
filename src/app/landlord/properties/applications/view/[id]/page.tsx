'use client'
import { Modal } from '@/components/globals/Modal'
import {
    Button,
    Typography,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from '@/components/MaterialTailwind'
import {
    CheckCircleIcon,
    CheckIcon,
    DocumentMagnifyingGlassIcon,
    XCircleIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const ViewApplication = () => {
    const [generalAcc, setGeneralAcc] = useState(false)
    const [creditAcc, setCreditAcc] = useState(false)
    const [criminalAcc, setCriminalAcc] = useState(false)

    const handleGeneralAcc = () => setGeneralAcc(cur => !cur)
    const handleCreditAcc = () => setCreditAcc(cur => !cur)
    const handleCriminalAcc = () => setCriminalAcc(cur => !cur)

    const router = useRouter()
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
                    APPLICANT
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
                                <CheckIcon className="h-5 w-5" />
                                Accept
                            </span>}
                            buttonColor="blue"
                            heading="Accept Applicant"
                            controls={<Button color="blue" variant="gradient" onClick={() => router.push('/landlord/properties/prequalifications')} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Yes
                            </Button>}
                            size="md" children={undefined} buttonVariant={undefined} buttonSize={undefined} buttonIcon={undefined}>
                            <span className="font-medium">
                                Accept Hissune Carly to Prequalify?
                            </span>
                        </Modal>

                        <Modal
                            label={<span className="flex items-center gap-3 justify-center">
                                <XMarkIcon className="h-5 w-5"></XMarkIcon>
                                Reject
                            </span>}
                            buttonColor="red"
                            heading="Reject Hissune Carly?"
                            controls={<Button color="blue" variant="gradient" onClick={() => router.push('/landlord/properties/applications')} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Yes
                            </Button>}
                            size="md" children={undefined} buttonVariant={undefined} buttonSize={undefined} buttonIcon={undefined}>
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

                    <Button className="grow flex items-center gap-3 justify-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <DocumentMagnifyingGlassIcon className="h-5 w-5" />
                        Run Background Check
                    </Button>

                    <Accordion open={generalAcc} disabled placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <AccordionHeader
                            onClick={handleGeneralAcc}
                            className="flex justify-start gap-1 items-center px-2 rounded-md" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            General
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want
                            to be at. We&apos;re constantly growing. We&apos;re
                            constantly making mistakes. We&apos;re constantly
                            trying to express ourselves and actualize our
                            dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={creditAcc} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <AccordionHeader
                            onClick={handleCreditAcc}
                            className="flex justify-start gap-1 items-center text-red-400 bg-red-50 px-2 rounded-t-md" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            <XCircleIcon className="w-6 h-6" />
                            Credit Record
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want
                            to be at. We&apos;re constantly growing. We&apos;re
                            constantly making mistakes. We&apos;re constantly
                            trying to express ourselves and actualize our
                            dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={criminalAcc} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <AccordionHeader
                            onClick={handleCriminalAcc}
                            className="flex justify-start gap-1 items-center text-green-600 px-2 rounded-md rounded-t-md" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            <CheckCircleIcon className="w-6 h-6" />
                            Criminal Record
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want
                            to be at. We&apos;re constantly growing. We&apos;re
                            constantly making mistakes. We&apos;re constantly
                            trying to express ourselves and actualize our
                            dreams.
                        </AccordionBody>
                    </Accordion>
                </section>
            </div>
        </div>
    )
}

export default ViewApplication
