const express = require('express');
const tbl_user = require('../models/user');
const router = express.Router();
let boardModel = [
    {
        "no":"1"
        , "id" : "1"
        , "title" : "제목"
        , "contents" : `10. Git Resources
                        깃(?)똥차게 좋은 GIT 기초
                        어떻게 깃을 사용하는지 빠르게 알아봅시다
                        Git, 가장 쉽게 사용하기 - (1) 심플함이 답이다, Git, 가장 쉽게 사용하기 - (2) commit, branch 전략 잘 짜는 법
                        Git을 이용한 협업 워크플로우 배우기
                        Pro Git 2. 깃을 배우고 사용하는 법에 대한 오픈소스 북. 분량이 많지만, 기본을 배우기 위해서는 3장까지만 읽으면 된다.
                        Git Magic
                        Try Git. 코드스쿨과 깃허브가 팀을 짜서 이 속성 튜토리얼을 만들었다. 기본에 대해 좀 더 연습하길 원하면 도움이 될 것이다.
                        Git Reference. 명령어를 잊어버렸을 때는 용어 참조하기 좋은 사이트다.
                        Git Tips & Tricks
                        Git - the simple guide. 이 튜토리얼은 짧고 달콤하다. 깃의 기초에 대해 되살리고 싶다면 필요할 것이다.
                        코드로 디자인하기 : 스포카(Spoqa) 사례
                        Git 주요 명령어 정리
                        GitTips - Git SCM Wiki
                        Git Tutorials and Training - Atlassian Git Tutorial
                        버전관리를 들어본적 없는 사람들을 위한 DVCS - Git : 잘 정리된 슬라이드(역자 추가)
                        GIT - 생활코딩. 이보다 더 잘 설명한 한글 동영상 강좌를 본 적이 없다!`
        , "registedAt" : "2018. 03. 22"
        , "register" : "theking"
    },{
      "no":"2"
      , "id" : "2"
      , "title" : "제목1"
      , "contents" : `10. Git Resources
                              깃(?)똥차게 좋은 GIT 기초
                              어떻게 깃을 사용하는지 빠르게 알아봅시다
                              Git, 가장 쉽게 사용하기 - (1) 심플함이 답이다, Git, 가장 쉽게 사용하기 - (2) commit, branch 전략 잘 짜는 법
                              Git을 이용한 협업 워크플로우 배우기
                              Pro Git 2. 깃을 배우고 사용하는 법에 대한 오픈소스 북. 분량이 많지만, 기본을 배우기 위해서는 3장까지만 읽으면 된다.
                              Git Magic
                              Try Git. 코드스쿨과 깃허브가 팀을 짜서 이 속성 튜토리얼을 만들었다. 기본에 대해 좀 더 연습하길 원하면 도움이 될 것이다.
                              Git Reference. 명령어를 잊어버렸을 때는 용어 참조하기 좋은 사이트다.
                              Git Tips & Tricks
                              Git - the simple guide. 이 튜토리얼은 짧고 달콤하다. 깃의 기초에 대해 되살리고 싶다면 필요할 것이다.
                              코드로 디자인하기 : 스포카(Spoqa) 사례
                              Git 주요 명령어 정리
                              GitTips - Git SCM Wiki
                              Git Tutorials and Training - Atlassian Git Tutorial
                              버전관리를 들어본적 없는 사람들을 위한 DVCS - Git : 잘 정리된 슬라이드(역자 추가)
                              GIT - 생활코딩. 이보다 더 잘 설명한 한글 동영상 강좌를 본 적이 없다!`
      , "registedAt" : "2018. 03. 22"
      , "register" : "theking"
    },{
       "no":"3"
       , "id" : "3"
       , "title" : "제목2"
       , "contents" : `10. Git Resources
                               깃(?)똥차게 좋은 GIT 기초
                               어떻게 깃을 사용하는지 빠르게 알아봅시다
                               Git, 가장 쉽게 사용하기 - (1) 심플함이 답이다, Git, 가장 쉽게 사용하기 - (2) commit, branch 전략 잘 짜는 법
                               Git을 이용한 협업 워크플로우 배우기
                               Pro Git 2. 깃을 배우고 사용하는 법에 대한 오픈소스 북. 분량이 많지만, 기본을 배우기 위해서는 3장까지만 읽으면 된다.
                               Git Magic
                               Try Git. 코드스쿨과 깃허브가 팀을 짜서 이 속성 튜토리얼을 만들었다. 기본에 대해 좀 더 연습하길 원하면 도움이 될 것이다.
                               Git Reference. 명령어를 잊어버렸을 때는 용어 참조하기 좋은 사이트다.
                               Git Tips & Tricks
                               Git - the simple guide. 이 튜토리얼은 짧고 달콤하다. 깃의 기초에 대해 되살리고 싶다면 필요할 것이다.
                               코드로 디자인하기 : 스포카(Spoqa) 사례
                               Git 주요 명령어 정리
                               GitTips - Git SCM Wiki
                               Git Tutorials and Training - Atlassian Git Tutorial
                               버전관리를 들어본적 없는 사람들을 위한 DVCS - Git : 잘 정리된 슬라이드(역자 추가)
                               GIT - 생활코딩. 이보다 더 잘 설명한 한글 동영상 강좌를 본 적이 없다!`
       , "registedAt" : "2018. 03. 22"
       , "register" : "theking"
     },{
        "no":"4"
        , "id" : "4"
        , "title" : "제목3"
        , "contents" : `10. Git Resources
                                깃(?)똥차게 좋은 GIT 기초
                                어떻게 깃을 사용하는지 빠르게 알아봅시다
                                Git, 가장 쉽게 사용하기 - (1) 심플함이 답이다, Git, 가장 쉽게 사용하기 - (2) commit, branch 전략 잘 짜는 법
                                Git을 이용한 협업 워크플로우 배우기
                                Pro Git 2. 깃을 배우고 사용하는 법에 대한 오픈소스 북. 분량이 많지만, 기본을 배우기 위해서는 3장까지만 읽으면 된다.
                                Git Magic
                                Try Git. 코드스쿨과 깃허브가 팀을 짜서 이 속성 튜토리얼을 만들었다. 기본에 대해 좀 더 연습하길 원하면 도움이 될 것이다.
                                Git Reference. 명령어를 잊어버렸을 때는 용어 참조하기 좋은 사이트다.
                                Git Tips & Tricks
                                Git - the simple guide. 이 튜토리얼은 짧고 달콤하다. 깃의 기초에 대해 되살리고 싶다면 필요할 것이다.
                                코드로 디자인하기 : 스포카(Spoqa) 사례
                                Git 주요 명령어 정리
                                GitTips - Git SCM Wiki
                                Git Tutorials and Training - Atlassian Git Tutorial
                                버전관리를 들어본적 없는 사람들을 위한 DVCS - Git : 잘 정리된 슬라이드(역자 추가)
                                GIT - 생활코딩. 이보다 더 잘 설명한 한글 동영상 강좌를 본 적이 없다!`
        , "registedAt" : "2018. 03. 22"
        , "register" : "theking"
      }
]


router.get('/list', (req, res) => {
    tbl_user.find({})
        .then(user => {
            res.send(boardModel);
        })
        .catch(err => {
            res.status(500).send(err)
        });
});

router.get('/view/:id', (req, res) => {
    let boardId = req.params.id;
    for(let i = 0; i < boardModel.length; i ++){
        let board = boardModel[i];
        if(board.id == boardId){
            res.json(board);
            break;
        }
    }
});


router.delete('/:id', (req, res) => {
    let boardId = req.params.id;
    let boardNewModel = [];
    for(let i = 0; i < boardModel.length; i ++){
        let board = boardModel[i];

        if(board.id == boardId){
            continue;
        }
        boardNewModel.push(board);
    }
    boardModel = boardNewModel;
    res.json({
        "result":"success"
    })
});

router.post('/', (req, res) => {
    let title = req.body.title;
    let contents = `${req.body.contents}`;
    let register = req.body.register;

    let registedAt = req.body.registedAt;
    let id = Number(boardModel[boardModel.length - 1].id) + 1;
    let no = Number(boardModel[boardModel.length - 1].no) + 1;
    let board = {};
    board.id=id;
    board.no=no;
    board.title=title;
    board.contents=contents;
    board.register = register;
    board.registedAt = registedAt;
    boardModel.push(board);
    res.json(board);
});

router.put('/', (req, res) => {
    let title = req.body.title;
    let contents = req.body.contents;

    let id = req.body.id;
    let original = {};
    let originPos;
    for(let i = 0; i < boardModel.length; i ++){
        let board = boardModel[i];

        if(board.id == id){
            original = board;
            originPos = i;
            break;
        }
    }
    original.title = title;
    original.contents = contents;

    boardModel[originPos] = original;
    res.json(original);
});
module.exports = router;
