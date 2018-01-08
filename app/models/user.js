var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
// Define the schema for our user model
var userSchema = mongoose.Schema({
     local            : {
        email        : String,
        password     : String,
    }
});
// generating a hash
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
// checking if password is valid
userSchema.methods.validPassword = function (password) {
    // console.log(password+"------------------"+this.local.password);
    if (password == this.local.password) {
        return true;
    } else {
        if (bcrypt.compareSync(password, this.local.password)) {
            return bcrypt.compareSync(password, this.local.password);
        } else {
            return false;
        }
    }
};
// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
