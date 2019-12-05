import React, { useState, useEffect } from "react";

import api from "../services/api";

function Questoes() {
  const [questions, setQuestions] = useState([]);
  async function handleQuestions() {
    const response = await api.get("/questions", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZGZhMjllNDFiOTQzMDAxNzIxMTcxYiIsImlhdCI6MTU3NDkzNzI0NiwiZXhwIjoxNTc1MDIzNjQ2fQ.rhcCDlQWh-ODb3-fa_hEYEH54jFFFDecfH4H2AFydr8"
      }
    });
    setQuestions(response);
  }

  useEffect(() => {
    handleQuestions(false);
  }, []);

  return <p>{questions}</p>;
}

export default Questoes;
