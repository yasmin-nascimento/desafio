<template>
	<div id="app">
		<h1>Desafio Teste Automatizado</h1>
		<div class="conteudo">
			<form class="painel">
				<div class="cabecalho">Formulário</div>

				<!-- Nome -->
				<div class="rotulo nome">
						<label>Nome: </label>
						<div class="elemento">
							<input type="text" v-model="nome">
						</div>
				</div>
			
				<!-- Sobrenome -->
				<div class="rotulo nome">
						<label>Sobrenome: </label>
						<div class="elemento">
							<input type="text" v-model="sobrenome">
						</div>
				</div>

				<!-- E-mail -->
				<div class="rotulo nome">
						<label>E-mail: </label>
						<div class="elemento">
							<input type="text" v-model="email">
						</div>
				</div>

				<!-- Senha -->
				<div class="rotulo nome">
						<label>Senha: </label>
						<div class="elemento">
							<input type="password" v-model="senha">
						</div>
				</div>

				<hr>
				<button @click.prevent="enviar">Enviar</button>
			</form>

			<div class="painel">
				<div class="cabecalho">Resultado</div>

				<!-- Nome -->
				<div class="rotulo nome">
					<label>Nome: </label>
					<span>{{ nome }}</span>
				</div>
			
				<!-- Sobrenome -->
				<div class="rotulo nome">
					<label>Sobrenome:</label>
					<span>{{ sobrenome }}</span>
				</div>

				<!-- E-mail -->
				<div class="rotulo nome">
					<label>E-mail:</label>
					<span>{{ email }}</span>
				</div>

				<!-- Senha -->
				<div class="rotulo nome">
					<label>Senha:</label>
					<span>{{ senha }}</span>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
			nome: '',
			sobrenome: '',
			email: '',
			senha: ''
		}
	},
	methods: {
		enviar() {
			alert('Enviado!')
		}
	}
}
</script>

<style>
body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

.rotulo {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 15px 0px;
	font-size: 1.4rem;
}

.elemento {
	display: flex;
	align-self: stretch;
	margin: 10px 0px;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: rgb(42, 52, 59);
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}

input, textarea, select {
	flex: 1;
	font-size: 1.4rem;
	outline: none;
	border: 1px solid #DDD;
	border-radius: 5px;
	padding: 5px 10px;
}

input:focus {
	border: 1px solid #BBB;
}

</style>