const dataMapping = (props, stateData) => {
  if (props.boxNumber === 1)
    return {
      content: stateData.box1Content,
      url: stateData.box1url,
      color: stateData.box1color,
      noOfEdit: stateData.box1update,
    };
  else if (props.boxNumber === 2)
    return {
      content: stateData.box2Content,
      url: stateData.box2url,
      color: stateData.box2color,
      noOfEdit: stateData.box2update,
    };
  else if (props.boxNumber === 3)
    return {
      content: stateData.box3Content,
      url: stateData.box3url,
      color: stateData.box3color,
      noOfEdit: stateData.box3update,
    };
};

export default dataMapping;
