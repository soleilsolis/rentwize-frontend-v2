import { Breadcrumbs } from '@material-tailwind/react'
import { HomeIcon } from '@heroicons/react/24/solid'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Breadcrumb = () => {
    const pathname = usePathname().split('/')

    return (
        <Breadcrumbs>
            {/* <a href={`/`+ pathname[1]} className="opacity-60">
                <HomeIcon className="w-4 h-4" />
            </a> */}

            {pathname.map((page, index) => (
                <Link
                    href={"/"+ pathname.slice(1, index + 1).toString().replaceAll(",", "/")}
                    className={
                        pathname.length - 1 != index ? 'opacity-60' : ''
                    }>
                    <span>{page.charAt(0).toUpperCase() + page.slice(1)}</span>
                </Link>
            ))}
        </Breadcrumbs>
    )
}

export default Breadcrumb
