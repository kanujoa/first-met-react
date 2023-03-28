// 아주 간단한 React의 함수 component

function MyButton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    'button',
    {onClick: () => setIsClicked(true)},
    isClicked ? 'Clicked!' : 'Click here!'
  )
}

// ReactDOM에 render 함수를 사용하여 React 컴포넌트를 DOM 컨테이너에 랜더링하는 코드이다.
// 아래의 코드가 필요한 이유는 <script> tag를 사용해 컴포넌트를 가져왔다고 해도 그것이 화면에 보이는 것이 아니기 때문이다.
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);