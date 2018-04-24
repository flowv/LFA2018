//Get the centerpoint of multiple vectors
function centerPT(vectorarray) {
  let point = createVector(0, 0, 0);
  for (let i = 0; i < vectorarray.length; i++) {
    point.add(vectorarray[i]);
  }
  let midpoint = createVector(point.x / (vectorarray.length), point.y / (vectorarray.length), point.z / (vectorarray.length))
  return midpoint;
}

//Draws a path along PVectors
function drawPath2D(vectorarray, status) {
  beginShape();
  for (let i = 0; i < vectorarray.length; i++) {
    vertex((vectorarray[i].x), (vectorarray[i].y));
  }
  endShape(status);
}

//Takes an ARRAY and transforms it into an Array of Vectors
function createVectorArray(arrayNum) {
  let arr = [];
  let vec;
  for (let i = 0; i < arrayNum.length; i++) {
    vec = createVector(arrayNum[i][0], arrayNum[i][1], arrayNum[i][2]);
    append(arr, vec);
  }
  return arr;
}

//Takes a TABLE and transforms it into an Array of Vectors
function createVectorArrayFromTable(table) {
  let arr = [];
  for (let i = 0; i < table.getRowCount(); i++) {
    let row = table.getRow(i);
    let vec = createVector(row.getNum("X"), row.getNum("Y"), row.getNum("Z"));
    append(arr, vec);
  }
  return arr;
}

// Draws Point Style CROSS
function point_Cross(vector, size) {
  line(vector.x, vector.y, vector.z, vector.x, vector.y + size, vector.z);
  line(vector.x, vector.y, vector.z, vector.x, vector.y - size, vector.z);
  line(vector.x, vector.y, vector.z, vector.x + size, vector.y, vector.z);
  line(vector.x, vector.y, vector.z, vector.x - size, vector.y, vector.z);
  line(vector.x, vector.y, vector.z, vector.x, vector.y, vector.z + size);
  line(vector.x, vector.y, vector.z, vector.x, vector.y, vector.z - size);
}

// Draws Point Style CIRCLE
function draw3DCircle(vector, size) {
  push();
  translate(vector.x, vector.y, vector.z);
  ellipse(0, 0, size);
  pop();
}

//Draws Compass for Orientation
function compass(vector,size) {
  push();
  translate(vector.x, vector.y, vector.z);
  strokeWeight(1);
  stroke(255, 32, 0);
  line(0, 0, 0, size, 0, 0);
  stroke(32, 255, 32);
  line(0, 0, 0, 0, size, 0);
  stroke(0, 32, 255);
  line(0, 0, 0, 0, 0, size);
  pop();
}

//Sets Color, Linethickness, Fill, etc.
function setStyle(style) {
  strokeWeight(style.stroke_weight);
  stroke(color(style.strokecolor));
  if (style.stroke == false) {
    noStroke()
  }
  fill(color(style.fillcolor));
  if (style.fill == false) {
    noFill()
  }
}
