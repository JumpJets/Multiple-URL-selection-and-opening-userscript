# Multiple-URL-selection-and-opening-userscript
Use Ctrl + Left mouse click to select multiple urls, they will be highlighted with red outline and opened when you release mouse.

Userscript showcase at codepen: https://codepen.io/XCanG/pen/EEyWMW

**This userscript not work in Chrome** because Chrome not allow to opening 2 or more tabs in one action, for that use chrome addons with API:
```js
chrome.tabs.create({
    url: urls[i]
});
```

You need addon in your browser such as **Tapermonkey** to use it.
