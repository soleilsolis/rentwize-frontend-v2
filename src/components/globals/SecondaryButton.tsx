'use client'
import { Button } from '@material-tailwind/react'

const SecondaryButton = ({ children, ...params }) => (
    <Button
        className="flex gap-3 items-center justify-center"
        size={params.size}
        onClick={params.onClick}
        color={params.color ?? "black"}
        variant="text">
        {params.icon ?? ''}

        {children}
    </Button>
)

export default SecondaryButton
