import { Image } from "./image.interface";

export interface Organizer {
    name: string;
    url?: string;
    imageLogo: string;    
}

export interface OrganizerResponseItem {
    name: string;
    url?: string;
    imageLogo: Image;
}

export interface OrganizerResponse {
    docs: OrganizerResponseItem[];
    hasPrevPage: boolean;
    hasNextPage: boolean;
    limit: number;
    nextPage: number;
    page: number;
    pagingCounter: number;
    totalDocs: number;  
    totalPages: number;
}