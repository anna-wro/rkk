/* eslint-disable @next/next/no-html-link-for-pages */
import copy from 'consts/copy';
import Image from 'next/image';
import logo from '../../../public/logo.svg';

export default function Title() {
  return (
    <div className="flex items-center">
      <a href="/">
        <Image
          src={logo}
          alt={copy.logoAlt}
          width="100"
          height="100"
          className="cursor-pointer"
        />
      </a>
      <div className="ml-2">
        <a href="/">
          <div className="cursor-pointer">
            <h1 className="text-2xl md:text-4xl font-bold hover:text-gray-700 dark:hover:text-red-400">
              {copy.title}
            </h1>
            <h2 className="text-sm md:text-md text-gray-600 hover:text-gray-800 dark:text-white/90 dark:hover:text-red-400">
              {copy.subtitle}
            </h2>
          </div>
        </a>
      </div>
    </div>
  );
}
