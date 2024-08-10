'use client'

import { Providers } from '@/components/Providers'

const Layout = ({ children }) => {
    return (
        <html lang="en">
            <body className="relative antialiased bg-blue-50/10 h-screen min-h-screen">
                <Providers>
                    <div className="relative h-screen min-h-screen">
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    )
}

export default Layout
