export default function Button({
  children,
  tailwindStyle,
}: {
  children: React.ReactNode;
  tailwindStyle: string;
}) {
  return <button className={tailwindStyle}>{children}</button>;
}
