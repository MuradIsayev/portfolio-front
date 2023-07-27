import axios from 'axios';

export const fetchProjects = async () => {
    const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/projects`);
    const projects = await response.data;

    return projects;
}

export const fetchExperiences = async () => { 
    const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/experience`);
    const experiences = await response.data;

    return experiences;
}
