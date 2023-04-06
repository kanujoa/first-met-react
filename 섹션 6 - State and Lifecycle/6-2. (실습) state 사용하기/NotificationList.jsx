// NotificationList 컴포넌트는 Notification 컴포넌트를 목록 형태로 보여주기 위한 컴포넌트

import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id: 1,
    message: "안녕하세요, 오늘 일정을 알려드립니다.",
  },
  {
    id: 2,
    message: "점심식사 시간입니다.",
  },
  {
    id: 3,
    message: "이제 곧 미팅이 시작됩니다.",
  },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {     // 생성자 함수에서
    super(props);

    this.state = {     // state 정의 (JS 객체 형태)
      notifications: [],     // notifications라는 이름의 빈 배열을 넣음.
    };
  }

  componentDidMount() {     // class 컴포넌트의 생명주기 함수 중 하나인 componentDidMount() 함수 (출생에 해당)
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {     // 미리 만들어둔 알림 배열인 reservedNotifications으로부터
        const index = notifications.length;     // 알림 데이터를 하나씩 가져와
        notifications.push(reservedNotifications[index]);     // state에 있는 notifications 리스트에 push하는 작업이다.
        this.setState({     // 주목! state를 업데이트 하기 위해 setState를 사용하였다.
          notifications: notifications,
        });
      } else {
        this.setState({
          notifications: [],     // 알림 띄우기가 모두 끝나면 notifications를 비우는 코드, unmount를 console에서 확인하기 위해 추가하였다. 
        });
        clearInterval(timer);
      }
    }, 1000);     // setInterval 함수 사용, 1000ms(1초)마다 함수 안에 인자로 들어간 내용 수행
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id} 
              message={notification.message} 
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;