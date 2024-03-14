'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'

//@ts-ignore
export function ThemeProvider({ children, ...props}){
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}