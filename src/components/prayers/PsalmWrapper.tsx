type PsalmHeaderType = Readonly<{
  order: number;
  name: string;
  antiphon: string;
  children: React.ReactNode;
}>;

export const PsalmWrapper = ({
  order,
  name,
  antiphon,
  children,
}: PsalmHeaderType) => {
  return (
    <div className="mb-2 space-y-2">
      <div>
        <span className="font-bold">{order} ant. </span>
        {antiphon}
        <div className="text-right italic font-light">{name}</div>
      </div>

      <div>{children}</div>
      <div>
        <b>Ant. </b>
        {antiphon}
      </div>
    </div>
  );
};
