const TYPOGRAPHY_SAMPLES = [
  { name: 'typo-t1-r', sample: '롯데시네마 디자인 시스템' },
  { name: 'typo-t1-b', sample: '롯데시네마 디자인 시스템' },
  { name: 'typo-t2-b', sample: '함께 만드는 컴포넌트' },
  { name: 'typo-b1-r', sample: '디자인 토큰과 컴포넌트를 한곳에서 확인해요.' },
  { name: 'typo-b1-m', sample: '디자인 토큰과 컴포넌트를 한곳에서 확인해요.' },
  { name: 'typo-b1-b', sample: '디자인 토큰과 컴포넌트를 한곳에서 확인해요.' },
  { name: 'typo-b2-m', sample: '만든 컴포넌트를 여기에 공유해 주세요.' },
  { name: 'typo-b2-b', sample: '만든 컴포넌트를 여기에 공유해 주세요.' },
  { name: 'typo-c1-r', sample: '작은 안내 문구' },
  { name: 'typo-c2-m', sample: '작은 안내 문구' },
  { name: 'typo-c3-m', sample: '작은 안내 문구' },
]

export const TypographySection = () => (
  <section id='typography' className='scroll-mt-6'>
    <h2 className='mb-4 typo-t2-b'>Typography</h2>
    <div className='bg-white overflow-hidden rounded-lg border border-gray-100'>
      {TYPOGRAPHY_SAMPLES.map(({ name, sample }) => (
        <div
          className='grid grid-cols-[100px_1fr] items-center gap-3 border-b border-gray-100 p-3 last:border-0'
          key={name}>
          <code className='typo-c2-m text-gray-700'>{name}</code>
          <p className={`m-0 ${name}`}>{sample}</p>
        </div>
      ))}
    </div>
  </section>
)
