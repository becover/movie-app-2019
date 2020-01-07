# movie-app-2019

React JS Fundamentals Course

###20200102 삽질노트

- 예제에선 hashrouter와 클래스 컴포넌트를 이용해서 만들었는데, 계속해서 페이지를 새로 로드해서 비동기로 데이터를 받아오는 걸 막으려면 리덕스로 따로 상태를 관리해야 한다고 했다. 컴포넌트 뎁스가 많지 않고 데이터도 단순하게 받아서 뿌려주는 것뿐인데 최상위 컴포넌트에서 관리해서 보내주면 안 될까?

  - **<code>hashrouter</code> 대신 <code>browserrouter</code>사용** : 단 ghpages로 올릴 때 루트 경로 설정에 레파지토리 이름이 디렉터리로 붙는 것 까지 생각해서 설정해 줘야 함.
  - **클래스 컴포넌트 대신 함수 컴포넌트 사용** : 라이프사이클의 <code>componentDidMount</code>대신 <code>useEffect</code>로 최초 마운트 시 한 번만 api에 요청해서 받아오도록 함.
  - **최상위 App컴포넌트에서 비동기로 받아온 데이터를 route에 props로 보내줌** : 이때 <code>component={name}</code> 대신 <code>render={(props)=><MyComponent props={props} />}</code> 형태로 보내고 그 값은 route의 기본 props인 <code>location</code>안에서 찾아서 받으면 됨. 이때 디스트럭쳐링으로 재할당해서 깔끔하게 사용하면 좋음. <code>component</code>와 <code>render</code>를 둘 다 사용하면 <code>render</code>가 무시되니 중복 사용하지 않도록 주의.
  - **그리고 App에서 상태 관리하는 데이터를 모두 router에 담았더니 의도치 않은 오류가 발생** : 원래 의도는 Now loading 글이 뜨다가 데이터가 다 받아지면 movie list를 뿌리는 거였으나 movie list의 <code>array</code>값에 따라 상태를 체크하는 데이터까지 같이 보내니 체크하지 못함. 심지어 자꾸 props로 보낸 <code>location</code> 안에 값이 없다고 오류 메시지를 뿜음. -> 삼항 연산자로 App에서 movie list의 <code>array</code>값을 체크해서 loading글귀를 보여주고 데이터가 다 받아지면 <code>render</code>함수가 실행되도록 변경함. 의도대로 잘 작동됨.
