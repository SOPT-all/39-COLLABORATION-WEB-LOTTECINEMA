import { StrictMode } from 'react'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRoot } from 'react-dom/client'

import { queryClient } from '@shared/api/query-client'
import '@shared/styles/global.css'

import App from './App'

async function enableMocking() {
  if (!import.meta.env.DEV || import.meta.env.VITE_ENABLE_MSW !== 'true') {
    return
  }

  try {
    const { worker } = await import('@shared/mocks/browser')

    await worker.start({
      onUnhandledFrame: 'bypass',
    })
  } catch (error) {
    console.error('MSW 실행에 실패했습니다.', error)
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
        {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </StrictMode>,
  )
})
