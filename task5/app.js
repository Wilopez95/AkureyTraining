var Pikachu = {
    type: "Electric",
    atack: 100,
    defense: 100
  };

var Charmander = {
    type: "Fire",
    atack: 150,
    defense: 100
  };

var Squirtle = {
    type: "water",
    atack: 120,
    defense: 120
  };


var Bulbasaur = {
    type: "grass",
    atack: 100,
    defense: 150
};

function caculateDamage(pokemon1,pokemon2){
  var damage = 50*(pokemon1.atack/pokemon2.defense)*effectiveness(pokemon1.type,pokemon2.type);
  console.log(damage);
}

function effectiveness(type1,type2) {
  if(type1 == type2){
    console.log('Not very efective');
    return 0.5;
  }else{
    if(type1=='fire'){
      return fire(type2);
    }else if(type1 =='grass'){
      return grass(type2);
    }else if(type1=='water'){
      return water(type2);
    }else{
      return electric(type2);
    }
  }
}

function fire(type2){
  if(type2 == 'grass'){
    console.log('Is very efective');
    return 2;
  }else if(type2 == 'water'){
    console.log('Not very efective');
    return 0.5;    
  }else{
    console.log('Is efective');
    return 1;
  }
}

function grass(type2){
  if(type2 == 'fire'){
    console.log('Not very efective');
    return 0.5;
  }else if(type2 == 'water'){
    console.log('Is very efective');
    return 2;    
  }else{
    console.log('Is efective');
    return 1;
  }

}

function water(type2){
  if(type2 == 'fire'){
    console.log('Is very efective');
    return 2;
  }else if(type2 == 'Grass'){
    console.log('Not very efective');
    return 0.5;    
  }else{
    console.log('Not very efective');
    return 0.5;
  }

}

function electric(type2){
  if(type2 == 'fire'){
    console.log('Is efective');
    return 1;
  }else if(type2 == 'water'){
    console.log('Is very efective');
    return 2;    
  }else{
    console.log('Is efective');
    return 1;
  }

}


caculateDamage(Pikachu,Bulbasaur);