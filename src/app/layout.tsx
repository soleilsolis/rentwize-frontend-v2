import { Providers } from "@/components/Providers"


const Layout = ({ children }) => {
    return (
        <html lang="en">
            <body className="antialiased bg-blue-50/10 min-h-screen">
                <Providers>
                    <div className="h-full">{children}</div>
                </Providers>
            </body>
        </html>
    )
}

export default Layout
