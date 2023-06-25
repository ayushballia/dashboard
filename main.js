Array.from(document.querySelectorAll(".nav-link"))
.map(x => x.addEventListener("click", 
  function(e){
    Array.from(document.querySelectorAll(".nav-link"))
    .map(x => x.classList.remove("active"));
    e.target.classList.add("active");    
  }
));


// function showTimeline(){
//     console.log("clicked");
//     var timeline = document.getElementById('timeline');
//     if (timeline.style.display === "none") {
//         timeline.style.display = "block";
//         } else {
//             timeline.style.display = "none";
//         }

// }

// function showUserProfile(){
//     console.log("clicked");
//     var userProfile = document.getElementById('user-profile');
//     if (userProfile.style.display === "none") {
//         userProfile.style.display = "block";
//         } else {
//             userProfile.style.display = "none";
//         }

// }