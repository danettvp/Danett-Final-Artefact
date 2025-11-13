gsap.registerPlugin(Flip);

let products = gsap.utils.toArray(".product");
let active = products[0];

products.forEach(el => {
  el.addEventListener("click", () => changeGrid(el));
});

function changeGrid(el) {
  if (el === active) return;  
  
  let state = Flip.getState(products); 
  active.dataset.grid = el.dataset.grid;
  el.dataset.grid = "img-1";
  active = el;
  
  Flip.from(state, {
    duration: 0.3,
    absolute: true,
    ease: "power1.inOut"
  });
}
