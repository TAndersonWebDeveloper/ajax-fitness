import React, { useState } from "react";
import ExerciseCard from "../components/ExerciseCard";
import SkeletonCard from "../components/SkeletonCard";

import "./Workouts.css";

const MUSCLE_GROUPS = [
  { name: "pectorals" },
  { name: "quads" },
  { name: "glutes" },
  { name: "abs" },
  { name: "delts" },
  { name: "biceps" },
  { name: "triceps" },
  { name: "traps" },
];

function Workouts() {
  const [exerciseList, setExerciseList] = useState([]);
  const [searchedExercise, setSearchedExercise] = useState("");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_WORKOUT_API}`,
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
      <div className="workout-loading--container">
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

        {loading && <SkeletonCard />}
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
