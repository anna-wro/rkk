type PrayerSlugPropsType = Readonly<{
  filePath: string;
}>;

export default function getPrayerSlug({
  filePath,
}: PrayerSlugPropsType): string {
  const [type, day, week] = filePath.replace('.json', '').split('_');

  // TODO map type and day to full words
  return `${type}-${day}-${week}`;
}
