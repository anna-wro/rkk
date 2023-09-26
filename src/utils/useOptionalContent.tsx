import { useState, useEffect } from 'react';

const useOptionalContent = () => {
  const defaultOptionalContent = {
    examinationOfConscience: false,
    intercessions: true,
  };

  const getItem = key => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : null;
    } catch {
      return null;
    }
  };

  const setItem = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  };

  const [optionalContent, setOptionalContentState] = useState(
    defaultOptionalContent,
  );

  useEffect(() => {
    const storedOptionalContent = getItem('optionalContent');
    if (storedOptionalContent) {
      setOptionalContentState(storedOptionalContent);
    }
  }, []);

  useEffect(() => {
    setItem('optionalContent', optionalContent);
  }, [optionalContent]);

  const toggleExaminationOfConscience = () => {
    setOptionalContentState(prevState => ({
      ...prevState,
      examinationOfConscience: !prevState.examinationOfConscience,
    }));
  };

  const toggleIntercessions = () => {
    setOptionalContentState(prevState => ({
      ...prevState,
      intercessions: !prevState.intercessions,
    }));
  };

  const resetOptionalContent = () => {
    setOptionalContentState(defaultOptionalContent);
  };

  return {
    optionalContent,
    toggleExaminationOfConscience,
    toggleIntercessions,
    resetOptionalContent,
  };
};

export default useOptionalContent;
