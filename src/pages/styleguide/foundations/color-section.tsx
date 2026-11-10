const COLOR_TOKENS = [
  { name: 'gray-000', value: '#FFFFFF' },
  { name: 'gray-050', value: '#F8F8F8' },
  { name: 'gray-100', value: '#EEEEEE' },
  { name: 'gray-200', value: '#DDDDDD' },
  { name: 'gray-300', value: '#CCCCCC' },
  { name: 'gray-400', value: '#B2B2B2' },
  { name: 'gray-600', value: '#999999' },
  { name: 'gray-700', value: '#666666' },
  { name: 'gray-800', value: '#494949' },
  { name: 'gray-900', value: '#333333' },
  { name: 'gray-1000', value: '#000000' },
  { name: 'primary', value: '#FF243E' },
  { name: 'secondary', value: '#FFF0F0' },
  { name: 'date-saturday', value: '#243CA3' },
  { name: 'date-sunday', value: '#EF3D7B' },
  { name: 'seat-available', value: '#417652' },
  { name: 'seat-default', value: '#1EAFFD' },
]

export const ColorSection = () => (
  <section id='colors' className='scroll-mt-6'>
    <h2 className='mb-4 typo-t2-b'>Colors</h2>
    <div className='grid grid-cols-5 gap-2'>
      {COLOR_TOKENS.map(({ name, value }) => (
        <div className='bg-white overflow-hidden rounded-md border border-gray-200' key={name}>
          <div className='h-16' style={{ backgroundColor: value }} />
          <code className='block p-2 typo-c2-m text-gray-700'>{name}</code>
        </div>
      ))}
    </div>
  </section>
)
