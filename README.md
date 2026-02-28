# Seisen UI Library

![Seisen UI Banner](/public/images/Windows.png)

A professional, modern, and highly customizable UI library for Roblox, designed for developers who demand aesthetics and performance.

[**View Official Documentation**](https://seisenui.onrender.com)

---

## ✨ Features

- **Modern Aesthetics**: Sleek dark theme with glassmorphism effects and smooth animations.
- **Comprehensive Components**:
  - **Windows**: Draggable, reliable window management.
  - **Tabs**: Organized navigation with sidebar support.
  - **Toggles**: Keybind support and animated state changes.
  - **Sliders**: Precision control with custom steps and ranges.
  - **Dropdowns**: Multi-select support, search, and instant updates.
  - **Color Pickers**: Intuitive color selection.
- **Lucide Icons**: Integrated support for thousands of standard icons.
- **Theme Manager**: Real-time theme switching and customization.
- **Save Manager**: Built-in config saving and loading system.

## 📦 Quick Start

Load the library directly into your script:

```lua
local Seisen = loadstring(game:HttpGet("https://github.com/Seisen88/Seisen-Library/blob/main/SeisenUI.lua?raw=true"))()

local Window = Seisen:CreateWindow({
    Name = "My Script Hub",
    Title = "Seisen UI",
    Icon = "box"
})

local Tab = Window:CreateTab("Main", "home")

local Section = Tab:CreateSection("Features")

Section:CreateToggle({
    Name = "Enable Feature",
    Default = false,
    Callback = function(Value)
        print("Feature is:", Value)
    end
})
```

## 📚 Documentation

For full API reference, component examples, and theming guides, visit our **[Documentation Website](https://seisenui.onrender.com)**.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
