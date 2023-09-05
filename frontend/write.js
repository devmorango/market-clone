const form = document.getElementById("write-form");

const handleSubmitForm = async (event) => {
  event.preventDefault(); //새로고침 방지
  const body = new FormData(form);
  body.append("insertAt", new Date().getTime());

  try {
    const res = await fetch("/items", {
      method: "POST",
      body,
    });
    const data = await res.json();
    if (data === "200") window.location.pathname = "/";
  } catch (e) {
    console.error(e);
  }

  console.log("완료");
};

form.addEventListener("submit", handleSubmitForm);
