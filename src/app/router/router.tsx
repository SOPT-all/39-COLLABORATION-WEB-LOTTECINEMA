import { createBrowserRouter } from 'react-router'

import { RootLayout } from '@app/layout/root-layout'

import { HomePage } from '@pages/home/home-page'

import { ROUTE_PATH } from './path'

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    HydrateFallback: () => null,
    children: [
      {
        path: ROUTE_PATH.HOME,
        Component: HomePage,
      },
      {
        path: ROUTE_PATH.BOOKING,
        lazy: async () => {
          const { BookingPage } = await import('@pages/booking/booking-page')
          return { Component: BookingPage }
        },
      },
      {
        path: ROUTE_PATH.SEAT_SELECTION,
        lazy: async () => {
          const { SeatSelectionPage } = await import('@pages/seat-selection/seat-selection-page')
          return { Component: SeatSelectionPage }
        },
      },
      {
        path: ROUTE_PATH.PAYMENT,
        lazy: async () => {
          const { PaymentPage } = await import('@pages/payment/payment-page')
          return { Component: PaymentPage }
        },
      },
      ...(import.meta.env.DEV
        ? [
            {
              path: ROUTE_PATH.STYLEGUIDE,
              lazy: async () => {
                const { StyleguidePage } = await import('@pages/styleguide/styleguide-page')
                return { Component: StyleguidePage }
              },
            },
          ]
        : []),
    ],
  },
])
