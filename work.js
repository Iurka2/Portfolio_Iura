$(document).ready(function() {
  TweenMax.set(".project-preview", { width: 0 });

  var tl = new TimelineLite();

  $(document)
    .on("mouseover", ".navigation-item", function(evt) {
      tl = new TimelineLite();
      tl.to($(".project-preview"), 1, {
        width: "700px",
        ease: Expo.easeInOut
      });
    })
    .on("mouseout", ".navigation-item", function(evt) {
      tl = new TimelineLite();
      tl.to($(".project-preview"), 0.5, {
        width: 0,
        ease: Expo.easeInOut
      });
    });
});

$(".navigation-link-1").hover(function() {
  $(".project-preview").css({ "background-image": "url(img/Rectangle1.png)" });
});

$(".navigation-link-2").hover(function() {
  $(".project-preview").css({ "background-image": "url(img/s.svg)" });
});

$(".navigation-link-3").hover(function() {
  $(".project-preview").css({ "background-image": "url(img/me.png)" });
});


const textrev = gsap.timeline();

textrev.from("span", 1.8, {
    y: 200,
    ease: "power4.out",
    delay: 1,
    skewY: 10,
    stagger: {
        amount: 0.4,
    },
});

