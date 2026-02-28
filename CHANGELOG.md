# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.4] - 2026-01-22

### Updated

- **Library**: Documented `Library:Toggle(state)` for central visibility management.
- **Window**: Added `ConfigSettings` to `CreateWindow` configuration options.
- **Tabs**: Updated `AddTab` signature to `(name, icon, subtitle)` to match codebase.
- **Sections**: Documented new `icon` parameter for `AddSection`, `AddLeftSection`, and `AddRightSection`.

## [1.0.1] - 2026-01-19

### Added

- **Dropdowns**: Added Multi-Select usage example to `Dropdowns` page.
- **Dropdowns**: Documented `Refresh` method for dynamic updates.

### Fixed

- **Hydration**: Fixed hydration mismatch error in `layout.tsx` by adding `suppressHydrationWarning`.

## [1.0.0] - 2026-01-18

### Added

- Initial release of Seisen UI Documentation website.
- Core documentation for:
  - Installation
  - Windows & Tabs
  - Toggles, Sliders, Dropdowns
  - Color Pickers, Buttons, Input Fields
