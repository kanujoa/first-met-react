// 우리가 만든 컴포넌트를 실제로 화면에 렌더링하기 위한 js 파일
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import APP from './App';
import reportWebVitals from './reportWebVitals';

import CommentList from './chapter_05/CommentList';     // import를 사용해 방금 만든 CommentList 컴포넌트를 가져옴. 
    
ReactDOM.render(     // ReactDOM을 사용하여 root DOM node에 랜더링하도록 하는 코드
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>,     // 파라미터를 구분하는 쉼표(,)가 있어야 오류가 나지 않음!
  document.getElementById('root')     
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
