    // For more information, see greensock.com/docs/v3/Plugins/ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // You can use a ScrollTrigger in a tween or timeline
    gsap.to(".a", {
    x: -100,
    scrollTrigger: {
        trigger: ".a",
        start: "center center",
        end: "+=50%",
        pin: true,
        scrub: true,
        id: "scrub"
    }
    });
    gsap.to(".b", {
    x: 100,
    scrollTrigger: {
        trigger: ".b",
        start: "center center",
        end: "+=50%",
        pin: true,
        scrub: true,
        id: "scrub"
    }
    });
    gsap.to(".fade", {
    opacity: 1,
    duration: 0.8,
    });
