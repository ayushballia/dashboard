// chart===========

const quarter = document.getElementById("myChart1").getContext("2d");

const myChart1 = new Chart(quarter, {
  type: "line",
  data: {
    labels: [
      "jan",
      "Feb",
      "March",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        data: [550, 500, 400, 550, 475, 400, 350, 470, 500, 550],
        backgroundColor: "#69AE6D",
        color: "#69AE6D",
        option: {
          responsive: false,
        },
      },
    ],
  },
});

//end chart===========

// ======chartdays=====

const days = document.getElementById("myChart2").getContext("2d");

const myChart2 = new Chart(days, {
  type: "line",
  data: {
    labels: ["12pm", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
    datasets: [
      {
        data: [0, 400, 700, 1000, 1300, 1500, 1800, 2000],
        backgroundColor: "red",
        color: "#69AE6D",
        option: {
          responsive: false,
        },
      },
    ],
  },
});

// ======chartdays=====

// charttaxes===============

const taxes = document.getElementById("vehicle").getContext("2d");
const vehicle = new Chart(taxes, {
  type: "bar",
  data: {
    labels: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
    datasets: [
      {
        data: [
          80, 140, 120, 50, 60, 130, 50, 130, 150, 100, 120, 140, 50, 110, 150,
        ],
    backgroundColor: "red",
      },
      {
        data: [
          80, 140, 120, 50, 60, 130, 50, 130, 150, 100, 120, 140, 50, 110, 150,
        ],
        backgroundColor: "blue",
      },
    ],
  },
});

//End  charttaxes===============

// chartYears

const years = document.getElementById("myChart3").getContext("2d");
const myChart3 = new Chart(years, {
  type: "line",
  data: {
    labels: [
      "jan",
      "Feb",
      "March",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        data: [55, 50, 40, 55, 47.5, 40, 35, 47, 50, 55],
        backgroundColor: "rgb(185, 146, 18)",
        color: "#69AE6D",
        option: {
          responsive: false,
        },
      },
    ],
  },
});

// chartYears end

// emailStatics

const year = document.getElementById("emailStatics").getContext("2d");
const emailStatics = new Chart(year, {
  type: "doughnut",
  data: {
    labels: ["jan", "feb"],
    datasets: [
      {
        data: [55, 50],
        backgroundColor: "rgb(185, 146, 18)",
        color: "#69AE6D",
        option: {
          responsive: false,
        },
      },
    ],
  },
});

//end  emailStatics

// =====datepicker====

// =====datepicker====
