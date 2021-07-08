https://colorcrusher.herokuapp.com/

Objective: learn react, css and Firebase

What I learned:

1) CSS- Responsiveness to screen size should be considered early and often when planning your application. While flexbox works great at component level, using the grid method for the layout makes it much easier to prioritize what gets displayed at various screen sizes.

2) React- I didn't use Redux for this project -partly because it didn't feel warrented but also because the Context API is far more intuitive. However, I had an 'Ahhhhh' moment when building my Flash Messaging as it follows a pattern very similar to Redux: The UI triggers specific actions which cause conditional rendering. I'm eager to implement Redux in my next project now that the code looks less strange.

3) Firebase- When learning full stack development I think its best to start with a tool like Firebase which simplifies Authentication and CRUD actions. This will allow students to see the overall "forest" before focusing on specific "trees" like Express.

Features:




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
