import { useState } from 'react';
import { Search, Filter, MapPin, Clock, Briefcase, Bell, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function InternshipPage() {
  const [email, setEmail] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    industry: '',
    location: '',
    duration: '',
    type: ''
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    alert(`You've subscribed to internship alerts with email: ${email}`);
    setEmail('');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters({
      ...filters,
      [filterType]: value
    });
  };

  const handlePostInternship = () => {
    alert('Redirecting to post a new internship opportunity...');
  };

  // Sample featured internships data
  const featuredInternships = [
    {
      id: 1,
      title: 'AI Research Intern',
      company: 'TechVision Labs',
      location: 'San Francisco, CA',
      duration: '3 months',
      type: 'Full-time',
      industry: 'Artificial Intelligence',
      description: 'Join our team working on cutting-edge AI research projects.',
      featured: true
    },
    {
      id: 2,
      title: 'Data Science Intern',
      company: 'DataCorp',
      location: 'New York, NY',
      duration: '6 months',
      type: 'Part-time',
      industry: 'Data Science',
      description: 'Help our team analyze complex datasets and build predictive models.',
      featured: true
    },
    {
      id: 3,
      title: 'ML Engineering Intern',
      company: 'NeuralTech',
      location: 'Austin, TX',
      duration: '4 months',
      type: 'Full-time',
      industry: 'Machine Learning',
      description: 'Develop and deploy machine learning models for real-world applications.',
      featured: true
    }
  ];

  // Sample all internships data
  const allInternships = [
    ...featuredInternships,
    {
      id: 4,
      title: 'Frontend Development Intern',
      company: 'WebSolutions',
      location: 'Chicago, IL',
      duration: '3 months',
      type: 'Part-time',
      industry: 'Web Development',
      description: 'Create responsive and interactive web interfaces using modern frameworks.',
      featured: false
    },
    {
      id: 5,
      title: 'UX/UI Design Intern',
      company: 'CreativeDesign',
      location: 'Seattle, WA',
      duration: '6 months',
      type: 'Full-time',
      industry: 'Design',
      description: 'Design user-centered interfaces for web and mobile applications.',
      featured: false
    },
    {
      id: 6,
      title: 'Backend Engineering Intern',
      company: 'ServerTech',
      location: 'Boston, MA',
      duration: '4 months',
      type: 'Full-time',
      industry: 'Software Engineering',
      description: 'Develop robust backend systems and APIs for our platform.',
      featured: false
    },
    {
      id: 7,
      title: 'Cybersecurity Intern',
      company: 'SecureNet',
      location: 'Washington, DC',
      duration: '3 months',
      type: 'Full-time',
      industry: 'Cybersecurity',
      description: 'Help identify and fix security vulnerabilities in our systems.',
      featured: false
    },
    {
      id: 8,
      title: 'DevOps Intern',
      company: 'CloudTech',
      location: 'Denver, CO',
      duration: '6 months',
      type: 'Part-time',
      industry: 'DevOps',
      description: 'Automate deployment processes and manage cloud infrastructure.',
      featured: false
    }
  ];

  // Filter internships based on search term and filters
  const filteredInternships = allInternships.filter(internship => {
    const matchesSearch = searchTerm === '' || 
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesIndustry = filters.industry === '' || internship.industry === filters.industry;
    const matchesLocation = filters.location === '' || internship.location.includes(filters.location);
    const matchesDuration = filters.duration === '' || internship.duration === filters.duration;
    const matchesType = filters.type === '' || internship.type === filters.type;
    
    return matchesSearch && matchesIndustry && matchesLocation && matchesDuration && matchesType;
  });

  // Get only featured internships from filtered results
  const filteredFeaturedInternships = filteredInternships.filter(internship => internship.featured);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Find Your Perfect Internship</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover opportunities to learn, grow, and kickstart your career with internships tailored to your interests and goals.</p>
        </div>

        {/* Search and filters */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search box */}
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by keyword, company, or location"
                value={searchTerm}
                onChange={handleSearchChange}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
              <select
                value={filters.industry}
                onChange={(e) => handleFilterChange('industry', e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <select
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Locations</option>
                <option value="San Francisco">San Francisco</option>
                <option value="New York">New York</option>
                <option value="Austin">Austin</option>
                <option value="Chicago">Chicago</option>
                <option value="Seattle">Seattle</option>
                <option value="Boston">Boston</option>
                <option value="Washington">Washington DC</option>
                <option value="Denver">Denver</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
              <select
                value={filters.duration}
                onChange={(e) => handleFilterChange('duration', e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Any Duration</option>
                <option value="3 months">3 months</option>
                <option value="4 months">4 months</option>
                <option value="6 months">6 months</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main content columns */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Internship listings */}
          <div className="lg:w-3/4">
            {/* Featured Internships */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Star className="h-6 w-6 text-yellow-500 mr-2" />
                Featured Internships
              </h2>
              {filteredFeaturedInternships.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredFeaturedInternships.map((internship) => (
                    <div key={internship.id} className="bg-white rounded-lg shadow overflow-hidden border-l-4 border-blue-500">
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{internship.title}</h3>
                        <p className="text-md font-medium text-gray-700 mb-2">{internship.company}</p>
                        <div className="flex flex-wrap text-sm text-gray-500 mb-3">
                          <div className="flex items-center mr-4">
                            <MapPin className="h-4 w-4 mr-1" />
                            {internship.location}
                          </div>
                          <div className="flex items-center mr-4">
                            <Clock className="h-4 w-4 mr-1" />
                            {internship.duration}
                          </div>
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {internship.type}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{internship.description}</p>
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No featured internships match your filters.</p>
              )}
            </div>

            {/* All Internships */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">All Internships</h2>
              {filteredInternships.length > 0 ? (
                <div className="space-y-4">
                  {filteredInternships.map((internship) => (
                    <div key={internship.id} className="bg-white rounded-lg shadow overflow-hidden">
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{internship.title}</h3>
                        <p className="text-md font-medium text-gray-700 mb-2">{internship.company}</p>
                        <div className="flex flex-wrap text-sm text-gray-500 mb-3">
                          <div className="flex items-center mr-4">
                            <MapPin className="h-4 w-4 mr-1" />
                            {internship.location}
                          </div>
                          <div className="flex items-center mr-4">
                            <Clock className="h-4 w-4 mr-1" />
                            {internship.duration}
                          </div>
                          <div className="flex items-center mr-4">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {internship.type}
                          </div>
                          <div className="flex items-center">
                            <Filter className="h-4 w-4 mr-1" />
                            {internship.industry}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{internship.description}</p>
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No internships match your filters.</p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            {/* Get Internship Alerts */}
            <div className="bg-blue-50 rounded-lg shadow p-5 mb-6">
              <div className="flex items-center mb-3">
                <Bell className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">Get Internship Alerts</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Stay updated with the latest internship opportunities matching your interests.</p>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-3"
                />
                <button 
                  onClick={handleSubscribe}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Subscribe
                </button>
              </div>
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
      <Footer />
    </div>
  );
}
