import { Image } from "./image.interface";

export interface Sponsor {
    name: string;
    url?: string;
    imageLogo: string;    
}

export interface SponsorResponseItem {
    name: string;
    url?: string;
    imageLogo: Image;
}

export interface SponsorResponse {
    docs: SponsorResponseItem[];
    hasPrevPage: boolean;
    hasNextPage: boolean;
    limit: number;
    nextPage: number;
    page: number;
    pagingCounter: number;
    totalDocs: number;  
    totalPages: number;
}