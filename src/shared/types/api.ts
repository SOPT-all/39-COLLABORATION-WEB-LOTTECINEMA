export interface ApiSuccess<T> {
  status: number
  message: string
  data: T
}

export interface ValidationError {
  field?: string
  message: string
}

export interface ApiError {
  status: number
  code: string
  message: string
  errors?: ValidationError[]
}
