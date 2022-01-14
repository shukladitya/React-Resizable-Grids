import { useState } from "react";
import ReactDom from "react-dom";
import EditPanel from "../EditPanel";
import Styles from "./index.module.scss";

const Buttons = (props) => {
  const [showEditPanel, setShowEditPanel] = useState(false);
  const [formName, setFormName] = useState("Edit Box");

  const editButtonHandler = () => {
    setFormName("Edit Box");
    setShowEditPanel(true);
  };
  const addButtonHandler = () => {
    setFormName("Create New");
    setShowEditPanel(true);
  };

  return (
    <div className={Styles.buttonPanel}>
      <div>
        <div className={Styles.extraMargin} onClick={editButtonHandler}>
          <ion-icon name="create-outline"></ion-icon>
        </div>
        <div onClick={addButtonHandler}>
          <ion-icon name="add-circle-outline"></ion-icon>
        </div>
      </div>
      {showEditPanel &&
        ReactDom.createPortal(
          <EditPanel
            data={props.data}
            boxNumber={props.boxNumber}
            noOfEdit={props.noOfEdit}
            formName={formName}
            removePanel={setShowEditPanel}
          />,
          document.querySelector("#editPanel")
        )}
    </div>
  );
};
export default Buttons;
