import React from 'react';
import copy from 'consts/copy';
import { CustomCheckbox } from './CustomCheckbox';

type PropsType = {
  intercessions: boolean;
  toggleIntercessions: () => void;
  examinationOfConscience: boolean;
  toggleExaminationOfConscience: () => void;
};

export const OptionalContentControls: React.FC<PropsType> = ({
  intercessions,
  toggleIntercessions,
  examinationOfConscience,
  toggleExaminationOfConscience,
}) => {
  return (
    <div className="flex flex-col space-y-3">
      <CustomCheckbox
        isChecked={intercessions}
        onToggle={toggleIntercessions}
        label={copy.displayIntercessions}
      />
      <CustomCheckbox
        isChecked={examinationOfConscience}
        onToggle={toggleExaminationOfConscience}
        label={copy.displayExaminationOfConscience}
      />
    </div>
  );
};

export default OptionalContentControls;
