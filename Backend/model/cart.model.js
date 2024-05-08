import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
 {
  email: { type: String, required: true },
  Course_d: [
   {
    CourseName: {
     type: String,
    },
    CourseImage: {
     type: Number,
     default: 1,
    },
    Price:{
        type:String,
    }
   },
  ],
 },
 { timestamps: true }
);

const Cart = mongoose.model("cart_courses", CartSchema);

export default Cart;