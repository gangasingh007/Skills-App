import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: [
    {
        about: {
            type: String,
            required: true,
        },
        projects: {
            type: String,
            required: true,
        },
        portfolio: {
            type: String,
            required: true,
        },
        techstack: {
            type: String,
            required: true,
        },
    }
    ],
    price: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        default: "https://cdn.elearningindustry.com/wp-content/uploads/2019/10/7-Benefits-That-Highlight-The-Importance-Of-Soft-Skills-In-The-Workplace.png", 
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true });

const Skill = mongoose.model("Skill", skillSchema);
export default Skill;
