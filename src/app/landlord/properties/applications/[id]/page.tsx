'use client'
import {
    Button,
    Typography,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from '@/components/MaterialTailwind'
import {
    CheckIcon,
    DocumentMagnifyingGlassIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'
import { Metadata } from 'next'
import Link from 'next/link'
import { useState } from 'react'

const ViewApplication = () => {
    const [openAcc1, setOpenAcc1] = useState(true)
    const [openAcc2, setOpenAcc2] = useState(true)
    const [openAcc3, setOpenAcc3] = useState(true)

    const handleOpenAcc1 = () => setOpenAcc1(cur => !cur)
    const handleOpenAcc2 = () => setOpenAcc2(cur => !cur)
    const handleOpenAcc3 = () => setOpenAcc3(cur => !cur)

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
                <Typography variant="h1">Hisun Carly</Typography>
                <Typography
                    variant="paragraph"
                    className="text-lg font-medium text-gray-700">
                    <Link href="/landlord/properties/view/1">
                        #5 Mariveles St., Highway Hills, Mandaluyong
                    </Link>
                </Typography>

                <section className="space-y-8">
                    <div className="flex gap-4 max-w-md mt-4">
                        <Button
                            className="grow flex items-center gap-3 justify-center"
                            color="blue">
                            <CheckIcon className="h-5 w-5" />
                            Accept
                        </Button>
                        <Button
                            className="grow flex items-center gap-3 justify-center"
                            color="red">
                            <XMarkIcon className="h-5 w-5"></XMarkIcon>
                            Reject
                        </Button>
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

                    <Accordion open={openAcc1}>
                        <AccordionHeader onClick={handleOpenAcc1}>
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
                    <Accordion open={openAcc2}>
                        <AccordionHeader onClick={handleOpenAcc2}>
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
                    <Accordion open={openAcc3}>
                        <AccordionHeader onClick={handleOpenAcc3}>
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
