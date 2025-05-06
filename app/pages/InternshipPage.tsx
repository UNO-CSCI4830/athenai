import React, { useState, useEffect } from 'react';
import { Search, Filter, Pin, Clock, Briefcase, Bell, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import { allInternships } from '../data/mockInternships';

export default function InternshipPage() {
  const [email, setEmail] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const internshipsPerPage = 5;
  const [filters, setFilters] = useState({
    industry: '',
    location: '',
    duration: '',
    type: '',
    salary: '',
    mode: ''
  });
  const [selectedInternship, setSelectedInternship] = useState(allInternships[0]);

  // ...handle functions remain unchanged

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Optional: reset to first page when search changes
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters({
      ...filters,
      [filterType]: value
    });
    setCurrentPage(1); // reset to page 1 when filters change
  };


  //const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (email) {
      alert(`You've subscribed to internship alerts with email: ${email}`);
    } else {
      alert("Please enter a valid email address.");
    }
  };


  const filteredInternships = allInternships.filter(internship => {
    const matchesSearch = searchTerm === '' || 
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesIndustry = filters.industry === '' || internship.industry === filters.industry;
    const matchesLocation = filters.location === '' || internship.location.includes(filters.location);
    const matchesDuration = filters.duration === '' || internship.duration === filters.duration;
    const matchesType = filters.type === '' || internship.type === filters.type;
    const matchesSalary = filters.salary === '' || internship.salary.includes(filters.salary);
    const matchesMode = filters.mode === '' || internship.mode === filters.mode;

    return matchesSearch && matchesIndustry && matchesLocation && matchesDuration && matchesType && matchesSalary && matchesMode;
  });

  const filteredFeaturedInternships = filteredInternships.filter(i => i.featured);
  const nonFeaturedInternships = filteredInternships.filter(i => !i.featured);

  const totalPages = Math.ceil(nonFeaturedInternships.length / internshipsPerPage);
  const paginatedInternships = nonFeaturedInternships.slice(
    (currentPage - 1) * internshipsPerPage,
    currentPage * internshipsPerPage
  );

  const handlePageChange = (page: number) => setCurrentPage(page);

  const handleApplyClick = (id: string) => {
    for(let i = 0; i < allInternships.length; i++) {
      if(allInternships[i].id == id) {
        setSelectedInternship(allInternships[i]);
      }
    }
    setIsOpen(true);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [appliedConfirm, setAppliedConfirm] = useState(new Array(allInternships.length).fill(false));

  const submitApply = () => {
    for(let i = 0; i < allInternships.length; i++) {
      if(allInternships[i].id == selectedInternship.id) {
        appliedConfirm[i] = true;
      }
    }
    setIsOpen(false);
  }


  return (
    <div className="min-h-screen flex flex-col">
    <Header />
    <div className="bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 min-h-screen px-4 py-8">
      <main className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Find Your Perfect Internship</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover internships tailored to your career path.</p>
        </div>

        {/* Search */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by keyword, company, or location"
                value={searchTerm}
                onChange={handleSearchChange}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Industry */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
              <select
                value={filters.industry}
                onChange={(e) => handleFilterChange('industry', e.target.value)}
                className="block w-full border-gray-300 rounded-md"
              >
                <option value="">All Industries</option>
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <option value="Data Science">Data Science</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Web Development">Web Development</option>
                <option value="Design">Design</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="DevOps">DevOps</option>
                <option value="Management">Management</option>
                <option value="Law">Law</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Human Resources">Human Resources</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <select
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="block w-full border-gray-300 rounded-md"
              >
                <option value="">All Locations</option>
                <option value="San Francisco, CA">San Francisco, CA</option>
                <option value="New York, NY">New York, NY</option>
                <option value="Austin, TX">Austin, TX</option>
                <option value="Chicago, IL">Chicago, IL</option>
                <option value="Seattle, WA">Seattle, WA</option>
                <option value="Boston, MA">Boston, MA</option>
                <option value="Washington, DC">Washington, DC</option>
                <option value="Denver, CO">Denver, CO</option>
                <option value="Atlanta, GA">Atlanta, GA</option>
                <option value="Philadelphia, PA">Philadelphia, PA</option>
                <option value="Detroit, MI">Detroit, MI</option>
              </select>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
              <select
                value={filters.duration}
                onChange={(e) => handleFilterChange('duration', e.target.value)}
                className="block w-full border-gray-300 rounded-md"
              >
                <option value="">Any Duration</option>
                <option value="3 months">3 months</option>
                <option value="4 months">4 months</option>
                <option value="6 months">6 months</option>
                <option value="1 year">1 year</option>
              </select>
            </div>

            {/* Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="block w-full border-gray-300 rounded-md"
              >
                <option value="">All Types</option>
                <option value="full-time">full-time</option>
                <option value="part-time">part-time</option>
              </select>
            </div>

            {/* Salary */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
              <select
                value={filters.salary}
                onChange={(e) => handleFilterChange('salary', e.target.value)}
                className="block w-full border-gray-300 rounded-md"
              >
                <option value="">All Salaries</option>
                <option value="$15/hr">$15/hr</option>
                <option value="$18/hr">$18/hr</option>
                <option value="$20/hr">$20/hr</option>
                <option value="$22/hr">$22/hr</option>
                <option value="$25/hr">$25/hr</option>
                <option value="$30/hr">$30/hr</option>
                <option value="$40,000/year">$40,000/year</option>
                <option value="$45,000/year">$45,000/year</option>
              </select>
            </div>

            {/* Work Type */}
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">Mode</label>
              <select
                value={filters.mode}
                onChange={(e) => handleFilterChange('mode', e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
              >
                <option value="">All</option>
                <option value="remote">remote</option>
                <option value="hybrid">hybrid</option>
                <option value="in-person">in-person</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main content layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Internships */}
          <div className="lg:w-3/4">
            {/* Featured Internships */}
            {filteredFeaturedInternships.length > 0 && (
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <Star className="h-6 w-6 text-yellow-500 mr-2" />
                  Featured Internships
                </h2>
                <div className="grid gap-6">
                  {filteredFeaturedInternships.map(i => (
                    <div key={i.id} className="bg-white shadow p-4 rounded-md border-l-4 border-blue-500">
                      <h3 className="text-lg font-bold">{i.title}</h3>
                      <p className="text-sm text-gray-500">{i.company} • {i.location}</p>
                      <p className="text-sm mt-1">{i.description}</p>
                      <p className="text-sm text-gray-600 mt-1">Salary: {i.salary}</p>
                      
                      {/* Display Duration, Type, and Mode */}
                      <p className="text-sm text-gray-700 mt-2">
                        <strong>Duration:</strong> {i.duration} &nbsp;|&nbsp;
                        <strong>Type:</strong> {i.type} &nbsp;|&nbsp;
                        <strong>Mode:</strong> {i.mode}
                      </p>
                      
                      {/* Use handleApplyClick directly in onClick */}
                      <div className='flex flex-row items-center mt-3'>
                      <button 
                        onClick={() => handleApplyClick(i.id)} // Call handleApplyClick with the internship id
                        className=" bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                      >
                        Apply Now
                      </button>
                        {appliedConfirm[parseInt(i.id)-1] && <p className='pl-4 text-green-500'>Applied! {i.id}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* All Internships */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">All Internships</h2>
              <div className="grid gap-6">
                {paginatedInternships.map(i => (
                  <div key={i.id} className="bg-white shadow p-4 rounded-md">
                    <h3 className="text-lg font-bold">{i.title}</h3>
                    <p className="text-sm text-gray-500">{i.company} • {i.location}</p>
                    <p className="text-sm mt-1">{i.description}</p>
                    <p className="text-sm text-gray-600 mt-1">Salary: {i.salary}</p>

                    {/* Display Duration, Type, and Mode */}
                    <p className="text-sm text-gray-700 mt-2">
                      <strong>Duration:</strong> {i.duration} &nbsp;|&nbsp;
                      <strong>Type:</strong> {i.type} &nbsp;|&nbsp;
                      <strong>Mode:</strong> {i.mode}
                    </p>
                    
                    {/* Use handleApplyClick directly in onClick */}
                    <div className='flex flex-row items-center mt-3'>
                      <button 
                        onClick={() => handleApplyClick(i.id)} // Call handleApplyClick with the internship id
                        className=" bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                      >
                        Apply Now
                      </button>
                        {appliedConfirm[parseInt(i.id)-1] && <p className='pl-4 text-green-500'>Applied!</p>}
                      </div>
                    
                  </div>
                ))}
              </div>
            </section>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-6 space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-3 py-1 rounded-md cursor-pointer ${
                    currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:w-1/4 space-y-6">
            {/* Get Internship Alerts */}
            <div className="bg-blue-50 rounded-lg shadow p-5">
              <div className="flex items-center mb-3">
                <Bell className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">Get Internship Alerts</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Stay updated with the latest internship opportunities matching your interests.</p>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-3"
              />
              <button
                onClick={handleSubscribe}
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium cursor-pointer"
              >
                Subscribe
              </button>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-lg shadow p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <div className="bg-blue-100 p-2 rounded mr-3">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    Resume Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <div className="bg-blue-100 p-2 rounded mr-3">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    Interview Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <div className="bg-blue-100 p-2 rounded mr-3">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    Career Advice
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer />
    {isOpen && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center" onClick={() => setIsOpen(false)}>
        <div className="bg-gray-100 rounded-lg shadow-lg p-6 w-250 h-120 relative" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 p-1 text-black hover:text-gray-600 cursor-pointer"
          >
            &times;
          </button>
          
          <div className='flex flex-row space-x-4'>
            <div className='size-50 grow'>
              <h2 className="text-xl font-semibold mb-3">{selectedInternship.company} • {selectedInternship.title}</h2>
              <h3 className="text-l font-semibold mb-1">Job Requirements</h3>
                <ul className='list-disc pl-5'>
                  {selectedInternship.skills.map((item, i) => <li key={item+i}>{item}</li>)}
                </ul>
            </div>
            <div className='size-50 grow'>
              <h2 className="text-xl font-semibold">Apply Now!</h2>
              <h3 className='mb-3'>Start the application process now!</h3>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 rounded bg-gray-200 border border-gray-400 text-black mb-3"
                onClick={(e) => e.stopPropagation()}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 rounded bg-gray-200 border border-gray-400 text-black mb-3"
                onClick={(e) => e.stopPropagation()}
              />
              <input
                type="text"
                placeholder="School"
                className="w-full p-2 rounded bg-gray-200 border border-gray-400 text-black mb-3"
                onClick={(e) => e.stopPropagation()}
              />
              <input
                type="text"
                placeholder="Degree and Graduate Date"
                className="w-full p-2 rounded bg-gray-200 border border-gray-400 text-black mb-3"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="flex flex-row center items-center space-x-3 mb-5">
                <p>Resume: </p>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full bg-gray-200 p-2 rounded text-sm border border-gray-400 cursor-pointer"
                />
              </div>
                <button 
                  className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer'
                  onClick={() => submitApply()}
                >
                  Apply!
                </button>
              
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

const featuredInternships = [
  {
    id: "1",
    title: 'Software Engineering Intern',
    company: 'TechWave',
    location: 'San Jose, CA',
    duration: '6 months',
    type: 'full-time',
    mode: 'hybrid',
    industry: 'Software Engineering',
    salary: '$25/hr',
    description: 'Work on backend systems using Node.js and Firebase.',
    featured: true,
    skills: [
      "Pursuing a degree in Computer Science or related field",
      "Proficiency in at least one programming language (e.g., Java, Python, C++)",
      "Familiarity with data structures and algorithms",
      "Experience with version control systems like Git",
      "Strong problem-solving and analytical skills"
    ]
  },
  {
    id: "2",
    title: 'Web Development Intern',
    company: 'CodeBase',
    location: 'San Jose, CA',
    duration: '3 months',
    type: 'part-time',
    mode: 'in-person',
    industry: 'Web Development',
    salary: '$22/hr',
    description: 'Assist with building and maintaining frontend features.',
    featured: true,
    skills: [
      "Basic understanding of HTML, CSS, and JavaScript",
      "Familiarity with front-end frameworks (e.g., React, Vue, Angular)",
      "Some experience with backend technologies (e.g., Node.js, Express, or PHP)",
      "Ability to work with RESTful APIs",
      "Responsive design and cross-browser compatibility knowledge"
    ]
  },
  {
    id: "3",
    title: 'AI Research Intern',
    company: 'NeuroNet',
    location: 'San Jose, CA',
    duration: '6 months',
    type: 'full-time',
    mode: 'remote',
    industry: 'Artificial Intelligence',
    salary: '$30/hr',
    description: 'Support the research team with model training and data analysis.',
    featured: true,
    skills: [
      "Enrolled in a Computer Science, AI, or related program",
      "Strong foundation in Python and libraries such as NumPy, pandas, and TensorFlow or PyTorch",
      "Understanding of machine learning and deep learning concepts",
      "Familiarity with data preprocessing and analysis",
      "Experience reading academic papers and implementing models"
    ]
  }
];

const allInternships = [
  ...featuredInternships.map(i => ({ ...i, salary: '$25/hr' })),
  {
    id: "4",
    title: 'Project Management Intern',
    company: 'ManageWise',
    location: 'Atlanta, GA',
    duration: '6 months',
    type: 'full-time',
    mode: 'hybrid',
    industry: 'Management',
    salary: '$20/hr',
    description: 'Assist with planning, execution, and delivery of project milestones.',
    featured: false,
    skills: [
      "Pursuing a degree in Business, Management, or a related field",
      "Strong organizational and communication skills",
      "Familiarity with project management tools (e.g., Trello, Asana, JIRA)",
      "Basic understanding of project lifecycle and methodologies (Agile, Scrum, etc.)",
      "Ability to multitask and work under tight deadlines"
    ]
  },
  {
    id: "5",
    title: 'Legal Intern',
    company: 'Lex & Co.',
    location: 'Philadelphia, PA',
    duration: '3 months',
    type: 'part-time',
    mode: 'in-person',
    industry: 'Law',
    salary: '$18/hr',
    description: 'Support legal research and documentation tasks under senior attorneys.',
    featured: false,
    skills: [
      "Enrolled in a law school or pre-law undergraduate program",
      "Strong legal research and writing skills",
      "Knowledge of legal terminology and procedures",
      "Attention to detail and confidentiality",
      "Experience with Microsoft Office and legal databases (e.g., LexisNexis, Westlaw)"
    ]
  },
  {
    id: "6",
    title: 'Civil Engineering Intern',
    company: 'Structura Inc.',
    location: 'Los Angeles, CA',
    duration: '6 months',
    type: 'full-time',
    mode: 'in-person',
    industry: 'Civil Engineering',
    salary: '$22/hr',
    description: 'Contribute to structural design and inspection projects.',
    featured: false,
    skills: [
      "Studying Civil Engineering or a related discipline",
      "Basic knowledge of AutoCAD, Civil 3D, or similar tools",
      "Understanding of structural analysis and materials",
      "Strong mathematical and analytical abilities",
      "Fieldwork willingness and familiarity with safety protocols"
    ]
  },
  {
    id: "7",
    title: 'Mechanical Engineering Intern',
    company: 'MechaCore',
    location: 'Detroit, MI',
    duration: '4 months',
    type: 'full-time',
    mode: 'hybrid',
    industry: 'Mechanical Engineering',
    salary: '$40,000/year',
    description: 'Work on prototyping and mechanical system simulations.',
    featured: false,
    skills: [
      "Enrolled in a Mechanical Engineering program",
      "Knowledge of CAD software (e.g., SolidWorks, AutoCAD)",
      "Understanding of thermodynamics and mechanics",
      "Hands-on experience with prototyping or lab tools is a plus",
      "Good technical communication and teamwork skills"
    ]
  },
  {
    id: "8",
    title: 'Marketing Intern',
    company: 'BrandCraft',
    location: 'Phoenix, AZ',
    duration: '3 months',
    type: 'part-time',
    mode: 'in-person',
    industry: 'Marketing',
    salary: '$17/hr',
    description: 'Help with content creation, social media, and campaign analytics.',
    featured: false,
    skills: [
      "Pursuing a degree in Marketing, Communications, or a related field",
      "Strong writing and content creation skills",
      "Experience with social media platforms and analytics tools",
      "Basic understanding of SEO and digital marketing",
      "Creative thinking and attention to branding"
    ]
  },
  {
    id: "9",
    title: 'Human Resources Intern',
    company: 'PeopleFirst',
    location: 'Houston, TX',
    duration: '6 months',
    type: 'full-time',
    mode: 'hybrid',
    industry: 'Human Resources',
    salary: '$45,000/year',
    description: 'Assist with onboarding, training, and employee engagement programs.',
    featured: false,
    skills: [
      "Enrolled in a Human Resources, Business, or Psychology program",
      "Strong interpersonal and communication skills",
      "Basic knowledge of labor laws and HR practices",
      "Experience with Microsoft Office and/or HRIS systems",
      "Organized and able to handle sensitive information confidentially"
    ]
  }
];
