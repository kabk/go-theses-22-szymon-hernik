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

let mapStages = document.getElementById('fragments');


window.addEventListener('mousemove', mouseMove);

});
