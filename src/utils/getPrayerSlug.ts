type PrayerSlugPropsType = Readonly<{
  filePath: string;
}>;

export default function getPrayerSlug({
  filePath,
}: PrayerSlugPropsType): string {
  const [type, day, week] = filePath.replace('.json', '').split('_');

  return `${type}-${day}-${week}`;
}
