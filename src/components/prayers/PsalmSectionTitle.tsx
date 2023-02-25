type PsalmSectionTitlePropsType = Readonly<{
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}>;

export const PsalmSectionTitle = ({
  title,
  subtitle,
  children,
}: PsalmSectionTitlePropsType) => {
  return (
    <div className="font-light">
      <p className="text-center">{title}</p>
      {subtitle && <p className="text-center mb-2">{subtitle}</p>}
      <p className="mb-2">{children}</p>
    </div>
  );
};
