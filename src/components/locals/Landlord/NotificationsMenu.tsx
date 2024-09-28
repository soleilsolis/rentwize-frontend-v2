import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    IconButton,
    Avatar,
    Typography,
} from '@/components/MaterialTailwind'
import { BellIcon, ClockIcon } from '@heroicons/react/24/outline'

export function NotificationsMenu() {
    return (
        <Menu>
            <MenuHandler>
                <IconButton variant="text" className="rounded-full" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <BellIcon className="h-7 w-7 m-2"></BellIcon>
                </IconButton>
            </MenuHandler>
            <MenuList className="flex flex-col gap-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <Avatar
                        variant="circular"
                        alt="tania andrew"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    />
                    <div className="flex flex-col gap-1">
                        <Typography
                            variant="small"
                            color="gray"
                            className="font-semibold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Tania send you a message
                        </Typography>
                        <Typography className="flex items-center gap-1 text-sm font-medium text-blue-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            <ClockIcon className="w-3 h-3" />
                            13 minutes ago
                        </Typography>
                    </div>
                </MenuItem>
                <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <Avatar
                        variant="circular"
                        alt="natali craig"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    />
                    <div className="flex flex-col gap-1">
                        <Typography
                            variant="small"
                            color="gray"
                            className="font-semibold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Natali replied to your email.
                        </Typography>
                        <Typography className="flex items-center gap-1 text-sm font-medium text-blue-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            <ClockIcon className="w-3 h-3" />1 hour ago
                        </Typography>
                    </div>
                </MenuItem>
                <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <Avatar
                        variant="circular"
                        alt="paypal"
                        src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    />
                    <div className="flex flex-col gap-1">
                        <Typography
                            variant="small"
                            color="gray"
                            className="font-semibold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            You&apos;ve received a payment.
                        </Typography>
                        <Typography className="flex items-center gap-1 text-sm font-medium text-blue-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            <ClockIcon className="w-3 h-3" />5 hours ago
                        </Typography>
                    </div>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
