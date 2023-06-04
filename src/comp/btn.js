function generalBtn(txt, func) {
    return (
      <button className="generalBtn" onClick={func}>
        {txt}
      </button>
    );
  }
  
  export default generalBtn;
  