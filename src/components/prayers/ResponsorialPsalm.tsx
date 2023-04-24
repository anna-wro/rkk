import { Children } from 'react';
import { Section } from '../mdxOverrides';

type ResponsorialPsalmType = Readonly<{
  sigla: string;
  responsorials: string[];
  children: React.ReactNode;
}>;

export const ResponsorialPsalm = ({
  sigla,
  responsorials,
  children,
}: ResponsorialPsalmType) => {
  const elements = responsorials.map((responsorialVariant, index) => (
    <>
      <span className="font-bold">{index == 0 ? 'Refren: ' : 'albo: '}</span>{' '}
      {responsorialVariant} <br />
    </>
  ));

  const responsorial = Children.toArray(elements).reduce((prev, curr) => (
    <>
      {prev}
      {curr}
    </>
  ));

  const responsorialWithChildren = Children.toArray(children).reduce(
    (prev, curr) => (
      <>
        {prev}
        {curr}
        {responsorial}
      </>
    ),
    responsorial,
  );

  return (
    <div className="mb-6 space-y-2">
      <Section sigla={sigla}>Psalm Responsoryjny</Section>
      {responsorialWithChildren}
    </div>
  );
};
