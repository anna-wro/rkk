import React from 'react';
import copy from 'consts/copy';

type PropsType = {
  intercessions: boolean;
  toggleIntercessions: () => void;
};

export const OptionalContentControls: React.FC<PropsType> = ({
  intercessions,
  toggleIntercessions,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={intercessions}
          onChange={toggleIntercessions}
          className="sr-only" // Hide the default checkbox
        />
        <span
          className={`w-6 h-6 mr-2 border-blue-500 border-2 rounded ${
            intercessions ? 'bg-blue-500' : 'bg-white'
          }`}
        ></span>
        {copy.displayIntercessions}
      </label>
    </div>
  );
};
