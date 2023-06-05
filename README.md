# Q-and-A
    - description : question and answer platform to take test

## Product Overview:
    -1 create a  data structure(array of objects) :
            const quizQuestions = [
                {
                    que : 'who is bill gates',
                    opt : ['lawyer', 'business man', 'doctor', 'programmer']
                    ans : 1
                }
            ]
    -2 storing all the questions to local storage
        -To make the questions available offline
        -to enable fast load

    -3 display first question

    -4 loop through the options and create an option paragraph
        <p class="opt">Bill Gates</p>

    -5 add eventlistener to the paragraph
    (ifquestionindex > array.length)
        -moves to next question when clicked
        - questionindex++
        --score++ if correct
    (ifquestionindex < array.length)
        - display finall result
    



    
## Key Features:
    List the main features and functionalities of the product.

## Project Overview:
    Briefly describe the project and its purpose.
    Include any important background information or context.

## Technologies Used:
    List the main technologies, frameworks, and tools used in the project.

## Development Setup:
    Explain how to run the project locally.

## Features:
    -you will have 15s for each question
    - after 15s the question moves to next even without being answered
    -you cannot go back to the previous question
    - you are allowed to move to the next question without answering the current
    - you score will be calcuulate at the end of the quiz
    - you will be notified if you passed or failed
    - you can end the quiz at the middle and the score is calculated
    - 


## Resources and References:
    List any external resources or references used during development.

## colours and style guild 
   # FONT
    -font-family: 'Overpass', sans-serif; -----TEXT
    -font-family: 'Ubuntu', sans-serif;   -----LOGO

   # COLOR
       - Text Color:
        For most of the text content, you can use black (#212121) or a slightly lighter shade like dark blue (#1976D2) for better legibility. Use white (#FFFFFF) for text that needs to stand out on a dark background.
        
        - Navigation Bar (Nav) Color:
        You can use the main color (#2196F3) for the background of the navigation bar to make it prominent. For the text or icons within the navigation bar, use white (#FFFFFF) for good contrast.
        
        - Button Color:
        Use the accent colors from the palette, such as deep blue (#1976D2) or sky blue (#64B5F6), for button backgrounds. Ensure that the button text color provides enough contrast against the chosen background color. For example, if the button background is deep blue, use white (#FFFFFF) for the text color.
        
        - Background Color:
        You can opt for a light blue shade (#E3F2FD) as the background color of your web application to create a fresh and clean look. Ensure that the text and other elements on this background have sufficient contrast for readability.



