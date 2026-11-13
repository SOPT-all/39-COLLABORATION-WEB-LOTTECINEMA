import { useState } from 'react'

import { BottomSheet } from '@shared/components/bottom-sheet/bottom-sheet'
import { Button } from '@shared/components/button/button'

import { ShowcaseSection } from './showcase-section'

export const CommonShowcase = () => {
  const [isBackdropClosableOpen, setIsBackdropClosableOpen] = useState(false)
  const [isBackdropNotClosableOpen, setIsBackdropNotClosableOpen] = useState(false)

  return (
    <ShowcaseSection title='Common'>
      {/* Button 컴포넌트 */}
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='dark'>Dark</Button>
      <Button variant='primary' size='small'>
        Small
      </Button>
      <Button variant='cta'>CTA</Button>

      {/* BottomSheet: 배경 터치로 닫히는 경우와 닫히지 않는 경우 */}
      <div className='flex flex-col items-center gap-3'>
        <button type='button' onClick={() => setIsBackdropClosableOpen(true)}>
          BottomSheet 열기
        </button>
        <span className='text-center typo-c1-r text-gray-700'>Default</span>
      </div>
      <div className='flex flex-col items-center gap-3'>
        <button type='button' onClick={() => setIsBackdropNotClosableOpen(true)}>
          BottomSheet 열기
        </button>
        <span className='text-center typo-c1-r text-gray-700'>isBackdropClosable=false</span>
      </div>

      {/* Default: 상영 정보 확인창 형태 */}
      <BottomSheet
        isOpen={isBackdropClosableOpen}
        onClose={() => setIsBackdropClosableOpen(false)}
        ariaLabel='상영 정보 확인창 예시'
        header={<p className='bg-gray-050 px-5 py-2.5 typo-t1-b'>Header 영역</p>}
        footer={
          <button
            type='button'
            className='w-full rounded bg-primary py-3.5 typo-b2-m text-gray-000'
            onClick={() => setIsBackdropClosableOpen(false)}>
            Button (Footer 영역)
          </button>
        }>
        <p className='bg-gray-050 px-5 py-6 typo-b1-r text-gray-700'>
          Children 영역(배경을 누를 시 닫힘)
        </p>
      </BottomSheet>

      {/* isBackdropClosable=false: 인원 선택 모달 형태 */}
      <BottomSheet
        isOpen={isBackdropNotClosableOpen}
        onClose={() => setIsBackdropNotClosableOpen(false)}
        ariaLabel='인원 선택 모달 예시'
        isBackdropClosable={false}
        header={
          <p className='border-b border-gray-100 px-5 py-3 typo-b2-m text-gray-1000'>Header 영역</p>
        }
        footer={
          <button
            type='button'
            className='w-full rounded bg-primary py-3.5 typo-b2-m text-gray-000'
            onClick={() => setIsBackdropNotClosableOpen(false)}>
            Button (Footer 영역)
          </button>
        }>
        <p className='px-5 py-6 typo-b1-r text-gray-700'>
          Children 영역(배경을 눌러도 닫히지 않음)
        </p>
      </BottomSheet>
    </ShowcaseSection>
  )
}
