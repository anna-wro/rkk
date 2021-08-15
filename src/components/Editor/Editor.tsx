import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './tools';

type EditorBlockType = Readonly<{
  id?: string;
  type: string;
  data: Object;
}>;

export type EditorDataType = Readonly<{
  version?: string;
  time?: number;
  blocks: EditorBlockType[];
}>;

export type EditorPropsType = Readonly<{
  data: EditorDataType;
  onReady: () => void;
}>;

const Editor = ({ data, onReady }: EditorPropsType) => {
  return (
    <EditorJs tools={EDITOR_JS_TOOLS} data={data} readOnly onReady={onReady} />
  );
};

export default Editor;
