import { set } from "mongoose";
import React, { useState } from "react";
import ExerciseCard from "../components/ExerciseCard";
import TargetMuscle from "../components/TargetMuscle";
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
  const [noResults, setNoResults] = useState(false);
  const [searched, setSearched] = useState(false);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "66e99de178msh34b1a3c2149a362p1d2a26jsn247b7d08f813",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const getExercise = async (exercise) => {
    await fetch(
      `https://exercisedb.p.rapidapi.com/exercises/target/${exercise}`,
      options
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setExerciseList(data);
        setSearched(true);
      })
      .catch((err) => console.error(err));
  };

  const searchHandler = (muscle) => {
    setSearchedExercise(muscle);
  };

  const submitHandler = (exercise) => {
    getExercise(exercise);
  };

  return (
    <div className="workout-container">
      <div>
        <div className="workout-btn--container">
          {MUSCLE_GROUPS.map((muscle) => {
            const target = muscle.name;
            return (
              <button
                onClick={() => {
                  console.log(target);
                  setSearchedExercise(target);
                  submitHandler(target);
                }}
              >
                {muscle.name.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>

      {searched &&
        exerciseList.map((exercise) => {
          return (
            <ExerciseCard
              name={exercise.name}
              img={exercise.gifUrl}
              bodypart={exercise.target}
            />
          );
        })}
    </div>
  );
}

export default Workouts;
