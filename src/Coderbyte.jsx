import React, { useState, useEffect } from "react";

const articles = [
  {
    id: 1,
    title: "How to Build a Search Box in React",
    date: "Oct 09/2018",
    content: "This is an example article about building a search box in React.",
  },
  {
    id: 2,
    title: "How to Build a Search Box in React",
    date: "Oct 09/2018",
    content: "This is an example article about building a search box in React.",
  },
  {
    id: 3,
    title: "How to Build a Search Box in React",
    date: "Oct 09/2018",
    content: "This is an example article about building a search box in React.",
  },
  {
    id: 4,
    title: "How to Build a Search Box in React",
    date: "Oct 09/2018",
    content: "This is an example article about building a search box in React.",
  },
];

const Coderbyte = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(articles);
  }, []);

  const articleCount = articles.length;

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.split(regex).map((part, index) =>
      part.match(regex) ? (
        <span key={index} className="bg-yellow-200">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <>
      <div className="lg:mx-80 md:mx-20 sm:mx-30 mt-8">
        <div className="mb-4">
          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search articles..."
                required
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <p className="my-5 text-[18px]">
              <span className="font-bold">{articleCount} posts</span> where
              found.
            </p>
          </form>
        </div>
        <div>
          {searchResults.map((article) => (
            <div
              key={article.id}
              className="mb-4 p-4 border border-gray-300 rounded"
            >
              <h3 className="text-2xl font-bold">
                {highlightText(article.title, searchTerm)}
              </h3>
              <p className="my-2 font-semibold">
                {highlightText(article.date, searchTerm)}
              </p>
              <p className="text-lg">
                {highlightText(article.content, searchTerm)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Coderbyte;
