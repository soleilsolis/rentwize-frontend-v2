import { Breadcrumbs } from '@material-tailwind/react'
import { HomeIcon } from '@heroicons/react/24/solid'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Breadcrumb = () => {
    const pathname = usePathname().split('/')

    delete pathname[0]

    return pathname[2] ? (
        <Breadcrumbs placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            {pathname.map((page, index) => (
                <Link
                    href={
                        '/' +
                        pathname
                            .slice(1, index + 1)
                            .toString()
                            .replaceAll(',', '/')
                    }
                    className={
                        pathname.length - 1 != index ? 'opacity-60' : ''
                    }>
                    <span>
                        {index > 1 ? (
                            page.charAt(0).toUpperCase() + page.slice(1)
                        ) : (
                            <HomeIcon className="w-4 h-4" />
                        )}
                    </span>
                </Link>
            ))}
        </Breadcrumbs>
    ) : (
        ''
    )
}

export default Breadcrumb
