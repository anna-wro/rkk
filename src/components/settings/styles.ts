function createCssClasses() {
  const button = 'text-white cursor-pointer px-4 py-2 rounded-lg';
  const primary = 'bg-blue-500 hover:bg-blue-600';
  const warning = 'bg-orange-500 hover:bg-orange-600';
  const disabled = 'bg-gray-400';

  return {
    fontSizeButton: 'flex items-center justify-center !rounded-full w-8 h-8',
    enabledButton: `${button} ${primary}`,
    disabledButton: `${disabled} cursor-default`,
    fontButton: `${button} ${primary}`,
    resetButton: `${button} ${warning} mb-20`,
    themeButton: `${button} ${primary}`,
  };
}

export const styles = createCssClasses();
