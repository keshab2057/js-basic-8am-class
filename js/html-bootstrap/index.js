//  write a js library that greets user based on the time of the day using date object and greeting object
// eg:const greetings={
//   morning:"Good morning",5am to 12pm
//   afternoon:good afternoon,12pm to 5pm
//   evining:"good evining",after 5pm
// }

const greetUser = () => {
  // Get the current hour from the Date object
  const currentHour = new Date().getHours();

  // Define the greetings object
  const greetings = {
    morning: "Good morning", // 5am to 12pm
    afternoon: "Good afternoon", // 12pm to 5pm
    evening: "Good evening", // after 5pm
  };

  // Determine the appropriate greeting based on the current hour
  let greeting;
  if (currentHour >= 5 && currentHour < 12) {
    greeting = greetings.morning;
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = greetings.afternoon;
  } else {
    greeting = greetings.evening;
  }

  // Display the greeting to the user
  console.log(greeting);
};

// Call the greetUser function to display the greeting
greetUser();
