import { useLayoutEffect } from 'react';

const useClassNames = (styles: {
  use(): void;
  unuse(): void;
  locals: Record<string, string>;
}) => {
  useLayoutEffect(() => {
    styles.use();

    return () => {
      styles.unuse();
    };
  }, []);

  return styles.locals;
};

export default useClassNames;
