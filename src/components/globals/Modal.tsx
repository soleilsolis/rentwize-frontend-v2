'use client'
import { useState } from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from '@material-tailwind/react'
import PrimaryButton from './PrimaryButton'

export function Modal({
    children,
    controls,
    heading,
    label,
    size,
    buttonColor,
    buttonVariant,
    buttonSize,
    buttonIcon,
}) {
    const [dialogSize, setSize] = useState(null)

    const handleOpen = (value: any) => setSize(value)

    return (
        <>
            <PrimaryButton
                onClick={() => handleOpen(size)}
                children={label}
                size={buttonSize ?? 'md'}
                variant={buttonVariant ?? 'gradient'}
                color={buttonColor ?? 'black'}
                icon={buttonIcon}
            />

            <Dialog
                open={dialogSize === 'xs' ||
                    dialogSize === 'sm' ||
                    dialogSize === 'md' ||
                    dialogSize === 'lg' ||
                    dialogSize === 'xl' ||
                    dialogSize === 'xxl'}
                size={dialogSize || 'md'}
                handler={handleOpen} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <DialogHeader placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{heading}</DialogHeader>
                <DialogBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{children}</DialogBody>
                <DialogFooter placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <Button
                        variant="text"

                        onClick={() => handleOpen(null)}
                        className="mr-1" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <span>Cancel</span>
                    </Button>

                    {controls}
                </DialogFooter>
            </Dialog>
        </>
    )
}
