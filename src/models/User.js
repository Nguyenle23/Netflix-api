const Joi = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    avatar: { type: String, default: '' },
    isAdmin: { type: Boolean, default: false },
    isDestroy: { type: Boolean, default: false },
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

const validateUser = (user) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().min(8).max(30).regex(/[a-zA-Z0-9]{3,30}/).required(),
        email: Joi.string().email().required(),
        avatar: Joi.string().default(''),
        isAdmin: Joi.boolean().default(false),
        isDestroy: Joi.boolean().default(false),
    })
    return schema.validate(user)
}

module.exports = { validateUser, User };