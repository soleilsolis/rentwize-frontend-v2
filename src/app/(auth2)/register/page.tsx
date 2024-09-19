'use client'
import { useState } from 'react'

import { Typography, Input, Button } from '@material-tailwind/react'
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid'
import { useAuth } from '@/hooks/auth'

export function Basic() {
    const [passwordShown, setPasswordShown] = useState(false)
    const togglePasswordVisiblity = () => setPasswordShown(cur => !cur)

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(false)

    const { register } = useAuth({
        middleware: 'guest',
    })

    const submitForm = (e: { preventDefault: () => void }) => {
        e.preventDefault()

        register({
            first_name,
            last_name,
            name,
            email,
            password,
            setErrors,
            setStatus,
        })
    }

    return (
        <section className="grid text-center h-screen items-center p-8">
            <div>
                <Typography variant="h3" color="blue-gray" className="mb-2">
                    Register
                </Typography>
                <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
                    Register for Leasewise, streamline you rental business!
                </Typography>
                <form
                    onSubmit={submitForm}
                    action="#"
                    className="mx-auto max-w-[28rem] text-left space-y-6">
                    <div className="md:flex gap-2.5 space-y-6 md:space-y-0">
                        <Input
                            id="first_name"
                            color="gray"
                            size="lg"
                            name="first_name"
                            label="First Name"
                            className="min-w-[100px]"
                        />

                        <Input
                            id="last_name"
                            color="gray"
                            size="lg"
                            name="last_name"
                            label="Last Name"
                            className="min-w-[100px]"
                        />
                    </div>
                    <div>
                        <Input
                            id="name"
                            color="gray"
                            size="lg"
                            name="name"
                            label="User Name"
                        />
                    </div>

                    <div>
                        <Input
                            id="email"
                            color="gray"
                            size="lg"
                            type="email"
                            name="email"
                            label="Your Email"
                        />
                    </div>
                    <div>
                        <Input
                            name="password"
                            size="lg"
                            label="Password"
                            type={passwordShown ? 'text' : 'password'}
                            icon={
                                <i onClick={togglePasswordVisiblity}>
                                    {passwordShown ? (
                                        <EyeIcon className="h-5 w-5" />
                                    ) : (
                                        <EyeSlashIcon className="h-5 w-5" />
                                    )}
                                </i>
                            }
                        />
                    </div>
                    <Button color="gray" size="lg" className="mt-6" fullWidth>
                        register
                    </Button>
                    <Button
                        type="submit"
                        disabled
                        variant="outlined"
                        size="lg"
                        className="mt-6 flex h-12 items-center justify-center gap-2"
                        fullWidth>
                        <img
                            src={`https://www.material-tailwind.com/logos/logo-google.png`}
                            alt="google"
                            className="h-6 w-6"
                        />{' '}
                        coming soon
                    </Button>
                    <Typography
                        variant="small"
                        color="gray"
                        className="!mt-4 text-center font-normal">
                        Already registered?{' '}
                        <a href="/login" className="font-medium text-gray-900">
                            Sign In
                        </a>
                    </Typography>
                </form>
            </div>
        </section>
    )
}

export default Basic
