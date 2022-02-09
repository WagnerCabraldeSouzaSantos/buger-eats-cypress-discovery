import signup from "../pages/SignupPage"
import SignupFactory from "../factories/SignupFactory"
import SignupPage from "../pages/SignupPage"

describe('Cadastro', ()=>{

    // beforeEach(function() {
    //     cy.fixture('deliver').then((d)=> {
    //         this.deliver = d 
    //     })
    // })

    it('Usuário deve se tornar um entregador', function() { 
        
        var deliver = SignupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage) 
    })

    it('Usuário com cpf Invalido', function() {
       
        var deliver = SignupFactory.deliver()

        deliver.cpf = '0000xzzzxf'

        signup.go()
        signup.fillForm(deliver)
        signup.submit() 
        signup.alertMessageShouldBe("Oops! CPF inválido")
       
    })

    it('Usuário com email inválido', function() {
       
        var deliver = SignupFactory.deliver()

        deliver.email = 'teste'

        signup.go()
        signup.fillForm(deliver)
        signup.submit() 
        signup.alertMessageShouldBe("Oops! Email com formato inválido.")  
    })

    context('Required fields', function(){
        const message = [
            {field: 'name', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'postalcode', output: 'É necessário informar o CEP'},
            {field: 'number', output: 'É necessário informar o número do endereço'},
            {field: 'delivery_method', output: 'Selecione o método de entrega'},
            {field: 'cnh', output: 'Adicione uma foto da sua CNH'}
        ]

        before(function(){
            SignupPage.go()
            SignupPage.submit()

        })

        message.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                SignupPage.alertMessageShouldBe(msg.output)
            })
        })
    })

    // it('Required fields', function(){
    //     SignupPage.go()
    //     SignupPage.submit()
    //     SignupPage.alertMessageShouldBe('É necessário informar o nome')
    //     SignupPage.alertMessageShouldBe('É necessário informar o CPF')
    //     SignupPage.alertMessageShouldBe('É necessário informar o email')
    //     SignupPage.alertMessageShouldBe('É necessário informar o CEP')
    //     SignupPage.alertMessageShouldBe('É necessário informar o número do endereço')
    //     SignupPage.alertMessageShouldBe('Selecione o método de entrega')
    //     SignupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')
    // })
})