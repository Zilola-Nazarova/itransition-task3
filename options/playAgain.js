import inquirer from 'inquirer';

const playAgain = async (again = false) => {
  console.log();
  const answers = await inquirer.prompt({
    name: 'play',
    type: 'confirm',
    message: `Do you want to play ${again ? 'again' : ''}? (y/n)`,
  });
  return answers.play;
};

export default playAgain;
