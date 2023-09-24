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
  resume: 'https://drive.google.com/file/d/1HoiwUuXLN0ImvXCmM0EpUfOr6oB9zMSV/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/smit-shah-336369186/',
    github: 'https://github.com/smit-1999',
  },
}

const education = [
  {
    name: 'University of Wisconsin Madison',
    description:
      'Masters in Computer Science',
    stack: ['Sept 2023 - May 2025'],
  },
  {
    name: 'BITS Pilani',
    description:
      'B.E in Computer Science + Minor in Data Science',
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
    stack: ['MongoDB', 'TypeScript', 'React', 'ExpressJS', 'NodeJS'],
    sourceCode: 'https://github.com/Travellite',
    livePreview: 'https://github.com/Travellite',
  },
  {
    name: 'AIML Bot',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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
  'ExpressJS'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'smitshahpersonal@gmail.com',
}

export { header, about, projects, skills, contact , education}
