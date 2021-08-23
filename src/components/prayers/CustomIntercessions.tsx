type PropsType = Readonly<{
  type: 'lauds' | 'vespers' | 'eve' | 'compline';
}>;

export const CustomIntercessions = ({ type }: PropsType) => {
  return (
    <>
      <div className="mt-4 font-bold">[miejsce na Twoją prośbę]</div>
      {type == 'lauds' && (
        <div className="mt-2">
          Ty wzbudzasz w nas chęci oraz popychasz do działania -{' '}
          <b>
            spraw, aby chciało się nam tak, jak nam się nie chce i umocnij w nas
            motywację do działania.
          </b>
        </div>
      )}
    </>
  );
};
