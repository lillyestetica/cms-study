const { Text, CalendarDay, Relationship } = require("@keystonejs/fields");
const { Url } = require("@keystonejs/fields/dist/fields.cjs.prod");

const promocaoFileds = {
	fields: {
		titulo: {
			type: Text,
			isRequired: true,
		},
		linkDeRelacionamento: {
			type: Url,
			isRequired: true,
		},
		// imagemDeCapa: {
		// 	// image: Image,
		// },
		// author: { type: Relationship },
	},
};

module.exports = promocaoFileds;
