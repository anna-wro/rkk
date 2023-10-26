import Link from 'next/link';

type LinkPropsType = Readonly<{
  name: string;
  href: string;
  internal?: boolean;
}>;

export default function StyledLink({
  name,
  href,
  internal = true,
}: LinkPropsType) {
  return internal ? (
    <Link href={href} passHref>
      <span className="inline-block hover:underline cursor-pointer focus-visible">
        {name}
      </span>
    </Link>
  ) : (
    <a
      href={href}
      className="inline-block hover:underline cursor-pointer focus-visible"
    >
      {name}
    </a>
  );
}
