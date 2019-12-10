import React, { useState, useEffect } from "react";

import api from "../services/api";

import "./Questoes.css";

function Questoes() {
  const [questions, setQuestions] = useState([]);
  async function handleQuestions() {
    const response = await api.get("/questions", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZGZhMjllNDFiOTQzMDAxNzIxMTcxYiIsImlhdCI6MTU3NTk0Nzk5MywiZXhwIjoxNTc2MDM0MzkzfQ.pfuapzw-Gxr4mCDWTkUqWVOQlF-WZ4sxdwNuS21IJBA"
      }
    });
    setQuestions(response.data);
  }

  useEffect(() => {
    handleQuestions();
  }, []);

  return (
    <ul>
      {questions.map((question, i) => {
        return (
          <li key={i}>
            <a
              href={`https://wfaq-backend.herokuapp.com/questions/${question._id}`}
            >
              {question.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Questoes;
