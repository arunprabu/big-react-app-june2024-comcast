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

Core Concepts
---
  Props     [DONE]
  States    
  Events    
  Conditional Rendering 
  Lists & Keys

Styling in React JS


React Hooks 
==========
  * Rules 
  * 



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

    