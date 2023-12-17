export const useLocalStorage = (name, initialValue = null) => {
  const getLocalStorage = () => {
    const local = localStorage.getItem(name);
    if (local != null) {
      return JSON.parse(local);
    }
    return initialValue;
  };

  const setLocalStorage = (item) => {
    localStorage.setItem(name, JSON.stringify(item));
  };

  const removeLocalStorage = () => {
    localStorage.removeItem(name);
  };

  return [getLocalStorage, setLocalStorage, removeLocalStorage];
};
