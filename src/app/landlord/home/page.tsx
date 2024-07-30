import SalesChart from '@/components/locals/Landlord/Home/SalesChart'
import LatestCustomers from '@/components/locals/Landlord/Home/LatestPayments'
import { Button, ButtonGroup, Typography } from "@/components/MaterialTailwind"

import {
    UserGroupIcon,
    HomeModernIcon,
    UserPlusIcon,
    ClipboardDocumentCheckIcon,
    WrenchIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/24/outline'

const overviewValues = [
    {
        icon: <UserPlusIcon className="w-6" />,
        label: 'Applications',
        value: 2,
    },
    {
        icon: <UserGroupIcon className="w-6" />,
        label: 'Tenants',
        value: 45,
    },
    {
        icon: <ClipboardDocumentCheckIcon className="w-6" />,
        label: 'Prequalifications',
        value: 102,
    },
]

const propertyManagementValues = [
    {
        icon: <HomeModernIcon className="w-6" />,
        label: 'Properties',
        value: 102,
    },
    {
        icon: <WrenchIcon className="w-6" />,
        label: 'Maintenance',
        value: 2,
    },
    {
        icon: <ExclamationCircleIcon className="w-6" />,
        label: 'Due Invoices',
        value: 45,
    },
]

const NavButtons = ({ values }) => {
    return (
        <ButtonGroup
            variant="text"
            fullWidth
            size="sm"
            className="divide-gray-500">
            {values.map((value, key) => (
                <Button key={key}>
                    <div className="flex items-center gap-2 lg:gap-1 mb-1 justify-center lg:justify-start text-blue-600">
                        {value.icon}
                        <span className="text-2xl font-semibold">
                            {value.value}
                        </span>
                    </div>
                    <div className="capitalize leading-normal text-xs text-gray-600 font-normal lg:text-left">
                        {value.label}
                    </div>
                </Button>
            ))}
        </ButtonGroup>
    )
}

const Index = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-4 md:gap-4">
                <div>
                    <div>
                        <Typography
                            variant="h1"
                            className="mb-6 font-semibold text-xl">
                            Overview
                        </Typography>
                        <NavButtons values={overviewValues} />
                    </div>

                    <div className="mt-6">
                        <Typography
                            variant="h1"
                            className="mb-6 font-semibold text-xl">
                            Property Management
                        </Typography>
                        <NavButtons values={propertyManagementValues} />
                    </div>

                    <div className="mt-6">
                        <Typography
                            variant="h1"
                            className="mb-6 font-semibold text-xl">
                            Inbox
                        </Typography>
                        You have no notifications/messages.
                    </div>
                </div>

                <div className="col-span-2">
                    <Typography
                        variant="h1"
                        className="lg:hidden mb-6 font-semibold text-xl">
                        Sales Summary
                    </Typography>
                </div>

                <div>
                    <LatestCustomers />
                </div>
            </div>
        </>
    )
}

export default Index
