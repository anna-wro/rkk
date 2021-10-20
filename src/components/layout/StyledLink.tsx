import Link from 'next/link';

type LinkPropsType = Readonly<{
  name: string;
  href: string;
}>;

export default function StyledLink({ name, href }: LinkPropsType) {
  return (
    <Link href={href} passHref>
      <a
        href={href}
        className="inline-block hover:underline cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 rounded-sm"
      >
        {name}
      </a>
    </Link>
  );
}
