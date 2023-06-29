// const data =[
//   {
//     "title": "Work",
//     "timeframes": {
//       "daily": {
//         "current": 5,
//         "previous": 7
//       },
//       "weekly": {
//         "current": 32,
//         "previous": 36
//       },
//       "monthly": {
//         "current": 103,
//         "previous": 128
//       }
//     }
//   },
//   {
//     "title": "Play",
//     "timeframes": {
//       "daily": {
//         "current": 1,
//         "previous": 2
//       },
//       "weekly": {
//         "current": 10,
//         "previous": 8
//       },
//       "monthly": {
//         "current": 23,
//         "previous": 29
//       }
//     }
//   },
//   {
//     "title": "Study",
//     "timeframes": {
//       "daily": {
//         "current": 0,
//         "previous": 1
//       },
//       "weekly": {
//         "current": 4,
//         "previous": 7
//       },
//       "monthly": {
//         "current": 13,
//         "previous": 19
//       }
//     }
//   },
//   {
//     "title": "Exercise",
//     "timeframes": {
//       "daily": {
//         "current": 1,
//         "previous": 1
//       },
//       "weekly": {
//         "current": 4,
//         "previous": 5
//       },
//       "monthly": {
//         "current": 11,
//         "previous": 18
//       }
//     }
//   },
//   {
//     "title": "Social",
//     "timeframes": {
//       "daily": {
//         "current": 1,
//         "previous": 3
//       },
//       "weekly": {
//         "current": 5,
//         "previous": 10
//       },
//       "monthly": {
//         "current": 21,
//         "previous": 23
//       }
//     }
//   },
//   {
//     "title": "Self Care",
//     "timeframes": {
//       "daily": {
//         "current": 0,
//         "previous": 1
//       },
//       "weekly": {
//         "current": 2,
//         "previous": 2
//       },
//       "monthly": {
//         "current": 7,
//         "previous": 11
//       }
//     }
//   }
// ];

//   const timeframeButtons = document.querySelectorAll(".timeframe-button");
//   const hourElements = document.querySelectorAll(".hour");
//   const previousElements = document.querySelectorAll(".previous");

//   document.getElementById("daily").addEventListener("click", function() {
//     console.log("Daily button clicked");
//   });
  
//   document.getElementById("weekly").addEventListener("click", function() {
//     console.log("Weekly button clicked");
//   });
  
//   document.getElementById("monthly").addEventListener("click", function() {
//     console.log("Monthly button clicked");
//   });
  


//   function updateTimeframes(timeframe) {
//     const hourElements = document.querySelectorAll(".hour");
//     const previousElements = document.querySelectorAll(".previous");
  
//     hourElements.forEach(function (element) {
//       const dataTitle = element.closest("section").getAttribute("data-title");
//       const dataObject = data.find(obj => obj.title === dataTitle);
  
//       if (dataObject && dataObject.timeframes && dataObject.timeframes[timeframe]) {
//         const currentHours = dataObject.timeframes[timeframe].current;
//         element.textContent = currentHours + "hrs";
//       } else {
//         element.textContent = "-";
//         console.log("Invalid data object or timeframe:", dataObject);
//       }
//     });
  
//     previousElements.forEach(function (element) {
//       const dataTitle = element.closest("section").getAttribute("data-title");
//       const dataObject = data.find(obj => obj.title === dataTitle);
  
//       if (dataObject && dataObject.timeframes && dataObject.timeframes[timeframe]) {
//         const previousHours = dataObject.timeframes[timeframe].previous;
//         element.textContent = "Last Week - " + previousHours + "hrs";
//       } else {
//         element.textContent = "Last Week - -";
//         console.log("Invalid data object or timeframe:", dataObject);
//       }
//     });
//   }
//   updateTimeframes("weekly");
//   timeframeButtons.forEach((button) => {
//     button.addEventListener("click", ()=> {
//       const timeframe = button.id;
//       updateTimeframes(timeframe);
//     });
//     console.log(timeframeButtons)
//   });

//   // document.addEventListener("DOMContentLoaded", () => {
//   //   // Your code here
//   //   daily.addEventListener("click", () => {
//   //     console.log("clicked");
//   //   });
//   // });
const daily = document.querySelector("#daily")
console.log(daily)
const weekly = document.querySelector("#weekly")
console.log(weekly)
const monthly = document.querySelector("#monthly")
console.log(monthly)

daily.addEventListener("click", ()=> {
  console.log("boy clicked")
})

