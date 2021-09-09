import cx from 'classnames';

export default function CurrentTimeDot() {
  return (
    <span
      className={cx(
        'absolute w-3 h-3 bg-green-400 rounded-full inline-block top-[6px] left-[-20px] md:left-[-22px]',
      )}
    />
  );
}
