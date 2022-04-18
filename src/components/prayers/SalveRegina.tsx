import { Section } from 'components/mdxOverrides';
import { getCalendarData } from 'utils/date';

export const SalveRegina = () => {
  const calendar = getCalendarData();

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
      {calendar?.season === 'easter' && (
        <div className="mt-4 italic font-light">
          {`Królowo nieba, wesel się, alleluja,
Bo Ten, któregoś nosiła, alleluja,
Zmartwychwstał, jak powiedział, alleluja,
Módl się za nami do Boga, alleluja.`}
        </div>
      )}
    </>
  );
};
