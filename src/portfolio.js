// SYNTAX AND CAPITALIZATION MATTERS!!!

// Header section - Defines basic website information
const header = {
  "homepage": "https://Zomara88.github.io/Personal-Portfolio", // URL for the homepage - !!! IMPORTANT: UPDATE THIS TO YOUR OFFICIAL WEBSITE LINK BEFORE DEPLOYING!!!!
  title: 'Portfolio', // Title shown in left of the navigation bar
}

// About section
const about = {
  name: 'Bryan',
  role: 'aspiring software engineer',
  description: `
    With a Bachelor of Science in Biomedical Engineering from the University of Houston, I have a strong 
    foundation in technical communication and programming languages such as MATLAB and Python. 
    One of the highlights of my undergraduate years was my Capstone Project, where I developed a spike 
    protein microarray chip for COVID-19 antibody detection. Currently, I am pursuing a Master's in 
    Computer Science to transition from a pre-medical career path to software development. While my 
    focus is on AI, I am open to exploring other opportunities in the future.
  `,
  resume: 'https://drive.google.com/file/d/1j-TK6IJbN0S-t-o2yXCrhUhMPLIxkTWf/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/csbryanchoo', // LinkedIn profile link
    github: 'https://github.com/Zomara88', // GitHub profile link
  },
}

// Projects section - keep same format per project [sourceCode: github, livePreivew: any link] [Uploading Images: /public/img - using it here follow format ( "./img/<img file>" ) ]
const projects = [
  {
    name: 'Stock Predictor',
    description: `
    The Flask-based web application supports user registration, login, stock prediction, 
    and market data analysis. It utilizes Flask and Flask-CORS for server setup and cross-origin requests, 
    while TextBlob, yfinance, and praw handle stock data retrieval, Reddit API access, sentiment analysis, 
    and data processing. Firebase Admin SDK manages Firestore for user data storage, with a certificate file 
    path retrieved from environment variables. 
  `,
    stack: ['HTML', 'CSS', 'Python'],
    sourceCode: 'https://github.com/Zomara88/Stock_Predictor?tab=readme-ov-file',
    image: './img/Stock_predictor.png',
  },
  {
    name: 'NTHSHack Portal',
    description: `
    Contributor to a hackathon portal: The site features a fully customizable front end with email and Google sign-in, 
    hacker registration, and dynamic content fetched from the backend, including images, challenges, 
    sponsors, and FAQs. It supports push notifications, a spotlight carousel for ongoing events, 
    QR code check-ins for swag claims, and a built-in schedule. I specifically worked on the schedule page and the challenges/prizes selection page.
  `,
    stack: ['TypeScript', 'JavaScript'],
    sourceCode: 'https://github.com/AndrewDmit04/NTHSHack-dev',
    image: '/img/NTHS.png',
  },
  {
    name: 'Application of AI in Robots ',
    description: `
    I investigated socially assistive robots integrated with artificial intelligence (AI) and 
    explored simulation applications, including AWS Robomaker, Unity, and MATLAB Simulink. I tested 
    pick-and-place simulations in MATLAB and Unity to evaluate their compatibility with a humanoid robot 
    arm. My findings indicated that MATLAB Simulink was the most effective for demonstrating a pick-and-place 
    robot without relying on software preferences like Ubuntu. 
  `,
    stack: ['MATLAB Simulink'],
    image: '/img/robot.png',
  },
]

// Skills section
const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'CI/CD',
  'MATLAB',
  'Python',
  'SQL',
  'Firebase',
]

// Experience section - Work and Volunteering
const experience = [
  {
    title: 'Medical Assistant', // position
    company: 'Xenon Health', // company
    location: 'Katy, TX',
    date: 'August-December 2023',
    description: `
    Assisted with recording patient vitals after spinal injection procedures, as well as wheeling them out of the clinic. Other
duties include placing EKG leads on the patients before their procedure. 
  `,
  },
  {
    title: 'Medical Scribe', // position
    company: 'ScribeAmerica', // company
    location: 'Katy, TX',
    date: 'April 2022-November 2023',
    description: `
    Accurately documented patient charts for ER physicians in a high-pressure environment, including patient histories, physical
exams, and discharge dispositions. Assisted with recording EKG readings and essential patient medications.
  `,
  },
  {
    title: 'Undergraduate', // position
    company: 'Capstone Group Project', // company
    location: 'Houston, TX',
    date: 'August 2021-April 2022 ',
    description:
      'Collaborated with a group of 3 to conduct an experiment quantifying primary antibody binding to spike protein using fluorescently labeled secondary antibodies.',
  },
  {
    title: 'Member',
    company: 'American Medical Student Association (AMSA)',
    location: 'University of Houston',
    date: 'August 2020-April 2021',
    description: `
    Assisted with volunteer efforts at Project CURE and Houston Food Bank, which involved sorting medical supplies and food
items, respectively. Attended meetings with physician guest speakers, as well as networked with fellow pre-medical students.
  `,
  },
]

// Education section
const education = [
  {
    degree: 'Bachelor of Science in Biomedical Engineering',
    school: 'University of Houston',
    location: 'Houston, TX',
    date: 'May 2022',
    description: 'Coursework in neuroscience, quantitative physiology, statistics, and organic chemistry.',
  },
]

// Contact section - (optional)
const contact = {
  email: 'bryanchoo5526@gmail.com',
}


// Important: If you add extra sections, make sure to export them here
// Export all sections so they can be used in other files
export { header, about, projects, skills, experience, education, contact }
