// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Miguel",
  middleName: "",
  lastName: "Martín",
  message: "Programming enthusiast with a desire to learn and create useful tools that make people's lives easier",
  icons: [{
    image: "fa-github",
    url: "https://github.com/miguel-martinr",
  },
  {
    image: "fa-linkedin",
    url: "https://linkedin.com/in/miguel-martinr",
  },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require('../assets/img/me.png'),
  imageSize: 375,
  message: "My name is Miguel Martín. I am a software engineer based in Canary Islands, Spain. I love creating useful things!",
  resume: "https://drive.google.com/file/d/1nhW8yyNQykWvNC91FhrHqyU1mBv_xpov/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "miguel-martinr", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [
    { name: 'matchsic2', demo_url: 'https://matchsic2.herokuapp.com/' },
    { name: 'WhoPays', demo_url: 'http://miguel-martinr.github.io/WhoPays/' },
    { name: 'Pycture', demo_url: '' },
    { name: 'drawing-app', demo_url: 'https://miguel-martinr.github.io/drawing-app/' },
    { name: 'react-redux-drawing-web', demo_url: 'https://miguel-martinr.github.io/react-redux-drawing-web/' },
  ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    //     img: require("../editable-stuff/hashirshoaeb.png"),
    //     label: "First slide label",
    //     paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    // },
    // {
    //     img: require("../editable-stuff/hashirshoaeb.png"),
    //     label: "Second slide label",
    //     paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    // },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Data Structures", value: 85 },
    { name: "React", value: 65 },
    { name: "TypeScript", value: 65 },
    { name: "ReduxJS Toolkit", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "HTML/CSS", value: 55 },
    { name: "Python", value: 90 },
    { name: "C/C++", value: 65 },
    { name: "SQL", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message: "",
  email: "miguel.martinr11@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Junior Software Developer (trainee student) - FreshCommerce Solutions SLU.', // Here Add Company Name
      companylogo: require('../assets/img/logofresh.svg'),
      date: 'March 2022 – June 2022',
    },
    {
      role: 'Software engineer - Atenea Mobility Technologies', 
      companyLogo: require('../assets/img/logoatenea.png'),
      date: 'September 2022 - September 2023',
    }
  
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
