export function makeStartCase(text: string) {
  return text.substr(0, 1).toUpperCase() + text.substr(1);
}

export function removeAccents(text: string) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\u0142/g, 'l'); // ł
}

export function addNonBreakingSpaces(text: string) {
  return text.replace(' *', `\xA0*`).replace(' †', `\xA0†`);
}
