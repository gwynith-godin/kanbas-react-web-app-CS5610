import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import * as client from "../../client";

interface Option {
  text: string;
  isCorrect: boolean;
}

interface Question {
  type: string;
  title: string;
  points: number;
  question: string;
  options: Option[];
}

export default function QuestionsEditor() {
  const { qid, questionId } = useParams<{ qid: string; questionId: string }>(); 
  const navigate = useNavigate(); 
  const [question, setQuestion] = useState<Question | null>(null);
  const [tempQuestion, setTempQuestion] = useState<Question | null>(null); // Temporary questions

  // Fetch a single question 
  const getQuestion = async () => {
    const fetchedQuestion = await client.getQuestion(qid, questionId); 
    console.log("questionid: ", questionId); // Fetching OK
    setQuestion(fetchedQuestion); 
  };

  const handleUpdate = async () => {
    if (question) {
      try {
        console.log("Updated Question:", question); // Debug to ensure the updated question is correct
        await client.updateQuestion(qid, questionId, tempQuestion); // Send the current state of the question
        setQuestion(tempQuestion);
        navigate(-1); // Navigate back to the previous page
      } catch (error) {
        console.log("Failed to update question:", questionId);
        console.error("Error details:", error);
      }
    }
  };

  const handleFieldChange = (field: string, value: any) => {
    console.log("Updating field:", field, "with value:", value); // ok
    if (tempQuestion) {
        setTempQuestion({ ...tempQuestion, [field]: value });
    }
  };

  const handleOptionChange = (index: number, field: string, value: any) => {
    console.log("Updating option index:", index, "field:", field, "with value:", value); // ok
    if (tempQuestion) {
        const updatedOptions = tempQuestion.options.map((option, i) =>
          i === index ? { ...option, [field]: value } : option
        );
        setTempQuestion({ ...tempQuestion, options: updatedOptions });
    }
  };

  const handleCancel = () => {
    navigate(-1);
  }

  useEffect(() => {
    if (qid && questionId) {
      getQuestion();
    }
  }, [qid, questionId]);

  useEffect(() => {
    if (question) {
      setTempQuestion({ ...question });
    }
  }, [question]);
  

  const renderQuestionDetails = (question: any) => {
    switch (question.type) {
        case "MultipleChoice":
            return (
                <div>
                    <h6>Options:</h6>
                    <ul>
                        {question.options.map((option: any, index: number) => (
                            <li key={index}>{option.text}</li>
                        ))}
                    </ul>
                </div>
            );
        case "TrueFalse":
            return (
                <div>
                    <p><strong>Answer:</strong> {question.trueFalse.answer ? "True" : "False"}</p>
                </div>
            );
        case "FillInTheBlank":
            return (
                <div>
                    <p><strong>Blank:</strong> {question.fillInTheBlank.blank}</p>
                </div>
            );
        case "OpenResponse":
            return (
                <div>
                    <p><strong>Response:</strong> {question.question}</p>
                </div>
            );
        default:
            return null;
    }
};

  if (!tempQuestion) return <div>Loading...</div>;

  return (
    <div className="mt-5">
      <div style={{ marginLeft: "150px", marginRight: "150px" }}>
        <div style={{ marginBottom: "20px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={tempQuestion.title}
              onChange={(e) => handleFieldChange("title", e.target.value)}
              className="form-control"
            />
          </div>
          <div>
            <label>Question:</label>
            <textarea
              value={tempQuestion.question}
              onChange={(e) => handleFieldChange("question", e.target.value)}
              className="form-control"
            />
          </div>
          <div>
          <label>Type:</label>
            <select
              value={tempQuestion.type}
              className="form-control"
            >
              <option value="MultipleChoice">Multiple Choice</option>
              <option value="TrueFalse">True/False</option>
              <option value="FillInTheBlank">Fill in the Blank</option>
              <option value="OpenResponse">Open Response</option>
            </select>
          </div>
          <div>
            <label>Points:</label>
            <input
              type="number"
              value={tempQuestion.points}
              onChange={(e) => handleFieldChange("points", Number(e.target.value))}
              className="form-control"
            />
          </div>
          <div>
            <h5>Options:</h5>
            {renderQuestionDetails(tempQuestion)};
          </div>
          <div className="button-container" style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <button onClick={handleCancel} className="btn border-bottom border-secondary" style={{ backgroundColor: "#f5f5f5" }}>
              Cancel
            </button>
            <button onClick={handleUpdate} className="btn border-bottom border-secondary" style={{ backgroundColor: "#f5f5f5" }}>
              Update
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}