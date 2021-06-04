const style = {
  input: {
    marginTop: "10px",
    outline: "none",
    fontSize: "17px",
    borderRadius: "5px",
    border: "2px solid black",
    transition: "all 0.3s ease-in",
    fontWeight: 400,
    width: "100%",
    height: "45px",
    ":focus:": {
      border: "2px solid #d0ad28",
      backgroundColor: "#1a2223",
      color: "white",
      fontWeight: 400,
      fontSize: "17px",
      width: "100%",
      height: "45px",
    },
  },
  label: {
    fontSize: "20px",
    fontWeight: "600",
    margin: "10px 0",
  },
  roundedIcon: {
    width: "50px",
    height: "50px",
    marginTop: "20px",
    cursor: "pointer",
    color: "#1a2223",
  },

  cancelIcon: {
    color: "red",
    width: "50px",
    height: "50px",
    position: "absolute",
    top: 10,
    right: 10,
    cursor: "pointer",
    transition: "all .3s ease-in",
  },
};

export default style;
