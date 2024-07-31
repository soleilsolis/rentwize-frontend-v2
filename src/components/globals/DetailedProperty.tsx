'use client'

import { AcademicCapIcon } from '@heroicons/react/24/outline'
import {
    Avatar,
    Breadcrumbs,
    Carousel,
    List,
    ListItem,
    ListItemPrefix,
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
    Typography,
} from '@material-tailwind/react'
import Image from 'next/image'

const ViewProperty = ({
    params,
    data,
    breadcrumbs
}: {
    params: { id: string }
    data: []
    breadcrumbs: []
}) => {
    return (
        <div className="space-y-6">
            <Breadcrumbs>
                {breadcrumbs.map(({ href, name }) => (
                    <a href={href} className="opacity-60">
                        {name}
                    </a>
                ))}
                <a href="#" className="opacity-60">
                    Docs
                </a>
            </Breadcrumbs>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section>
                    <Carousel className="rounded-xl">
                        <img
                            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                            alt="image 2"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
                    </Carousel>
                </section>

                <section className="space-y-2">
                    <Typography variant="h1" className="text-4xl font-semibold">
                        34 Hong Kong St. Onitsuka Tiger Village, Davao
                    </Typography>
                    <Typography variant="lead" color="gray">
                        Bungalow
                    </Typography>
                    <Typography variant="h2" className="text-5xl">
                        $100,000
                    </Typography>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-4">
                        <List>
                            <ListItem>
                                <ListItemPrefix>
                                    <AcademicCapIcon className="w-10 h-10"></AcademicCapIcon>
                                </ListItemPrefix>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        Tania Andrew
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="font-normal">
                                        Software Engineer @ Material Tailwind
                                    </Typography>
                                </div>
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <Avatar
                                        variant="circular"
                                        alt="alexander"
                                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                                    />
                                </ListItemPrefix>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        Alexander
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="font-normal">
                                        Backend Developer @ Material Tailwind
                                    </Typography>
                                </div>
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <Avatar
                                        variant="circular"
                                        alt="emma"
                                        src="https://docs.material-tailwind.com/img/face-3.jpg"
                                    />
                                </ListItemPrefix>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        Emma Willever
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="font-normal">
                                        UI/UX Designer @ Material Tailwind
                                    </Typography>
                                </div>
                            </ListItem>
                        </List>

                        <List>
                            <ListItem>
                                <ListItemPrefix>
                                    <Avatar
                                        variant="circular"
                                        alt="candice"
                                        src="https://docs.material-tailwind.com/img/face-1.jpg"
                                    />
                                </ListItemPrefix>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        Tania Andrew
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="font-normal">
                                        Software Engineer @ Material Tailwind
                                    </Typography>
                                </div>
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <Avatar
                                        variant="circular"
                                        alt="alexander"
                                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                                    />
                                </ListItemPrefix>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        Alexander
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="font-normal">
                                        Backend Developer @ Material Tailwind
                                    </Typography>
                                </div>
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <Avatar
                                        variant="circular"
                                        alt="emma"
                                        src="https://docs.material-tailwind.com/img/face-3.jpg"
                                    />
                                </ListItemPrefix>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        Emma Willever
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="font-normal">
                                        UI/UX Designer @ Material Tailwind
                                    </Typography>
                                </div>
                            </ListItem>
                        </List>
                    </div>
                </section>

                <section>
                    <Tabs value="html">
                        <TabsHeader>
                            {data.map(({ label, value }) => (
                                <Tab key={value} value={value}>
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody>
                            {data.map(({ value, desc }) => (
                                <TabPanel key={value} value={value}>
                                    {desc}
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                </section>
            </div>
        </div>
    )
}

export default ViewProperty
