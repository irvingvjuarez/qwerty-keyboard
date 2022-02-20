let y = -1, x;

// here the coordinates are created
GRID.forEach((row) => {
  x = -1;
  y++;
  row.forEach((cell) => {
    x++;
    COORDINATES[cell] = [x, y];
  });
});

function getStr(axis, value) {
  const dimension = axis === "x" ? ["right ", "left "] : ["down ", "up "];
  let result;
  if (value > 0) {
    result = dimension[0].repeat(value);
  } else if (value < 0) {
    result = dimension[1].repeat(value * -1);
  } else {
    result = "";
  }
  return result;
}

function toHumanFriendly(path) {
  let result = "", xAxisStr, yAxisStr
  for (let step of path) {
    xAxisStr = getStr("x", step[0]);
    yAxisStr = getStr("y", step[1]);
    result += xAxisStr + " " + yAxisStr + "enter "
  }
  return result
}

function tracePath(downKeys) {
  const path = [];
  downKeys = [START, ...downKeys];
  for (let i = 0; i < downKeys.length - 1; i++) {
    let xAxis = downKeys[i + 1][0] - downKeys[i][0];
    let yAxis = downKeys[i + 1][1] - downKeys[i][1];
    path.push([xAxis, yAxis]);
  }
  return path;
}

function printWord(word) {
  RESULT_CONTAINER.textContent = ""
  word = word.split("");
  const keys = word.map((letter) => COORDINATES[letter]);
  const path = tracePath(keys);
  const recipe = toHumanFriendly(path);

  // The last 2 functions below are in the magic-keyboard file
  const DOMKeys = getDOMKeys(recipe.trim())
  type(DOMKeys)
}