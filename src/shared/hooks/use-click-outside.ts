import { type RefObject, useEffect } from 'react'

export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  onOutside: (event: Event) => void,
  enabled = true,
) => {
  useEffect(() => {
    if (!enabled) return

    const handleOutside = (event: Event) => {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        onOutside(event)
      }
    }

    document.addEventListener('pointerdown', handleOutside)
    document.addEventListener('focusin', handleOutside)

    return () => {
      document.removeEventListener('pointerdown', handleOutside)
      document.removeEventListener('focusin', handleOutside)
    }
  }, [enabled, onOutside, ref])
}
