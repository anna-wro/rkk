import cx from 'classnames';

export const Note = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={cx('italic text-sm mb-2', className)}>{children}</p>;
};
