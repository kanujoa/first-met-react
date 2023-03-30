// "Book' 이라는 이름의 리액트 함수 컴포넌트 하나 만들기

import React from "react";

function Book(props) {     // props로 name과 numOfPage를 받아 이를 출력하는 컴포넌트
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
      <h2>{`이 책은 총 ${props.numOfPage}페이지로 이루어져 있습니다.`}</h2>
    </div>
  );
}

export default Book;

// JSX가 아닌 js를 이용하여 코드 작성하기
// import React from "react"

// function Book(props) {
//   return React.createElement(
//     'div',
//     null,
//     [
//       React.createElement(
//         'h1',
//         null,
//         `이 책의 이름은 ${props.name} 입니다.`
//       ),
//       React,createElement(
//         'h2', 
//         null,
//         `이 책은 총 ${props.numOfPage} 페이지로 이루어져 있습니다.`
//       )
//     ]
//   )
// }

// export default Book;