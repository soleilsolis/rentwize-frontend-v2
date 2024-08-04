'use client'
import Address from '@/components/forms/Landlord/Address'
import Steps from '@/components/globals/Steps'
import {
    BuildingLibraryIcon,
    HomeModernIcon,
    PencilIcon,
    PhotoIcon,
} from '@heroicons/react/24/solid'
import { Button, Textarea } from '@/components/MaterialTailwind'
import UploadImages from '@/components/forms/Landlord/UploadImages'
import FactsAndFeatures from '@/components/forms/Landlord/FactsAndFeatures'
import { useRouter } from 'next/navigation'

const images = []

const steps = [
    {
        content: <Address />,
        heading: 'Set the Address for your Property',
        icon: HomeModernIcon,
    },
    {
        content: <Textarea label="Description"></Textarea>,
        heading: 'Describe Your Property',
        icon: PencilIcon,
    },
    {
        content: <UploadImages images={images}></UploadImages>,
        heading: 'Upload Images',
        icon: PhotoIcon,
    },
    {
        content: <FactsAndFeatures />,
        heading: 'Add Facts and Features (Optional)',
        icon: BuildingLibraryIcon,
    },
]

const NewProperty = () => {
    const router = useRouter()

    const confirmation: {
        content: any
        controls: any
        heading: string
    } = {
        content: <></>,
        controls: (
            <>
                <Button
                    variant="gradient"
                    color="blue"
                    onClick={() => router.push('/landlord/properties/view/1')}>
                    Save
                </Button>
            </>
        ),
        heading: 'Confirm New Property',
    }

    return <Steps steps={steps} confirmation={confirmation} />
}

export default NewProperty
