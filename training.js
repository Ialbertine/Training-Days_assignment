// Move random variable inside getRandEvent function
// getRandEvent() function selects an event at random
const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
  
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
  
  const getTrainingDays = event => {
    let days;
  
    if (event === 'Marathon') {
      days = 50;
    } else if (event === 'Triathlon') {
      days = 100;
    } else if (event === 'Pentathlon') {
      days = 200;
    }
  
    return days;
  };

  let myName = 'Nala';
  
  
  const logEvent = (myName, myEvent) => {
    console.log(`${myName}'s event is: ${myEvent}`);
  };
  
  const logTime = (myName, days) => {
    console.log(`${myName}'s time to train is: ${days} days`);
  };
  
  const myEvent = getRandEvent();
  const days = getTrainingDays(myEvent);
  
  // Pass name as the first argument to logEvent() and logTime()
  logEvent(myName, myEvent);
  logTime(myName, days);
  
  // Test with another competitor
  const event2 = getRandEvent();
  const days2 = getTrainingDays(event2);
  const name2 = 'Warren';
  
  logEvent(name2, event2);
  logTime(name2, days2);
  