# useBackButton

A lightweight Vue 3 composable for tracking navigation history in Single Page Applications using Vue Router. It provides a reliable way to show or hide a "back" button depending on whether the user can actually go back — even when they use the browser's back button or mobile gestures.

---

## 📦 Installation

If you're using this inside your own app, just copy `useBackButton.js` into your `src/composables/` directory.

If you plan to publish it as a package:

```bash
npm install use-back-button
# or
pnpm add use-back-button
```

---

## 🔧 Usage

### 1. Register navigation tracking in your root component (e.g. `App.vue`)

```vue
<script setup>
import { useBackButton } from '@/composables/useBackButton' // or from 'use-back-button' if installed via npm

useBackButton().trackNavigation()
</script>
```

This ensures your navigation stack is tracked across the entire app.

---

### 2. Use it in any component to show a back button

```vue
<template>
  <v-btn icon @click="goBack" v-if="canGoBack">
    <v-icon>mdi-arrow-left</v-icon>
  </v-btn>
</template>

<script setup>
import { useBackButton } from '@/composables/useBackButton'

const { canGoBack, goBack } = useBackButton()
</script>
```

---

## ⚙️ What It Does

- Tracks your app's route transitions
- Detects if the user navigated with `push`, `replace`, or browser back
- Lets you conditionally show back buttons only when it makes sense
- Handles `router.back()` and browser/mobile back gestures cleanly

---

## 🧪 Internals

- Uses `ref()` and `computed()` to track a reactive stack
- Uses `router.beforeEach()` to monitor transitions
- Inspects `window.history.state` to tell if the user navigated backward

---

## 🛑 Caveats

- Assumes you are using Vue Router 4+ (Vue 3 only)
- Must be initialized once at app startup using `trackNavigation()`

---

## 📝 License

MIT – use it, break it, fix it, ship it. Just don’t ship it broken.

---

## 👨‍💻 Author

Made by [Tony Mobily](https://github.com/tonymobily) with irritation at bad back buttons and too many open browser tabs.
