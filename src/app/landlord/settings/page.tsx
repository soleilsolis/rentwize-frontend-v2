'use client'
import {
    Button,
    Typography,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Textarea,
} from '@/components/MaterialTailwind'
import { ArrowRightIcon, PhotoIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Settings = () => {
    const router = useRouter()

    const [open, setOpen] = useState(false)


    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 min-h-100 h-100 gap-8">
            <div className="relative">
                <img
                    className="object-cover object-center w-full aspect-1 rounded-full"
                    src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
                    alt=""
                />

                <div className="absolute aspect-1 w-full top-0 rounded-full bg-black/35 opacity-0 hover:opacity-100 transition-opacity">
                    <div className="h-full w-full flex items-center justify-center">
                        <div className="text-gray-50 text-center">
                            <PhotoIcon className="w-10 mx-auto" />
                            Upload Photo
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-3 space-y-8">
                <section className="space-y-2">
                    <Typography variant="h1" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Settings</Typography>
                    <Typography
                        variant="paragraph"
                        className="text-lg font-medium text-gray-700" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <Link href="/landlord/properties/view/1">
                            Customize your profile, change your credentials.
                        </Link>
                    </Typography>
                </section>

                <section className="space-y-8 max-w-xl">
                    <div className="space-y-4">
                        <Typography variant="h5" as="h2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Change Password
                        </Typography>
                        <Input
                            label="Password"
                            name="password"
                            type="password" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}></Input>
                        <Input
                            label="Confirm Password"
                            name="password.confirmation"
                            type="password" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}></Input>

                        <Typography variant="h5" as="h2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Bio
                        </Typography>
                        <Textarea label="Bio" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}> </Textarea>

                        <Button
                            variant="gradient"
                            color="blue"
                            children="Save" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        />
                    </div>
                </section>
            </div>

            <Dialog open={open} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} handler={function (): void {
                throw new Error('Function not implemented.')
            } }>
                <DialogHeader placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <div className="mx-auto">New Tenant Added!</div>
                </DialogHeader>
                <DialogBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    The key to more success is to have a lot of pillows. Put it
                    this way, it took me twenty five years to get these plants,
                    twenty five years of blood sweat and tears, and I&apos;m
                    never giving up, I&apos;m just getting started. I&apos;m up
                    to something. Fan luv.
                </DialogBody>
                <DialogFooter placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <Button
                        variant="text"
                        onClick={() => router.push('/landlord/tenants/view/1')}
                        className="mr-1 flex justify-center items-center gap-2 mx-auto" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <span>Go To Tenant Page</span>
                        <ArrowRightIcon className="w-4 h-4" />
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    )
}

export default Settings
