function register() {
  let inputs = document.getElementsByTagName("input");
  //   console.log(inputs);
  let fullname = inputs[0].value;
  let username = inputs[1].value;
  let pass = inputs[2].value;
  let rePass = inputs[3].value;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === "") {
      alert("khong duoc de trong !");
      return;
    }
  }
  if (pass !== rePass) {
    alert("pass ko khop");
    return;
  }
  localStorage.setItem(
    "user",
    JSON.stringify({
      fullname: fullname,
      username: username,
      password: pass,
    })
  );
  alert("đăng kí thành công");
}
