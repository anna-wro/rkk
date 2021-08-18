type CanticleWrapperType = Readonly<{
  order?: number;
  sigla?: string;
  antiphon: string;
  children: React.ReactNode;
}>;

export const CanticleWrapper = ({
  order,
  sigla,
  antiphon,
  children,
}: CanticleWrapperType) => {
  return (
    <div className="mt-4 mb-6 space-y-2">
      <div>
        {order ? (
          <span className="font-bold">{order} ant. </span>
        ) : (
          <span className="font-bold">Ant. </span>
        )}
        {antiphon}
      </div>
      <div className="relative">
        {sigla && (
          <div className="text-right md:absolute md:right-0 md:top-0 italic font-light">
            {sigla}
          </div>
        )}
        {children}
      </div>
      <div>
        <span className="font-bold">Ant. </span>
        {antiphon}
      </div>
    </div>
  );
};
