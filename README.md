# 🎲 BoardMaster: AI-Powered Board Game Discovery

**BoardMaster**는 보드게임 매니아들을 위한 현대적인 검색, 리뷰 및 추천 플랫폼입니다. BoardGameGeek(BGG)의 방대한 데이터와 인공지능(AI)을 결합하여 사용자에게 최적의 보드게임 경험을 선사합니다.

## ✨ 주요 기능 (Key Features)

### 1. 🤖 AI 보드게임 큐레이터
- **Gemini 1.5 Flash API** 연동을 통해 사용자의 복잡한 요구사항(인원, 시간, 취향 등)을 분석합니다.
- 단순 검색을 넘어 자연어 질문에 최적화된 3가지 맞춤형 게임을 추천합니다.

### 2. 📊 BGG 실시간 데이터 연동
- **BGG XML API v1**을 사용하여 실시간으로 게임 상세 정보, 이미지, 평점 데이터를 가져옵니다.
- Cloudflare Pages Functions를 백엔드 프록시로 사용하여 API 보안과 성능을 확보했습니다.

### 3. 💬 Supabase 기반 리뷰 시스템
- **PostgreSQL** 기반의 안정적인 데이터 저장소를 활용합니다.
- 사용자가 직접 별점과 코멘트를 남길 수 있으며, **Real-time Subscription**을 통해 새로고침 없이 실시간으로 업데이트됩니다.
- 비밀번호 기반의 간편한 리뷰 삭제 기능을 제공합니다.

### 4. 🎯 맞춤형 추천 (Today's Pick)
- 메인 페이지 상단에 화려한 UI의 "오늘의 추천 게임"을 노출합니다.
- 금색 강조 효과와 유리 효과(Glassmorphism)를 적용한 세련된 디자인을 제공합니다.

### 5. 🌍 다국어 및 테마 지원
- **i18next**를 통한 3개국어(한국어, 영어, 독일어) 완벽 지원.
- 사용자의 눈 편의를 위한 **다크 모드 / 라이트 모드** 전환 기능을 제공합니다.

---

## 🛠 기술 스택 (Tech Stack)

- **Frontend**: React 19, Vite, TypeScript, React Router DOM
- **Backend**: Cloudflare Pages Functions (Edge Runtime)
- **Database**: Supabase (PostgreSQL)
- **AI**: Google Gemini 1.5 Flash
- **API**: BoardGameGeek XML API v1
- **Styling**: Vanilla CSS (Modern CSS Variables, Responsive Design)
- **i18n**: react-i18next

---

## 📂 프로젝트 구조 (Project Structure)

```text
boardmaster/
├── functions/api/       # Cloudflare Backend API (BGG Proxy, AI Curator)
├── src/
│   ├── components/      # 공용 UI 컴포넌트 (Header, UserReviews 등)
│   ├── pages/           # 주요 페이지 (HomePage, GamesPage, AICuratorPage 등)
│   ├── services/        # 외부 API 연동 로직 (bggService)
│   ├── supabase.ts      # Supabase 클라이언트 설정
│   ├── i18n.ts          # 다국어 번역 설정
│   └── App.tsx          # 라우팅 및 레이아웃 설정
└── blueprint.md         # 프로젝트 설계 및 발전 계획
```

---

## 🚀 시작하기 (Getting Started)

### 1. 환경 변수 설정
`.env` (또는 Cloudflare 대시보드)에 다음 변수를 설정해야 합니다:

```env
# API Keys
BGG_API_TOKEN=your_bgg_token
GEMINI_API_KEY=your_gemini_key

# Supabase
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### 2. 설치 및 실행
```bash
npm install
npm run dev:pages  # 로컬 서버 및 백엔드 함수 동시 실행
```

---

## 📜 데이터베이스 스키마 (DB Schema)

```sql
CREATE TABLE reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  bgg_id INTEGER NOT NULL,
  user_name TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  password TEXT NOT NULL,
  lang TEXT DEFAULT 'en',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 📢 배포 (Deployment)
이 프로젝트는 **Cloudflare Pages**를 통해 자동으로 빌드 및 배포됩니다. GitHub `main` 브랜치에 푸시하면 즉시 반영됩니다.

---
*Powered by BoardGameGeek API*
