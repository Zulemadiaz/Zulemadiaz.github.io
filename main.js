let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fb4993;">Apasionada por el diseño web y la creatividad, buscando inspirar a través de mis proyectos.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
