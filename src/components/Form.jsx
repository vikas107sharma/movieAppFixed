import React from "react";
import "./styles/form.css";

const Form = ({ handleSubmit, setQ, q }) => {
  return (
    <div className="w-100% h-screen flex form">
      <div className="input_group w-[70%] flex flex-col text-center gap-4 justify-center items-center">
        <h1 className="text-white text-4xl">
          Search Unlimited Movies and Series
        </h1>
        <p className="text-white tracking-wider">Watch anywhere, anytime</p>
        <div className="rounded-3xl">
          <form onSubmit={handleSubmit}>
            <input
            className="p-2 pl-3 pr-3 outline-none rounded-s-sm text-sm"
              type="text"
              value={q}
              placeholder="Search movies or TV series"
              onChange={(e) => {
                setQ(e.target.value);
              }}
            />
            <button className="bg-red-600 text-sm hover:bg-red-700 rounded-e-sm text-white p-2 pl-2 pr-2" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
