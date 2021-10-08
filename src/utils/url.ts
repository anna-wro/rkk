export function getQueryParam(param: string) {
  let query;

  if (typeof document !== 'undefined') {
    query = new URLSearchParams(document.location?.search).get(param);
  }

  return query;
}
