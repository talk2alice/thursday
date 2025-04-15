// Blog management functionality
const blogList = document.getElementById('blog-list');
const blogTitleInput = document.getElementById('blog-title');
const blogContentInput = document.getElementById('blog-content');
const saveBlogButton = document.getElementById('save-blog');

// Load blog posts from localStorage
function loadBlogPosts() {
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  blogPosts.forEach(addBlogPostToList);
}

function addBlogPostToList(post) {
  const blogItem = document.createElement('li');
  blogItem.textContent = `${post.title} - ${post.date}`;
  blogList.appendChild(blogItem);
}

// Save a new blog post
saveBlogButton.addEventListener('click', () => {
  const title = blogTitleInput.value;
  const content = blogContentInput.value;
  const date = new Date().toLocaleDateString();

  const newPost = { title, content, date };
  addBlogPostToList(newPost);

  // Save the new post to localStorage
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  blogPosts.push(newPost);
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

  blogTitleInput.value = '';
  blogContentInput.value = '';
});

// Contact form validation and submission
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate the form inputs
  if (!name || !email || !message) {
    alert('Please fill in all the required fields.');
    return;
  }

  // Reset the form and show the success message
  contactForm.reset();
  successMessage.classList.remove('hidden');
  setTimeout(() => {
    successMessage.classList.add('hidden');
  }, 3000);
});

// Load blog posts on page load
loadBlogPosts();
