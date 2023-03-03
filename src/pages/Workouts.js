import React, { useState } from "react";
import ExerciseCard from "../components/ExerciseCard";

import "./Workouts.css";

const MUSCLE_GROUPS = [
  { name: "pectorals" },
  { name: "quads" },
  { name: "glutes" },
  { name: "abs" },
  { name: "delts" },
  { name: "biceps" },
  { name: "triceps" },
];

function Workouts() {
  const [exerciseList, setExerciseList] = useState([]);
  const [searchedExercise, setSearchedExercise] = useState("");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "66e99de178msh34b1a3c2149a362p1d2a26jsn247b7d08f813",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const getExercise = async (exercise) => {
    setLoading(true);
    await fetch(
      `https://exercisedb.p.rapidapi.com/exercises/target/${exercise}`,
      options
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setExerciseList(data);
        setLoading(false);
        setSearched(true);
      })
      .catch((err) => console.error(err));
  };

  const submitHandler = (exercise) => {
    getExercise(exercise);
  };

  const backHandler = () => {
    setSearched(false);
  };

  return (
    <div className="workout-container">
      <div>
        <div className="workout-btn--container">
          {!searched &&
            MUSCLE_GROUPS.map((muscle) => {
              const target = muscle.name;
              return (
                <button
                  onClick={() => {
                    console.log(searchedExercise);
                    setSearchedExercise(target);
                    submitHandler(target);
                  }}
                >
                  {muscle.name.toUpperCase()}
                </button>
              );
            })}
        </div>
        {loading && <h2>Loading</h2>}
      </div>
      {searched && (
        <div className="back-btn--container">
          <button className="back-btn" onClick={backHandler}>
            Back
          </button>
        </div>
      )}
      <div className="exercise-card--container">
        {searched &&
          exerciseList.map((exercise) => {
            return <ExerciseCard name={exercise.name} img={exercise.gifUrl} />;
          })}
      </div>
    </div>
  );
}

export default Workouts;
