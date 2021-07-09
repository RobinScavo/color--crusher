https://colorcrusher.herokuapp.com/

Objective:

The purpose of 'Color Crusher' was to futher my understanding of React, Javascript and CSS by building something that hasn't been done before. Given the uniqueness (i.e. wierdness) of my app, I couldn't just copy and paste code... I was forced to understand concepts fully and adjust them to my specific needs. While I plan to explore component libraries and CSS bootstrapping in the future, for this project I sought to build as much as possible with vanilla JS and CSS.

Color Crusher consists of two primary features:
    1) Convert Mode- a tool which developers can use to convert color values and find color complements.
    2) Battle Mode- a game where players can practice reading RGB values.

Creating Convert Mode gave me lots of practice building various React components like buttons and toggle switches, as well as checking player inputs for specific requirements. The primary objective of Battle Mode was to practice some of the essentials of a website: user authentication and CRUD interactions with a database. Although I designed a game, I believe its one that required skills which will translate well to web development.

Technologies:
  Color Crusher is a full stack application relying heavily on the core React library. State management is achieved using the React Context API (two different contexts handle most everything: user context and color context). Instead of using react-router, rendering is done conditionally allowing the background to remain constant while the player 'navigates' through the various modals. One of the few React libraries used is react-storage-hooks which easily adds persistent state via local storage. Styling was painstaking done by hand using CSS modules.

  On the backend I used a Firebase database to store players, emails and scores and this information is fetched whenever the high scores are displayed. User authentication was done with the 'email and password' option for Firebase. The website is deployed on Heroku and kept 'awake' with a simple Google app script.

Features:
    -SPHERICAL 3-D EFFECT: three dimensional balls were created by layering two different color gradients: one a dynamically created base color and the second a greyscale which remains constant. When the game board clears I remove the base color which causes the "ghost ball" effect.  (photo and link)

    -DELAYED RENDERING: I created a custom React hook which would delay the rendering of a component based on a varible argument. I used this hook for the color balls... causing the counter-clockwise effect as balls are cleared and then colored. (code snippet)

    -COLOR VALUE CONVERSIONS: Thanks to this helpful article (link) I found algorithms that transform RGB values into HEX and HSL values. With an HSL value in hand, simple subtraction  will give the various compliment colors on the color wheel.

    -SHIMMERING COINS: The shifting silver effect on the coins and bowls was created with the help of this article (link). Basically I used the image of silver foil, made it much bigger than the circle displaying it, hid the overflow and then started moving the circle around. (this is how it appears but -in reality- I'm moving the background image).

    -ANIMATIONS: The timer in the upper left will flip and fall into the bowl below it whenever a player correctly guesses a color. The 'crypto coins' in the upper right will do the same, in addition to rolling off screen when the player chooses unwisely. These animations were accomplished by adding and removing class names in React and @keyframes in the CSS files.

What I learned:

1) CSS- Responsiveness to screen size should be considered early and often when planning your application. While flexbox works great at component level, using the grid method for the layout makes it much easier to prioritize what gets displayed at various screen sizes.

2) React- Completing this project really drove home the importance of seperating concerns in state management. In Cotroller.js, I essentially created a 'brain' which does most of the thinking for the application. In essence, its a big switch board that sends out the ability to toggle those switches to other components and its the only component which is a class instead of a function (I left it thusly as I personally find it more readable that way, given the complexity). As you'll read below, this centralization lead to unecessary rerendering and its something that I need to correct.

I also realized the importance of removing state from the components which get rendered for the sake of reusability and testing. I found it much better to handle state in a parent component and then prop-thread needed information and functions down to the 'minions'.

3) Firebase- When learning full stack development I think its best to start with a tool like Firebase which simplifies Authentication and CRUD actions. This will allow students to see the overall "forest" before focusing on specific "trees" like Express.

4) Modals- I experimented with 3 different ways to implement modals: ReactDOM.createPortal (which renders children in DOM node existing outside the DOM hieracrchy), flash messaging (which uses a similar pattern to Redux), and directly manipulating the DOM with conditional rendering. I prefer the first method.

5) Personally- This project confirmed my suspicions that my interests and talents lie in front-end development. While I now have enough understanding of the back-end to build a simple one (or collaborate and communicate with people who are building a complex one)... I still consider back-end minded people to be wizards.

To Do:
    - As you read above, the unneccessary rerendering of components is unacceptable and I plan to refactor into a component map like the one below. The creation and rendering of color balls is a concern that needs to be BELOW the overall game and navigation logic. I also need to futher remove state from any component which is being rendered and pass this responsiblity to parent components. The only two components being rendered which need an internal state are the 'scoreTimer.js' (which internally counts down) and the 'leftConvertPanel' (which does input verification).
