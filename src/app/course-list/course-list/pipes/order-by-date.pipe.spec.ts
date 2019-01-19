import { OrderByDatePipe } from './order-by-date.pipe';
import { ICourse } from '../../course-list-item.model';

describe('CourseListComponent', () => {
    let pipe: OrderByDatePipe;

    beforeEach(() => {
        pipe = new OrderByDatePipe();
    });

    it('should create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should sort the array by its creationDate', () => {
        let coursesArray: ICourse[] = [
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
        let expectedCoursesArray: ICourse[] = [
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
        expect(JSON.stringify(pipe.transform(coursesArray))).toBeTruthy(JSON.stringify(expectedCoursesArray));
    });
});