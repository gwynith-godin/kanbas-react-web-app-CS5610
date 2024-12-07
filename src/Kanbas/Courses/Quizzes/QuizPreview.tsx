import React, { useEffect, useState } from 'react';
import { getQuestions, createAttempt, updateAttempt } from './client'; 
import { useParams, useNavigate } from 'react-router-dom';

export default function QuizPreview() {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [attempt, setAttempt] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [answers, setAnswers] = useState<any[]>([]); 
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const { qid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (qid) {
      getQuestions(qid)
        .then((data) => {
          setQuestions(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching questions:", error);
          setIsLoading(false);
        });
    }
  }, [qid]);

  const handleStart = () => {
    if (!qid) return;
    const userId = "674f32e4ab8b239e4c328be0"; 
    createAttempt({ quizId: qid, userId })
      .then((newAttempt) => {
        setAttempt(newAttempt);
        // On starting attempt, ensure no previously stored answers or selections
        setAnswers([]);
        setSelectedOption(null);
      })
      .catch((error) => {
        console.error("Error creating attempt:", error);
      });
  };

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const saveAndUpdateAttempt = async (newIndex: number) => {
    if (!attempt) return;

    const questionId = currentQuestion?._id;
    if (questionId && selectedOption !== null) {
      // Update answers array with the latest selection
      const updatedAnswers = [...answers];
      const existingIndex = updatedAnswers.findIndex(a => a.questionId === questionId);
      const newAnswer = { questionId: questionId, selectedOption };

      if (existingIndex === -1) {
        updatedAnswers.push(newAnswer);
      } else {
        updatedAnswers[existingIndex] = newAnswer;
      }

      // Update the attempt on the server with the full answers array
      try {
        const updatedAttemptData = { ...attempt, answers: updatedAnswers };
        const updatedAttempt = await updateAttempt(attempt._id, updatedAttemptData);
        setAttempt(updatedAttempt);
        setAnswers(updatedAnswers);

        // Move to the next/previous question and reset selectedOption for that question
        setCurrentQuestionIndex(newIndex);

        // If the next question has been answered before, pre-select its option
        const nextQuestionId = questions[newIndex]?._id;
        if (nextQuestionId) {
          const previouslySelected = updatedAnswers.find(a => a.questionId === nextQuestionId);
          setSelectedOption(previouslySelected ? previouslySelected.selectedOption : null);
        } else {
          setSelectedOption(null);
        }

      } catch (error) {
        console.error("Error updating attempt:", error);
        // Handle error, maybe show an error message
      }
    } else {
      // If no selected option yet, still navigate but won't update the server.
      // You might want to enforce that a user can't proceed without selecting.
      setCurrentQuestionIndex(newIndex);
      setSelectedOption(null);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      saveAndUpdateAttempt(currentQuestionIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      saveAndUpdateAttempt(currentQuestionIndex - 1);
    }
  };

  if (isLoading) {
    return <p>Loading questions...</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>
        Back to Quiz Details
      </button>
      <h1>Quiz Preview</h1>

      {/* If no attempt yet, show start button once questions are loaded */}
      {!attempt && !isLoading && questions.length > 0 && (
        <div>
          <p>Ready to start the quiz?</p>
          <button onClick={handleStart}>Start</button>
        </div>
      )}

      {/* Once attempt is created and we have at least one question */}
      {attempt && questions.length > 0 && currentQuestion && (
        <div>
          <h2>
            Question {currentQuestionIndex + 1} of {questions.length}
          </h2>
          <p>{currentQuestion.question}</p>
          <div>
            {currentQuestion.options?.map((option: any, idx: any) => (
              <div key={idx} style={{ margin: '5px 0' }}>
                <label>
                  <input 
                    type="radio" 
                    name={`question-${currentQuestionIndex}`} 
                    value={option.text}
                    checked={selectedOption === option.text}
                    onChange={handleOptionChange}
                  />
                  {option.text}
                </label>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '20px' }}>
            <button 
              onClick={handleBack} 
              disabled={currentQuestionIndex === 0} 
              style={{ marginRight: '10px' }}
            >
              Back
            </button>
            <button 
              onClick={handleNext} 
              disabled={currentQuestionIndex === questions.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      )}
      
      {attempt && questions.length === 0 && (
        <p>No questions found for this quiz.</p>
      )}
    </div>
  );
}

