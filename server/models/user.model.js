import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    fullname: {
        type: String,
        required: true,
    },
    skillsOffered: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Skkill",
            default: [],
        },
    ],
    skillsbuyed: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Skill",
            default: [],
        },
    ],
});

const User = mongoose.model("User", userSchema);
export default User;
