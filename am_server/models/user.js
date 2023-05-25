const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String, 
        required: true, 
    },
    email: {
        type: String, 
        required: true, 
        unique: true,
    },
    password: {
        type: String, 
        required: true, 
    },
    age: {type: Number, required: false},
    add: {type: String, required: false},
    gender: {type: String, required:false},
    phone: {type: Number, required:false},
    avatar: String,
    tokens: [{ type: Object }],
  },
  { collection: "user-data" }
);

userSchema.pre('save', function(next) {
if(this.isModified('password')){
        bcrypt.hash(this.password, 8, (err, hash) => {
            if(err) return next(err);

            this.password = hash;
            next();
        });
    }
});

userSchema.methods.comparePassword = async function (password) {
    if(!password) throw new Error('Password is missing, cannot compare!');

    try{
       const result = await bcrypt.compare(password, this.password)
       return result;
    } catch (error) {
        console.log('Error while comparing password!', error.message)
    }
}

userSchema.statics.isThisEmailInUse = async function(email) {
    if(!email) throw new Error('Invalid Email')
    try{
        const user = await this.findOne({email});
        if(user) return false
    
        return true;
    } catch (error) {
        console.log('error inside isThisEmailInUse method', error.message)
        return false
    }
};

// const model = mongoose.model("UserData", User);

// module.exports = model;

module.exports = mongoose.model('User', userSchema);