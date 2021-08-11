import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './tools';

const Editor = ({ data }) => {
  return <EditorJs tools={EDITOR_JS_TOOLS} data={data} readOnly />;
};

export default Editor;
