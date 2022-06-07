import Cookies from 'universal-cookie';
const cookies = new Cookies();

const setRefreshTokenToCookie = (refreshToken) => {
  cookies.set('refreshToken', refreshToken);
};

const login = ({ id, password }) => {
  if (id === 'russ' && password === 'whynot') {
    return {
      accessoken: 'asdfasdf',
      refreshToken: 'asdfsaf',
    };
  } else {
    return undefined;
  }
};

const logout = () => {
  console.log('localStorage set logout!');
  window.localStorage.setItem('logout', Date.now());
  cookies.remove('refreshToken');
};

const getAccessToken = () => {
  const refreshToken = cookies.get('refreshToken');
  if (refreshToken) {
    return {
      accessToken: 'djasdkjfjfj',
      refreshToken: 'asdjflkdasjlkfjsjf',
    };
  } else {
    return undefined;
  }
};

export default { login, logout, setRefreshTokenToCookie, getAccessToken };
