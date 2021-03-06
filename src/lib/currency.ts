import { Document, model, Model, models, Schema } from "mongoose";

export interface IPureCurrency {
    _id: ICurrency["_id"];
    name: ICurrency["name"];
    ticker: ICurrency["ticker"];
    rankings: ICurrency["rankings"];
}

export interface ICurrency extends Document {
    _id: number;
    name: string;
    ticker: string;
    rankings: { date: string; ranking: number }[];
}

export const currency = new Schema({
    _id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    ticker: {
        type: String,
        required: true,
    },
    rankings: {
        type: [
            {
                date: { type: String, required: true },
                ranking: { type: Number, required: true },
            },
        ],
        default: [],
    },
});

const currencies = (models["currencies"] as Model<ICurrency>) || model("currencies", currency);

export default currencies;
