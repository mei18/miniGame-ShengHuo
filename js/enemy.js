function Enemy(position) {
    if (!(this instanceof Enemy)) {
        return new Enemy(position);
    }

    console.log('Enemy');

    this.velocity = Vector(-0.9, 0);
    this.position = position;
    //img
    // this.image = document.getElementById("enemy");
    this.enemys = new Array;
    this.enemys[0] = new Image();
    this.enemys[0].src = "../img/EBlue.png";
    this.enemys[1] = new Image();
    this.enemys[1].src = '../img/ERed.png';



    let image = new Image();
    image.onload = function () {
        console.log('Load image');
        document.body.appendChild(image);

    };
    image.src = "../img/EBlue.png";
    image.id = 'enemy1';
    image.className = 'enemy';



    //console.log("array de enemigos" , this.enemys);
    //console.log('img del enemy en el html',this.image);
    // this.enemys = new Image();
    // this.enemys[2].src = '../img/EBrown.png';
    // this.enemys = new Image();
    // this.enemys[3].src = '../img/EYellow.png';
    // this.enemys = new Image();
    // this.enemys[4].src = '../img/icicle.png';
    // this.enemys = new Image();
    // this.enemys[5].src = '../img/lava.png';
    // this.enemys = new Image();
    // this.enemys[6].src = '../img/stoneShard.png';
    // this.enemys = new Image();
    // this.enemys[7].src = '../img/WBlue.png';
    // this.enemys = new Image();
    // this.enemys[8].src = '../img/WBrown.png';
    // this.enemys = new Image();
    // this.enemys[9].src = '../img/WRed.png';
    // this.enemys = new Image();
    // this.enemys[10].src = '../img/WYellow.png';

}

Enemy.prototype.update = function () {
    // agregar la velocidad
    this.position.add(this.velocity);
    this.checkBounderies();
    this.render();

}

Enemy.prototype.render = function () {
    /*
  //esto es solo para debug para ver si esta moviendo.
  this.image.setAttribute('transform', 'translate(' + this.position.x + ',' + this.position.y + ')');
  for(var i = 0; i < this.enemys.length; i++) {
    //sacar la img en random.
    var randomimg = this.enemys[Math.floor(Math.random() * this.enemys.length)];
    //console.log('random',randomimg.src);
  }
  //Display.
  var img = document.getElementById("img-enemy");

    for(var i = 0; i < this.enemys.length;i++){
        if(this.enemys[i].src == img.src)
        {
          console.log('dentro del for');

            if(i === this.enemys.length){
                img.setAttribute("src"," this.enemys[0].src");
                console.log('i es igual!!');
            }
            console.log('i no es igual!!');

            //document.getElementById(element).src = this.enemys[i+1].src;
            //break;
        }
    }
    */
}

Enemy.prototype.checkBounderies = function () {
    //toma el ancho de la imagen y lo devuelve
    if (this.position.x < -200) {
        this.position.x = window.innerWidth;
    }
}
