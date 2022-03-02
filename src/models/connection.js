import Author from "./author.js";
import Book from "./book.js";
import Genre from "./genre.js";
import RentBook from "./rentbook.js";
import User from "./user.js";

Author.hasMany(Book, { foreignKey: "author_id" });
Book.belongsTo(Author, { foreignKey: "author_id" });

Book.belongsTo(Genre, { foreignKey: "genre_id", primaryKey: "id" });

User.belongsToMany(Book, { through: RentBook });
Book.belongsToMany(User, { through: RentBook });

RentBook.sync();
Book.sync();
User.sync();
Author.sync();
Genre.sync();
export { RentBook, Author, User, Book, Genre };
