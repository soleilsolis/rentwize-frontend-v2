'use client'
import { Button } from '@material-tailwind/react'
import { useContext } from 'react'
import { ClassContext } from '../contexts/ClassContext'

const PrimaryButton = ({ children, onClick, ...params }) => {
    const childrenClassName = useContext(ClassContext)

    return (
        <Button
            className={`flex gap-3 items-center justify-center ${childrenClassName} ${params.className}`}
            size={params.size}
            onClick={onClick}
            color={params.color ?? 'blue'}
            variant={params.variant ?? 'gradient'}>
            {params.icon ?? ''}

            {children}
        </Button>
    )
}

export default PrimaryButton
