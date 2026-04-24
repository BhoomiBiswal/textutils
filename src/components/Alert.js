import React from 'react'

function Alert(props) {
     const capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    //props.alert && means first one agar false hua toh rest nhi evaluate hoga
    //yeh kyuki all jsx get converted to js calls
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>:{props.alert.message}
    
    </div>
  )
}

export default Alert