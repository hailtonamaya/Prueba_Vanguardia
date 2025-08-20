const getIndex = (request, response) => {
    try{
        res.render('index', { title: 'Hailton' });
    }catch(error){
        response.send(error)
    }
}

const getAbout = (request, response) => {
    try{
        res.render('about', { title: 'Acerca de Hailton' });
    }catch(error){
        response.send(error)
    }
};

const getApiData = (request, response) => {
    try{
        response.json({
            message: 'Hola desde la API',
            app: 'Proyecto Vanguardia',
            author: 'Hailton'
        });
    }catch(error){
        response.send(error)
    }
};

const getApiUser = (request, response) => {
    try{
        const userId = request.params.id;
        response.json({ message: `Detalles del usuario con id ${userId}` });
    }catch(error){
        response.send(error)
    }
};

const postApiSave = (request, response) => {
    try{
        response.json({ status: 'ok', message: 'Datos recibidos correctamente' });
    }catch(error){
        response.send(error)
    }
};

module.exports = {
    getIndex,
    getAbout,
    getApiData,
    getApiUser,
    postApiSave
};
