document.addEventListener("DOMContentLoaded", function() {
    const outputElement = document.getElementById("output");
    const commandInput = document.getElementById("commandInput");
    const terminalBody = document.getElementById("terminalBody");
    let promptTimeout;
    let promptShown = false;
  
    const sections = {
        about: `
          <pre><b><h2> 🤖 About SecDJ:</h2></b>
Hey there! I'm <b>SecDJ</b>, also known as <b>Dwij Chandnani😅</b>, your go-to cybersecurity friend !!! 👋 &  a second-year BSc Cybersecurity student with a passion for securing the digital world. I'm currently deep diving into web vulnerabilities, with a strong focus on identifying and mitigating threats like XSS (Cross-Site Scripting), SQL injection, and other security flaws that threaten online systems.

With a solid foundation in cybersecurity principles and hands-on experience in ethical hacking, I’m driven to help organizations protect their online presence. I am continuously learning and honing my skills to stay ahead of the evolving cyber threat landscape.

When I'm not studying or working on security projects, you’ll find me exploring the latest trends in digital forensics, network security, and cryptography, and playing some guitar too 🎸. As I progress in my career, I aim to contribute to a more secure and resilient digital ecosystem.
My passion lies in delving deep into <b>identifying vulnerabilities and exploiting them like a pro! 💻</b>
          
I wholeheartedly support hands-on learning, because, let’s be honest, in the cyber world, theoretical knowledge is as useful as a chocolate teapot! 🍫☕️ My guiding belief is simple: <b>'Skills take precedence over knowledge!'</b> It’s all about consistently learning and troubleshooting to master hacking and carve out my path as a cybersecurity expert.</b> 💡           
         
🌟 So let's keep it fun, keep it secure, and always remember: if it's smart, it's vulnerable!
          
🛡️🔐 Happy Hacking, Everyone! 👨‍💻🤖

<div class="social-icons">
        <a href="https://medium.com/@chandnanidwij" target="_blank"><i class="fab fa-medium"></i></a>
        <a href="https://github.com/BlackBoyRed" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://www.youtube.com/@SecDJofficial" target="_blank"><i class="fab fa-youtube"></i></a>
        <a href="https://x.com/Sec_DJ007" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/sec_dj_official/" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/dwij-chandnani-396267265/" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:secdj07@gmail.com"><i class="fas fa-envelope"></i></a>
      </div>
        `,
        
        experience: `<b><h2>👜 Professional Experience:</h2></b>

At this present moment in time, I find myself increasingly predisposed to the pursuit of acquiring and honing a diverse array of new competencies and abilities, and I am simultaneously exhibiting a readiness to engage in professional opportunities, as I am actively seeking out internships that will facilitate my growth and development in this regard.

Apart from professional work experiences, I have build (tried to build 😁)some tools myself (That have been listed in my github profile) and also have hands on experience on various practical labs and tools.

<div class="social-icons">
        <a href="https://medium.com/@chandnanidwij" target="_blank"><i class="fab fa-medium"></i></a>
        <a href="https://github.com/BlackBoyRed" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://www.youtube.com/@SecDJofficial" target="_blank"><i class="fab fa-youtube"></i></a>
        <a href="https://x.com/Sec_DJ007" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/sec_dj_official/" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/dwij-chandnani-396267265/" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:secdj07@gmail.com"><i class="fas fa-envelope"></i></a>
      </div>
    
    `,


        certifications: `
        <pre><b><h2>📚 My Academic and Certification Journey:</h2></b>

        I have successfully completed my secondary education and am presently engaged in the pursuit of a Bachelor’s degree at Karnavati University, Gandhinagar.

        In addition to my formal education, I have undertaken and successfully completed a variety of professional certifications, which include, but are not limited to, the Google Cybersecurity certification, as well as the Certificate for Techacker Ethical Hacker, awarded by the  Bitten Tech, both of which have significantly enhanced my knowledge and skills in the field of cybersecurity.

        At this moment, I am diligently preparing for the OWASP examination, which is widely regarded as a critical assessment for professionals in the field of web application security, and I anticipate that this endeavor will further contribute to my career development and expertise in this vital area.

  <div class="social-icons">
        <a href="https://medium.com/@chandnanidwij" target="_blank"><i class="fab fa-medium"></i></a>
        <a href="https://github.com/BlackBoyRed" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://www.youtube.com/@SecDJofficial" target="_blank"><i class="fab fa-youtube"></i></a>
        <a href="https://x.com/Sec_DJ007" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/sec_dj_official/" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/dwij-chandnani-396267265/" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:secdj07@gmail.com"><i class="fas fa-envelope"></i></a>
      </div>
      `,

        achievements: `
        <pre><b><h2>🎯 Key Achievements</h2></b>

      <p>I have organized numerous cybersecurity gatherings in my academic institution, and furthermore, have delivered several presentations and practical workshops on cybersecurity by enhancing consciousness among individuals.</p>

  <div class="social-icons">
        <a href="https://medium.com/@chandnanidwij" target="_blank"><i class="fab fa-medium"></i></a>
        <a href="https://github.com/BlackBoyRed" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://www.youtube.com/@SecDJofficial" target="_blank"><i class="fab fa-youtube"></i></a>
        <a href="https://x.com/Sec_DJ007" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/sec_dj_official/" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/dwij-chandnani-396267265/" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:secdj07@gmail.com"><i class="fas fa-envelope"></i></a>
      </div>
      `,
        connect: `<h3 style="text-align: center;"><br>🔗🔒💻 Join SecDJ on social media to dive deeper into the world of cybersecurity. 🛡️🔐🔗<br></h3>
        <div class="social-icons">
    <div class="social-icons">
        <a href="https://medium.com/@chandnanidwij" target="_blank"><i class="fab fa-medium"></i></a>
        <a href="https://github.com/BlackBoyRed" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://www.youtube.com/@SecDJofficial" target="_blank"><i class="fab fa-youtube"></i></a>
        <a href="https://x.com/Sec_DJ007" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/sec_dj_official/" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/dwij-chandnani-396267265/" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:secdj07@gmail.com"><i class="fas fa-envelope"></i></a>
      </div>
      `
      };
  
    terminalBody.addEventListener("click", function() {
      commandInput.focus();
    });
  
    commandInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        clearTimeout(promptTimeout);
        const command = commandInput.value.trim().toLowerCase();
        commandInput.value = "";
        if (!promptShown) {
          promptShown = true;
        }
        processCommand(command);
        resetPromptTimeout();
      }
    });
  
    function processCommand(command) {
      const output = document.createElement("div");
      output.classList.add("command-output");
      output.innerHTML = `<pre>SecDJ@Kernel:~$ ${command}</pre>`;
  
      if (command === "help") {
        output.innerHTML += formatList({
          "cat [section]": "Display the content of the specified section.",
          "clear": "Clear the terminal output.",
          "help": "Show available commands.",
          "ls or dir": "List all available sections.",
          "exit": "Exit the terminal."
        });
      } else if (command === "clear") {
        outputElement.innerHTML = "";
        return;
      } else if (command === "ls" || command === "dir") {
        output.innerHTML += formatList({
          "About": "Information About SecDJ.",
          "Experience": "SecDJ's professional experiences including job roles and responsibilities.",
          "Certifications": "List of SecDJ's certifications with badges and details.",
          "Achievements": "Hall of Fame recognitions, keynote speaker, and other notable achievements of SecDJ.",
          "Connect": "Connect with SecDJ"
        });
      } else if (command.startsWith("cat ")) {
        const section = command.split(" ")[1];
        if (sections[section]) {
          output.innerHTML += `<pre>${sections[section]}</pre>`;
        } else {
          output.innerHTML += `<pre>cat: ${section}: No such file or directory</pre>`;
        }
      } else if (command === "exit") {
        outputElement.innerHTML = "";
        output.innerHTML = "<pre>Thank you for visiting!</pre>";
        commandInput.disabled = true;
        return;
      } else {
        output.innerHTML += `<pre>Command not found: ${command}</pre>`;
      }
  
      outputElement.appendChild(output);
      outputElement.scrollTop = outputElement.scrollHeight;
    }
  
    function formatList(commands) {
      let list = "<ul>";
      for (const [command, description] of Object.entries(commands)) {
        list += `<li><strong>${command}</strong> - ${description}</li>`;
      }
      list += "</ul>";
      return list;
    }
  
    function showPromptMessage() {
      if (!promptShown) {
        const message = document.createElement("p");
        message.id = "promptMessage";
        message.innerHTML = 'Welcome to SecDJ Terminal 👨‍💻🤖 !!!! Type <span style="color: red;">"help"</span> to explore the web app!';
        outputElement.appendChild(message);
        outputElement.scrollTop = outputElement.scrollHeight;
      }
    }
  
    function resetPromptTimeout() {
      promptTimeout = setTimeout(showPromptMessage, 5000);
    }
  
    resetPromptTimeout();

   
  });
  