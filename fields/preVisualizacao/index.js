const {
	Visualizacao,
	MongoIntegerInterface,
	KnexIntegerInterface,
	PrismaIntegerInterface,
} = require("./Implementation");

// We're going to extend the integer field to store
// a number between 1-5 and represent this as a rating
const { Integer } = require("@keystonejs/fields");

module.exports = {
	type: "Visualizacao",
	implementation: Visualizacao,
	views: {
		Controller: Integer.views.Controller,
		Field: require.resolve("./views/Field"),
		Filter: Integer.views.Filter,
		Cell: require.resolve("./views/Cell"),
	},
	adapters: {
		mongoose: MongoIntegerInterface,
		knex: KnexIntegerInterface,
		prisma: PrismaIntegerInterface,
	},
};
