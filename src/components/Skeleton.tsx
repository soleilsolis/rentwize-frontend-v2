import { Typography } from '@material-tailwind/react'

export function DefaultSkeleton() {
    return (
        <div className="max-w-full animate-pulse">
            <Typography
                as="div"
                variant="h1"
                className="mb-4 h-3 w-1/2 rounded-full bg-gray-300"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}>
                &nbsp;
            </Typography>
            <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-full rounded-full bg-gray-300"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}>
                &nbsp;
            </Typography>
            <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-full rounded-full bg-gray-300"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}>
                &nbsp;
            </Typography>
            <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-full rounded-full bg-gray-300"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}>
                &nbsp;
            </Typography>
            <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-2 w-full rounded-full bg-gray-300"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}>
                &nbsp;
            </Typography>
        </div>
    )
}
