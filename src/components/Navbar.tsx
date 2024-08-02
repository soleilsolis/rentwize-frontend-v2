import { useState } from 'react'
import { useRouter } from 'next/navigation'

import {
    Navbar,
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Alert,
    Input,
    Drawer,
    Card,
} from '@material-tailwind/react'

import {
    ChevronRightIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
    MagnifyingGlassIcon,
    Bars2Icon,
    XMarkIcon,
    PresentationChartBarIcon,
    HomeModernIcon,
    HomeIcon,
    WrenchIcon,
    ReceiptPercentIcon,
    UserGroupIcon,
    Cog6ToothIcon,
} from '@heroicons/react/24/outline'
import ProfileMenu from './locals/Landlord/ProfileMenu'
import { NotificationsMenu } from './locals/Landlord/NotificationsMenu'
import Link from 'next/link'

const NavbarSimple = ({ title }) => {
    const [open, setOpen] = useState(0)
    const [openAlert, setOpenAlert] = useState(true)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const router = useRouter()

    const handleOpen = value => {
        setOpen(open === value ? 0 : value)
    }

    const openDrawer = () => setIsDrawerOpen(true)
    const closeDrawer = () => setIsDrawerOpen(false)

    const menuLists = [
        [
            {
                name: 'Dashboard',
                icon: <PresentationChartBarIcon className="h-5 w-5" />,
                link: '/landlord',
            },
            {
                name: 'Properties',
                icon: <HomeIcon className="h-5 w-5" />,
                items: [
                    {
                        name: 'All Properties',
                        icon: <HomeModernIcon className="h-5 w-5" />,
                        link: '/landlord/properties',
                    },
                    {
                        name: 'Applications',
                        icon: <WrenchIcon className="h-5 w-5" />,
                        link: '/landlord/properties/applications',
                    },

                    {
                        name: 'Prequalifications',
                        icon: <WrenchIcon className="h-5 w-5" />,
                        link: '/landlord/properties/prequalifications',
                    },

                    {
                        name: 'Maintenance',
                        icon: <WrenchIcon className="h-5 w-5" />,
                        link: '/landlord/properties/maintenance',
                    },
                ],
            },
            {
                name: 'Tenants',
                icon: <UserGroupIcon className="h-5 w-5" />,
                items: [
                    {
                        name: 'All Tenants',
                        icon: <HomeModernIcon className="h-5 w-5" />,
                        link: '/landlord/tenants',
                    },

                    {
                        name: 'Maintenance',
                        icon: <WrenchIcon className="h-5 w-5" />,
                        link: '/landlord/tenants/maintenance',
                    },
                ],
            },
            {
                name: 'Billing',
                icon: <ReceiptPercentIcon className="h-5 w-5" />,
                items: [
                    {
                        name: 'Invoices',
                        icon: <HomeModernIcon className="h-5 w-5" />,
                        link: '/landlord/billing/invoices',
                    },

                    {
                        name: 'Payments',
                        icon: <WrenchIcon className="h-5 w-5" />,
                        link: '/landlord/billing/payments',
                    },
                ],
            },
        ],
    ]

    return (
        <>
            <header>
                <Navbar className="absolute mx-auto max-w-full px-6 py-3 rounded-none shadow-none border-gray-200 border-b">
                    <div className="flex items-center justify-between text-blue-gray-900 gap-2">
                        <div className="flex items-center text-blue-gray-900 gap-2">
                            <IconButton
                                variant="text"
                                size="lg"
                                onClick={openDrawer}>
                                {isDrawerOpen ? (
                                    <XMarkIcon className="h-8 w-8 stroke-2" />
                                ) : (
                                    <Bars2Icon className="h-8 w-8 stroke-2" />
                                )}
                            </IconButton>
                            <Typography
                                as="a"
                                href="#"
                                variant="h5"
                                className="mr-4 cursor-pointer py-1.5">
                                {title}
                            </Typography>
                        </div>

                        <div className="flex items-center gap-2">
                            <Link href="#">
                                <IconButton
                                    variant="text"
                                    className="rounded-full">
                                    <Cog6ToothIcon className="h-7 w-7 m-2"></Cog6ToothIcon>
                                </IconButton>
                            </Link>
                            <NotificationsMenu></NotificationsMenu>

                            <ProfileMenu></ProfileMenu>
                        </div>
                    </div>
                </Navbar>
            </header>

            <Drawer open={isDrawerOpen} onClose={closeDrawer}>
                <Card
                    color="transparent"
                    shadow={false}
                    className="h-[calc(100vh-2rem)] w-full p-4">
                    <div className="mb-2 flex items-center gap-4 p-4">
                        <img
                            src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
                            alt="brand"
                            className="h-8 w-8"
                        />
                        <Typography variant="h5" color="blue-gray">
                            Rentwise
                        </Typography>
                    </div>
                    <div className="p-2">
                        <Input
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            label="Search"
                        />
                    </div>

                    {menuLists.map((list, listKey) => (
                        <List key={listKey}>
                            {list.map((listItem, listItemKey) => (
                                <>
                                    {!listItem.items ? (
                                        <ListItem
                                            key={listItemKey}
                                            onClick={() => {
                                                setIsDrawerOpen(false)
                                                router.push(listItem.link)
                                            }}>
                                            <ListItemPrefix>
                                                {listItem.icon}
                                            </ListItemPrefix>
                                            {listItem.name}
                                        </ListItem>
                                    ) : (
                                        <Accordion
                                            key={listItemKey}
                                            open={open === listItemKey}
                                            icon={
                                                <ChevronDownIcon
                                                    strokeWidth={2.5}
                                                    className={`mx-auto h-4 w-4 transition-transform ${
                                                        open === listItemKey
                                                            ? 'rotate-180'
                                                            : ''
                                                    }`}
                                                />
                                            }>
                                            <ListItem
                                                key={listItemKey}
                                                className="p-0"
                                                selected={open === listItemKey}>
                                                <AccordionHeader
                                                    onClick={() =>
                                                        handleOpen(listItemKey)
                                                    }
                                                    className="border-b-0 p-3">
                                                    <ListItemPrefix>
                                                        {listItem.icon}
                                                    </ListItemPrefix>
                                                    <Typography
                                                        color="blue-gray"
                                                        className="mr-auto font-normal w-full">
                                                        {listItem.name}
                                                    </Typography>
                                                </AccordionHeader>
                                            </ListItem>
                                            <AccordionBody className="py-1">
                                                <List className="p-0">
                                                    {listItem.items.map(
                                                        (item, itemKey) => (
                                                            <ListItem
                                                                key={itemKey}
                                                                onClick={() => {
                                                                    router.push(
                                                                        item.link,
                                                                    )
                                                                    setIsDrawerOpen(
                                                                        false,
                                                                    )
                                                                }}>
                                                                <ListItemPrefix>
                                                                    <ChevronRightIcon
                                                                        strokeWidth={
                                                                            3
                                                                        }
                                                                        className="h-3 w-5"
                                                                    />
                                                                </ListItemPrefix>
                                                                {item.name}
                                                            </ListItem>
                                                        ),
                                                    )}
                                                </List>
                                            </AccordionBody>
                                        </Accordion>
                                    )}
                                </>
                            ))}
                        </List>
                    ))}

                    <Alert
                        open={openAlert}
                        className="mt-auto"
                        onClose={() => setOpenAlert(false)}>
                        <CubeTransparentIcon className="mb-4 h-12 w-12" />
                        <Typography variant="h6" className="mb-1">
                            Welcome to Rentwise
                        </Typography>
                        <Typography
                            variant="small"
                            className="font-normal opacity-80">
                            You can explore the other pages by clicking links on
                            the navigation
                        </Typography>
                        <div className="mt-4 flex gap-3">
                            <Typography
                                as="a"
                                href="#"
                                variant="small"
                                className="font-medium opacity-80"
                                onClick={() => setOpenAlert(false)}>
                                Dismiss
                            </Typography>
                            <Typography
                                as="a"
                                href="#"
                                variant="small"
                                className="hidden font-medium">
                                Upgrade Now
                            </Typography>
                        </div>
                    </Alert>
                </Card>
            </Drawer>
        </>
    )
}

export default NavbarSimple
