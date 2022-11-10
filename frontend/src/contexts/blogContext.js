import { createContext, useReducer } from "react";

export const BlogContext = createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "SET_BLOGS":
      return {
        blog: action.payload,
      };
    case "CREATE_WORKOUTS":
      return {
        blog: [action.payload, ...state.blog],
      };

    default:
      return state;
  }
};

export const BlogContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, {
    blog: null,
  });
  return (
  <BlogContext.Provider value={{...state, dispatch}}>
    {children}
  </BlogContext.Provider>
  )
};
