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
    <div className="mt-4 mb-6 space-y-2 relative">
      <div>
        <span className="font-bold">{order} ant. </span>
        {antiphon}
        <div className="text-right md:absolute md:right-0 md:top-8 italic font-light">
          {name}
        </div>
      </div>
      <div>{children}</div>
      <div>
        <span className="font-bold">Ant. </span>
        {antiphon}
      </div>
    </div>
  );
};
