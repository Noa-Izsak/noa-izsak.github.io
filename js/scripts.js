/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully");

    // Add more interactive features here as needed
});

function openGmailWithFallback() {
    // Try to open Gmail in a new tab
    var gmailWindow = window.open("https://mail.google.com/mail/?view=cm&fs=1&to=izsak@post.bgu.ac.il&su=Academic%20Collaboration%20or%20Inquiry", "_blank");

    // Set a fallback to mailto after 20 seconds
    setTimeout(function() {
        if (!gmailWindow || gmailWindow.closed || typeof gmailWindow.closed == 'undefined') {
            // Gmail window was blocked or not opened, fallback to mailto
            window.location.href = "mailto:izsak@post.bgu.ac.il?subject=Academic%20Collaboration%20or%20Inquiry";
        }
    }, 20000); // 20000 milliseconds = 20 seconds
}


function setInitialButtonText() {
    const newsSidebar = document.querySelector('.news-container');
    const newsToggleBtn = document.querySelector('.news-toggle');
    if (window.innerWidth <= 768) {
        newsSidebar.style.display = 'none';
        newsToggleBtn.textContent = 'Show News';
    } else {
        newsSidebar.style.display = 'block';
        newsToggleBtn.textContent = 'Hide News';
    }
}

function toggleNews() {
    const newsSidebar = document.querySelector('.news-container');
    const newsToggleBtn = document.querySelector('.news-toggle');
    if (newsSidebar.style.display === 'block' || newsSidebar.style.display === '') {
        newsSidebar.style.display = 'none';
        newsToggleBtn.textContent = 'Show News';
    } else {
        newsSidebar.style.display = 'block';
        newsToggleBtn.textContent = 'Hide News';
    }
}

window.addEventListener('resize', setInitialButtonText);

const citations = {
    // yourPaperId: {
    //     bibtex: `@inproceedings{yourCitationKey,\n  title={Your Paper Title},\n  author={Your Author Names},\n  booktitle={Proceedings of Your Conference},\n  year={2024}\n}`,
    //     ieee: `Your Author Names, "Your Paper Title," in Proceedings of the Your Conference, 2024.`,
    //     acm: `Your Author Names. 2024. Your Paper Title. In Proceedings of the Your Conference, 2024.`,
    //     apa: `Your Author Names. (2024). Your Paper Title. In Proceedings of the Your Conference.`
    // },
    // // Existing papers
    leopards: {
        bibtex: `@InProceedings{izsak2024learningleopards, \nauthor={Izsak, Noa and Fisman, Dana and Jacobs, Swen}, \ntitle={Learning Broadcast Protocols with LeoParDS}, \nbooktitle={Automated Technology for Verification and Analysis}, \nyear={2025}, \npages={220--234}, \neditor={Akshay, S. and Niemetz, Aina and Sankaranarayanan, Sriram}, \npublisher={Springer Nature Switzerland}, \nisbn={978-3-031-78709-6}\n}`,
        ieee: `N. Izsak, D. Fisman, and S. Jacobs, "Learning Broadcast Protocols with LeoParDS," in Proceedings of the Automated Technology for Verification and Analysis, S. Akshay, A. Niemetz, and S. Sankaranarayanan, Eds. Springer Nature Switzerland, 2025, pp. 220–234. ISBN: 978-3-031-78709-6.`,
        acm: `Izsak, N., Fisman, D., and Jacobs, S. 2025. Learning Broadcast Protocols with LeoParDS. In Proceedings of the Automated Technology for Verification and Analysis,, S. Akshay, A. Niemetz, and S. Sankaranarayanan (Eds.). Springer Nature Switzerland, 220–234. ISBN: 978-3-031-78709-6.`,
        apa: `Izsak, N., Fisman, D., & Jacobs, S. (20245). Learning Broadcast Protocols with LeoParDS. In Proceedings of the Automated Technology for Verification and Analysis  (pp. 220–234). Springer Nature Switzerland. ISBN: 978-3-031-78709-6.`
    },
    aaai2024: {
        bibtex: `@inproceedings{fisman2024learning, \ntitle={Learning Broadcast Protocols}, \nauthor={Fisman, Dana and Izsak, Noa and Jacobs, Swen}, \nbooktitle={Proceedings of the 38th AAAI Conference on Artificial Intelligence}, \nvolume={11}, \npages={12016--12023}, \nyear={2024}\n}`,
        ieee: `D. Fisman, N. Izsak, and S. Jacobs, "Learning Broadcast Protocols," in Proceedings of the 38th AAAI Conference on Artificial Intelligence, vol. 11, 2024, pp. 12016-12023.`,
        acm: `Fisman, D., Izsak, N., and Jacobs, S. 2024. Learning Broadcast Protocols. In Proceedings of the 38th AAAI Conference on Artificial Intelligence, vol. 11, 12016-12023.`,
        apa: `Fisman, D., Izsak, N., & Jacobs, S. (2024). Learning Broadcast Protocols. In Proceedings of the AAAI Conference on Artificial Intelligence, 38(11), 12016-12023.`
    }
};

function showCitation(paperId, style) {
    // Update the citation content
    document.getElementById('citation-content-display').innerText = citations[paperId][style];

    // Remove the active class from all buttons
    const buttons = document.querySelectorAll('.citation-style-bar button');
    buttons.forEach(button => button.classList.remove('active'));

    // Add the active class to the current button
    const activeButton = document.querySelector(`.citation-style-bar button[onclick="showCitation('${paperId}', '${style}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

function showLeoParDSCitation() {
    document.getElementById('citation-container').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    updateCitationStyleBar('leopards');  // Update the citation style bar for LeoParDS
    showCitation('leopards', 'bibtex');  // Default to BibTeX and set it as active
}

function showAAAI2024Citation() {
    document.getElementById('citation-container').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    updateCitationStyleBar('aaai2024');  // Update the citation style bar for AAAI 2024
    showCitation('aaai2024', 'bibtex');  // Default to BibTeX and set it as active
}

function updateCitationStyleBar(paperId) {
    const styleBar = document.querySelector('.citation-style-bar');
    styleBar.innerHTML = `
        <button onclick="showCitation('${paperId}', 'bibtex')" class="active">BibTeX</button>
        <button onclick="showCitation('${paperId}', 'ieee')">IEEE</button>
        <button onclick="showCitation('${paperId}', 'acm')">ACM</button>
        <button onclick="showCitation('${paperId}', 'apa')">APA</button>
    `;
}

function closeCitation() {
    document.getElementById('citation-container').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function copyCitation() {
    const citationText = document.getElementById('citation-content-display').innerText;
    navigator.clipboard.writeText(citationText).then(() => {
        document.getElementById('copy-success-msg').innerText = 'Citation copied to clipboard!';
        setTimeout(function() {
            document.getElementById('copy-success-msg').innerText = '';
        }, 2500);
    }).catch(err => {
        console.error('Failed to copy citation: ', err);
    });
}

// Close the citation pop-ups when clicking outside of them
window.onclick = function(event) {
    const overlay = document.getElementById('overlay');
    if (event.target == overlay) {
        closeCitation();
    }
};