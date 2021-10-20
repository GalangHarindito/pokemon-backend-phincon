module.exports = (connection, DataTypes) => {
    const pokemon = connection.define("pokemon", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        pokemonId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pokemonName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        paranoid: true
    });
  
    return pokemon;
};