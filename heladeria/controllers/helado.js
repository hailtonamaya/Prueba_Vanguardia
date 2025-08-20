const getMain = (request, response) => {
    try{
        response.send('Necesito get info!')
    }catch(error){
        response.send(error)
    }
};

module.exports = {
  getMain
};
