import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ViewThought.css";

const ViewThought = () => {
  const { id } = useParams(); //get id from url
  const thoughts = useSelector((state) => state.thought.thoughts);

  const selectedThought = thoughts.find((t) => t._id === id);

  if (!selectedThought) {
    return <div>❌ Thought not found</div>;
  }

  return (
    <div className="view-thought-container">
      <h2>{selectedThought.title}</h2>
      <p>{selectedThought.content}</p>
      <p>
        <strong>Created At:</strong>{" "}
        {new Date(selectedThought.createdAt).toLocaleString()}
      </p>
    </div>
  );
};

export default ViewThought;
