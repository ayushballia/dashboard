function showTimeline(){
    console.log("clicked");
    var timeline = document.getElementById('timeline');
    if (timeline.style.display === "none") {
        timeline.style.display = "block";
        } else {
            timeline.style.display = "none";
        }

}