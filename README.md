
# Repos App
### help you to Find user and get all repos 

### Demo


https://github.com/karimansary97/milango/assets/46077002/be9a9ca8-480d-4ed7-9388-90e0b88db6da


### Cachhing optimzation 




https://github.com/karimansary97/milango/assets/46077002/4e58144e-2587-4db0-9079-6e4e6f54d25d



## Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Clone the repo 

```bash
git clone https://github.com/karimansary97/milango.git
```

## Step 2: install dependencies 


```bash
# using yarn first step 
yarn
```

### For iOS

```bash
# step 1
npx pod-install

# step 2
yarn ios
```

### For Android
>**Note**: make sure you have jdk more than 17  and config it path in milango/android/gradle.properties and put your jdk path example org.gradle.java.home=/Library/Java/JavaVirtualMachines/jdk-17.jdk/contents/Home

```bash
# step 
yarn android
```

### folder and file structure
```
.
├── App.tsx
├── apis
│   └── EndPoints.ts
├── assets
│   ├── BackButton.svg
│   ├── Close.svg
│   ├── Search.svg
│   ├── Splash.svg
│   ├── Star.svg
│   ├── circle.svg
│   └── share.svg
├── components
│   ├── ReposList
│   │   ├── RepoCard.tsx
│   │   ├── ReposList.tsx
│   │   └── index.ts
│   ├── UIElements
│   │   ├── Button
│   │   │   ├── Button.style.ts
│   │   │   ├── Button.tsx
│   │   │   └── index.ts
│   │   ├── ErrorHappen.tsx
│   │   ├── Layout
│   │   │   ├── Header.tsx
│   │   │   ├── Layout.style.ts
│   │   │   ├── Layout.tsx
│   │   │   ├── Layout.type.ts
│   │   │   └── index.ts
│   │   ├── ListFooterLoading.tsx
│   │   ├── Loading.tsx
│   │   ├── NoDataFound.tsx
│   │   ├── SearchBar
│   │   │   ├── SearchBar.tsx
│   │   │   └── index.ts
│   │   └── Text
│   │       ├── Text.style.ts
│   │       ├── Text.tsx
│   │       ├── index.ts
│   │       └── textTypes.ts
│   └── UsersList
│       ├── ListRenderRightIcons.tsx
│       ├── UserCard.tsx
│       ├── UserList.tsx
│       └── index.ts
├── config
│   ├── appQueryClient.ts
│   └── axiosInstance.ts
├── helpers
├── hooks
│   ├── useGetInfiniteQuery.ts
│   ├── useGetQuery.ts
│   ├── useNavigation.ts
│   └── useRoute.ts
├── navigation
│   ├── MainNavigation.tsx
│   └── routes.ts
├── screens
│   ├── Home
│   │   ├── Home.tsx
│   │   └── index.ts
│   └── UserRepos
│       ├── UserRepos.tsx
│       └── index.ts
├── styles
│   ├── addShadow.ts
│   ├── colors.ts
│   ├── icons.ts
│   └── unit.ts
└── types
    ├── Users.type.ts
    └── global.d.ts
```
### Libraries used
```
 #react-navigation/native
 #react-navigation/native-stack
 #tanstack/query-async-storage-persister
 #tanstack/react-query
 #tanstack/react-query-persist-client
 #react-native-encrypted-storage
 #react-native-devsettings
 #react-native-bootsplash
 #react-native-gesture-handler
 #react-native-safe-area-context
 #react-native-screens
 #react-native-svg
```
 
