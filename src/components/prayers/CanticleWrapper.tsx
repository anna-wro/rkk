type CanticleWrapperType = Readonly<{
  order?: number;
  sigla?: string;
  antiphon?: string;
  children: React.ReactNode;
}>;

export const CanticleWrapper = ({
  order,
  sigla,
  antiphon,
  children,
}: CanticleWrapperType) => {
  return (
    <div className="mb-6 space-y-2">
      <div className="md:flex justify-between">
        <div>
          {antiphon ? (
            order ? (
              <span className="font-bold">{order} ant. </span>
            ) : (
              <span className="font-bold">Ant. </span>
            )
          ) : null}
          {antiphon}
        </div>
        {sigla && (
          <div className="flex-shrink-0 pl-4 text-right italic font-light mb-2 max-w-[160px]">
            {sigla}
          </div>
        )}
      </div>
      <div>{children}</div>
      {antiphon && (
        <div>
          <span className="font-bold">Ant. </span>
          {antiphon}
        </div>
      )}
    </div>
  );
};
