//CSV Files
let walk01;
let walk_01_vectors;
// Walks
let walk_01;
let walk_02;
let walk_03;
let walk_04;
let walk_05;
let walk_06;
// Scene Setup
let easycam;
let orbit_center;

function preload() {
  walk01 = loadTable('Walk_01.csv', 'csv', 'header');
  walk02 = loadTable('Walk_02.csv', 'csv', 'header');
  walk03 = loadTable('Walk_03.csv', 'csv', 'header');
  walk04 = loadTable('Walk_04.csv', 'csv', 'header');
  walk05 = loadTable('Walk_05.csv', 'csv', 'header');
  walk06 = loadTable('Walk_06.csv', 'csv', 'header');
  buildings = loadModel('Buildings.obj')
}

function setup() {
  //Scene Setup
  createCanvas(windowWidth, windowHeight, WEBGL);
  pixelDensity(1);
  setAttributes('antialias', true);
  orbit_center = createVector(-3279.917411, 6683531.031, 0);
  easycam = new Dw.EasyCam(this._renderer, {
    distance: 4200,
    center: [orbit_center.x, orbit_center.y, orbit_center.z],
    rotation: [-0.4062399521611455, 0.2934706782748305, -0.6133834150290596, -0.36126259339728]
  });
  perspective(radians(27), width / height, 1, 50000);
  easycam.setRotationConstraint(true, true, false);

  walk_01_vectors = createVectorArrayFromTable(walk01);
  walk_02_vectors = createVectorArrayFromTable(walk02);
  walk_03_vectors = createVectorArrayFromTable(walk03);
  walk_04_vectors = createVectorArrayFromTable(walk04);
  walk_05_vectors = createVectorArrayFromTable(walk05);
  walk_06_vectors = createVectorArrayFromTable(walk06);

  walk_01 = new walk(walk_01_vectors);
  walk_02 = new walk(walk_02_vectors);
  walk_03 = new walk(walk_03_vectors);
  walk_04 = new walk(walk_04_vectors);
  walk_05 = new walk(walk_05_vectors);
  walk_06 = new walk(walk_06_vectors);
}

function draw() {
  background(5, 5, 5);

  compass(orbit_center,300);




  setStyle(style_walk_1);
  walk_01.path2D();
  setStyle(style_point_white);
  walk_01.vertex(5);
  walk_01.heartBit();
  setStyle(style_walk_1);
  walk_02.path2D();
  walk_03.path2D();
  setStyle(style_walk_2);
  walk_04.path2D();
  walk_05.path2D();
  walk_06.path2D();

  setStyle(style_buildings);
  push();
  translate(0,0,-10);
  model(buildings);
  pop();
  }
