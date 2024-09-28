import { Card, CardBody, Typography, Avatar } from '@/components/MaterialTailwind'

const customers = [
    {
        name: 'Tania Andrew',
        email: 'tania@gmail.com',
        price: 400,
        image: 'https://picsum.photos/200',
    },
    {
        name: 'John Micheal',
        email: 'john@gmail.com',
        price: 420,
        image: 'https://picsum.photos/200',
    },
    {
        name: 'Alexa Liras',
        email: 'alexa@gmail.com',
        price: 340,
        image: 'https://picsum.photos/200',
    },
    {
        name: 'Richard Gran',
        email: 'richard@gmail.com',
        price: 520,
        image: 'https://picsum.photos/200',
    },
    {
        name: 'Micheal Levi',
        email: 'levi@gmail.com',
        price: 780,
        image: 'https://picsum.photos/200',
    },
    {
        name: 'Micheal Levi',
        email: 'levi@gmail.com',
        price: 780,
        image: 'https://picsum.photos/200',
    },
]

const CardWithList = () => {
    return (
        <Card className="w-full h-full" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <div className="mb-4 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray" className="" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Latest Payments
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue"
                        className="font-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        View all
                    </Typography>
                </div>
                <div className="divide-y divide-gray-200">
                    {customers.map(({ name, email, price, image }, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between pb-3 pt-3 last:pb-0">
                            <div className="flex items-center gap-x-3">
                                <Avatar size="sm" src={image} alt={name} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                                <div>
                                    <Typography color="blue-gray" variant="h6" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        {name}
                                    </Typography>
                                    <Typography variant="small" color="gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        {email}
                                    </Typography>
                                </div>
                            </div>
                            <Typography color="blue-gray" variant="h6" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                ${price}
                            </Typography>
                        </div>
                    ))}
                </div>
            </CardBody>
        </Card>
    )
}

export default CardWithList
