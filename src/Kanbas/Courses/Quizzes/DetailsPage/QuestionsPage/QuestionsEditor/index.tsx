import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as client from "../../../client"; // API client
import "./index.css";
import QuestionForm from "./QuestionForm";

export default function QuestionsEditor() {
  const { qid, questionId } = useParams<{ qid: string; questionId: string }>();
  const navigate = useNavigate();

  const [allQuestions, setAllQuestions] = useState<any[]>([]);
  const [editedQuestion, setEditedQuestion] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch all questions
  const fetchQuestions = async () => {
    try {
      const questions = await client.getQuestions(qid);
      setAllQuestions(questions);

      // If a specific question ID is provided, set it as the edited question
      if (questionId) {
        const currentQuestion = questions.find((q: any) => q._id === questionId);
        if (currentQuestion) {
          setEditedQuestion(currentQuestion);
        } else {
          console.error("Question not found.");
        }
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Add a new question
  const handleAddNewQuestion = async () => {
    const newQuestion = {
      type: "MultipleChoice",
      title: "Default Title",
      points: 0,
      question: "Enter question here",
      correctAnswer: "option 1",
      options: [
        { text: "option 1", isCorrect: false },
        { text: "option 2", isCorrect: false },
      ],
    };
    try {
      const createdQuestion = await client.createQuestion(qid, newQuestion);
      setAllQuestions([...allQuestions, createdQuestion]);
      setEditedQuestion(createdQuestion); // Set the new question for editing
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  // Save updates to the current question
  const handleSave = async () => {
    if (!editedQuestion) return;

    try {
      const updatedQuestion = await client.updateQuestion(
        qid,
        editedQuestion._id,
        editedQuestion
      ) as any;
      const updatedQuestions = allQuestions.map((q) =>
        q._id === updatedQuestion._id ? updatedQuestion : q
      );
      setAllQuestions(updatedQuestions);
      alert("Question saved successfully!");
      navigate(-1); // Navigate back
    } catch (error) {
      console.error("Error saving question:", error);
    }
  };

  // Delete a question
  const handleDelete = async (questionId: string) => {
    try {
      await client.deleteQuestion(qid, questionId);
      setAllQuestions(allQuestions.filter((q) => q._id !== questionId));
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };



  useEffect(() => {
    fetchQuestions();
  }, [qid, questionId]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="editor-container mt-5">
      <div style={{ marginLeft: "150px", marginRight: "150px" }}>
        {editedQuestion ? (
          <QuestionForm
                      key={editedQuestion._id}
                      question={editedQuestion}
                      onQuestionChange={(updatedQuestion) => setEditedQuestion(updatedQuestion)} index={0} editing={false} deleteQuestion={function (index: number): void {
                          throw new Error("Function not implemented.");
                      } }          />
        ) : (
          <div>No question selected. Add or select a question to edit.</div>

        )}
      </div>
      <br />
      <hr />
    </div>
  );
}
