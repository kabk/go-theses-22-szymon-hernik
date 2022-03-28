$(document).ready(function() {

// functions go here

// element.scroll({
//   top: 100,
//   left: 100,
//   behavior: 'smooth'
// });

function mouseMove(event){

  mapStages.scroll({
    left: event.pageX,
    behavior: 'smooth'
  })

    // console.log("pageX: ",event.pageX,
    // "pageY: ", event.pageY,
    // "clientX: ", event.clientX,
    // "clientY:", event.clientY)
}

function scrollProgressBar () {


    // let stagesScrollDistance = -(mapStagesWidth)



    let scrollDistance = -(mainText.getBoundingClientRect().top);
    let progressPercentage =
        (scrollDistance /
            (mainText.getBoundingClientRect().height -
                document.documentElement.clientHeight)) * 100;

    let val = Math.floor(progressPercentage);

    //here mapStages needs to get value that comes out of
    //left is ammount:

    let progressStages =
        -(mapStagesWidth) * progressPercentage /100;
    mapStages.style.left = progressStages + 'px';

    if (val < 0) {
        mapStages.style.left = '0';
    }
};

let mapStages = document.getElementById('fragments');
let mainText = document.getElementById('mainText');

let mapStagesWidth = mapStages.offsetWidth;

window.addEventListener('scroll', scrollProgressBar);

// window.addEventListener('mousemove', mouseMove);
//



// END OF CODE
// END OF CODE
});
