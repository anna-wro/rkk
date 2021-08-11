import dynamic from 'next/dynamic';
// import { EDITOR_JS_TOOLS } from 'components/Editor/tools';

const Editor = dynamic(() => import('react-editor-js'), {
  ssr: false,
});

export default function Prayer({ prayer }) {
  return (
    <div className="mt-8 cursor-default">
      <Editor
        data={prayer}
        // tools={EDITOR_JS_TOOLS} FIXME: throws 'window not defined'
        readOnly
      />
    </div>
  );
}
