# React Native Project

This is a React Native project using various libraries for API calls, state management, animations, and form handling.

## Table of Contents
- [React Native Project](#react-native-project)
  - [Disclaimer](#disclaimer)
  - [Using Expo for Web](#using-expo-for-web)
    - [Why React Native Doesn't Support Web Directly](#why-react-native-doesnt-support-web-directly)
    - [Drawbacks of Using Expo for Web](#drawbacks-of-using-expo-for-web)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Dependencies](#dependencies)
  - [Usage](#usage)
    - [Running on iOS](#running-on-ios)
    - [Running on Android](#running-on-android)
    - [Running on Web with Expo](#running-on-web-with-expo)
  - [Libraries and Tools](#libraries-and-tools)
    - [react-query](#react-query)
    - [zustand](#zustand)
    - [lottie-react-native](#lottie-react-native)
    - [yup and react-hook-form](#yup-and-react-hook-form)
  - [Project Structure](#project-structure)
  - [Contributing](#contributing)
  - [License](#license)

## Disclaimer

This project supports running on Android, iOS, and the web using Expo. However, it's important to note that React Native does not natively support web platforms, and using Expo for web may come with certain limitations and performance trade-offs.

## Using Expo for Web

To build and run the app for the web using Expo:

1. Install Expo CLI if you haven't already:

   ```sh
   npm install -g expo-cli
   ```

2. Initialize the Expo project:

   ```sh
   expo init go-game-demo-app
   ```

3. Copy your existing project files into the newly created Expo project.

4. Install the necessary dependencies for Expo:

   ```sh
   npm install react-native-web @expo/webpack-config
   ```

5. Add the following to your `package.json` to configure Expo for web:

   ```json
   "scripts": {
     "web": "expo start --web"
   }
   ```

6. Start the web server:

   ```sh
   npm run web
   ```

### Why React Native Doesn't Support Web Directly

React Native was designed primarily for mobile platforms (iOS and Android), which have different APIs and UI paradigms compared to web platforms. Directly supporting the web would require significant changes to the core architecture of React Native to accommodate web-specific features and behaviors.

### Drawbacks of Using Expo for Web

While Expo simplifies the process of running React Native projects on the web, it comes with certain drawbacks:

1. **Performance**: Web performance may not be as optimized as native performance, especially for complex animations and interactions.
2. **Feature Limitations**: Some native features may not be fully supported on the web, leading to inconsistencies in functionality across platforms.
3. **Package Compatibility**: Not all React Native packages are compatible with web, requiring additional modifications or replacements.
4. **Build Size**: The build size for web applications might be larger due to the inclusion of mobile-specific code and libraries.

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm (>= 6.x)
- Watchman
- Xcode (for iOS development)
- Android Studio (for Android development)

## Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/Aaqib925/go-game-demo-app.git
cd go-game-demo-app
npm install
```

Install pods for iOS:

```sh
npx pod-install ios
```

## Dependencies

This project uses the following libraries:

- `react-query` for API calls
- `zustand` for state management
- `lottie-react-native` for animations
- `yup` and `react-hook-form` for form management and validation

## Usage

### Running on iOS

Make sure you have Xcode installed and configured:

```sh
npx react-native run-ios
```

### Running on Android

Make sure you have an Android emulator running or a physical device connected:

```sh
npx react-native run-android
```

### Running on Web with Expo

To build and run the app for the web using Expo:

1. Install Expo CLI if you haven't already:

   ```sh
   npm install -g expo-cli
   ```

2. Initialize the Expo project:

   ```sh
   expo init go-game-demo-app
   ```

3. Copy your existing project files into the newly created Expo project.

4. Install the necessary dependencies for Expo:

   ```sh
   npm install react-native-web @expo/webpack-config
   ```

5. Add the following to your `package.json` to configure Expo for web:

   ```json
   "scripts": {
     "web": "expo start --web"
   }
   ```

6. Start the web server:

   ```sh
   npm run web
   ```

## Libraries and Tools

### react-query

[react-query](https://react-query.tanstack.com/) is used for managing server state and API calls. It provides powerful tools for data fetching, caching, and synchronization.

### zustand

[zustand](https://github.com/pmndrs/zustand) is a small, fast, and scalable state management library. It allows you to manage application state using hooks.

### lottie-react-native

[lottie-react-native](https://github.com/lottie-react-native/lottie-react-native) is used for adding beautiful animations to your app. It supports Adobe After Effects animations exported as JSON with Bodymovin.

### yup and react-hook-form

[yup](https://github.com/jquense/yup) is a JavaScript schema builder for value parsing and validation. 

[react-hook-form](https://react-hook-form.com/) is a performant, flexible, and extensible forms library for React and React Native.

## Project Structure

```
go-game-demo-app/
├── src/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── hooks/
│   ├── navigation/
│   ├── providers/
│   ├── service/
│   ├── store/
│   ├── utils/
│   ├── views/
│   └── App.tsx
├── ios/
├── android/
├── node_modules/
├── .buckconfig
├── .eslintrc.js
├── .gitignore
├── .node-version
├── .prettierrc.js
├── .ruby-version
├── .watchmanconfig
├── app.json
└── README.md
```

## Contributing

Contributions are welcome! Please follow the [code of conduct](CODE_OF_CONDUCT.md) and submit pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to replace the repository URL, project structure, and other details as per your specific project setup.