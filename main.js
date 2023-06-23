function showTimeline(){
    console.log("clicked");
    var timeline = document.getElementById('timeline');
    if (timeline.style.display === "none") {
        timeline.style.display = "block";
        } else {
            timeline.style.display = "none";
        }

}

function showUserProfile(){
    console.log("clicked");
    var userProfile = document.getElementById('user-profile');
    if (userProfile.style.display === "none") {
        userProfile.style.display = "block";
        } else {
            userProfile.style.display = "none";
        }

}