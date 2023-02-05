let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

// Task 1

let liProject = document.querySelectorAll("ul li a");

liProject[2].innerText = "Projects"

// Task 2

// let accordianWrapper = document.querySelector(".accordian-wrapper")

// let accordianDiv = document.createElement("div")

// accordianDiv.className = "accordian"

// let accoH3 = document.createElement("h3");

// accoH3.innerHTML = "Skills"

// let accoP = document.createElement("p");

// accoP.innerHTML = "I Posses a very good command over the full stack development technologies like MERN which can be seen in my work over the GitHub.";

// accordianDiv.appendChild(accoH3)
// accordianDiv.appendChild(accoP)


// accordianWrapper.appendChild(accordianDiv)


let accordianDiv = document.createElement("div");

let accoH3 = document.createElement("h3");
accoH3.innerText = "Skills";

let accoP = document.createElement("p");
accoP.innerText = "I Posses a very good command over the full stack development technologies like MERN which can be seen in my work over the GitHub.";

accordianDiv.appendChild(accoH3);
accordianDiv.appendChild(accoP);

accordianDiv.addEventListener("click", function () {
  let content = this.querySelector("p");
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
});

let accordianWrapper = document.querySelector(".accordian-wrapper");

accordianWrapper.appendChild(accordianDiv);

accordianDiv.className = "accordian";