import React, { useState } from "react";
import axios from "axios"; // Library for API calls
function Cards({ item }) {
  const handleAddToCart = async (course) => {
    const courseData = {
      courseId: course._id,
      name: course.name,
    };
    try {
      const response = await axios.post('/api/enroll', course); // API endpoint for enrollment
      console.log("Course Enrolled Successfully:", response.data); // Handle successful response
      // Optional: Update local state for UI feedback (e.g., set enrolled flag)
    } catch (error) {
      console.error('Error enrolling course:', error);
      alert('Failed to enroll! Please try again later.');
    }
  };
  const handleCart= async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:4001/cart/', { email:"ask@test.com",CourseId:"09" });
        alert('Data posted successfully!');
    } catch (error) {
        console.error('Error posting data:', error);
    }
};
  
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div
          className={`card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border`}
        >
          <figure>
            <img src={item.image} alt="Dance" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">Rs.{item.price}</div>
              <a href="Cart.jsx">
                <button
                  className="cursor-pointer px-2 py-1 rounded-full border-[2px] duration-200 btn_go"> Enroll Now 
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
