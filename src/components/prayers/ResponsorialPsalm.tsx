import { Children } from 'react';
import { Note } from './Note';
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
  const elements = responsorials.map(responsorialVariant => (
    <>
      <span className="font-bold">Refren:</span> {responsorialVariant} <br />
    </>
  ));

  const responsorial = Children.toArray(elements).reduce((prev, curr) => (
    <>
      {prev}
      <Note>Albo:</Note>
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
