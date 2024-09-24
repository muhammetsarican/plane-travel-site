import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.tsx'
import { FlightDataProvider } from './providers/FlightDataProvider.tsx'
import { AxiosProvider } from './providers/AxiosProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <>
    <AxiosProvider>
      <FlightDataProvider>
        <RouterProvider router={router} />
      </FlightDataProvider>
    </AxiosProvider>
  </>,
)
