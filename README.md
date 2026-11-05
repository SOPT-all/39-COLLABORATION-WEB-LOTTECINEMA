# 39-COLLABORATION-WEB-LOTTECINEMA

PLAY SOPT 39기 합동세미나 모바일 웹 2조 롯데시네마 🎬

<br/>

## 👥 팀원 소개

<table align="center">
  <tr>
    <td align="center" width="200">
      <a href="https://github.com/chaewon41">
        <img width="460" height="460" src="https://github.com/chaewon41.png" alt="이채원"/>
      </a>
      <br />
      <a href="https://github.com/chaewon41"><strong>이채원</strong></a>
      <br />
    </td>
    <td align="center" width="200">
      <a href="https://github.com/a1rhun">
        <img width="460" height="460" src="https://github.com/a1rhun.png" alt="공기훈"/>
      </a>
      <br />
      <a href="https://github.com/a1rhun"><strong>공기훈</strong></a>
      <br />
    </td>
    <td align="center" width="200">
      <a href="https://github.com/nueisx">
        <img width="460" height="460" src="https://github.com/nueisx.png" alt="박시은"/>
      </a>
      <br />
      <a href="https://github.com/nueisx"><strong>박시은</strong></a>
      <br />
    </td>
    <td align="center" width="200">
      <a href="https://github.com/zzos0014">
        <img width="460" height="460" src="https://github.com/zzos0014.png" alt="김지민"/>
      </a>
      <br />
      <a href="https://github.com/zzos0014"><strong>김지민</strong></a>
      <br />
    </td> 
  </tr>
</table>

<br/>

## 🚀 Tech Stack

| 카테고리 | 기술 스택 |
| --- | --- |
| **UI Library** | ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=for-the-badge) |
| **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge) |
| **Build Tool** | ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge) |
| **Package Manager** | ![Pnpm](https://img.shields.io/badge/Pnpm-F69220?logo=pnpm&logoColor=white&style=for-the-badge) |
| **Server State Management** | ![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?logo=reactquery&logoColor=white&style=for-the-badge) |
| **Styling** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) |
| **SVG / API Docs** | ![SVGR](https://img.shields.io/badge/SVGR-FFB13B?style=for-the-badge&logo=svg&logoColor=black) ![Swagger TypeScript API](https://img.shields.io/badge/Swagger_TypeScript_API-85EA2D?logo=swagger&logoColor=black&style=for-the-badge) |
| **API Mocking** | ![MSW](https://img.shields.io/badge/MSW-FF6A33?logo=mockserviceworker&logoColor=white&style=for-the-badge) |
| **Version Control** | ![Git](https://img.shields.io/badge/Git-F05033?logo=git&logoColor=white&style=for-the-badge) ![GitHub](https://img.shields.io/badge/GitHub-121011?logo=github&logoColor=white&style=for-the-badge) |
| **CI/CD** | ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=githubactions&logoColor=white&style=for-the-badge) |
| **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge) |
| **Git Hooks** | ![Husky](https://img.shields.io/badge/Husky-000000?logo=git&logoColor=white&style=for-the-badge) |
| **Formatting** | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?logo=eslint&logoColor=white&style=for-the-badge) ![Prettier](https://img.shields.io/badge/Prettier-1A2C34?logo=prettier&logoColor=F7BA3E&style=for-the-badge) |
| **Cooperation** | ![Notion](https://img.shields.io/badge/Notion-000000?logo=notion&logoColor=white&style=for-the-badge) ![Discord](https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=white&style=for-the-badge) ![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white&style=for-the-badge) |  

<br/>

## 📁 Directory Structure

````
39-COLLABORATION-WEB-LOTTECINEMA
└── src
    ├── app
    │   ├── layout          # 공통 레이아웃 관리
    │   ├── router          # 페이지 라우팅 설정
    │   ├── App.tsx         
    │   └── main.tsx        
    │
    ├── pages
    │   ├── home
    │   │   ├── api         
    │   │   ├── hooks       
    │   │   └── home-page.tsx
    │   │
    │   ├── booking
    │   │   ├── api         
    │   │   ├── components  
    │   │   ├── hooks       
    │   │   └── booking-page.tsx
    │   │
    │   ├── seat-selection
    │   │   ├── api         
    │   │   ├── components  
    │   │   ├── hooks       
    │   │   └── seat-selection-page.tsx
    │   │
    │   └── payment
    │       ├── api         
    │       ├── components 
    │       ├── hooks       
    │       └── payment-page.tsx
    │
    └── shared
        ├── api             # 공통 API 클라이언트 및 설정
        ├── constants       # 공통 상수
        ├── hooks           # 공통 커스텀 훅
        ├── icons           # 공통 아이콘
        ├── styles          # 전역 스타일 및 디자인 토큰
        ├── types           # 공통 타입
        ├── components      # 공통 컴포넌트
        └── utils           # 공통 유틸리티 함수
````

## 🗂️ Convention

### 🌿 Git Branch

| 브랜치 | 용도 |
| --- | --- |
| `main` | 배포용 브랜치 |
| `develop` | 개발용 브랜치 |
| `feat/기능명/#issue-number` | 기능 개발 |

### 🚀 개발 프로세스

### 🔖 Commit Convention

| 태그 | 내용 |
| --- | --- |
| `init` | 초기 세팅 |
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `docs` | 문서 수정 |
| `style` | 스타일 코드 변경 |
| `type` | 타입 수정 |
| `refactor` | 리팩토링 |
| `chore` | 기타 작업 |
| `test` | 테스트 코드 |
| `rename` | 파일 또는 폴더명 수정 |
| `remove` | 파일 또는 폴더 삭제 |
| `hotfix` | 긴급 수정 |

**예시:** `init: 프로젝트 초기 세팅`

### 💻 Code Convention

<details>
<summary>🌐 컴포넌트</summary>

- React 컴포넌트는 `PascalCase` 사용하기
- 일반 함수와 변수는 `camelCase` 사용하기
- **Named Export를 기본으로 사용하기**
  - 불러올 때 이름을 강제할 수 있어 자동 완성 확보 및 리팩토링 시 이름 변경이 용이함
- 자식 요소가 없는 컴포넌트는 Self-closing 태그 사용하기 (`<Component />`)
</details>

<details>
<summary>💡 변수 / 상수</summary>

- `const`를 우선 사용하고, 재할당이 필요한 경우에만 `let` 사용하기
- `var` 사용 금지
- 상수는 `UPPER_SNAKE_CASE` 사용하기
  - 예: `API_KEY`, `BASE_URL`
- 줄임말 지양하고 의미 있는 변수명 사용하기
  - 예: `userData`
- Boolean 변수는 `is` 접두사 사용하기
  - 예: `isActive`
- 문자열 조합은 템플릿 리터럴 사용하기
</details>

<details>
<summary>🔑 함수 & 훅</summary>

**함수 네이밍**

- 어떤 일을 하는지 명확히 묘사하기 (동사 + 명사 형식)

| 접두사 | 사용 목적 | 예시 |
| --- | --- | --- |
| `get` | 값을 가져옴 | `getUserInfo` |
| `create` | 새로운 값을 생성함 | `createMovieData` |
| `check` | 조건이나 상태를 검사함 | `checkPassword` |
| `convert` | 값을 다른 형태로 변환함 | `convertDateFormat` |
| `handle` | 이벤트를 처리함 | `handleSubmit` |
| `is` | Boolean 상태를 나타냄 | `isLoading` |
| `has` | 특정 값이나 속성의 존재 여부 | `hasPermission` |

**이벤트 핸들링**

- 이벤트 핸들링 함수에는 `handle` 접두사 사용하기
- 이벤트 동작까지 포함하여 구체적으로 네이밍하기
  - `handleResetClick`
  - `handleSubmitClick`
- 이벤트 핸들링 함수 외에는 `handle` 사용 지양하기

**유틸리티 함수**

- 반환값과 수행하는 역할을 기준으로 네이밍하기
- Boolean 값을 반환하는 경우 `is`, `has`, `can` 등의 접두사 사용하기

**함수 작성 방식**

- 화살표 함수 사용하기

**React Key**

- `key`에 랜덤 값 사용하지 않기
- 항목의 개수나 순서가 변하지 않는 정적 리스트에서는 `index` 사용 가능
- 동적 리스트에서는 고유한 `id` 사용하기
- `Math.random()` 등 렌더링마다 변경되는 값을 `key`로 사용하지 않기

</details>

<details>
<summary>🧩 타입</summary>

**타입 지정 (interface vs type)**

- `PascalCase` 사용해서 네이밍하기
- 가능한 경우 `interface` 사용하기
  - 유니언 타입, 튜플, 리터럴 타입 등 `interface`로 표현하기 어려운 경우 `type` 사용하기
- Props 타입 정의는 `Props` 접미사 사용하기
  - 예: `HeaderProps`, `MovieCardProps`

</details>

<details>
<summary>🎨 스타일</summary>

**스타일 네이밍**

- 특정 요소를 감싸는 Wrapper가 필요하다면 `container`로 네이밍 통일하기
- 스타일 네이밍도 역할과 의미가 드러나도록 작성하기

</details>