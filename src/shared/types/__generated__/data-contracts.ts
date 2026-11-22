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
  status: number;
  code: string;
  message: string;
  /** 검증 오류가 있을 때만 포함됩니다. */
  errors?: ValidationError[];
}

/** 검증 오류가 있을 때만 포함됩니다. */
export interface ValidationError {
  /** 객체 전체의 오류이면 생략됩니다. */
  field?: string;
  message: string;
}

export interface ReservationResponse {
  /** @format int64 */
  reservationId: number;
  /** @format int64 */
  showtimeId: number;
  seatCodes: string[];
  ticketCounts: TicketCounts;
  /** @format int32 */
  totalAmount: number;
  /** @format date-time */
  createdAt: string;
}

export interface SuccessResponseReservationResponse {
  /** @format int32 */
  status: number;
  message: string;
  data: ReservationResponse;
}

export interface SuccessResponseString {
  /** @format int32 */
  status: number;
  message: string;
  data: string;
}

export interface ShowtimeListResponse {
  showtimes: ShowtimeResponse[];
}

export interface ShowtimeResponse {
  /** @format int64 */
  showtimeId: number;
  /** @format date-time */
  startAt: string;
  /** @format date-time */
  endAt: string;
  screenName: string;
  seatType: "STANDARD" | "RECLINER";
  formatType: "2D" | "3D" | "4DX";
  languageType: "DUBBED" | "SUBTITLED" | "NONE";
  /** @format int32 */
  totalSeatCount: number;
  /** @format int32 */
  reservedSeatCount: number;
  /** @format int32 */
  availableSeatCount: number;
}

export interface SuccessResponseShowtimeListResponse {
  /** @format int32 */
  status: number;
  message: string;
  data: ShowtimeListResponse;
}

export interface CinemaInfo {
  name: string;
}

export interface MovieInfo {
  title: string;
  posterUrl: string | null;
  ageRating: string;
}

export interface ScreenInfo {
  name: string;
  seatType: "STANDARD" | "RECLINER";
}

export interface SeatInfo {
  seatCode: string;
  /** @format int32 */
  rowIndex: number;
  /** @format int32 */
  columnIndex: number;
  /**
   * false: 선택 가능(T), true: 예매 확정되어 선택 불가(F)
   * @example false
   */
  isReserved: boolean;
}

export interface ShowtimeSeatResponse {
  /** @format date-time */
  startAt: string;
  /** @format date-time */
  endAt: string;
  formatType: "2D" | "3D" | "4DX";
  movie: MovieInfo;
  cinema: CinemaInfo;
  screen: ScreenInfo;
  /**
   * 확정 예매를 제외한 선택 가능 좌석 수
   * @format int32
   * @example 77
   */
  availableSeatCount: number;
  /**
   * 통로를 제외한 실제 좌석 수
   * @format int32
   * @example 77
   */
  totalSeatCount: number;
  seats: SeatInfo[];
  /** 할인 전 상품금액 계산에 사용하는 유형별 1인 단가(원) */
  ticketPrices: TicketPrices;
}

export interface SuccessResponseShowtimeSeatResponse {
  /** @format int32 */
  status: number;
  message: string;
  data: ShowtimeSeatResponse;
}

/** 할인 전 상품금액 계산에 사용하는 유형별 1인 단가(원) */
export interface TicketPrices {
  /** @format int32 */
  adult: number;
  /** @format int32 */
  teen: number;
  /** @format int32 */
  senior: number;
  /** @format int32 */
  disabled: number;
}

export interface MovieListResponse {
  /** @format int64 */
  movieId: number;
  title: string;
  posterUrl: string | null;
  genre: string;
  /** @format int32 */
  runtimeMinutes: number;
  ageRating: string;
  /** @format date */
  releaseDate: string;
  curationType: "LOTSI_PICK" | "LOTSI_PLAY" | null;
  /** @format int32 */
  curationOrder: number | null;
  /** @format int32 */
  popularityRank: number | null;
  bookingRate: number | null;
  movieRating: number | null;
  /**
   * 개봉 전에는 남은 일수, 개봉 당일 및 이후에는 null입니다.
   * @format int64
   */
  dDay: number | null;
}

export interface MovieListsResponse {
  popularMovies: MovieListResponse[];
  lotsiPickMovies: MovieListResponse[];
  lotsiPlayMovies: MovieListResponse[];
}

export interface SuccessResponseMovieListsResponse {
  /** @format int32 */
  status: number;
  message: string;
  data: MovieListsResponse;
}

export interface CinemaResponse {
  /** @format int64 */
  cinemaId: number;
  cinemaName: string;
  hasShowtimes: boolean;
}

export interface MovieCinemaResponse {
  myCinemas: MyCinemaResponse[];
  regions: RegionResponse[];
}

export interface MyCinemaResponse {
  /** @format int64 */
  cinemaId: number;
  cinemaName: string;
  hasShowtimes: boolean;
}

export interface RegionResponse {
  /** @format int64 */
  regionId: number;
  regionName: string;
  cinemas: CinemaResponse[];
}

export interface SuccessResponseMovieCinemaResponse {
  /** @format int32 */
  status: number;
  message: string;
  data: MovieCinemaResponse;
}

export interface CreateReservationParams {
  /**
   * 상영 회차 ID
   * @format int64
   * @min 0
   * @exclusiveMin true
   */
  showtimeId: number;
}

export type CreateReservationData = SuccessResponseReservationResponse;

export type GetHealthData = SuccessResponseString;

export interface FindShowtimesParams {
  /**
   * 조회할 영화 ID
   * @format int64
   * @min 0
   * @exclusiveMin true
   */
  movieId: number;
  /**
   * 조회할 영화관 ID
   * @format int64
   * @min 0
   * @exclusiveMin true
   */
  cinemaId: number;
  /**
   * 조회할 날짜, 생략 시 KST 기준 오늘 날짜를 사용합니다.
   * @format date
   * @example "2026-11-27"
   */
  date?: string;
}

export type FindShowtimesData = SuccessResponseShowtimeListResponse;

export interface GetShowtimeSeatsParams {
  /**
   * 선택한 상영 회차 ID
   * @format int64
   * @min 0
   * @exclusiveMin true
   */
  showtimeId: number;
}

export type GetShowtimeSeatsData = SuccessResponseShowtimeSeatResponse;

export type FindMoviesData = SuccessResponseMovieListsResponse;

export interface GetMovieCinemasParams {
  /**
   * 조회할 영화 ID (1 이상)
   * @format int64
   * @min 0
   * @exclusiveMin true
   * @example 1
   */
  movieId: number;
}

export type GetMovieCinemasData = SuccessResponseMovieCinemaResponse;
