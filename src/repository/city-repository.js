const { City }= require('../models/index');

class Cityrepository {
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }
        catch (error){
            console.log("something went wrong int the repository");
            throw{error};
        }
    }

    async deleteCity({cityId}){
        try{
            await City.destory({
                where:{
                    id:cityId
                }
            })
        }
        catch (error){
            console.log("something went wrong int the repository");
            throw{error};
        }
    }

    async updateCity(cityId,data){
        try{
            const city = await City.update(data,{
                where:{
                    id:cityId
                }
            });
            return city;
        }
        catch (error){
            console.log("something went wrong int the repository");
            throw{error};
        }

    }

    async getCity(cityId){
        try{
            const city=await City.findByPk(cityId);
            return city;
        }
        catch (error){
            console.log("something went wrong int the repository");
            throw{error};
        }
    }


}

module.exports = Cityrepository;