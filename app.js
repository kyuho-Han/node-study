const express = require('express');
const helmet = require("helmet");
const ejs = require("ejs");
const app = express();

//보안 헬멧 추가
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs'); //그림파일 나타내기 위해 사용
app.set('views', './views');
app.use('/public',express.static(__dirname + '/public'));

//라우터 경로 (라우터 변수를 가져옴)
const mainRouter = require('./router/mainRouter')
app.use('/',mainRouter)

app.listen(3000, function(req, res){
    console.log("server lunched.");
})