import cx from 'classnames';

export function ChangeDateButton({
  type,
  disabled,
  onClick,
}: {
  type: 'prev' | 'next';
  onClick?: () => void;
  disabled?: boolean;
}) {
  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (!disabled && event.key === 'Enter') {
      onClick();
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className={cx('inline-block select-none px-2', {
        'cursor-pointer': !disabled,
        'text-gray-200': disabled,
      })}
      onClick={disabled ? undefined : onClick}
      onKeyDown={handleKeyDown}
    >
      {type === 'prev' ? '❮' : '❯'}
    </div>
  );
}
