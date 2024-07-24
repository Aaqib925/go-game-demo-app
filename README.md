# React Native Project

This is a React Native project using various libraries for API calls, state management, animations, and form handling.

## Table of Contents
- [React Native Project](#react-native-project)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Dependencies](#dependencies)
  - [Usage](#usage)
    - [Running on iOS](#running-on-ios)
    - [Running on Android](#running-on-android)
  - [Libraries and Tools](#libraries-and-tools)
    - [react-query](#react-query)
    - [zustand](#zustand)
    - [lottie-react-native](#lottie-react-native)
    - [yup and react-hook-form](#yup-and-react-hook-form)
  - [Project Structure](#project-structure)
  - [Contributing](#contributing)
  - [License](#license)

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>= 18.x)
- npm (>= 9.x)
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
- `yup` and `react-hook-form` for form management and validations

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

The project's structure is as follows:

```
your-project/
├── src/
│   ├── api/
│   ├── components/
│   ├── hooks/
│   ├── screens/
│   ├── store/
│   ├── styles/
│   ├── utils/
│   └── App.js
├── ios/
├── android/
├── assets/
├── node_modules/
├── .gitignore
├── babel.config.js
├── index.js
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please follow the [code of conduct](CODE_OF_CONDUCT.md) and submit pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to replace the repository URL, project structure, and other details as per your specific project setup.