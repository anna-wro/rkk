import { Children } from 'react';
import { Note } from './Note';
import { Section } from '../mdxOverrides';

type ResponsoryPsalmType = Readonly<{
  sigla: string;
  responsories: string[];
  children: React.ReactNode;
}>;

export const ResponsoryPsalm = ({
  sigla,
  responsories,
  children,
}: ResponsoryPsalmType) => {
  const elements = responsories.map(responsoryVariant => (
    <>
      <span className="font-bold">Refren:</span> {responsoryVariant} <br />
    </>
  ));

  const responsory = Children.toArray(elements).reduce((prev, curr) => (
    <>
      {prev}
      <Note>Albo:</Note>
      {curr}
    </>
  ));

  const responsoryWithChildren = Children.toArray(children).reduce(
    (prev, curr) => (
      <>
        {prev}
        {curr}
        {responsory}
      </>
    ),
    responsory,
  );

  return (
    <div className="mb-6 space-y-2">
      <Section sigla={sigla}>Psalm Responsoryjny</Section>
      {responsoryWithChildren}
    </div>
  );
};
