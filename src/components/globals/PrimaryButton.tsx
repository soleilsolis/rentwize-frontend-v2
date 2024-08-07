'use client'
import { Button } from '@material-tailwind/react'

const PrimaryButton = ({ children, ...params }) => (
    <Button
        className="flex gap-3 items-center justify-center"
        size={params.size}
        onClick={params.onClick}
        color="blue"
        variant="gradient">
        {params.icon ?? ''}

        {children}
    </Button>
)

export default PrimaryButton
