const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://smit-1999.github.io',
  title: 'SS',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Smit Shah',
  role: 'MS CS at University of Wisconsin Madison | Ex-Microsoft',
  description:
    'Experienced professional in software development interested in building scalable systems',
  resume:
    'https://drive.google.com/file/d/1HoiwUuXLN0ImvXCmM0EpUfOr6oB9zMSV/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/smit-shah-336369186/',
    github: 'https://github.com/smit-1999',
  },
}

const education = [
  {
    name: 'University of Wisconsin Madison',
    description: 'Masters in Computer Science',
    stack: ['Sept 2023 - May 2025'],
  },
  {
    name: 'BITS Pilani',
    description: 'B.E in Computer Science + Minor in Data Science',
    stack: ['Aug 2017 - Jun 2021'],
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Travellite',
    description:
      'A web application for cab booking  built as a part of software engineering course at BITS Pilani',
    stack: [
      'Software Engineering',
      'MongoDB',
      'TypeScript',
      'React',
      'ExpressJS',
      'NodeJS',
    ],
    sourceCode: 'https://github.com/Travellite',
    livePreview: 'https://github.com/Travellite',
  },
  {
    name: 'UDP with RDT Protocol',
    description:
      'Developed a robust wrapper layer over UDP network to ensure retransmissions, ack numbers, sequenc numbers',
    stack: ['Computer Networks', 'Python'],
    sourceCode: 'https://github.com/smit-1999/UDP-with-RDT-Protocol',
  },
  {
    name: 'AIML Bot',
    description:
      'An AIML chatbot which recommends courses based on student inputs, likings and interests',
    stack: ['Artificial Intelligence', 'Android', 'Python', 'Flask', 'Java'],
    sourceCode: 'https://github.com/smit-1999/AIML_Bot',
    livePreview: 'https://github.com/smit-1999/AIML_Bot#demo',
  },
  {
    name: 'Apriori FP Tree',
    description:
      'In this assignment, frequent itemsets and interesting association rules are generated using Apriori and FP-growth algorithm',
    stack: ['Data Mining', 'Java'],
    sourceCode: 'https://github.com/smit-1999/Apriori-FP-Tree',
  },
  {
    name: 'Medical Expert System',
    description:
      'Expert system built using knowledge graphs to develop intelligent answers and diagnosis',
    stack: ['Artificial Intelligence', 'Python', 'Experta'],
    sourceCode: 'https://github.com/smit-1999/Medical-Expert-System',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'C#',
  'Java',
  'Python',
  'CI/CD',
  'Jest',
  'MongoDB',
  'ExpressJS',
]

const experience = [
  {
    name: 'Microsoft',
    description: 'Software Engineer',
    stack: ['Hyderabad', 'Jul 2021 - Aug 2023'],
  },
  {
    name: 'Amazon',
    description: 'Software Development Intern',
    stack: ['Hyderabad', 'Jan 2021 - Jun 2021'],
  },
  {
    name: 'Walmart Labs',
    description: 'Software Development Intern',
    stack: ['Bengaluru', 'May 2020 - Jul 2020'],
  },
  {
    name: 'MapMyIndia',
    description: 'Software Development Intern',
    stack: ['New Delhi', 'May 2019 - Jul 2019'],
  },
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'smitshahpersonal@gmail.com',
}

export { header, about, projects, skills, contact, education, experience }
