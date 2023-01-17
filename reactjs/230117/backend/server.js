const express = require('express');
const cors = require('cors');
const port = 4000;
const app = express();

app.use(cors()); //cors 에러가 발생하지 않도록

app.get('/', (req, res) => {
  const pororoObjArr = [
    {
      name: '뽀로로',
      age: '5',
      nickName: '사고뭉치',
    },
    {
      name: '루피',
      age: '4',
      nickName: '공주님',
    },
    {
      name: '크롱이',
      age: '5',
      nickName: '장난꾸러기',
    },
  ];
  res.status(200).send(JSON.stringify(pororoObjArr));
});

app.listen(port, () => console.log(port, '번 작동중'));
