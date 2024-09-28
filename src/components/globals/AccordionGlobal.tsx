'use client'
import { SetStateAction, useState } from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from '@material-tailwind/react'

export function AccordionGlobal({ children, heading, ...params }) {
    const [open, setOpen] = useState(1)

    const handleOpen = (value: SetStateAction<number>) => setOpen(open === value ? 0 : value)

    return (
        <Accordion open={open === 1} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >
            <AccordionHeader onClick={() => handleOpen(1)} className={params.className} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {heading}
            </AccordionHeader>
            <AccordionBody className="space-y-8">{children}</AccordionBody>
        </Accordion>
    )
}

export default AccordionGlobal
