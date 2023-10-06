// Token storage

const BB_TOKEN_NAME = "bb_token";
const BB_USER_NAME = "bb_user";

const useLocalStorage = () => {
  const setToken = (data) => {
    if (data) {
      localStorage.setItem(BB_TOKEN_NAME, JSON.stringify(data));
      return true;
    }
  };

  const getToken = () => {
    const token = localStorage.getItem(BB_TOKEN_NAME);
    if (token) {
      return JSON.parse(token);
    }
    return null;
  };

  const deleteToken = () => {
    localStorage.removeItem(BB_TOKEN_NAME);
  };

  const setUser = (data) => {
    if (data) {
      localStorage.setItem(BB_USER_NAME, JSON.stringify(data));
      return true;
    }
  };

  const getUser = () => {
    const user = localStorage.getItem(BB_USER_NAME);
    if (user) {
      return JSON.parse(user);
    }
  };

  const deleteUser = () => {
    localStorage.removeItem(BB_USER_NAME);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return {
    setToken,
    getToken,
    deleteToken,
    setUser,
    getUser,
    deleteUser,
    clearLocalStorage,
  };
};

export default useLocalStorage;
