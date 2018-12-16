export interface ICourse {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
}

export class CourseListItem implements ICourse {
    
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;

    constructor(id: number, title: string, duration: number, description: string) {
        this.id = id;
        this.title = title;
        this.creationDate = new Date();
        this.duration = duration;
        this.description = description;
    }
} 