import { useEffect, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';

import auth from './pages/auth';
import Home from './pages/home';
import Login from './pages/login';
import Hello from './pages/hello';
import './App.css';

const initialState = {
  authenticated: false,
  token: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.token, authenticated: action.result };
    case 'DELETE_TOKEN':
      return { ...state, token: null, authenticated: false };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { authenticated } = state;

  const handleLogin = (id, password) => {
    let token = auth.login(id, password);
    if (token) {
      console.log('로그인 성공!');
      dispatch({
        type: 'SET_TOKEN',
        token: token,
        result: true,
      });
      auth.setRefreshTokenToCookie(token.refreshToken);
    } else {
      console.log('로그인 실패');
      dispatch({
        type: 'SET_TOKEN',
        token: null,
        result: false,
      });
    }
  };

  const handleLogout = () => {
    dispatch({
      type: 'DELETE_TOKEN',
    });
    auth.logout();
  };

  useEffect(() => {
    window.addEventListener('storage', (e) => {
      if (e.key === 'logout') {
        console.log('로그아웃 감지');
        dispatch({
          type: 'DELETE_TOKEN',
        });
      }
    });
  });

  useEffect(() => {
    const token = auth.getAccessToken();
    if (token) {
      dispatch({
        type: 'SET_TOKEN',
        token: token,
        result: true,
      });
      auth.setRefreshTokenToCookie(token.refreshToken);
    } else {
      dispatch({
        type: 'DELETE_TOKEN',
      });
    }
  }, [authenticated]);
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        path="/login"
        authenticated={authenticated}
        element={<Login handleLogin={handleLogin} />}
      />
      <Route
        path="/hello"
        authenticated={authenticated}
        element={<Hello handleLogout={handleLogout} />}
      />
    </Routes>
  );
}

export default App;
