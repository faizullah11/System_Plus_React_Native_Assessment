# SystemPlus React Native Assessment

A repository to test and evaluate React Native candidates for SSE position.

## Introduction :

**This branch has React Native related tasks. There is an app folder and it has a React Native project already initialised for you. Navigate to app/src and it has two folders design and data. Design folder has design related tasks and data has api related tasks. Details are in the Readme.md files in these folders as well.
Remains the intellectual property of System Plus Pvt. Limited.**

You are supposed to create 3-4 screens in React-Native:

* Design Translation (Accuracy in design implementation is important !!)
    * Calendar Screen
   (Design provided to you through a link or design file developed in Figma, Adobe XD, or Zeplin etc.) 
    * Simple Profile Screen.
   (Design provided to you through a link or design file developed in Figma, Adobe XD, or Zeplin etc.)
* API or Data Related Screens
    * Universities Screen 
    (Open-end design, API related tasks are mentioned below)
    * University Details Screen
    (open-end design, API related tasks are mentioned below)

## Brief:

#### Design Tasks Brief:

1. For this task please navigate to folder app/src/design/ and you will be implementing the design provided to you, all by yourself without using any third party library except for native-base, and react-native-paper.
2. There will be design files created in tools like Adobe XD, Figma or Zeplin etc. Or you will be provided with design links created in the tools mentioned.
3. You will have to implement these design as accurately as possible in pure React Native without using any third party libraries except for native-base and react-native-paper.
4. Other design related tasks are open-ended and you can take whatever approach you want to design the rest.
5. You are required to design a total of 3-4 screens. Design of 1-2 screen is provided to you and rest of the screens are related to API related tasks mentioned below and are open-ended.
6. Feel free to contact us in case of any confusions.

#### Data & API Tasks Brief:

1. Navigate to app/ folder and you are provided with React Native application code. For React Native development you will be working in this directory.
2. In mobile application you are supposed to utilize the api devloped in the previous tasks to implement login, sign up and authentication flow. Make good use of AsyncStorage and store signup records at the backend. If I close the app and open it again user must be authenticated if he/she has logged in already.
3. You are allowed to use navigation library of your choice. React-Navigation and React-Native-Navigation are the preferred navigation libraries.
4. There will be a login screen and a sigup screen. These routes will be open. Anyone can access these routes.
5. User will be navigated to a Dashboard screen once he/she logs in or signs up. A dashboard will load the universities data (first 50 for example) at the start and these entries must be shown in the form of a card. Feel free to use any styling library like react-native-paper or native-base etc.
6. When the list list reaches the end it must give an option to load more universities into the list. And get universities must support it.(Pagination)
7. There will be a search bar in the header on Dashboard and it must produce search results as we type in it and loads only search results and it must show all the previously loaded universities if we erase all the search input in the search bar. (Make good use of map,filter,reduce)
8. Each card will be clickable and take us to the University details page that will have the option to edit and delete it. Make sure you alert the user before deleting.
9. You are going to create an Add University form screen. You will be using the same form to edit the university data. Make good use of navigation params.
10. All the state management will be done using Redux or Context API.

## Instructions:

1. In this Assessment you are free to choose the type of React Programming. Although we recommend you use a mix of both Class and functional components.

2. You are not allowed to push code to this repository. Therefore you are
   required to create a copy of this repository on your own account and work on it.
   Hint: Make good use of git clone, git fork, git plugins for vs code etc.

   https://docs.github.com/en/get-started/quickstart/fork-a-repo

   https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository

3. You are supposed to submit a compilable and runnable code of the solution.

4. Solution in txt files will not be accepted.

5. For this Assessment we are supposing that you have a react-native environment setup and node environment to run the server.

6. You will be implementing a mobile app solution along with its backend. Mobile app will be implemented using React Native and a Node.js powered Express backend will be used for APIs. Refer to this link for more information.
   https://reactnative.dev/docs/environment-setup

7. Mobile app styling is up to you but React Native styling Knowledge and good design will be given more weightage while evaluation. Feel free to use design you have previously worked on.

8. After you are done implementing a task, please add comments in the code file
   for clear understanding and add a Readme.md file if necessary.

9. This will be an open ended programming exercise. Problem descriptions are
   provided and you are supposed to implement a solution.

10. In case of confusions, please contact us at our email.
