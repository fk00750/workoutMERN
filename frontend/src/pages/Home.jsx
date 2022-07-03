import { useEffect, useState } from "react";

function Home() {
  const [workouts, setWorkouts] = useState(null);

  const fetchWorkouts = async function () {
    const response = await fetch("/api/workouts")
    const json = await response.json() // ! Getting Error : Uncaught (in promise) SyntaxError: JSON.parse: unexpected character at line 1 column 1 of the JSON data

    if(response.ok) {
      setWorkouts(json)
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => {
          <p>{workout.title}</p>
        })}
      </div>
    </div>
  );
}

export default Home;
