'use strict'

class MensajeController {

    EnviarMensaje({request}) {

      console.log(request);
      var { nombre,correo,Mensaje} = request.all();

      var Nombre=nombre;
      var Correo=correo;
      var Mensaje=Mensaje;

        const mailjet = require ('node-mailjet')
        .connect('f865650cd3d24e9e58a651dc2b74e362', 'e981f1ec3eb177573a2ca28e4e53d524')
        const peticion = mailjet
        .post("send", {'version': 'v3.1'})
        .request({
          "Messages":[
            {
              "From": {
                "Email": "emmanuel_burciaga@hotmail.com",
                "Name": "Emmanuel"
              },
              "To": [
                {
                  "Email": "gudjohnsen.10@hotmail.com",
                  "Name": "Emmanuel"
                }
              ],
              "Subject": "Correo GrupoMaram",
              "TextPart": "Información para renta de unidades sprinter.",
              "HTMLPart": "Buen día, la persona "+Nombre+", con Correo: "+Correo+", dice: "+Mensaje+" .",
              "CustomID": "AppGettingStartedTest"
            }
          ]
        })
        peticion
          .then((result) => {
            console.log("eh2: "+result.body)
          })
          .catch((err) => {
            console.log("EH: "+err.statusCode)
          })
        

    }
}

module.exports = MensajeController
