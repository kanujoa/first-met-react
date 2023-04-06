// React Class Component인 Notification 생성

import React from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  messageText: {
    color: "black",
    fontSize: 16,
  },
};

class Notification extends React.Component {
  constructor(props) {     // 생성자 함수 내에
    super(props);

    this.state = {};     // state를 정의하였다. 그런데 state에 아무런 data도 가지고 있지 않다.
  }

  // 생명주기 함수 사용해 보기
  // 각각 component가 mount된 이후, update된 이후, unmount되기 전에 호출되어 console 창에 띄워질 것이다.
  // but 이렇게만 작성하면 로그가 중복되어 보기 힘드므로 NotificationList의 reservedNotifications 리스트의 각 요소들(객체들)에 id를 추가한다.
  // 그리고 NotificationList의 render() 함수 부분에서 Notification에 전달할 key와 id를 추가해 준다.
  // console창에 띄울 문구에는 역따옴표와 {}를 이용해 id를 작성해 준다. 
  componentDidMount() { 
    console.log(`${this.props.id} componentDidMount() called.`);
  }

  componentDidUpdate() {
    console.log(`${this.props.id} componentDidUpdate() called.`);
  }

  componentWillUnmount() {
    console.log(`${this.props.id} componentWillUnmount() called.`);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}

export default Notification;