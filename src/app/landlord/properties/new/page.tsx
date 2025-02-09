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
        icon: <HomeModernIcon className='h-5' />,
    },
    {
        content: <Textarea label="Description" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}></Textarea>,
        heading: 'Describe Your Property',
        icon: <PencilIcon className="h-5 w-5" />,
    },
    {
        content: <UploadImages images={images}></UploadImages>,
        heading: 'Upload Images',
        icon: <PhotoIcon className="h-5 w-5" />,
    },
    {
        content: <FactsAndFeatures />,
        heading: 'Add Facts and Features (Optional)',
        icon: <BuildingLibraryIcon className='h-5 w-5' />,
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
                    onClick={() => router.push('/landlord/properties/view/1')} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Save
                </Button>
            </>
        ),
        heading: 'Confirm New Property',
    }

    return <Steps steps={steps} confirmation={confirmation} />
}

export default NewProperty
