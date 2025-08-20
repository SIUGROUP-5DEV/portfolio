const API_BASE_URL = 'http://localhost:5000/api';

class ApiClient {
  private token: string | null = null;

  constructor() {
    this.token = localStorage.getItem('token');
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(this.token && { Authorization: `Bearer ${this.token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Auth methods
  async login(email: string, password: string) {
    const data = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    if (data.token) {
      this.token = data.token;
      localStorage.setItem('token', data.token);
    }
    
    return data;
  }

  async register(username: string, email: string, password: string) {
    const data = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
    });
    
    if (data.token) {
      this.token = data.token;
      localStorage.setItem('token', data.token);
    }
    
    return data;
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
  }

  async getCurrentUser() {
    return this.request('/auth/me');
  }

  // Projects
  async getProjects(filters?: { category?: string; featured?: boolean }) {
    const params = new URLSearchParams();
    if (filters?.category) params.append('category', filters.category);
    if (filters?.featured) params.append('featured', 'true');
    
    return this.request(`/projects?${params.toString()}`);
  }

  async createProject(project: any) {
    return this.request('/projects', {
      method: 'POST',
      body: JSON.stringify(project),
    });
  }

  async updateProject(id: string, project: any) {
    return this.request(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(project),
    });
  }

  async deleteProject(id: string) {
    return this.request(`/projects/${id}`, {
      method: 'DELETE',
    });
  }

  // Skills
  async getSkills(category?: string) {
    const params = category ? `?category=${category}` : '';
    return this.request(`/skills${params}`);
  }

  async createSkill(skill: any) {
    return this.request('/skills', {
      method: 'POST',
      body: JSON.stringify(skill),
    });
  }

  async updateSkill(id: string, skill: any) {
    return this.request(`/skills/${id}`, {
      method: 'PUT',
      body: JSON.stringify(skill),
    });
  }

  async deleteSkill(id: string) {
    return this.request(`/skills/${id}`, {
      method: 'DELETE',
    });
  }

  // Experience
  async getExperiences() {
    return this.request('/experience');
  }

  async createExperience(experience: any) {
    return this.request('/experience', {
      method: 'POST',
      body: JSON.stringify(experience),
    });
  }

  async updateExperience(id: string, experience: any) {
    return this.request(`/experience/${id}`, {
      method: 'PUT',
      body: JSON.stringify(experience),
    });
  }

  async deleteExperience(id: string) {
    return this.request(`/experience/${id}`, {
      method: 'DELETE',
    });
  }

  // Profile
  async getProfile() {
    return this.request('/profile');
  }

  async updateProfile(profile: any) {
    return this.request('/profile', {
      method: 'PUT',
      body: JSON.stringify(profile),
    });
  }

  // Contact
  async submitContact(contact: any) {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(contact),
    });
  }
}

export const apiClient = new ApiClient();