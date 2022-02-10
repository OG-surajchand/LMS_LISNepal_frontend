import React from 'react';
import '../Style/DataField.css'

function DataField(props) {
  return(
      <>
        <li className='head'>{props.name}</li>
        <input type={props.type} placeholder={props.name} className="datafield"/>
      </>
  );
}

export default DataField;
