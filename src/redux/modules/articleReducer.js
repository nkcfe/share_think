const POST = "article/POST";
const DELETE = "article/DELETE";
const MODIFY = "article/MODIFY";

export const postArticle = (value) => {
  return {
    type: POST,
    value,
  };
};

export const deleteArticle = (value, id) => {
  return {
    type: DELETE,
    value,
    id,
  };
};

export const modifyArticle = (value, id) => {
  return {
    type: MODIFY,
    value,
    id,
  };
};

const initialState = [
  {
    id: 1,
    title: "Lorem Ipsum",
    subtitle: "What is Lorem Ipsum?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    subtitle: "What is Lorem Ipsum?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    title: "Lorem Ipsum",
    subtitle: "What is Lorem Ipsum?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 4,
    title: "Lorem Ipsum",
    subtitle: "What is Lorem Ipsum?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];


const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST:
      return state.concat(action.value);
    case DELETE:
      return state.filter((article) => article.id !== action.id);
    case MODIFY:
      return state.map((article) =>
        article.id === action.id
          ? {
              ...article,
              title: action.title,
              subtitle: action.subtitle,
              text: action.text,
            }
          : article
      );
    default:
      return state;
  }
};

export default articleReducer;
