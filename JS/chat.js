// // 💬 ENHANCED Chat Widget - Full Conversation
// document.addEventListener('DOMContentLoaded', () => {
//     const chatBtn = document.getElementById('chat-btn');
//     const chatWindow = document.getElementById('chat-window');
//     const chatInput = document.getElementById('chat-input');
//     const chatMessages = document.getElementById('chat-messages');

//     let conversation = [];

//     // Smart Responses
//     const responses = {
//         greetings: ['hi', 'hello', 'hey', 'good morning', 'good afternoon'],
//         project: ['project', 'build', 'develop', 'create', 'app', 'website', 'software'],
//         tech: ['react', 'node', 'python', 'ai', 'mobile', 'saas', 'web'],
//         timeline: ['time', 'timeline', 'how long', 'weeks', 'duration'],
//         cost: ['cost', 'price', 'budget', 'how much', '$'],
//         hire: ['hire', 'work', 'contract', 'freelance', 'job'],
//         portfolio: ['portfolio', 'work', 'projects', 'experience']
//     };

//     const responseMessages = {
//         greeting: "Hey there! 👋 I'm Your Name, tech specialist. What can I build for you?",
//         project: "Awesome! What type of project? Web app, mobile app, AI solution, or SaaS platform?",
//         tech: "I specialize in React, Node.js, Python, AI/ML, and mobile development. What's your tech stack?",
//         timeline: "Most projects take 2-8 weeks. Simple landing pages: 1 week. Complex SaaS: 6-8 weeks.",
//         cost: "Pricing starts at $2k for landing pages, $5k+ for full apps. Let's discuss your needs!",
//         hire: "Excited to work together! 🚀 Share your project details and timeline.",
//         portfolio: "Check my <a href='works.html' style='color:#00d4ff'>Works page</a> or message me specifics!",
//         default: "Tell me more about your project! What challenges are you facing? 💡"
//     };

//     // Toggle Chat
//     chatBtn.onclick = () => {
//         chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
//         if (chatWindow.style.display === 'block') {
//             addMessage('bot', "Hi! 👋 Your Name here. Ready to build something amazing?");
//         }
//     };

//     // Send Message
//     chatInput.onkeypress = (e) => {
//         if (e.key === 'Enter' && chatInput.value.trim()) {
//             const message = chatInput.value.trim();
//             addMessage('user', message);
//             chatInput.value = '';

//             // Bot Response
//             setTimeout(() => {
//                 const responseType = getResponseType(message.toLowerCase());
//                 const response = responseMessages[responseType];
//                 addMessage('bot', response);
//             }, 1000);
//         }
//     };

//     function addMessage(sender, message) {
//         const div = document.createElement('div');
//         div.className = `chat-message ${sender}`;
        
//         const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
//         div.innerHTML = `
//             <span class="message-time">${time}</span>
//             <div class="message-content">${message}</div>
//         `;
        
//         chatMessages.appendChild(div);
//         chatWindow.scrollTop = chatWindow.scrollHeight;
//     }

//     function getResponseType(message) {
//         for (const [type, keywords] of Object.entries(responses)) {
//             if (keywords.some(keyword => message.includes(keyword))) {
//                 return type;
//             }
//         }
//         return 'default';
//     }

//     // Close on outside click
//     document.addEventListener('click', (e) => {
//         if (!chatWindow.contains(e.target) && !chatBtn.contains(e.target)) {
//             chatWindow.style.display = 'none';
//         }
//     });
// });