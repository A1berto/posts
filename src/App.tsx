import React, {useState} from "react";
import './App.css';
import {Post} from "./components/Post";
import {IPost} from "./types";
import Circle from "../../posts/src/images/circle.png"
import LeftImg from "../../posts/src/images/lefImg.png"

//le immagini vengono viste come stringe (url), guardare come sono state passate alle props
const posts: Array<IPost> = [{
    title: "Haught or Naught",
    subtitle: "High-minded or absent-minded?You decide",
    submitterImg: Circle,
    leftImg: LeftImg,
    counter: 33
    },
    {
        title: "SuperMajority",
        subtitle: "Earn Point sadsa",
        submitterImg: Circle,
        leftImg: LeftImg,
        counter: 27
    }]


const App: React.FunctionComponent = () => {
    const [todos, setTodos] = useState(posts)
    return <>{
        //le parentesi graffe mi servono per scrivere codice tsx dentro jsx (per poter scrivere codice js)
        todos.map((todo, index) =>
            <Post post={todo}
                  key={index}
                  handleClick={() => {
                      const arrays= todos.map((elem)=> {
                          if (elem.title === todo.title) {
                              ++elem.counter
                          }
                          return elem
                      })
                      setTodos(arrays)
                  }}
            />)
    }
    </>

    {/*
    todos.map(todo=> <Post title={todo.title}.../>)
    */
    }

    {/*<Post post={posts[0]}
              //name="ciao"
              //oggetto={{title: "titoloMio"}}/>
        <Post post={posts[1]}
              //name="ciao"
              //oggetto={{title: "titoloMio"}}/></>*/
    }

}


export default App;
