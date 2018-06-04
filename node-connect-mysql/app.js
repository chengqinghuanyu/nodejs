const Sequelize = require('sequelize');
const config = require('./config');
var sequelize = new Sequelize(config.database,config.username,config.password,{
	host:config.host,
	dialect:'mysql',
	pool:{
		max:5,
		min:0,
		idle:30000
	}
}) 


var Pet = sequelize.define('pet',{
	id:{
		type:Sequelize.STRING(50),
		primaryKey:true
	},
    ownerId:Sequelize.STRING(50),
	name:Sequelize.STRING(100),
	gender:Sequelize.BOOLEAN,
	birth:Sequelize.STRING(10),
	createdAt:Sequelize.BIGINT,
	updatedAt:Sequelize.BIGINT,
	version:Sequelize.BIGINT
},{
	timestamps:false,
});

(async () => {
	var now = Date.now()
    var dog = await Pet.create({
        id: 'd-' + now,
        ownerId:'owner-'+now,
        name: 'Odie',
        gender: false,
        birth: '2008-08-08',
        createdAt: now,
        updatedAt: now,
        version: 0
    });
    console.log('created: ' + JSON.stringify(dog));
})();
(async () => {
    var pets = await Pet.findAll({
        where: {
            name: 'Gaffey'
        }
    });
    console.log(`find ${pets.length} pets:`);
    for (let p of pets) {
        console.log(JSON.stringify(p));
    }
})();
//更新数据
/*
(async () => {
    var p = await queryFromSomewhere();
    p.gender = true;
    p.updatedAt = Date.now();
    p.version ++;
    await p.save();
})();
*/
//删除数据
/*var queryFromSomewhere = async (animals) =>
{
    var pets = await Pet.findAll({
        where: {
            name: animals||0
        }
    });
    console.log(`find ${pets.length} pets:`);
    for (let p of pets) {
        console.log(JSON.stringify(p));
    }
    return pets;

};
(async () => {
	try{
     var pets = await queryFromSomewhere('Gaffey');
        for (let p of pets) {
            await p.destroy();
        }
     }catch(err){
     	console.log(err)
     }
})();*/
