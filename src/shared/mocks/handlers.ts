import { showtimeHandlers } from './showtime-handler'
import { testHandlers } from './test-handler'
import { theaterHandlers } from './theater-handler'

export const handlers = [...testHandlers, ...showtimeHandlers, ...theaterHandlers]
