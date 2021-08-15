import copy from 'copy';
import Link from 'next/link';

export default function GoBackButton() {
  return (
    <Link href="/" passHref>
      <div className="flex justify-end">
        <button className="px-4 py-2 rounded-md text-sm font-medium text-white bg-green hover:bg-green-600 focus:outline-none transition-colors">
          {copy.backToList}
        </button>
      </div>
    </Link>
  );
}
