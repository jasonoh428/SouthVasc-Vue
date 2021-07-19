export const sliderControls = (current, length, dir) => {
  let adjustedLength = length - 1;

  //Move Up Normally
  if (dir == 1 && current < adjustedLength) {
    return (current += 1);
  }

  //Going backwards at 0
  else if (dir === -1 && current === 0) {
    return adjustedLength;
  }

  //At End going back to zero
  else if (dir === 1 && current === adjustedLength) {
    return 0;
  }

  //Decrease normally
  else if (dir === -1 && current !== 0) {
    return (current += -1);
  }
};

export default {}
