import { useState } from 'react';
import dynamic from 'next/dynamic';
import GoBackButton from 'components/GoBackButton';

const Editor = dynamic(() => import('components/Editor/Editor'), {
  ssr: false,
});

export default function Prayer({ prayer }) {
  const [editorReady, setEditorReady] = useState(false);
  return (
    <>
      <div className="mb-4">
        <GoBackButton />
      </div>
      <div className="cursor-default">
        <Editor data={prayer} onReady={() => setEditorReady(true)} />
      </div>
      {editorReady && (
        <div className="mt-6 mb-12">
          <GoBackButton />
        </div>
      )}
    </>
  );
}
