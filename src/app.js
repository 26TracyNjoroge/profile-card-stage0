const timeEl = document.querySelector("#time-value");
const avatarImg = document.querySelector(".profile-user-avatar");
const fileInput = document.createElement("input");

fileInput.type = "file";
fileInput.accept = "image/*";

const setAvatar = (source) => {
  if (typeof source === "string") {

    avatarImg.src = source;
  } else if (source instanceof File) {
    const blobUrl = URL.createObjectURL(source);
    avatarImg.src = blobUrl;
  }
};

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    setAvatar(file);
  }
});

avatarImg.addEventListener("click", () => {
  fileInput.click();
});



const updateMilliseconds = () => {
    const currentTimeMillis = Date.now();
    timeEl.textContent = currentTimeMillis;

    requestAnimationFrame(updateMilliseconds);
};

setAvatar("/assets/images/avatar.jpg");
updateMilliseconds();


