type PropsType = Readonly<{
  type: 'lauds' | 'vespers' | 'eve' | 'compline';
}>;

export const CustomIntercessions = ({ type }: PropsType) => {
  return (
    <>
      <div className="mt-3 font-bold">[miejsce na Twoją prośbę]</div>
      {type == 'lauds' && (
        <div className="mt-2">
          Ty wzbudzasz w nas chęci oraz popychasz do działania -{' '}
          <b>
            spraw, aby nam się chciało i umocnij w nas motywację do działania.
          </b>
        </div>
      )}
    </>
  );
};
