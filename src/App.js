import './App.css';
import {Header} from './components/header/Header';
import {MainContent} from './components/maincontent/MainContent';

function App() {

  const movieDataset = {
    "Action": [
        {
          "movie_name": "John Wick",
          "my_imdb": "9/10",
          "comments": "If you are fan of Keanu Reeves you will love it."
        },
        {
          "movie_name": "World War Z",
          "my_imdb": "9.1/10",
          "comments": "This movie is all about a family guy who is trying with his family to stay alive in virus breakdown."
        }
      ],
    "Horror": [
      {
        "movie_name": "Grudge",
        "my_imdb": "8.5/10",
        "comments": "Not a big fan of horror movies but can give it a try."
      },
      {
        "movie_name": "Fear street",
        "my_imdb": "8.7/10",
        "comments": "It's actually kind of triology and it's good."
      }
    ],
    "Comedy": [
      {
        "movie_name": "Dhol",
        "my_imdb": "9/10",
        "comments": "It's still funny for me to watch this movie. You will love if you are fan of Rajpal Yadav"
      },
      {
        "movie_name": "Hera Pheri",
        "my_imdb": "9.5/10",
        "comments": "Who doesn't love Babu Rao from Hera Pheri."
      }
    ],
    "Fiction": [
      {
        "movie_name": "Lord of Rings: Triology",
        "my_imdb": "9/10",
        "comments": "The only thing to say about this triology movie is it's amazing."
      },
      {
        "movie_name": "Martian",
        "my_imdb": "9.4/10",
        "comments": "Want to see an astronaut surviving alone at Mars then this is one of the best movie you got to watch."
      }
    ]
  }

  return (
    <div className="App">
      <Header />
      <MainContent movieDataset={movieDataset}/>
    </div>
  );
}

export default App;
