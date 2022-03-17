# A mobile app to support math learning

App offers courses that consists of math exercises. It uses REST API from [that repo](https://github.com/mateusz800/ExercisesSystem) for getting exercises and updating user progress.

<img width="518" alt="Untitled" src="https://user-images.githubusercontent.com/44299056/104847606-514fc400-58e1-11eb-85c9-b6adba80ff6a.png">


## Running the app
As I mentioned earlier this app uses external API. Start the API before running this app.

Download dependencies via command below.
```bash
npm install
```
Then you can run the app. You have to get Android SDK installed and physical device connected or emulator started.
```bash
npx react-native run-android
```

App was tested only on Android, but it is written in React, so running it on IOS devices should also be possible.
