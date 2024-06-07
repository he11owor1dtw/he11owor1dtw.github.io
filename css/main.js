
  // 註冊 GSAP
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);

  // 註冊 AOS
  AOS.init({
    duration: 1000,
  mirror: true,
  easing: 'ease-out-quart',
  });

  // 註冊 Rellax
  var rellax = new Rellax('.rellax', {
    breakpoints: [550, 768, 1201]
  });

  // header cover: website opening animation
  const loadingtl = gsap.timeline();

  loadingtl
  .to(".loadingValue", 2, {width: "100%" })
  .to(".loadingBar", 0, {display: 'none' })
  .to(".welcome", 0, {display: 'none' })
  .to(".openingCover", 0.5, {height: 0 })

  // entry typing effect
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings', // 定義標籤
  backSpeed: 60, // 回播速度
  typeSpeed: 50, // 打字速度
  startDelay: 2700, // 2.5秒後觸發
  loop: false, // 循環播放
  });

  // footer typing effect
  gsap.to('.footertext', {
    scrollTrigger: {
    trigger: '.footertext',
  start: '60% 90%',
  end: 'top 60%',
  toggleActions: 'play none none reset',
      // markers:true,
    },
  duration: 3.5,
  text: "Let’s see what will happen in the future.",
  ease: "power1.out",
  });

  const scrollDownText = gsap.fromTo('.scrollDown', {
    text: '<i class="fa-solid fa-chevron-down"></i>',
  }, {
    ease: "power1.out",
  y: 25,
  repeat: -1,
  repeatDelay: 0.5,
  });

  const tweenscrollDown = gsap.to('.scrollDown', {
    scrollTrigger: {
    trigger: '.scrollDown',
  start: 'top 90%',
  end: 'top 60%',
  toggleActions: 'play none none reset',
      /*
      值可為 play,pause,resume,reverse,restart,reset,complete,none
      onEnter => 第一次綠碰綠 scroller-start 碰到 start
      onLeave => 第一次紅碰紅 scroller-end 碰到 end
      onEnterBack => 往回時紅碰紅 scroller-end 碰到 end
      onEnterBack => 往回時綠碰綠 scroller-start 碰到 start
      */
      // markers: true,
    },
  duration: 0.3,
  opacity: 0,
  ease: 'power2.in'
  })

  const tweenborn = gsap.to('.born', {
    scrollTrigger: {
    trigger: '.born',
  start: 'top 90%',
  end: 'bottom 20%',
  toggleActions: 'play none none reset',
    },
  x: '0%',
  duration: 1.5,
  ease: 'power2.out'
  })

  const tweenedu = gsap.to('.education', {
    scrollTrigger: {
    trigger: '.education',
  start: 'top 90%',
  end: 'bottom 20%',
  toggleActions: 'play none none reset',
      // markers: true,
    },
  x: '0%',
  duration: 1.5,
  ease: 'power2.out'
  })

  const tweenwork = gsap.to('.work', {
    scrollTrigger: {
    trigger: '.work',
  start: 'top 90%',
  end: 'bottom 20%',
  toggleActions: 'play none none reset',
      // markers: true,
    },
  x: '0%',
  duration: 1.5,
  ease: 'power2.out'
  })

  const tweencovid = gsap.to('.covid', {
    scrollTrigger: {
    trigger: '.covid',
  start: 'top 90%',
  end: 'bottom 20%',
  toggleActions: 'play none none reset',
      // markers: true,
    },
  x: '0%',
  duration: 1.5,
  ease: 'power2.out'
  })

  const tweenuntil = gsap.to('.tillnow', {
    scrollTrigger: {
    trigger: '.tillnow',
  start: 'top 90%',
  end: 'bottom 20%',
  toggleActions: 'play none none reset',
      // markers: true,
    },
  x: '0%',
  duration: 1.5,
  ease: 'power2.out'
  })

  // getSkills typing effect
  gsap.to('.getSkills', {
    scrollTrigger: {
    trigger: '.getSkills',
  start: 'top 90%',
  end: 'bottom 50%',
  toggleActions: 'play none none reset',
      // markers: true,
    },
  duration: 1.5,
  text: "900個小時的課程<br>我得到了這些",
    ease: "slow",
    repeat: 0
  });

    // myCollections typing effect
    gsap.to('.myCollections', {
      scrollTrigger: {
      trigger: '.myCollections',
    start: 'top 90%',
    end: 'bottom 50%',
    toggleActions: 'play none none reset',
      // markers: true,
    },
    duration: 2,
    text: "開始到現在<br>我做出了這些<br>",
      ease: "slow",
      repeat: 0
  });