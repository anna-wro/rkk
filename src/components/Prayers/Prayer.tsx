import copy from 'copy';
import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';

export default function Prayer({ prayer }) {
  return (
    <>
      <Link href="/" passHref>
        <div
          className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-600 
        w-40 m-auto rounded-md p-2 mt-4 mb-4 cursor-pointer"
        >
          {copy.backToList}
        </div>
      </Link>
      <div className="cursor-default">
        <MDXRemote {...prayer.source} />
      </div>
    </>
  );
}
