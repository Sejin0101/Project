const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 'static' 폴더를 정적 파일 경로로 설정
app.use('/static', express.static(path.join(__dirname, 'static')));

// HTML 파일 제공
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
