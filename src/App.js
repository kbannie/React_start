//import logo from './logo.svg'; //웹팩의 로더 기능이 담당
import './App.css';
//import {Fragment} from 'react';
//import MyComponent from './MyComponent';
//import Counter from './Counter';
import Say from './Say';



//App 컴포넌트 만들기 (function키워드 사용 => 함수형 컴포넌트)
//컴포넌트를 렌더링(보여주기)하면 함수에서 반환하고 있는 내용을 나타냄
// function App() {
//   //JSX : JS의 확장 문법 / 브라우저 실행 전 코드가 번들링되는 과정에서 바벨을 사용하여 일반 JS로 변환됨
//   const name = 'react';
//   return (
//     <>
//       <div className="react">{name}</div>
//     </>
//   );
// }

// const App=()=>{
//   return <MyComponent name="react" favoriteNumber={2}>리액트</MyComponent>;
// } //MyComponent 모듈 불러오기

// const App = () => {
//   return <Counter />;
// };

const App = () => {
  return <Say />;
};


export default App;

