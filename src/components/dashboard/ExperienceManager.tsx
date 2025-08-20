import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { apiClient } from '@/lib/api';
import { Plus, Edit, Trash2, ExternalLink } from 'lucide-react';

interface Experience {
  _id?: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  website?: string;
  current: boolean;
  order: number;
}

const ExperienceManager = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [editingExperience, setEditingExperience] = useState<Experience | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState<Experience>({
    title: '',
    company: '',
    location: '',
    period: '',
    type: 'Full-time',
    description: '',
    achievements: [],
    technologies: [],
    website: '',
    current: false,
    order: 0,
  });

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const data = await apiClient.getExperiences();
      setExperiences(data);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch experiences",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingExperience) {
        await apiClient.updateExperience(editingExperience._id!, formData);
        toast({
          title: "Success",
          description: "Experience updated successfully",
        });
      } else {
        await apiClient.createExperience(formData);
        toast({
          title: "Success",
          description: "Experience created successfully",
        });
      }
      
      fetchExperiences();
      resetForm();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to save experience",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this experience?')) return;

    try {
      await apiClient.deleteExperience(id);
      toast({
        title: "Success",
        description: "Experience deleted successfully",
      });
      fetchExperiences();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to delete experience",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (experience: Experience) => {
    setEditingExperience(experience);
    setFormData(experience);
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      company: '',
      location: '',
      period: '',
      type: 'Full-time',
      description: '',
      achievements: [],
      technologies: [],
      website: '',
      current: false,
      order: 0,
    });
    setEditingExperience(null);
    setShowForm(false);
  };

  const handleAchievementsChange = (value: string) => {
    const achievements = value.split('\n').filter(achievement => achievement.trim());
    setFormData({ ...formData, achievements });
  };

  const handleTechnologiesChange = (value: string) => {
    const technologies = value.split(',').map(tech => tech.trim()).filter(tech => tech);
    setFormData({ ...formData, technologies });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Experience Management</h2>
        <Button onClick={() => setShowForm(true)} className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Experience</span>
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>
              {editingExperience ? 'Edit Experience' : 'Add New Experience'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="period">Period</Label>
                  <Input
                    id="period"
                    value={formData.period}
                    onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                    placeholder="2022 - Present"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="type">Employment Type</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value) => setFormData({ ...formData, type: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Freelance">Freelance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="achievements">Achievements (one per line)</Label>
                <Textarea
                  id="achievements"
                  value={formData.achievements.join('\n')}
                  onChange={(e) => handleAchievementsChange(e.target.value)}
                  placeholder="Led development of scalable web applications&#10;Improved application performance by 40%"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="technologies">Technologies (comma separated)</Label>
                <Input
                  id="technologies"
                  value={formData.technologies.join(', ')}
                  onChange={(e) => handleTechnologiesChange(e.target.value)}
                  placeholder="React, Node.js, MongoDB"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="website">Company Website</Label>
                  <Input
                    id="website"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="order">Order</Label>
                  <Input
                    id="order"
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="current"
                  checked={formData.current}
                  onChange={(e) => setFormData({ ...formData, current: e.target.checked })}
                />
                <Label htmlFor="current">Current Position</Label>
              </div>

              <div className="flex space-x-2">
                <Button type="submit" disabled={loading}>
                  {loading ? 'Saving...' : (editingExperience ? 'Update' : 'Create')}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="space-y-6">
        {experiences.map((experience) => (
          <Card key={experience._id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{experience.title}</h3>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <span className="font-medium">{experience.company}</span>
                    {experience.website && (
                      <a 
                        href={experience.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                    <span>{experience.period}</span>
                    <span>{experience.location}</span>
                    <Badge variant="secondary">{experience.type}</Badge>
                    {experience.current && (
                      <Badge variant="default">Current</Badge>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleEdit(experience)}
                  >
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleDelete(experience._id!)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{experience.description}</p>

              {experience.achievements.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {experience.technologies.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExperienceManager;