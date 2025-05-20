
import React from 'react';

const ThemeDemo = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Theme Color Palette</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-2">Primary Colors</h3>
          <div className="flex flex-wrap gap-2">
            <div className="color-box bg-theme-primary">Primary</div>
            <div className="color-box bg-theme-primary-dark">Primary Dark</div>
            <div className="color-box bg-theme-primary-light text-gray-800">Primary Light</div>
            <div className="color-box bg-theme-primary-muted text-gray-800">Primary Muted</div>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Secondary Colors</h3>
          <div className="flex flex-wrap gap-2">
            <div className="color-box bg-theme-secondary">Secondary</div>
            <div className="color-box bg-theme-secondary-light text-gray-800">Secondary Light</div>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Background Colors</h3>
          <div className="flex flex-wrap gap-2">
            <div className="color-box bg-theme-background text-gray-800">Background</div>
            <div className="color-box bg-theme-background-alt text-gray-800">Background Alt</div>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Text Colors</h3>
          <div className="flex flex-wrap gap-2">
            <div className="color-box bg-white border border-gray-200">
              <span className="text-theme-text">Text</span>
            </div>
            <div className="color-box bg-white border border-gray-200">
              <span className="text-theme-text-muted">Text Muted</span>
            </div>
            <div className="color-box bg-theme-primary">
              <span className="text-theme-text-light">Text Light</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2">Accent Colors</h3>
          <div className="flex flex-wrap gap-2">
            <div className="color-box bg-theme-accent">Accent</div>
            <div className="color-box bg-theme-accent-light text-gray-800">Accent Light</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add the styles for the color boxes
const styles = `
  .color-box {
    @apply w-24 h-24 rounded flex items-center justify-center text-white text-xs text-center p-2;
  }
`;

export default ThemeDemo;
