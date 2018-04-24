function walk(vectorArray) {
  this.vArray = vectorArray;
  this.vLerp = [];

  // draws a static path
  this.path2D = function(status) {
    beginShape();
    noFill();
    for (let i = 0; i < this.vArray.length; i++) {
      vertex((this.vArray[i].x), (this.vArray[i].y), (this.vArray[i].z));
    }
    endShape(status);
  }

  //draws static points
  this.vertex = function(size) {
    for (let i = 0; i < this.vArray.length; i++) {
      point_Cross(this.vArray[i], size);
    }
  }

  // not working
  this.animation = function(steps) {
    let step = 0;
    for (let i = 0; i < this.vArray.length - 1; i++) {
      let pt1 = this.vArray[i];
      let pt2 = this.vArray[i + 1];
      if (step <= steps) {
        let pt3 = p5.Vector.lerp(pt1, pt2, (1 / steps) * step);
        // append(points, pt3);
        point(pt3.x, pt3.y);
        step = step + 1;
      } else {
        step = 0
      }
    }
  }
  // divide Path in Step Length
  this.dividePath = function(target_step_length) {
    let path_division_percentages = [];
    let pathPTS = [];
    let segments_PTS = [];
    let division_PT;
    for (let i = 0; i < this.vArray.length - 1; i++) {
      let segment_division_percentages = [];
      let divisionSegmentPTs = [];
      let startPT = this.vArray[i];
      let endPT = this.vArray[i + 1];
      let distance = startPT.dist(endPT);
      let amount_of_steps = round(distance / target_step_length);
      let step_lenght = distance / amount_of_steps;
      let percentage_of_step_length = (step_lenght / distance);
      for (let u = 0; u < amount_of_steps; u++) {
        append(segment_division_percentages, percentage_of_step_length * u);
        console.log("the array of percentges " + segment_division_percentages);
        division_PT = p5.Vector.lerp(startPT, endPT, (percentage_of_step_length * u));
        point(division_PT.x, division_PT.y, division_PT.z);
        // textFont(this.font);
        // textSize(10);
        // text(u, division_PT.x+10, division_PT.y+10);
        console.log("the division_PT is: " + division_PT);
        append(segments_PTS, division_PT);
      }
      append(path_division_percentages, segment_division_percentages);
      append(pathPTS, segments_PTS);
    }
  }

  // draws static HeartBeat
  this.heartBit = function () {
    let intensity = 30;
    for (let i = 0; i < this.vArray.length; i++) {
      line(this.vArray[i].x, this.vArray[i].y, this.vArray[i].z, this.vArray[i].x, this.vArray[i].y, this.vArray[i].z + intensity);
    }
  }

}
