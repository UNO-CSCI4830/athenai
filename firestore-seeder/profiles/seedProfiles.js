const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const { collection, addDoc } = require("firebase-admin/firestore");

const sampleProfiles = [
  // Your sample profiles go here
];

const sampleProfiles = [
  {
    name: "Emily Chen",
    title: "Machine Learning Intern at Tesla",
    aboutMe: "Driven by curiosity and a love for AI, I specialize in building ML models with real-world impact.",
    education: [
      { degree: "B.S. in Computer Science", school: "UC Berkeley", year: "2023" }
    ],
    experience: [
      { role: "ML Intern", company: "Tesla", years: "2024 - Present", description: "Developing computer vision models for driver safety." }
    ],
    skills: ["Python", "TensorFlow", "OpenCV", "Data Science"],
    contact: {
      email: "emily.chen@berkeley.edu",
      phone: "(408) 555-0912",
      website: "emilychen.dev"
    },
    progress: 82
  },
  {
    name: "Carlos Ramirez",
    title: "Backend Developer at Amazon",
    aboutMe: "Backend engineer focused on building scalable cloud systems using AWS and Node.js.",
    education: [
      { degree: "B.S. in Software Engineering", school: "University of Texas", year: "2022" }
    ],
    experience: [
      { role: "Backend Dev", company: "Amazon", years: "2023 - Present", description: "Designed microservices for the fulfillment platform." },
      { role: "Intern", company: "Dell", years: "2022", description: "Built internal APIs and managed PostgreSQL databases." }
    ],
    skills: ["Node.js", "AWS", "Docker", "PostgreSQL"],
    contact: {
      email: "carlos.ramirez@utexas.edu",
      phone: "(210) 444-8723",
      website: "carlos.codes"
    },
    progress: 70
  },
  {
    name: "Sophia Lee",
    title: "UI/UX Designer at Adobe",
    aboutMe: "I bridge design and technology to create accessible and engaging user experiences.",
    education: [
      { degree: "B.A. in Interaction Design", school: "California College of the Arts", year: "2021" }
    ],
    experience: [
      { role: "Designer", company: "Adobe", years: "2022 - Present", description: "Designing UI for cross-platform creative tools." }
    ],
    skills: ["Figma", "Sketch", "HTML", "CSS"],
    contact: {
      email: "sophia.lee@cca.edu",
      phone: "(415) 867-2331",
      website: "sophialee.design"
    },
    progress: 89
  },
  {
    name: "Jake Thompson",
    title: "DevOps Engineer at Cisco",
    aboutMe: "I automate infrastructure to help teams deploy faster and more reliably.",
    education: [
      { degree: "B.S. in Computer Engineering", school: "San Jose State University", year: "2020" }
    ],
    experience: [
      { role: "DevOps Engineer", company: "Cisco", years: "2021 - Present", description: "CI/CD, Docker, and Kubernetes expert." }
    ],
    skills: ["CI/CD", "Kubernetes", "Jenkins", "Linux", "Python"],
    contact: {
      email: "jake.thompson@sjsu.edu",
      phone: "(408) 123-9876",
      website: "jakethompson.dev"
    },
    progress: 78
  },
  {
    name: "Fatima Yusuf",
    title: "Full-Stack Developer at Stripe",
    aboutMe: "Passionate about fintech and modern full-stack web development.",
    education: [
      { degree: "B.S. in Computer Science", school: "University of Illinois", year: "2023" }
    ],
    experience: [
      { role: "Full-Stack Dev", company: "Stripe", years: "2024 - Present", description: "Working on dashboard tools using React and Go." }
    ],
    skills: ["React", "Go", "TypeScript", "GraphQL"],
    contact: {
      email: "fatima.yusuf@illinois.edu",
      phone: "(773) 456-7890",
      website: "fatimayusuf.tech"
    },
    progress: 80
  },
  {
    name: "Ethan Brooks",
    title: "Cybersecurity Analyst at IBM",
    aboutMe: "Focused on securing cloud systems and ethical hacking.",
    education: [
      { degree: "B.S. in Cybersecurity", school: "George Mason University", year: "2022" }
    ],
    experience: [
      { role: "Cybersecurity Analyst", company: "IBM", years: "2023 - Present", description: "Monitoring and defending enterprise networks." }
    ],
    skills: ["Wireshark", "Linux", "Python", "Burp Suite"],
    contact: {
      email: "ethan.brooks@gmu.edu",
      phone: "(571) 321-8765",
      website: "ethanbrooks.dev"
    },
    progress: 72
  },
  {
    name: "Maya Patel",
    title: "Mobile App Developer at Meta",
    aboutMe: "I build fast and fluid mobile apps with React Native.",
    education: [
      { degree: "B.S. in Computer Science", school: "Georgia Tech", year: "2022" }
    ],
    experience: [
      { role: "Mobile Dev", company: "Meta", years: "2023 - Present", description: "Developing features for iOS and Android apps." }
    ],
    skills: ["React Native", "JavaScript", "Swift", "Firebase"],
    contact: {
      email: "maya.patel@gatech.edu",
      phone: "(404) 321-4321",
      website: "mayapatel.io"
    },
    progress: 77
  },
  {
    name: "Liam Nguyen",
    title: "Data Analyst Intern at Google",
    aboutMe: "I find insights in data to drive smarter decisions.",
    education: [
      { degree: "B.S. in Statistics", school: "UCLA", year: "2024" }
    ],
    experience: [
      { role: "Intern", company: "Google", years: "2025", description: "Analyzing trends in Workspace usage data." }
    ],
    skills: ["SQL", "R", "Python", "Tableau"],
    contact: {
      email: "liam.nguyen@ucla.edu",
      phone: "(310) 654-1234",
      website: "liamstats.com"
    },
    progress: 65
  },
  {
    name: "Isabella Rossi",
    title: "Cloud Engineer at Oracle",
    aboutMe: "Cloud infrastructure specialist focused on automation and cost optimization.",
    education: [
      { degree: "M.S. in Cloud Computing", school: "University of Washington", year: "2021" }
    ],
    experience: [
      { role: "Cloud Engineer", company: "Oracle", years: "2022 - Present", description: "Managing multi-cloud environments and deployments." }
    ],
    skills: ["AWS", "Terraform", "Python", "Bash"],
    contact: {
      email: "isabella.rossi@uw.edu",
      phone: "(206) 888-5432",
      website: "isabellarossi.cloud"
    },
    progress: 85
  },
  {
    name: "Noah Kim",
    title: "AI Research Intern at NVIDIA",
    aboutMe: "I work at the intersection of deep learning and robotics.",
    education: [
      { degree: "B.S. in Robotics", school: "Carnegie Mellon University", year: "2023" }
    ],
    experience: [
      { role: "Intern", company: "NVIDIA", years: "2024", description: "Contributing to autonomous navigation algorithms." }
    ],
    skills: ["PyTorch", "C++", "ROS", "Computer Vision"],
    contact: {
      email: "noah.kim@cmu.edu",
      phone: "(412) 987-6789",
      website: "noahkim.ai"
    },
    progress: 88
  }
];

async function seedProfiles(firestore) {
    const profilesCollection = collection(firestore, "profiles");
  
    for (const profile of sampleProfiles) {
      await addDoc(profilesCollection, profile);
      console.log(`Seeded profile: ${profile.name}`);
    }
  }
  
  // Call the function to seed profiles
  seedProfiles(db)  // Pass the 'db' parameter here
    .then(() => {
      console.log("All profiles seeded successfully!");
    })
    .catch((error) => {
      console.error("Error seeding profiles:", error);
    });
  
  module.exports = seedProfiles;