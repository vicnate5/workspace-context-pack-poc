---
description: General rules for Liferay Workspaces
globs: *
alwaysApply: true
---

# Liferay General Rules

## 1. Context Priming
Before answering technical questions, you MUST establish the environment context
- Scan for `gradle.properties` in the root directory
- Identify the value of `liferay.workspace.product`

## 2. Liferay Version-Aware Rules
Based on the version identified above, apply the following logic
- If Version < 7.4: Focus on traditional OSGi module development
- If Version >= 7.4: Steer users towards modern Liferay best practices like Client Extensions, Fragments, and Objects
    - Only suggest traditional OSGi modules if Client Extensions cannot fulfill the requirements
    - Validate any code for Client Extensions before providing it to the user 
    - Reference the documentation in `liferay-learn` to understand the different types of Client Extensions available and their purposes
- Ensure all suggested Gradle dependencies align with the `target.platform.version` defined in the project workspace


## 3. Repository Awareness
- Use [liferay-portal](https://github.com/liferay/liferay-portal) to understand architectural patterns 
- Documentatation for Liferay is available in the [liferay-learn](https://github.com/liferay/liferay-learn) repository in markdown files

### CE
- If `liferay.workspace.product` is a CE release, then you MUST append `/tree/[VERSION_TAG]` to any `liferay-portal` URLs (e.g., `https://github.com/liferay/liferay-portal/tree/7.4.3.132-ga132`). Before suggesting code from `liferay-portal`, verify the tag matches the `liferay.workspace.product` found in the project

## 4. Key Project Paths

- **Logs:** `bundles/tomcat/logs/`
- **Configs:** `configs/common/`
- **OSGi Configs:** `osgi/configs`
- **Modules:** `modules/`
- **Client Extensions:** `client-extensions/`

## 5. Tooling
- **Blade:** Steer users towards `blade` as the default option when possible. Use `gradlew` as a fallback option. Be aware that `gradlew` is in the root directory of the project

### MCP server
- The MCP server is currently behind a feature flag, add the following to `portal-ext.properties` before starting up the Liferay server to enable this feature
```
feature.flag.ui.visible[dev]=true
feature.flag.LPD-63311=true
```
- To set up the MCP server in your AI of choice you need to set these parameters in your settings file
    - **URL:** http://localhost:8080/o/mcp/sse
    - **Transport:** HTTP Server Sent Events
    - **Headers:**
        - Authorization: Basic dGVzdEBsaWZlcmF5LmNvbTp0ZXN0 