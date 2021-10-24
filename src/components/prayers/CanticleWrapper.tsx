type CanticleWrapperType = Readonly<{
  order?: number;
  sigla?: string;
  antiphon?: string;
  children: React.ReactNode;
}>;

// TODO use <Antiphon />
export const CanticleWrapper = ({
  order,
  sigla,
  antiphon,
  children,
}: CanticleWrapperType) => {
  return (
    <div className="mb-6 space-y-2">
      {antiphon ? (
        order ? (
          <span className="font-bold">{order} ant. </span>
        ) : (
          <span className="font-bold">Ant. </span>
        )
      ) : null}
      {antiphon}
      {sigla && <div className="text-right italic font-light">{sigla}</div>}
      <div>{children}</div>
      {antiphon && (
        <div>
          {order ? (
            <span className="font-bold">{order} ant. </span>
          ) : (
            <span className="font-bold">Ant. </span>
          )}
          {antiphon}
        </div>
      )}
    </div>
  );
};
