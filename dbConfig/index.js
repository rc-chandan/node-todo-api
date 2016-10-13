var dbUser = require("./config");

module.exports = {
    getDbConfigString: function() {
        return "mongodb://" + dbUser.username + ":" + dbUser.password + "@ds053216.mlab.com:53216/todolistapi"
    }
}
