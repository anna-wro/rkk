import { V, R } from './index';
import { Section } from 'components/mdxOverrides';

type ResponsoryType = Readonly<{ versicles: Array<string> }>;

export const Responsory = ({ versicles }: ResponsoryType) => {
  return (
    <>
      <Section>Responsorium</Section>
      <V>{`${versicles[0]} * ${versicles[1]}`}</V>
      <R>{`${versicles[0]} / ${versicles[1]}`}</R>
      <V>{versicles[2]}</V>
      <R>{versicles[1]}</R>
      <V>Chwała Ojcu i Synowi, i Duchowi Świętemu</V>
      <R>{`${versicles[0]} / ${versicles[1]}`}</R>
    </>
  );
};
