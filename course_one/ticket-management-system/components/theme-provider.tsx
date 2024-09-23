import { ThemeProvider as NextThemesprovider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesprovider {...props}>{children}</NextThemesprovider>;
}
