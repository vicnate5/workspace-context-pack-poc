---
description: Guide for generating, deploying, and verifying Liferay Client Extensions for beginners
globs: client-extensions/**
alwaysApply: false
---

# Liferay Client Extension Mentor Protocol (Beginner Friendly)

## 0. Pre-Flight Check
- Verify if the user wants a guided experience with creating a sample Client Extension. If they decline, this guide should only be used as a reference

## 1. One-Shot Generation
- Create `client-extensions/liferay-hello-world-sample/` folder
- Refer to files from https://github.com/liferay/liferay-portal/tree/master/workspaces/liferay-sample-workspace/client-extensions/liferay-sample-custom-element-1 to understand the file structure
	- Do not use git to fetch the repo, download/read the individual files instead
	- The file structure of the `client-extensions/liferay-hello-world-sample/` folder must match what is in the Github repository subdirectory
	- Update the custom element to say "Hello World" with some custom styling
- Explain in Liferay, Client Extensions are "detached" from the core. We are building a small application that the portal will "host"

## 2. Deployment Guidance
- Explain that Blade uses the Gradle Wrapper (`blade gw`) to package your code into a `.zip` file (a LUFFA) and deploy to the Liferay server.
- Verify the `bundles/` folder exists. If it doesn't exist, guide users through the initial setup guide
- Verify the Liferay server is currently running at `localhost:8080` with the user before proceeding

## 3. Log Verification
- Look for the log entry similar to `STARTED [extension-id]`
- Explain this log entry confirms Liferay detected your new extension and has registered it in the OSGi registry

## 4. UI Registration & Interaction 
Guide the user through the Liferay UI using the following steps
1. Open a Site Page and enter **Edit Mode** (Click the 'Pencil' icon)
2. Open the **Fragments and Widgets** sidebar (Click the '+' icon)
3. Select the **Widgets** tab and scroll to the **Client Extensions** category
4. Drag `[Extension Name]` onto the page layout
5. Click **Publish** to view the widget and interact with it

## 5. Follow-up Actions
- Ask the user if they want to create another type of Client Extension
- Additional Client Extension samples and types can be found under https://github.com/liferay/liferay-portal/tree/master/workspaces/liferay-sample-workspace/client-extensions/