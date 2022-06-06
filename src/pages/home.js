// 로그인을 하지 않아도 접근할 수 있는 페이지
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-wrap">
      <h1>Home Sweet Home 🏠</h1>
      <Link to="/login">로그인</Link>
      <br />
      <Link to="/hello">여긴 로그인을 해야 갈 수 있어요</Link>
    </div>
  );
}
