export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Use let or const here instead of var
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}