function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      // opacity: 0,
      duration: 2,
      ease: Expo.easeInOut,
      delay: -1,
      stagger: 0.2, // for delay
    })
    .from("#herofooter", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
      delay: -1,
    });
}
firstPageAnim();

function circleChaptaKaro() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;

    yprev = dets.clientY;

    // console.log(xdiff,ydiff);
    // gsap.utils.clamp(minvalue,maxvalue,valuetoclamp) this property is use for to clamp any number for ex: gsap.utils.clamp(100,200,valuetoclamp) if valuetoclamp=225 then its clamp to 200,if valuetoclamp=45 its clamp to 100, if valuetoclamp=124 then its remain same because it lies between 100 and 200.

    circleMouseFollower(xscale, yscale);

    var timeout = setTimeout(() => {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
  });
}
circleChaptaKaro();
circleMouseFollower();

// Now work karte hai the plug, hudu, ixperiance ki images pr:-

//teeno element ko select karo, uske baad teeno pr ek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha pr hai yani mouse ki x and y position pata karo, ab mouse ki x,y position ke  badle us image ko show kro and us image ko move karo, move karte waqt rotate karo,and jaise jaise mouse tez ho waise waise rotation bhi tez ho jaye.

document.querySelectorAll(".elem").forEach(function (elem) {
    var diffrot = 0;
    var rotate = 0;
  elem.addEventListener("mousemove", (dets) => {

    var diff = dets.clientY - elem.getBoundingClientRect().top -110; //getBoundingClientRect use for getting details of any element, like position of x axis from top etc.

    // humne diff isliye calculate kara kyuki taki image only apne hi element me move kre because image ko position absolute de rkha hai.

    diffrot = dets.clientX - rotate;

    rotate = dets.clientX;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
  elem.addEventListener("mouseleave",()=>{
    gsap.to(elem.querySelector("img"),{
        opacity:0,
        duration:0.5
    })
  })
});
