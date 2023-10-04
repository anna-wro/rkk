import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
const useOptionalContent = () => {
  const defaultOptionalContent = {
    examinationOfConscience: false,
    intercessions: true,
  };

  const { getItem, setItem } = useLocalStorage();

  const [optionalContent, setOptionalContentState] = useState(
    defaultOptionalContent,
  );
  useEffect(() => {
    const storedOptionalContentString = getItem('optionalContent');
    if (storedOptionalContentString) {
      const storedOptionalContent = JSON.parse(storedOptionalContentString);
      setOptionalContentState(storedOptionalContent);
    }
  }, [getItem]);

  useEffect(() => {
    setItem('optionalContent', JSON.stringify(optionalContent));
  }, [optionalContent, setItem]);

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
