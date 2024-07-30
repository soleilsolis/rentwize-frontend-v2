"use client"
import NavbarSimple from "@/components/Navbar"
import { Button } from "@material-tailwind/react"

const Sample = () => {

    const name = "paguio"

    return (
        <div>
            <Button>minor {name}</Button>
        </div>
    )
}

export default Sample
