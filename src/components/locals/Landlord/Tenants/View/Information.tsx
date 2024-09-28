import AccordionGlobal from '@/components/globals/AccordionGlobal'
import { CreditCardIcon } from '@heroicons/react/24/outline'
import {
    ArrowDownOnSquareIcon,
    DocumentTextIcon,
    ExclamationTriangleIcon,
    XCircleIcon,
} from '@heroicons/react/24/solid'
import {
    CardBody,
    CardHeader,
    Typography,
    Button,
    Card,
} from '@material-tailwind/react'

const Information = () => {
    const stats = [
        {
            label: 'Balance',
            value: 500.0,
        },

        {
            label: 'Credit',
            value: 0,
        },
        {
            label: 'Outstanding',
            value: -500.0,
        },
    ]

    const paymentStats = [
        {
            label: (
                <span className="flex items-center gap-2">
                    <CreditCardIcon className="w-5 h-5"></CreditCardIcon>
                    Expected Payment
                </span>
            ),
            value: '$1200/month',
        },

        {
            label: 'Next Invoicing Date',
            value: 'February 5, 2038',
        },
    ]

    const initialStats = [
        {
            label: 'Total Income From Tenant',
            value: 500.0,
        },

        {
            label: 'Initial Deposit Amount',
            value: 0,
        },
    ]
    return (
        <>
            <div className='space-y-5'>
                <Card className="" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                            {stats.map((stat, index) => {
                                return (
                                    <div
                                        className={`space-y-2 ${stats.length - 1 !== index ? 'border-r-2' : ''}`}>
                                        <Typography variant="h6" as="h2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                            {stat.label}
                                        </Typography>

                                        <Typography
                                            variant="h3"
                                            as="p"
                                            className={stat.value < 0
                                                ? 'text-red-600'
                                                : 'text-gray-900'} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                            ${stat.value.toFixed(2)}
                                        </Typography>
                                    </div>
                                )
                            })}
                        </div>
                    </CardBody>
                </Card>

                <Card placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {paymentStats.map((stat, index) => {
                                return (
                                    <div
                                        className={`${paymentStats.length - 1 !== index ? 'border-r-2' : ''}`}>
                                        <Typography
                                            variant="h6"
                                            as="h2"
                                            className="flex gap-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                            {stat.label}:{' '}
                                            <span className="font-bold text-black">
                                                {stat.value}
                                            </span>
                                        </Typography>
                                    </div>
                                )
                            })}
                        </div>
                    </CardBody>
                </Card>

                <Card className="" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                            {initialStats.map((stat, index) => {
                                return (
                                    <div
                                        className={`space-y-2 ${initialStats.length - 1 !== index ? 'border-r-2' : ''}`}>
                                        <Typography variant="h6" as="h2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                            {stat.label}
                                        </Typography>

                                        <Typography
                                            variant="h3"
                                            as="p"
                                            className={stat.value < 0
                                                ? 'text-red-600'
                                                : 'text-gray-900'} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                            ${stat.value.toFixed(2)}
                                        </Typography>
                                    </div>
                                )
                            })}
                        </div>
                    </CardBody>
                </Card>

                <Card className="w-full md:flex-row mt-5" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="m-0 md:w-2/5 shrink-0 md:rounded-r-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                            alt="card-image"
                            className="h-full w-full object-cover"
                        />
                    </CardHeader>
                    <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <Typography
                            variant="h6"
                            color="gray"
                            className="mb-4 uppercase" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            property
                        </Typography>
                        <Typography
                            variant="h4"
                            color="blue-gray"
                            className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            123, Onitsuka Tiger Village, Colorado
                        </Typography>
                        <Typography color="gray" className="mb-8 font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Like so many organizations these days, Autodesk is a
                            company in transition. It was until recently a
                            traditional boxed software company selling licenses.
                            Yet its own business model disruption is only part
                            of the story
                        </Typography>
                        <a href="#" className="inline-block">
                            <Button
                                variant="text"
                                className="flex items-center gap-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                View Property
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    className="h-4 w-4">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </Button>
                        </a>
                    </CardBody>
                </Card>
            </div>

            <Typography variant="h2" className="font-semibold text-3xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Bio
            </Typography>
            <Typography variant="paragraph" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus ipsum pariatur quam totam aspernatur, similique
                quaerat optio laboriosam quae fuga esse, placeat dolorem
                excepturi rerum odit enim mollitia explicabo ullam!
            </Typography>

            <div className="flex max-w-md gap-2">
                <Button className="flex items-center gap-3 justify-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <DocumentTextIcon className="h-4 w-4" />
                    View Contract
                </Button>
            </div>

            <AccordionGlobal
                heading={
                    <>
                        <ExclamationTriangleIcon className="w-6 h-6" />
                        Renter's Insurance
                    </>
                }
                className="flex justify-start gap-1 items-center px-2 rounded-md text-orange-600 bg-yellow-100">
                <p>
                    Tenant has not yet uploaded their Renter's Insurance. Click
                    to remind.
                </p>
                <Button
                    className="flex items-center gap-3 justify-center mt-2"
                    color="yellow" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <ExclamationTriangleIcon className="h-4 w-4" />
                    Remind Tenant
                </Button>
                <p>
                    Download a copy of this tenant's Renter Insurance.
                </p>
                <Button className="flex items-center gap-3 justify-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <ArrowDownOnSquareIcon className="h-4 w-4" />
                    Download
                </Button>
            </AccordionGlobal>
        </>
    )
}

export default Information
