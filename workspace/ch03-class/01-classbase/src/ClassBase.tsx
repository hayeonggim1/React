import { Component } from 'react';

interface ClickMeProps {
  level?: number;
}

interface ClickMeState {
  count: number;
}

class Parent extends Component{
  render(){
    return(
      <div>
        <h1>01 클래스 컴포넌트</h1>
        <ClickMe level={1} />
        <ClickMe level={5} />
      </div>
    )
  }

}

class ClickMe extends Component<ClickMeProps, ClickMeState>{

  // state/setState는 부모(Component)에 정의되어 있는 이름
  // 상태는 state 변수 하나만 사용 가능 => 여러개의 상태 관리하려면 객체로 지정해야 함
  // 함수형에서는 state 변수를 여러개 지정 가능 (useState 훅)
  state = { count: 0 };

  constructor(props: ClickMeProps){
    // 부모 클래스의 생성자 -> this를 생성하고 초기화 함
    // super() 호출: 자식 클래스에서 this 사용 가능
    // super(props)를 호출 -> 자식 클래스에서 this.props 사용 가능
    super(props);
    this.state = { count: props.level || 1}; // 초기 상태값 저장
  }
  

  render(){
    return(
      <div>
        클릭 횟수 X { this.props.level }: { this.state.count }
        <button>클릭</button>
      </div>
    )
  }

}

export default Parent;