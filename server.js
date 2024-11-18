const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');

// EJS 템플릿 경로 지정
app.set('views', path.join(__dirname, 'templates'));

// 'static' 폴더를 정적 파일 경로로 설정
app.use('/static', express.static(path.join(__dirname, 'static')));

// 레시피 데이터 예시
const recipes = [
    { id: 1, name: '김치찌개', type: '건강한' },
    { id: 2, name: '된장찌개', type: '편리한' },
    { id: 3, name: '순두부찌개', type: 'AI' },
    { id: 4, name: '순두부찌개', type: 'AI' },
    { id: 5, name: '순두부찌개', type: 'AI' },
    { id: 6, name: '순두부찌개', type: 'AI' },
    { id: 7, name: '순두부찌개', type: 'AI' },
    { id: 8, name: '순두부찌개', type: 'AI' },
    { id: 9, name: '순두부찌개', type: 'AI' },
    { id: 10, name: '순두부찌개', type: 'AI' }
];

// 기본 페이지 (메인)
app.get('/', (req, res) => {
  res.render('index', { recipes });  // index.ejs를 렌더링하며 recipes 데이터를 넘김
});

// 레시피 목록 페이지
app.get('/templates/recipe', (req, res) => {
    res.render('recipe', { recipes });  // recipe.ejs를 렌더링하며 recipes 데이터를 넘김
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

