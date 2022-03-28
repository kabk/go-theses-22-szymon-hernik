$(document).ready(function() {




// mapped top stagesSection with the scrolling the main text container
function scrollProgressBar () {

    //height of the main text container
    let scrollDistance = -(mainText.getBoundingClientRect().top);
    let progressPercentage =
        (scrollDistance /
            (mainText.getBoundingClientRect().height -
                document.documentElement.clientHeight)) * 100;

    let val = Math.floor(progressPercentage);


    //map the height to the width of the stagesSection container

    //here mapStages needs to get value that comes out of
    //left is ammount: width * progressPercentage

    let progressStages =
        -(mapStagesWidth) * progressPercentage /100;
    mapStages.style.left = progressStages + 'px';

    if (val < 0) {
        mapStages.style.left = '0';
    }
};

// elements : main text and the top stages section
let mapStages = document.getElementById('fragments');
let mainText = document.getElementById('mainText');

// width of the stagesSection
let mapStagesWidth = mapStages.offsetWidth;

// on scroll the text scroll the stagesSection accordingly to the percentage of the vertical scroll
window.addEventListener('scroll', scrollProgressBar);

// window.addEventListener('mousemove', mouseMove);
//

// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------


// function assignWidth () {
//   // mapStages.style.width = mainText.getBoundingClientRect().height + 'px';
//   // console.log(mainText.getBoundingClientRect().height);
// }
//
// assignWidth()















// END OF CODE
// END OF CODE


});
