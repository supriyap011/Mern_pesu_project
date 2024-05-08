import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";


function NewCourses() {
  const [DanceCourse, setCourses] = useState([]);
  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get("http://localhost:4001/DanceCourse");
        const data = res.data;
        console.log(data);
        console.log("DanceCourse Length:", data.length);
        setCourses(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCourse();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2 tag_2">Explore Our Advance Courses</h1>
          <p className="p_1">
          Are you ready to take the plunge into the exciting world of coding? Whether you're a complete beginner or looking to sharpen your existing skills, our comprehensive e-commerce learning platform offers an array of coding courses designed to empower you. From web development and mobile app creation to data science and beyond, we provide flexible, self-paced learning experiences for all skill levels. Learn from industry experts, master in-demand programming languages, and build real-world projects that showcase your abilities. With our supportive community and engaging learning materials, unlock your coding potential and embark on a rewarding career path – all within the convenience of our online platform. Let's start coding your future, today!
          </p>
        </div>
        

        <div>
          <Slider {...settings}>
          {DanceCourse.map((course, index) => (
            index < 5 && <Cards item={course} key={course._id} />
          ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
export default NewCourses;
