// Comment 함수 컴포넌트 만들기

import React from 'react';

// CSS로 적용할 내용
const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 16,
  },
};

function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        {/* 사람 모양의 프로필 이미지를 보여줌. */}
        <img     
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          style={styles.image}
        />
      </div>

      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>     {/* 이름과 */}
        <span style={styles.commentText}>     {/* 댓글 내용을 함께 보여줌. */}
          {props.comment}     {/* props.name과 props.comment가 undefined일 때는 화면에 이름, 댓글이 뜨지 않음. */}
        </span>
      </div>
    </div>
  );
}

export default Comment;