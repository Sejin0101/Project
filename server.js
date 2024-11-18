// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 템플릿 파일 위치 지정
app.set('views', path.join(__dirname, 'templates'));

// 정적 파일을 제공할 때 사용할 public 폴더 경로 설정
app.use(express.static(path.join(__dirname, 'public')));

// HTML 파일을 렌더링하는 라우트
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
