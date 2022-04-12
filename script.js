const body = document.querySelector("body");    
const first = document.querySelector(".first-box");
const second = document.querySelector(".second-box");

const score = document.querySelector(".score"); //점수 태그
const question = document.querySelector(".question");//몇번째 문제인지 알려주는 태그
const meter = document.querySelector(".meter"); //progress 태그

const quiz = document.querySelector(".quiz");   //문제를 보여주는 h1태그
const choice1 = document.querySelector(".choice1"); //선택지를 고르는 태그
const choice2 = document.querySelector(".choice2");
const choice3 = document.querySelector(".choice3");
const choice4 = document.querySelector(".choice4");
const choiceNum1 = document.querySelector(".choice-num1");  //선택지 안의 두번째 자식들, 보기 내용을 담고있음
const choiceNum2 = document.querySelector(".choice-num2");
const choiceNum3 = document.querySelector(".choice-num3");
const choiceNum4 = document.querySelector(".choice-num4");



function checkAnswer (event) {  //선택지를 클릭했을 때 정답 유무 확인
    //1 번 문제
    if(meter.value == 25 && event.target.className=="choice1") {
        score.innerHTML = parseInt(score.innerHTML) + 1;
        event.target.style.backgroundColor = 'green';
    } else if (meter.value == 25 && event.target.className!="choice1") {
        event.target.style.backgroundColor = 'red';
    }
    //2 번 문제
    if(meter.value == 50 && event.target.className=="choice2") {
        score.innerHTML = parseInt(score.innerHTML) + 1;
        event.target.style.backgroundColor = 'green';
    } else if (meter.value == 50 && event.target.className!="choice2") {
        event.target.style.backgroundColor = 'red';
    }
    //3 번 문제
    if(meter.value == 75 && event.target.className=="choice3") {
        score.innerHTML = parseInt(score.innerHTML) + 1;
        event.target.style.backgroundColor = 'green';
    } else if (meter.value == 75 && event.target.className!="choice3") {
        event.target.style.backgroundColor = 'red';
    }
    //4 번 문제
    if(meter.value == 100 && event.target.className=="choice4") {
        score.innerHTML = parseInt(score.innerHTML) + 1;
        event.target.style.backgroundColor = 'green';
    } else if (meter.value == 100 && event.target.className!="choice4") {
        event.target.style.backgroundColor = 'red';
    }
    setTimeout(function () {updatePage();},1000)    //시간 지연 함수 (1초 지연 후 updatePage함수 호출)

    
}

function updatePage() {     //문제를 바꿀 때 사용
    if(meter.value == 100) {    //마지막 문제를 푼후 마지막 페이지로 바꾸기 위한 if문
        pageEnd();
    }
    meter.value += 25;  //meter의 밸류값을 증가시킨다.
    if(meter.value == 50){  //다음문제로 바꿔준다.
        question.innerHTML = 'Question 2/4';
        quiz.innerHTML = 'What is 2 + 3?';
        choiceNum1.innerText = '1';
        choiceNum2.innerText = '5';
        choiceNum3.innerText = '10';
        choiceNum4.innerText = '11';
    }
    if(meter.value == 75){  //다음문제로 바꿔준다.
        question.innerHTML = 'Question 3/4';
        quiz.innerHTML = 'What is 3 + 7?';
        choiceNum1.innerText = '20';
        choiceNum2.innerText = '30';
        choiceNum3.innerText = '10';
        choiceNum4.innerText = '14';
    }
    if(meter.value == 100){ //다음문제로 바꿔준다.
        question.innerHTML = 'Question 4/4';
        quiz.innerHTML = 'What is 9 + 9?';
        choiceNum1.innerText = '12';
        choiceNum2.innerText = '20';
        choiceNum3.innerText = '27';
        choiceNum4.innerText = '18';
    }
    choice1.style.backgroundColor = '#ECF5FF';  //정답 유무 확인을 위해 바꾼 
    choice2.style.backgroundColor = '#ECF5FF';  //배경색을 원래대로 돌려준다.
    choice3.style.backgroundColor = '#ECF5FF';
    choice4.style.backgroundColor = '#ECF5FF';
}

function pageEnd() {    //결과와 다시시작을 위한 업데이트 함수
    const total = document.createElement('h1');     //결과를 보여줄 태그 생성
    const restart = document.createElement('a');    //다시시작 버튼을 위한 a태그 생성
    const restartBtn = document.createElement('button');   //다시시작 버튼 생성 

    const hidden_classname = 'hidden';      
    first.classList.add(hidden_classname);  //모든 문제를 푼후 결과창을 위해 dispaly를 none으로 해준다
    second.classList.add(hidden_classname); //classlist에 hidden을 추가시킨다.

    total.innerHTML = `Total score: ${score.innerHTML}`;    //생성한 h1태그 innerHTML에 최종 스코어 입력
    total.style.color = '#80C4F5';  //생성한 태그 스타일 조정
    total.style.fontSize = '2em';

    restart.setAttribute('href','quiz.html'); //생성한 a 태그에 속성 추가

    restartBtn.innerHTML = 'Play Again';    //생성한 button에 text 입력
    restartBtn.style.color = '#80C4F5';     //스타일 조정


    body.appendChild(total);    //body태그의 제일 마지막 자식으로 total추가
    restart.appendChild(restartBtn);    //a태그 자식에 button 추가하고
    body.appendChild(restart);          //body에 a 태그를 마지막 자식으로 추가
    
}

choice1.addEventListener("click", checkAnswer); //각 선택지들을 선택할 때 checkAnswer함수를 호출
choice2.addEventListener("click", checkAnswer);
choice3.addEventListener("click", checkAnswer);
choice4.addEventListener("click", checkAnswer);