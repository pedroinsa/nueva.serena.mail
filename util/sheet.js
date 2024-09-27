function defineSheet(name, message, email) {
    return {
        from: email,
        to: "nueva.serena.brc@gmail.com",
        subject: "Contacto",
        text: "Consulta por mail",
        html: `<div> 
             <h1> Tienes un mail de ${name} </h1>
             <h2> ${message}</h2>
             <h3> Responder a ${email}  </h3>
    </div>`

    }


}


module.exports = defineSheet