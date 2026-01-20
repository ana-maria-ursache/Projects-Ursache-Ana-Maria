
const themeConfig = [
    { name: 'light-theme', image: 'images/sun.png' },
    { name: 'dark-theme', image: 'images/moon.png' }
];

let currentThemeIndex = 0;

function setTheme(themeName) {
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    if (themeName) {
        document.documentElement.classList.add(themeName);
    }
    localStorage.setItem('theme', themeName);
    
    currentThemeIndex = themeConfig.findIndex(t => t.name === themeName);
    updateThemeIcon();
}

export function cycleTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % themeConfig.length;
    setTheme(themeConfig[currentThemeIndex].name);
}

function updateThemeIcon() {
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.src = themeConfig[currentThemeIndex].image;

        if (currentThemeIndex === 1) {  
            themeIcon.style.filter = 'invert(1)';
        } else {
            themeIcon.style.filter = 'invert(0)';
        }
    }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme('light-theme'); 
}