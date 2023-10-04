import React from 'react';
import { Note } from './index';
import copy from 'consts/copy';

export const Silence = () => {
  return <Note className="mt-3">{copy.silence}</Note>;
};
