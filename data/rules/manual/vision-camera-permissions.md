---
description: "Vision Camera Permission Handling"
globs: "**/*"
__meta__type: "guideline"
__meta__repo: "adam-paul/lifttok2"
__meta__framework: "React"
__meta__tags: ["React Native","Vision Camera","Permissions","Android","iOS"]
__meta__rate: 9
---
# Vision Camera Permission Handling

Best practices for implementing camera and microphone permissions in React Native Vision Camera.

<rule>
name: vision_camera_permissions
description: Standards for implementing camera and microphone permissions in React Native Vision Camera apps
filters:
  - type: file_extension
    pattern: "\\.(js|jsx|ts|tsx)$"
  - type: content
    pattern: "react-native-vision-camera"

actions:
  - type: suggest
    message: |
      When implementing camera/microphone permissions with react-native-vision-camera:

      1. Primary Permission Configuration:
         - Add permissions in AndroidManifest.xml:
           ```xml
           <uses-permission android:name="android.permission.CAMERA" />
           <uses-permission android:name="android.permission.RECORD_AUDIO" />
           ```
         - For iOS, add in Info.plist:
           ```xml
           <key>NSCameraUsageDescription</key>
           <string>$(PRODUCT_NAME) needs access to your Camera.</string>
           <key>NSMicrophoneUsageDescription</key>
           <string>$(PRODUCT_NAME) needs access to your Microphone.</string>
           ```

      2. React Native Code:
         - Keep permission handling minimal
         - Use hooks for both status and requests:
           ```javascript
           const { hasPermission, requestPermission } = useCameraPermission();
           const { hasPermission, requestPermission } = useMicrophonePermission();
           ```
         - Trigger permission requests only when needed:
           ```javascript
           useEffect(() => {
             if (!hasCameraPermission || !hasMicPermission) {
               requestCameraPermission();
               requestMicPermission();
             }
           }, [hasCameraPermission, hasMicPermission]);
           ```
         - Show simple message while waiting for permissions:
           ```javascript
           if (!hasPermission) return <Text>Access required</Text>;
           ```

      3. Common Pitfalls to Avoid:
         - Don't create custom permission request buttons
         - Don't add complex permission checking logic
         - Don't manually check permission status with getCameraPermissionStatus
         - Don't override native permission UI/UX

examples:
  - input: |
      // Bad: Over-engineered permission handling
      useEffect(() => {
        (async () => {
          const status = await Camera.getCameraPermissionStatus();
          if (status === 'not-determined') await requestPermission();
        })();
      }, []);

      // Good: Minimal permission handling
      useEffect(() => {
        if (!hasPermission) requestPermission();
      }, [hasPermission]);
    output: "Correctly implemented permission handling"

metadata:
  priority: high
  version: 1.0
  tags:
    - react-native
    - vision-camera
    - permissions
    - android
    - ios
</rule>