import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase';
import {
  Search,
  MapPin,
  Clock,
  Briefcase,
  Bell,
  Star,
  DollarSign,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  industry: string;
  salary: string;
  description: string;
}

const InternshipPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const internshipsPerPage = 7;
  const [internships, setInternships] = useState<Internship[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    industry: 'All Industries',
    location: 'All Locations',
    duration: 'Any Duration',
    type: 'All Types',
  });

  useEffect(() => {
    const fetchInternships = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'internships'));
      const internshipData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title || 'Untitled',
          company: data.company || 'Unknown Company',
          location: data.location || '',
          duration: data.duration || '',
          type: data.type || '',
          industry: data.industry || '',
          salary: data.salary || '',
          description: data.description || '',
        };
      });
      setInternships(internshipData);
    };

    fetchInternships();
  }, []);

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
    setCurrentPage(1); // reset to first page when filters change
  };

  const filteredInternships = internships.filter((internship) => {
    const matchSearch =
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchIndustry =
      filters.industry === 'All Industries' || internship.industry === filters.industry;
    const matchLocation =
      filters.location === 'All Locations' || internship.location === filters.location;
    const matchDuration =
      filters.duration === 'Any Duration' || internship.duration === filters.duration;
    const matchType = filters.type === 'All Types' || internship.type === filters.type;

    return matchSearch && matchIndustry && matchLocation && matchDuration && matchType;
  });

  const featuredInternships = filteredInternships.filter((i) => {
    const location = i.location.toLowerCase();
    const industry = i.industry.toLowerCase();
  
    const isInSanJose = location.includes('san jose');
    const isTechIndustry =
      industry.includes('tech') ||
      industry.includes('computer') ||
      industry.includes('cs') ||
      industry.includes('software');
  
    return isInSanJose && isTechIndustry;
  });

  const allInternships = filteredInternships.filter((i) => !featuredInternships.includes(i));
  const totalPages = Math.ceil(allInternships.length / internshipsPerPage);
  const paginatedInternships = allInternships.slice(
    (currentPage - 1) * internshipsPerPage,
    currentPage * internshipsPerPage
  );

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-6 py-10 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Find Your Perfect Internship</h1>
          <p className="text-gray-600 mt-2">
            Discover opportunities to learn, grow, and kickstart your career.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="bg-white shadow p-6 rounded-xl mb-8 space-y-6">
          {/* Search Box */}
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <Search className="mr-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by keyword, company, or location"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border-none outline-none bg-transparent placeholder-gray-400 text-lg"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {['industry', 'location', 'duration', 'type'].map((field) => (
              <div key={field}>
                <label className="block font-medium capitalize">{field}</label>
                <select
                  className="w-full border rounded-md px-4 py-2 mt-1"
                  value={filters[field as keyof typeof filters]}
                  onChange={(e) => handleFilterChange(field, e.target.value)}
                >
                  {field === 'industry' && ['All Industries', 'Tech/CS', 'Engineering', 'Law', 'Management'].map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                  {field === 'location' && ['All Locations', 'San Jose', 'New York', 'Chicago', 'Remote'].map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                  {field === 'duration' && ['Any Duration', '3 months', '6 months', '1 year'].map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                  {field === 'type' && ['All Types', 'Remote', 'Hybrid', 'In-person'].map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* Internships List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            {/* Featured */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">🌟 Featured Internships</h2>
              {featuredInternships.length > 0 ? (
                <ul className="space-y-4">
                  {featuredInternships.map((i) => (
                    <li key={i.id} className="bg-white shadow p-5 rounded-xl">
                      <div className="text-xl font-bold">{i.title}</div>
                      <div className="text-gray-600">{i.company}</div>
                      <div className="flex gap-4 mt-2 text-sm text-gray-500">
                        <MapPin className="w-4" /> {i.location}
                        <Clock className="w-4" /> {i.duration}
                        <Briefcase className="w-4" /> {i.type}
                        <DollarSign className="w-4" /> {i.salary}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No featured internships found.</p>
              )}
            </section>

            {/* All Internships */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">All Internships</h2>
              {allInternships.length > 0 ? (
                <>
                  <ul className="space-y-4">
                    {paginatedInternships.map((i) => (
                      <li key={i.id} className="bg-white shadow p-5 rounded-xl">
                        <div className="text-xl font-bold">{i.title}</div>
                        <div className="text-gray-600">{i.company}</div>
                        <div className="flex gap-4 mt-2 text-sm text-gray-500">
                          <MapPin className="w-4" /> {i.location}
                          <Clock className="w-4" /> {i.duration}
                          <Briefcase className="w-4" /> {i.type}
                          <DollarSign className="w-4" /> {i.salary}
                        </div>
                      </li>
                    ))}
                  </ul>
                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-6">
                      {Array.from({ length: totalPages }, (_, idx) => (
                        <button
                          key={idx + 1}
                          onClick={() => setCurrentPage(idx + 1)}
                          className={`px-4 py-2 rounded ${
                            currentPage === idx + 1
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-200 hover:bg-gray-300'
                          }`}
                        >
                          {idx + 1}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <p className="text-gray-500">No internships found.</p>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Alerts */}
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-3">
                <Bell className="text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">Get Internship Alerts</h3>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                Stay updated with the latest internship opportunities matching your interests.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border px-3 py-2 rounded mb-3"
              />
              <button className="bg-blue-600 text-white w-full py-2 rounded font-semibold hover:bg-blue-700">
                Subscribe
              </button>
            </div>

            {/* Resources */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-3">Resources</h3>
              <ul className="space-y-2 text-blue-600">
                <li className="flex items-center gap-2">
                  <Star /> Resume Templates
                </li>
                <li className="flex items-center gap-2">
                  <Star /> Interview Tips
                </li>
                <li className="flex items-center gap-2">
                  <Star /> Career Advice
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InternshipPage;