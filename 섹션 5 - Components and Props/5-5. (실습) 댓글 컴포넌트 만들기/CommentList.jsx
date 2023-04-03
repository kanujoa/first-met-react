// 댓글 목록을 나타내는 CommentList 함수 컴포넌트 만들기

import React from 'react';
import Comment from './Comment';

const comments = [     // 댓글 리스트, 요소들은 객체
  {
    name: "이인제",
    comment: "안녕하세요, 소플입니다.",
  },
  {
    name: "유재석",
    comment: "리액트 재미있어요!",
  },
  {
    name: "강민경",
    comment: "저도 리액트 배워보고 싶어요~",
  },
];

function CommentList(props) {
  return(
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} />     // Comment 옆에 적은 name과 comment가 props!
        );
      })}
    </div>
  );
}

export default CommentList;