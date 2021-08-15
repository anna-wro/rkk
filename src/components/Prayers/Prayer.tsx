import { useState } from 'react';
import dynamic from 'next/dynamic';
import GoBackButton from 'components/GoBackButton';
import type { EditorDataType } from 'components/Editor/Editor';

const Editor = dynamic(() => import('components/Editor/Editor'), {
  ssr: false,
});

export type PrayerType = EditorDataType &
  Readonly<{
    ID: string;
    slug: string;
    day: string;
    week: string;
    type: string;
  }>;

type PropsType = Readonly<{ prayer: PrayerType }>;

export default function Prayer({ prayer }: PropsType) {
  const [editorReady, setEditorReady] = useState(false);
  return (
    <>
      <div className="absolute top-32 right-20 z-10">
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
