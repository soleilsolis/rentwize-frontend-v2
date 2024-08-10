'use client'
import NotificationAlert from '@/components/globals/NotificationAlert'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { Typography } from '@material-tailwind/react'

const Index = () => (
    <>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-4 md:gap-4 h-full">
            <div className="space-y-4 h-full border-r-2">
                <div className="space-y-2">
                    <Typography variant="h6" as={'h1'} className="font-medium">
                        Your Balance:
                    </Typography>
                    <Typography variant="h4" as={'h2'}>
                        $5000.00
                    </Typography>
                </div>
                <Typography
                    variant="h6"
                    as={'h3'}
                    className="font-extralight flex items-center gap-2">
                    <InformationCircleIcon className="w-6 h-6" color="blue" />
                    Your invoice is ready
                </Typography>
                <table className="w-full">
                    <tbody className="w-full">
                        <tr className="bg-gray-100">
                            <td>
                                <Typography className="font-light text-xs">
                                    {' '}
                                    #000001 - $5,000.00
                                </Typography>
                            </td>
                            <td>
                                <Typography className="font-light text-xs">
                                    Due 9 Sep 2024
                                </Typography>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-span-3">
                <div className="flex items-center gap-2 border-b-2 py-4">
                    <Typography className="text-base font-semibold text-gray-800 ">
                        Property
                    </Typography>
                    <Typography className="text-xs font-light text-gray-600 ">
                        Onitsuka Village
                    </Typography>
                </div>
                <div className="gap-2 py-2">
                    <Typography className="text-base font-semibold text-gray-800 ">
                        Overview
                    </Typography>
                    <div className="gap-2 border-b-2 py-2">
                        <Typography className="text-xs font-light text-gray-600">
                            Onitsuka Villages
                        </Typography>
                    </div>
                    <div className="flex items-center justify-between gap-6 border-b-2 py-2">
                        <Typography className="text-xs font-light text-gray-500 ">
                            Price
                        </Typography>
                        <Typography className="text-xs font-light text-gray-500 ">
                            $5000 / 1 month
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default Index
