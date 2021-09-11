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
