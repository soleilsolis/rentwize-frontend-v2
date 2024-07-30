import { Card, CardBody, Typography, Avatar } from '@/components/MaterialTailwind'

const customers = [
    {
        name: 'Mister Kip',
        email: '12 Hongkong Street, Onitsuka Tiger Village, Davao',
        price: 400,
        image: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg',
    },
    {
        name: 'Karina Paguio',
        email: '12 Hongkong Street, Onitsuka Tiger Village, Davao',
        price: 400,
        image: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg',
    },
]

const CardWithList = () => {
    return (
        <Card className="w-full h-full">
            <CardBody>
                <div className="mb-4 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray" className="">
                        New Applications
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue"
                        className="font-bold">
                        View all
                    </Typography>
                </div>
                <div className="divide-y divide-gray-200">
                    {customers.map(({ name, email, price, image }, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between pb-3 pt-3 last:pb-0">
                            <div className="flex items-center gap-x-3">
                                <Avatar size="sm" src={image} alt={name} />
                                <div>
                                    <Typography color="blue-gray" variant="h6">
                                        {name}
                                    </Typography>
                                    <Typography variant="small" color="gray">
                                        {email}
                                    </Typography>
                                </div>
                            </div>
                            <Typography color="blue-gray" variant="h6">
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
