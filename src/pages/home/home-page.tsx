import { Link } from 'react-router'

import { ROUTE_PATH } from '@app/router/path'

export const HomePage = () => {
  return (
    <div>
      홈
      {(import.meta.env.DEV || import.meta.env.VITE_ENABLE_STYLEGUIDE === 'true') && (
        <Link to={ROUTE_PATH.STYLEGUIDE} className='ml-2 rounded border px-3 py-1'>
          Style Guide
        </Link>
      )}
    </div>
  )
}
