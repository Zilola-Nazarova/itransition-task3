import chalkAnimation from 'chalk-animation';
import sleep from '../helpers/sleep.js';

const exit = async () => {
  const seeYou = chalkAnimation.rainbow('\nSee you next time...');
  await sleep();
  seeYou.stop();
  console.log('Bye!');
};

export default exit;
