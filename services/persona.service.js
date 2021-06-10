const getPersonaById = async function (idPersona) {

    var requestOptions = {
        method: 'GET'

    };
    try {
        let response = await fetch(`https://distribuidas-backend.herokuapp.com/api/personas/getPersonaById/${idPersona}`, requestOptions)

        let data = await response.json();


    } catch (error) {
        console.log("ERROR" + error)
    }
}

const getPersona = async (idPersona) => {
    const body = {
        idPersona
    }
    try {
        const res = await fetch('https://distribuidas-backend.herokuapp.com/api/personas/getPersonaById/' + idPersona, {
            method: 'GET',
            //body: JSON.stringify(body)
        });
        const dataRes = await res.json();
        return dataRes;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getPersonaById,
    getPersona
}