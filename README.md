# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Chanel Zeng

Time spent: **#** hours spent in total

Link to project: https://glitch.com/edit/#!/chanel-zeng-simon

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Styled start/stop button

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://i.imgur.com/40xBWBU.gif)
![](https://i.imgur.com/MCVOlCX.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

Stack Overflow, MDN, w3schools

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

Although I have some experience with JavaScript, the language is still new and a little confusing to me. It isn’t as strict as Java, for example, and sometimes the code is hard to understand, like event handlers, passing events as arguments, considering timing and delays, etc. To be specific, I ran into some issues with creating the mistake counter because it would not update to the correct number before the user lost the game. The mistake counter would stay at 2 when the alert box popped up, and only after I closed the box it would update. I wasn’t sure why this was happening because I called my updateMistake function before calling lostGame, so the mistake text should have been updated to 3 before the alert! I figured I could fix this by delaying the call to lostGame using setTimeout because I thought the alert box was faster than the update to mistake’s innerHTML. However, the problem persisted even after delaying for 1000 to 5000 milliseconds. After more research and debugging, I realized my error was calling lostGame when I passed it into setTimeout (setTimeout(lostGame(), delay)). I only needed to pass the function name, and the 3 strikes functionality ended up working. I struggled a lot with the aspect of code running against a clock, and always having to be aware of what part of the code is being run with respect to a certain time. This problem comes up in the playClueSequence function as well, so I’m glad we were guided through that example!

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Web development is an immensely useful tool to have; you can express your creativity and build impactful projects. This project has only touched the surface of that through HTML, CSS, and vanilla JavaScript. I’m extremely intrigued in how web applications integrate back-end code with front-end code, such as using algorithms and APIs. A lot of useful code has already been written and documented, and I am wondering how to take advantage of this so that I don’t have to build projects from scratch. Additionally, many websites collect and analyze data in databases, and I would like to learn how to connect my applications to a database. I’ve worked on projects where I analyze data to create machine learning models and create data visualizations, so learning about databases would be really useful! This brings me to another curious point, the cloud! I know there are some databases in the cloud, such as Google’s Firebase/Firestore, and a lot of data is put on the cloud now. What is the cloud, and how does it work? This project has only scratched the surface of web development and I would love to dive deeper.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours, I would try and finish implementing the timer so that the user has limited time to make their guesses each turn. I had a lot of trouble trying to use setInterval and clearInterval and researched methods on creating a timer using Stack Overflow and other websites. Specifically, I wasn’t sure how to decrement the timer during the repeated calls in setInterval; my timer stayed at the same number throughout the game. I would also like to add a different play mode where there are unlimited rounds and the user has to repeat the pattern for as long as they can. Based on the nature of this mode, I would add a leaderboard to rank different users, which would require use of a database/server. I’m excited to learn how to integrate front-end, back-end, and the database to create not only games but other cool web applications!



## License

    Copyright Chanel Zeng

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.