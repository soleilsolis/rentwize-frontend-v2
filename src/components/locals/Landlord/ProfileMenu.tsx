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

const ProfileMenu = () => {
    return (
        <Menu>
            <MenuHandler>
                <Avatar
                    variant="circular"
                    alt="tania andrew"
                    className="cursor-pointer"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
            </MenuHandler>
            <MenuList className="text-gray-900">
                <MenuItem className="flex items-center gap-2">
                    <UserCircleIcon className="w-6 h-6"></UserCircleIcon>
                    <Typography variant="small" className="font-medium">
                        Profile
                    </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-2">
                    <LifebuoyIcon className="w-6 h-6"></LifebuoyIcon>
                    <Typography variant="small" className="font-medium">
                        Help
                    </Typography>
                </MenuItem>
                <hr className="my-2 border-blue-gray-50" />
                <MenuItem className="flex items-center gap-2 ">
                    <ArrowRightStartOnRectangleIcon className="w-6 h-6"></ArrowRightStartOnRectangleIcon>
                    <Typography variant="small" className="font-medium">
                        Sign Out
                    </Typography>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default ProfileMenu
