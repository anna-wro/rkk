export const Antiphon = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex my-2">
      <div className="flex-shrink-0 font-bold">Ant.</div>
      <div className="ml-2">{children}</div>
    </div>
  );
};
