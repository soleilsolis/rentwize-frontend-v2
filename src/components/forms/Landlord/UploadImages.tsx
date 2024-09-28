import { PhotoIcon, PlusIcon } from '@heroicons/react/24/solid'
import { Key } from 'react'

const UploadImages = ({ images }) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {images.length === 0 ? <div></div> : ''}
                <button className="hover:-translate-y-1 transition-transform flex items-center h-40 w-full max-w-full rounded-lg border-dashed border-2 border-blue-300 bg-blue-50 space-y-1">
                    <div className="mx-auto">
                        <div className="flex items-center">
                            <PlusIcon className="w-5 h-5 mx-auto" />

                            <PhotoIcon className="w-10 h-10 mx-auto" />
                        </div>
                        Add Image
                    </div>
                </button>

                {images.map(({ imageLink }: any, index: Key) => (
                    <div key={index}>
                        <img
                            className="h-40 w-full max-w-full rounded-lg object-cover object-center hover:-translate-y-1 transition-transform "
                            src={imageLink}
                            alt="gallery-photo"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UploadImages
