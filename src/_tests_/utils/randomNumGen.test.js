import {randomNumGen} from '../../utils';

describe('randomNumGen', () => {
  it('should generate an array of random numbers', () => {
    const random = jest.spyOn(Math, 'random');
    const floor = jest.spyOn(Math, 'floor');

    expect(randomNumGen(6)).toHaveLength(6);
    expect(random).toHaveBeenCalled();
    expect(floor).toHaveBeenCalled();
  });
});
