import Content from "./components/Content/Content"
import Header from "./components/Header/Header"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const exercisesCounts = course.parts.map(value => value.exercises)

  let sum = 0;
  exercisesCounts.forEach((value) => {
    sum += value
  })

  return (
    <div>
    
      <Header nameCourse={course.name} />

      <Content parts={course.parts} />

      <p>Number of exercises {sum}</p>
    </div>
  )
}

export default App