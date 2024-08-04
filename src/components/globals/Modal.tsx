'use client'
import { useState } from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from '@material-tailwind/react'

export function Modal({
    size,
    label,
    children,
    controls,
    buttonColor,
    buttonVariant,
    heading,
}) {
    const [dialogSize, setSize] = useState(null)

    const handleOpen = value => setSize(value)

    return (
        <>
            <Button
                onClick={() => handleOpen(size)}
                variant={buttonVariant ?? 'gradient'}
                color={buttonColor ?? 'black'}>
                {label}
            </Button>

            <Dialog
                open={
                    dialogSize === 'xs' ||
                    dialogSize === 'sm' ||
                    dialogSize === 'md' ||
                    dialogSize === 'lg' ||
                    dialogSize === 'xl' ||
                    dialogSize === 'xxl'
                }
                size={dialogSize || 'md'}
                handler={handleOpen}>
                <DialogHeader>{heading}</DialogHeader>
                <DialogBody>{children}</DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={() => handleOpen(null)}
                        className="mr-1">
                        <span>Cancel</span>
                    </Button>

                    {controls}
                </DialogFooter>
            </Dialog>
        </>
    )
}
