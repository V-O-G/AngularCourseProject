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
        const coursesArray: ICourse[] = [
            {
                id: 1,
                title: 'Morning flowers',
                creationDate: new Date(2019, 0, 3),
                duration: 150,
                description: 'description',
                topRated: false
              },
              {
                id: 2,
                title: 'Fresh air',
                creationDate: new Date(2019, 0, 1),
                duration: 150,
                description: 'description',
                topRated: true
              },
              {
                id: 2,
                title: 'Data workflow',
                creationDate: new Date(2019, 0, 2),
                duration: 150,
                description: 'description',
                topRated: true
              },  
        ];
        const userInput = 'flow';
        const expectedCoursesArray: ICourse[] = [
            {
                id: 1,
                title: 'Morning flowers',
                creationDate: new Date(2019, 0, 3),
                duration: 150,
                description: 'description',
                topRated: false
              },
              {
                id: 2,
                title: 'Data workflow',
                creationDate: new Date(2019, 0, 2),
                duration: 150,
                description: 'description',
                topRated: true
              },    
        ];
        expect(JSON.stringify(pipe.transform(coursesArray, userInput))).toEqual(JSON.stringify(expectedCoursesArray));
    });
    it('should return return [] if input doesn\'t match', () => {
        const coursesArray: ICourse[] = [
            {
                id: 1,
                title: 'Morning flowers',
                creationDate: new Date(2019, 0, 3),
                duration: 150,
                description: 'description',
                topRated: false
              },
              {
                id: 2,
                title: 'Fresh air',
                creationDate: new Date(2019, 0, 1),
                duration: 150,
                description: 'description',
                topRated: true
              },
              {
                id: 2,
                title: 'Data workflow',
                creationDate: new Date(2019, 0, 2),
                duration: 150,
                description: 'description',
                topRated: true
              },  
        ];
        const userInput = 'someInput';
        const expectedCoursesArray: ICourse[] = [];
        expect(JSON.stringify(pipe.transform(coursesArray, userInput))).toEqual(JSON.stringify(expectedCoursesArray));
    });
    it('should show all courses if input = null', () => {
        const coursesArray: ICourse[] = [
            {
                id: 1,
                title: 'Morning flowers',
                creationDate: new Date(2019, 0, 3),
                duration: 150,
                description: 'description',
                topRated: false
              },
              {
                id: 2,
                title: 'Fresh air',
                creationDate: new Date(2019, 0, 1),
                duration: 150,
                description: 'description',
                topRated: true
              },
              {
                id: 2,
                title: 'Data workflow',
                creationDate: new Date(2019, 0, 2),
                duration: 150,
                description: 'description',
                topRated: true
              },  
        ];
        const userInput = null;
        const expectedCoursesArray: ICourse[] = [
            {
                id: 1,
                title: 'Morning flowers',
                creationDate: new Date(2019, 0, 3),
                duration: 150,
                description: 'description',
                topRated: false
              },
              {
                id: 2,
                title: 'Fresh air',
                creationDate: new Date(2019, 0, 1),
                duration: 150,
                description: 'description',
                topRated: true
              },
              {
                id: 2,
                title: 'Data workflow',
                creationDate: new Date(2019, 0, 2),
                duration: 150,
                description: 'description',
                topRated: true
              },  
        ];
        expect(JSON.stringify(pipe.transform(coursesArray, userInput))).toEqual(JSON.stringify(expectedCoursesArray));
    });
});