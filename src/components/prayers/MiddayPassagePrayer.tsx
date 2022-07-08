import { Passage } from './Passage';
import { V } from './V';
import { R } from './R';
import { Amen } from './Amen';
import { Section } from '../mdxOverrides';

type MiddayPassagePrayerType = Readonly<{
  sigla: string;
  passage: string;
  prayer: string;
  versicle: string;
  response: string;
}>;

export const MiddayPassagePrayer = ({
  sigla,
  passage,
  prayer,
  versicle,
  response,
}: MiddayPassagePrayerType) => {
  return (
    <div>
      <Passage sigla={sigla} passage={passage} className="mt-6 mb-6" />
      <V>{versicle}</V>
      <R>{response}</R>
      <Section uppercase={true}>Modlitwa</Section>
      <b>Módlmy się.</b> <>{prayer}</>
      <Amen />
      <div className="mt-6">
        <V>Błogosławmy Panu.</V>
        <R>Bogu niech będą dzięki.</R>
      </div>
    </div>
  );
};
