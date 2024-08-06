import { UserMinusIcon } from '@heroicons/react/24/solid'
import { Button, Typography } from '@material-tailwind/react'

const Actions = () => {
    return (
        <>
            <Button variant="gradient" color='red' className="flex items-center gap-3">
                <UserMinusIcon className='w-6 h-6' />
                Remove Tenant
            </Button>
        </>
    )
}

export default Actions
