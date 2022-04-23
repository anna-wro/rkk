import { Section } from 'components/mdxOverrides';
import { Or } from './index';
export const ReginaCaeli = () => {
  return (
    <>
      <Section>Regina Caeli</Section>
      <div className="italic font-light">
        {`Królowo nieba, wesel się, alleluja,
Bo Ten, któregoś nosiła, alleluja,
Zmartwychwstał, jak powiedział, alleluja,
Módl się za nami do Boga, alleluja.`}
      </div>
      <Or />
      <div className="italic font-light">
        {`Regina caeli, laetare, alleluia;
Quia quem meruisti portare, alleluia,
Resurrexit, sicut dixit, alleluia:
Ora pro nobis Deum, alleluia.`}
      </div>
    </>
  );
};
