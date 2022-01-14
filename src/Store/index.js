import { createStore } from "redux";

const startingState = {
  box1Content: "",
  box1url: "",
  box1color: "",
  box1update: 0,
  box2Content: "",
  box2url: "",
  box2color: "",
  box2update: 0,
  box3Content: "",
  box3url: "",
  box3color: "",
  box3update: 0,
};

const boxReducer = (state = startingState, action) => {
  if (action.type === "update") {
    if (action.boxNumber === 1)
      return {
        ...state,
        box1Content: action.data.boxDetail.text,
        box1url: action.data.boxDetail.url,
        box1color: action.data.boxDetail.color,
        box1update: action.data.boxDetail.nUpdate,
      };
    if (action.boxNumber === 2)
      return {
        ...state,
        box2Content: action.data.boxDetail.text,
        box2url: action.data.boxDetail.url,
        box2color: action.data.boxDetail.color,
        box2update: action.data.boxDetail.nUpdate,
      };
    if (action.boxNumber === 3)
      return {
        ...state,
        box3Content: action.data.boxDetail.text,
        box3url: action.data.boxDetail.url,
        box3color: action.data.boxDetail.color,
        box3update: action.data.boxDetail.nUpdate,
      };
  }
  return {
    ...state,
  };
};
const store = createStore(boxReducer);

export default store;
