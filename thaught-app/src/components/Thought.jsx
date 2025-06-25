import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Thought.css";
import { removeFromThought } from "../Redux/thoughtSlice";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Thought = () => {
  const thoughts = useSelector((state) => state.thought.thoughts);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filteredData = thoughts.filter((thought) =>
    thought.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(thoughtId) {
    dispatch(removeFromThought(thoughtId));
  }

  return (
    <div>
      <input
        className="search-input"
        type="search"
        placeholder="Search here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="list-of-thoughts">
        {filteredData.length > 0 ? (
          filteredData.map((thought) => (
            <div className="thought-card" key={thought?._id}>
              <div>{thought.title}</div>
              <div>{thought.content}</div>

              <div className="btn-container">
                
                <button onClick={() => navigate(`/?thoughtId=${thought._id}`)}>
                    Edit
                </button>
                 
                <Link to={`/thought/${thought._id}`}>
                    <button>View</button> 
                </Link> 
                <button onClick={() => handleDelete(thought._id)}>
                    Delete
                </button>
                <button onClick={() => {navigator.clipboard.writeText(Thought?.content), toast.success("Copied to clipboard")}}> 
                    Copy 
                </button>
                <button> Share </button>
              </div>
              <div>{thought.createdAt}</div>
            </div>
          ))
        ) : (
          <p>No thoughts found</p>
        )}
      </div>
    </div>
  );
};

export default Thought;
