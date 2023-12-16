const clipBoard = navigator.clipboard;
clipBoard.writeText(textToCopy).then(() => {
  alert("Copied text to keyboard");
});
