import { FilterByUserInputPipe } from './filter-by-user-intup.pipe';
import { ICourse } from '../../course-list-item.model';

describe('FilterByUserInputPipe', () => {
    let pipe: FilterByUserInputPipe;

    beforeEach(() => {
        pipe = new FilterByUserInputPipe();
    });

    it('should create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should filter the array by user input', () => {
        let coursesArray: ICourse[] = [
            {
                id: 1,
                title: 'Morning flowers',
                creationDate: new Date(2019, 0, 3),
                duration: 150,
                description: 'upcoming course',
                topRated: false
              },
              {
                id: 2,
                title: 'Fresh air',
                creationDate: new Date(2019, 0, 1),
                duration: 150,
                description: 'old course',
                topRated: true
              },
              {
                id: 2,
                title: 'Data workflow',
                creationDate: new Date(2019, 0, 2),
                duration: 150,
                description: 'old course',
                topRated: true
              },  
        ];
        const userInput = 'flow';
        let expectedCoursesArray: ICourse[] = [
            {
                id: 1,
                title: 'Morning flowers',
                creationDate: new Date(2019, 0, 3),
                duration: 150,
                description: 'upcoming course',
                topRated: false
              },
              {
                id: 2,
                title: 'Data workflow',
                creationDate: new Date(2019, 0, 1),
                duration: 150,
                description: 'old course',
                topRated: true
              },  
        ];
        expect(JSON.stringify(pipe.transform(coursesArray, userInput))).toBeTruthy(JSON.stringify(expectedCoursesArray));
    });
});