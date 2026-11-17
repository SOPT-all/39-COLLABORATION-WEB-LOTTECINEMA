/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateReservationRequest {
  /** @format uuid */
  requestId: string;
  ticketCounts: TicketCounts;
  /**
   * @maxItems 8
   * @minItems 1
   */
  seatCodes: string[];
  /** @min 0 */
  expectedTotalAmount: number;
}

export interface TicketCounts {
  /**
   * @min 0
   * @max 8
   */
  adult: number;
  /**
   * @min 0
   * @max 8
   */
  teen: number;
  /**
   * @min 0
   * @max 8
   */
  senior: number;
  /**
   * @min 0
   * @max 8
   */
  disabled: number;
}

export interface ErrorResponse {
  /** @format int32 */
  status?: number;
  code?: string;
  message?: string;
  errors?: ValidationError[];
}

export interface ValidationError {
  field?: string;
  message?: string;
}

export interface ReservationResponse {
  /** @format int64 */
  reservationId?: number;
  /** @format int64 */
  showtimeId?: number;
  seatCodes?: string[];
  ticketCounts?: TicketCounts;
  /** @format int32 */
  totalAmount?: number;
  createdAt?: string;
}

export interface SuccessResponseReservationResponse {
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ReservationResponse;
}

export interface SuccessResponseString {
  /** @format int32 */
  status?: number;
  message?: string;
  data?: string;
}

export interface CinemaInfo {
  name?: string;
}

export interface MovieInfo {
  title?: string;
  posterUrl?: string;
  ageRating?: string;
}

export interface ScreenInfo {
  name?: string;
  seatType?: string;
}

export interface SeatInfo {
  seatCode?: string;
  /** @format int32 */
  rowIndex?: number;
  /** @format int32 */
  columnIndex?: number;
  /**
   * false: 선택 가능(T), true: 예매 확정되어 선택 불가(F)
   * @example false
   */
  isReserved?: boolean;
}

export interface ShowtimeSeatResponse {
  startAt?: string;
  endAt?: string;
  formatType?: string;
  movie?: MovieInfo;
  cinema?: CinemaInfo;
  screen?: ScreenInfo;
  /**
   * 확정 예매를 제외한 선택 가능 좌석 수
   * @format int32
   * @example 77
   */
  availableSeatCount?: number;
  /**
   * 통로를 제외한 실제 좌석 수
   * @format int32
   * @example 77
   */
  totalSeatCount?: number;
  seats?: SeatInfo[];
  /** 할인 전 상품금액 계산에 사용하는 유형별 1인 단가(원) */
  ticketPrices?: TicketPrices;
}

export interface SuccessResponseShowtimeSeatResponse {
  /** @format int32 */
  status?: number;
  message?: string;
  data?: ShowtimeSeatResponse;
}

export interface TicketPrices {
  /** @format int32 */
  adult?: number;
  /** @format int32 */
  teen?: number;
  /** @format int32 */
  senior?: number;
  /** @format int32 */
  disabled?: number;
}

export interface CreateReservationParams {
  /**
   * 상영 회차 ID
   * @format int64
   * @exclusiveMin 0
   */
  showtimeId: number;
}

export type CreateReservationData = SuccessResponseReservationResponse;

export type GetHealthData = SuccessResponseString;

export interface GetShowtimeListsParams {
  /**
   * 조회할 영화 ID
   * @format int64
   * @min 1
   * @exclusiveMin 0
   */
  movieId: number;
  /**
   * 조회할 영화관 ID
   * @format int64
   * @min 1
   * @exclusiveMin 0
   */
  cinemaId: number;
  /**
   * 조회할 날짜, 생략 시 KST 기준 오늘 날짜를 사용합니다.
   * @format date
   * @example "2026-11-27"
   */
  date?: string;
}

export type GetShowtimeListsData = any;

export interface GetShowtimeSeatsParams {
  /**
   * 선택한 상영 회차 ID
   * @format int64
   * @min 1
   * @exclusiveMin 0
   */
  showtimeId: number;
}

export type GetShowtimeSeatsData = SuccessResponseShowtimeSeatResponse;

export type FindMoviesData = any;

export interface GetCinemaByMovieIdParams {
  /**
   * 조회할 영화 ID (1 이상)
   * @format int64
   * @exclusiveMin 0
   * @example 1
   */
  movieId: number;
}

export type GetCinemaByMovieIdData = any;
