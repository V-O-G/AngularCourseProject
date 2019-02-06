import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
    let pipe: DurationPipe;

    beforeEach(() => {
        pipe = new DurationPipe();
    });

    it('should create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should transform minutes into string h m/m', () => {
        expect(pipe.transform(60)).toEqual('1 h');
        expect(pipe.transform(125)).toEqual('2 h 5 min');
        expect(pipe.transform(30)).toEqual('30 min');
        expect(pipe.transform(283)).toEqual('4 h 43 min');
    });
    it('should return null if receives undefined', () => {
        expect(pipe.transform(null)).toEqual(null);
    });
});