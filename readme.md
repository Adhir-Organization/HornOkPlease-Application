# Guide

First of all we need to install node_modules packages using below command in terminal.

```bash
npm i
```

Then, we need to run below command to start expo

```bash
npm start
```

## Naming Conventions

#### Folders

Folder names should in lowercase.

```
|- components
|- pages
|- routes

```

#### File Naming Convention

-   Componenets should be named with the capitalized name of the component.
-   Pages should be camelCased.
-   Routes should be camelCased.

```
|- components
    - Button.js
    - HomeScreen.js
    - LoginScreen.js

|- pages
    - driverDashboard.js
    - fleetDashboard.js
|- routes
    - appRouter.js
    - homeStack.js
```

### Folder Structure

If components have subcomponents or styling, they should be placed in a folder named after the component.

```
|- LoginScreen
    - LoginScreen.js
    - LoginScreen.scss
    - LoginScreen.data.js
    - LoginScreen.style.js
```

### Routes

Routes contains the all the routes required for the specific screen for example, the GetStarted screen has routes as homeStack which has all routes from the 'Get Started' section to the 'dashboard' section.

Create different routes files for different section.

### Extra Notes

-   Remove redundancy variables and try to make code cleaner.
-   Use the same naming convention for components, pages, and routes.
