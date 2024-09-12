import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Retry failed requests once
      staleTime: 1000 * 60 * 5, // Data is considered fresh for 5 minutes
    },
  },
})

export default queryClient
