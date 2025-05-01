// src/utils/internshipUtils.ts

export type Internship = {
    id: number;
    title: string;
    company: string;
    location: string;
    duration: string;
    type: string;
    industry: string;
    description: string;
    featured: boolean;
  };
  
  export type FilterOptions = {
    industry: string;
    location: string;
    duration: string;
    type: string;
  };
  
  export function filterInternships(
    internships: Internship[],
    searchTerm: string,
    filters: FilterOptions
  ): Internship[] {
    return internships.filter((internship) => {
      const matchesSearch =
        searchTerm === '' ||
        internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        internship.location.toLowerCase().includes(searchTerm.toLowerCase());
  
      const matchesIndustry = filters.industry === '' || internship.industry === filters.industry;
      const matchesLocation = filters.location === '' || internship.location.includes(filters.location);
      const matchesDuration = filters.duration === '' || internship.duration === filters.duration;
      const matchesType = filters.type === '' || internship.type === filters.type;
  
      return matchesSearch && matchesIndustry && matchesLocation && matchesDuration && matchesType;
    });
  }