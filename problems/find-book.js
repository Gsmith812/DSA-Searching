// Imagine you are looking for a book in a library with a Dewey Decimal index. 
// How would you go about it? Can you express this process as a search algorithm? 
// Implement your algorithm to find a book whose Dewey and book title is provided.

const HashMap = require('./hash-map-class');
const BinarySearchTree = require('./bst-class');

const deweyDecIndeces = [
    `Languages`,
    `History`,
    `Fiction`,
    `Non-Fiction`,
    `Technology`,
    `Romance`
];

const deweyHashMap = new HashMap();
HashMap.SIZE_RATIO = 3;
HashMap.MAX_LOAD_RATIO = 0.5;

let indexNum = 000;
deweyDecIndeces.forEach(category => {
    deweyHashMap.set(indexNum, {name: category, data: new HashMap()});
    indexNum += 100;
});

let books = [
    {title: `Harry Potter`},
    {title: `German 101`},
    {title: `Hunger Games`},
    {title: `Learn to Program`},
    {title: `La Romantica`}
];

books.forEach(book => {
    for(let i = 0; i < deweyHashMap.length; i++) {
        deweyHashMap.get(i * 100).data.set(book.title, book.title);
    };
});

const findBook = (title, deweyDecIndeces) => {
    const deweyTitle = deweyHashMap.get(deweyDecIndeces).name;
    return `${deweyTitle}: ${deweyHashMap.get(deweyDecIndeces).data.get(title)}`
};