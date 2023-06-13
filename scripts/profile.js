document.querySelector('.js-sjsu-button').addEventListener('click', () => {
    displaySJSUExp()
})


document.querySelector('.js-ncr-button').addEventListener('click', () => {
    displayNCRExp()
})


function displaySJSUExp() {
    turnOffPreviousButton()
    document.querySelector('.sjsu-button').classList.add('is-selected')
    let sjsuElement = document.querySelector('.js-work-exp')
    sjsuElement.innerHTML =  `
    <div class="company-title">Teaching Assistant (ISA) - Computer Networks and Data Mining</div>
    <div class="work-duration">Aug 2022 - Present</div>
    <div class="experience-description">
        <ul class="bullets">
        <li><b>Data Mining:</b> Taught the concepts such as classification, clustering, and association rule mining and helped the students in understanding Data Mining tools/software such as Python, SQL.
        </li>
        <li><b>Computer Networks: </b>Gained experience in teaching the concepts like network architecture, protocols, and security and helped faculty in preparing the course assignments and quizzes.
        </li>
        <li>Graded assignments and exams, providing constructive feedback and helping students improve their understanding of Networking and Data Mining principles.
        </li>
        </ul>
    </div>`
}

function displayNCRExp() {
    turnOffPreviousButton()
    document.querySelector('.ncr-button').classList.add('is-selected')
    let ncrElement = document.querySelector('.js-work-exp')
    ncrElement.innerHTML = ''
    ncrElement.innerHTML = `<div class="company-title">Software Engineer</div>
                        <div class="work-duration">Oct 2020 - Dec 2021</div>
                        <div class="experience-description">
                        <ul class="bullets">
                            <li>Collaborated with 4 other Engineers and developed a Self-service web application using Django and React which helped the organization in reducing the manual effort by 80%.
                            </li>
                            <li>Worked on the front-end development using HTML, CSS and JavaScript and Python for server-side backend business logic implementation.
                            </li>
                            <li>Delivered user support services via Service Now ticketing system for Atlassian tool stack (Jira, Confluence, Jira Align), Artifactory and WhiteSource and achieved a user satisfaction rate of 98%.
                            </li>
                            <li>Implemented CI/CD workflows using GitHub Actions, reducing deployment time by 75% and improving overall development efficiency.
                            </li>
                            <li>Designed database solutions aligned with business objectives and implemented ETL pipelines, Stored Procedures, triggers, and performance tuning techniques resulting in 35% improvement in system performance and efficiency.
                            </li>
                            </ul>
                        </div>

                        <div class="company-title">Software Engineer Intern</div>
                        <div class="work-duration">Jan 2020 - Sep 2020</div>
                        <div class="experience-description">
                        <ul class="bullets">
                            <li>Collaboratively developed a full stack application using ASP .NET (C#) to implement robust backend server operations and HTML/CSS/JavaScript for interactive and responsive user interface.
                            </li>
                            <li>Utilized JUnit for unit testing, leading to a notable 5-hour per week reduction in testers’ workload.
                            </li>
                            <li>Leveraged Jira for bug tracking, successfully identified and resolved 15-20 bugs, ensuring improved software quality, and reducing potential business impact by 25%.
                            </li>
                            </ul>
                        </div>`
    
}

function turnOffPreviousButton() {
    const previousButton = document.querySelector('.is-selected')
    if (previousButton) {
        previousButton.classList.remove('is-selected')
    }
}
displayNCRExp()