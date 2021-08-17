import { Versicle } from './Versicle';

type RolesType = Readonly<{
  versicles: string[];
}>;

export const Versicles = ({ versicles }: RolesType) => {
  return (
    <div className="mb-6">
      {versicles.map((versicle, index) => {
        const initial = index % 2 === 0 ? 'k' : 'w';

        return <Versicle key={index} initial={initial} content={versicle} />;
      })}
    </div>
  );
};
