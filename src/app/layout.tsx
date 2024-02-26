import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import type { Metadata } from 'next'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import Box from '@mui/material/Box'


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
      <ThemeRegistry>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Box
            component={"body"}
            sx={{
              '&::-webkit-scrollbar': {
                width: '12px',
              },
              '&::-webkit-scrollbar-button': {
                display: 'none',
              },
              '&::-moz-scrollbar-button:decrement': {
                width: '0px',
              },
              '&::-moz-scrollbar-button:increment': {
                width: '0px',
              },
              '&::-webkit-scrollbar-button:decrement': {
                width: '0px',
              },
              '&::-webkit-scrollbar-button:increment': {
                width: '0px',
              },
              '&::-webkit-scrollbar-thumb': {
                width: '12px',
                border: '3px solid transparent',
                backgroundClip: 'padding-box',
                borderRadius: '6px',
                backgroundColor: 'rgba(0, 0, 0, .5)',
        
                '&:hover': {
                  border: 0,
                },
              },
            }}
          >
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
          </Box>
        </AppRouterCacheProvider>
      </ThemeRegistry>
    </html>
  )
}
