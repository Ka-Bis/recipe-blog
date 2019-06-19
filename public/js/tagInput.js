const tagContainer = document.querySelector(".tag-container");
const input = document.querySelector(".tag-container #ingredient");
var tags = [];

function createTags(label) {
  const div = document.createElement("li");
  div.setAttribute("class", "tag");
  div.setAttribute("name", "ingredient");
  const span = document.createElement("span");
  span.innerHTML = label;
  const closeBtn = document.createElement("i");
  closeBtn.setAttribute("class", "material-icons");
  closeBtn.innerHTML = "close";
  closeBtn.setAttribute('data-item', label);

  div.appendChild(span);
  div.appendChild(closeBtn);
  return div;
}

function reset() { // reset tag
  document.querySelectorAll(".tag").forEach(tag => {
    tag.parentElement.removeChild(tag);
  });
}

function addTags() { // Add Tags
  reset();
  tags.slice().reverse().forEach(tag => {
    const input = createTags(tag);
    tagContainer.prepend(input);
  });
}


input.addEventListener("keyup", e => { // Listenner touche ENTER
  if (e.key === "Enter" || e.keyCode === 13) {
    tags.push(input.value);
    addTags();
    input.value = " ";
  }
});

document.addEventListener('click', e => { // Suppression tags
  if (e.target.tagName === 'I') {
    const value = e.target.getAttribute('data-item');
    const index = tags.indexOf(value)
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    // console.log(tags);
    addTags();
  }
});

document.addEventListener('keyup', e => {
  if (e.keyCode === 8 || e.key === "Backspace") {
    const index = tags.indexOf(value)
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    // console.log(tags);
    addTags();
  }
})

input.focus()