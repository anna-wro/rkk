import copy from 'copy';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.svg';

export default function Title() {
  return (
    <Link href="/" passHref>
      <div className="md:mt-10 mb-2 md:mb-6 flex mx-auto cursor-pointer">
        <Image src={logo} alt={copy.logoAlt} width="100" height="100" />
        <div className="ml-2">
          <h1 className="md:text-4xl font-bold mt-4">{copy.title}</h1>
          <h2 className="text-sm md:text-md text-gray-600">{copy.subtitle}</h2>
        </div>
      </div>
    </Link>
  );
}
