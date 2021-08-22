type PropsType = Readonly<{
  type: 'lauds' | 'vespers' | 'eve' | 'compline';
}>;

export const CustomIntercessions = ({ type }: PropsType) => {
  return (
    <>
      <div className="mt-4 font-bold">[miejsce na Twoją prośbę]</div>
      {type == 'lauds' && (
        <div className="mt-2">
          Marek help please with our standard morning intercession
        </div>
      )}
    </>
  );
};
