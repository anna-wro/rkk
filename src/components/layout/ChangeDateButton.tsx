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
      style={{ paddingTop: 1 }}
      className={cx(
        'focus-visible--controls hover:bg-green-200 inline-block rounded-full select-none pl-2 w-6 h-6 mx-1',
        {
          'cursor-pointer': !disabled,
          'text-gray-200': disabled,
        },
      )}
      onClick={disabled ? undefined : onClick}
      onKeyDown={handleKeyDown}
    >
      {type === 'prev' ? '❮' : '❯'}
    </div>
  );
}
