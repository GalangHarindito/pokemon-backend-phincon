const { pokemon, Sequelize } = require("../models");

exports.catch = async (req, res) => {
  const catchPokemon= () => {
     return Math.floor(Math.random() * 6);
  }

  if(catchPokemon() > 3){
    res.send({
    status : 200,
    message: 'NICE CATCH!'
  });
  }else{
    res.send({
      status : 200,
      message: 'BAD CATCH!'
    });
  }
  
};

exports.storePokemon = async (req, res) => {
  const dataPokemon = await pokemon.create({ ...req.body })
  const data = { ...dataPokemon.dataValues }

  res.send({
    status : 200,
    data: data,
    message: 'Success store pokemon'
  });
};

exports.findAll = async (req, res) => {
  const data = await pokemon.findAll({
    order: [
        ['createdAt', 'DESC']
    ]
});

  res.send({
    status : 200,
    data: data,
    message: 'Success get all pokemon'
  });
};

//exports.delete = (req, res) => {
//  pokemon.destroy({
//    where: { id: req.params.id }
//  })
//    .then(num => {
//      if (num == 1) {
//        res.send({
//          status : 200,
//          message: "Pokemon release!!"
//        });
//      } else {
//        res.status(500).send({
//          status : 500,
//          message: `Failed release Pokemon!!`
//        });
//      }
//    })
//};

