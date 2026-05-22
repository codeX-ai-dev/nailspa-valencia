export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export const dynamicParams = false;

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return <>{children}</>;
}
