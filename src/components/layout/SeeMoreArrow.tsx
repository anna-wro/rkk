import Image from 'next/image';
import { copy } from 'consts/copy';

export function SeeMoreArrow({
  rotated,
  onClick,
  onKeyDown,
}: {
  rotated: boolean;
  onClick: () => void;
  onKeyDown: (event) => void;
}) {
  return (
    <div
      className="inline-flex items-center mt-2 mb-2 md:mb-0 md:mt-0 select-none opacity-90 hover:opacity-100 focus-visible"
      onClick={onClick}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className="mr-2 ">
        {rotated ? copy.seeLessInfo : copy.seeMoreInfo}
      </div>
      <div
        className={`bg-green-500 rounded-full 
flex items-center justify-center w-4 h-4 flex-shrink-0 ${
          rotated && 'transform rotate-90'
        }`}
      >
        <Image
          src="/chevron-right.svg"
          width={8}
          height={8}
          alt={copy.chevronImageAlt}
        />
      </div>
    </div>
  );
}
