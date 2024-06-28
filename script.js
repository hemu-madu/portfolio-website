document.addEventListener('DOMContentLoaded', function() {
    const projectsSection = document.getElementById('projects');

    // Example project data
    const projects = [
        {
            title: 'Project 1-Blood Bank Management',
            description: 'Developed a web-based application to streamline blood bank operations with key features user, admin access, donor registration, blood donation tracking, and blood request processing activities.\n' +
                         'I Leveraged JSP for dynamic functionalities like creating forms, displaying search results, and updating data.\n' +
                         'Developed webpages including layouts, colors, and headers using HTML and CSS.\n' +
                         'Utilized Servlets to manage back-end logic to handle user interactions and manipulate data.\n' +
                         'Implemented MySQL to store information about blood donors, requests, and user details.'
        },
        {
            title: 'Common Project – Book Management',
            description: 'Develop a web application for Book Management that manages customer accounts.\n' +
                          'Implemented BookServlet as a page controller to handle all requests from the client.\n' +
                          'Developed JSP pages for displaying all data from the databases.\n' +
                          'Utilized BookDAO class while creating, reading, updating, and deleting operations for tables in MySQL.\n' +
                          'Developed related JSP pages for creating new users with the Book form.'
        },
        {
            title: 'Mini-Project 2-Interactive Quiz',
            description: 'MongoDB,Node JS, ExpressJS  from Code Tantra.\n' + 
	                      'Built an “Interactive Quiz” application with series of questions, allowing them to respond directly through the interface, providing immediate feedback.\n' +
	                      'Created the virtual design using CSS, while handling user interactions using JavaScript frameworks.\n' +
	                       'Utilized Node.JS for processing user requests. '
        },

    ];

    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectsSection.appendChild(card);
    });
});
