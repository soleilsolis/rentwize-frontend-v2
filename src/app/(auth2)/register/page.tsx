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
    const [company_name, setCompanyName] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')

    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(false)

    const { register } = useAuth({
        middleware: 'guest',
    })

    const submitForm = e => {
        e.preventDefault()

        register({
            first_name,
            last_name,
            name,
            email,
            password,
            company_name,
            password_confirmation,
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
                        <div>
                            <Input
                                id="first_name"
                                color="gray"
                                size="lg"
                                name="first_name"
                                label="First Name"
                                className="min-w-[100px]"
                                onChange={e =>
                                    setFirstName(e.currentTarget.value)
                                }
                            />
                        </div>

                        <Input
                            id="last_name"
                            color="gray"
                            size="lg"
                            name="last_name"
                            label="Last Name"
                            className="min-w-[100px]"
                            onChange={e => setLastName(e.currentTarget.value)}
                        />
                    </div>

                    <div>
                        <Input
                            id="name"
                            color="gray"
                            size="lg"
                            name="name"
                            label="User Name"
                            onChange={e => setName(e.currentTarget.value)}
                        />
                    </div>

                    <div>
                        <Input
                            id="company_name"
                            color="gray"
                            size="lg"
                            name="company_name"
                            value={company_name}
                            label="Company Name"
                            onChange={e =>
                                setCompanyName(e.currentTarget.value)
                            }
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
                            value={email}
                            onChange={e => setEmail(e.currentTarget.value)}
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
                            onChange={e => setPassword(e.currentTarget.value)}
                        />
                    </div>

                    <div>
                        <Input
                            name="password_confirmation"
                            size="lg"
                            label="Confirm Password"
                            type="password"
                            value={password_confirmation}
                            onChange={e =>
                                setPasswordConfirmation(e.currentTarget.value)
                            }
                        />
                    </div>
                    <Button
                        type="submit"
                        color="gray"
                        size="lg"
                        className="mt-6"
                        fullWidth>
                        register
                    </Button>
                    <Button
                        variant="outlined"
                        disabled
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
