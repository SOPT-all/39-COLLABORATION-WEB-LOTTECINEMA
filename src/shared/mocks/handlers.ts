import { showtimeHandlers } from './showtime-handler'
import { testHandlers } from './test-handler'

export const handlers = [...testHandlers, ...showtimeHandlers]
