import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>
        🌟 <strong>Ready for an Adventure of a Lifetime?</strong> 🌟<br />
        Are you yearning for excitement and new experiences? Imagine exploring the great outdoors, hiking through picturesque trails with breathtaking views, surfing on the sunlit waves, or engaging in a lively game of frisbee with friends. These aren’t just activities—they’re thrilling journeys and opportunities to forge unforgettable memories.
        <br /><br />
        I’m reaching out to all adventure seekers and thrill enthusiasts who are ready to embrace the outdoors and have a blast. Whether you're a seasoned adventurer or someone looking to try something new, your presence would add incredible value to these experiences. Here’s what you can look forward to:
        <br /><br />
        <strong>Hiking:</strong> Discover hidden trails, conquer stunning peaks, and soak in panoramic landscapes that will leave you speechless. Each hike is not just a physical journey but a chance to connect with nature and push your limits.
        <br /><br />
        <strong>Surfing:</strong> Feel the rush of riding the waves as the ocean becomes your playground. Experience the joy of catching the perfect wave and the camaraderie that comes with sharing this exhilarating sport.
        <br /><br />
        <strong>Frisbee:</strong> Enjoy some fun in the sun with an action-packed game of frisbee. Whether it's a casual game or a competitive match, it's all about having fun and making the most of our time together.
        <br /><br />
        These adventures are not just about the activities; they're about creating moments of joy, laughter, and connection. Imagine the stories we’ll share and the friendships we’ll build as we embark on these journeys together.
        <br /><br />
        So, if you’re up for some incredible adventures and want to make these experiences even more memorable, don’t hesitate to get in touch. Let’s make these moments count and create stories we’ll remember for years to come. Reach out, and let’s embark on these epic adventures together!
      </p>
      <div className="contact-card-container">
        <div className="contact-card contact-card1">
          <a href="https://www.facebook.com/balibollista" target="_blank" rel="noopener noreferrer">
            <img src={require('../icons/fb-logo.jpg')} alt="Facebook" className="card-icon" />
          </a>
        </div>
        <div className="contact-card contact-card2">
          <a href="https://www.instagram.com/george.pacao/" target="_blank" rel="noopener noreferrer">
            <img src={require('../icons/insta-logo.jpg')} alt="Instagram" className="card-icon" />
          </a>
        </div>
        <div className="contact-card contact-card3">
          <a href="mailto:valisraelvillagracia8@gmail.com">
            <img src={require('../icons/gmail-logo.jpg')} alt="Gmail" className="card-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
