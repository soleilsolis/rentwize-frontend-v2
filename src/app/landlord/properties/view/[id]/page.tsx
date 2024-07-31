'use client'

import { AcademicCapIcon } from '@heroicons/react/24/outline'
import {
    Avatar,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
} from '@material-tailwind/react'
import Image from 'next/image'
import DetailedProperty from '@/components/globals/Properties/DetailedProperty'

const ViewProperty = ({ params }: { params: { id: string } }) => {
    const data = [
        {
            label: 'Overview',
            value: 'overview',
            desc: `It really matters and then like it really doesn't matter.
		  What matters is the people who are sparked by it. And the people 
		  who are like offended by it, it doesn't matter.`,
        },
        {
            label: 'Applications',
            value: 'applications',
            desc: (
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
            ),
        },
        {
            label: 'Prequalifications',
            value: 'prequalifications',
            desc: `We're not always in the position that we want to be at.
		  We're constantly growing. We're constantly making mistakes. We're
		  constantly trying to express ourselves and actualize our dreams.`,
        },
    ]

    return <DetailedProperty data={data} />
}

export default ViewProperty
