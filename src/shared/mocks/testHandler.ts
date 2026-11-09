import { HttpResponse, http } from 'msw'

export const testHandlers = [
  http.get('/api/test', () => {
    return HttpResponse.json({
      success: true,
      message: 'MSW 연결 성공',
    })
  }),
]
