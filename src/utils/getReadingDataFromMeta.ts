type ReadingMetaType = Readonly<{
  [key: string]: string;
}>;

type PropsType = Readonly<{
  meta: ReadingMetaType;
  filePath: string;
}>;

export function getReadingDataFromMeta({ meta, filePath }: PropsType) {
  const slug = filePath.replace('.mdx', '');

  return {
    slug,
    season: meta?.season ?? '',
    title: meta?.title ?? '',
    page: Number(meta?.page) ?? 0,
  };
}
