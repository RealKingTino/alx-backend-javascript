export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  /* Use let to avoid overwriting the outer variables */
  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }
