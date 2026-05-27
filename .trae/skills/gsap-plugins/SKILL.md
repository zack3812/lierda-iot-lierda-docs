---
name: gsap-plugins
description: Official GSAP skill for GSAP plugins — registration, ScrollToPlugin, ScrollSmoother, Flip, Draggable, Inertia, Observer, SplitText, ScrambleText, SVG and physics plugins, CustomEase, EasePack, CustomWiggle, CustomBounce, GSDevTools. Use when the user asks about a GSAP plugin, scroll-to, flip animations, draggable, SVG drawing, or plugin registration.
license: MIT
---
# GSAP Plugins
## When to Use This Skill
Apply when using or reviewing code that uses GSAP plugins: registering plugins, scroll-to, flip/FLIP animations, draggable elements, SVG (DrawSVG, MorphSVG, MotionPath), text (SplitText, ScrambleText), physics, easing plugins (CustomEase, EasePack, CustomWiggle, CustomBounce), or GSDevTools. ScrollTrigger has its own skill (gsap-scrolltrigger).
**Related skills:** For core tweens use **gsap-core**; for ScrollTrigger use **gsap-scrolltrigger**; for React use **gsap-react**.
## Licensing & Install (important)
Every GSAP plugin is **free**, including for commercial use. Since Webflow's acquisition of GSAP, Club GSAP is no longer a paid tier and **no plugin requires a membership, license key, or auth token** — this includes formerly Club-only plugins (**SplitText**, **MorphSVG**, etc.).
- Install everything from the public `gsap` npm package: `npm install gsap`. All plugins are included — import them as `gsap/SplitText`, `gsap/MorphSVGPlugin`, etc.
- Do **not** generate an `.npmrc` with a GreenSock auth token, suggest the private `npm.greensock.com` registry, or tell users to sign up for Club GSAP to access a plugin. Those instructions are outdated.
## Registering Plugins
Register each plugin once so GSAP (and bundlers) know to include it:
```javascript
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Flip } from "gsap/Flip";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(ScrollToPlugin, Flip, Draggable);
```
- Register before using the plugin in any tween or API call.
- In React, register at top level or once in the app; do not register inside a component that re-renders.
## Scroll
### ScrollToPlugin
Animates scroll position (window or a scrollable element). Use for "scroll to element" or "scroll to position" without ScrollTrigger.
```javascript
gsap.registerPlugin(ScrollToPlugin);
gsap.to(window, { duration: 1, scrollTo: { y: 500 } });
gsap.to(window, { duration: 1, scrollTo: { y: "#section", offsetY: 50 } });
gsap.to(scrollContainer, { duration: 1, scrollTo: { x: "max" } });
```
### ScrollSmoother
Smooth scroll wrapper (smooths native scroll). Requires ScrollTrigger and a specific DOM structure:
```html
<body>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <!-- ALL YOUR CONTENT HERE -->
    </div>
  </div>
  <!-- position: fixed elements can go outside -->
</body>
```
## DOM / UI
### Flip
Capture state with `Flip.getState()`, then apply changes, then use `Flip.from()` to animate from the previous state to the new state (FLIP: First, Last, Invert, Play).
```javascript
gsap.registerPlugin(Flip);
const state = Flip.getState(".item");
// change DOM (reorder, add/remove, change classes)
Flip.from(state, { duration: 0.5, ease: "power2.inOut" });
```
### Draggable
Makes elements draggable, spinnable, or throwable with mouse/touch.
```javascript
gsap.registerPlugin(Draggable, InertiaPlugin);
Draggable.create(".box", { type: "x,y", bounds: "#container", inertia: true });
Draggable.create(".knob", { type: "rotation" });
```
### Inertia (InertiaPlugin)
Works with Draggable for momentum after release, or track the inertia/velocity of any property.
```javascript
gsap.registerPlugin(Draggable, InertiaPlugin);
Draggable.create(".box", { type: "x,y", inertia: true });
```
### Observer
Normalizes pointer and scroll input across devices. Use for swipe, scroll direction, or custom gesture logic.
```javascript
gsap.registerPlugin(Observer);
Observer.create({
  target: "#area",
  onUp: () => {},
  onDown: () => {},
  onLeft: () => {},
  onRight: () => {},
  tolerance: 10
});
```
## Text
### SplitText
Splits an element's text into characters, words, and/or lines for staggered or per-unit animation.
```javascript
gsap.registerPlugin(SplitText);
const split = SplitText.create(".heading", { type: "words, chars" });
gsap.from(split.chars, { opacity: 0, y: 20, stagger: 0.03, duration: 0.4 });
// later: split.revert() or let gsap.context() cleanup revert
```
With **onSplit()** (v3.13.0+), animations run on each split and on re-split when **autoSplit** is used:
```javascript
SplitText.create(".split", {
  type: "lines",
  autoSplit: true,
  onSplit(self) {
    return gsap.from(self.lines, { y: 100, opacity: 0, stagger: 0.05, duration: 0.5 });
  }
});
```
### ScrambleText
Animates text with a scramble/glitch effect.
```javascript
gsap.registerPlugin(ScrambleTextPlugin);
gsap.to(".text", {
  duration: 1,
  scrambleText: { text: "New message", chars: "01", revealDelay: 0.5 }
});
```
## SVG
### DrawSVG (DrawSVGPlugin)
Reveals or hides the stroke of SVG elements by animating `stroke-dashoffset` / `stroke-dasharray`.
```javascript
gsap.registerPlugin(DrawSVGPlugin);
gsap.from("#path", { duration: 1, drawSVG: 0 });
gsap.fromTo("#path", { drawSVG: "0% 0%" }, { drawSVG: "0% 100%", duration: 1 });
gsap.to("#path", { duration: 1, drawSVG: "20% 80%" });
```
### MorphSVG (MorphSVGPlugin)
Morphs one SVG shape into another by animating the `d` attribute (path data).
```javascript
gsap.registerPlugin(MorphSVGPlugin);
MorphSVGPlugin.convertToPath("circle, rect, ellipse, line");
gsap.to("#diamond", { duration: 1, morphSVG: "#lightning", ease: "power2.inOut" });
gsap.to("#diamond", {
  duration: 1,
  morphSVG: { shape: "#lightning", type: "rotational", shapeIndex: 2 }
});
```
### MotionPath (MotionPathPlugin)
Animates an element along an SVG path or an array of x/y coordinates.
```javascript
gsap.registerPlugin(MotionPathPlugin);
gsap.to("#plane", {
  duration: 2,
  motionPath: {
    path: "#flightPath",
    align: "#flightPath",
    alignOrigin: [0.5, 0.5],
    autoRotate: true
  }
});
```
## Easing Plugins
### CustomEase
Create custom easing curves.
```javascript
gsap.registerPlugin(CustomEase);
const myEase = CustomEase.create("my-ease", ".17,.67,.83,.67");
gsap.to(".item", { x: 100, ease: myEase, duration: 1 });
```
### EasePack
Extra eases: RoughEase, SlowMo, ExpoScaleEase.
### CustomWiggle / CustomBounce
Wiggle and bounce easing effects.
## GSDevTools
Visual debugging tool for GSAP animations. Provides a UI for playing, pausing, scrubbing, and adjusting animation speed.
```javascript
gsap.registerPlugin(GSDevTools);
GSDevTools.create();
```
## Official GSAP best practices
- Register plugins once before using them.
- Install everything from the public `gsap` npm package; no auth tokens or private registries needed.
- Use Flip for layout animations, Draggable for drag interactions, SplitText for text animations.
- Split only what is animated (e.g. skip chars if only animating words) for performance.
## Do Not
- Generate `.npmrc` with GreenSock auth tokens or suggest private registries; those instructions are outdated.
- Register plugins inside a component that re-renders; register once at app level.
- Forget to register plugins before using them.
