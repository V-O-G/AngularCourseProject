import { DurationPipe } from './duration.pipe';

describe('CourseListComponent', () => {
    let pipe: DurationPipe;

    beforeEach(() => {
        pipe = new DurationPipe();
    });

    it('should create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should transform minutes into string h m/m', () => {
        expect(pipe.transform(60)).toBeTruthy('1 h');
        expect(pipe.transform(125)).toBeTruthy('2 h 5 min');
        expect(pipe.transform(30)).toBeTruthy('30 min');
        expect(pipe.transform(283)).toBeTruthy('4 h 43 min');
    });
});