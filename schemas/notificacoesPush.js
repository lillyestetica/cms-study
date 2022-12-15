const fields = require("@keystonejs/fields");
const { Text, Select, Checkbox } = require("@keystonejs/fields");
const { Url } = require("@keystonejs/fields/dist/fields.cjs.prod");
const Visualizacao = require("../fields/preVisualizacao/index");

let input = "oioioi";

function Teste(e) {
	console.log(e, "aqui");
	return (input = e);
}

const notificacaoFileds = {
	fields: {
		titulo: {
			type: Text,
			isRequired: true,
			value: input,
			update: Teste((e) => e.target.value),
			defaultValue: "oioioioioioioioi",
		},
		texto: {
			type: Text,
			isRequired: true,
		},
		tipo: {
			type: Select,
			options: [
				{ label: "Link", value: "link" },
				{ label: "Redirect", value: "redirect" },
			],
			defaultValue: "link",
			isRequired: true,
		},
		caminho: {
			type: Url,
			isRequired: true,
		},
		categorias: {
			type: Select,
			options: [
				{ label: "Aviso", value: "aviso" },
				{ label: "Promoção", value: "promocao" },
				{ label: "Manutenção", value: "manutencao" },
			],
			defaultValue: "link",
			isRequired: true,
		},
		preVisualizacao: {
			type: Visualizacao,
			title: `${fields.titulo}`,
			text: "Corpo da descrição",
		},
	},
};

console.log(notificacaoFileds);

// console.log(notificacaoFileds.fields.titulo.value);

module.exports = notificacaoFileds;
