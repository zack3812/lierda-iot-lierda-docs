gsap.registerPlugin(ScrollTrigger);

const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function clearGsapProps(targets) {
  gsap.set(targets, { clearProps: "transform,opacity,visibility" });
}

function initIntroAnimations() {
  const heroInner = document.querySelector(".intro-hero-inner");
  if (!heroInner) return;

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.fromTo(".intro-kicker", { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, clearProps: "all" })
    .fromTo(".intro-hero-title", { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, clearProps: "all" }, "-=0.3")
    .fromTo(".intro-hero-desc", { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, clearProps: "all" }, "-=0.4");

  gsap.fromTo(".video-card", { y: 60, autoAlpha: 0 }, {
    y: 0,
    autoAlpha: 1,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.15,
    clearProps: "all",
    scrollTrigger: {
      trigger: ".intro-videos",
      start: "top 80%",
      once: true
    }
  });

  gsap.fromTo(".intro-cta-btn", { y: 30, autoAlpha: 0 }, {
    y: 0,
    autoAlpha: 1,
    duration: 0.6,
    ease: "back.out(1.4)",
    stagger: 0.12,
    clearProps: "all",
    scrollTrigger: {
      trigger: ".intro-cta",
      start: "top 85%",
      once: true
    }
  });

  gsap.fromTo(".intro-hero-glow", { scale: 0.8, autoAlpha: 0 }, {
    scale: 1,
    autoAlpha: 1,
    duration: 1.5,
    ease: "power2.out",
    clearProps: "all"
  });
}

function initDocsAnimations() {
  const heroSection = document.getElementById("heroSection");
  if (!heroSection) return;

  animateHero();
  animateStats();
  animateCategories();
  animateInfoBar();
}

function animateHero() {
  const badge = document.getElementById("heroBadge");
  const title = document.getElementById("heroTitle");
  const desc = document.getElementById("heroDesc");
  const modelsLabel = document.querySelector("#heroModels .hero-models-label");
  const modelTags = document.querySelectorAll("#heroModels .hero-model-tag");
  const specs = document.querySelectorAll("#heroSpecs .hero-spec");

  if (!badge || !title || !desc) return;

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.fromTo(badge, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, clearProps: "all" })
    .fromTo(title, { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, clearProps: "all" }, "-=0.25")
    .fromTo(desc, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, clearProps: "all" }, "-=0.3");

  if (modelsLabel) {
    tl.fromTo(modelsLabel, { y: 15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.4, clearProps: "all" }, "-=0.2");
  }
  if (modelTags.length > 0) {
    tl.fromTo(modelTags, { y: 15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.3, stagger: 0.05, clearProps: "all" }, "-=0.2");
  }
  if (specs.length > 0) {
    tl.fromTo(specs, { y: 15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.3, stagger: 0.06, clearProps: "all" }, "-=0.15");
  }
}

function animateStats() {
  const statItems = document.querySelectorAll(".stat-item");
  if (statItems.length === 0) return;

  gsap.fromTo(statItems, { y: 30, autoAlpha: 0 }, {
    y: 0,
    autoAlpha: 1,
    duration: 0.5,
    ease: "power2.out",
    stagger: 0.08,
    clearProps: "transform,opacity,visibility"
  });
}

let statAnimationPending = false;

function scheduleStatAnimation() {
  if (statAnimationPending) return;
  
  statAnimationPending = true;
  
  setTimeout(() => {
    animateStatCounters();
    statAnimationPending = false;
  }, 150);
}

function animateStatCounters() {
  const numericStatIds = ['statTotal', 'statCategories'];
  
  numericStatIds.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    
    const text = el.textContent.trim();
    const targetNum = parseInt(text, 10);
    if (isNaN(targetNum) || targetNum <= 0) return;

    gsap.killTweensOf(el);
    
    const obj = { val: 0 };
    
    gsap.to(obj, {
      val: targetNum,
      duration: 1.2,
      ease: "power2.out",
      onUpdate() {
        const currentVal = Math.round(obj.val);
        if (!isNaN(currentVal) && currentVal >= 0) {
          el.textContent = currentVal;
        }
      },
      onComplete() {
        const currentText = el.textContent.trim();
        const currentNum = parseInt(currentText, 10);
        if (currentNum !== targetNum) {
          el.textContent = targetNum;
        }
      }
    });
  });
}

function animateInfoBar() {
  const infoItems = document.querySelectorAll(".info-item");
  if (infoItems.length === 0) return;

  gsap.fromTo(infoItems, { y: 20, autoAlpha: 0 }, {
    y: 0,
    autoAlpha: 1,
    duration: 0.5,
    ease: "power2.out",
    stagger: 0.1,
    clearProps: "all",
    scrollTrigger: {
      trigger: ".info-bar",
      start: "top 90%",
      once: true
    }
  });
}

function animateCategories() {
  ScrollTrigger.batch(".category", {
    onEnter: (elements) => {
      gsap.fromTo(elements, { y: 40, autoAlpha: 0 }, {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        clearProps: "all"
      });
    },
    start: "top 88%",
    once: true
  });
}

function animateNewCategories() {
  const categories = document.querySelectorAll(".category");
  categories.forEach(cat => {
    if (cat.dataset.animated) return;
    cat.dataset.animated = "1";

    gsap.fromTo(cat, { y: 40, autoAlpha: 0 }, {
      y: 0,
      autoAlpha: 1,
      duration: 0.6,
      ease: "power2.out",
      clearProps: "all"
    });

    const fileCards = cat.querySelectorAll(".file-card");
    if (fileCards.length > 0) {
      gsap.fromTo(fileCards, { y: 20, autoAlpha: 0 }, {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.04,
        clearProps: "all"
      });
    }
  });
}

function animateSidebarItems() {
  const items = document.querySelectorAll(".sidebar-line-group");
  if (items.length === 0) return;

  gsap.fromTo(items, { x: -20, autoAlpha: 0 }, {
    x: 0,
    autoAlpha: 1,
    duration: 0.4,
    ease: "power2.out",
    stagger: 0.05,
    clearProps: "all"
  });
}

function animateVariantTransition() {
  const heroSection = document.getElementById("heroSection");
  if (!heroSection) return;

  const statStatusColor = document.getElementById('statStatus')?.style.color || '';

  clearGsapProps("#heroBadge, #heroTitle, #heroDesc, #heroModels, #heroSpecs, .hero-model-tag, .hero-spec, .stat-item, .category, .file-card");

  if (statStatusColor && document.getElementById('statStatus')) {
    document.getElementById('statStatus').style.color = statStatusColor;
  }

  const badge = document.getElementById("heroBadge");
  const title = document.getElementById("heroTitle");
  const desc = document.getElementById("heroDesc");
  const modelTags = document.querySelectorAll("#heroModels .hero-model-tag");
  const specs = document.querySelectorAll("#heroSpecs .hero-spec");

  if (!badge || !title || !desc) return;

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.fromTo(badge, { y: 15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.35, clearProps: "all" })
    .fromTo(title, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.4, clearProps: "all" }, "-=0.15")
    .fromTo(desc, { y: 15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.3, clearProps: "all" }, "-=0.2");

  if (modelTags.length > 0) {
    tl.fromTo(modelTags, { y: 10, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.25, stagger: 0.03, clearProps: "all" }, "-=0.15");
  }
  if (specs.length > 0) {
    tl.fromTo(specs, { y: 10, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.25, stagger: 0.04, clearProps: "all" }, "-=0.1");
  }

  const statItems = document.querySelectorAll(".stat-item");
  if (statItems.length > 0) {
    gsap.fromTo(statItems, { y: 20, autoAlpha: 0 }, {
      y: 0,
      autoAlpha: 1,
      duration: 0.4,
      stagger: 0.06,
      clearProps: "all"
    });
  }

  animateNewCategories();
}

function initSidebarAnimations() {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;

  const observer = new MutationObserver(() => {
    sidebar.querySelectorAll(".sidebar-children").forEach(child => {
      if (child.dataset.gsapReady) return;
      child.dataset.gsapReady = "1";

      const items = child.querySelectorAll(".sidebar-product-item, .sidebar-variant-item");
      if (items.length === 0) return;

      const isOpen = child.classList.contains("open");
      if (!isOpen) return;

      gsap.fromTo(items, { x: -15, autoAlpha: 0 }, {
        x: 0,
        autoAlpha: 1,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.04,
        clearProps: "all"
      });
    });
  });

  observer.observe(sidebar, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
}

const _origSwitchVariant = typeof switchVariant === "function" ? switchVariant : null;

if (_origSwitchVariant) {
  window.switchVariant = function(productId, variantId) {
    gsap.killTweensOf("*");

    _origSwitchVariant(productId, variantId);

    setTimeout(() => {
      animateVariantTransition();
      scheduleStatAnimation();
    }, 100);
  };
}

document.addEventListener("DOMContentLoaded", () => {
  if (REDUCED_MOTION) {
    gsap.defaults({ duration: 0 });
    return;
  }

  if (document.querySelector(".intro-hero")) {
    initIntroAnimations();
  }

  if (document.getElementById("heroSection")) {
    initDocsAnimations();
    initSidebarAnimations();

    setTimeout(() => {
      animateSidebarItems();
      scheduleStatAnimation();
    }, 200);
  }
});
