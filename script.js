// Contact form submission handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent. 🚀`);
    document.getElementById("contactForm").reset();
  } else {
    alert("❗ Please fill in all fields before submitting.");
  }
});

// Filter blog posts by topic
function filterPosts(topic) {
  let posts = document.querySelectorAll(".post");
  posts.forEach(post => {
    if (post.classList.contains(topic) || topic === "all") {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
}
