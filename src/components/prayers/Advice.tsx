import cx from 'classnames';

export const Advice = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cx('font-light text-accent mb-2', className)}>{children}</p>
  );
};
