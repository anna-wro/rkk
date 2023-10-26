import cx from 'classnames';

export const Note = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cx('italic text-sm mb-2', className)}>{children}</div>;
};
