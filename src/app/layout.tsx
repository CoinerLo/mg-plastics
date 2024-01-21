import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import Box from '@mui/material/Box'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MG Plastics',
  description: 'Unternehmen für Kunststoffprodukte',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <ThemeRegistry>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                bgcolor: 'background.default',
                p: 3,
              }}
            >
              {children}
            </Box>
          </AppRouterCacheProvider>
        </ThemeRegistry>
      </body>
    </html>
  )
}
