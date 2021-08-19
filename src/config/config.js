import profilePic from "../assets/profile-pic.jpg";
import reactLogo from "../assets/react-logo.svg";
import uiDesign from "../assets/ui-design.svg";
import unity from "../assets/unity.svg";

export const Data = {
  profile_image: profilePic,
  name: "Karim Abbas",
  title: "Software Engineer",
  topSkills: [
    { logo: reactLogo, title: "JavaScript" },
    { logo: uiDesign, title: "HTML / CSS" },
    { logo: unity, title: "Unity" },
  ],
  about: `Software Engineer From Lebanon, specializing in Web and Game development. Experienced with all stages of the 
development cycle for dynamic web projects.\n   
More than capable of Handling games or interactive projects 
using the Unity Engine. Solid knowledge of the Unreal Engine from materials, blueprints, animation state
machines, to particles. Well-versed in numerous programming languages including HTML5, JavaScript, PHP 
OOP, CSS, C#. Strong background in project management and customer relations.`,
  experience: [
    {
      position: "Senior Front-end Engineer",
      company: "TF961",
      date: "11/2020 - present",
      location: "Beirut",
      description: `
- Work on the front-end of a digital transformation project for an international insurance group using 
React.
- Develop multiple informational websites using React, next.js, and Strapi.
- Handle code reviews for PRs to assure higher code quality.
- Analyze user stories to assess their development and time requirement.
- Create an ever-growing reusable components library for React.js and Next.js.
- Implement Storybook to the components’ library.
- Create unit tests using jest and enzyme.
      `,
    },
    {
      position: "Salesforce Consultant",
      company: "EI Technologies",
      date: "07/2019 - 07/2020",
      location: "Beirut",
      description: `
- Work as a part of a team involved in the development of a B2B web portal for a major French clothing
brand.
- Serve as a direct contact with the clients to assess their needs, hear their feedback, and plan for 
sprints.
- Improve and implement new features on the customer service portal for a major French clothing 
brand.
- Develop the Salesforce CRM for a major French film distribution company.
- Work on stock management app built on Xamarin for a major French leather manufacturer.
- Review code for quality, finding weaknesses & ensuring adherence to standards.
- Lead a team in order to successfully split tasks plan deliveries and ensure client satisfaction.
      `,
    },
    {
      position: "Web and Game Developer",
      company: "The Council for Visual affairs",
      date: "07/2018 - 06/2019",
      location: "Beirut",
      description: `
- Cooperate with designers to create clean interfaces and simple, intuitive interactions and experiences.
- Develop project concepts and maintain optimal workflow.
- Played a key role in significantly reducing the initial download size of the mobile application Minimoji 
developed on Unity.
- Complete detailed programming and development tasks for front-end, WordPress, and Unity projects.
- Carry out quality assurance tests to discover errors and optimize usability.
- Perform research to acquire new knowledge necessary to perform assigned tasks and maintain a 
process of technological evolution
      `,
    },
    {
      position: "Game Developer",
      company: "Game Cooks",
      date: "03/2017 - 08/2018",
      location: "Beirut",
      description: `
- Develop games and simulations using both Unity and Unreal Engines.
- Write solid code with a focus on performance and memory usage.
- Develop the core gameplay, game rules, and network logic for a multiplayer backgammon game using 
Unity.
- Work with a multi-disciplinary team of artists, designers, and developers to create VR games using 
unreal and unity.
- Fix bugs during development and in production.
- Design, test and implement game features.
      `,
    },
    {
      position: "Part-time Web Developer",
      company: "Flip",
      date: "09/2015 - 01/2017",
      location: "Beirut",
      description: `
- Full-stack Web Development using WordPress, HTML5, CSS3, and JS
- Code UI/UX design into digital application.
- Create responsive websites using modern CSS and JavaScript libraries.
      `,
    },
  ],
};
