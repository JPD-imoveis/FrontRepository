import { Link } from "react-router";
import type { RouterLinkProps } from "../../types/RouterLinkProps";

export function RouterLink({ href, children }: RouterLinkProps) {
  return (
    <Link to={href}>{children}</Link>
  );
}