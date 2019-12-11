import React, { useState, useEffect } from "react";

import api from "../services/api";

import "./Questoes.css";

function Questoes() {
  const [questions, setQuestions] = useState([]);
  async function handleQuestions() {
    const response = await api.get("/questions", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZGIzNDM2NTMwM2ZiMWEzNzk1MjU2YiIsImlhdCI6MTU3NjAyNjExMywiZXhwIjoxNTc2MTEyNTEzfQ.h_2VhMgwzHm7oIMOJM_2Dm42xzE6-JW7RpREZDVxELs"
      }
    });
    setQuestions(response.data);
  }

  useEffect(() => {
    handleQuestions();
  }, []);

  return (
    <div>
      <input type="text" name="" id="" />

      <ul>
        {questions.map((question, i) => {
          return (
            <li key={i}>
              <div className="questions">
                <div className="votes">
                  <span className="plus">+</span>
                  <span>
                    {(question.upVotes ? question.upVotes.length : 0) -
                      (question.downVotes ? question.downVotes.length : 0)}
                  </span>
                  <span className="minus">-</span>
                </div>
                <div className="question">
                  <div className="question-title">{question.title}</div>
                  <div className="question-question">{question.question}</div>
                </div>
                <div className="user">{question.user}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Questoes;
