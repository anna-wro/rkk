import React from 'react';
import copy from 'consts/copy';
import { CustomCheckbox } from './CustomCheckbox';

type PropsType = {
  optionalContent: { intercessions: boolean; examinationOfConscience: boolean };
  toggleIntercessions: () => void;

  toggleExaminationOfConscience: () => void;
};

export const OptionalContentControls: React.FC<PropsType> = ({
  optionalContent,
  toggleIntercessions,
  toggleExaminationOfConscience,
}) => {
  return (
    <div className="flex flex-col space-y-3">
      <CustomCheckbox
        isChecked={optionalContent.intercessions}
        onToggle={toggleIntercessions}
        label={copy.displayIntercessions}
      />
      <CustomCheckbox
        isChecked={optionalContent.examinationOfConscience}
        onToggle={toggleExaminationOfConscience}
        label={copy.displayExaminationOfConscience}
      />
    </div>
  );
};

export default OptionalContentControls;
