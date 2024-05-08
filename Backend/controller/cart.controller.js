import Cart from "../model/cart.model.js";

export const getCart = async(req, res) => {
  try {
    const { email, CourseName,CourseImage,Price } = req.body;
    const newData = new Cart({
        CourseName,
        CourseImage,
        Price
    });
    const newCart = new Cart({
      email:email,
      Course_d:[newData]
    });
    await newCart.save();
    res.status(201).json({
      message: "Cart created successfully"
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};