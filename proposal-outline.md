*** Isaac Steinberg / 7/11/17 ***

# Treasure Box Proposal
http://treasure-box.bitballoon.com/

## What is [Treasure Box]?

(Brief description of the game, why you're choosing to make it)

The game it a treasure hunt game. The objective is to discover the hidden object, the 'marsh-mellow' on a 2d-plane. The player's 'metal detector' will reveal the object when it overlaps with it using the mouse cursor to navigate. The 'r'-key hides the instructions and will hide the visibility of the marsh-mellow if found. '⌘r' with refresh the page and reset the march-mellow location.


## Wireframe

(Your wireframes go here. Preferably two or more)

'./wireframe - treasure box.jpg'


## Initial thoughts on game structure

(Write out what challenges you expect to encounter, or ideas you want to come up with)

I have to figure out how I would like to hide the 'Treasure Box' <div> and then how to reveal it. Also, which constraints I would like to put on the game, such as time limits and how many objects to hide.

## Phases of Completion

(The steps or phases you expect to go through, and the tasks that you'll need to accomplish to reach each step. These should resemble the acceptance criteria we were working through earlier.)

Phase -2
  -game board display
        _-display game rules and then fade off screen_
  -add hidden treasure <div> in random spot under game-board <div>
  -add 'metal detector' <div> in center of the game-board

Phase -1
  -prompt user to move metal detector until object is found
        _-maybe setInterval to smooth movement and use mouse position too_
  -metal detector becomes redder as it gets closer to hidden object

Phase 0
  -user interfaces with keyboard keys to move metal detector over game board

Phase 1
  -once hidden treasure <div> is detected and overlaid by the metal detector <div>, the treasure layer surfaces (maybe use pseudoclass hidden/shown)
  -point is added to treasure hunt score with time noted
  -reset game layout and update score

## Unsolved Problems

-need to make the heatmapping more accurate
-maybe add a score
-auto-hide the marsh-mellow after a set interval


## Links and Resources

(Anything you've looked up so far or are thinking about using.)


<!--
https://developer.mozilla.org/
https://css-tricks.com/
http://stackoverflow.com/
https://git.generalassemb.ly/nyc-wdi-ada/div-racer/
https://www.w3schools.com/
-->