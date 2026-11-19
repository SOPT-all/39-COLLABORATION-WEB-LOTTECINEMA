export interface ExclusiveMovie {
  id: number
  posterUrl: string
  title: string
  ageRating: '전체' | '12세' | '15세' | '청불'
  category: '롯시픽' | '롯시플'
}
