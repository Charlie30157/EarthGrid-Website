// Handling the search form submission
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting in the default way

  const searchQuery = document.getElementById('searchInput').value;
  if (searchQuery) {
      console.log('Searching for:', searchQuery);
      // Redirect to search results page or handle search functionality here
      // Example: window.location.href = `/search?query=${searchQuery}`;
  } else {
      alert('Please enter a search term');
  }
});

// Hidden elements animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Image animation
function toggle(id) {
  event.preventDefault(); // Prevent page from jumping to the top
  var blur = document.getElementById('card-area');
  blur.classList.toggle('active');

  var popup = document.getElementById(id);
  if (popup) {
      popup.classList.toggle('active');
  } else {
      console.error("Popup with ID " + id + " not found.");
  }
}

// Chat functionality
document.addEventListener('DOMContentLoaded', function () {
  const chatContainer = document.getElementById('chatContainer');
  const communitySelect = document.getElementById('communitySelect');
  const globalChatBox = document.getElementById('globalChatBox');
  const techChatBox = document.getElementById('techChatBox');
  const natureChatBox = document.getElementById('natureChatBox');
  const messageInput = document.getElementById('messageInput');
  const sendMessageBtn = document.getElementById('sendMessageBtn');
  const usernameInput = document.getElementById('usernameInput');

  let username = '';

  // Function to display the appropriate chat box
  function updateChatDisplay() {
      const selectedCommunity = communitySelect.value;
      globalChatBox.style.display = selectedCommunity === 'global' ? 'block' : 'none';
      techChatBox.style.display = selectedCommunity === 'tech' ? 'block' : 'none';
      natureChatBox.style.display = selectedCommunity === 'nature' ? 'block' : 'none';
  }

  // Function to add a message to the correct chatbox
  function addMessageToChat(message, community) {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message');
      messageDiv.textContent = `${username}: ${message}`;

      switch (community) {
          case 'global':
              globalChatBox.appendChild(messageDiv);
              globalChatBox.scrollTop = globalChatBox.scrollHeight;
              break;
          case 'tech':
              techChatBox.appendChild(messageDiv);
              techChatBox.scrollTop = techChatBox.scrollHeight;
              break;
          case 'nature':
              natureChatBox.appendChild(messageDiv);
              natureChatBox.scrollTop = natureChatBox.scrollHeight;
              break;
      }
  }

  // Event listener for sending a message
  sendMessageBtn.addEventListener('click', function () {
      const selectedCommunity = communitySelect.value;
      const message = messageInput.value.trim();
      username = usernameInput.value.trim();

      if (message && username) {
          addMessageToChat(message, selectedCommunity);
          messageInput.value = ''; // Clear the input field
      } else {
          alert('Please enter both username and message');
      }
  });

  // Press "Enter" to send message
  messageInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
          sendMessageBtn.click();
      }
  });

  // Event listener for community change
  communitySelect.addEventListener('change', updateChatDisplay);

  // Initialize with the correct chat box displayed
  updateChatDisplay();
});

// Active nav link on scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-bar a");

  window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - sectionHeight / 3) {
              current = section.getAttribute("id");
          }
      });

      navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${current}`) {
              link.classList.add("active");
          }
      });
  });
});

