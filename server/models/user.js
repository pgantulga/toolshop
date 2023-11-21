const mongoose = require('mongoose'); 
const config = require("config"); 
const jwt = require("jsonwebtoken"); 
const Joi = require('joi');
const bcrypt = require('bcrypt'); 
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 255,
    validate: {
      validator: function (v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      },
      message: 'Invalid email address',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024,
  }
}, { timestamps: true });

// Add a pre-save hook to the user schema that hashes the password before saving
userSchema.pre('save', async function () {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

// Add a method to the user schema that compares a password to the hashed password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Add a method to the user schema that generates a JSON web token
userSchema.methods.generateAuthToken = function () {
  // Generate a token that includes the user's ID, username, and email
  const token = jwt.sign(
    { _id: this._id, username: this.username, email: this.email },
    config.get('appPrivateKey')
  );
  return token;
};

// Create a user model using the user schema
const User = mongoose.model('User', userSchema);

// Define a function that validates user input using Joi
function validateUser(user) {
  const schema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().min(5).max(255).required(),
    password: Joi.string().min(8).max(1024).required(),
  });
  return schema.validate(user);
}

// Export the user model and the validateUser function so they can be used in other parts of the application
module.exports.User = User;
module.exports.validateUser = validateUser;