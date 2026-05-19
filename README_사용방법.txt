위드원교육 홈페이지 사용 방법

1) 가장 쉬운 배포 방법
- 이 폴더를 GitHub 저장소에 올립니다.
- Vercel.com에 로그인합니다.
- Add New Project 또는 Import Project를 누릅니다.
- 방금 만든 GitHub 저장소를 선택합니다.
- Framework Preset이 Vite로 잡히면 그대로 Deploy를 누릅니다.
- 배포가 끝나면 https://프로젝트명.vercel.app 형태의 주소가 생깁니다.
- 이 주소를 네이버지도, 카카오맵, 카카오톡 채널, 블로그 프로필에 연결하면 됩니다.

2) 수정할 파일
- 홈페이지 문구 수정: src/App.jsx
- 로고 교체: src/assets/withone-logo.png
- 카카오톡 채널 링크: src/App.jsx 안의 kakaoLink
- 전화번호: src/App.jsx 안의 phoneLink

3) 개발자에게 보낼 말
'Vite + React + Tailwind 프로젝트입니다. Vercel에 배포해주세요. 
카카오톡 채널과 전화 버튼이 연결되어 있고, 로고 파일은 src/assets에 들어 있습니다.'
