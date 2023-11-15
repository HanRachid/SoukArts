export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}): React.ReactElement {
  return <button className={className}>{children}</button>;
}
