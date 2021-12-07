import copy from 'consts/copy';
import Link from 'next/link';

export default function GoBackButton({ title }: { title?: string }) {
  return (
    <Link href="/" passHref>
      <div className="flex justify-end">
        <button className="px-3 py-1 rounded-md text-sm font-medium text-white bg-green hover:bg-green-600 focus:outline-none focus:bg-green-600 transition-colors dark:bg-green-600 dark:hover:bg-green-700 dark:text-white/90">
          {title ?? copy.backToList}
        </button>
      </div>
    </Link>
  );
}
