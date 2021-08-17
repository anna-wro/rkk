import { R } from 'components/R';
import { V } from 'components/V';

type ResponsoryType = Readonly<{ content: Array<string> }>;

export const Responsory = ({ content }: ResponsoryType) => {
  return (
    <>
      <V>{`${content[0]} * ${content[1]}`}</V>
      <R>{`${content[0]} / ${content[1]}`}</R>
      <V>{content[2]}</V>
      <R>{content[1]}</R>
      <V>Chwała Ojcu i Synowi, i Duchowi Świętemu</V>
      <R>{`${content[0]} / ${content[1]}`}</R>
    </>
  );
};
