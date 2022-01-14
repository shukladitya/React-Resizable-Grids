import http from "axios";
import { useDispatch, useSelector } from "react-redux";
import Buttons from "../Buttons";
import Styles from "./index.module.scss";
import dataMapping from "./dataMapping";
import { useEffect } from "react";

const Box = (props) => {
  const stateData = useSelector((state) => state);
  const dispatch = useDispatch();
  const data = dataMapping(props, stateData);

  const getData = async () => {
    let response = await http.get(
      `http://localhost:9000/boxes/${props.boxNumber}`
    );
    dispatch({
      type: "update",
      boxNumber: props.boxNumber,
      data: response.data,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={Styles.boxStyle} style={{ backgroundColor: data.color }}>
      <p className={Styles.paragraph}>{data.content}</p>
      <div
        className={Styles.picture}
        style={{
          backgroundImage: `url(${data.url})`,
        }}
      ></div>
      <Buttons boxNumber={props.boxNumber} data={data} noOfEdit={data.noOfEdit} />
    </div>
  );
};

export default Box;
