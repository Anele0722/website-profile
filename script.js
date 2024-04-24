document.addEventListener('DOMContentLoaded', function () {
    // Defining personal information
    const personalInfo = {
        name: 'Anele',
        surname: 'Twala',
        bio: 'An aspiring Blockchain Developer, driven by curiosity, who finds immense satisfaction in the process of creating something tangible from abstract ideas through software development. The ability to solve complex problems and innovate in a constantly evolving field excites me. As an ambassador for the XRP Ledger, I am inspired by the potential of blockchain technology to revolutionize industries and empower individuals. Working on projects like the Digital Identifier web app fueled my passion for creating innovative solutions that address real-world challenges. Similarly, my role as a Technical Director(Pipeline Developer) exposed me to the transformative power of technology in the entertainment industry. Developing plugins in Blender and creating a pipeline management system highlighted the importance of streamlining workflows and leveraging automation to enhance productivity and creativity.',
        location: 'Johannesburg, Gauteng',
        socialMedia: {
            twitter: 'https://twitter.com/AneleShayne',
            linkedin: 'https://www.linkedin.com/in/aneletwala',
            github: 'https://github.com/Anele0722',
        },
    };

    // Function to render personal information
    function renderPersonalInfo() {
        document.getElementById('name').textContent = personalInfo.name;
        document.getElementById('surname').textContent = personalInfo.surname;
        document.getElementById('bio').textContent = personalInfo.bio;
        document.getElementById('location').textContent = personalInfo.location;
        // Render social media links
        const socialMediaLinks = document.getElementById('social-media-links');
        for (const [platform, link] of Object.entries(personalInfo.socialMedia)) {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = link;
            anchor.textContent = platform;
            listItem.appendChild(anchor);
            socialMediaLinks.appendChild(listItem);
        }
    }

    // Function to handle form submission
    function handleFormSubmission(event) {
        event.preventDefault();
        // Fetch Formspree API URL
        const formAction = 'https:/formspree.io/f/mpzvkbzk/ayneetwala@gmail.com'; // Replace with Formspree email
        const form = event.target;
        const formData = new FormData(form);
        fetch(formAction, {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                alert('Message sent successfully!');
                form.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while sending the message. Please try again later.');
            });
    }

    // Call functions when DOM content is loaded
    renderPersonalInfo();

    // Adding event listener for form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleFormSubmission);
});
