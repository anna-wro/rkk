import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './tools';

type EditorPropsType = Readonly<{
  data: any;
  onReady: () => void;
}>;

const Editor = ({ data, onReady }: EditorPropsType) => {
  return (
    <EditorJs tools={EDITOR_JS_TOOLS} data={data} readOnly onReady={onReady} />
  );
};

export default Editor;
