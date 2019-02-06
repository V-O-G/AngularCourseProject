export interface ICourse {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    topRated: boolean;
}

export class CourseListItem implements ICourse {
    
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    topRated: boolean;

    constructor(id: number, title: string, duration: number, description: string) {
        this.id = id;
        this.title = title;
        this.creationDate = new Date();
        this.duration = duration;
        this.description = description;
        this.topRated = false;
    }
} 