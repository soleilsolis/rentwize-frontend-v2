import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Typography,
} from '@/components/MaterialTailwind'
import {
    ArrowRightStartOnRectangleIcon,
    LifebuoyIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline'

import { useAuth } from '@/hooks/auth'

const ProfileMenu = () => {
    const { logout } = useAuth({ middleware: 'auth' })
    return (
        <Menu>
            <MenuHandler>
                <Avatar
                    variant="circular"
                    alt="tania andrew"
                    className="cursor-pointer"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                />
            </MenuHandler>
            <MenuList className="text-gray-900" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <MenuItem className="flex items-center gap-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <UserCircleIcon className="w-6 h-6"></UserCircleIcon>
                    <Typography variant="small" className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Profile
                    </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <LifebuoyIcon className="w-6 h-6"></LifebuoyIcon>
                    <Typography variant="small" className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Help
                    </Typography>
                </MenuItem>
                <hr className="my-2 border-blue-gray-50" />
                <MenuItem className="flex items-center gap-2 " onClick={() => logout()} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <ArrowRightStartOnRectangleIcon className="w-6 h-6"></ArrowRightStartOnRectangleIcon>
                    <Typography variant="small" className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Sign Out
                    </Typography>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default ProfileMenu
