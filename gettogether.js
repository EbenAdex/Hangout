// Function to generate the invitation message
function inviteUserToClassGetTogether() {
    const userName = document.getElementById("userName").value;
    const date = "Friday, December 20th, 2024";
    const time = "12:00 PM";
    const location = "Ayomiposi house";
    const activities = ["Games", "Music", "football game(ps4)", "Reconnecting"];
    const foodAndDrinks = ["Alcohol", "sides", "Snacks", "soft-drinks"];
  
    const invitationMessage = `
      Hi ${userName},
  
      You are cordially invited to Class-18 Get-Together!
  
      Details of the Hangout:
      - Date:${date}
      - Time: ${time}
      - Location: ${location}
      - Activities: ${activities.join(', ')}
      - Food and Drinks: ${foodAndDrinks.join(', ')}
  
      Come and reconnect with old friends, make memories, and have a great time. We can't wait to see you there!
  
      Best regards,
      Class Organizers
    `;
  
    document.getElementById("invitationMessage").innerText = invitationMessage;
  }
  
  
  
  console.log(exampleHTML);
  
