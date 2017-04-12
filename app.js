window.addEventListener("load", init, false);

function init() {
  let width = window.innerWidth,
    height = window.innerHeight,
    pool = [];


  console.log("init");
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);

  let hero = Hero(Vector(width / 2, height / 2));

  //1. Recuerda agregar todos los elementos del juego que necesitan animacion
  //al pool de objecto.
  pool.push(hero);
  // console.log("hero", hero);


  // let image = document.createElement('img');




  // var img = new Image();
  // var div = document.getElementById('enemies');
  // img.onload = function () {
  //   console.log('add image');
  //   img.src = "../img/EBlue.png";
  //   document.body.appendChild(img);

  // };








  let enemy = Enemy(Vector(width / 2, height / 2));
  pool.push(enemy);
  // console.log(enemy);


  function update() {
    //2. Recuerda que para animar los objectos hay que llamar a sus
    // update() como se hace en el for loop
    pool.forEach(function (gameObject) {
      gameObject.update();
    }, this);
    //revisar
    requestAnimationFrame(update);
  }

  update();

  function onKeyDown(e) {
    switch (e.keyCode) {
      case 32:
        hero.canJump = true;
        break;
      default:
        break;
    }
    //3. Para que no se mueva el scroll en la pagina
    e.preventDefault();
  }

  function onKeyUp(e) {
    switch (e.keyCode) {
      case 32:
        hero.canJump = false;
        break;
      default:
        break;
    }
    //3. Para que no se mueva el scroll en la pagina
    e.preventDefault();
  }
}
