import { Alert, Button, Typography } from '@material-tailwind/react'
import { useState } from 'react'

const NotificationAlert = () => {
    const [open, setOpen] = useState(true)
    return (
        <>
            <Alert
                open={open}
                className="max-w-screen-md"
                icon={null}
                onClose={() => setOpen(false)}>
                <Typography variant="h5" color="white">
                    Success
                </Typography>
                <Typography color="white" className="mt-2 font-normal">
                    I don&apos;t know what that word means. I&apos;m happy. But
                    success, that goes back to what in somebody&apos;s eyes
                    success means. For me, success is inner peace. That&apos;s a
                    good day for me.
                </Typography>
            </Alert>
        </>
    )
}

export  default NotificationAlert
