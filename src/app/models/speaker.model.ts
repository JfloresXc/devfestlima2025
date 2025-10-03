import { Image } from './image.interface';
import { Network } from './network.model';

export interface Speaker {
    bio: string;
    description: string;
    firstName: string;
    lastName: string;
    fullName: string;
    id: string;
    networks: Network[];
    image: Image;
    urlImage?: string;
}

export interface SpeakerResponseItem {
    bio: string;
    description: string;
    firstName: string;
    lastName: string;
    fullName: string;
    id: string;
    networks: Network[];
    image: Image;
    urlImage?: string;
}

export interface SpeakerResponse {
    docs: SpeakerResponseItem[];
    hasPrevPage: boolean;
    hasNextPage: boolean;
    limit: number;
    nextPage: number;
    page: number;
    pagingCounter: number;
    totalDocs: number;
    totalPages: number;
}
