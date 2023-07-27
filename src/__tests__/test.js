import charactersList from '../characters.js';

test('checking order', () => {
    const arr = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];
    const received = charactersList(arr);
    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10}
    ];

    expect(received).toEqual(expected);
})