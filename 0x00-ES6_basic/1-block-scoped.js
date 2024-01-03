export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* Use let to avoid overwriting the outer variables */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }
  /* enable variables */

  return [task, task2];
  }
