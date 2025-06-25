import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from "react-router-dom";
import "./Home.css";
import { addToThought, updateToThought } from "../Redux/thoughtSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams(); //if you want to get id from the url then use this hook
  const [thoughtId, setThoughtId] = useState(null);
  const dispatch = useDispatch();
  const allThoughts = useSelector((state) => state.thought.thoughts);

  useEffect(() => {
    setThoughtId(searchParams.get("thoughtId"));
  }, [searchParams]);

  useEffect(() => {
        if(thoughtId) {
            const thought = allThoughts.find((p) => p._id === thoughtId);
            setTitle(thought.title);
            setValue(thought.content)
        }
    }, [thoughtId, allThoughts])

  function createThought() {
    const thought = {
        title: title,
        content: value,
        _id: thoughtId ||
            Date.now().toString(36),
        createdAt: new Date().toISOString(),
    }

    if(thoughtId) {
        //update
        dispatch(updateToThought(thought));
    }
    else {
        //create
        dispatch(addToThought(thought));
    }

    //after creation or updation
    setTitle('');
    setValue('');
    setSearchParams({});
  }

  return (
    <div>
      <div className="home-div">
        <input
          className="input-container"
          type="text"
          placeholder="Enter Title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={createThought} id="btn-1">
          {thoughtId ? "Update My Thought" : "Create My Thought"}
        </button>
      </div>

      <div className="text-div">
        <textarea
          className="text-container"
          value={value}
          placeholder="Enter content here..."
          onChange={(e) => setValue(e.target.value)}
          row={20}
        />
      </div>
    </div>
  );
};

export default Home;
