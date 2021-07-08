https://colorcrusher.herokuapp.com/

Objective: learn react, css and Firebase. I sought to create as much of the front end as possible with vanilla JS and CSS. While I plan to explore component libraries and CSS bootstrapping in the future, for the project I tried to build things from scratch.

What I learned:

1) CSS- Responsiveness to screen size should be considered early and often when planning your application. While flexbox works great at component level, using the grid method for the layout makes it much easier to prioritize what gets displayed at various screen sizes.

2) React- I didn't use Redux for this project -partly because it didn't feel warrented but also because the Context API is far more intuitive. However, I had an 'Ahhhhh' moment when building my Flash Messaging as it follows a pattern very similar to Redux: The UI triggers specific actions which cause conditional rendering. I'm eager to implement Redux in my next project now that the code looks less strange.

3) Firebase- When learning full stack development I think its best to start with a tool like Firebase which simplifies Authentication and CRUD actions. This will allow students to see the overall "forest" before focusing on specific "trees" like Express.

4) 3 different modal implementations: portal, flash messaging, dom manipulation

5) Personally-

Features:
    -SPHERICAL 3-D EFFECT: three dimensional balls were created by layering two different color gradients: one a dynamically created base color and the second a greyscale which remains constant. When the game board clears I remove the base color which causes the "ghost ball" effect.  (photo and link)
    -DELAYED RENDERING: I created a custom React hook which would delay the rendering of a component based on a varible argument. I used this hook for the color balls... causing the counter-clockwise effect as balls are cleared and then colored. (code snippet)
    -COLOR VALUE CONVERSIONS: Thanks to this helpful article (link) I found algorithms that transform RGB values into HEX and HSL values. With an HSL value in hand, simple subtraction  will give the various compliment colors on the color wheel.
    -SHIMMERING COINS:




frontend
    -Flash messaging for both front-side verification and confirmation of player actions in Message.js.
    -Modals done using context (Modal.js) and conditional rendering in Controller.js.
    -Persistent state with local storage utilizing react-storage-hooks.
    -State management using the React Context API. Context is seperated into two concerns: UserContext.js which handles the current user state and ColorContext which handles the game logic and color values.
    -As opposed to using react-routing, rendering is done conditionally based on the state in Controller.


backend
    -Authentication using the email and password method provided by Firebase.
    -In the database is stored a list of player information (names and scores) which is fetched in order to render the high score display as well as information specific to the current user.
    -Players can sing up (create), edit (update) and delete their account information via the player page.

-deployed on heroku and kept 'awake' with a Google app script.
