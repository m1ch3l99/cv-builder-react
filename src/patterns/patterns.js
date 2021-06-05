const phonePattern = /^((961*(3|8(1)|7(0|1|6)))|(03|7(0|1)))\d{6}$/g;
const emailPattern =
  /^([a-z\d\\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/g;

export { phonePattern, emailPattern };
