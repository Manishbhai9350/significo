const main = () => {
  const links = [
    "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.png",
    "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.png",
    "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.png",
    "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483185_Ellipse%20844.png",
    "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.png",
    "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317a_Ellipse%20845-10.png",
    "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483181_Ellipse%20845-5.png",
    "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.png",
    "https://assets-global.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.png",
  ];

  function images() {
    const imgs = document.querySelectorAll(".main .home .img-con img");
    imgs.forEach((item) => {
      let rnd = Math.floor(Math.random() * links.length);
      item.src = links[rnd];
    });
  }
  images();

  function changeRotation(elem, rotate, scale) {
    elem.style.transformOrigin = `center`;
    elem.style.transform = `
        rotate(${rotate}deg) 
        scale(${scale})
        `;
  }

  const parent1 = document.querySelector(".craft-btn");
  const arr1 = document.querySelector(".craft-arrow");
  parent1.addEventListener("mouseenter", () => {
    changeRotation(arr1, 0, 1.3);
  });
  parent1.addEventListener("mouseleave", () => {
    changeRotation(arr1, -45, 1.3);
  });

  const parent2 = document.querySelector(".slide-btn");
  const arr2 = document.querySelector(".slide-icon");
  parent2.addEventListener("mouseenter", () => {
    changeRotation(arr2, 0, 0.9);
  });
  parent2.addEventListener("mouseleave", () => {
    changeRotation(arr2, -45, 0.9);
  });
  const parent3 = document.querySelector(".list-btn");
  const arr3 = document.querySelector(".list-icon");
  parent3.addEventListener("mouseenter", () => {
    changeRotation(arr3, 0, 0.9);
  });
  parent3.addEventListener("mouseleave", () => {
    changeRotation(arr3, -45, 0.9);
  });

  const team = [
    {
      name: "dr. rick mc.Carteny",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d3483259_Rick%20McCartney%20.png",
      roll: "CTO",
    },
    {
      name: "chris koha",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d34832ae_655d505c9d551c9c11dd3613_Chris20Koha.png",
      roll: "COO",
    },
    {
      name: "caroline nieto",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483190/65cd134a7ece047ea2260d5b_Caroline%20Nieto.png",
      roll: "chief product officer",
    },
    {
      name: "victor albertos",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d34832e6_655d504bfd0e67e20640dbbd_ViCC81ctor20Albertos.png",
      roll: "CTO",
    },
    {
      name: "dr. jana hapfekmeier",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d348325a_655d4fbc461dbfc3c7e1914e_Dr.20Jana20Hapfelmeier.png",
      roll: "VP of Marketing",
    },
    {
      name: "michel robin",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d34832da_655d501d4436fe51b356605d_Michael20Robin.png",
      roll: "VP of Engineering",
    },
    {
      name: "adrian rubio",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d34832c7_655d4fcd461dbfc3c7e19739_Cy20Serrano.png",
      roll: "VP of Marketing",
    },
    {
      name: "cy serrano",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483190/65e0bbf51f50ea7c26f413f5_Lenya%20McGrath.png",
      roll: "VP of Product",
    },
    {
      name: "lenya mcGrath",
      img: "https://assets-global.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d34832da_655d501d4436fe51b356605d_Michael20Robin.png",
      roll: "VP of Partnerships",
    },
  ];

  var list_con = document.querySelector(".lists");

  var clutter = "";
  team.forEach((item, i) => {
    clutter += `
        <div
        class="list z-[99] relative px-10 w-full    py-10 h-28  machina ${
          i !== team.length - 1 && "border-b"
        } border-black flex justify-between items-center"
      >
      <div class="float-img z-[110]   top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 absolute rounded-full overflow-hidden">
            <img class="w-full h-full object-cover" src="${item.img}" alt="" />
          </div>
        <div
          class="flow absolute w-full h-0 bg-[#2544EE] left-0 bottom-0"
        ></div>
        <div
          class="left w-[50%] flex machina justify-start gap-10 items-center h-full"
        >
          <h1
            class="text-3xl font-[100] z-[99] tracking-normal capitalize opacity-[.2]"
          >
            ${++i < 10 ? "0" + i : i}
          </h1>
          <h1 class="text-4xl name font-[100] z-[99] tracking-normal  capitalize">
            ${item.name}
          </h1>
        </div>
        <p class="text-xl z-[99]">${item.roll}</p>
      </div>
        `;
  });
  list_con.innerHTML += clutter;

  const lists = document.querySelectorAll(".list");
  lists.forEach((item) => {
    let flow = item.querySelector(".flow");
    let h1 = item.querySelector(".name");

    const img = item.querySelector(".float-img");
    item.addEventListener("mouseenter", () => {
      img.scale = "1";
      flow.style.height = "100%";
      h1.style.color = "white";
      gsap.to(img, {
        scale: 1,
      });
    });

    item.addEventListener("mousemove", (e) => {
      var x = e.clientX;
      x = gsap.utils.mapRange(0, innerWidth, -150, 340, e.clientX);
      //img.style.left = x+'px'
      // console.log(x)
      gsap.to(img, {
        x: x,
        duration: 0.4,
        ease: Power4,
      });
    });
    item.addEventListener("mouseleave", () => {
      flow.style.height = "0";
      h1.style.color = "black";
      gsap.to(img, {
        scale: 0,
      });
    });
  });
};

gsap.set(".marquee", {
  scale: 18,
});
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    scrub: 4,
    start: "top top",
    end: "bottom top",
    pin: true,
    ease: Power2,
  },
});

tl.to(
  ".video",
  {
    "--clip": "0%",
    ease: Power2,
  },
  "a"
).to(
  ".marquee",
  {
    scale: 1,
    ease: Power2,
  },
  "a"
);

tl.to(
  ".row.rgt",
  {
    // stagger:.4,
    xPercent: 20,
  },
  "b"
);
tl.to(
  ".row.lft",
  {
    // stagger:.4,
    xPercent: -70,
  },
  "b"
);

gsap.to(".slide", {
  scrollTrigger: {
    trigger: ".slides",
    start: "top top",
    end: "bottom top",
    scrub: 3,
    pin: true,
  },
  xPercent: -300,
});

function textAnimation(elm) {
  var cltr = "";
  const text = elm.textContent;
  var arr = text.split("");
  arr.forEach((item) => {
    cltr += `<span class='anim-span santosha'>${item}</span>`;
  });
  elm.innerHTML = cltr;
  gsap.set(".anim-span", {
    opacity: 0.1,
  });
}

main();
textAnimation(document.querySelector(".text-animation-1"));
textAnimation(document.querySelector(".text-animation-2"));

gsap.to(".text-animation-1 .anim-span", {
  scrollTrigger: {
    trigger: ".text-animation-1",
    start: "top 65%",
    end: "bottom 70%",
    scrub: 2,
  },
  opacity: 1,
  stagger: 0.01,
});
gsap.to(".text-animation-2 .anim-span", {
  scrollTrigger: {
    trigger: ".text-animation-2",
    start: "top 60%",
    end: "bottom 70%",
    scrub: 1,
  },
  opacity: 1,
  stagger: 0.01,
});

(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();

gsap.to(".capsule:nth-child(2)", {
  scrollTrigger: {
    trigger: ".capsule",
    start: "top 70%",
    end: "bottom 50%",
    scrub: true,
    ease: [0, 0.55, 0.45, 1],
  },
  y: -25,
});

function themeChange() {
  document.querySelectorAll(".section").forEach((e) => {
    ScrollTrigger.create({
      trigger: e,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: () => {
        document.body.setAttribute("theme", e.dataset.clr);
      },
      onEnterBack: () => {
        document.body.setAttribute("theme", e.dataset.clr);
        console.log(e.dataset.clr);
      },
    });
  });
}

const cards = document.querySelectorAll(".card");

cards.forEach((e) => {
  ScrollTrigger.create({
    trigger: e,
    start: "20% 65%",
    end: "bottom 0",
    ease: [0.76, 0, 0.24, 1],
    onEnter: () => {
      e.style.width = "95%";
      e.style.background = `black`;
      e.querySelector("h3").style.color = `#AEDEE0`;
      e.querySelector("p").style.color = `#AEDEE0`;
      e.querySelector("svg").style.color = `#AEDEE0`;
    },
    onLeaveBack: () => {
      e.style.width = "85%";
      e.style.background = `transparent`;
      e.querySelector("h3").style.color = `black`;
      e.querySelector("p").style.color = `black`;
      e.querySelector("svg").style.color = `black`;
    },
  });
});

themeChange();
