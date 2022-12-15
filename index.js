const dotenv = require("dotenv").config();
const { Keystone } = require("@keystonejs/keystone");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { Text, Checkbox, Password } = require("@keystonejs/fields");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const initialiseData = require("./initial-data");
const notificacoes = require("./schemas/notificacoesPush");
const promocaoApp = require("./schemas/promocaoApp");

const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
const PROJECT_NAME = "new-my-app";
const adapterConfig = {
	mongoUri: process.env.MONGO_URI,
};

const keystone = new Keystone({
	adapter: new Adapter(adapterConfig),
	onConnect: process.env.CREATE_TABLES !== "true" && initialiseData,
});

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) =>
	Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
	if (!user) {
		return false;
	}

	return { id: user.id };
};

const userIsAdminOrOwner = (auth) => {
	const isAdmin = access.userIsAdmin(auth);
	const isOwner = access.userOwnsItem(auth);
	return isAdmin ? isAdmin : isOwner;
};

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

keystone.createList("User", {
	fields: {
		name: { type: Text },
		email: {
			type: Text,
			isUnique: true,
		},
		isAdmin: {
			type: Checkbox,
			access: {
				update: access.userIsAdmin,
			},
		},
		password: {
			type: Password,
		},
	},
	access: {
		read: access.userIsAdminOrOwner,
		update: access.userIsAdminOrOwner,
		create: access.userIsAdmin,
		delete: access.userIsAdmin,
		auth: true,
	},
});

keystone.createList("Notificacao", notificacoes);
keystone.createList("Promocao", promocaoApp);

const authStrategy = keystone.createAuthStrategy({
	type: PasswordAuthStrategy,
	list: "User",
	config: { protectIdentities: process.env.NODE_ENV === "production" },
});

module.exports = {
	keystone,
	apps: [
		new GraphQLApp(),
		new AdminUIApp({
			name: PROJECT_NAME,
			enableDefaultRoute: true,
			authStrategy,
		}),
	],
};
