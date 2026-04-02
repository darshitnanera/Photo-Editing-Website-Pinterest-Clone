import { Schema, Types } from "mongoose";
import mongoose from "mongoose";


const boardSchema = new Schema({
    
    title: {
        required: true,
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
},
    { timestamps: true }
)

export default mongoose.model("Board",boardSchema)