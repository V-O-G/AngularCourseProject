import { OrderByDatePipe } from './order-by-date.pipe';
import { ICourse } from '../models/course-list-item.model';



describe('OrderByDatePipe', () => {
    let pipe: OrderByDatePipe;

    beforeEach(() => {
        pipe = new OrderByDatePipe();
    });

    it('should create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should sort the array by its creationDate', () => {
        const coursesArray: ICourse[] = [
            {
                id: 1,
                title: 'Video Course 1',
                creationDate: new Date(2019, 0, 3),
                duration: 150,
                description: 'upcoming course',
                topRated: false
              },
              {
                id: 2,
                title: 'Video Course 2',
                creationDate: new Date(2019, 0, 1),
                duration: 150,
                description: 'old course',
                topRated: true
              },
              {
                id: 2,
                title: 'Video Course 2',
                creationDate: new Date(2019, 0, 2),
                duration: 150,
                description: 'old course',
                topRated: true
              },  
        ];
        const expectedCoursesArray: ICourse[] = [
            {
                id: 1,
                title: 'Video Course 1',
                creationDate: new Date(2019, 0, 3),
                duration: 150,
                description: 'upcoming course',
                topRated: false
              },
              {
                id: 2,
                title: 'Video Course 2',
                creationDate: new Date(2019, 0, 2),
                duration: 150,
                description: 'old course',
                topRated: true
              },
              {
                id: 2,
                title: 'Video Course 2',
                creationDate: new Date(2019, 0, 1),
                duration: 150,
                description: 'old course',
                topRated: true
              },  
        ];
        expect(JSON.stringify(pipe.transform(coursesArray))).toEqual(JSON.stringify(expectedCoursesArray));
    });

    it('should return null if coursesArray = null', () => {
        const coursesArray: ICourse[] = null;
        const expectedCoursesArray: ICourse[] = null;
        expect(pipe.transform(coursesArray)).toEqual(expectedCoursesArray);
    });
    it('should display courses without date in the end of the list', () => {
        const coursesArray: ICourse[] = [
            {
                id: 1,
                title: 'Video Course 1',
                creationDate: new Date(2019, 0, 3),
                duration: 150,
                description: 'upcoming course',
                topRated: false
              },
              {
                id: 3,
                title: 'Video Course 3',
                creationDate: null,
                duration: 150,
                description: 'old course',
                topRated: true
              }, 
              {
                id: 2,
                title: 'Video Course 2',
                creationDate: new Date(2019, 0, 2),
                duration: 150,
                description: 'old course',
                topRated: true
              },
        ];
        const expectedCoursesArray: ICourse[] = [
            {
                id: 1,
                title: 'Video Course 1',
                creationDate: new Date(2019, 0, 3),
                duration: 150,
                description: 'upcoming course',
                topRated: false
              },
              {
                id: 2,
                title: 'Video Course 2',
                creationDate: new Date(2019, 0, 2),
                duration: 150,
                description: 'old course',
                topRated: true
              },
              {
                id: 3,
                title: 'Video Course 3',
                creationDate: null,
                duration: 150,
                description: 'old course',
                topRated: true
              },  
        ];
        expect(JSON.stringify(pipe.transform(coursesArray))).toEqual(JSON.stringify(expectedCoursesArray));
    });

});