import { useEffect } from 'react';

export const preventCloseAndGoBack = () => {
  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = ''; // chrome에서는 설정이 필요해서 넣은 코드
  };

  const preventGoBack = () => {
    alert('나가기를 원하시면 로고를 클릭해주세요!');
    history.pushState(null, '', location.href);
  };

  useEffect(() => {
    (() => {
      history.pushState(null, '', location.href);
      window.addEventListener('popstate', preventGoBack);
      window.addEventListener('beforeunload', preventClose);
    })();

    return () => {
      window.removeEventListener('popstate', preventGoBack);
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

  return;
};
