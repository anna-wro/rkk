import copy from 'consts/copy';

export default function UpdateAvailable() {
  return (
    <div className="md:hidden bg-yellow-400 px-8 pt-4 pb-5 mb-3">
      <h3 className="mb-1"> {copy.updateAvailableHeader}</h3>
      <p className="text-sm font-light"> {copy.updateAvailableDescription}</p>
    </div>
  );
}
