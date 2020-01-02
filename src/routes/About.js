import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about__contain">
      <h2>노마드코더 리액트 크롬앱 만들기 - Movie App -</h2>

      <h3>- 강의 내용 -</h3>
      <ul>
        <li>movie list를 axios를 이용해서 비동기로 받아오기</li>
        <li>데이터 받기까지 로딩중 글씨 보이다가 list 화면에 뿌려주기</li>
        <li>라우팅으로 화면전환 해주기</li>
        <li>movie list를 누르고 들어가지 않으면 home으로 리다이렉팅</li>
      </ul>

      <h3>- 수정한 내용 -</h3>
      <ul>
        <li>강의에서 나오는 클래스형 컴포넌트를 함수형으로 변경</li>
        <li>App 컴포넌트에서 데이터 관리해서 Route에 넘겨주기</li>
        <li>강의와 다른 스타일 적용</li>
      </ul>
    </div>
  );
};

export default About;
