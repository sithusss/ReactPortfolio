import React from 'react';
import '../styles/Intro.css';

const Intro = () => {
  return (
    <div className="intro-container">
      {/* Image Section */}
      <div className="image-section">
        <img
          src="https://via.placeholder.com/200" // Replace with your image URL
          alt="Your Name"
          className="profile-image"
        />
      </div>

      {/* Initial Details Section */}
      <div className="details-section">
        <h1 className="name">Your Name</h1>
        <p className="role">Software Developer | Tech Enthusiast</p>
        <p className="description">
          Hi, I'm a passionate software developer with a strong background in building scalable web applications. I love solving complex problems and creating user-friendly experiences.
        </p>
      </div>

      {/* What I Do Section */}
      <div className="what-i-do-section">
        <h2>What I Do</h2>
        
        <div className="what-i-do-content">
          {/* Tech Background Section */}
          <div className="category">
            <h3>Tech Background</h3>
            <div className="sub-content">
              <p>
                I have experience in full-stack development, specializing in React.js, Node.js, and MongoDB. I also work with cloud platforms like AWS and have a strong understanding of DevOps practices.
              </p>
              <div className="image-group">
                <img
                  src="https://via.placeholder.com/100" // Replace with your image URL
                  alt="Tech 1"
                  className="sub-image"
                />
                <img
                  src="https://via.placeholder.com/100" // Replace with your image URL
                  alt="Tech 2"
                  className="sub-image"
                />
              </div>
            </div>
          </div>
          
          {/* Leadership Section */}
          <div className="category">
            <h3>Leadership</h3>
            <div className="sub-content">
              <p>
                I have led cross-functional teams to deliver projects on time and within budget. I believe in fostering collaboration and empowering team members to achieve their best.
              </p>
              <div className="image-group">
                <img
                  src="https://via.placeholder.com/100" // Replace with your image URL
                  alt="Leadership 1"
                  className="sub-image"
                />
                <img
                  src="https://via.placeholder.com/100" // Replace with your image URL
                  alt="Leadership 2"
                  className="sub-image"
                />
              </div>
            </div>
          </div>
          
          {/* Volunteering Section */}
          <div className="category">
            <h3>Volunteering</h3>
            <div className="sub-content">
              <p>
                I actively volunteer with organizations that promote tech education for underprivileged communities. I also mentor aspiring developers and contribute to open-source projects.
              </p>
              <div className="image-group">
                <img
                  src="https://via.placeholder.com/100" // Replace with your image URL
                  alt="Volunteering 1"
                  className="sub-image"
                />
                <img
                  src="https://via.placeholder.com/100" // Replace with your image URL
                  alt="Volunteering 2"
                  className="sub-image"
                />
              </div>
            </div>
          </div>
          
          {/* Other Activities Section */}
          <div className="category">
            <h3>Other Activities</h3>
            <div className="sub-content">
              <p>
                In my free time, I enjoy writing technical blogs, participating in hackathons, and exploring new technologies. I'm also an avid reader and love traveling.
              </p>
              <div className="image-group">
                <img
                  src="https://via.placeholder.com/100" // Replace with your image URL
                  alt="Other Activities 1"
                  className="sub-image"
                />
                <img
                  src="https://via.placeholder.com/100" // Replace with your image URL
                  alt="Other Activities 2"
                  className="sub-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
