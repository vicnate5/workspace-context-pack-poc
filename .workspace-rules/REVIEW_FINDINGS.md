# Cursor Rules Review Findings

## Review Date
2026-01-12

## Files Reviewed
1. `.ai-rules/liferay-rules.md`
2. `.ai-rules/guided-client-extension.md`
3. `.ai-rules/initial-setup-guide.md`

## Issues Found

### 1. Missing Optional Property in Template

**File:** `guided-client-extension.md`  
**Issue:** The `client-extension.yaml` template is missing `friendlyURLMapping` property  
**Evidence:** Existing `hello-world/client-extension.yaml` includes:
```yaml
friendlyURLMapping: hello-world
```
**Impact:** Template may generate incomplete configurations  
**Recommendation:** Add `friendlyURLMapping` as an optional property with explanation

### 2. Ambiguous OSGi Configs Path

**File:** `liferay-rules.md` (line 52)  
**Issue:** Path listed as `osgi/configs` without full context  
**Evidence:** Actual paths in workspace:
- `bundles/osgi/configs/` (runtime)
- `configs/[env]/osgi/configs/` (source)
**Impact:** May cause confusion about where to place configs  
**Recommendation:** Clarify both source and runtime paths

### 3. Documentation Path Verification Needed

**File:** `liferay-rules.md` (lines 31-34)  
**Issue:** Documentation paths need verification against actual liferay-learn structure  
**Paths to verify:**
- `docs/dxp/latest/en/liferay-development/client-extensions.md`
- `docs/dxp/latest/en/liferay-development/customizing-liferays-look-and-feel/using-a-custom-element-client-extension.md`
- `docs/dxp/latest/en/liferay-development/objects.md`
- `docs/dxp/latest/en/site-building/developer-guide/developing-page-fragments.md`
**Recommendation:** Verify these paths exist and are correct via web_search

### 4. Inconsistent Terminology

**File:** `guided-client-extension.md`  
**Issue:** Removed "LUFFA" term but it's still valid Liferay terminology  
**Evidence:** Web search confirms LUFFA = "Liferay Universal File Format Archive"  
**Impact:** May reduce clarity for developers familiar with Liferay terminology  
**Recommendation:** Either keep LUFFA with explanation or ensure consistent terminology

### 5. Missing Build Configuration Context

**File:** `guided-client-extension.md`  
**Issue:** No mention of `build.gradle` or Gradle configuration  
**Evidence:** Client extensions require Gradle build configuration  
**Impact:** Generated extensions may not build correctly  
**Recommendation:** Add note about Gradle auto-configuration or reference to build files

### 6. Deployment Command Accuracy

**File:** `guided-client-extension.md` (line 62)  
**Issue:** Command `blade gw :client-extensions:[name]:deploy` may not work if project name differs  
**Evidence:** Alternative command `cd client-extensions/[name] && blade gw deploy` is more reliable  
**Impact:** First command may fail  
**Recommendation:** Prefer the directory-based command or clarify project naming

### 7. Missing Version Check Consistency

**Files:** `liferay-rules.md` and `guided-client-extension.md`  
**Issue:** `guided-client-extension.md` doesn't reference version-aware rules  
**Impact:** May suggest client extensions for versions < 7.4  
**Recommendation:** Add version check reminder in pre-flight section

### 8. MCP Server Path Accuracy

**File:** `liferay-rules.md` (line 63)  
**Status:** ✅ CORRECT  
**Evidence:** `configs/local/portal-ext.properties` exists in workspace

## Consistency Check

### Cross-File Consistency

| Topic | liferay-rules.md | guided-client-extension.md | initial-setup-guide.md |
|-------|------------------|----------------------------|------------------------|
| Client Extensions path | ✅ `client-extensions/` | ✅ `client-extensions/[name]/` | N/A |
| Sample workspace URL | ✅ Included | ✅ Included | N/A |
| Documentation source | ✅ liferay-learn | ❌ Not mentioned | ✅ liferay-learn |
| Version awareness | ✅ Yes | ❌ No | N/A |
| Blade commands | ✅ `blade gw` | ✅ `blade gw deploy` | ✅ `blade server start` |

## Recommendations Summary

### High Priority
1. Add `friendlyURLMapping` to client-extension.yaml template (optional)
2. Verify documentation paths via web_search
3. Add version check to guided-client-extension.md pre-flight
4. Clarify OSGi configs paths (source vs runtime)

### Medium Priority
5. Add note about Gradle build configuration
6. Improve deployment command guidance
7. Consider keeping LUFFA term with explanation

### Low Priority
8. Add cross-references between files for better cohesion
9. Add troubleshooting section for common client extension errors

## Verification Checklist

- [ ] Verify all liferay-learn documentation paths exist
- [ ] Test client-extension.yaml template generates valid config
- [ ] Verify deployment commands work with actual workspace
- [ ] Check sample workspace structure matches references
- [ ] Verify MCP server configuration is current
- [ ] Test version-aware logic with different Liferay versions
