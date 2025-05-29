import type { ComponentProps } from "react";

export type FormInputProps = {
  id: string;
  labelText: string;
  placeholderText: string;
  labelColor?: "light" | "dark";
} & ComponentProps<"input">;