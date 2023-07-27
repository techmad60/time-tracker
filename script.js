//Data for the respective title and timeframes, gotten from the json file, then represented in an array.
const data =[
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
];
  
//Selects the respective timeframes("daily, weekly, monthly")
const timeframeButtons = document.querySelectorAll(".timeframe-button");

const buttonContainer = document.querySelector('.button-container');
const introductionText = document.querySelector('.introduction');
const originalText = introductionText.innerText.trim();
introductionText.innerText = ''; // Clear the original text

  
const avatarImage = document.querySelector('.avatar-container img');
const coverElement = document.querySelector('.cover');
const textOverlay = document.querySelector('.text-overlay');
const text = document.querySelector('.text');

//Created object "pages" and mapped keys to the DOM elements.
const pages = {
  intro: document.querySelector('.center-container'),
  main: document.querySelector('.grid-container'),
  last: document.querySelector('.rate-me-container')
}


//Created object "buttons" and mapped keys to the DOM elements.
const buttons = {
  next1Button: document.querySelector("#next-btn-one"),
  prev1Button: document.querySelector("#prev-btn-one"),
  next2Button: document.querySelector("#next-btn-two"),
  prev2Button: document.querySelector("#prev-btn-two")
  
};

function showSection(show, hide) {
  show.style.display = "grid";
  hide.style.display = "none";
};

buttons.next1Button.addEventListener("click", ()=> {
  showSection(pages.main, pages.intro)
  
});
buttons.prev1Button.addEventListener("click", ()=> {
  showSection(pages.intro, pages.main)
});
buttons.next2Button.addEventListener("click", ()=> {
  showSection(pages.last, pages.main)
  
});
buttons.prev2Button.addEventListener("click", ()=> {
  showSection(pages.main, pages.last)
});


let allowCoverClick = false;
let allowShake = false;

document.addEventListener('DOMContentLoaded', function () {
  const avatarContainer = document.querySelector('.avatar-container');

  // Function to remove the cover and text overlay
  function removeCover() {
    if (allowCoverClick) {
      coverElement.remove();
      textOverlay.remove(); // Remove the text overlay when cover is clicked
    }
  };
  textOverlay.addEventListener('click', () => {
    if (allowShake) {
      shakeImage();
      removeCover();
    }
  } )

  // Set a timer to allow cover click after 4 seconds (4000 milliseconds)
  setTimeout(() => {
    allowCoverClick = true;
    allowShake = true; // Enable shaking after 4 seconds

    // Show the text overlay after 4 seconds
    textOverlay.style.display = 'block';

    // Define an array of colors
    const colors = ['#ff8c66','#56c2e6','#ff5c7c','#4acf81','#7536d3', '#f1c65b', 
    ];
    let currentIndex = 0;

    // Function to change the text color to the next color in the array
    function changeTextColor() {
      textOverlay.style.color = colors[currentIndex];
      currentIndex = (currentIndex + 1) % colors.length;
    }

    // Set an interval to change the text color every 0.01 second
    setInterval(changeTextColor, 10);
  }, 4000);
});


// Function to shake the image
function shakeImage() {
  avatarImage.style.animation = 'vibration 0.1s';
  setTimeout(() => {
    avatarImage.style.animation = '';
  }, 100);
}



 // Add click event listener to the cover
 textOverlay.addEventListener('click', () => {
  introductionText.style.display = 'block';
  const words = originalText.split(' ');
  let delay = 0;
  words.forEach((word) => {
    setTimeout(() => {
      const wordSpan = document.createElement('span');
      wordSpan.innerText = word + ' ';
      wordSpan.classList.add('fadeInAnimation');
      introductionText.appendChild(wordSpan);
      if (word === words[words.length - 1]) {
        // If it's the last word, show the button after the animation
        setTimeout(() => {
          buttonContainer.style.display = 'block';
        }, 500);
      }
    }, delay);

    delay += 200; // Adjust the delay time (milliseconds) between each word
  });
});
    // Function to animate the icons
    function animateIcons() {
      const icons = document.querySelectorAll('.icon-container img');
      const totalIcons = icons.length;
  
      const glowDuration = 4000; // 10 seconds (adjust as needed)
  
      // Function to add the glow class to an icon and remove it from others
      function addGlowToIcon(index) {
        icons.forEach((icon, i) => {
          if (i === index) {
            icon.classList.add('glow');
          } else {
            icon.classList.remove('glow');
          }
        });
      }
  
      // Start the animation loop
      let currentIndex = 0;
  
      function animateIconLoop() {
        addGlowToIcon(currentIndex);
        currentIndex = (currentIndex + 1) % totalIcons;
        setTimeout(animateIconLoop, glowDuration / totalIcons);
      }
  
      // Start the first animation after a delay
      setTimeout(animateIconLoop, glowDuration / totalIcons);
    }
  
    // Wait for the page to load and then animate the icons
    window.addEventListener('load', animateIcons);
  
    

  
  //Function that updates values, depending on which timeframe is clicked. 
  function updateTimeframes(timeframe) {
    //Selects the current and previous elements
    const CurrenthourElements = document.querySelectorAll(".current-hour");
    const PrevioushourElements = document.querySelectorAll(".previous-hour");
    
    //Iterates and loops through every 'CurrenthourElement'
    CurrenthourElements.forEach(function (element) {
      const dataTitle = element.closest("section").getAttribute("data-title");//targets the 'data-title' attribute of the nearest section.
      const dataObject = data.find(obj => obj.title === dataTitle);//uses the find method and compares the title property of each object with dataTitle.
      
      if (dataObject && dataObject.timeframes && dataObject.timeframes[timeframe])//checks if a valid dataObject is found and if it has both the timeframes property and the selected timeframe as a key within it. 
       {
        
        const currentHours = dataObject.timeframes[timeframe].current; //if the condition in the previous step is met, this line retrieves the current hour value for the selected timeframe from the dataObject and stores it in the currentHours variable.
        element.textContent = currentHours + "hrs"; //updates the textContent property of the current element (hour element) with the currentHours value followed by the string "hrs". 
      } else {
        element.textContent = "-";
        console.log("Invalid data object or timeframe:", dataObject);//if condition isn't met, this block of code, willrun instead.
      }
    });
    
    //The same logic works here. 
    PrevioushourElements.forEach(function (element) {
      const dataTitle = element.closest("section").getAttribute("data-title");
      const dataObject = data.find(obj => obj.title === dataTitle);
  
      if (dataObject && dataObject.timeframes && dataObject.timeframes[timeframe]) {
        const previousHours = dataObject.timeframes[timeframe].previous;
        element.textContent = "Last Week - " + previousHours + "hrs";
      } else {
        element.textContent = "Last Week - -";
        console.log("Invalid data object or timeframe:", dataObject);
      }
    });
  }
  updateTimeframes("weekly");//The weekly timeframe, is the default.
  
  //loops over every timeframe Element
  timeframeButtons.forEach((button) => {
    button.addEventListener("click", ()=> {
      const timeframe = button.id; //gets the id "" content of the timeframes, and assigns it to timeframe.
      updateTimeframes(timeframe); //
      updateActiveButton(button)
    });

  });
 
  function updateActiveButton(clickedButton) {
    // Remove 'active' class from all timeframe buttons
    document.querySelectorAll(".timeframe-button").forEach(function(button) {
      button.classList.remove("active");
    });
  
    // Add 'active' class to the clicked button
    clickedButton.classList.add("active");
  }

    // Add click event listener to the stars
    const stars = document.querySelectorAll('.star-container i');
const textContainer = document.querySelector('.text-container');

let rating = 0; // To keep track of the number of stars clicked

// Function to handle star click
function handleStarClick(event) {
  const starIndex = parseInt(event.target.dataset.starIndex);

  // If the first star is already active, unclick it
  if (starIndex === 1 && rating === 1) {
    stars[0].classList.remove('fas');
    stars[0].classList.add('far');
    rating = 0;
    textContainer.textContent = "Your feedback is important" + "🖐" ;
  } else {
    // Update the rating
    rating = starIndex;

    // Change the color of the stars to golden
    stars.forEach((star, index) => {
      if (index < starIndex) {
        star.classList.remove('far');
        star.classList.add('fas');
      } else {
        star.classList.remove('fas');
        star.classList.add('far');
      }
    });

    // Update the text based on the rating
    switch (rating) {
      case 1:
        textContainer.textContent = "Ouchh, I'll do better" + "🤕" ;
        break;
      case 2:
        textContainer.textContent = "Why not a three?" + "😶" ;
        break;
      case 3:
        textContainer.textContent = "Thank you, I feel encouraged" + "😎" ;
        break;
      case 4:
        textContainer.textContent = "Wow!! A four, for me?" + "🤭" ;
        break;
      case 5:
        textContainer.textContent = "Ooo lala!!!, thanks mate!" + "😊" ;
        break;
      default:
        textContainer.textContent = "Your feedback is important" + "🖐" ;
        break;
    }
  }
}

// Add click event listener to each star
stars.forEach((star) => {
  star.addEventListener('click', handleStarClick);
});

   
    
    
    
    
    
    
    
  
  