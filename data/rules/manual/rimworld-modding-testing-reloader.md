---
description: "Rimworld Modding Testing Reloader - Knowledge Base"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "alxraun/rimworld-modding-wiki"
__meta__tags: ["RimWorld","Modding","Development","C#","Hot Reloading"]
__meta__rate: 9
---
## RimWorld Reloader

### What is Reloader?

- Mod add-on for **RimWorld** for hot code reloading during development.
- Allows patching code while the game is running.
- Speeds up development by avoiding game restarts.

### How to use

1. **Add `0Reloader.dll` to your mod's `Assemblies` folder.**
   - Place `0Reloader.dll` in the same `Assemblies` folder as your mod's DLL.
2. **Reference `Reloader.dll` in your mod project.**
   - Add a reference to `Reloader.dll` in your C# project.
   - Only needed for the `[ReloadMethod]` attribute, not for runtime functionality.
3. **Annotate methods for reloading with `[ReloadMethod]` attribute.**
   ```csharp
   [ReloadMethod]
   public void YourMethod() {
       // ... your code ...
   }
   ```
4. **Build your mod.**
   - Build your mod project directly into the `Mods` directory.
5. **Reloader automatically detects changes and patches methods.**
   - When you rebuild your mod DLL, Reloader detects the change (timestamp and version).
   - It reloads the DLL and patches methods marked with `[ReloadMethod]`.
   - Changes are applied immediately in the running game.

### Important notes

- **DLL Version Increment:**
    - .NET does not load DLLs with the same version number.
    - Increment your mod's DLL version on each build to ensure reloading.
    - Use a Visual Studio extension or script to automate version incrementing (see README for link).
- **No AppDomain Unloading:**
    - Reloader does not unload old DLL versions.
    - Each reload loads a new DLL into memory.
    - Repeated reloads increase memory usage.
- **Generic Methods:**
    - Reloader cannot reload generic method definitions.
    - Avoid using `[ReloadMethod]` on generic methods.
- **Exclude from final mod:**
    - **Do NOT ship your final mod with `0Reloader.dll` or the `Reloader.dll` reference.**
    - Remove `0Reloader.dll` and the `Reloader.dll` reference before releasing your mod.
- **File System Watcher:**
    - Reloader uses `FileSystemWatcher` to monitor DLL changes in the `Assemblies` folder.
    - Watches for file creation, last write, filename, and directory name changes.
- **Method Patching:**
    - Reloader uses `Memory.WriteJump` to detour original methods to new method implementations.
    - Uses low-level memory manipulation to replace method entry points.
- **Excluded DLLs:**
    - Reloader ignores changes in `0Harmony.dll` and `0Reloader.dll`.