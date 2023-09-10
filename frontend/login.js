const form = document.querySelector("#login-form");

//let accessToken = null;

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);

  const res = await fetch("/login", {
    method: "post",
    body: formData,
  });
  const data = await res.json();
  const accessToken = data["access-token"];
  window.localStorage.setItem("token", accessToken);
  alert("로그인 되었습니다.");
  //   accessToken = data.access_token;
  window.location.pathname = "/";

  //   if (res.status === 200) {
  //     alert("로그인 성공");
  //     window.location.pathname = "/";
  //   } else if (res.status === 401) {
  //     alert("id 혹은 password가 틀렸습니다");
  //   }
};

form.addEventListener("submit", handleSubmit);
