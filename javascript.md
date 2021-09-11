# Javascript

## javascript(ECMAScript) 버전

- 2009 : ES5
- 2015 : ES6

## ES6 버전 특징

- 변수 scope 개념 확장
- class 개념 도입
- 함수 선언 형식/개념 추가
- 프론트엔드 프레임워크/라이브러리에 사용

## 프로그래밍 언어 공부

- 프로그래밍 언어 문법
- 프로그래밍 언어 활용
- 알고리즘
- 로직
- API

## Javascript 문법

- 변수(테이터 타입), 연산자

- 명령문(구문)

- 함수

- 배열, 객체, Class

## Javascript 활용

- 이벤트

- HTML, CSS와의 관계

## javascript 변수 : var

https://www.w3schools.com/js/js_variables.asp

- 변수를 정의/선언할때 사용하는 키워드(예약어)
- ES5 버전에서 사용
- 값을 초기화한 후 자유롭게 변경 가능

```
var a;
var b;

var a, b;
```

## javascript 변수 : let

https://www.w3schools.com/js/js_let.asp

- 변수를 정의/선언할때 사용하는 키워드(예약어)
- 값을 초기화한 후 자유롭게 변경 가능

## javascript 변수 : const(상수 변수)

https://www.w3schools.com/js/js_const.asp

- constant : 상수
- 한번 값을 초기화 하면 변경할 수 없음

> ES5 버전에서는 일반 변수 var 만 존재, ES6 일반변수 let, 상수변수 const가 추가됨.

### 데이터 타입

- 숫자
- 정수
- 실수
- 문자
- 문자(character)
- 문자열(string)
- 논리
- 참(true)
- 거짓(false)

> 자바스크립트는 숫자, 문자, 논리 구분외에 데이터 타입을 구분하지 않음
> 자바스크립트는 숫자, 문자, 논리 데이터를 구분하는 변수 선언 키워드가 없음
> 데이터 타입을 구분해주는 자바스크립트 : 타입 스크립트

## Javascript 연산자

https://www.w3schools.com/js/js_operators.asp

### 산술 연산자

= +, -, \*, /, %(나머지)

### 대입(할당) 연산자

- =

```
b = a + 1;

a = a + 2; //여러번 실행시 2씩 증가하는 식

a += 2;

a = a + 1;

a += 1;

a++;

a = a - 1;

a -= 1;

a--;

```

> ++, -- 증감 연산자

### 연결 연산자

```
"a" + "b" => ab

"a" + 1 => a1

"1" + 1 => 11

console.log("총합계 : " + sum);
```

### 따옴표 사용방법

```
element.innerHTML = "<img src=\"picture.jps\">"

element.innerHTML = '<img src="picture.jps">'
```

### 비교 연산자

- ==, === : 데이터 타입 동시에 비교 여부

- 비교 연산의 결과는 논리 데이터가 출력 : true / false

### 논리 연산자

- 여러개의 비교식을 연결해서 연산할때 사용
- 논리 데이터를 연산할때 사용

> &&(and) : &&로 연결되는 논리 비교식 또는 논리 데이터가 모두 참 일때 전체가 참

```
true && true => true
true && false => false
3<5 && 10<12 => true
```

| : pipe line

> || (or) : ||로 연결되는 비교식 또는 논리 데이터가 하나라도 참이면 전체가 참

```
true || true => true
true || false => true
3<5 || 10>12 => true
```

## 명령문/구문 syntax

- 프로그램 실행 흐름을 제어 역할

### 조건문/분기문

> if 구문
> https://www.w3schools.com/js/js_if_else.asp

```
if(condition){
  // 코드블럭
}

if(conditions){
  // 코드블럭 1
} else {
  // 코드블럭 2
}

if(conditions 1){
  //코드불럭 1
} else if(conditions 2){
  //코드블럭 2
} else{
  //코드블럭 3
}
```

> conditions 식의 결과가 true이면 코드 블록을 실행 false면 실행하지 않음
>
> conditions : 결과가 ture/false가 나오는 식
>
> 숫자를 논리 데이터로 인식
> 0 : false
>
> 그외의 정수 : true
> if 사용법
>
> - else if(){} : 필요한 갯수만큼 사용 가능
> - else : 맨마지막 부분에 사용

> switch 구문
> https://www.w3schools.com/js/js_switch.asp
>
> expression식의 결과에 따라 여러 갈래로 분기
>
> expression : 결과는 숫자, 문자의 형태

```
swith(expressions){
  case '결과값1':
   코드블럭1;
   break;

  case '결과값2':
   코드블럭2;
   break;

  case '결과값3':
   코드블럭3;
   break;

  default:
   코드블럭4;
}

```

### 반복문

> for loop
> https://www.w3schools.com/js/js_loop_for.asp

> - 특정 횟수만큼 반복 실행

> while loop
> https://www.w3schools.com/js/js_loop_while.asp