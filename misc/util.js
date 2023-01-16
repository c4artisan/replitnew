module.exports = {
	xmlFail(message = "Something broke.") {
		return `<error><code>ERR_ASSET_404</code><message>${message}</message><text></text></error>`;
	},
};
