// 우리가 만든 컴포넌트를 실제로 화면에 렌더링하기 위한 js 파일
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import APP from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_04/clock';     // import를 사용해 방금 만든 Library 컴포넌트를 가져옴. 

setInterval(() => {    
  ReactDOM.render(     // ReactDOM을 사용하여 root DOM node에 랜더링하도록 하는 코드
    <React.StrictMode>
      <Library />
    </React.StrictMode>,     // 파라미터를 구분하는 쉼표(,)가 있어야 오류가 나지 않음!
    document.getElementById('root')     
  );
}, 1000);     // 1초마다 시간이 바뀌는 것을 렌더링해야 하므로 render 함수를 setInterval 함수의 인자로 넣어 1000ms마다 실행
// 이렇게 하면 매초 Clock 컴포넌트의 Element가 새롭게 생성된다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();