const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Job = require('./models/Job');
const Admin = require('./models/Admin');

dotenv.config();

const admin = {
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD,
};

const jobs = [
  // {
  //   title: 'Senior React Developer',
  //   location: 'Remote',
  //   experience: '5+ Years',
  //   description: 'We are looking for an experienced React developer to join our team. You will be responsible for building high-quality web applications and mentoring junior developers.',
  // },
  // {
  //   title: 'Node.js Backend Engineer',
  //   location: 'New York, NY',
  //   experience: '3+ Years',
  //   description: 'Join us to build scalable backend services using Node.js and MongoDB. Experience with Express and RESTful APIs is required.',
  // },
  // {
  //   title: 'UI/UX Designer',
  //   location: 'Hybrid',
  //   experience: '2+ Years',
  //   description: 'Create beautiful and intuitive user interfaces for our clients. You should have a strong portfolio and experience with Figma or Adobe XD.',
  // },
  // {
  //   title: 'Cloud Architect',
  //   location: 'Remote',
  //   experience: '7+ Years',
  //   description: 'Design and implement cloud infrastructure solutions for our enterprise clients using AWS or Azure.',
  // },
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    await Job.deleteMany();
    await Job.insertMany(jobs);

    await Admin.deleteMany();
    await Admin.create(admin);

    console.log('Data Seeded Successfully');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedData();
