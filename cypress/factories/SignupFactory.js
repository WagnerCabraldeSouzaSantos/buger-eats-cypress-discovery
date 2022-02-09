
var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '85988888888',
            address:{
                postalcode: '60811000',
                street: 'Rua Fênix',
                number: '1000',
                details: 'Ap 142',
                district: 'Salinas',
                city_state: 'Fortaleza/CE'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg' 
            }
        
        return data
    }
}