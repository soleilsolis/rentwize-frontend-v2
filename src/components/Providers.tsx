'use client'

import '@/app/global.css'
import { ThemeProvider } from '@/components/MaterialTailwind'

export function Providers({ children }) {
    return <ThemeProvider>{children}</ThemeProvider>
}
