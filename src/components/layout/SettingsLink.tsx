import Link from 'next/link';
import { copy } from 'consts/copy';

export function SettingsLink() {
  return (
    <div className="my-10 margin-auto text-center text-gray-700 cursor-pointer hover:text-blue-500">
      <Link href="/ustawienia" passHref>
        {copy.settings.headline}
      </Link>
    </div>
  );
}
