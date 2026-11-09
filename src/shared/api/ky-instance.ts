import ky, { type Options } from 'ky';

import type { ApiSuccess } from '@shared/types/api';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const REQUEST_TIMEOUT = 10_000;

const kyInstance = ky.create({
  prefix: BASE_URL,
  timeout: REQUEST_TIMEOUT,
  retry: { limit: 0 },
});

export const http = {
  get: async <T>(url: string, options?: Options) => {
    const response = await kyInstance.get(url, options).json<ApiSuccess<T>>();
    return response.data;
  },

  post: async <T, B>(url: string, body: B, options?: Options) => {
    const response = await kyInstance
      .post(url, { ...options, json: body })
      .json<ApiSuccess<T>>();
    return response.data;
  },
};