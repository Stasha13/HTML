const animals = [
    'elephant', 'tiger', 'zebra', 'dragon', 'dog', 'giraffe'
];

const output = animals
.filter(item => item !=='elephant'&& item !== 'giraffe')
.map((val, index) => {
    if (index) {
        return ', ' + val;
    }
    return val
})
.reduce((prev, item) => prev += item, 'Animals: ')