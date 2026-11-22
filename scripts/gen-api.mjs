/**
 * Swagger(OpenAPI) 명세로부터 요청/응답 타입을 생성하는 스크립트
 *
 * 실행: pnpm api:generate
 * 결과: src/shared/types/__generated__/data-contracts.ts (직접 수정 금지)
 *
 * - SWAGGER_URL은 .env / .env.local 에서 읽어요 (.env.example 참고)
 * - API 요청 함수는 생성하지 않고 타입만 생성해요 (요청은 @shared/api/ky-instance 의 http 사용)
 */
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { generateApi } from 'swagger-typescript-api'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

for (const envFile of ['.env', '.env.local']) {
  const envPath = path.join(ROOT, envFile)
  if (existsSync(envPath)) process.loadEnvFile(envPath)
}

const { SWAGGER_URL } = process.env

if (!SWAGGER_URL) {
  console.error(
    '❌ SWAGGER_URL이 없어요. .env 파일에 SWAGGER_URL을 추가해주세요. (.env.example 참고)',
  )
  process.exit(1)
}

await generateApi({
  url: SWAGGER_URL,
  output: path.join(ROOT, 'src/shared/types/__generated__'),
  fileName: 'data-contracts.ts',
  generateClient: false,
  extractRequestBody: true,
  extractResponseBody: true,
  extractRequestParams: true,
  cleanOutput: true,
})
