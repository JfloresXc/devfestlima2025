export interface Image {
    id: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
    focalX: number;
    focalY: number;
    sizes: {
        thumbnail: {
            width: number;
            height: number;
            mimeType: string;
            filesize: number;
            filename: string;
            url: string;
        },
        card: {
            width: number;
            height: number;
            mimeType: string;
            filesize: number;
            filename: string;
            url: string;
        },
        tablet: {
            width: number;
            height: number;
            mimeType: string;
            filesize: number;
            filename: string;
            url: string;
        }
    },
    createdAt: Date;
    updatedAt: Date;
    url: string;
}
