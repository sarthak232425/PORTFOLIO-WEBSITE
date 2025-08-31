// Mobile menu toggle
        document.getElementById('menu-toggle').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                    // Close mobile menu if open
                    document.getElementById('mobile-menu').classList.add('hidden');
                }
            });
        });

        // Project filtering functionality
        document.addEventListener('DOMContentLoaded', function() {
            const tabButtons = document.querySelectorAll('.tab-button');
            const projectItems = document.querySelectorAll('.project-item');
            
            // Function to filter projects
            function filterProjects(category) {
                projectItems.forEach(project => {
                    if (category === 'highlighted') {
                        if (project.classList.contains('highlighted')) {
                            project.classList.add('active');
                        } else {
                            project.classList.remove('active');
                        }
                    } else {
                        if (project.classList.contains(category)) {
                            project.classList.add('active');
                        } else {
                            project.classList.remove('active');
                        }
                    }
                });
            }
            
            // Set initial state to show highlighted projects
            filterProjects('highlighted');
            
            // Add click event listeners to tab buttons
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    button.classList.add('active');
                    
                    const category = button.getAttribute('data-category');
                    filterProjects(category);
                });
            });
        });

        // Create moving circles in background only
        function createMovingCircles() {
    const backgroundContainer = document.getElementById('background-container');
    const circleColors = ['#f4ede7', '#e9ded3', '#d4c9ba', '#e5dccd'];
    const animations = ['float1', 'float2', 'float3']; 

    // Detect screen size
    const isMobile = window.innerWidth < 768; // breakpoint for phone
    const numCircles = isMobile ? 4 : 7; // fewer on phone

    for (let i = 0; i < numCircles; i++) {
        const circle = document.createElement('div');
        circle.classList.add('moving-circle');

        // Bigger on desktop, slightly smaller on phone
        const size = isMobile 
            ? Math.random() * 150 + 80   // 80–200px on phone
            : Math.random() * 250 + 150; // 150–350px on desktop

        const color = circleColors[Math.floor(Math.random() * circleColors.length)];
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = isMobile 
            ? 20 + Math.random() * 5   // 20–30s on phone (a bit faster)
            : 30 + Math.random() * 10;  // 30–50s on desktop
        const animation = animations[Math.floor(Math.random() * animations.length)];

        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.backgroundColor = color;
        circle.style.left = `${left}%`;
        circle.style.top = `${top}%`;
        circle.style.animationDelay = `${delay}s`;
        circle.style.animationDuration = `${duration}s`;
        circle.style.animationName = animation;

        backgroundContainer.appendChild(circle);
    }
}

document.addEventListener('DOMContentLoaded', createMovingCircles);
