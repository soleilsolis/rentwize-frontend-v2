'use client'
import { useState } from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from '@material-tailwind/react'

export function AccordionGlobal({ children, heading, ...params }) {
    const [open, setOpen] = useState(1)

    const handleOpen = value => setOpen(open === value ? 0 : value)

    return (
        <Accordion open={open === 1} >
            <AccordionHeader onClick={() => handleOpen(1)} className={params.className}>
                {heading}
            </AccordionHeader>
            <AccordionBody className="space-y-8">{children}</AccordionBody>
        </Accordion>
    )
}

export default AccordionGlobal
