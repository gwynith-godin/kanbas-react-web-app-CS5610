import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateQuiz } from "../../../reducer"; // Redux action
import * as client from "../../../client"; // API client
import "./index.css";

import { Quiz, Questions, Question, QuestionType } from "../interface"; // Interface imports
import QuestionForm from "./QuestionForm";

export default function QuestionsEditor() {
  const {qid, questionId } = useParams<{ qid: string; questionId: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quiz, setQuiz] = useState<Quiz | null>(null); // Full quiz object
  const [questionSet, setQuestionSet] = useState<Questions | null>(null); // Questions object
  const [editedQuestion, setEditedQuestion] = useState<Question | null>(null); // Currently edited question
  const [isLoading, setIsLoading] = useState(true);

  // Fetch quiz and questions on load
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        console.log("Fetching quiz with ID:", qid);
        const fetchedQuiz = await client.getQuizById(qid!);
        console.log("Fetched Quiz Data:", fetchedQuiz);
  
        setQuiz(fetchedQuiz);
  
        const questionsObject: Questions = {
          _id: fetchedQuiz._id,
          quiz: fetchedQuiz._id,
          questions: fetchedQuiz.questions,
        };
        console.log("Questions Object:", questionsObject);
        setQuestionSet(questionsObject);
  
        const currentQuestion = questionsObject.questions.find(
          (q) => q._id === questionId
        );
        console.log("Current Question:", currentQuestion);
  
        if (currentQuestion) {
          setEditedQuestion(currentQuestion);
        } else {
          console.error("Question not found in quiz.");
        }
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchQuiz();
  }, [qid, questionId]);
  

  // Handle updates to the question set
  const updateQuestionList = (index: number, updatedQuestion: Question) => {
    if (questionSet) {
      const updatedQuestions = questionSet.questions.map((q, i) =>
        i === index ? updatedQuestion : q
      );
      setQuestionSet({ ...questionSet, questions: updatedQuestions });
      setEditedQuestion(updatedQuestion);
    }
  };

  // Save updates to the database
  const handleSave = async () => {
    if (!qid || !quiz || !questionSet) return;

    try {
      const updatedQuiz = await client.updateQuizAndQuestion(
        qid,
        quiz,
        questionSet
      );
      dispatch(updateQuiz(updatedQuiz)); // Sync with Redux
      alert("Question saved successfully!");
      navigate(-1); // Navigate back
    } catch (error) {
      console.error("Error saving question:", error);
    }
  };

  // Add a new question
  const newQuestion = () => {
    if (questionSet) {
      const newQuestion: Question = {
          type: QuestionType.multipleChoice,
          title: "",
          points: 0,
          question: "",
          choices: [],
          true_or_false: true,
          blank: [],
          _id: ""
      };

      const updatedQuestions = [...questionSet.questions, newQuestion];
      setQuestionSet({ ...questionSet, questions: updatedQuestions });
      setEditedQuestion(newQuestion); // Immediately edit the new question
    }
  };

  // Handle cancellation
  const handleCancel = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!quiz || !editedQuestion || !questionSet) {
    return <div>Error: Question or quiz not found.</div>;
  }

  return (
    <div className="editor-container mt-5">
      <div style={{ marginLeft: "150px", marginRight: "150px" }}>


      <QuestionForm
        key={editedQuestion._id}
        question={editedQuestion}
        index={questionSet.questions.findIndex((q) => q._id === editedQuestion._id)} // Pass index explicitly
        onQuestionChange={updateQuestionList} // Let the function handle the logic
        editing={true}
        deleteQuestion={() => {}}   
        />

      </div>
      <br />
      <div className="button-container">
        <button
          className="btn border-bottom border-secondary"
          style={{ backgroundColor: "#f5f5f5", margin: "10px 0" }}
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="btn border-bottom border-danger"
          style={{ backgroundColor: "#f5f5f5", margin: "10px 0" }}
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="btn border-bottom border-primary"
          style={{ backgroundColor: "#f5f5f5", margin: "10px 0" }}
          onClick={newQuestion}
        >
          Add Question
        </button>
      </div>
      <hr />
    </div>
  );
}
