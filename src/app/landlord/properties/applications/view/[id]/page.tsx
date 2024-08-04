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
import { Metadata } from 'next'
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
                    className="text-lg tracking-wide">
                    APPLICANT
                </Typography>
                <Typography variant="h1">Hilgen Joy Rabot</Typography>
                <Typography
                    variant="paragraph"
                    className="text-lg font-medium text-gray-700">
                    <Link href="/landlord/properties/view/1">
                        #5 Mariveles St., Highway Hills, Mandaluyong
                    </Link>
                </Typography>

                <section className="space-y-8">
                    <div className="flex gap-4 max-w-md mt-4">
                        <Modal
                            label={
                                <span className="flex items-center gap-3 justify-center">
                                    <CheckIcon className="h-5 w-5" />
                                    Accept
                                </span>
                            }
                            buttonColor="blue"
                            heading="Accept Applicant"
                            controls={
                                <Button color="blue" variant="gradient" onClick={() => router.push('/landlord/properties/prequalifications')}>
                                    Yes
                                </Button>
                            }
                            size="md">
                            <span className="font-medium">
                                Accept Hilgen Joy Rabot to Prequalify?
                            </span>
                        </Modal>

                        <Modal
                            label={
                                <span className="flex items-center gap-3 justify-center">
                                    <XMarkIcon className="h-5 w-5"></XMarkIcon>
                                    Reject
                                </span>
                            }
                            buttonColor="red"
                            heading="Reject Hilgen Joy Rabot?"
                            controls={
                                <Button color="blue" variant="gradient" onClick={() => router.push('/landlord/properties/applications')}>
                                    Yes
                                </Button>
                            }
                            size="md">
                            <span className="font-medium">
                                Reject Hilgen Joy Rabot as an Applicant?
                            </span>
                        </Modal>
                    </div>

                    <Typography variant="h2" className="font-semibold text-3xl">
                        Bio
                    </Typography>
                    <Typography variant="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus ipsum pariatur quam totam aspernatur,
                        similique quaerat optio laboriosam quae fuga esse,
                        placeat dolorem excepturi rerum odit enim mollitia
                        explicabo ullam!
                    </Typography>

                    <Button className="grow flex items-center gap-3 justify-center">
                        <DocumentMagnifyingGlassIcon className="h-5 w-5" />
                        Run Background Check
                    </Button>

                    <Accordion open={generalAcc} disabled>
                        <AccordionHeader
                            onClick={handleGeneralAcc}
                            className="flex justify-start gap-1 items-center px-2 rounded-md">
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
                    <Accordion open={creditAcc}>
                        <AccordionHeader
                            onClick={handleCreditAcc}
                            className="flex justify-start gap-1 items-center text-red-400 bg-red-50 px-2 rounded-t-md">
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
                    <Accordion open={criminalAcc}>
                        <AccordionHeader
                            onClick={handleCriminalAcc}
                            className="flex justify-start gap-1 items-center text-green-600 px-2 rounded-md rounded-t-md">
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
