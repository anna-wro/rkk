import Image from 'next/image';
import { copy } from 'consts/copy';

export function SeeMoreArrow({ rotated }: { rotated: boolean }) {
  return (
    <div className="flex items-center mt-2 mb-2 md:mb-0 md:mt-0 select-none">
      <div className="mr-2 hover:text-gray-800">
        {rotated ? copy.seeLessInfo : copy.seeMoreInfo}
      </div>
      <div
        className={`bg-green hover:bg-green-600 rounded-full 
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
