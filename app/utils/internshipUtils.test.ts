import { filterInternships, Internship, FilterOptions } from './internshipUtils';

const sampleInternships: Internship[] = [
  {
    id: 1,
    title: 'Software Engineer Intern',
    company: 'TechCorp',
    location: 'San Jose, CA',
    duration: '6 months',
    type: 'Hybrid',
    industry: 'Tech/CS',
    description: 'Build cool software.',
    featured: true,
  },
  {
    id: 2,
    title: 'Legal Intern',
    company: 'Law & Co.',
    location: 'New York, NY',
    duration: '3 months',
    type: 'Remote',
    industry: 'Law',
    description: 'Assist with case research.',
    featured: false,
  },
];

describe('filterInternships', () => {
  it('returns all internships when no filters or search term are applied', () => {
    const filters: FilterOptions = {
      industry: '',
      location: '',
      duration: '',
      type: '',
    };

    const result = filterInternships(sampleInternships, '', filters);
    expect(result.length).toBe(2);
  });

  it('filters by industry correctly', () => {
    const filters: FilterOptions = {
      industry: 'Tech/CS',
      location: '',
      duration: '',
      type: '',
    };

    const result = filterInternships(sampleInternships, '', filters);
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('Software Engineer Intern');
  });

  it('filters by location and type', () => {
    const filters: FilterOptions = {
      industry: '',
      location: 'New York',
      duration: '',
      type: 'Remote',
    };

    const result = filterInternships(sampleInternships, '', filters);
    expect(result).toHaveLength(1);
    expect(result[0].company).toBe('Law & Co.');
  });

  it('matches search term in title or company', () => {
    const filters: FilterOptions = {
      industry: '',
      location: '',
      duration: '',
      type: '',
    };

    const result = filterInternships(sampleInternships, 'TechCorp', filters);
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('Software Engineer Intern');
  });
});