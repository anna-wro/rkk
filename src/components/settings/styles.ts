function createCssClasses() {
  const button = 'text-white cursor-pointer px-4 py-2 rounded-lg';
  const blue = 'bg-blue-500 hover:bg-blue-600';
  const orange = 'bg-orange-500 hover:bg-orange-600';
  const gray = 'bg-gray-400';

  return {
    fontSizeButton: 'flex items-center justify-center rounded-full w-8 h-8',
    enabledButton: `${button} ${blue}`,
    disabledButton: `${gray} cursor-default`,
    fontButton: `${button} ${blue}`,
    resetButton: `${button} ${orange} mb-20`,
    themeButton: `${button} ${blue}`,
  };
}

export const styles = createCssClasses();
