import { HttpResponse, http } from 'msw'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const testHandlers = [
  http.get(`${BASE_URL}/api/test`, () => {
    return HttpResponse.json({
      status: 200,
      message: 'MSW 연결 성공',
      data: { ok: true },
    })
  }),
]
