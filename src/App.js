import Book from './components/Book';
import './index.css';

const App = () => {
  const books = [
    {
      title: 'Core Java Volume I – Fundamentals',
      description: 'Core Java Volume I – Fundamentals is a Java reference book (Best book for Java)that offers a detailed explanation of various features of Core Java, including exception handling, interfaces, and lambda expressions. ',
    },
    {
      title: 'Java: A Beginner’s Guide',
      description: 'If you are a seasoned Java programmer looking to enhance your Java knowledge, don’t be averted by the title of the book, Java: A Beginner’s Guide.',
    },
    {
      title: 'Head First Java',
      description: 'The most important selling points of Head First Java is its simplicity and super-effective real-life analogies that pertain to the Java programming concepts.',
    },
  ];
  return (
    <div>
      <h1 className="header">Book library</h1>
      <Book book = {books[0]} />
      <Book book = {books[1]} />
      <Book book = {books[2]} />
    </div>
  );
}

export default App;
