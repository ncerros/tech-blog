const { format_date } = require('../utils/helpers');
test('format_date() returns a date string', () => {
    const date = new Date('2021-05-12 12:12:03');
    expect(format_date(date)).toBe('3/12/2021');
});