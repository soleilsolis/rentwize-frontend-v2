import Address from '@/components/forms/Landlord/Address'
import FactsAndFeatures from '@/components/forms/Landlord/FactsAndFeatures'
import UploadImages from '@/components/forms/Landlord/UploadImages'
import {
    Input,
    Option,
    Select,
    Typography,
    Textarea,
    Button,
} from '@/components/MaterialTailwind'
import { PhotoIcon, PlusIcon } from '@heroicons/react/24/solid'

const EditProperty = () => {
    const data = [
        {
            imageLink:
                'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        },
        {
            imageLink:
                'https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        },
        {
            imageLink:
                'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
        },
        {
            imageLink:
                'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
        },
        {
            imageLink:
                'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
        },
        {
            imageLink:
                'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
        },
        {
            imageLink:
                'https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg',
        },
        {
            imageLink:
                'https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80',
        },
    ]
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <section>
                        <Typography
                            variant="h3"
                            as="h1"
                            className="text-gray-900">
                            Edit Property
                        </Typography>
                        <Typography
                            color="gray"
                            className="my-2 font-normal"
                            as="p">
                            Edit Property Details
                        </Typography>
                    </section>

                    <div className="space-y-4">
                        <Typography variant="h5" as="h2">
                            Address
                        </Typography>

                        <Address />
                    </div>

                    <div className="space-y-4">
                        <Typography variant="h5" as="header">
                            Description
                        </Typography>

                        <Textarea label="Describe your property..." />
                    </div>
                    <div className="space-y-4">
                        <Typography variant="h5" as="header">
                            Features
                        </Typography>
                    </div>
                    <FactsAndFeatures />
                </div>

                <UploadImages images={data} />
            </div>

            <section className="flex gap-2 mt-4 ">
                <Button color="blue">Save</Button>
                <Button variant="text">Cancel</Button>
            </section>
        </div>
    )
}

export default EditProperty
