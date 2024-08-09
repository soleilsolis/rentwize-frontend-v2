import LatestPayments from '@/components/locals/Landlord/Home/LatestPayments'
import { Button, ButtonGroup, Typography } from '@/components/MaterialTailwind'

const Index = () => (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-4 md:gap-4">
        <div>
            <div className="mt-6">
                <Typography variant="h1" className="mb-6 font-semibold text-xl">
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
            <LatestPayments />
        </div>
    </div>
)

export default Index
