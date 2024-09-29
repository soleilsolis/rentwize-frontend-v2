import IndexTable from '@/components/globals/IndexTable'
import { PencilIcon } from '@heroicons/react/24/solid'
import { IconButton, Tooltip, Typography } from '@material-tailwind/react'
import Link from 'next/link'

import invoices from './invoices.json'

const Invoices = () => {
    const tableHeader = [
        'Invoice Number',
        'Total',
        'Amount Due',
        'Created Date',
        'Due Date',
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
        (
            {
                number,
                items,
                amountToPay,
                total,
                createdDate,
                dueDate,
            },
            index,
        ) => {
            const isLast = index === invoices.length - 1
            const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

            const dateCreated = new Date(createdDate)
            const due = new Date(dueDate)
            return (
                <tr key={''}>
                    <td className={classes}>
                        <div className="flex items-center gap-3">
                            <div className="flex flex-col">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    # {number}
                                </Typography>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal opacity-70" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    {items[0].label}
                                </Typography>
                            </div>
                        </div>
                    </td>
                    <td className={classes}>
                        <div className="flex items-center gap-3">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-bold"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                ${total.toFixed(2)}
                            </Typography>
                        </div>
                    </td>
                    <td className={classes}>
                        <div className="flex items-center gap-3">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-bold"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                ${amountToPay.toFixed(2)}
                            </Typography>
                        </div>
                    </td>

                    <td className={classes}>
                        <div className="flex items-center gap-3">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-bold"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                {dateCreated.toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </Typography>
                        </div>
                    </td>
                    <td className={classes}>
                        <div className="flex items-center gap-3">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-bold"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                {due.toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </Typography>
                        </div>
                    </td>

                    <td className={classes}>
                        <Tooltip content="View Invoice">
                            <Link href="/landlord/billing/invoices/view/1">
                                <IconButton variant="text" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
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
            heading="Invoices"
            subHeading="List of invoices"
            tableHeader={tableHeader}
            tbody={tbody} controls={undefined}        />
    )
}

export default Invoices
