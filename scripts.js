// ==================== FIREBASE CONFIGURATION ====================

// Your Complete Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP_fCdJA97dCGhofYnz0NlrCrD6jipljY",
  authDomain: "cbt-exam-7f4e6.firebaseapp.com",
  databaseURL: "https://cbt-exam-7f4e6-default-rtdb.firebaseio.com",
  projectId: "cbt-exam-7f4e6",
  storageBucket: "cbt-exam-7f4e6.firebasestorage.app",
  messagingSenderId: "765099824374",
  appId: "1:765099824374:web:02a3d3da2df48dc30e48d7",
  measurementId: "G-P2VLSP13B6"
};

// Firebase variables
let app;
let database;
let realTimeEnabled = false;

// Initialize Firebase
try {
    app = firebase.initializeApp(firebaseConfig);
    database = firebase.database();
    console.log('Firebase initialized successfully');
    console.log('Database URL:', firebaseConfig.databaseURL);
    realTimeEnabled = true;
} catch (error) {
    console.error('Firebase initialization error:', error);
    realTimeEnabled = false;
}

// ==================== QUESTIONS DATABASE ====================

// Questions Database
const questionsDatabase = {
    "JSS1": [
        { question: "What is Scratch primarily used for?", options: ["Creating games and animations", "Writing documents", "Browsing the internet", "Sending emails"], correct: 0 },
        { question: "Which programming language does Scratch use?", options: ["Python", "Block-based visual programming", "Java", "C++"], correct: 1 },
        { question: "What is a sprite in Scratch?", options: ["A background image", "A character or object that can be programmed", "A sound effect", "A type of block"], correct: 1 },
        { question: "Which block category controls sprite movement in Scratch?", options: ["Looks", "Motion", "Sound", "Events"], correct: 1 },
        { question: "What does the green flag do in Scratch?", options: ["Stops the program", "Starts the program", "Saves the project", "Deletes the sprite"], correct: 1 },
        { question: "Which block would you use to make a sprite say something?", options: ["Say block", "Tell block", "Speak block", "Talk block"], correct: 0 },
        { question: "What is the stage in Scratch?", options: ["A sprite", "The background area where sprites perform", "A type of block", "A sound"], correct: 1 },
        { question: "How do you make a sprite face a different direction?", options: ["Use the Motion blocks", "Use the Sound blocks", "Use the Pen blocks", "Delete and recreate it"], correct: 0 },
        { question: "What is a costume in Scratch?", options: ["A different appearance for a sprite", "A type of sound", "A background", "A variable"], correct: 0 },
        { question: "Which block category would you use to play music?", options: ["Motion", "Looks", "Sound", "Events"], correct: 2 },
        { question: "What does the 'wait' block do?", options: ["Stops the program permanently", "Pauses the script for a specified time", "Speeds up the sprite", "Deletes the sprite"], correct: 1 },
        { question: "How do you add a new sprite to your project?", options: ["Press the green flag", "Click the 'Choose a Sprite' button", "Press delete", "Right-click the stage"], correct: 1 },
        { question: "What color are the Motion blocks in Scratch?", options: ["Purple", "Blue", "Green", "Orange"], correct: 1 },
        { question: "Which block makes a sprite invisible?", options: ["Show", "Hide", "Disappear", "Remove"], correct: 1 },
        { question: "What is the purpose of the Events category?", options: ["To move sprites", "To start scripts when something happens", "To change colors", "To save projects"], correct: 1 },
        { question: "How do you stop all scripts in Scratch?", options: ["Green flag", "Red stop sign", "Yellow pause button", "Blue play button"], correct: 1 },
        { question: "Which block would you use to point a sprite towards the mouse?", options: ["Point in direction", "Point towards", "Go to mouse", "Follow mouse"], correct: 1 },
        { question: "What does the 'glide' block do?", options: ["Makes sprite jump", "Moves sprite smoothly to a position", "Rotates sprite", "Changes sprite color"], correct: 1 },
        { question: "How many sprites can you have in a Scratch project?", options: ["Only 1", "Up to 10", "Up to 100", "Unlimited"], correct: 3 },
        { question: "What is a backdrop in Scratch?", options: ["A sprite costume", "A background image for the stage", "A type of sound", "A programming block"], correct: 1 },
        { question: "Which block changes a sprite's size?", options: ["Change size by", "Set size to", "Grow by", "Make bigger"], correct: 0 },
        { question: "What does the 'next costume' block do?", options: ["Deletes the costume", "Changes to the next costume in the list", "Creates a new costume", "Copies the costume"], correct: 1 },
        { question: "Where do you find the blocks to program your sprite?", options: ["The stage", "The blocks palette", "The sprite list", "The menu bar"], correct: 1 },
        { question: "What color are the Looks blocks in Scratch?", options: ["Blue", "Purple", "Green", "Orange"], correct: 1 },
        { question: "Which block makes a sprite spin?", options: ["Turn clockwise", "Spin around", "Rotate", "Turn degrees"], correct: 3 },
        { question: "How do you save your Scratch project?", options: ["Press the green flag", "Click File > Save", "It saves automatically", "Both B and C"], correct: 3 },
        { question: "What does the 'go to x: y:' block do?", options: ["Deletes the sprite", "Moves sprite to a specific position", "Changes sprite color", "Plays a sound"], correct: 1 },
        { question: "Which block makes a sprite appear in front of others?", options: ["Go to front layer", "Move to front", "Go to front", "Both A and B"], correct: 0 },
        { question: "What happens when you click on a sprite?", options: ["It deletes", "Scripts with 'when this sprite clicked' run", "Nothing", "It duplicates"], correct: 1 },
        { question: "Which key combination opens a new Scratch project?", options: ["Ctrl + N", "Ctrl + S", "Ctrl + O", "Ctrl + P"], correct: 0 }
    ],
    "JSS2": [
        { question: "What does the 'repeat' block do?", options: ["Runs code once", "Runs code multiple times", "Stops the program", "Deletes code"], correct: 1 },
        { question: "Which block would you use to create a forever loop?", options: ["Repeat", "Forever", "Loop", "While"], correct: 1 },
        { question: "What is a variable in Scratch?", options: ["A sprite", "A storage space for data", "A sound", "A backdrop"], correct: 1 },
        { question: "Where do you create variables in Scratch?", options: ["Motion category", "Data category", "Events category", "Control category"], correct: 1 },
        { question: "What does the 'if-then' block do?", options: ["Repeats code", "Checks a condition and runs code if true", "Stops all scripts", "Creates a variable"], correct: 1 },
        { question: "What color are the Control blocks?", options: ["Blue", "Purple", "Yellow", "Orange"], correct: 2 },
        { question: "What does the 'broadcast' block do?", options: ["Plays a sound loudly", "Sends a message to all sprites", "Deletes sprites", "Changes backdrops"], correct: 1 },
        { question: "Which block detects if a sprite is touching another sprite?", options: ["Touching?", "Near?", "Collision?", "Hit?"], correct: 0 },
        { question: "What is the purpose of the 'wait until' block?", options: ["Waits a fixed time", "Waits until a condition is true", "Stops forever", "Deletes the sprite"], correct: 1 },
        { question: "How do you make a sprite respond to keyboard input?", options: ["Use 'when key pressed' block", "Use 'if key pressed' block", "Use 'key sensing' block", "Both A and B"], correct: 3 },
        { question: "What does the 'ask and wait' block do?", options: ["Makes sprite speak", "Gets input from the user", "Waits randomly", "Broadcasts a message"], correct: 1 },
        { question: "Where is the user's answer stored after using 'ask and wait'?", options: ["In a variable", "In the 'answer' block", "In the stage", "It's not stored"], correct: 1 },
        { question: "What does 'if-then-else' block do differently than 'if-then'?", options: ["Nothing different", "Runs different code when condition is false", "Repeats forever", "Stops the program"], correct: 1 },
        { question: "Which operator checks if two values are equal?", options: ["=", "==", "equals", "The = block in Operators"], correct: 3 },
        { question: "What color are the Sensing blocks?", options: ["Light blue", "Dark blue", "Green", "Purple"], correct: 0 },
        { question: "How can you make a sprite follow your mouse pointer?", options: ["Use 'go to mouse-pointer' in a forever loop", "Use 'follow mouse' block", "It's automatic", "Use 'when mouse moves'"], correct: 0 },
        { question: "What does the 'change x by' block do?", options: ["Changes sprite color", "Moves sprite horizontally", "Changes sprite size", "Rotates sprite"], correct: 1 },
        { question: "Which block would you use to create a random number?", options: ["Random block", "Pick random", "Choose number", "Get random"], correct: 1 },
        { question: "What does the 'set x to' block do?", options: ["Changes sprite size", "Sets horizontal position", "Sets sprite color", "Deletes sprite"], correct: 1 },
        { question: "How do you create a countdown timer in Scratch?", options: ["Use a variable and decrease it in a loop", "Use the timer block", "Use the clock block", "It's built-in"], correct: 0 },
        { question: "What does the 'when I receive' block do?", options: ["Receives keyboard input", "Listens for broadcast messages", "Receives mouse clicks", "Receives sprite touches"], correct: 1 },
        { question: "Which block allows you to add two numbers?", options: ["Plus block", "Add block", "The + block in Operators", "Sum block"], correct: 2 },
        { question: "What does 'repeat until' do?", options: ["Repeats a fixed number of times", "Repeats until a condition becomes true", "Never repeats", "Repeats forever"], correct: 1 },
        { question: "How can you make a sprite bounce off the edge?", options: ["Use 'if on edge, bounce' block", "Use 'bounce' block", "Use 'turn around' block", "It's automatic"], correct: 0 },
        { question: "What does the 'touching color' block check?", options: ["Sprite's color", "If sprite touches a specific color", "Stage background color", "Color of another sprite"], correct: 1 },
        { question: "Which block makes sprites interact with each other?", options: ["Connect block", "Broadcast and receive blocks", "Link block", "Join block"], correct: 1 },
        { question: "What is the purpose of the 'stop' block?", options: ["Stops sprite movement", "Stops specific scripts or all scripts", "Stops sound", "Stops the project"], correct: 1 },
        { question: "How do you check if a key is being pressed continuously?", options: ["Use 'when key pressed'", "Use 'key pressed?' in an if block", "Use 'key down' block", "Use 'listening key' block"], correct: 1 },
        { question: "What does the 'loudness' sensing block detect?", options: ["Volume of sounds in project", "Microphone input volume", "Speaker volume", "Music loudness"], correct: 1 },
        { question: "How can you create a score system in a game?", options: ["Use a 'score' sprite", "Create a variable called 'score' and change it", "Use the score block", "Use a list"], correct: 1 }
    ],
    "JSS3": [
        { question: "What is cloning in Scratch?", options: ["Copying a project", "Creating temporary copies of a sprite", "Duplicating backgrounds", "Copying blocks"], correct: 1 },
        { question: "Which block creates a clone of a sprite?", options: ["Create clone", "Make clone", "Clone myself", "Create clone of myself"], correct: 3 },
        { question: "What happens to clones when the project stops?", options: ["They remain", "They are automatically deleted", "They turn invisible", "They become permanent"], correct: 1 },
        { question: "What is a list in Scratch?", options: ["A type of sprite", "A collection of items stored in order", "A broadcast message", "A costume list"], correct: 1 },
        { question: "Which category contains list blocks?", options: ["Control", "Data", "Variables", "Operators"], correct: 1 },
        { question: "What does the 'join' operator block do?", options: ["Connects sprites", "Combines two text strings", "Adds numbers", "Joins lists"], correct: 1 },
        { question: "How do you delete a clone?", options: ["Use 'delete clone' block", "Use 'delete this clone' block", "Use 'remove clone' block", "Clones delete automatically"], correct: 1 },
        { question: "What is the purpose of custom blocks (My Blocks)?", options: ["To create reusable code", "To make new sprites", "To add new categories", "To import blocks"], correct: 0 },
        { question: "Which block would you use to detect the distance to another sprite?", options: ["Distance to", "Space between", "Gap to", "Range to"], correct: 0 },
        { question: "What does the 'pen down' block do?", options: ["Writes text", "Makes sprite draw as it moves", "Lowers sprite", "Points downward"], correct: 1 },
        { question: "How can you create different difficulty levels in a game?", options: ["Create multiple projects", "Use variables to adjust game parameters", "It's not possible", "Use different sprites"], correct: 1 },
        { question: "What is the purpose of the 'video sensing' extension?", options: ["Play videos", "Detect motion from camera", "Record videos", "Edit videos"], correct: 1 },
        { question: "Which block converts text to uppercase?", options: ["Uppercase block", "Text to upper", "Letter of block with operators", "Scratch has no text conversion"], correct: 2 },
        { question: "What does 'mod' operator do?", options: ["Multiplies numbers", "Gives remainder of division", "Modifies sprites", "Rounds numbers"], correct: 1 },
        { question: "How do you create collision detection in a game?", options: ["Use 'touching?' block", "Use 'collision' block", "Use 'hit' block", "Use distance calculations"], correct: 0 },
        { question: "What is a boolean value?", options: ["A number", "True or False", "A text string", "A sprite property"], correct: 1 },
        { question: "Which blocks return boolean values?", options: ["Operator comparison blocks", "All sensing blocks", "Motion blocks", "Sound blocks"], correct: 0 },
        { question: "How can you make a sprite follow a path?", options: ["Use pre-defined paths", "Use coordinates and glide blocks in sequence", "Use 'follow path' block", "Draw on stage"], correct: 1 },
        { question: "What does the 'set drag mode' block do?", options: ["Drags all sprites", "Controls if sprite can be dragged by mouse", "Drags backdrops", "Speeds up dragging"], correct: 1 },
        { question: "How do you create a scrolling background?", options: ["Use scrolling extension", "Move backdrop continuously", "Use multiple backdrops and switch them", "Use camera movement"], correct: 2 },
        { question: "What is the purpose of the 'timer' block?", options: ["Sets alarms", "Counts seconds since project started", "Creates countdown", "Stops time"], correct: 1 },
        { question: "How can you make sprites communicate with each other?", options: ["Use telephone blocks", "Use broadcast messages", "Use sprite links", "Direct sprite commands"], correct: 1 },
        { question: "What does 'contains' operator check in lists?", options: ["If list is empty", "If list contains a specific item", "List size", "List color"], correct: 1 },
        { question: "How do you optimize a Scratch project for better performance?", options: ["Delete unused sprites and scripts", "Use smaller costumes", "Limit forever loops", "All of the above"], correct: 3 },
        { question: "What is the purpose of 'stop other scripts in sprite'?", options: ["Stops all projects", "Stops other scripts while running current one", "Stops stage scripts", "Stops sound"], correct: 1 },
        { question: "How can you create a health system in a game?", options: ["Use health extension", "Create a health variable and decrease on damage", "Use special health block", "Use sprite costumes"], correct: 1 },
        { question: "What does 'round' operator do?", options: ["Makes sprite round", "Rounds number to nearest integer", "Creates circles", "Rotates sprites"], correct: 1 },
        { question: "How do you create AI opponents in a game?", options: ["Use AI blocks", "Program movement patterns with conditionals", "Import AI sprites", "It's not possible"], correct: 1 },
        { question: "What is the 'stamp' block used for?", options: ["Adding text", "Leaving an image of sprite on stage", "Collecting items", "Marking positions"], correct: 1 },
        { question: "How can you make a two-player game in Scratch?", options: ["Use two computers", "Assign different keys to different sprites", "Use multiplayer extension", "Not possible in Scratch"], correct: 1 }
    ],
    "SS1": [
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], correct: 0 },
        { question: "Which tag is used to create a hyperlink?", options: ["&lt;link&gt;", "&lt;a&gt;", "&lt;href&gt;", "&lt;url&gt;"], correct: 1 },
        { question: "What is the correct HTML element for the largest heading?", options: ["&lt;head&gt;", "&lt;h6&gt;", "&lt;h1&gt;", "&lt;heading&gt;"], correct: 2 },
        { question: "How do you create a comment in HTML?", options: ["// This is a comment", "&lt;!-- This is a comment --&gt;", "/* This is a comment */", "' This is a comment"], correct: 1 },
        { question: "Which tag is used to display an image?", options: ["&lt;image&gt;", "&lt;img&gt;", "&lt;picture&gt;", "&lt;src&gt;"], correct: 1 },
        { question: "What is the correct HTML for creating a line break?", options: ["&lt;break&gt;", "&lt;lb&gt;", "&lt;br&gt;", "&lt;newline&gt;"], correct: 2 },
        { question: "Which attribute specifies the destination of a hyperlink?", options: ["link", "href", "src", "url"], correct: 1 },
        { question: "What is the correct HTML element for inserting a paragraph?", options: ["&lt;paragraph&gt;", "&lt;para&gt;", "&lt;p&gt;", "&lt;text&gt;"], correct: 2 },
        { question: "Which tag is used to create an unordered list?", options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;list&gt;", "&lt;li&gt;"], correct: 0 },
        { question: "What does the &lt;title&gt; tag define?", options: ["A heading on the page", "The page title in browser tab", "A subtitle", "The main title visible on page"], correct: 1 },
        { question: "Which HTML tag is used for the smallest heading?", options: ["&lt;h1&gt;", "&lt;h6&gt;", "&lt;small&gt;", "&lt;heading6&gt;"], correct: 1 },
        { question: "What is the purpose of the &lt;!DOCTYPE html&gt; declaration?", options: ["It's a comment", "It defines the document type and HTML version", "It's optional", "It creates a title"], correct: 1 },
        { question: "Which tag contains metadata about the HTML document?", options: ["&lt;meta&gt;", "&lt;head&gt;", "&lt;title&gt;", "&lt;info&gt;"], correct: 1 },
        { question: "How do you create a numbered list in HTML?", options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;nl&gt;", "&lt;dl&gt;"], correct: 1 },
        { question: "What is the correct HTML for making text bold?", options: ["&lt;b&gt;", "&lt;bold&gt;", "&lt;strong&gt;", "Both A and C"], correct: 3 },
        { question: "Which attribute specifies alternative text for an image?", options: ["title", "alt", "text", "description"], correct: 1 },
        { question: "What does the &lt;body&gt; tag contain?", options: ["Metadata", "The visible page content", "CSS styles", "JavaScript code"], correct: 1 },
        { question: "How do you create a table in HTML?", options: ["&lt;table&gt;", "&lt;tab&gt;", "&lt;grid&gt;", "&lt;tbl&gt;"], correct: 0 },
        { question: "Which tag is used for table rows?", options: ["&lt;row&gt;", "&lt;tr&gt;", "&lt;td&gt;", "&lt;table-row&gt;"], correct: 1 },
        { question: "What is the correct HTML for creating a text input field?", options: ["&lt;input type='text'&gt;", "&lt;textbox&gt;", "&lt;textinput&gt;", "&lt;text&gt;"], correct: 0 },
        { question: "Which tag defines table data/cells?", options: ["&lt;data&gt;", "&lt;cell&gt;", "&lt;td&gt;", "&lt;tc&gt;"], correct: 2 },
        { question: "How do you make text italic in HTML?", options: ["&lt;italic&gt;", "&lt;i&gt;", "&lt;it&gt;", "&lt;em&gt;"], correct: 1 },
        { question: "What is the purpose of the &lt;div&gt; tag?", options: ["Creates divisions/sections", "Divides text", "Creates tables", "Makes text bold"], correct: 0 },
        { question: "Which tag is used to create a form?", options: ["&lt;form&gt;", "&lt;input&gt;", "&lt;submit&gt;", "&lt;field&gt;"], correct: 0 },
        { question: "What does the &lt;span&gt; tag do?", options: ["Creates a line break", "Groups inline elements", "Creates a section", "Makes text span multiple lines"], correct: 1 },
        { question: "How do you create a button in HTML?", options: ["&lt;button&gt;", "&lt;btn&gt;", "&lt;input type='button'&gt;", "Both A and C"], correct: 3 },
        { question: "Which tag is used to define a footer for a document?", options: ["&lt;bottom&gt;", "&lt;footer&gt;", "&lt;foot&gt;", "&lt;end&gt;"], correct: 1 },
        { question: "What is the correct HTML for adding a background color?", options: ["&lt;body bg='yellow'&gt;", "&lt;body style='background-color:yellow'&gt;", "&lt;background&gt;yellow&lt;/background&gt;", "&lt;body color='yellow'&gt;"], correct: 1 },
        { question: "Which HTML element defines navigation links?", options: ["&lt;navigation&gt;", "&lt;nav&gt;", "&lt;links&gt;", "&lt;menu&gt;"], correct: 1 },
        { question: "What is semantic HTML?", options: ["HTML with meaning", "HTML with proper structure and meaningful tags", "HTML with comments", "HTML with CSS"], correct: 1 }
    ],
    "SS2": [
        { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"], correct: 1 },
        { question: "Which property changes text color in CSS?", options: ["text-color", "font-color", "color", "text-style"], correct: 2 },
        { question: "How do you apply CSS to an HTML document?", options: ["Inline styles", "Internal stylesheet", "External stylesheet", "All of the above"], correct: 3 },
        { question: "Which CSS property controls text size?", options: ["text-size", "font-size", "text-style", "size"], correct: 1 },
        { question: "What is the correct CSS syntax for making all &lt;p&gt; elements bold?", options: ["p {font-weight: bold;}", "p {text-bold: true;}", "&lt;p style='bold'&gt;", "p {weight: bold;}"], correct: 0 },
        { question: "How do you select an element with id='header'?", options: [".header", "#header", "header", "*header"], correct: 1 },
        { question: "How do you select elements with class='intro'?", options: ["#intro", ".intro", "intro", "*intro"], correct: 1 },
        { question: "Which property changes the background color?", options: ["bg-color", "background-color", "bgcolor", "color-background"], correct: 1 },
        { question: "What is the correct CSS to center text?", options: ["text-align: center;", "align: center;", "text: center;", "center: text;"], correct: 0 },
        { question: "Which property adds space inside an element's border?", options: ["margin", "padding", "spacing", "border-spacing"], correct: 1 },
        { question: "Which property adds space outside an element's border?", options: ["margin", "padding", "spacing", "outside"], correct: 0 },
        { question: "What is the CSS box model?", options: ["A box on the page", "Content, padding, border, and margin", "A container element", "A layout technique"], correct: 1 },
        { question: "How do you make a border 5 pixels wide?", options: ["border-width: 5px;", "border: 5;", "border-size: 5px;", "border: width 5px;"], correct: 0 },
        { question: "Which property changes the font family?", options: ["font-family", "font-name", "font-type", "typeface"], correct: 0 },
        { question: "What does the 'display: none;' property do?", options: ["Makes text invisible", "Hides the element completely", "Removes background", "Makes element transparent"], correct: 1 },
        { question: "Which property controls the stacking order of elements?", options: ["layer", "z-index", "stack", "order"], correct: 1 },
        { question: "How do you make rounded corners?", options: ["corner-radius", "border-radius", "round-corner", "corner-style"], correct: 1 },
        { question: "What is a CSS pseudo-class?", options: ["A fake class", "A special state of an element (like :hover)", "A temporary class", "An advanced class"], correct: 1 },
        { question: "How do you select all &lt;p&gt; elements inside a &lt;div&gt;?", options: ["div + p", "div &gt; p", "div p", "div.p"], correct: 2 },
        { question: "Which property makes text underlined?", options: ["text-decoration: underline;", "text-underline: true;", "underline: text;", "decoration: underline;"], correct: 0 },
        { question: "What does 'position: relative;' do?", options: ["Positions element relative to its normal position", "Positions element relative to browser", "Positions element relative to parent", "Positions element relative to screen"], correct: 0 },
        { question: "How do you create a flexbox container?", options: ["display: flex;", "flex: container;", "layout: flex;", "flexbox: true;"], correct: 0 },
        { question: "Which property controls the space between lines of text?", options: ["text-spacing", "line-height", "line-spacing", "text-height"], correct: 1 },
        { question: "What is the purpose of media queries?", options: ["To play media", "To create responsive designs", "To query databases", "To load images"], correct: 1 },
        { question: "How do you change cursor to a pointer on hover?", options: ["cursor: pointer;", "mouse: pointer;", "cursor-type: pointer;", "pointer: cursor;"], correct: 0 },
        { question: "Which property controls text transformation (uppercase/lowercase)?", options: ["text-style", "text-transform", "text-case", "transform-text"], correct: 1 },
        { question: "What does 'display: block;' do?", options: ["Blocks the element", "Makes element take full width available", "Creates a block shape", "Blocks other elements"], correct: 1 },
        { question: "How do you add a shadow to text?", options: ["text-shadow", "shadow", "font-shadow", "text-effect"], correct: 0 },
        { question: "Which property controls element opacity?", options: ["transparency", "opacity", "visible", "alpha"], correct: 1 },
        { question: "What is CSS Grid used for?", options: ["Creating grids on paper", "Two-dimensional layout system", "Drawing grid lines", "Table layouts only"], correct: 1 }
    ],
    "SS3": [
        { question: "What is JavaScript primarily used for?", options: ["Styling web pages", "Adding interactivity to web pages", "Creating databases", "Designing graphics"], correct: 1 },
        { question: "Which symbol is used for single-line comments in JavaScript?", options: ["//", "&lt;!--", "/*", "#"], correct: 0 },
        { question: "What does DOM stand for?", options: ["Document Object Model", "Data Object Management", "Digital Output Method", "Display Object Model"], correct: 0 },
        { question: "How do you declare a variable in JavaScript?", options: ["var x;", "variable x;", "v x;", "dim x;"], correct: 0 },
        { question: "Which keyword is used to declare a constant in JavaScript?", options: ["constant", "const", "var", "let"], correct: 1 },
        { question: "What is the correct way to write an if statement?", options: ["if x = 5 then", "if (x == 5)", "if x == 5", "if (x = 5)"], correct: 1 },
        { question: "How do you write a function in JavaScript?", options: ["function myFunction()", "function: myFunction()", "def myFunction()", "func myFunction()"], correct: 0 },
        { question: "Which operator checks both value and type equality?", options: ["==", "=", "===", "!="], correct: 2 },
        { question: "How do you select an element by ID in JavaScript?", options: ["document.getElementById()", "document.getElement()", "document.selectId()", "document.select()"], correct: 0 },
        { question: "What does 'alert()' do?", options: ["Displays a message box", "Sounds an alarm", "Highlights text", "Creates a warning"], correct: 0 },
        { question: "How do you write a for loop in JavaScript?", options: ["for (i = 0; i &lt; 5; i++)", "for i = 1 to 5", "for (i = 0; i &lt; 5)", "loop (i &lt; 5)"], correct: 0 },
        { question: "What is an array in JavaScript?", options: ["A single variable", "A collection of variables", "A function", "A loop"], correct: 1 },
        { question: "How do you add an item to the end of an array?", options: ["array.add()", "array.push()", "array.append()", "array.insert()"], correct: 1 },
        { question: "What does 'console.log()' do?", options: ["Logs in to console", "Prints output to browser console", "Creates a log file", "Records errors"], correct: 1 },
        { question: "Which method converts a string to an integer?", options: ["parseInt()", "toInteger()", "convertInt()", "stringToInt()"], correct: 0 },
        { question: "What is the correct way to write a while loop?", options: ["while (i &lt; 10)", "while i &lt; 10", "while (i &lt; 10) do", "loop while (i &lt; 10)"], correct: 0 },
        { question: "How do you add an event listener to a button?", options: ["button.addEvent()", "button.addEventListener()", "button.on()", "button.listen()"], correct: 1 },
        { question: "What does 'this' keyword refer to in JavaScript?", options: ["The previous element", "The current object", "The next element", "The parent element"], correct: 1 },
        { question: "How do you create an object in JavaScript?", options: ["var obj = {}", "var obj = []", "var obj = ()", "object obj = {}"], correct: 0 },
        { question: "Which method removes the last element from an array?", options: ["array.remove()", "array.pop()", "array.delete()", "array.removeLast()"], correct: 1 },
        { question: "What is the purpose of 'return' in a function?", options: ["Returns to previous page", "Exits and returns a value", "Goes back one step", "Restarts function"], correct: 1 },
        { question: "How do you get the length of a string?", options: ["string.length", "string.size", "string.count", "length(string)"], correct: 0 },
        { question: "What does 'NaN' stand for?", options: ["Not a Number", "Null and None", "New Array Number", "Negative Array Number"], correct: 0 },
        { question: "Which method finds an element in an array?", options: ["array.search()", "array.find()", "array.locate()", "array.get()"], correct: 1 },
        { question: "How do you convert a number to a string?", options: ["toString()", "toText()", "stringify()", "convertString()"], correct: 0 },
        { question: "What is the difference between 'let' and 'var'?", options: ["No difference", "'let' has block scope, 'var' has function scope", "'let' is newer only", "'var' is faster"], correct: 1 },
        { question: "How do you check if a variable is undefined?", options: ["if (x === undefined)", "if (undefined(x))", "if (x == null)", "if (empty(x))"], correct: 0 },
        { question: "What does the 'break' statement do in a loop?", options: ["Pauses the loop", "Exits the loop", "Skips one iteration", "Breaks the code"], correct: 1 },
        { question: "How do you round a number to the nearest integer?", options: ["Math.round()", "round()", "Math.ceil()", "number.round()"], correct: 0 },
        { question: "What is JSON used for?", options: ["Creating animations", "Storing and exchanging data", "Styling pages", "Running scripts"], correct: 1 }
    ]
};

// ==================== APPLICATION STATE ====================

// Application State
let currentState = {
    studentId: null,
    studentName: null,
    selectedClass: null,
    selectedArm: null,
    currentQuestion: 0,
    userAnswers: [],
    shuffledQuestions: [],
    examTime: 30 * 60,
    timerInterval: null
};

// Signature Data
let signatureData = {
    coordinator: null,
    principal: null
};

// Google Sheets Configuration
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScsKB8oALiOa1wz3EDVLGY_Ypc6RF_qxfffPmsQqpLYlLA7UA/formResponse';
const FORM_FIELD_IDS = {
    studentId: 'entry.535636626',
    studentName: 'entry.2095714858',
    class: 'entry.280417801',
    arm: 'entry.604664933',
    score: 'entry.172197206',
    percentage: 'entry.1254894635',
    grade: 'entry.269110260',
    date: 'entry.535860245'
};

// Initialize students
let students = [];

// ==================== FIREBASE DATABASE FUNCTIONS ====================

// Save students to Firebase
async function saveStudentsToFirebase() {
    if (!realTimeEnabled) {
        console.log('Firebase not available, using localStorage');
        localStorage.setItem('students', JSON.stringify(students));
        return;
    }
    
    try {
        await database.ref('students').set(students);
        console.log('Students saved to Firebase');
    } catch (error) {
        console.error('Error saving students to Firebase:', error);
        // Fallback to localStorage
        localStorage.setItem('students', JSON.stringify(students));
    }
}

// Load students from Firebase
async function loadStudentsFromFirebase() {
    if (!realTimeEnabled) {
        console.log('Loading from localStorage');
        const localStudents = JSON.parse(localStorage.getItem('students') || '[]');
        students = localStudents;
        return students;
    }
    
    try {
        const snapshot = await database.ref('students').once('value');
        const firebaseStudents = snapshot.val();
        
        if (firebaseStudents && Array.isArray(firebaseStudents)) {
            students = firebaseStudents;
            console.log('Students loaded from Firebase');
        } else {
            // If no data in Firebase, use localStorage and sync to Firebase
            const localStudents = JSON.parse(localStorage.getItem('students') || '[]');
            students = localStudents;
            if (localStudents.length > 0) {
                await saveStudentsToFirebase();
            }
        }
        return students;
    } catch (error) {
        console.error('Error loading students from Firebase:', error);
        // Fallback to localStorage
        const localStudents = JSON.parse(localStorage.getItem('students') || '[]');
        students = localStudents;
        return students;
    }
}

// Save exam results to Firebase
async function saveExamResultToFirebase(result) {
    if (!realTimeEnabled) {
        console.log('Saving result to localStorage');
        let results = JSON.parse(localStorage.getItem('examResults') || '[]');
        results.push(result);
        localStorage.setItem('examResults', JSON.stringify(results));
        return;
    }
    
    try {
        const resultRef = database.ref('examResults').push();
        await resultRef.set({
            ...result,
            firebaseKey: resultRef.key,
            syncTimestamp: firebase.database.ServerValue.TIMESTAMP
        });
        console.log('Exam result saved to Firebase');
    } catch (error) {
        console.error('Error saving exam result to Firebase:', error);
        // Fallback to localStorage
        let results = JSON.parse(localStorage.getItem('examResults') || '[]');
        results.push(result);
        localStorage.setItem('examResults', JSON.stringify(results));
    }
}

// Load exam results from Firebase
async function loadExamResultsFromFirebase() {
    if (!realTimeEnabled) {
        console.log('Loading results from localStorage');
        return JSON.parse(localStorage.getItem('examResults') || '[]');
    }
    
    try {
        const snapshot = await database.ref('examResults').once('value');
        const resultsData = snapshot.val();
        let results = [];
        
        if (resultsData) {
            Object.keys(resultsData).forEach(key => {
                results.push({
                    ...resultsData[key],
                    firebaseKey: key
                });
            });
            console.log('Exam results loaded from Firebase');
        } else {
            // If no data in Firebase, use localStorage
            results = JSON.parse(localStorage.getItem('examResults') || '[]');
        }
        return results;
    } catch (error) {
        console.error('Error loading exam results from Firebase:', error);
        return JSON.parse(localStorage.getItem('examResults') || '[]');
    }
}

// Save signatures to Firebase
async function saveSignaturesToFirebase() {
    if (!realTimeEnabled) {
        console.log('Saving signatures to localStorage');
        localStorage.setItem('signatureData', JSON.stringify(signatureData));
        return;
    }
    
    try {
        await database.ref('signatures').set({
            ...signatureData,
            syncTimestamp: firebase.database.ServerValue.TIMESTAMP
        });
        console.log('Signatures saved to Firebase');
    } catch (error) {
        console.error('Error saving signatures to Firebase:', error);
        localStorage.setItem('signatureData', JSON.stringify(signatureData));
    }
}

// Load signatures from Firebase
async function loadSignaturesFromFirebase() {
    if (!realTimeEnabled) {
        console.log('Loading signatures from localStorage');
        const localSignatures = JSON.parse(localStorage.getItem('signatureData') || '{}');
        signatureData = localSignatures;
        return signatureData;
    }
    
    try {
        const snapshot = await database.ref('signatures').once('value');
        const firebaseSignatures = snapshot.val();
        
        if (firebaseSignatures) {
            signatureData = firebaseSignatures;
            console.log('Signatures loaded from Firebase');
        } else {
            // If no data in Firebase, use localStorage
            const localSignatures = JSON.parse(localStorage.getItem('signatureData') || '{}');
            signatureData = localSignatures;
        }
        return signatureData;
    } catch (error) {
        console.error('Error loading signatures from Firebase:', error);
        const localSignatures = JSON.parse(localStorage.getItem('signatureData') || '{}');
        signatureData = localSignatures;
        return signatureData;
    }
}

// ==================== DOM ELEMENTS ====================

// DOM Elements
const studentLogin = document.getElementById('student-login');
const classSelection = document.getElementById('class-selection');
const examInterface = document.getElementById('exam-interface');
const resultsScreen = document.getElementById('results-screen');
const adminLogin = document.getElementById('admin-login');
const adminDashboard = document.getElementById('admin-dashboard');
const armsSelection = document.getElementById('arms-selection');
const armsContainer = document.getElementById('arms-container');
const classSelectButtons = document.querySelectorAll('.class-select');
const startExamBtn = document.getElementById('start-exam-btn');
const adminLoginBtn = document.getElementById('admin-login-btn');
const studentLoginBtn = document.getElementById('student-login-btn');
const loginBtn = document.getElementById('login-btn');
const backToLogin = document.getElementById('back-to-login');
const backToStudentLogin = document.getElementById('back-to-student-login');
const logoutBtn = document.getElementById('logout-btn');
const logoutAfterExam = document.getElementById('logout-after-exam');
const exportResultsBtn = document.getElementById('export-results');
const classSelectAdmin = document.getElementById('class-select-admin');
const armSelectAdmin = document.getElementById('arm-select-admin');
const adminResults = document.getElementById('admin-results');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitExamBtn = document.getElementById('submit-exam-btn');
const retakeExamBtn = document.getElementById('retake-exam-btn');
const questionsContainer = document.getElementById('questions-container');
const questionNav = document.getElementById('question-nav');
const examTimer = document.getElementById('exam-timer');
const examTitle = document.getElementById('exam-title');
const studentInfo = document.getElementById('student-info');
const studentExamInfo = document.getElementById('student-exam-info');
const studentResultInfo = document.getElementById('student-result-info');
const scoreDisplay = document.getElementById('score-display');
const resultMessage = document.getElementById('result-message');
const studentIdInput = document.getElementById('student-id');
const studentNameInput = document.getElementById('student-name');
const printResultBtn = document.getElementById('print-result-btn');
const printAdminResultsBtn = document.getElementById('print-admin-results');
const addStudentBtn = document.getElementById('add-student-btn');
const filterClass = document.getElementById('filter-class');
const filterArm = document.getElementById('filter-arm');
const searchStudent = document.getElementById('search-student');
const studentsList = document.getElementById('students-list');
const exportStudentsBtn = document.getElementById('export-students');
const tabButtons = document.querySelectorAll('.tab-button');
const importFile = document.getElementById('import-file');
const importStudentsBtn = document.getElementById('import-students-btn');
const importPreview = document.getElementById('import-preview');

// New Elements for Enhanced Features
const keyboardHelpBtn = document.getElementById('keyboard-help-btn');
const closeKeyboardHelp = document.getElementById('close-keyboard-help');
const continueSessionBtn = document.getElementById('continue-session-btn');
const logoutModalBtn = document.getElementById('logout-modal-btn');
const backupDataBtn = document.getElementById('backup-data-btn');
const restoreDataBtn = document.getElementById('restore-data-btn');
const testFirebaseBtn = document.getElementById('test-firebase-btn');
const broadcastBtn = document.getElementById('broadcast-btn');
const quickCorrectionBtn = document.getElementById('quick-correction-btn');

// Signature Elements
const coordinatorUpload = document.getElementById('coordinator-signature-upload');
const principalUpload = document.getElementById('principal-signature-upload');
const removeCoordinatorBtn = document.getElementById('remove-coordinator-signature');
const removePrincipalBtn = document.getElementById('remove-principal-signature');
const coordinatorPreview = document.getElementById('coordinator-preview');
const principalPreview = document.getElementById('principal-preview');

// New Elements for Data Management
const clearAllStudentsBtn = document.getElementById('clear-all-students');
const clearAllResultsBtn = document.getElementById('clear-all-results');
const clearAllQuestionsBtn = document.getElementById('clear-all-questions');
const bulkUploadQuestionsBtn = document.getElementById('bulk-upload-questions');
const addSingleQuestionBtn = document.getElementById('add-single-question');
const bulkUploadSection = document.getElementById('bulk-upload-section');
const singleQuestionSection = document.getElementById('single-question-section');
const questionsJsonFile = document.getElementById('questions-json-file');
const bulkUploadClass = document.getElementById('bulk-upload-class');
const processBulkUploadBtn = document.getElementById('process-bulk-upload');
const cancelBulkUploadBtn = document.getElementById('cancel-bulk-upload');
const singleQuestionClass = document.getElementById('single-question-class');
const singleQuestionText = document.getElementById('single-question-text');
const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');
const optionC = document.getElementById('option-c');
const optionD = document.getElementById('option-d');
const correctAnswer = document.getElementById('correct-answer');
const saveSingleQuestionBtn = document.getElementById('save-single-question');
const cancelSingleQuestionBtn = document.getElementById('cancel-single-question');
const viewAutoRegisteredBtn = document.getElementById('view-auto-registered');

// ==================== FIREBASE REAL-TIME FUNCTIONS ====================

// Real-time Database Functions
function initializeRealTimeUpdates() {
    if (!app || !database) {
        console.log('Firebase not available - running in offline mode');
        realTimeEnabled = false;
        return;
    }
    
    try {
        // Listen for admin corrections
        database.ref('admin/corrections').on('value', (snapshot) => {
            const corrections = snapshot.val();
            if (corrections) {
                handleAdminCorrections(corrections);
            }
        });
        
        // Listen for question updates
        database.ref('questions').on('value', (snapshot) => {
            const updatedQuestions = snapshot.val();
            if (updatedQuestions) {
                updateQuestionsFromFirebase(updatedQuestions);
            }
        });
        
        realTimeEnabled = true;
        console.log('Real-time updates enabled');
        showRealTimeNotification('Real-time updates activated');
        
    } catch (error) {
        console.error('Error initializing real-time updates:', error);
        realTimeEnabled = false;
    }
}

// Handle admin corrections
function handleAdminCorrections(corrections) {
    if (!corrections) return;
    
    console.log('Admin corrections received:', corrections);
    
    // Show notification for general corrections
    if (corrections.message) {
        showRealTimeNotification(`📢 Admin: ${corrections.message}`);
    }
    
    // Handle question updates
    if (corrections.updatedQuestions) {
        corrections.updatedQuestions.forEach(update => {
            applyQuestionUpdate(update);
        });
    }
    
    // Handle practical score updates
    if (corrections.updatedScores) {
        corrections.updatedScores.forEach(scoreUpdate => {
            updatePracticalScoreRealTime(scoreUpdate);
        });
    }
    
    // Handle student updates
    if (corrections.updatedStudents) {
        corrections.updatedStudents.forEach(studentUpdate => {
            updateStudentsRealTime(studentUpdate);
        });
    }
}

// Apply question updates from admin
function applyQuestionUpdate(update) {
    const { class: className, questionIndex, field, newValue } = update;
    
    if (questionsDatabase[className] && questionsDatabase[className][questionIndex]) {
        // Update the question
        if (field === 'question') {
            questionsDatabase[className][questionIndex].question = newValue;
        } else if (field === 'options') {
            questionsDatabase[className][questionIndex].options = newValue;
        } else if (field === 'correct') {
            questionsDatabase[className][questionIndex].correct = parseInt(newValue);
        }
        
        // Update localStorage
        localStorage.setItem('questionsDatabase', JSON.stringify(questionsDatabase));
        
        // If this question is currently being displayed, update it
        if (currentState.selectedClass === className && examInterface.style.display === 'block') {
            loadQuestion(currentState.currentQuestion);
        }
        
        showRealTimeNotification(`📝 Question updated for ${className}`);
    }
}

// Update questions from Firebase
function updateQuestionsFromFirebase(updatedQuestions) {
    // Merge updated questions with local database
    for (const className in updatedQuestions) {
        if (questionsDatabase[className]) {
            questionsDatabase[className] = updatedQuestions[className];
        }
    }
    
    // Update localStorage
    localStorage.setItem('questionsDatabase', JSON.stringify(questionsDatabase));
    showRealTimeNotification('📚 Question database updated from server');
}

// Update practical scores in real-time
function updatePracticalScoreRealTime(scoreUpdate) {
    const { studentId, timestamp, practicalScore } = scoreUpdate;
    
    let results = JSON.parse(localStorage.getItem('examResults') || '[]');
    const resultIndex = results.findIndex(r => 
        r.studentId === studentId && r.timestamp === timestamp
    );
    
    if (resultIndex !== -1) {
        results[resultIndex].practicalScore = practicalScore;
        
        const theoryMarks = results[resultIndex].theoryMarks;
        const totalMarks = theoryMarks + practicalScore;
        const percentage = (totalMarks / 100) * 100;
        
        let grade = '';
        if (percentage >= 90) grade = 'A+ (Excellent)';
        else if (percentage >= 80) grade = 'A (Very Good)';
        else if (percentage >= 70) grade = 'B (Good)';
        else if (percentage >= 60) grade = 'C (Fair)';
        else if (percentage >= 50) grade = 'D (Pass)';
        else grade = 'F (Fail)';
        
        results[resultIndex].totalMarks = totalMarks;
        results[resultIndex].percentage = percentage.toFixed(1);
        results[resultIndex].grade = grade;
        
        localStorage.setItem('examResults', JSON.stringify(results));
        
        // Refresh admin results if open
        if (adminDashboard.style.display === 'block') {
            loadAdminResults();
        }
        
        showRealTimeNotification(`📊 Practical score updated for student ${studentId}`);
    }
}

// Update students list in real-time
function updateStudentsRealTime(studentUpdate) {
    const { action, student } = studentUpdate;
    
    if (action === 'add') {
        // Add new student
        if (!students.some(s => s.id === student.id)) {
            students.push(student);
            localStorage.setItem('students', JSON.stringify(students));
            showRealTimeNotification(`👨‍🎓 New student added: ${student.name}`);
        }
    } else if (action === 'delete') {
        // Remove student
        students = students.filter(s => s.id !== student.id);
        localStorage.setItem('students', JSON.stringify(students));
        showRealTimeNotification(`🗑️ Student removed: ${student.name}`);
    }
    
    // Refresh students list if admin dashboard is open
    if (adminDashboard.style.display === 'block') {
        loadStudents();
    }
}

// ==================== ADMIN REAL-TIME FUNCTIONS ====================

// Send admin correction
async function sendAdminCorrection(message) {
    if (!realTimeEnabled) {
        alert('Real-time updates not enabled. Please check Firebase configuration.');
        return;
    }
    
    const correction = {
        message: message,
        timestamp: new Date().toISOString(),
        admin: 'Administrator'
    };
    
    try {
        await database.ref('admin/corrections').set(correction);
        console.log('Correction sent successfully');
        showRealTimeNotification('📢 Message sent to all users');
    } catch (error) {
        console.error('Error sending correction:', error);
        alert('Error sending correction: ' + error.message);
    }
}

// Update question in real-time
async function updateQuestionRealTime(className, questionIndex, field, newValue) {
    if (!realTimeEnabled) {
        alert('Real-time updates not enabled');
        return;
    }
    
    const update = {
        class: className,
        questionIndex: questionIndex,
        field: field,
        newValue: newValue,
        timestamp: new Date().toISOString()
    };
    
    // Update local database first
    if (questionsDatabase[className] && questionsDatabase[className][questionIndex]) {
        if (field === 'question') {
            questionsDatabase[className][questionIndex].question = newValue;
        } else if (field === 'options') {
            questionsDatabase[className][questionIndex].options = newValue;
        } else if (field === 'correct') {
            questionsDatabase[className][questionIndex].correct = parseInt(newValue);
        }
        
        localStorage.setItem('questionsDatabase', JSON.stringify(questionsDatabase));
    }
    
    // Send to all users
    try {
        await database.ref('admin/corrections').set({
            updatedQuestions: [update],
            timestamp: new Date().toISOString(),
            admin: 'Administrator'
        });
        showRealTimeNotification(`📝 Question updated for ${className}`);
    } catch (error) {
        console.error('Error updating question:', error);
    }
}

// Enhanced student management with real-time
async function addStudentRealTime() {
    const studentId = document.getElementById('new-student-id').value.trim();
    const studentName = document.getElementById('new-student-name').value.trim();
    const studentClass = document.getElementById('new-student-class').value;
    const studentArm = document.getElementById('new-student-arm').value;
    
    if (!studentId || !studentName || !studentClass || !studentArm) {
        alert('Please fill all required fields');
        return;
    }
    
    if (students.some(student => student.id === studentId)) {
        alert('Student ID already exists');
        return;
    }
    
    const newStudent = {
        id: studentId,
        name: studentName,
        class: studentClass,
        arm: studentArm,
        created: new Date().toISOString()
    };
    
    // Add to students array
    students.push(newStudent);
    
    // Save to Firebase
    await saveStudentsToFirebase();
    
    // Clear form
    document.getElementById('new-student-id').value = '';
    document.getElementById('new-student-name').value = '';
    document.getElementById('new-student-class').value = '';
    document.getElementById('new-student-arm').value = '';
    
    loadStudents();
    showRealTimeNotification(`👨‍🎓 Student added: ${studentName}`);
}

// Enhanced delete student with real-time
async function deleteStudentRealTime(studentId) {
    if (confirm('Are you sure you want to delete this student?')) {
        students = students.filter(student => student.id !== studentId);
        
        // Save to Firebase
        await saveStudentsToFirebase();
        
        loadStudents();
        showRealTimeNotification(`🗑️ Student deleted: ${studentId}`);
    }
}

// Enhanced practical score update with real-time
async function updatePracticalScoreRealTimeAdmin(studentId, timestamp, practicalScore) {
    if (!realTimeEnabled) {
        // Fallback to local update only
        updatePracticalScoreLocal(studentId, timestamp, practicalScore);
        return;
    }
    
    const scoreUpdate = {
        studentId: studentId,
        timestamp: timestamp,
        practicalScore: practicalScore,
        admin: 'Administrator',
        updateTime: new Date().toISOString()
    };
    
    // Update locally first
    updatePracticalScoreLocal(studentId, timestamp, practicalScore);
    
    // Send real-time update
    try {
        await database.ref('admin/corrections').set({
            updatedScores: [scoreUpdate],
            timestamp: new Date().toISOString()
        });
        console.log('Practical score update sent to all users');
    } catch (error) {
        console.error('Error sending score update:', error);
    }
}

function updatePracticalScoreLocal(studentId, timestamp, practicalScore) {
    let results = JSON.parse(localStorage.getItem('examResults') || '[]');
    const resultIndex = results.findIndex(r => 
        r.studentId === studentId && r.timestamp === timestamp
    );
    
    if (resultIndex !== -1) {
        results[resultIndex].practicalScore = practicalScore;
        
        const theoryMarks = results[resultIndex].theoryMarks;
        const totalMarks = theoryMarks + practicalScore;
        const percentage = (totalMarks / 100) * 100;
        
        let grade = '';
        if (percentage >= 90) grade = 'A+ (Excellent)';
        else if (percentage >= 80) grade = 'A (Very Good)';
        else if (percentage >= 70) grade = 'B (Good)';
        else if (percentage >= 60) grade = 'C (Fair)';
        else if (percentage >= 50) grade = 'D (Pass)';
        else grade = 'F (Fail)';
        
        results[resultIndex].totalMarks = totalMarks;
        results[resultIndex].percentage = percentage.toFixed(1);
        results[resultIndex].grade = grade;
        
        localStorage.setItem('examResults', JSON.stringify(results));
        loadAdminResults();
    }
}

// Test Firebase connection
async function testFirebaseConnection() {
    if (!app) {
        console.log('Firebase not initialized');
        return false;
    }
    
    try {
        await database.ref('connectionTest').set({
            timestamp: new Date().toISOString(),
            message: 'CBT System Connected Successfully!',
            status: 'Active'
        });
        console.log('Firebase connection test: SUCCESS');
        showRealTimeNotification('Firebase connected successfully!');
        return true;
    } catch (error) {
        console.error('Firebase connection test: FAILED', error);
        alert('Firebase connection failed: ' + error.message);
        return false;
    }
}

// ==================== NOTIFICATION SYSTEM ====================

// Enhanced notification system
function showRealTimeNotification(message) {
    // Create notification container if it doesn't exist
    let notificationContainer = document.getElementById('real-time-notification-container');
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.id = 'real-time-notification-container';
        notificationContainer.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            max-width: 400px;
        `;
        document.body.appendChild(notificationContainer);
    }
    
    const notification = document.createElement('div');
    notification.className = 'real-time-notification';
    notification.style.cssText = `
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 20px;
        margin-bottom: 10px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        animation: slideInRight 0.3s ease-out;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 300px;
        font-family: Arial, sans-serif;
        font-size: 14px;
    `;
    
    notification.innerHTML = `
        <div style="flex: 1;">
            <div style="font-weight: bold; margin-bottom: 5px;">🔔 Real-time Update</div>
            <div>${message}</div>
            <div style="font-size: 11px; opacity: 0.8; margin-top: 5px;">
                ${new Date().toLocaleTimeString()}
            </div>
        </div>
        <button onclick="this.parentElement.remove()" 
                style="background: none; border: none; color: white; cursor: pointer; margin-left: 15px; font-size: 18px;">
            ✕
        </button>
    `;
    
    notificationContainer.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add CSS animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .real-time-notification {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(notificationStyle);

// ==================== EVENT LISTENERS ====================

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

studentLoginBtn.addEventListener('click', studentLoginAction);
adminLoginBtn.addEventListener('click', showAdminLogin);

classSelectButtons.forEach(button => {
    button.addEventListener('click', async function() {
        const level = this.getAttribute('data-level');
        
        // Set the selected class
        currentState.selectedClass = level;
        
        // Update student record if this is an auto-registered student
        const student = students.find(s => s.id === currentState.studentId && s.name === currentState.studentName);
        if (student && (student.autoRegistered || !student.class)) {
            student.class = level;
            student.arm = null; // Reset arm when class changes
            await saveStudentsToFirebase();
            console.log('Updated student class:', student);
        }
        
        // Show arms selection
        showArmsSelection(level);
        
        // Highlight the selected class
        document.querySelectorAll('.class-select').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
    });
});

startExamBtn.addEventListener('click', startExam);
loginBtn.addEventListener('click', adminLoginAction);
backToLogin.addEventListener('click', backToMainLogin);
backToStudentLogin.addEventListener('click', backToMainLogin);
logoutBtn.addEventListener('click', adminLogout);
logoutAfterExam.addEventListener('click', backToMainLogin);
exportResultsBtn.addEventListener('click', exportToExcel);
classSelectAdmin.addEventListener('change', loadAdminResults);
armSelectAdmin.addEventListener('change', loadAdminResults);
prevBtn.addEventListener('click', showPreviousQuestion);
nextBtn.addEventListener('click', showNextQuestion);
submitExamBtn.addEventListener('click', submitExam);
retakeExamBtn.addEventListener('click', retakeExam);
printResultBtn.addEventListener('click', printStudentResult);
printAdminResultsBtn.addEventListener('click', printAdminResults);
addStudentBtn.addEventListener('click', addStudentRealTime);
filterClass.addEventListener('change', loadStudents);
filterArm.addEventListener('change', loadStudents);
searchStudent.addEventListener('input', loadStudents);
exportStudentsBtn.addEventListener('click', exportStudentsToExcel);
importStudentsBtn.addEventListener('click', importStudentsFromFile);

// New Event Listeners
if (keyboardHelpBtn) {
    keyboardHelpBtn.addEventListener('click', function() {
        document.getElementById('keyboard-help-modal').style.display = 'flex';
    });
}

if (closeKeyboardHelp) {
    closeKeyboardHelp.addEventListener('click', function() {
        document.getElementById('keyboard-help-modal').style.display = 'none';
    });
}

if (continueSessionBtn) {
    continueSessionBtn.addEventListener('click', function() {
        document.getElementById('session-timeout-modal').style.display = 'none';
        resetSessionTimer();
    });
}

if (logoutModalBtn) {
    logoutModalBtn.addEventListener('click', function() {
        document.getElementById('session-timeout-modal').style.display = 'none';
        backToMainLogin();
    });
}

if (backupDataBtn) {
    backupDataBtn.addEventListener('click', backupData);
}

if (restoreDataBtn) {
    restoreDataBtn.addEventListener('click', restoreDataFromFile);
}

if (testFirebaseBtn) {
    testFirebaseBtn.addEventListener('click', testYourFirebaseConnection);
}

if (broadcastBtn) {
    broadcastBtn.addEventListener('click', sendBroadcastMessage);
}

if (quickCorrectionBtn) {
    quickCorrectionBtn.addEventListener('click', sendQuickCorrection);
}

// Signature Event Listeners
if (coordinatorUpload) {
    coordinatorUpload.addEventListener('change', function(e) {
        handleSignatureUpload(e, 'coordinator');
    });
}

if (principalUpload) {
    principalUpload.addEventListener('change', function(e) {
        handleSignatureUpload(e, 'principal');
    });
}

if (removeCoordinatorBtn) {
    removeCoordinatorBtn.addEventListener('click', function() {
        removeSignature('coordinator');
    });
}

if (removePrincipalBtn) {
    removePrincipalBtn.addEventListener('click', function() {
        removeSignature('principal');
    });
}

// New Data Management Event Listeners
if (clearAllStudentsBtn) {
    clearAllStudentsBtn.addEventListener('click', clearAllStudents);
}

if (clearAllResultsBtn) {
    clearAllResultsBtn.addEventListener('click', clearAllResults);
}

if (clearAllQuestionsBtn) {
    clearAllQuestionsBtn.addEventListener('click', clearAllQuestions);
}

if (bulkUploadQuestionsBtn) {
    bulkUploadQuestionsBtn.addEventListener('click', showBulkUploadSection);
}

if (addSingleQuestionBtn) {
    addSingleQuestionBtn.addEventListener('click', showSingleQuestionSection);
}

if (processBulkUploadBtn) {
    processBulkUploadBtn.addEventListener('click', processBulkUpload);
}

if (cancelBulkUploadBtn) {
    cancelBulkUploadBtn.addEventListener('click', hideQuestionSections);
}

if (saveSingleQuestionBtn) {
    saveSingleQuestionBtn.addEventListener('click', addSingleQuestion);
}

if (cancelSingleQuestionBtn) {
    cancelSingleQuestionBtn.addEventListener('click', hideQuestionSections);
}

if (viewAutoRegisteredBtn) {
    viewAutoRegisteredBtn.addEventListener('click', showAutoRegisteredStudents);
}

// Tab functionality
tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        // Hide all tab panes
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
        });
        
        // Show selected tab pane
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
        
        // Load students if students panel is selected
        if (tabId === 'students-panel') {
            loadStudents();
        }
    });
});

// ==================== CORE FUNCTIONS ====================

async function initializeApp() {
    // Ensure only student login is visible on startup
    document.getElementById('student-login').style.display = 'block';
    document.getElementById('class-selection').style.display = 'none';
    document.getElementById('exam-interface').style.display = 'none';
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('admin-login').style.display = 'none';
    document.getElementById('admin-dashboard').style.display = 'none';
    document.getElementById('arms-selection').style.display = 'none';
    
    // Load data from Firebase
    await loadStudentsFromFirebase();
    await loadSignaturesFromFirebase();
    
    // Focus on student ID input
    if (studentIdInput) studentIdInput.focus();
    
    // Load students if any exist
    if (students.length > 0) {
        loadStudents();
    }
    
    // Initialize real-time updates
    setTimeout(() => {
        initializeRealTimeUpdates();
        testFirebaseConnection().then(success => {
            updateRealTimeStatus(success ? 'Connected ✓' : 'Disconnected ✗', success);
        });
    }, 2000);
}

async function studentLoginAction() {
    const studentId = studentIdInput.value.trim();
    const studentName = studentNameInput.value.trim();
    
    if (!studentId || !studentName) {
        alert('Please enter both Student ID and Full Name');
        return;
    }
    
    // Check if student is registered in the system
    const registeredStudents = students;
    const existingStudent = registeredStudents.find(s => 
        s.id === studentId && s.name.toLowerCase() === studentName.toLowerCase()
    );
    
    if (existingStudent) {
        // Student exists in system - use their registered data
        currentState.studentId = studentId;
        currentState.studentName = studentName;
        currentState.selectedClass = existingStudent.class;
        currentState.selectedArm = existingStudent.arm;
        
        console.log('Registered student logged in:', existingStudent);
    } else {
        // Student not registered - allow login with manual class selection
        currentState.studentId = studentId;
        currentState.studentName = studentName;
        currentState.selectedClass = null; // Will be selected manually
        currentState.selectedArm = null;   // Will be selected manually
        
        // Add to students array for future reference (without class/arm yet)
        if (!registeredStudents.some(s => s.id === studentId)) {
            const newStudent = {
                id: studentId,
                name: studentName,
                class: null, // Will be set when they select class
                arm: null,   // Will be set when they select arm
                created: new Date().toISOString(),
                autoRegistered: true // Flag to identify auto-registered students
            };
            students.push(newStudent);
            await saveStudentsToFirebase();
            console.log('New student auto-registered:', newStudent);
        }
        
        console.log('Unregistered student logged in - manual class selection required');
    }
    
    // Proceed to class selection
    studentLogin.style.display = 'none';
    classSelection.style.display = 'block';
    studentInfo.textContent = `${studentName} (${studentId})`;
    
    // Show appropriate message based on registration status
    if (!existingStudent) {
        const infoMessage = document.createElement('div');
        infoMessage.className = 'alert alert-info mt-3';
        infoMessage.innerHTML = `
            <strong>New Student:</strong> Please select your class and arm below.
            ${currentState.selectedClass ? 'Class pre-selected from registration.' : ''}
        `;
        
        // Insert at the beginning of class selection content
        const classSelectionContent = document.querySelector('#class-selection .container');
        if (classSelectionContent && !classSelectionContent.querySelector('.alert-info')) {
            classSelectionContent.insertBefore(infoMessage, classSelectionContent.firstChild);
        }
    }
    
    // If student has pre-registered class, highlight it
    if (currentState.selectedClass) {
        document.querySelectorAll('.class-select').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-level') === currentState.selectedClass) {
                btn.classList.add('active');
                showArmsSelection(currentState.selectedClass);
                
                // Auto-select the student's arm if available
                setTimeout(() => {
                    if (currentState.selectedArm) {
                        const armBtn = document.querySelector(`#arms-container button[data-arm="${currentState.selectedArm}"]`);
                        if (armBtn) {
                            document.querySelectorAll('#arms-container button').forEach(btn => {
                                btn.classList.remove('btn-primary');
                                btn.classList.add('btn-secondary');
                            });
                            armBtn.classList.remove('btn-secondary');
                            armBtn.classList.add('btn-primary');
                        }
                    }
                }, 100);
            }
        });
    } else {
        // Clear any active class selections for new students
        document.querySelectorAll('.class-select').forEach(btn => {
            btn.classList.remove('active');
        });
        if (armsSelection) armsSelection.style.display = 'none';
    }
}

function showArmsSelection(level) {
    if (!armsContainer) return;
    
    armsContainer.innerHTML = '';
    
    let arms = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    if (level === 'SS2') {
        arms.push('H');
    }
    
    arms.forEach(arm => {
        const armButton = document.createElement('button');
        armButton.className = 'btn btn-secondary';
        armButton.textContent = level + ' ' + arm;
        armButton.setAttribute('data-arm', arm);
        armButton.addEventListener('click', async function() {
            // Update all buttons
            document.querySelectorAll('#arms-container button').forEach(btn => {
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-secondary');
            });
            
            // Set current button as active
            this.classList.remove('btn-secondary');
            this.classList.add('btn-primary');
            
            // Set the selected arm
            currentState.selectedArm = this.getAttribute('data-arm');
            
            // Update student record if this is an auto-registered student
            const student = students.find(s => s.id === currentState.studentId && s.name === currentState.studentName);
            if (student && (student.autoRegistered || !student.arm)) {
                student.arm = currentState.selectedArm;
                await saveStudentsToFirebase();
                console.log('Updated student arm:', student);
            }
        });
        
        armsContainer.appendChild(armButton);
    });
    
    armsSelection.style.display = 'block';
    
    // Pre-select arm if student has one from registration
    if (currentState.selectedArm) {
        const armBtn = document.querySelector(`#arms-container button[data-arm="${currentState.selectedArm}"]`);
        if (armBtn) {
            document.querySelectorAll('#arms-container button').forEach(btn => {
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-secondary');
            });
            armBtn.classList.remove('btn-secondary');
            armBtn.classList.add('btn-primary');
        }
    }
}

function startExam() {
    if (!currentState.selectedClass || !currentState.selectedArm) {
        alert('Please select both class and arm before starting the exam');
        return;
    }
    
    // Final check and update of student record
    const student = students.find(s => s.id === currentState.studentId && s.name === currentState.studentName);
    if (student && (!student.class || !student.arm)) {
        student.class = currentState.selectedClass;
        student.arm = currentState.selectedArm;
        saveStudentsToFirebase();
    }
    
    currentState.currentQuestion = 0;
    currentState.userAnswers = new Array(30).fill(null);
    
    currentState.shuffledQuestions = [...questionsDatabase[currentState.selectedClass]];
    shuffleArray(currentState.shuffledQuestions);
    
    classSelection.style.display = 'none';
    examInterface.style.display = 'block';
    examTitle.textContent = `${currentState.selectedClass}${currentState.selectedArm} - Examination`;
    studentExamInfo.textContent = `Student: ${currentState.studentName} (${currentState.studentId})`;
    
    // Show progress bar
    document.getElementById('exam-progress').style.display = 'block';
    
    startTimer();
    loadQuestion(0);
    createQuestionNavigation();
    updateProgressBar();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadQuestion(index) {
    if (!questionsContainer) return;
    
    questionsContainer.innerHTML = '';
    
    const question = currentState.shuffledQuestions[index];
    
    const questionElement = document.createElement('div');
    questionElement.className = 'question-container question-active';
    
    questionElement.innerHTML = `
        <div class="question-header">
            <div class="question-number">${index + 1}</div>
            <div class="question-text">${question.question}</div>
        </div>
        <div class="options-container">
            ${question.options.map((option, i) => `
                <input class="option-input" type="radio" name="question-${index}" id="option-${index}-${i}" value="${i}" ${currentState.userAnswers[index] === i ? 'checked' : ''}>
                <label class="option-label" for="option-${index}-${i}">
                    ${String.fromCharCode(65 + i)}. ${option}
                </label>
            `).join('')}
        </div>
    `;
    
    questionsContainer.appendChild(questionElement);
    
    const optionInputs = questionElement.querySelectorAll('.option-input');
    optionInputs.forEach(input => {
        input.addEventListener('change', function() {
            currentState.userAnswers[index] = parseInt(this.value);
            updateQuestionNavigation();
            updateProgressBar();
        });
    });
    
    updateNavigationButtons();
}

function createQuestionNavigation() {
    if (!questionNav) return;
    
    questionNav.innerHTML = '';
    
    for (let i = 0; i < 30; i++) {
        const navBtn = document.createElement('div');
        navBtn.className = 'question-nav-btn';
        if (i === 0) navBtn.classList.add('active');
        navBtn.textContent = i + 1;
        navBtn.addEventListener('click', () => {
            currentState.currentQuestion = i;
            loadQuestion(i);
            updateQuestionNavigation();
        });
        
        questionNav.appendChild(navBtn);
    }
}

function updateQuestionNavigation() {
    const navBtns = questionNav.querySelectorAll('.question-nav-btn');
    navBtns.forEach((btn, index) => {
        btn.classList.remove('active');
        if (currentState.userAnswers[index] !== null) {
            btn.classList.add('answered');
        } else {
            btn.classList.remove('answered');
        }
        
        if (index === currentState.currentQuestion) {
            btn.classList.add('active');
        }
    });
}

function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.getElementById('progress-text');
    
    if (progressBar && progressText) {
        const answered = currentState.userAnswers.filter(answer => answer !== null).length;
        const progress = (answered / 30) * 100;
        
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}%`;
    }
}

function updateNavigationButtons() {
    if (!prevBtn || !nextBtn) return;
    
    prevBtn.disabled = currentState.currentQuestion === 0;
    nextBtn.disabled = currentState.currentQuestion === 29;
}

function showPreviousQuestion() {
    if (currentState.currentQuestion > 0) {
        currentState.currentQuestion--;
        loadQuestion(currentState.currentQuestion);
        updateQuestionNavigation();
    }
}

function showNextQuestion() {
    if (currentState.currentQuestion < 29) {
        currentState.currentQuestion++;
        loadQuestion(currentState.currentQuestion);
        updateQuestionNavigation();
    }
}

function startTimer() {
    clearInterval(currentState.timerInterval);
    
    currentState.timerInterval = setInterval(() => {
        currentState.examTime--;
        
        const minutes = Math.floor(currentState.examTime / 60);
        const seconds = currentState.examTime % 60;
        
        if (examTimer) {
            examTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        
        if (currentState.examTime <= 0) {
            clearInterval(currentState.timerInterval);
            submitExam();
        }
    }, 1000);
}

async function submitExam() {
    if (!confirm('Are you sure you want to submit your exam?')) {
        return;
    }
    
    clearInterval(currentState.timerInterval);
    
    let score = 0;
    for (let i = 0; i < 30; i++) {
        if (currentState.userAnswers[i] === currentState.shuffledQuestions[i].correct) {
            score++;
        }
    }
    
    const theoryMarks = score * 2;
    const currentTotalMarks = theoryMarks;
    const currentPercentage = (currentTotalMarks / 100) * 100;
    
    let grade = '';
    if (currentPercentage >= 90) grade = 'A+ (Excellent)';
    else if (currentPercentage >= 80) grade = 'A (Very Good)';
    else if (currentPercentage >= 70) grade = 'B (Good)';
    else if (currentPercentage >= 60) grade = 'C (Fair)';
    else if (currentPercentage >= 50) grade = 'D (Pass)';
    else grade = 'F (Fail)';
    
    const result = {
        studentId: currentState.studentId,
        studentName: currentState.studentName,
        class: currentState.selectedClass,
        arm: currentState.selectedArm,
        score: score,
        theoryMarks: theoryMarks,
        practicalScore: 0,
        totalMarks: currentTotalMarks,
        percentage: currentPercentage.toFixed(1),
        grade: grade,
        date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        timestamp: new Date().toISOString(),
        answers: currentState.userAnswers
    };
    
    // Save to Firebase
    await saveExamResultToFirebase(result);
    
    // Also save to Google Sheets
    saveToGoogleSheets(result);
    
    examInterface.style.display = 'none';
    resultsScreen.style.display = 'block';
    
    studentResultInfo.textContent = `${currentState.studentName} - ${currentState.selectedClass}${currentState.selectedArm}`;
    scoreDisplay.textContent = `${currentTotalMarks}/100`;
    
    // Update certificate elements
    const certStudentName = document.getElementById('cert-student-name');
    const certStudentId = document.getElementById('cert-student-id');
    const certClassInfo = document.getElementById('cert-class-info');
    const certTheoryScore = document.getElementById('cert-theory-score');
    const certPracticalScore = document.getElementById('cert-practical-score');
    const certTotalScore = document.getElementById('cert-total-score');
    const certPercentage = document.getElementById('cert-percentage');
    const certGrade = document.getElementById('cert-grade');
    const certDate = document.getElementById('cert-date');
    
    if (certStudentName) certStudentName.textContent = currentState.studentName;
    if (certStudentId) certStudentId.textContent = currentState.studentId;
    if (certClassInfo) certClassInfo.textContent = `${currentState.selectedClass}${currentState.selectedArm}`;
    if (certTheoryScore) certTheoryScore.textContent = theoryMarks;
    if (certPracticalScore) certPracticalScore.textContent = '0';
    if (certTotalScore) certTotalScore.textContent = currentTotalMarks;
    if (certPercentage) certPercentage.textContent = currentPercentage.toFixed(1) + '%';
    if (certGrade) certGrade.textContent = grade;
    if (certDate) certDate.textContent = result.date;
    
    updateStudentResultSignatures();
    
    if (resultMessage) {
        if (currentPercentage >= 80) {
            resultMessage.textContent = "Excellent performance! You have a strong understanding of the subject. Your practical marks will be added by your teacher.";
        } else if (currentPercentage >= 60) {
            resultMessage.textContent = "Good job! You have a solid grasp of the concepts. Your practical marks will be added by your teacher.";
        } else if (currentPercentage >= 50) {
            resultMessage.textContent = "Fair performance. Your practical marks will be added by your teacher to determine your final grade.";
        } else {
            resultMessage.textContent = "You may need additional study. Your practical marks will be added by your teacher to determine your final grade.";
        }
    }
}

function saveToGoogleSheets(result) {
    const iframe = document.createElement('iframe');
    iframe.name = 'google-form-submit';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = GOOGLE_FORM_URL;
    form.target = 'google-form-submit';
    form.style.display = 'none';
    
    const fields = [
        { name: FORM_FIELD_IDS.studentId, value: result.studentId },
        { name: FORM_FIELD_IDS.studentName, value: result.studentName },
        { name: FORM_FIELD_IDS.class, value: result.class },
        { name: FORM_FIELD_IDS.arm, value: result.arm },
        { name: FORM_FIELD_IDS.score, value: result.theoryMarks.toString() + '/60' },
        { name: FORM_FIELD_IDS.percentage, value: result.percentage.toString() + '%' },
        { name: FORM_FIELD_IDS.grade, value: result.grade },
        { name: FORM_FIELD_IDS.date, value: result.date }
    ];
    
    fields.forEach(field => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field.name;
        input.value = field.value;
        form.appendChild(input);
    });
    
    document.body.appendChild(form);
    form.submit();
    
    setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
        showSubmissionSuccess();
    }, 1000);
}

function showSubmissionSuccess() {
    const successMsg = document.createElement('div');
    successMsg.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #4CAF50; color: white; padding: 10px; border-radius: 5px; z-index: 10000;';
    successMsg.textContent = '✓ Results saved to Google Sheets!';
    document.body.appendChild(successMsg);
    setTimeout(() => successMsg.remove(), 3000);
}

function printStudentResult() {
    window.print();
}

function printAdminResults() {
    window.print();
}

function retakeExam() {
    resultsScreen.style.display = 'none';
    classSelection.style.display = 'block';
    currentState.selectedClass = null;
    currentState.selectedArm = null;
    if (armsSelection) armsSelection.style.display = 'none';
    currentState.examTime = 30 * 60;
}

function backToMainLogin() {
    studentLogin.style.display = 'block';
    if (classSelection) classSelection.style.display = 'none';
    if (examInterface) examInterface.style.display = 'none';
    if (resultsScreen) resultsScreen.style.display = 'none';
    if (adminLogin) adminLogin.style.display = 'none';
    if (adminDashboard) adminDashboard.style.display = 'none';
    
    currentState = {
        studentId: null,
        studentName: null,
        selectedClass: null,
        selectedArm: null,
        currentQuestion: 0,
        userAnswers: [],
        shuffledQuestions: [],
        examTime: 30 * 60,
        timerInterval: null
    };
    
    if (studentIdInput) studentIdInput.value = '';
    if (studentNameInput) studentNameInput.value = '';
}

function showAdminLogin() {
    studentLogin.style.display = 'none';
    adminLogin.style.display = 'block';
}

function adminLoginAction() {
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    
    if (username === 'admin' && password === 'admin123') {
        adminLogin.style.display = 'none';
        adminDashboard.style.display = 'block';
        loadAdminResults();
        loadSignatures();
    } else {
        alert('Invalid username or password');
    }
}

function adminLogout() {
    adminDashboard.style.display = 'none';
    studentLogin.style.display = 'block';
}

async function loadAdminResults() {
    if (!adminResults) return;
    
    const selectedClass = classSelectAdmin.value;
    const selectedArm = armSelectAdmin.value;
    
    const sheetsInfo = `
        <div class="alert alert-success mb-4">
            <h5>📊 Google Sheets Integration Active</h5>
            <p>All exam results are automatically saved to Google Sheets in real-time.</p>
            <div class="mt-2">
                <a href="https://docs.google.com/forms/d/1FAIpQLScsKB8oALiOa1wz3EDVLGY_Ypc6RF_qxfffPmsQqpLYlLA7UA/responses" target="_blank" class="btn btn-success btn-sm">
                    📈 View Google Sheets Results
                </a>
                <small class="ms-2">Click to view all student results in Google Sheets</small>
            </div>
        </div>
    `;
    
    if (!selectedClass) {
        adminResults.innerHTML = sheetsInfo + '<p>Please select a class to view local results.</p>';
        return;
    }
    
    const results = await loadExamResultsFromFirebase();
    let classResults = results.filter(r => r.class === selectedClass);
    
    if (selectedArm) {
        classResults = classResults.filter(r => r.arm === selectedArm);
    }
    
    if (classResults.length === 0) {
        adminResults.innerHTML = sheetsInfo + `<p>No local results found for ${selectedClass}${selectedArm ? selectedArm : ''}.</p>`;
        return;
    }
    
    classResults.sort((a, b) => {
        if (a.arm !== b.arm) {
            return a.arm.localeCompare(b.arm);
        }
        return b.totalMarks - a.totalMarks;
    });
    
    let html = sheetsInfo;
    
    if (!selectedArm) {
        const resultsByArm = {};
        classResults.forEach(result => {
            if (!resultsByArm[result.arm]) {
                resultsByArm[result.arm] = [];
            }
            resultsByArm[result.arm].push(result);
        });
        
        for (let arm in resultsByArm) {
            html += `<h5>${selectedClass}${arm}</h5>`;
            html += `<div class="table-responsive">`;
            html += `<table class="table table-striped">`;
            html += `<thead><tr><th>Student ID</th><th>Name</th><th>Date</th><th>Theory (60)</th><th>Practical (40)</th><th>Total (100)</th><th>Percentage</th><th>Grade</th><th>Actions</th></tr></thead>`;
            html += `<tbody>`;
            
            resultsByArm[arm].forEach((result, index) => {
                const date = new Date(result.timestamp).toLocaleDateString();
                const theoryMarks = result.theoryMarks;
                const practicalScore = result.practicalScore || 0;
                const totalMarks = result.totalMarks;
                const percentage = result.percentage;
                const resultId = result.studentId + '_' + result.timestamp;
                
                html += `<tr>
                    <td>${result.studentId}</td>
                    <td>${result.studentName}</td>
                    <td>${date}</td>
                    <td>${theoryMarks}/60</td>
                    <td>
                        <input type="number" 
                               class="form-control form-control-sm practical-input" 
                               style="width: 80px; display: inline-block;" 
                               min="0" 
                               max="40" 
                               value="${practicalScore}" 
                               data-result-id="${resultId}"
                               data-student-id="${result.studentId}"
                               data-date="${result.timestamp}">
                        /40
                    </td>
                    <td><strong>${totalMarks}/100</strong></td>
                    <td>${percentage}%</td>
                    <td>${result.grade}</td>
                    <td>
                        <button class="btn btn-success btn-sm print-individual-btn" 
                                data-student-id="${result.studentId}"
                                data-date="${result.timestamp}">
                            Print
                        </button>
                    </td>
                </tr>`;
            });
            
            html += `</tbody></table></div>`;
        }
    } else {
        html += `<h5>${selectedClass}${selectedArm}</h5>`;
        html += `<div class="table-responsive">`;
        html += `<table class="table table-striped">`;
        html += `<thead><tr><th>Student ID</th><th>Name</th><th>Date</th><th>Theory (60)</th><th>Practical (40)</th><th>Total (100)</th><th>Percentage</th><th>Grade</th><th>Actions</th></tr></thead>`;
        html += `<tbody>`;
        
        classResults.forEach((result, index) => {
            const date = new Date(result.timestamp).toLocaleDateString();
            const theoryMarks = result.theoryMarks;
            const practicalScore = result.practicalScore || 0;
            const totalMarks = result.totalMarks;
            const percentage = result.percentage;
            const resultId = result.studentId + '_' + result.timestamp;
            
            html += `<tr>
                <td>${result.studentId}</td>
                <td>${result.studentName}</td>
                <td>${date}</td>
                <td>${theoryMarks}/60</td>
                <td>
                    <input type="number" 
                           class="form-control form-control-sm practical-input" 
                           style="width: 80px; display: inline-block;" 
                           min="0" 
                           max="40" 
                           value="${practicalScore}" 
                           data-result-id="${resultId}"
                           data-student-id="${result.studentId}"
                           data-date="${result.timestamp}">
                    /40
                </td>
                <td><strong>${totalMarks}/100</strong></td>
                <td>${percentage}%</td>
                <td>${result.grade}</td>
                <td>
                    <button class="btn btn-success btn-sm print-individual-btn" 
                            data-student-id="${result.studentId}"
                            data-date="${result.timestamp}">
                        Print
                    </button>
                </td>
            </tr>`;
        });
        
        html += `</tbody></table></div>`;
    }
    
    adminResults.innerHTML = html;
    
    document.querySelectorAll('.practical-input').forEach(input => {
        input.addEventListener('change', updatePracticalScore);
    });
    
    document.querySelectorAll('.print-individual-btn').forEach(btn => {
        btn.addEventListener('click', printIndividualResult);
    });
}

function updatePracticalScore(event) {
    const input = event.target;
    const studentId = input.dataset.studentId;
    const date = input.dataset.date;
    const practicalScore = parseInt(input.value) || 0;
    
    if (practicalScore < 0 || practicalScore > 40) {
        alert('Practical Score must be between 0 and 40');
        input.value = 0;
        return;
    }
    
    // Use the real-time version
    updatePracticalScoreRealTimeAdmin(studentId, date, practicalScore);
}

function printIndividualResult(event) {
    const studentId = event.currentTarget.dataset.studentId;
    const date = event.currentTarget.dataset.date;
    
    const results = JSON.parse(localStorage.getItem('examResults') || '[]');
    const result = results.find(r => 
        r.studentId === studentId && r.timestamp === date
    );
    
    if (!result) {
        alert('Result not found');
        return;
    }

    const theoryMarks = result.theoryMarks;
    const practicalScore = result.practicalScore || 0;
    const totalMarks = result.totalMarks;
    const percentage = result.percentage;
    
    const currentSignatures = JSON.parse(localStorage.getItem('signatureData') || '{}');
    
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Student Result - ${result.studentName}</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    padding: 40px;
                    max-width: 800px;
                    margin: 0 auto;
                }
                .certificate {
                    border: 3px solid #1a3d7c;
                    padding: 40px;
                    text-align: center;
                }
                .header {
                    background-color: white;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    padding: 10px 0;
                }
                .logo-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 10px;
                }
                .logo {
                    height: 70px;
                    width: auto;
                    max-width: 170px;
                }
                .subtitle {
                    color: #ff6b35;
                    font-size: 1.2rem;
                    margin-bottom: 30px;
                }
                .student-name {
                    font-size: 1.8rem;
                    color: #1a3d7c;
                    margin: 20px 0;
                    font-weight: bold;
                }
                .class-info {
                    font-size: 1.5rem;
                    color: #4a86e8;
                    margin: 20px 0;
                }
                .scores-table {
                    width: 100%;
                    margin: 30px 0;
                    border-collapse: collapse;
                }
                .scores-table th, .scores-table td {
                    padding: 12px;
                    border: 1px solid #ddd;
                    text-align: left;
                }
                .scores-table th {
                    background-color: #f0f0f0;
                    font-weight: bold;
                }
                .scores-table td:nth-child(2),
                .scores-table td:nth-child(3) {
                    text-align: center;
                }
                .total-row {
                    background-color: #e6f0ff;
                    font-weight: bold;
                    font-size: 1.1rem;
                }
                .grade-section {
                    margin: 30px 0;
                    font-size: 1.5rem;
                }
                .grade {
                    color: #4a86e8;
                    font-weight: bold;
                    font-size: 2rem;
                }
                .footer {
                    margin-top: 50px;
                    display: flex;
                    justify-content: space-around;
                    align-items: flex-end;
                }
                .signature-line {
                    text-align: center;
                    width: 200px;
                }
                .signature-image {
                    max-height: 60px;
                    max-width: 150px;
                    margin-bottom: 10px;
                    border-bottom: 2px solid #333;
                    padding-bottom: 5px;
                }
                .signature-placeholder {
                    height: 60px;
                    width: 150px;
                    border-bottom: 2px solid #333;
                    margin: 0 auto 10px auto;
                }
                .signature-name {
                    font-weight: bold;
                    margin-top: 5px;
                }
                @media print {
                    body { padding: 20px; }
                    .no-print { display: none; }
                }
            </style>
        </head>
        <body>
        <header class="header">
            <div class="container">
                <div class="logo-container">
                    <img src="Techxagon-Academy.png" alt="Techxagon Academy Logo" class="logo">
                    <div>
                        <h1 class="brand-title">TECHXAGON ACADEMY</h1>
                        <p class="brand-subtitle">TECHXAGON FIRST TERM EXAMINATION</p>
                    </div>
                    <img src="police.jpg" alt="Police Secondary School Logo" class="logo">
                </div>
            </div>
        </header>
            <div class="certificate">
                <div class="subtitle">Student Result Report</div>
                
                <div class="student-name">${result.studentName}</div>
                <p><strong>Student ID:</strong> ${result.studentId}</p>
                <div class="class-info">${result.class}${result.arm}</div>
                
                <table class="scores-table">
                    <thead>
                        <tr>
                            <th>Assessment Type</th>
                            <th>Score</th>
                            <th>Maximum</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Theory Examination</td>
                            <td>${theoryMarks}</td>
                            <td>60</td>
                        </tr>
                        <tr>
                            <td>Practical Examination</td>
                            <td>${practicalScore}</td>
                            <td>40</td>
                        </tr>
                        <tr class="total-row">
                            <td>TOTAL SCORE</td>
                            <td>${totalMarks}</td>
                            <td>100</td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="grade-section">
                    <p>Percentage: <strong>${percentage}%</strong></p>
                    <p>Grade: <span class="grade">${result.grade}</span></p>
                </div>
                
                <p><strong>Date:</strong> ${new Date(result.timestamp).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                })}</p>
                
                <div class="footer">
                    <div class="signature-line">
                        ${currentSignatures.coordinator ? 
                            `<img src="${currentSignatures.coordinator}" alt="TECH TUTOR Signature" class="signature-image">` : 
                            '<div class="signature-placeholder"></div>'
                        }
                        <div class="signature-name">TECH TUTOR</div>
                    </div>
                    <div class="signature-line">
                        ${currentSignatures.principal ? 
                            `<img src="${currentSignatures.principal}" alt="VP ACADMICS SNR (DD) Signature" class="signature-image">` : 
                            '<div class="signature-placeholder"></div>'
                        }
                        <div class="signature-name">VP ACADMICS SNR (DD)</div>
                    </div>
                </div>
            </div>
            
            <div class="no-print" style="text-align: center; margin-top: 20px;">
                <button onclick="window.print()" style="padding: 10px 20px; font-size: 16px; cursor: pointer;">
                    Print Result
                </button>
                <button onclick="window.close()" style="padding: 10px 20px; font-size: 16px; cursor: pointer; margin-left: 10px;">
                    Close
                </button>
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
}

function exportToExcel() {
    const selectedClass = classSelectAdmin.value;
    const selectedArm = armSelectAdmin.value;
    
    if (!selectedClass) {
        alert('Please select a class first');
        return;
    }
    
    const results = JSON.parse(localStorage.getItem('examResults') || '[]');
    let classResults = results.filter(r => r.class === selectedClass);
    
    if (selectedArm) {
        classResults = classResults.filter(r => r.arm === selectedArm);
    }
    
    if (classResults.length === 0) {
        alert('No results to export');
        return;
    }
    
    let csvContent = "Student ID,Student Name,Class,Arm,Date,Theory Score,Practical Score,Total Score,Percentage,Grade\n";
    
    classResults.forEach(result => {
        const date = new Date(result.timestamp).toLocaleDateString();
        const theoryMarks = result.theoryMarks;
        const practicalScore = result.practicalScore || 0;
        const totalMarks = result.totalMarks;
        const percentage = result.percentage;
        csvContent += `"${result.studentId}","${result.studentName}",${result.class},${result.arm},${date},${theoryMarks}/60,${practicalScore}/40,${totalMarks}/100,${percentage}%,${result.grade}\n`;
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `exam_results_${selectedClass}${selectedArm || ''}_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function loadStudents() {
    if (!studentsList) return;
    
    const filterClassValue = filterClass.value;
    const filterArmValue = filterArm.value;
    const searchValue = searchStudent.value.toLowerCase();
    
    let filteredStudents = students;
    
    if (filterClassValue) {
        filteredStudents = filteredStudents.filter(student => student.class === filterClassValue);
    }
    
    if (filterArmValue) {
        filteredStudents = filteredStudents.filter(student => student.arm === filterArmValue);
    }
    
    if (searchValue) {
        filteredStudents = filteredStudents.filter(student => 
            student.name.toLowerCase().includes(searchValue) || 
            student.id.toLowerCase().includes(searchValue)
        );
    }
    
    studentsList.innerHTML = '';
    
    if (filteredStudents.length === 0) {
        studentsList.innerHTML = '<tr><td colspan="5" class="text-center">No students found</td></tr>';
        return;
    }
    
    filteredStudents.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.class}</td>
            <td>${student.arm}</td>
            <td>
                <button class="btn btn-danger btn-sm delete-student" data-id="${student.id}">Delete</button>
            </td>
        `;
        studentsList.appendChild(row);
    });
    
    document.querySelectorAll('.delete-student').forEach(button => {
        button.addEventListener('click', function() {
            const studentId = this.getAttribute('data-id');
            deleteStudentRealTime(studentId);
        });
    });
}

function exportStudentsToExcel() {
    if (students.length === 0) {
        alert('No students to export');
        return;
    }
    
    let csvContent = "Student ID,Full Name,Class,Arm\n";
    
    students.forEach(student => {
        csvContent += `"${student.id}","${student.name}",${student.class},${student.arm}\n`;
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `students_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function importStudentsFromFile() {
    const file = importFile.files[0];
    if (!file) {
        alert('Please select a file to import');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const csvData = e.target.result;
            const rows = csvData.split('\n');
            const importedStudents = [];
            
            for (let i = 1; i < rows.length; i++) {
                const row = rows[i].trim();
                if (!row) continue;
                
                const columns = row.split(',');
                if (columns.length >= 4) {
                    const studentId = columns[0].trim().replace(/"/g, '');
                    const studentName = columns[1].trim().replace(/"/g, '');
                    const studentClass = columns[2].trim().replace(/"/g, '');
                    const studentArm = columns[3].trim().replace(/"/g, '');
                    
                    if (studentId && studentName && studentClass && studentArm) {
                        if (!students.some(s => s.id === studentId)) {
                            importedStudents.push({
                                id: studentId,
                                name: studentName,
                                class: studentClass,
                                arm: studentArm
                            });
                        }
                    }
                }
            }
            
            if (importedStudents.length === 0) {
                alert('No valid student data found in the file or all students already exist');
                return;
            }
            
            showImportPreview(importedStudents);
            
            if (confirm(`Found ${importedStudents.length} new students. Do you want to import them?`)) {
                students.push(...importedStudents);
                saveStudentsToFirebase();
                loadStudents();
                alert(`Successfully imported ${importedStudents.length} students`);
                
                importFile.value = '';
                if (importPreview) importPreview.style.display = 'none';
            }
        } catch (error) {
            alert('Error reading file: ' + error.message);
        }
    };
    
    reader.onerror = function() {
        alert('Error reading file');
    };
    
    reader.readAsText(file);
}

function showImportPreview(importedStudents) {
    if (!importPreview) return;
    
    let previewHtml = '<table class="table table-striped"><thead><tr><th>Student ID</th><th>Full Name</th><th>Class</th><th>Arm</th></tr></thead><tbody>';
    
    importedStudents.forEach(student => {
        previewHtml += `<tr><td>${student.id}</td><td>${student.name}</td><td>${student.class}</td><td>${student.arm}</td></tr>`;
    });
    
    previewHtml += '</tbody></table>';
    importPreview.innerHTML = previewHtml;
    importPreview.style.display = 'block';
}

// ==================== SIGNATURE MANAGEMENT ====================

// Signature Management Functions
async function loadSignatures() {
    const saved = await loadSignaturesFromFirebase();
    signatureData = { ...signatureData, ...saved };
    
    if (signatureData.coordinator && coordinatorPreview) {
        coordinatorPreview.src = signatureData.coordinator;
        coordinatorPreview.style.display = 'block';
    }
    if (signatureData.principal && principalPreview) {
        principalPreview.src = signatureData.principal;
        principalPreview.style.display = 'block';
    }
}

async function handleSignatureUpload(event, type) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.match('image.*')) {
        alert('Please select an image file (JPEG, PNG, etc.)');
        return;
    }

    const reader = new FileReader();
    reader.onload = async function(e) {
        signatureData[type] = e.target.result;
        
        // Save to Firebase
        await saveSignaturesToFirebase();
        
        const preview = document.getElementById(`${type}-preview`);
        if (preview) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }

        showSignatureSuccess(`${type.charAt(0).toUpperCase() + type.slice(1)} signature uploaded successfully!`);
    };

    reader.readAsDataURL(file);
}

async function removeSignature(type) {
    delete signatureData[type];
    
    // Save to Firebase
    await saveSignaturesToFirebase();
    
    const preview = document.getElementById(`${type}-preview`);
    if (preview) {
        preview.style.display = 'none';
    }

    const fileInput = document.getElementById(`${type}-signature-upload`);
    if (fileInput) {
        fileInput.value = '';
    }
    
    showSignatureSuccess(`${type.charAt(0).toUpperCase() + type.slice(1)} signature removed.`);
}

function showSignatureSuccess(message) {
    const successMsg = document.createElement('div');
    successMsg.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #4CAF50; color: white; padding: 10px; border-radius: 5px; z-index: 10000;';
    successMsg.textContent = message;
    document.body.appendChild(successMsg);
    setTimeout(() => successMsg.remove(), 3000);
}

function updateStudentResultSignatures() {
    const currentSignatures = JSON.parse(localStorage.getItem('signatureData') || '{}');
    
    const coordinatorSignature = document.getElementById('cert-coordinator-signature');
    const principalSignature = document.getElementById('cert-principal-signature');
    
    if (coordinatorSignature) {
        if (currentSignatures.coordinator) {
            coordinatorSignature.innerHTML = `<img src="${currentSignatures.coordinator}" alt="Coordinator Signature" style="max-height: 50px; max-width: 120px; border-bottom: 1px solid #333; padding-bottom: 5px;">`;
        } else {
            coordinatorSignature.innerHTML = '<div class="signature-placeholder"></div>';
        }
    }
    
    if (principalSignature) {
        if (currentSignatures.principal) {
            principalSignature.innerHTML = `<img src="${currentSignatures.principal}" alt="Principal Signature" style="max-height: 50px; max-width: 120px; border-bottom: 1px solid #333; padding-bottom: 5px;">`;
        } else {
            principalSignature.innerHTML = '<div class="signature-placeholder"></div>';
        }
    }
}

// ==================== REAL-TIME CONTROLS ====================

// Admin real-time controls
function sendBroadcastMessage() {
    const messageInput = document.getElementById('broadcast-message');
    if (!messageInput) return;
    
    const message = messageInput.value;
    if (!message) {
        alert('Please enter a message');
        return;
    }
    
    sendAdminCorrection(message);
    messageInput.value = '';
}

function sendQuickCorrection() {
    const className = document.getElementById('rt-class').value;
    const questionIndex = parseInt(document.getElementById('rt-question-index').value) - 1;
    const correctionText = document.getElementById('rt-correction-text').value;
    
    if (!className || isNaN(questionIndex) || !correctionText) {
        alert('Please fill all fields');
        return;
    }
    
    if (questionIndex < 0 || questionIndex > 29) {
        alert('Question number must be between 1 and 30');
        return;
    }
    
    updateQuestionRealTime(className, questionIndex, 'question', correctionText);
    
    // Clear fields
    document.getElementById('rt-question-index').value = '';
    document.getElementById('rt-correction-text').value = '';
}

// Update status display
function updateRealTimeStatus(status, isConnected) {
    const statusElement = document.getElementById('real-time-status-text');
    const liveStatus = document.getElementById('live-status');
    
    if (statusElement) {
        statusElement.textContent = status;
        statusElement.className = isConnected ? 'text-success' : 'text-danger';
    }
    
    if (liveStatus) {
        liveStatus.textContent = status;
        if (isConnected) {
            liveStatus.classList.add('connected');
        } else {
            liveStatus.classList.remove('connected');
        }
    }
}

// ==================== BACKUP AND RECOVERY ====================

function backupData() {
    const backup = {
        students: students,
        results: JSON.parse(localStorage.getItem('examResults') || '[]'),
        questions: questionsDatabase,
        signatures: JSON.parse(localStorage.getItem('signatureData') || '{}'),
        timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(backup, null, 2)], { 
        type: 'application/json' 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cbt-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function restoreDataFromFile() {
    const fileInput = document.getElementById('restore-file');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Please select a backup file');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const backup = JSON.parse(e.target.result);
            
            if (backup.students) {
                students = backup.students;
                saveStudentsToFirebase();
            }
            if (backup.results) {
                localStorage.setItem('examResults', JSON.stringify(backup.results));
            }
            if (backup.signatures) {
                localStorage.setItem('signatureData', JSON.stringify(backup.signatures));
                loadSignatures();
            }
            
            alert('Data restored successfully!');
            location.reload();
        } catch (error) {
            alert('Error restoring backup: ' + error.message);
        }
    };
    reader.readAsText(file);
}

// ==================== SESSION MANAGEMENT ====================

let sessionTimeout;

function resetSessionTimer() {
    clearTimeout(sessionTimeout);
    sessionTimeout = setTimeout(() => {
        if (confirm('Session expired. Would you like to continue?')) {
            resetSessionTimer();
        } else {
            backToMainLogin();
        }
    }, 30 * 60 * 1000); // 30 minutes
}

// Add to event listeners
document.addEventListener('click', resetSessionTimer);
document.addEventListener('keypress', resetSessionTimer);

// ==================== FIREBASE TEST FUNCTION ====================

// Test your Firebase connection
async function testYourFirebaseConnection() {
    if (!database) {
        console.error('Database not initialized');
        return;
    }
    
    try {
        await database.ref('connectionTest').set({
            message: 'CBT System Connected Successfully!',
            timestamp: new Date().toISOString(),
            studentName: 'Test User',
            status: 'Active'
        });
        console.log('✅ Test data written successfully');
        showRealTimeNotification('Firebase Realtime Database is working!');
        
        // Read back the data to confirm
        const snapshot = await database.ref('connectionTest').once('value');
        const data = snapshot.val();
        console.log('✅ Data retrieved:', data);
        
        // Update status display
        updateRealTimeStatus('Connected ✓ - Real-time Active', true);
    } catch (error) {
        console.error('❌ Firebase test failed:', error);
        updateRealTimeStatus('Connection Failed ✗', false);
        alert('Firebase error: ' + error.message);
    }
}

// ==================== CLEAR DATA FUNCTIONS ====================

// Clear all students data
async function clearAllStudents() {
    if (!confirm('⚠️ WARNING: This will permanently delete ALL student records. This action cannot be undone!\n\nAre you sure you want to continue?')) {
        return;
    }
    
    if (!confirm('❌ FINAL WARNING: This will delete ALL student data including registration information. Please confirm again.')) {
        return;
    }
    
    try {
        students = [];
        
        // Clear from Firebase
        if (realTimeEnabled) {
            await database.ref('students').remove();
        }
        
        // Clear from localStorage
        localStorage.removeItem('students');
        
        // Refresh the students list
        loadStudents();
        
        showRealTimeNotification('✅ All students data has been cleared successfully');
        console.log('All students data cleared');
    } catch (error) {
        console.error('Error clearing students data:', error);
        alert('Error clearing students data: ' + error.message);
    }
}

// Clear all exam results
async function clearAllResults() {
    if (!confirm('⚠️ WARNING: This will permanently delete ALL exam results. This action cannot be undone!\n\nAre you sure you want to continue?')) {
        return;
    }
    
    if (!confirm('❌ FINAL WARNING: This will delete ALL examination results. Please confirm again.')) {
        return;
    }
    
    try {
        // Clear from Firebase
        if (realTimeEnabled) {
            await database.ref('examResults').remove();
        }
        
        // Clear from localStorage
        localStorage.removeItem('examResults');
        
        // Refresh the results view
        loadAdminResults();
        
        showRealTimeNotification('✅ All exam results have been cleared successfully');
        console.log('All exam results cleared');
    } catch (error) {
        console.error('Error clearing exam results:', error);
        alert('Error clearing exam results: ' + error.message);
    }
}

// Clear all questions for a specific class
async function clearAllQuestions() {
    const className = prompt('Enter the class to clear questions for (JSS1, JSS2, JSS3, SS1, SS2, SS3):');
    
    if (!className || !questionsDatabase[className]) {
        alert('Invalid class name or class does not exist');
        return;
    }
    
    if (!confirm(`⚠️ WARNING: This will permanently delete ALL questions for ${className}. This action cannot be undone!\n\nAre you sure you want to continue?`)) {
        return;
    }
    
    try {
        // Clear questions for the specified class
        questionsDatabase[className] = [];
        
        // Update Firebase
        if (realTimeEnabled) {
            await database.ref('questions').set(questionsDatabase);
        }
        
        // Update localStorage
        localStorage.setItem('questionsDatabase', JSON.stringify(questionsDatabase));
        
        showRealTimeNotification(`✅ All questions for ${className} have been cleared successfully`);
        console.log(`All questions cleared for ${className}`);
    } catch (error) {
        console.error('Error clearing questions:', error);
        alert('Error clearing questions: ' + error.message);
    }
}

// ==================== QUESTIONS MANAGEMENT FUNCTIONS ====================

// Show bulk upload section
function showBulkUploadSection() {
    document.getElementById('bulk-upload-section').style.display = 'block';
    document.getElementById('single-question-section').style.display = 'none';
}

// Show single question section
function showSingleQuestionSection() {
    document.getElementById('single-question-section').style.display = 'block';
    document.getElementById('bulk-upload-section').style.display = 'none';
}

// Hide both question sections
function hideQuestionSections() {
    document.getElementById('bulk-upload-section').style.display = 'none';
    document.getElementById('single-question-section').style.display = 'none';
}

// Process bulk upload of questions
async function processBulkUpload() {
    const fileInput = document.getElementById('questions-json-file');
    const className = document.getElementById('bulk-upload-class').value;
    
    if (!className) {
        alert('Please select a class');
        return;
    }
    
    if (!fileInput.files.length) {
        alert('Please select a JSON file');
        return;
    }
    
    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = async function(e) {
        try {
            const questionsData = JSON.parse(e.target.result);
            
            // Validate the questions data structure
            if (!Array.isArray(questionsData)) {
                throw new Error('Invalid format: JSON should be an array of questions');
            }
            
            // Validate each question
            for (let i = 0; i < questionsData.length; i++) {
                const question = questionsData[i];
                if (!question.question || !Array.isArray(question.options) || 
                    question.options.length !== 4 || typeof question.correct !== 'number') {
                    throw new Error(`Invalid question format at index ${i}`);
                }
            }
            
            // Add questions to the database
            if (!questionsDatabase[className]) {
                questionsDatabase[className] = [];
            }
            
            questionsDatabase[className].push(...questionsData);
            
            // Update Firebase
            if (realTimeEnabled) {
                await database.ref('questions').set(questionsDatabase);
            }
            
            // Update localStorage
            localStorage.setItem('questionsDatabase', JSON.stringify(questionsDatabase));
            
            // Clear form
            fileInput.value = '';
            document.getElementById('bulk-upload-class').value = '';
            
            hideQuestionSections();
            
            showRealTimeNotification(`✅ ${questionsData.length} questions uploaded successfully for ${className}`);
            alert(`Successfully uploaded ${questionsData.length} questions for ${className}`);
            
        } catch (error) {
            console.error('Error processing bulk upload:', error);
            alert('Error processing file: ' + error.message + '\n\nPlease check the JSON format.');
        }
    };
    
    reader.onerror = function() {
        alert('Error reading file');
    };
    
    reader.readAsText(file);
}

// Add single question
async function addSingleQuestion() {
    const className = document.getElementById('single-question-class').value;
    const questionText = document.getElementById('single-question-text').value.trim();
    const optionA = document.getElementById('option-a').value.trim();
    const optionB = document.getElementById('option-b').value.trim();
    const optionC = document.getElementById('option-c').value.trim();
    const optionD = document.getElementById('option-d').value.trim();
    const correctAnswer = parseInt(document.getElementById('correct-answer').value);
    
    // Validation
    if (!className) {
        alert('Please select a class');
        return;
    }
    
    if (!questionText) {
        alert('Please enter question text');
        return;
    }
    
    if (!optionA || !optionB || !optionC || !optionD) {
        alert('Please fill in all four options');
        return;
    }
    
    // Create question object
    const newQuestion = {
        question: questionText,
        options: [optionA, optionB, optionC, optionD],
        correct: correctAnswer
    };
    
    try {
        // Initialize class array if it doesn't exist
        if (!questionsDatabase[className]) {
            questionsDatabase[className] = [];
        }
        
        // Add the question
        questionsDatabase[className].push(newQuestion);
        
        // Update Firebase
        if (realTimeEnabled) {
            await database.ref('questions').set(questionsDatabase);
        }
        
        // Update localStorage
        localStorage.setItem('questionsDatabase', JSON.stringify(questionsDatabase));
        
        // Clear form
        document.getElementById('single-question-class').value = '';
        document.getElementById('single-question-text').value = '';
        document.getElementById('option-a').value = '';
        document.getElementById('option-b').value = '';
        document.getElementById('option-c').value = '';
        document.getElementById('option-d').value = '';
        document.getElementById('correct-answer').value = '0';
        
        hideQuestionSections();
        
        showRealTimeNotification(`✅ Question added successfully to ${className}`);
        alert('Question added successfully!');
        
    } catch (error) {
        console.error('Error adding question:', error);
        alert('Error adding question: ' + error.message);
    }
}

// ==================== AUTO-REGISTERED STUDENTS MANAGEMENT ====================

// Function to view and manage auto-registered students
function showAutoRegisteredStudents() {
    const autoRegistered = students.filter(s => s.autoRegistered);
    
    if (autoRegistered.length === 0) {
        alert('No auto-registered students found');
        return;
    }
    
    let html = `
        <div class="alert alert-info">
            <h5>Auto-Registered Students (${autoRegistered.length})</h5>
            <p>These students were automatically registered when they first logged in.</p>
        </div>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Arm</th>
                        <th>Registration Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    autoRegistered.forEach(student => {
        const date = new Date(student.created).toLocaleDateString();
        html += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.class || 'Not set'}</td>
                <td>${student.arm || 'Not set'}</td>
                <td>${date}</td>
                <td>
                    <button class="btn btn-success btn-sm convert-student-btn" data-id="${student.id}">
                        Convert to Regular
                    </button>
                    <button class="btn btn-danger btn-sm delete-auto-student-btn" data-id="${student.id}">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
    
    html += `</tbody></table></div>`;
    
    // Show in a modal or in the admin results area
    adminResults.innerHTML = html;
    
    // Add event listeners
    document.querySelectorAll('.convert-student-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const studentId = this.getAttribute('data-id');
            convertAutoRegisteredStudent(studentId);
        });
    });
    
    document.querySelectorAll('.delete-auto-student-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const studentId = this.getAttribute('data-id');
            deleteAutoRegisteredStudent(studentId);
        });
    });
}

async function convertAutoRegisteredStudent(studentId) {
    const student = students.find(s => s.id === studentId && s.autoRegistered);
    if (!student) return;
    
    delete student.autoRegistered;
    await saveStudentsToFirebase();
    loadStudents();
    showAutoRegisteredStudents();
    showRealTimeNotification(`✅ Student ${studentId} converted to regular registration`);
}

async function deleteAutoRegisteredStudent(studentId) {
    if (!confirm(`Are you sure you want to delete auto-registered student ${studentId}?`)) {
        return;
    }
    
    students = students.filter(s => !(s.id === studentId && s.autoRegistered));
    await saveStudentsToFirebase();
    loadStudents();
    showAutoRegisteredStudents();
    showRealTimeNotification(`🗑️ Auto-registered student ${studentId} deleted`);
}

// Enhanced student statistics
function showStudentStatistics() {
    const totalStudents = students.length;
    const registeredStudents = students.filter(s => !s.autoRegistered).length;
    const autoRegistered = students.filter(s => s.autoRegistered).length;
    const studentsWithClass = students.filter(s => s.class && s.arm).length;
    
    const statsHtml = `
        <div class="row mb-4">
            <div class="col-md-3">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <h5 class="card-title">Total Students</h5>
                        <h2 class="card-text">${totalStudents}</h2>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card text-white bg-success">
                    <div class="card-body">
                        <h5 class="card-title">Pre-registered</h5>
                        <h2 class="card-text">${registeredStudents}</h2>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card text-white bg-info">
                    <div class="card-body">
                        <h5 class="card-title">Auto-registered</h5>
                        <h2 class="card-text">${autoRegistered}</h2>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card text-white bg-warning">
                    <div class="card-body">
                        <h5 class="card-title">With Class/Arm</h5>
                        <h2 class="card-text">${studentsWithClass}</h2>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // You can display this in your admin panel where appropriate
    console.log('Student Statistics:', {
        totalStudents,
        registeredStudents,
        autoRegistered,
        studentsWithClass
    });
}

// Initialize real-time updates when page loads
setTimeout(() => {
    initializeRealTimeUpdates();
    testYourFirebaseConnection();
}, 2000);
