# `eslint-config-artisan`

An opinionated ESLint configuration for artisans

## Overview

This configuration is based on [`@antfu/eslint-config`](https://github.com/antfu/eslint-config) with some notable differences.

- Single quotes, but allow uninterpolated template literals for consistency
- Comma-delimited properties for object-like type definitions
- Use `type` and `interface` interchangeably for type definitions
- Braces are not required
- Single line braces are allowed
- Parenthesis for arrow functions are optional

## How to use it

Install the package in your project.

```bash
# npm
npm i -D eslint-config-artisan

# pnpm
pnpm add -D eslint-config-artisan

# yarn
yarn add -D eslint-config-artisan
```

Add it to your `.eslintrc` file.

```json
{
  "extends": "artisan",
  "rules": {
    // Optionally, add your own overrides here...
  }
}
```

Add some scripts to your `package.json`.

```diff
 {
   "scripts": {
+    "lint": "eslint .",
+    "lint:fix": "eslint --fix ."
   }
 }
```
