const postApiUrl = "https://gk6qwn-8080.csb.app/posts";
const innerPost = document.querySelector("#inner-post");
let limit = 20;
const getPosts = async (limit) => {
  const response = await fetch(postApiUrl + `?_limit=${limit}`);
  const data = await response.json();
  render(data);
  window.addEventListener("scroll", handleScroll);
};
const render = (data) => {
  innerPost.innerHTML = data
    .map(
      ({ title, content, date }) => `
   <div class="m-4 border border-success w-50 p-3">
        <h2 class="text-success fw-bold fs-3">${title}</h2>
        <p class="text-success">${content}</p>
        <div class="d-flex align-items-center justify-content-between">
          <span class="text-success">Date: ${date}</span>
          <a href="#" class="text-success">Chi tiết >></a>
        </div>
      </div>`
    )
    .join("");
};
getPosts(limit);
const handleScroll = () => {
  if (window.scrollY + window.innerHeight >= innerPost.offsetHeight) {
    window.removeEventListener("scroll", handleScroll);
    limit += 5;
    getPosts(limit);
    console.log(limit);
  }
};
window.addEventListener("scroll", handleScroll);
