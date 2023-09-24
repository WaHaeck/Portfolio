export interface Project {
    name: string;
    shortDescription: string;
    description: string;
    images: string[];
    tags: string[];
    roles: string[];
    learnings: string;

    links?: { label: string, link: string }[];
    url?: string;
    github?: string;
}