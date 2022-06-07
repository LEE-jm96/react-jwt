// 로그인을 해야만 접근할 수 있는 페이지
const Hello = ({ handleLogout }) => {
  return (
    <div>
      <h1>로그인 성공! 🎉</h1>
      <button type="button" onClick={handleLogout}>
        LOGOUT
      </button>
    </div>
  );
};

export default Hello;
