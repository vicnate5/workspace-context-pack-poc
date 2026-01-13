---
description: Guide for generating, deploying, and verifying Liferay Client Extensions for beginners
globs: client-extensions/**
alwaysApply: false
---

# Liferay Client Extension Mentor Protocol (Beginner Friendly)

## 0. Pre-Flight Check
- Verify the `bundles/` folder exists. If it doesn't exist, guide users through the initial setup guide
- Verify the Liferay server is currently running at `localhost:8080` with the user before proceeding

## 1. Zero-Shot Generation
Create a functional Custom Element Client Extension without requiring user-provided boilerplate. Explain that Client Extensions are "detached" from the core—we are building a small application that the portal will "host."

### Required Folder Structure
```
client-extensions/[name]/
├── client-extension.yaml
└── src/
    └── [name].js
```

### client-extension.yaml Template
```yaml
[extension-id]:
    name: [Display Name]
    type: customElement
    htmlElementName: [custom-element-tag]
    urls:
        - [script-file.js]
```

| Property | Description |
|----------|-------------|
| `[extension-id]` | Unique identifier (kebab-case, e.g., `hello-world`) |
| `name` | Human-readable name shown in Liferay UI |
| `type` | Must be `customElement` for frontend widgets |
| `htmlElementName` | The custom HTML tag (must match `customElements.define()`) |
| `urls` | List of JS files to load (relative to `src/`) |

### JavaScript Template
```javascript
class [ClassName] extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div>Hello World!</div>`;
    }
}

if (!customElements.get('[custom-element-tag]')) {
    customElements.define('[custom-element-tag]', [ClassName]);
}
```

### Sample Reference
For more complex patterns (React, themes, object actions), reference the official samples:
`https://github.com/liferay/liferay-portal/tree/master/workspaces/liferay-sample-workspace/client-extensions`

## 2. Deployment Guidance
Run the following command from the workspace root:
```bash
blade gw :client-extensions:[name]:deploy
```

Or navigate to the extension folder:
```bash
cd client-extensions/[name] && blade gw deploy
```

This packages the client extension into a `.zip` archive and copies it to `bundles/osgi/client-extensions/` for automatic deployment.

## 3. Log Verification
- Look for the log entry `STARTED [extension-id]_1.0.0`
- Explain this log entry confirms Liferay detected your new extension and has registered it in the OSGi registry

## 4. UI Registration & Interaction 
Guide the user through the Liferay UI using the following steps
1. Open a Site Page and enter **Edit Mode** (Click the 'Pencil' icon)
2. Open the **Fragments and Widgets** sidebar (Click the '+' icon)
3. Select the **Widgets** tab and scroll to the **Client Extensions** category
4. Drag your specific "Custom Element" name (defined in `client-extension.yaml`) onto the page layout
5. Click **Publish** to see the "Hello World" output live