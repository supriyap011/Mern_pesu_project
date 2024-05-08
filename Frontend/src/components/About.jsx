import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const About = () => {
  return (
    <>
        <Navbar/> 
        <div className="row aboutus ">
          <div className="abt_1">
            <img
              src="https://media.istockphoto.com/id/1075599562/photo/programmer-working-with-program-code.jpg?s=612x612&w=0&k=20&c=n3Vw5SMbMCWW1YGG6lnTfrwndNQ8B_R4Vw-BN7LkqpA="
              alt="about us"
              style={{ width: "100%" }}
            />
          </div>
          <div className="abt_2">
            <p className="text-justify mt-2">
            At our coding e-commerce website, we're passionate about empowering individuals with the transformative power of coding. Our comprehensive courses, delivered by industry experts, unlock a world of possibilities. Whether you're seeking career advancement, nurturing a personal project idea, or simply wanting to expand your skillset, learning to code unlocks doors to endless opportunities. Our courses equip you with in-demand programming languages and practical coding skills, enabling you to build real-world applications and confidently navigate the ever-evolving digital landscape. Invest in yourself, join our thriving online community, and take the first step towards a more fulfilling future – the future where you write the code.
            </p>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default About