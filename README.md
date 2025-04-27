# React.dev Navbar Swap Script

This project provides a JavaScript snippet that swaps the positions of the **"Reference"** and **"Community"** menu items on the [React.dev](https://react.dev/) website.  
The swap happens **only once per session** and persists until the browser tab is closed.

---

## 📋 Task Requirements

- Swap **"Reference"** and **"Community"** menu items.
- Swap should occur **only once per session**.
- If the page reloads during the same session, the swap should **remain swapped** (tracked using `sessionStorage`).
- **No other UI elements should be affected**.
- If menu items are missing or not siblings, the swap should **fail gracefully without errors**.
- The code must be **clean, maintainable JavaScript**.
- The script must be **testable via the browser console**.
- No page design or styling changes are needed.

---

## 🚀 How to Use

1. Visit [https://react.dev/](https://react.dev/).
2. Open your browser's Developer Console (`F12` or `Ctrl+Shift+I`).
3. Paste the script provided in [`menuSwapScript.js`](menuSwapScript.js) into the console.
4. Press `Enter`.
5. The **"Reference"** and **"Community"** items will swap places successfully!

**Note:**
- This script uses `sessionStorage` to remember if the swap has already occurred.
- After closing the tab or browser (ending the session), the swap memory resets.

---

## 📂 Files

- `menuSwapScript.js` — Main JavaScript code that handles the menu swap.

---

## ✅ Features

- Fully session-based swap handling.
- No UI damage or layout breaks.
- Works gracefully even if target elements are missing.
- No external libraries needed.
