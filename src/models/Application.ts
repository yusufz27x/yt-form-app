import mongoose, { Schema } from "mongoose";
import { ApiQuestion } from "./Form";

const applicationSchema = new Schema({
    formID: {
        type: Schema.ObjectId,
        required: false,
    },
    answers: {
        type: [String],
        required: true,
    }

}, { timestamps: true });

let ApplicationsModel: mongoose.Model<any>
try {
    ApplicationsModel = mongoose.model("applications")
} catch (error) {
    ApplicationsModel = mongoose.model("applications", applicationSchema)
}
export default ApplicationsModel;

export interface ApiApplication {
    _id: {
        $oid: string;
    };

    form_id: {
        $oid: string;
    };

    answers: ApiAnswer[];
}

export interface ApiAnswer {
    type: number;
    answer?: string[] | string;
}