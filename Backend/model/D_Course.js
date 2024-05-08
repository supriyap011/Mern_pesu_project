import mongoose from "mongoose";

const danceSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});
const D_Course = mongoose.model("coding_couses", danceSchema);

export default D_Course;