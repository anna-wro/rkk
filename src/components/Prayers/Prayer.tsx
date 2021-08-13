import copy from 'copy';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Editor = dynamic(() => import('components/Editor/Editor'), {
  ssr: false,
});

export default function Prayer({ prayer }) {
  return (
    <div className="mt-8">
      <Link href="/" passHref>
        <div className="bg-gray-100 hover:bg-gray-200 w-40 m-auto rounded-md p-2 mt-4 mb-4 cursor-pointer">
          {copy.backToList}
        </div>
      </Link>
      <div className="text-left cursor-default">
        <Editor data={prayer} />
      </div>
    </div>
  );
}
