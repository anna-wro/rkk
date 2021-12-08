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
      {sigla && <div className="mb-2 font-light text-center">{sigla}</div>}
      {antiphon ? (
        order ? (
          <span className="font-bold">{order} ant. </span>
        ) : (
          <span className="font-bold">Ant. </span>
        )
      ) : null}
      {antiphon}
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
