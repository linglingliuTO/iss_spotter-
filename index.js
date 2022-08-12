const {nextISSTimesForMyLocation} = require('./iss');


/*fetchMyIP((error, ip) => {
  if (error) {
    console.log("it didn't work!", error);
    return; 
  }
console.log( 'it worked! returned IP:' , ip);

});

const ip = '174.95.65.135'
fetchCoordsByIP(ip, (error, coordinates) => {
  if (error) {
    console.log("it didn't work!", error);
    return; 
  }
console.log( 'it worked! coordinates:' , coordinates);


})


let coords  = { latitude: '49.27670', longitude: '-123.13000' }
fetchISSFlyOverTimes(coords, (error, result) => {
  if (error) {
    console.log("it didn't work!", error);
    return; 
  }
console.log( 'ISS fly over times:' , result);


})

*/
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

