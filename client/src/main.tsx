import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.tsx'
import { FlightDataProvider } from './providers/FlightDataProvider.tsx'
import { AxiosProvider } from './providers/AxiosProvider.tsx'
import { UserFlightDataProvider } from './providers/UserFlightProvider.tsx'
import { AuthProvider } from './providers/AuthProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <AuthProvider>
      <AxiosProvider>
        <FlightDataProvider>
          <UserFlightDataProvider>
            <RouterProvider router={router} />
          </UserFlightDataProvider>
        </FlightDataProvider>
      </AxiosProvider>
    </AuthProvider>
  </>,
)
