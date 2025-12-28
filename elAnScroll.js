
setTimeout(()=>window.scrollTo(0,0),50);
const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let el = entry.target;
          let delay = parseInt(el.dataset.delay) || 0;
          setTimeout(() => {
            el.classList.replace("hiddenView", "show");
          }, delay);
          observer.unobserve(el); // stop observing after shown
        }
      });
    },
    { threshold: 0.075 }
);

  document.querySelectorAll(".hiddenView").forEach((el)=>{
    observer.observe(el);
  })
  document.addEventListener("visibilitychange",()=>{

    if(document.visibilityState=="hidden"){
      document.querySelectorAll(".show").forEach((el)=>{         
        el.classList.replace("show","hiddenVis");
        void el.offsetWidth;  
      })}
    else{
      document.querySelectorAll(".hiddenVis").forEach((el)=>{           
        el.classList.replace("hiddenVis","show");
        void el.offsetWidth;  
      })
    }
  })