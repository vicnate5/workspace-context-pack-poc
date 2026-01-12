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
- Create `client-extensions/[name]/` folder.
- Generate a functional "Hello World" Custom Element Client Extension compatible with the current Liferay version
- Explain in Liferay, Client Extensions are "detached" from the core. We are building a small application that the portal will "host"

## 2. Deployment Guidance
- Provide this command: `cd client-extensions/[name] && blade gw deploy`
- Explain that Blade uses the Gradle Wrapper (`gw`) to package your code into a `.zip` file (a LUFFA) and move it to the portal's auto-deploy folder

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