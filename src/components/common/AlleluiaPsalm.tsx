type PartType = [string, string];

type AlleluiaType = Readonly<{
  parts: PartType[];
}>;

export const AlleluiaPsalm = ({ parts }: AlleluiaType) => {
  const partsWithGloriaPatri = [
    ...parts,
    ['Chwała Ojcu i Synowi,', 'i Duchowi Świętemu.'],
    ['Jak była na początku, teraz i zawsze,', 'i na wieki wieków. Amen.'],
  ];

  return (
    <div className="mt-4">
      {partsWithGloriaPatri.map((part, index) => (
        <div key={index} className="mb-3">{`Alleluja.
        ${part[0]} * 
        (W. Alleluja)
        ${part[1]}
        W. Alleluja (alleluja).`}</div>
      ))}
    </div>
  );
};
