const { Text } = require("@keystonejs/fields");

class Visualizacao extends Text.implementation {
	constructor(path, { title = "", text = "" }) {
		super(...arguments);
		this.title = title;
		this.text = text;
	}

	extendAdminMeta(meta) {
		return { ...meta, title: this.title, text: this.text };
	}
}

module.exports = {
	Visualizacao,
	MongoIntegerInterface: Text.adapters.mongoose,
	KnexIntegerInterface: Text.adapters.knex,
	PrismaIntegerInterface: Text.adapters.prisma,
};
