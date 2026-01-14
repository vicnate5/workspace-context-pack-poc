# Hello World Client Extension

A simple "Hello World" example of a Liferay Client Extension using Custom Elements.

## Overview

This is a minimal Client Extension that demonstrates how to create a custom widget for Liferay using Web Components. It displays a simple "Hello, World!" message with styling.

## Structure

- `client-extension.yaml` - Configuration file that defines the extension
- `assets/index.js` - JavaScript file containing the custom element
- `assets/style.css` - CSS file with styling for the component

## Deployment

1. **Deploy the extension:**
   ```bash
   blade gw deploy
   ```

2. **Verify deployment:**
   - Check the logs at `bundles/tomcat/logs/catalina.out`
   - Look for: `STARTED liferay-hello-world-custom-element`

3. **Add to a page:**
   - Open a Site Page and enter **Edit Mode** (Click the 'Pencil' icon)
   - Open the **Fragments and Widgets** sidebar (Click the '+' icon)
   - Select the **Widgets** tab and scroll to the **Client Extensions** category
   - Drag **Hello World Widget** onto the page layout
   - Click **Publish** to view the widget

## Customization

You can customize the message and styling by editing:
- `assets/index.js` - Change the HTML content
- `assets/style.css` - Modify the visual appearance

## Learn More

- [Liferay Client Extensions Documentation](https://github.com/liferay/liferay-learn/tree/master/docs/dxp/latest/en/liferay-development/client-extensions.md)
- [Custom Element Client Extensions](https://github.com/liferay/liferay-learn/tree/master/docs/dxp/latest/en/liferay-development/customizing-liferays-look-and-feel/using-a-custom-element-client-extension.md)
