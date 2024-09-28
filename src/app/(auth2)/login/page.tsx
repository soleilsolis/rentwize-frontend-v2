'use client'
import { useEffect, useState } from 'react'

import { Typography, Input, Button } from '@material-tailwind/react'
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/navigation'
import AuthSessionStatus from '../AuthSessionStatus'
import Image from 'next/image'

export function Basic() {
    const [passwordShown, setPasswordShown] = useState(false)
    const togglePasswordVisiblity = () => setPasswordShown(cur => !cur)
    const [redirectIfAuthenticated, setRedirectIfAuthenticated] = useState("")
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: redirectIfAuthenticated === "" ? "" : `/${redirectIfAuthenticated}`,
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.reset))
        } else {
            setStatus(null)
        }

    })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            setErrors,
            setStatus,
            setRedirectIfAuthenticated,
        })
    }

    return (
        <>
            <AuthSessionStatus className="mb-4" status={status} />

            <section className="grid text-center h-screen items-center p-8">
                <div>
                    <Typography variant="h3" color="blue-gray" className="mb-2">
                        Sign In
                    </Typography>
                    <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
                        Enter your email and password to sign in
                    </Typography>
                    <form
                        onSubmit={submitForm}
                        action="#"
                        className="mx-auto max-w-[28rem] text-left">
                        <div className="mb-6">
                            <Input
                                label="Your Email"
                                id="email"
                                color="gray"
                                size="lg"
                                type="email"
                                name="email"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                                placeholder="name@mail.com"
                            />
                            <Typography
                                variant="small"
                                className="font-semibold mt-2"
                                color="red">
                                {errors?.email}
                            </Typography>
                        </div>
                        <div className="mb-6">

                            <Input
                                size="lg"
                     
                                label='Password'
                                value={password}
                                onChange={event =>
                                    setPassword(event.target.value)
                                }
                                className="w-full placeholder:opacity-100 border-t-blue-gray-200"
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
                        <Button
                            type="submit"
                            color="gray"
                            size="lg"
                            className="mt-6"
                            fullWidth>
                            sign in
                        </Button>
                        <div className="!mt-4 flex justify-end">
                            <Typography
                                as="a"
                                href="#"
                                color="blue-gray"
                                variant="small"
                                className="font-medium">
                                Forgot password
                            </Typography>
                        </div>
                        <Button
                            disabled
                            variant="outlined"
                            size="lg"
                            className="mt-6 flex h-12 items-center justify-center gap-2"
                            fullWidth>
                            <Image
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
                            Not registered?{' '}
                            <a href="/register" className="font-medium text-gray-900">
                                Create account
                            </a>
                        </Typography>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Basic
