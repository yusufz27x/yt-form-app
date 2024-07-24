import mongoose, { Schema } from "mongoose";
import { ApiQuestion } from "./Form";


// Define a Mongoose schema for ApiAnswer
const apiAnswerSchema = new Schema({
    type: {
        type: Number,
        required: true,
    },
    answer: {
        type: Schema.Types.Mixed, // Mixed type to allow both string[] and string
        required: false,
    }
});

const applicationSchema = new Schema({
	formID: {
		type: Schema.ObjectId,
		required: false,
	},
	answers: {
		type: [apiAnswerSchema],
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

	// _id: string,

	form_id: string,

	answers: ApiAnswer[];
}

export interface ApiAnswer {
	type: number;
	answer?: string[] | string;
}

export interface InputProps {
	updateFormAnswer: (answer: string, type: number, index?: number) => number;
}