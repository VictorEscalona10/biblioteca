import prisma from "../../../lib/prisma.js";

const getBooksAdvanced = async (req, res) => {
    const { 'search-type': searchType, searchQuery } = req.body;

    try {
        let books;
        switch (searchType) {
            case 'title':
                books = await prisma.book.findMany({
                    where: { title: { contains: searchQuery, mode: 'insensitive' } }
                });
                break;
            case 'author':
                books = await prisma.book.findMany({
                    where: { author: { contains: searchQuery, mode: 'insensitive' } }
                });
                break;
            case 'year':
                books = await prisma.book.findMany({
                    where: { year: parseInt(searchQuery) }
                });
                break;
            case 'genre':
                books = await prisma.book.findMany({
                    where: { genre: { contains: searchQuery, mode: 'insensitive' } }
                });
                break;
            default:
                books = [];
        }
        res.render('bookSearch/bookSearch', { books: books });
    } catch (error) {
        console.error('Error al buscar libros:', error);
        res.status(500).render('bookSearch/bookSearch', { books: 'Error al buscar libros' });
    }
};

export default getBooksAdvanced;