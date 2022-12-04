import { ColorModeContext, useMode } from './theme'

import { Sidebar, Topbar } from './scenes'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppRoutes } from './routes'

export const App = () => {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <AppRoutes />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
