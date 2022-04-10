$(document).ready(function() {


  // ––––––––––––––––––––––––––––––––––––––––– //
  //
  // function parallax() {
	// var s = document.getElementById("bg-liquid-container");
  // var yPos = 0 - window.pageYOffset/100;
  // s.style.top = 40 - yPos + "vh";
  //
  // }
  // window.addEventListener("scroll", function(){
  // 	parallax();
  // });
  $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });


  document.getElementById("stages-overlay").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".contents-from-thesis").style.display = "flex";

  })
  document.getElementById("close-stages").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(".contents-from-thesis").style.display = "none";
  })



  function printMousePos() {
    // let nub = event.clientY;
    // alert(window.pageYOffset)
  }

  // document.addEventListener("click", printMousePos);

  let latestScroll;
  document.getElementById("abstract-overlay").addEventListener("click", function(e) {
    e.preventDefault();
    latestScroll = window.pageYOffset
    document.getElementById("continue").classList.add("continue-reading")
    console.log(latestScroll);
    document.body.scrollTop = document.documentElement.scrollTop = 0;


    openScrollToPossibility()
    // printMousePos();
  })
  function openScrollToPossibility () {
    document.getElementById("continue").addEventListener("click", function(ev) {
      ev.preventDefault();
      // document.body.scrollTop = latestScroll;
      $('html, body').animate({
        scrollTop: latestScroll
    }, 1000);
    });
  }
  // document.getElementById("close-abstract").addEventListener("click", function(e) {
  //   e.preventDefault();
  //   document.querySelector(".abstract-from-thesis").style.display = "none";
  // })




  // ––––––––––––––––––––––––––––––––––––––––––––––––––– //
  //OBSERVE FOR WHEN FRAGMENTS APPEAR IN THE VIEW PORT //
  // ––––––––––––––––––––––––––––––––––––––––––––––––––– //
  let observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {

      let parentIndex = entry.target.getAttribute('data-parent')

      // isIntersecting is false when element and viewport don't overlap
      if(entry.intersectionRatio!=1){
        // document.querySelector(`div[data-child="${parentIndex}"]`).style.backgroundColor = "red";
      }
      // isIntersecting is true when element and viewport are overlapping
      else if(entry.intersectionRatio=1) {
        // document.querySelector(`div[data-child="${parentIndex}"]`).style.backgroundColor = "yellow";

        //scroll from right to left when in view depending on the vertical position in a viewport
        window.addEventListener('scroll', function() {

          let scrollDistance = document.querySelector(
            `span[data-parent="${parentIndex}"]`)
            .getBoundingClientRect();

          let percentValue= scrollDistance.top/(window.innerHeight)*100;

          let horizontalPositionStages = window.innerWidth*percentValue/100;
          document.querySelector(
            `div[data-child="${parentIndex}"]`)
            .style.left = horizontalPositionStages + "px";
          // console.log(percentValue);
        });

      }
    });
  }, { threshold: [1] });

  //declare the list of elements which should be listened to by the observer
  const boxElList = document.querySelectorAll('span[data-parent]');
  boxElList.forEach((el) => {
    console.log(el);
    observer.observe(el);
  })


  // –––––––––––––––––––––––––––––––––––––––––––––––––––——————— //
  //END OF OBSERVING FOR WHEN FRAGMENTS APPEAR IN THE VIEW PORT //
  // ––––––––––––––––––––––––––––––––––––––––––––––––––———————– //


  // ––––––––––––––––––––––––––––––––––––––––––––––––––—————————— //
  //FILL THE #fragments-container WITH THE FRAGMENTS AUTOMATICALLY//
  // ––––––––––––––––––––––––––––––––––––––––––––––——————————–––– //

  let d = document;
  let fragmentsContainer = d.getElementById("fragments-container");
  let fragmentsMainBody = d.querySelectorAll('span[data-parent]')
  //loop through all the fragments and for each make an element and add to DOM #fragment-container after each instance
  for (let i = 0; i < fragmentsMainBody.length; i++) {

    // <div class="fragment" data-child="2">
    let fragmentDiv = d.createElement('div');
    fragmentDiv.setAttribute("class", "fragment");
    fragmentDiv.setAttribute("data-child", i+1);
    let crookedLine = d.createElement('div')
    crookedLine.setAttribute("class", "crookedline");
    let paragraphFragment = d.createElement('p')
    paragraphFragment.innerHTML = fragmentsMainBody[i].innerHTML

    fragmentDiv.appendChild(crookedLine)
    fragmentDiv.appendChild(paragraphFragment)
    fragmentsContainer.appendChild(fragmentDiv)
  }

  d.querySelectorAll('span[data-parent]').length

  // ––––––––––––––––––––––––––––––––––––––––––––––––––—————————— //
  //END OF FILLING THE #fragments-container WITH THE FRAGMENTS AUTOMATICALLY//
  // ––––––––––––––––––––––––––––––––––––––––––––––——————————–––– //

});
