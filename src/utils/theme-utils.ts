// Theme color management utilities
export const DEFAULT_HUE = 330; // Pink theme default

export function getStoredHue(): number {
    if (typeof window === 'undefined') return DEFAULT_HUE;
    const stored = localStorage.getItem('portfolio-hue');
    return stored ? parseInt(stored) : DEFAULT_HUE;
}

export function setHue(hue: number): void {
    if (typeof window === 'undefined') return;
    
    localStorage.setItem('portfolio-hue', hue.toString());
    document.documentElement.style.setProperty('--theme-hue', hue.toString());
    
    // Calculate theme colors based on hue
    const colors = calculateThemeColors(hue);
    
    // Apply colors to CSS custom properties
    Object.entries(colors).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--theme-${key}`, value);
    });
}

export function calculateThemeColors(hue: number) {
    return {
        'primary': `hsl(${hue}, 70%, 60%)`,
        'primary-light': `hsl(${hue}, 70%, 95%)`,
        'primary-dark': `hsl(${hue}, 70%, 30%)`,
        'primary-100': `hsl(${hue}, 70%, 95%)`,
        'primary-200': `hsl(${hue}, 70%, 90%)`,
        'primary-300': `hsl(${hue}, 70%, 80%)`,
        'primary-400': `hsl(${hue}, 70%, 70%)`,
        'primary-500': `hsl(${hue}, 70%, 60%)`,
        'primary-600': `hsl(${hue}, 70%, 50%)`,
        'primary-700': `hsl(${hue}, 70%, 40%)`,
        'primary-800': `hsl(${hue}, 70%, 30%)`,
        'primary-900': `hsl(${hue}, 70%, 20%)`,
    };
}

export function initializeTheme(): void {
    const currentHue = getStoredHue();
    setHue(currentHue);
}

export function applyThemeToElements(): void {
    // This function can be extended to apply theme colors to specific elements
    // For now, it relies on CSS custom properties
}
