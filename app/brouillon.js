<body>
  <div class="container">
    <div class="wrapper">
      <div class="item 1 active"><img src="https://placehold.co/400" alt="Image 1"></div>
      <div class="item 2"><img src="https://placehold.co/500" alt="Image 2"></div>
      <div class="item 3"><img src="https://placehold.co/400" alt="Image 3"></div>
      <div class="item 4"><img src="https://placehold.co/400" alt="Image 4"></div>
      <div class="item 5"><img src="https://placehold.co/400" alt="Image 5"></div>
      <div class="item 6"><img src="https://placehold.co/400" alt="Image 6"></div>

      <svg viewBox="0 0 300 300">
        <circle id="holder" class="st0" cx="151" cy="151" r="150"/>
      </svg>
    </div>
    <div class="start">&#8592; Active</div>
  </div>
  <div class="container" style="text-align: center;">
    <button id="prev">Prev</button>
    <button id="next">Next</button>
  </div>
</body>


{/* css */}

.container {
    position: relative;
    max-width: 500px;
    margin: auto;    
}

.wrapper {
    position: relative;
}

.item {
    width: 80px; /* ajustez la taille en fonction de vos préférences */
    height: 80px;
    color: white;
    text-align: center;
    line-height: 50px;
    font-size: 24px;
    font-family: "Roboto", sans-serif;
    z-index: 1;
    background: none; /* Enlever la couleur de fond */
}

.item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.item.active img {
    border: 3px solid blue; /* Mettez en surbrillance l’image active */
}

svg {
    height: 300px;
    overflow: visible;
    width: 300px;
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

.st0 {
    fill: none;
    stroke: #000000;
    stroke-width: 2;
    stroke-miterlimit: 1;
}

.start {
    position: absolute;
    top: 50%;
    right: -30px;
}


{/* js  */}


gsap.registerPlugin(MotionPathPlugin);

const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
circlePath.id = "circlePath";
document.querySelector("svg").prepend(circlePath);

let items = gsap.utils.toArray(".item"),
  numItems = items.length,
  itemStep = 1 / numItems,
  wrapProgress = gsap.utils.wrap(0, 1),
  snap = gsap.utils.snap(itemStep),
  wrapTracker = gsap.utils.wrap(0, numItems),
  tracker = { item: 0 };

gsap.set(items, { 
  motionPath: {
    path: circlePath,
    align: circlePath,
    alignOrigin: [0.5, 0.5],
    end: i => i / items.length
  }, 
  scale: 0.9 
});

const tl = gsap.timeline({ paused:true, reversed: true });

tl.to('.wrapper', {
  rotation: 360, 
  transformOrigin: 'center', 
  duration: 1, 
  ease: 'none'
});

tl.to(items, {
  rotation: "-=360", 
  transformOrigin: 'center center', 
  duration: 1, 
  ease: 'none',
}, 0);

tl.to(tracker, {
  item: numItems,
  duration: 1, 
  ease: 'none',
  modifiers: {
    item: value => wrapTracker(numItems - Math.round(value))
  }
}, 0);

items.forEach(function (el, i) {

  el.addEventListener("click", function () {
    var current = tracker.item,
      activeItem = i;

    if (i === current) {
      return;
    }

    //set active item to the item that was clicked and remove active class from all items
    document.querySelector('.item.active').classList.remove('active');
    items[activeItem].classList.add('active');

    var diff = current - i;

    if (Math.abs(diff) < numItems / 2) {
      moveWheel(diff * itemStep);
    } else {
      var amt = numItems - Math.abs(diff);

      if (current > i) {
        moveWheel(amt * -itemStep);
      } else {
        moveWheel(amt * itemStep);
      }
    }
  });
});

document.getElementById('next').addEventListener("click", function () {

    var i = 0;

    var theArray = items;
    var currentIndex = 0;
    
    if (i === 0) {
      console.log(theArray[currentIndex]);
    } else if (i < 0) {
      console.log(theArray[(currentIndex + theArray.length + i) % theArray.length]);
    } else if (i > 0) {
      console.log(theArray[(currentIndex + i) % theArray.length]);
    }

  return moveWheel(-itemStep);
});

document.getElementById('prev').addEventListener("click", function () {
  return moveWheel(itemStep);
});

function moveWheel(amount, i, index) {
  
  let progress = tl.progress();
  tl.progress(wrapProgress(snap(tl.progress() + amount)));
  let next = tracker.item;
  tl.progress(progress);
  
  document.querySelector('.item.active').classList.remove('active');
  items[next].classList.add('active');  
  
  gsap.to(tl, {
    progress: snap(tl.progress() + amount),
    modifiers: {
      progress: wrapProgress
    }
  });
}