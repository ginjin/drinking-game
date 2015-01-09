playGame();


// ======================================
// Functions
// ======================================

/**
 * Tells you if the number you entered is equal
 * to the secret number
 *
 * @param integer guessNumber
 * @param integer secretNumber
 * @return string
 */
function compareGuessNumberToSecretNumber(guessNumber, secretNumber)
{
  // if guessed number too high or too low return have a drink
  if (guessNumber>getMaxNumber() || guessNumber < 1)
  {
    return "Penalty! Finish your drink! Your number must be between 1 and " + getMaxNumber() + ".";
  }
  // if the guessed number is wrong return secret number
  if (guessNumber<secretNumber || guessNumber>secretNumber)
  {
    return guessNumber + ". No drink for you. The secret Number is " + secretNumber + ".";
  }

  // otherwise the guessed number equals the secret number return winner
  return guessNumber + " Oh no! Have a drink!";

}

/**
 * Plays the game
 *
 * @return void
 */

function playGame()
{
  console.log( compareGuessNumberToSecretNumber(getTheFirstArgument(), getSecretNumber()));
}

/**
 * Gets the secret number for the game
 *
 * @return integer
 */
function getSecretNumber()
{
  return generateRandomNumber1to4();
}


/**
 * Returns the first commmand line argument
 *
 * @return string
 */
function getTheFirstArgument()
{
  return process.argv[2];
}

/**
 * Gets a random secret number between 1 and 5 for the game
 *
 * @return integer
 */
function generateRandomNumber1to4 ()
{
  return Math.round(Math.random() * (getMaxNumber()-1)) + 1;
}

/**
 * Sets max. number in the game
 *
 * @param integer
 */
function getMaxNumber()
{
  return 3;
}
