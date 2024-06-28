## NodeJS Ecosystem
----
  1. dependencies / project dependencies 
      * some npm packages are needed for the app's functionality to work in browser 

      npm i dropzone (or)
      npm i dropzone --save (or)
      npm i dropzone -S 

  2. devDependencies 
      * some npm packages that are needed for the app to be developed 

      npm i typescript --save-dev    (or)
      npm i typescript -D



## Webapps 
-----
  Types  
    1. Server Side Rendering Apps (SSR) 
        * Pages will Refresh 
        * Traditional Webapps 

    2. Client Side Rendering Apps (CSR) = Single Page App (SPA) + REST API 
        * Pages will NOT Refresh 
        * Modern Webapps 

        2.1 Single Page App [TO LEARN]
            HTML + CSS + JS 
            1 Server 

        2.2 Rest API [NOT TO LEARN]
            Java / DotNet / PHP / Python / Ruby / NodeJS / PErl 
            1 Server 

  ---------

## Single Page App Characteristics 
---------------
  1. Pages should NOT Refresh 
  2. URL should change 
  3. Browser History should be maintained w/o page refresh 
  4. Header and Footer should not be loaded again and again 
  5. Section in between Header and Footer should be contextually updated
  6. Active Menu should be set [TODO]
  7. Page Title should be changed

  Frameworks / Libraries
  ------
    #1. React JS    - Library + many tools 
    #2. VueJS       - Framework
    #3. Angular     - Framework 
    #4. Svelte      - ? 

===============

## 2 Ways to create React App
----
  1. Using Webpack (old fashioned)
      1.1 with JS 
      1.2 with TS 
  2. Using Vite (modern)
      1.1 with JS 
      1.2 with TS (RECOMMENDED)

========

npm create vite@latest
  enter the name of the project 
  select react 
  select typescript 

=======


## Components 
-------
  2 Types of Components 
  ---------------------
    1. Functional Components 
        1.1. Functional Component with Named Function
        1.2. Functional Component with Anonymous Function
        1.3. Functional Component with Arrow Function [RECOMMENDED]

    2. Class Components [NOT RECOMMENDED]

====


Thinking in React 
---
  1. Identify the number of components  
  2. Understand the component hierarchy 
  

## JSX Limitations 
----
  1. Must have closing tag 
  2. class attribute should become className

======


Naming Conventions & Casing 
----
  Casing Types 
  --------
    1. PascalCase 
        * Recommended for Interface in TypeScript 
        * Recommended for React Components and the folder of Components

        examples 
        ---
          class CarDetails {

          }

          interface Employee {

          }

    2. camelCase 
        * Recommended for variables, const, functions, methods in JS & TS 
        * Recommended for id's of html elements 
        * Recommended for variables, const, fn, methods, event handlers of React Component
        
        examples 
        -----
          var myCar = 'BMW';
          var isLoggedIn = true;

          function getCarInfo() {
            //....
          }
    
    3. kebab-case
        * Recommended for URLs 
        * Recommended for file names, folder names, assets in front end projects  
        * Recommended for css classes 

        examples 
        -----
          btn-primary
          slideshow-container 
          youtube-logo.png 

    4. snake_case 
        * never ever use this. 
        * okay for const in JS & TS if architect accepts

        examples
        ---
          const MAX_STUDENTS_PER_CLASS = 30;

----------------

Sharing Data Between Components (a.k.a) Cross Component Communication
-----
  1. Parent to Child Component Communication [DONE]
      using Props 

  2. Child to Parent Component Communication [TODO]
      using Props and Events

  3. Any to Any Component Communication
      3.1 Using Context API in React JS (or) [TO LEARN]
      3.2 Using Redux-Toolkit (or)
      3.3 Using Zustand (or) recoil, mobx, etc,..


Routing
=========
  Step 0: 
    npm i react-router-dom

  Step 1: Identify the URLs for the Menus in your app 
    Home                    /
    Netflix                 /netflix
    User Manager App        /user-manager
    Products                /products
    Todos                   /todos
    About Us                /about-us
    Contact                 /contact

  Step 2: 
    Let's setup these urls in the Menus in MenuList

  Step 3: 
    Let's now create necessary components for the urls 
      Url: /                        Component: HomePage         [DONE]
      Url: /netflix                 Component: NetflixPage      [DONE]
      Url: /user-manager            Component: UserManagerPage  [DONE]
      Url: /products                Component: ProductsPage
      Url: /todos                   Component: TodosPage
      Url: /about-us                Component: AboutUsPage      [DONE]
      Url: /contact                 Component: ContactPage


  Step 4:
    Let's configure routing to associate the urls with the components

  Step 5:
    Check the app. Pages will refresh. Let's fix it. 

    Replace <a href="/"> with <Link to="/">

    Routing is over!

==========


Project Structure 
====
  src/
    components/
      Header.tsx
      Footer.tsx
      Menu.tsx
    pages/
      HomePage.tsx
      NetflixPage.tsx

    

Core Concepts
---
  Props     [DONE]
  States    [DONE]
  Events    [DONE]
  Conditional Rendering [DONE]
  Lists & Keys [DONE]

Hooks
  Rules of Hooks [DONE]
  useState [DONE]
  useEffect [DONE]
  useReducer
  useRef 
  useContext [DONE]

  Custom Hook 

Styles
  1. External Styles [DONE]
  2. Internal Styles [DONE]
  3. Inline Styles [DONE]


CR(UD) App 
=====

CRUD 
====
  User Management 
    Create User                         - Http Method: POST 
      localhost:5173/user-manager/add

    List Users                          - Http Method: GET 
      localhost:5173/user-manager/
    
    View User Details                   - Http Method: GET 
      localhost:5173/user-manager/30

    Update User Details                 - Http Method: PUT / PATCH 
      localhost:5173/user-manager/30/edit

    Delete User                         - Http Method: DELETE
      localhost:5173/user-manager/30/
  
  

Forms in React 
==============
  1. Using just react (NOT RECOMMENDED)
  2. Using Formik (OK)
  3. USing React-hook-form (RECOMMENDED) [DONE]

URLs
---
  URL Param [DONE]
  Query Param [TODO]

======


Products
=====
  Any to Any Component Communication 
  useContext 
  =========

  Context API 
  =======
    Let's share the data across components 

    step 1: create context 
    Step 2: Identify the components that need to share and access the data (ProductsPage, Header)
    Step 3: Provide data thru the context  to the list of components 
    Step 4: Consume the data in the identified components (Header)


Todo App 
----
  useReducer [DONE]
  useRef [DONE]


Custom Hook 
===========

2 Ways to collect form data from react
---
  1. Controlled component approach (using useState) [DONE]
      Instead of this try react-hook-form 
  2. Uncontrolled component (using useRef ) [DONE]

=========


Authentication
=====
  2 Primary Types
  =----
    1. Session Based (old fashioned)
        * post login,
          * session id generated on the backend side and maintained in server side
          * session id will be sent to the front end in cookies
          * front end will automatically save the session id in cookies 
          * back end will verify the session id in every http request

    2. Token Based (modern)
        * post login,
          * JWT (Token) is generated on the backend side 
          * JWT will be sent to the front end. 
          * front end can save the JWT in cookies  / local storage / session storage
          * back end will verify the JWT id in every http request

    3. oauth 2
    4. OTP Based authentication
    5. magic link 
    6. Touch Id



===========

ReactJS - Performace Tips
--
1. Use NPM package or any third party libraries only if absolutely needed.
2. Most performance issues come in lists. So, think about having pagination.
  Try this awesome package
  https://bvaughn.github.io/react-virtualized/
3. Make use of props wisely. Don't leave out unused props. 
 
  So, a bad way could be...
  const MyComp = (props) => { //bad way if all props are not used

  }

  but a better way to have props is here.. using object destructuring.
  cont MyComp = ({ title, body, postId}){ // ignoring userId, if I don't display it anywhere

  }
  Also,don't pass unneccessary props. 

4. Lazy Load Images 
  https://www.npmjs.com/package/react-lazy-load-image-component
5. Use profiler to record the app pages. And then check and fix the app. 
6. Think about optimizing back end also. 
7. Avoid having unnecessary tags, css. go with Fragment, <></>, 
8. Don't bloat the page with too many components, 
  because will have lifecycle hooks and will have re-rendering cycles.
  If one parent comp updates, that will update child comp's till the last level.
9. Use only functional components. 
  Use hooks to stop child comp re-rendering. Remember useEffect, useCallback, useMemo
10. Don't write too many inline styles. You should definitely avoid it inside loops.
11. Don't write inline callbacks in loops. 
    // bad 
    <button onClick={() => deleteRecord()} >Delete</button> 
    // good 
    const deleteRecord = () =>{

    }
    <button onClick={deleteRecord} >Delete</button> 

12. Learn more performance tips.. There are aplenty.

===
Debugging in Production
---
https://medium.com/@baphemot/intro-to-debugging-reactjs-applications-67cf7a50b3dd

  






