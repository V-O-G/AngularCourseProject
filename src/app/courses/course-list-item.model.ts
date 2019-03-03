import { IAuthor } from "./author.model";

export interface ICourse {
    id: number;
    name: string;
    description: string;
    isTopRated: boolean;
    date: Date;
    authors: IAuthor[],
    length: number;    
}

export class CourseListItem implements ICourse {
    
    id: number;
    name: string;
    description: string;
    isTopRated: boolean;
    date: Date;
    authors: IAuthor[];
    length: number;    

    constructor(id: number, name: string,  description: string, authors: IAuthor[], length: number ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.isTopRated = false;
        this.date = new Date();
        this.authors = authors;
        this.length = length;    
    }
} 