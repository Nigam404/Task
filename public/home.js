//getting the buttons...
const fetchPostBtn = document.getElementById("fetch_post");
const fetchCommentBtn = document.getElementById("fetch_comment");
const fetchUserBtn = document.getElementById("fetch_user");
const searchBtn = document.getElementById("search");

//adding event listener to the buttons...
fetchPostBtn.addEventListener("click", fetchPost);
fetchCommentBtn.addEventListener("click", fetchComment);
fetchUserBtn.addEventListener("click", fetchUser);
searchBtn.addEventListener("click", driver);

//click event handler for fetchPostBtn...
async function fetchPost() {
  try {
    const response = await axios.get("http://localhost:3000/post/");
    if (response.status == 201) {
      alert(response.data.message);
    }
  } catch (error) {
    console.log(error);
    alert("something went wrong");
  }
}
//click event handler for fetchCommentBtn...
async function fetchComment() {
  try {
    const response = await axios.get("http://localhost:3000/comment/");
    if (response.status == 201) {
      alert(response.data.message);
    }
  } catch (error) {
    console.log(error);
    alert("something went wrong");
  }
}
//click event handler for fetchUserBtn...
async function fetchUser() {
  try {
    const response = await axios.get("http://localhost:3000/user/");
    if (response.status == 201) {
      alert(response.data.message);
    }
  } catch (error) {
    console.log(error);
    alert("something went wrong");
  }
}
//Click event handler for search button....
async function driver() {
  let search_text = document.getElementById("search_text").value;
  let search_type = document.getElementById("search_type").value;

  const result = await axios.get(
    `http://localhost:3000/post/search/${search_text}/${search_type}`
  );
  document.getElementById("result").innerText = "";

  if (result.status == 200) {
    alert("Matching post found.");
    if (search_type == "post") {
      document.getElementById("info").innerText =
        "Found post through post name/body";
      //getting div for showing result.
      const parent = document.getElementById("result");
      parent.innerText = JSON.stringify(result.data);
    } else if (search_type == "comment") {
      document.getElementById("info").innerText =
        "Found post through comment name/body";
      //getting div for showing result.
      const parent = document.getElementById("result");
      parent.innerText =
        "Found Comment :  " +
        JSON.stringify(result.data.comment) +
        "\n" +
        "\n" +
        " Found associated post : " +
        JSON.stringify(result.data.post);
    }
  } else if (result.status == 204) {
    alert("Oops!!! No such post found.");
    document.getElementById("info").innerText = "";
  }
}
