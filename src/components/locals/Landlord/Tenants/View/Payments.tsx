import IndexTable from '@/components/globals/IndexTable'
import { PencilIcon } from '@heroicons/react/24/solid'
import { IconButton, Tooltip, Typography } from '@material-tailwind/react'
import Link from 'next/link'

import invoices from './invoices.json'

const Payments = () => {
    const tableHeader = [
        'Payment Number',
        'Method',
        'Amount',
        'Created Date',
        '',
    ]

    const tabs = [
        {
            label: 'Partial',
            value: 'all',
        },
        {
            label: 'Full',
            value: false,
        },
    ]
    const tbody = invoices.map(
        ({ number, amountToPay, createdDate }, index) => {
            const isLast = index === invoices.length - 1
            const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

            const dateCreated = new Date(createdDate)
            return (
                <tr key={''}>
                    <td className={classes}>
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                    placeholder={undefined}
                                    onPointerEnterCapture={undefined}
                                    onPointerLeaveCapture={undefined}>
                                    # {number}
                                </Typography>
                            </div>
                        </div>
                    </td>
                    <td className={classes}>
                        <div className="flex items-center gap-3">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}>
                                Cash
                            </Typography>
                        </div>
                    </td>
                    <td className={classes}>
                        <div className="flex items-center gap-3">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-bold"
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}>
                                ${amountToPay.toFixed(2)}
                            </Typography>
                        </div>
                    </td>

                    <td className={classes}>
                        <div className="flex items-center gap-3">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}>
                                {dateCreated.toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </Typography>
                        </div>
                    </td>
                    <td className={classes}>
                        <Tooltip content="Edit Property">
                            <Link href="/landlord/invoices/view/1">
                                <IconButton
                                    variant="text"
                                    placeholder={undefined}
                                    onPointerEnterCapture={undefined}
                                    onPointerLeaveCapture={undefined}>
                                    <PencilIcon className="h-4 w-4" />
                                </IconButton>
                            </Link>
                        </Tooltip>
                    </td>
                </tr>
            )
        },
    )

    return (
        <IndexTable
            tabs={tabs}
            heading="Payments"
            subHeading="List of payments"
            tableHeader={tableHeader}
            tbody={tbody}
            controls={undefined}
        />
    )
}

export default Payments
