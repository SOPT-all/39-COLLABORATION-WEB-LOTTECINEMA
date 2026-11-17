import { showtimeHandlers } from './showtimeHandler'
import { testHandlers } from './testHandler'

export const handlers = [...testHandlers, ...showtimeHandlers]
