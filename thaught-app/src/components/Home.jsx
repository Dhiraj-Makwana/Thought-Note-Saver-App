import React, { useState, useEffect, useDispatch } from "react";
import { useSearchParams } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams(); //if you want to get id from the url then use this hook
  const [thoughtId, setThoughtId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setThoughtId(searchParams.get("thoughtId"));
  }, [searchParams]);


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
        dispatch(updateToThaught(thought));
    }
    else {
        //create
        dispatch(addToThaught(thought));
    }

    //after creation or updation
    setTitle('');
    setValue('');
    setSearchParams({});
  }

  return (
    <div>
      <div class="home-div">
        <input
          class="input-container"
          type="text"
          placeholder="Enter Title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onChange={createThought} id="btn-1">
          {thoughtId ? "Update My Thought" : "Create My Thought"}
        </button>
      </div>

      <div class="text-div">
        <textarea
          class="text-container"
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
