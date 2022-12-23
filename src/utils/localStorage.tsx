export const TOKEN_NAME = 'token';

interface setProps {
  name: string;
  value: string;
}

interface getProps {
  name: string;
}
export const setLocalStorage = ({ name, value }: setProps) => {
  localStorage.setItem(name, value);
};

export const getLocalStorage = ({ name }: getProps) => {
  return localStorage.getItem(name);
};

export const deleteLocalStorage = ({ name }: getProps) => {
  return localStorage.removeItem(name);
};
