# Notion Publisher With Nextjs

## 프로젝트 소개

- 본 프로젝트는 notion api를 활용, 노션으로 컨텐츠를 작성하면 유저에게 컨텐츠를 보여주는, 노션을 에디터로 활용할 수 있는 도구를 구성한 것입니다.
- [turbo repository](https://turbo.build/) 기반 모노레포로 구성이 되어있으며 [React](https://ko.legacy.reactjs.org/), [typescript](https://www.typescriptlang.org/), [tailwindcss](https://tailwindcss.com/), [nextjs](https://nextjs.org/) 등을 사용하였습니다.

## 프로젝트 구성

### app

- web: Next.js 기반의 notion 컨텐츠를 보여주는 앱
  - `/${id}`: notion 컨텐츠 id를 넣으면 해당 컨텐츠를 볼 수 있음.

### packages

- notion-editor: notion 컨텐츠 id를 기반, 화면에 각 컴포넌트를 불러올 수 있는 패키지
- common-lib: 공통적으로 사용하는 유틸성 함수들을 모아둔 패키지
- eslint-config: base가 되는 eslint config
- tailwind-config: base가 되는 tailwind config
- typescript-config: base가 되는 typescript config

## 프로젝트 시작

### 사전 준비

- notion content의 id는 [여기](https://developers.notion.com/docs/working-with-page-content#modeling-content-as-blocks)를 참고합니다.
- `.env.local`을 만들고 `.env.example`을 참고하여 `NOTION_INTEGRATION_TOKEN`에 직접 [Notion Integration](https://www.notion.so/integrations/all)을 구성하고 그 secret을 넣어줍니다.

### 프로젝트 스크립트

root directory에서 실행합니다.

- dev 환경 실행 : `yarn dev`
- build: `yarn build`

### 배포 내용

- (TBD)
