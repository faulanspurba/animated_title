let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "80%",
    scrub: 1,
  },
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "80%",
    scrub: 1,
  },
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "200%",
    scrub: 1,
    pin: true,
    pinSpacing: false,
  },
});

tl.fromTo(".sliding-text", { y: 0 }, { y: -300 });
tl2.fromTo(
  ".logo",
  { scale: 5 },
  { scale: 2, top: "2rem", left: "3rem", x: "50%", y: "50%" }
);
