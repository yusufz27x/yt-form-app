import mongoose, { Schema } from "mongoose";

const formSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    applicationsNumber: {
        type: Number,
        default: 0
    },
    questions: {
        type: [{
            type: Number,
            question: String,
            isRequired: Boolean,
            options: [String], // Eğer type'ı çoktan seçmeliye denk geliyorsa doludur
        }],
    },
    isActive: {
        type: Boolean,
        default: false,
        required: true,
    }

}, { timestamps: true });

let FormModel: mongoose.Model<any>
try{
     FormModel = mongoose.model("forms")
}
catch(error){
    FormModel = mongoose.model("forms", formSchema)
}
export default FormModel;