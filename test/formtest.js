var webdriver = require('selenium-webdriver');

const By = webdriver.By;

var chai = require('chai')
var expect = chai.expect;

var chaiWebdriver = require('chai-webdriver');
var driver = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.chrome())
  .build();

chai.use(chaiWebdriver(driver));

describe('Testes desafio', function () {
    it('Dados preenchidos sao exibidos a direita', function () {

        driver.get('http://localhost:8080');
        var elementNome = driver.findElement(By.css("div:nth-child(2) > div > input[type=text]"));
        var elementSobrenome = driver.findElement(By.css("div:nth-child(3) > div > input[type=text]"));
        var elementEmail = driver.findElement(By.css("div:nth-child(4) > div > input[type=text]"));
        var elementSenha = driver.findElement(By.css("div:nth-child(5) > div > input[type=password]"));

        var nomeUsuario = "Yasmin Gabrielle";
        var sobrenomeUsuario = "do Nascimento";
        var emailUsuario = "yasmin.gnascimento@gmail.com";
        var senhaUsuario = "teste";

        var botaoEnviar = driver.findElement(By.css("#app > div > form > button"));

        elementNome.sendKeys(nomeUsuario);
        elementSobrenome.sendKeys(sobrenomeUsuario);
        elementEmail.sendKeys(emailUsuario);
        elementSenha.sendKeys(senhaUsuario);


        //Chai
		expect('div > h1').dom.to.contain.text("Desafio Teste Automatizado");
		expect('div:nth-child(2) > span').dom.to.contain.text(nomeUsuario);
		expect('div:nth-child(3) > span').dom.to.contain.text(sobrenomeUsuario);
		expect('div:nth-child(4) > span').dom.to.contain.text(emailUsuario);
		expect('div:nth-child(5) > span').dom.to.contain.text(senhaUsuario);

        botaoEnviar.click();
		driver.quit();
    });
});