import copy from 'copy';
import Link from 'next/link';

export default function GoBackButton() {
  return (
    <Link href="/" passHref>
      <div className="flex justify-end z-100">
        <button className="px-3 py-1 rounded-md text-sm font-medium text-white bg-green hover:bg-green-600 focus:outline-none transition-colors">
          {copy.backToList}
        </button>
      </div>
    </Link>
  );
}
