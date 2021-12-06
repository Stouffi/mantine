import type { MantineThemeBase } from '../../../types';

export function themeColor(theme: MantineThemeBase) {
  return (color: string | undefined, shade: number) => {
    const primaryShades = theme.colors[theme.primaryColor];
    return color && color in theme.colors ? theme.colors[color][shade] : primaryShades[shade];
  };
}
