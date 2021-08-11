import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('components/Editor/Editor'), {
  ssr: false,
});

export default function Prayer({ prayer }) {
  return (
    <div className="mt-8 cursor-default">
      <Editor data={prayer} />
    </div>
  );
}
