type PropsType = {
  href: string;
  headline: string;
  content: React.ReactNode;
};

export default function Box({ href, headline, content }: PropsType) {
  return (
    <a href={href} className="box">
      <h3 className="text-2xl font-bold">{headline}</h3>
      <p className="mt-4 text-xl">{content}</p>
    </a>
  );
}
