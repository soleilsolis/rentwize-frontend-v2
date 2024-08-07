'use client'
import { Button } from '@material-tailwind/react'

const PrimaryButton = ({ children, onClick, ...params }) => (
    <Button
        className="flex gap-3 items-center justify-center"
        size={params.size}
        onClick={onClick}
        color={params.color ?? "blue"}
        variant={params.variant ?? "gradient"}>
        {params.icon ?? ''}

        {children}
    </Button>
)

export default PrimaryButton
