
const graph= document.getElementById('lineChart');

const lineChart=new Chart(graph, {
  type:"line",
  data:{
      labels:["jan","Feb","March","Apr","May","Jun","Jul","Aug","Sep","Oct"],
      datasets:[{
          data:[520,420,530,400,600,610],
          backgroundColor:"rgb(185, 146, 18)",
          color:"#69AE6D",
           option:{
              responsive:false,
           }      
      }
      ]
  }  
});


const graph2= document.getElementById('pointChart');

const pointChart=new Chart(graph2, {
  type:"line",
  data:{
      labels:["6pm","9pm","11pm","2am","4am","6am","8am"],
      datasets:[{
          data:[200,250,300,350,290,340,400],
          backgroundColor:"rgb(185, 146, 18)",
          color:"#69AE6D",
           option:{
              responsive:false,
           }      
      }
      ]
  }  
});

const graph3= document.getElementById('barGraph');
const barGraph=new Chart(graph3, {
  type:"bar",
  data:{
      labels:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      datasets:[{
          data:[100,130,80,100,90,130,110,100,80,110,140,145,140,130,140,70,100,80,120,130],
          backgroundColor:"#00a99d",
          color:"#69AE6D",
           option:{
              responsive:false,
           }      
      }
      ]
  }  
});

const graph4= document.getElementById("twoGraph").getContext("2d");
const twoGraph= new Chart(graph4,{
    type:"bar",
    data:{
        labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        datasets:[{
            data:[80,140,50,120,50,150,60,130,50,130,150,100,120,140,50,140,50,130,120,150],
            backgroundColor:"red"
        },{
            data:[80,140,50,120,50,150,60,130,50,130,150,100,120,140,50,140,50,130,120,150],
            backgroundColor:"green"
        },
        {
        }
        ],
},   
});

const graph5= document.getElementById("dough").getContext("2d");
const dough= new Chart(graph5,{
    type:"doughnut",
    data:{
        labels:['blue','cyan','green'],
        datasets:[{
            data:[300,200,100],
            backgroundColor:['blue','cyan','green'],
        }
       
        ],
},   
});