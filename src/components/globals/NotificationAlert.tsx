import { Alert, Typography } from '@material-tailwind/react'
import { useState } from 'react'

const NotificationAlert = () => {
    const [open, setOpen] = useState(true)
    return (
        <div className=" sticky bottom-0">
            <div className='flex items-center justify-end p-4'>
                <Alert
                    open={open}
                    className="max-w-lg"
                    icon={null}
                    onClose={() => setOpen(false)} variant="gradient">
                    <Typography variant="h5" color="white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Success
                    </Typography>
                    <Typography color="white" className="mt-2 font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        I don&apos;t know what that word means. I&apos;m happy.
                        But success, that goes back to what in somebody&apos;s
                        eyes success means. For me, success is inner peace.
                        That&apos;s a good day for me.
                    </Typography>
                </Alert>
            </div>
        </div>
    )
}

export default NotificationAlert
