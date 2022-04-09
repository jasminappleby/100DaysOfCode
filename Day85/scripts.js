window.onload = function () {
    var tl = gsap.timeline({ repeat: -1 });
  
    gsap.set("#logo-svg", { opacity: 0 });
  
    tl.set("#foot-fly, #wing-fly-1, #wing-fly-2, #bill-2", { opacity: 0 });
  
    tl.fromTo(
        ".cover-image.start",
        1.4,
        { webkitClipPath: "circle(100% at 50% 50%)" },
        { webkitClipPath: "circle(0% at 50% 50%)", delay: 2 }
    );
  
    tl.to("#logo-svg", 1.3, { opacity: 1 });
  
    tl.set("#bill-1", { opacity: 0, delay: 1.5 });
    tl.set("#bill-2", { opacity: 1, y: -15 });
    tl.to("#bird-body-container", 0.3, {
        transformOrigin: "bottom center",
        transform: "scaleY(.7)",
        y: 3
    });
    tl.set("#bill-1", { opacity: 1, delay: 0.3 });
    tl.set("#bill-2", { opacity: 0 });
    tl.to("#bird-body-container", 0.1, { transform: "scaleY(1)" });
    tl.set("#wing-still", { opacity: 0 });
    tl.set(" #foot-land", { opacity: 0, delay: -0.1 });
    tl.set(" #foot-fly", { opacity: 1, delay: -0.1 });
  
    tl.add(flapWings());
  
    tl.to("#logo-container", 1, { opacity: 0, delay: -1 });
  
    tl.fromTo(
        ".cover-image.end",
        1.4,
        { webkitClipPath: "circle(0% at 50% 50%)" },
        { webkitClipPath: "circle(100% at 50% 50%)", delay: 6 }
    );
  
    tl.set(".cover-image.start", { webkitClipPath: "circle(100% at 50% 50%)" });
  
    tl.to(".cover-image.end", 1.4, {
        webkitClipPath: "circle(0% at 50% 50%)",
        delay: 6
        });
    };
  
  function flapWings() {
        var flaptl = gsap.timeline({ repeat: 50 });
        flaptl.to("#wing-fly-2", 0, { opacity: 1, ease: "none" });
        flaptl.to("#wing-fly-2", 0, { opacity: 0, delay: 0.06 });
        flaptl.to("#wing-fly-1", 0, { opacity: 1, ease: "none" });
        flaptl.to("#wing-fly-1", 0, { opacity: 0, delay: 0.06 });
    return flaptl;
    }
  
    gsap.set("#propellor-group", {
        transformOrigin: "center center",
        transform: "scaleX(.25)"
    });
  
    gsap.to("#propellor", 1, {
        transformOrigin: "center center",
        rotation: "-500deg",
        ease: "none",
        repeat: -1
    });
  
    gsap.fromTo(
        "#plane",
        3,
        { y: -30 },
        { ease: Sine.easeInOut, y: 30, yoyo: true, repeat: -1 }
    );
    
    gsap.fromTo(
        "#cloud1",
        5,
        { x: -150 },
        { x: 280, repeatDelay: 1.5, repeat: -1, ease: "none" }
    );
    gsap.fromTo(
        "#cloud2",
        5,
        { x: -150 },
        { x: 280, repeatDelay: 3, repeat: -1, delay: 1, ease: "none" }
    );
    
    