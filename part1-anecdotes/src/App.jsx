import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);

  const [points, setPoints] = useState(Array(6).fill(0));

  const [maxPoint, setMaxPoint] = useState([false, 0]);

  const changeAnecdote = (selected) => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * anecdotes.length);
    } while (randomIndex === selected);
    setSelected(randomIndex);
  };

  const likeAnecdote = (selected) => {
    const copyPoints = [...points];
    copyPoints[selected]++;
    setPoints(copyPoints);
    mostAnecdote(copyPoints);
  };

  const mostAnecdote = (copyPoints) => {
    let max = copyPoints[0];
    let indexMax = 0;
    copyPoints.forEach((element, index) => {
      if (element > max) {
        max = element;
        indexMax = index;
      }
    });

    if (max > 0) {
      const maxPointIndex = [...maxPoint];
      maxPointIndex[0] = true;
      maxPointIndex[1] = indexMax;
      setMaxPoint(maxPointIndex);
    }
  };

  return (
    <div>
      <h3>Anecdote of the day</h3>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={() => likeAnecdote(selected)}>vote</button>
      <button onClick={() => changeAnecdote(selected)}>next anecdote</button>

      {maxPoint[0] && (
        <>
          <h3>Anecdote whit most votes</h3>
          <p>{anecdotes[maxPoint[1]]}</p>
          <p>has {points[maxPoint[1]]} votes</p>
        </>
      )}
    </div>
  );
};

export default App;
