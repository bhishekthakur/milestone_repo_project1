document.addEventListener('DOMContentLoaded', () => {
    const addBlogForm = document.getElementById('add-blog-form');
    const blogList = document.getElementById('blog-list');
  
    addBlogForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const title = document.getElementById('blog-title').value;
      const content = document.getElementById('blog-content').value;
  
      if (title && content) {
        const blog = {
          title,
          content,
          date: new Date().toISOString(),
        };
  
        // Get existing blogs from LocalStorage
        let existingBlogs = localStorage.getItem('blogs');
        existingBlogs = existingBlogs ? JSON.parse(existingBlogs) : [];
  
        // Add the new blog to the list
        existingBlogs.push(blog);
  
        // Store the updated blogs in LocalStorage
        localStorage.setItem('blogs', JSON.stringify(existingBlogs));
  
        // Clear the form fields
        addBlogForm.reset();
  
        // Refresh the blog list
        displayBlogs();
      }
    });
  
    function displayBlogs() {
      blogList.innerHTML = '';
  
      // Get existing blogs from LocalStorage
      let existingBlogs = localStorage.getItem('blogs');
      existingBlogs = existingBlogs ? JSON.parse(existingBlogs) : [];
  
      existingBlogs.forEach((blog, index) => {
        const blogItem = document.createElement('div');
        blogItem.classList.add('blog-item');
        blogItem.innerHTML = `
          <h3>${blog.title}</h3>
          <p>${blog.content}</p>
          <p>Date: ${new Date(blog.date).toLocaleString()}</p>
        `;
        blogList.appendChild(blogItem);
      });
    }
  
    // Initial display of blogs
    displayBlogs();
  });
  