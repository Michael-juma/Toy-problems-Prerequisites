function checkSpeed(speed) {
    let speedLimit = 70;
    let demeritPoints = 0;
  
    if (speed <= speedLimit) {
      console.log("Ok");
    } else {
      demeritPoints = Math.floor((speed - speedLimit) / 5);
      if (demeritPoints > 12) {
        console.log("License suspended");
      } else {
        console.log("Points:", demeritPoints);
      }
    }
  }
  
  
  checkSpeed(80);  
  checkSpeed(120); 
  