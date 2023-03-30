// Library 컴포넌트는 Book 컴포넌트를 사용하는 상위 컴포넌트

import React from "react";
import Book from "./Book";

function Library(props) {     // Library 컴포넌트는 총 3개의 Book 컴포넌트를 랜더링하고 있음.
  return (
    <div>
      <Book name="처음 만난 파이썬" numOfPage={300} />
      <Book name="처음 만난 AWS" numOfPage={400} />
      <Book name="처음 만난 리액트" numOfPage={500} />
    </div>
  );
}

export default Library;