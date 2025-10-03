import { environment } from "../../environments/environment.development";
import { DevfestResponseItem } from "./devfestResponse.interface";

export class DevFest {
    id: string;
    year: string;
    location: string;
    date: string;
    startHour: string;
    description: string;
    urlRegister: string;
    urlMaps: string;
    imageLogo: string;
    imageHome: string;

    constructor(devfestObje: DevfestResponseItem) {
        this.id = devfestObje.id;
        this.year = devfestObje.year;
        this.location = devfestObje.location;
        this.date = new Date(devfestObje.date).toLocaleDateString('es-ES', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        });
        this.startHour = devfestObje.startHour;
        this.description = devfestObje.description;
        this.urlRegister = devfestObje.urlRegister;
        this.urlMaps = devfestObje.urlMaps;
        this.imageLogo = `${environment.API_URL}${devfestObje.imageLogo.url}`;
        this.imageHome = `${environment.API_URL}${devfestObje.imageHome.url}`;
    }
}