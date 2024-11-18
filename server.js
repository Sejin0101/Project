const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');

// EJS 템플릿 경로 지정
const viewsPath = path.join(__dirname, 'templates');
console.log("Template path: ", viewsPath);  // 템플릿 경로 확인

app.set('views', viewsPath);

// 'static' 폴더를 정적 파일 경로로 설정
app.use('/static', express.static(path.join(__dirname, 'static')));

// 레시피 데이터 예시
const recipes = [
{ 
    id: 1, 
    name: '김치찌개', 
    type: '건강한',
    ingredients: ['김치', '두부', '돼지고기', '파', '마늘'],  // 재료 추가
    instructions: '김치와 돼지고기를 볶고, 물을 넣고 끓여주세요.' // 조리 방법 추가
},
{ 
  id: 2, 
  name: '김치찌개', 
  type: '건강한',
  ingredients: ['김치', '두부', '돼지고기', '파', '마늘'],  // 재료 추가
  instructions: '김치와 돼지고기를 볶고, 물을 넣고 끓여주세요.' // 조리 방법 추가
},
{ 
  id: 3, 
  name: '김치찌개', 
  type: '건강한',
  ingredients: ['김치', '두부', '돼지고기', '파', '마늘'],  // 재료 추가
  instructions: '김치와 돼지고기를 볶고, 물을 넣고 끓여주세요.' // 조리 방법 추가
},
{ 
  id: 4, 
  name: '김치찌개', 
  type: '건강한',
  ingredients: ['김치', '두부', '돼지고기', '파', '마늘'],  // 재료 추가
  instructions: '김치와 돼지고기를 볶고, 물을 넣고 끓여주세요.' // 조리 방법 추가
},
{ 
  id: 5, 
  name: '김치찌개', 
  type: '건강한',
  ingredients: ['김치', '두부', '돼지고기', '파', '마늘'],  // 재료 추가
  instructions: '김치와 돼지고기를 볶고, 물을 넣고 끓여주세요.' // 조리 방법 추가
},
{ 
  id: 6, 
  name: '김치찌개', 
  type: '건강한',
  ingredients: ['김치', '두부', '돼지고기', '파', '마늘'],  // 재료 추가
  instructions: '김치와 돼지고기를 볶고, 물을 넣고 끓여주세요.' // 조리 방법 추가
},
{ 
  id: 7, 
  name: '김치찌개', 
  type: '건강한',
  ingredients: ['김치', '두부', '돼지고기', '파', '마늘'],  // 재료 추가
  instructions: '김치와 돼지고기를 볶고, 물을 넣고 끓여주세요.' // 조리 방법 추가
},
{ 
  id: 8, 
  name: '김치찌개', 
  type: '건강한',
  ingredients: ['김치', '두부', '돼지고기', '파', '마늘'],  // 재료 추가
  instructions: '김치와 돼지고기를 볶고, 물을 넣고 끓여주세요.' // 조리 방법 추가
},
{ 
  id: 9, 
  name: '김치찌개', 
  type: '건강한',
  ingredients: ['김치', '두부', '돼지고기', '파', '마늘'],  // 재료 추가
  instructions: '김치와 돼지고기를 볶고, 물을 넣고 끓여주세요.' // 조리 방법 추가
},
{ 
  id: 10, 
  name: '김치찌개', 
  type: '건강한',
  ingredients: ['김치', '두부', '돼지고기', '파', '마늘'],  // 재료 추가
  instructions: '김치와 돼지고기를 볶고, 물을 넣고 끓여주세요.' // 조리 방법 추가
},
];

// 기본 페이지 (메인)
app.get('/', (req, res) => {
  res.render('index', { recipes });
});

// 레시피 목록 페이지
app.get('/templates/recipe', (req, res) => {
    res.render('recipe', { recipes });
});

app.get('/recipe/:id', (req, res) => {
  const recipeId = req.params.id;
  const recipe = recipes.find(r => r.id === parseInt(recipeId));

  // recipe가 존재하는지 확인
  if (recipe) {
      console.log(`Rendering recipe-detail for recipe ID: ${recipeId}`, recipe);  // 디버깅 로그

      res.render('recipe-detail', { recipe });
  } else {
      res.status(404).send('레시피를 찾을 수 없습니다.');
  }
});


// 서버 시작
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
