// document는 자바와 연결된 html
// get은 현재 날짜 정보를 가져오는 명령어
document.getElementById('time').innerHTML = new Date().toLocaleString()

function pink() {
  // document 안에 있는 body 안에 있는 style
  document.body.style.backgroundColor = 'pink'
}
function lightblue() {
  document.body.style.backgroundColor = 'lightblue'
}
function yellow() {
  document.body.style.backgroundColor = 'rgb(234, 255, 95)'
}
function reset() {
  document.body.style.backgroundColor = 'linen'
}

function showhtml() {
  document.getElementById('fig').src = 'img/html5.png'
  //   html 기능 사용 : <b></b> 사용으로 볼드체
  document.getElementById('desc').innerHTML =
    '<b>html</b>은 구조적 웹문서를 작성하는 데에 사용하는 마크업 언어이다.'
}
function showcss() {
  document.getElementById('fig').src = 'img/css.png'
  document.getElementById('desc').innerHTML =
    '<span style="color:red;"><b>css<b/></span>는 html문서의 스타일을 지정하기 위한 언어이다.'
}
function showjavascipt() {
  document.getElementById('fig').src = 'img/javascipt.png'
  document.getElementById('desc').innerHTML =
    '<span style="color:red;"><b>Javascript<b/></span>는 웹을 위한 프로그래밍 언어이며 웹문서에서 동작을 실행할 수 있게 한다.'
}
function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('desc').innerHTML = ''
}
