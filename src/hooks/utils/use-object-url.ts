'use client';

import * as React from 'react';

/**
 * React Hook that receives an instance of `File`, `Blob` or `MediaSource` and
 * creates an URL representing it, providing a state object containing the file
 * with a set function to change the file object. It releases URL when component
 * unmount or parameter changes.
 * @param initialObject - `null` or an instance of `File`, `Blob` or `MediaSource`.
 */
const useObjectURL = (initialObject: Blob | File | MediaSource | null) => {
  const [objectURL, setObjectURL] = React.useState<null | string>(null);

  const [object, setObject] = React.useState<Blob | File | MediaSource | null>(initialObject);

  React.useEffect(() => {
    if (!object) {
      return () => {};
    }

    const newObjectURL = URL.createObjectURL(object);
    setObjectURL(newObjectURL);
    return () => {
      URL.revokeObjectURL(newObjectURL);
      setObjectURL(null);
    };
  }, [object]);

  return {
    object,
    objectURL,
    setObject,
  };
};

export default useObjectURL;
