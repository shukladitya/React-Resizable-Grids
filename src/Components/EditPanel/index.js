import Styles from "./index.module.scss";
import http from "axios";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const EditPanel = (props) => {
  const textRef = useRef();
  const urlRef = useRef();
  const colorRef = useRef();

  const dispatch = useDispatch();

  const postData = async () => {
    const form = new FormData();
    form.set("boxNumber", props.boxNumber);
    form.set("text", textRef.current.value);
    form.set("url", urlRef.current.value);
    form.set("color", colorRef.current.value);
    form.set("uNumber", props.noOfEdit);

    let response = await http.post("http://localhost:9000/create", form);

    dispatch({
      type: "update",
      boxNumber: props.boxNumber,
      data: response.data,
    });
    props.removePanel(false);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className={Styles.modal}
      onClick={() => {
        props.removePanel(false);
      }}
    >
      <div className={Styles.editPanel} onClick={stopPropagation}>
        <h3>{props.formName}</h3>
        <textarea
          ref={textRef}
          placeholder="Text"
          defaultValue={props.formName === "Edit Box" ? props.data.content : ""}
        ></textarea>
        <input
          ref={urlRef}
          placeholder="Image URL"
          defaultValue={props.formName === "Edit Box" ? props.data.url : ""}
        ></input>
        <input
          ref={colorRef}
          placeholder="Box color"
          defaultValue={props.formName === "Edit Box" ? props.data.color : ""}
        ></input>
        <h4>{`Edits till now: ${props.noOfEdit}`}</h4>
        <button onClick={postData}>
          Save<ion-icon name="save-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default EditPanel;
