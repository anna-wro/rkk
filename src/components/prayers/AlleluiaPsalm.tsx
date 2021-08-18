type PartType = [string, string];

type AlleluiaType = Readonly<{
  versicles: PartType[];
}>;

export const AlleluiaPsalm = ({ versicles }: AlleluiaType) => {
  const versiclesWithGloriaPatri = [
    ...versicles,
    ['Chwała Ojcu i Synowi,', 'i Duchowi Świętemu.'],
    ['Jak była na początku, teraz i zawsze,', 'i na wieki wieków. Amen.'],
  ];

  return (
    <div className="mt-4">
      {versiclesWithGloriaPatri.map((versicle, index) => (
        <div key={index} className="mb-3">{`Alleluja.
        ${versicle[0]} * 
        (W. Alleluja)
        ${versicle[1]}
        W. Alleluja (alleluja).`}</div>
      ))}
    </div>
  );
};
