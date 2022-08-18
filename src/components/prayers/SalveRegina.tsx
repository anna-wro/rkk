import { Section } from 'components/mdxOverrides';
import { Or } from './Or';

export const SalveRegina = () => {
  return (
    <>
      <Section>Salve Regina</Section>
      <div className="italic font-light">
        {`Salve, Regina, Mater misericordiæ,
vita, dulcedo, et spes nostra, salve.
Ad te clamamus exsules filii Hevæ,
Ad te suspiramus, gementes et flentes
in hac lacrimarum valle.
Eia, ergo, advocata nostra, illos tuos
misericordes oculos ad nos converte;
Et Jesum, benedictum fructum ventris tui,
nobis post hoc exsilium ostende.
O clemens, O pia, O dulcis Virgo Maria.`}
      </div>
      <Or />
      <div className="italic font-light">
        {`Witaj Królowo Matko Miłosierdzia
        Życie, słodyczy i nadziejo nasza witaj
        Do Ciebie wołamy
        Wygnańcy synowie Ewy
        Do Ciebie wzdychamy jęcząc i płacząc
        Na tym łez padole
        Przeto Orędowniczko nasza
        One miłosierne oczy Twoje na nas zwróć
        A Jezusa błogosławiony owoc żywota Twojego
        Po tym wygnaniu nam okaż
        O łaskawa
        O litościwa
        O słodka
        Panno Maryjo`}
      </div>
    </>
  );
};
