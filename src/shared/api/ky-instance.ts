import ky, { type Options } from 'ky';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const REQUEST_TIMEOUT = 10_000;

const kyInstance = ky.create({
  prefix: BASE_URL,
  timeout: REQUEST_TIMEOUT,
  retry: { limit: 0 },
});

export const http = {
  get: <T>(url: string, options?: Options) =>
    kyInstance.get(url, options).json<T>(),

  post: <T, B = unknown>(url: string, body?: B, options?: Options) =>
    kyInstance.post(url, { ...options, json: body }).json<T>(),
};