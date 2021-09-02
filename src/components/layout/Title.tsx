import copy from 'consts/copy';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo.svg';

export default function Title() {
  return (
    <Link href="/" passHref>
      <div className="flex items-center cursor-pointer">
        <Image src={logo} alt={copy.logoAlt} width="100" height="100" />
        <div className="ml-2">
          <h1 className="text-2xl md:text-4xl font-bold hover:text-gray-700 dark:hover:text-red-400">
            {copy.title}
          </h1>
          <h2 className="text-sm md:text-md text-gray-600 hover:text-gray-800 dark:text-white dark:text-opacity-90  dark:hover:text-red-400">
            {copy.subtitle}
          </h2>
        </div>
      </div>
    </Link>
  );
}
