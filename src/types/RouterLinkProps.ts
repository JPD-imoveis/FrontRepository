export type RouterLinkProps = {
  href: string;
  children: React.ReactNode;
} & React.ComponentProps<"a">;