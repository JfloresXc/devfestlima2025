import { Image } from "./image.interface";

export interface DevfestResponseItem {
    id: string;
    year: string;
    location: string;
    date: Date;
    startHour: string;
    description: string;
    urlRegister: string;
    urlMaps: string;
    imageLogo: Image;
    imageHome: Image;
    createdAt: Date;
    updatedAt: Date;
}


export interface DevfestResponse {
    docs: DevfestResponseItem[];
    hasPrevPage: boolean;
    hasNextPage: boolean;
    limit: number;
    nextPage: number;
    page: number;
    pagingCounter: number;
    totalDocs: number;  
    totalPages: number;
}