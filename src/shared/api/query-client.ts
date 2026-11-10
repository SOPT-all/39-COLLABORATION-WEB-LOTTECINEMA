import { QueryClient } from '@tanstack/react-query'

const IS_PROD = import.meta.env.PROD

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
      retry: IS_PROD ? 1 : false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
})
