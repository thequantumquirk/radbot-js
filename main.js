const styles = `
.custom-button {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: hsl(346.8 77.2% 49.8%);
    color: #fff;
    border: none;
    border-radius: 5px;
    z-index: 99999999;
}

.dialog-content {
    position: fixed;
    right: 1rem;
    bottom: 5rem;
    border-radius: 10px;
    z-index: 99999999;
}
`;

function createButtonAndDialog() {
  const styleElement = document.createElement("style");
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);

  const button = document.createElement("button");
  button.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>';
  button.className = "custom-button";

  const dialogOverlay = document.createElement("div");
  dialogOverlay.className = "dialog-overlay";

  const dialogContent = document.createElement("div");
  dialogContent.className = "dialog-content";

  document.body.appendChild(button);
  document.body.appendChild(dialogContent);

  const iframe = document.createElement("iframe");
  iframe.src = "https://radbot-dfnw.vercel.app/";
  iframe.style.width = window.innerWidth < 768 ? "90vw" : "20vw";
  iframe.style.height = "70svh";
  iframe.style.borderRadius = "10px";
  iframe.style.border = "1px solid rgba(55,55,55,0.5)";

  button.addEventListener("click", () => {
    if (dialogContent.children.length < 1) {
      dialogContent.appendChild(iframe);
    } else if (dialogContent.children.length > 0) {
      console.log(dialogContent, iframe);
      dialogContent.removeChild(iframe);
    }
  });
}

// Call the function to create the button and dialog box
createButtonAndDialog();
