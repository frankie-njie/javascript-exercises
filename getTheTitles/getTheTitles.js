const getTheTitles = function(book) {
    return book.map(books => books.title)
}

module.exports = getTheTitles;