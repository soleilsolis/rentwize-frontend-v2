'use client'

import {
    Avatar,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
} from '@material-tailwind/react'

import DetailedProperty from '@/components/globals/Properties/DetailedProperty'
import { useRouter } from 'next/navigation'

const ViewProperty = ({ }: { params: { id: string } }) => {
    const router = useRouter()
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
                <List placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <ListItem
                        key={'meow'}
                        onClick={() => router.push('/landlord/properties/applications/view/1')} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <ListItemPrefix placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            <Avatar
                                variant="circular"
                                alt="candice"
                                src="https://docs.material-tailwind.com/img/face-1.jpg" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                            />
                        </ListItemPrefix>
                        <div>
                            <Typography variant="h6" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Tania Andrew
                            </Typography>
                            <Typography
                                variant="small"
                                color="gray"
                                className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Software Engineer @ Material Tailwind
                            </Typography>
                        </div>
                    </ListItem>
                    <ListItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <ListItemPrefix placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            <Avatar
                                variant="circular"
                                alt="alexander"
                                src="https://docs.material-tailwind.com/img/face-2.jpg" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                            />
                        </ListItemPrefix>
                        <div>
                            <Typography variant="h6" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Alexander
                            </Typography>
                            <Typography
                                variant="small"
                                color="gray"
                                className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Backend Developer @ Material Tailwind
                            </Typography>
                        </div>
                    </ListItem>
                    <ListItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <ListItemPrefix placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            <Avatar
                                variant="circular"
                                alt="emma"
                                src="https://docs.material-tailwind.com/img/face-3.jpg" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                            />
                        </ListItemPrefix>
                        <div>
                            <Typography variant="h6" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Emma Willever
                            </Typography>
                            <Typography
                                variant="small"
                                color="gray"
                                className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
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

    return <DetailedProperty data={data} params={null} />
}

export default ViewProperty
