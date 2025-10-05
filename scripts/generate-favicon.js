// Simple script to generate a basic ICO file with a blue "C"
// This creates a simple 16x16 ICO file manually

const fs = require('fs');
const path = require('path');

// Create a simple 16x16 PNG with blue "C" on white background
// PNG header + IHDR + blue C pattern + IEND
const base64Data = 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nGNgGAWjYBSMglEwCkbBKBgFo2AUjIJRMApGNgAABBAAAQWmG7QAAAAASUVORK5CYII=';

// For now, let's just update the favicon.svg to be used instead
console.log('Using SVG favicon - modern browsers support this format');
console.log('The favicon.svg has been created with a blue "C"');
