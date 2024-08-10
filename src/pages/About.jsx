import { NavLink } from 'react-router-dom';
import PlaceholderImage from '../src/assets/headshot2.jpg';

// Replace these variables with your information
const firstName = 'Brianna';
const jobTitle = 'Assistant Manager';
const company = 'Novadoz Pharmaceuticals';
const mainDuty = 'Account Services and Sales Operations';
const jobLocation = 'Piscataway, NJ.';
const briefJobDescription = 'Armed with a Bachelors degree in Health Care Administration from Rutgers University, I manage top accounts, lead special projects, and foster strong relationships with National and Territory Account Managers by creating efficient workflows and providing guidance to customer service associates. I present monthly analysis to upper management, suggesting strategies for improved performance and system enhancements. Client Relations and Support is my jam, and I love diving into CRM systems to ensure top-notch satisfaction.';
const careerObjective = 'I am currently looking to work for an amazing company doing meaningful work. Preferably in the tech industry or tech adjacent. I am also open to contract and consulting work';
const personalLife = 'Outside of work I am a proud dog mommy to Reesie, you will find me volunteering, mingling in professional circles, always hungry for new connections and opportunities for growth. Lets connect and chat about how we can make an impact together! 🚀';

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headshot */}
          <img className='headshot' src={PlaceholderImage} alt="placeholder image" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, an {jobTitle} working for {company} on {mainDuty} located in {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>If you are interested in my work, reach out to me!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}
 export default About;