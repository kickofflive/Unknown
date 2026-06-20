// Schedule mapped contextually for Today and the Next 2 Days in Indian Standard Time (IST)
// Sensitive streaming URLs are obfuscated in Base64 format to prevent inspect scraping.

const now = new Date();

const todayStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
const tomorrowDate = new Date(now.getTime() + 24 * 60 * 60 * 1000);
const tomorrowStr = tomorrowDate.getFullYear() + '-' + String(tomorrowDate.getMonth() + 1).padStart(2, '0') + '-' + String(tomorrowDate.getDate()).padStart(2, '0');

// Helper to get correct country flag URL (handling special regions like Scotland)
function getFlagUrl(isoCode) {
    if (!isoCode) return "";
    const code = isoCode.trim().toUpperCase();
    if (code === "GB-SCT") {
        return "https://flagcdn.com/w64/gb-sct.png";
    }
    return `https://flagsapi.com/${code}/flat/64.png`;
}

// Dynamically generated fixtures to keep the app fresh and automatically ongoing
const currentFixturesData = [
    {
        id: 206,
        home: "Netherlands", homeIso: "NL",
        away: "Sweden", awayIso: "SE",
        info: "Group F",
        time: "Today 10:30 PM IST",
        kickoff: `${todayStr}T22:30:00+05:30`,
        streamLink: "aHR0cHM6Ly9leHRyZW1lc3BvcnRzdHYub25saW5lL3N0cmVhbS9leHRyZW1lc3BvcnRzdHYtb25saW5lLW5ldGhlcmxhbmRzLXZzLXN3ZWRlbi0xMTA1NjQ5MjU2LTgzMzQxOA=="
    },
    {
        id: 207,
        home: "Germany", homeIso: "DE",
        away: "Ivory Coast", awayIso: "CI",
        info: "Group E",
        time: "Tomorrow 01:30 AM IST",
        kickoff: `${tomorrowStr}T01:30:00+05:30`,
        streamLink: "I2g="
    },
    {
        id: 208,
        home: "Ecuador", homeIso: "EC",
        away: "Curaçao", awayIso: "CW",
        info: "Group E",
        time: "Tomorrow 05:30 AM IST",
        kickoff: `${tomorrowStr}T05:30:00+05:30`,
        streamLink: "I2g="
    },
    {
        id: 209,
        home: "Tunisia", homeIso: "TN",
        away: "Japan", awayIso: "JP",
        info: "Group F",
        time: "Tomorrow 09:30 AM IST",
        kickoff: `${tomorrowStr}T09:30:00+05:30`,
        streamLink: "I2g="
    },
    {
        id: 210,
        home: "Spain", homeIso: "ES",
        away: "Saudi Arabia", awayIso: "SA",
        info: "Group H",
        time: "Tomorrow 09:30 PM IST",
        kickoff: `${tomorrowStr}T21:30:00+05:30`,
        streamLink: "I2g="
    }
];

// F1 Teams List
const f1Teams = [
    "Oracle Red Bull Racing",
    "Scuderia Ferrari HP",
    "Mercedes-AMG Petronas F1 Team",
    "McLaren Formula 1 Team",
    "Aston Martin Aramco F1 Team",
    "BWT Alpine F1 Team",
    "Williams Racing",
    "Stake F1 Team Kick Sauber",
    "MoneyGram Haas F1 Team",
    "Visa Cash App RB F1 Team"
];

// Formula 1 2026 Calendar (all races in IST)
const f1RacesData = [
    { id: 1001, gp: "Australian GP", country: "Australia", countryIso: "AU", circuit: "Albert Park Circuit", date: "8 March 2026", time: "11:30 AM IST", kickoff: "2026-03-08T11:30:00+05:30", teams: f1Teams, streamLink: "aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQ==" },
    { id: 1002, gp: "Chinese GP", country: "China", countryIso: "CN", circuit: "Shanghai International Circuit", date: "15 March 2026", time: "12:30 PM IST", kickoff: "2026-03-15T12:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1003, gp: "Japanese GP", country: "Japan", countryIso: "JP", circuit: "Suzuka International Racing Course", date: "29 March 2026", time: "10:30 AM IST", kickoff: "2026-03-29T10:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1004, gp: "Bahrain GP", country: "Bahrain", countryIso: "BH", circuit: "Bahrain International Circuit", date: "12 April 2026", time: "8:30 PM IST", kickoff: "2026-04-12T20:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1005, gp: "Saudi Arabian GP", country: "Saudi Arabia", countryIso: "SA", circuit: "Jeddah Corniche Circuit", date: "19 April 2026", time: "10:30 PM IST", kickoff: "2026-04-19T22:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1006, gp: "Miami GP", country: "USA", countryIso: "US", circuit: "Miami International Autodrome", date: "4 May 2026", time: "1:30 AM IST", kickoff: "2026-05-04T01:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1007, gp: "Emilia Romagna GP", country: "Italy", countryIso: "IT", circuit: "Imola Circuit", date: "17 May 2026", time: "6:30 PM IST", kickoff: "2026-05-17T18:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1008, gp: "Monaco GP", country: "Monaco", countryIso: "MC", circuit: "Circuit de Monaco", date: "24 May 2026", time: "6:30 PM IST", kickoff: "2026-05-24T18:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1009, gp: "Spanish GP", country: "Spain", countryIso: "ES", circuit: "Circuit de Barcelona-Catalunya", date: "31 May 2026", time: "6:30 PM IST", kickoff: "2026-05-31T18:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1010, gp: "Canadian GP", country: "Canada", countryIso: "CA", circuit: "Circuit Gilles Villeneuve", date: "14 June 2026", time: "11:30 PM IST", kickoff: "2026-06-14T23:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1011, gp: "Austrian GP", country: "Austria", countryIso: "AT", circuit: "Red Bull Ring", date: "28 June 2026", time: "6:30 PM IST", kickoff: "2026-06-28T18:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1012, gp: "British GP", country: "United Kingdom", countryIso: "GB", circuit: "Silverstone Circuit", date: "5 July 2026", time: "7:30 PM IST", kickoff: "2026-07-05T19:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1013, gp: "Hungarian GP", country: "Hungary", countryIso: "HU", circuit: "Hungaroring", date: "19 July 2026", time: "6:30 PM IST", kickoff: "2026-07-19T18:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1014, gp: "Belgian GP", country: "Belgium", countryIso: "BE", circuit: "Circuit de Spa-Francorchamps", date: "26 July 2026", time: "6:30 PM IST", kickoff: "2026-07-26T18:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1015, gp: "Dutch GP", country: "Netherlands", countryIso: "NL", circuit: "Circuit Zandvoort", date: "30 August 2026", time: "6:30 PM IST", kickoff: "2026-08-30T18:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1016, gp: "Italian GP", country: "Italy", countryIso: "IT", circuit: "Monza Circuit", date: "6 September 2026", time: "6:30 PM IST", kickoff: "2026-09-06T18:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1017, gp: "Azerbaijan GP", country: "Azerbaijan", countryIso: "AZ", circuit: "Baku City Circuit", date: "20 September 2026", time: "4:30 PM IST", kickoff: "2026-09-20T16:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1018, gp: "Singapore GP", country: "Singapore", countryIso: "SG", circuit: "Marina Bay Street Circuit", date: "4 October 2026", time: "5:30 PM IST", kickoff: "2026-10-04T17:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1019, gp: "United States GP", country: "USA", countryIso: "US", circuit: "Circuit of the Americas", date: "19 October 2026", time: "12:30 AM IST", kickoff: "2026-10-19T00:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1020, gp: "Mexico City GP", country: "Mexico", countryIso: "MX", circuit: "Autódromo Hermanos Rodríguez", date: "26 October 2026", time: "1:30 AM IST", kickoff: "2026-10-26T01:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1021, gp: "São Paulo GP", country: "Brazil", countryIso: "BR", circuit: "Autódromo José Carlos Pace", date: "8 November 2026", time: "10:30 PM IST", kickoff: "2026-11-08T22:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1022, gp: "Las Vegas GP", country: "USA", countryIso: "US", circuit: "Las Vegas Strip Circuit", date: "22 November 2026", time: "11:30 AM IST", kickoff: "2026-11-22T11:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1023, gp: "Qatar GP", country: "Qatar", countryIso: "QA", circuit: "Lusail International Circuit", date: "29 November 2026", time: "10:30 PM IST", kickoff: "2026-11-29T22:30:00+05:30", teams: f1Teams, streamLink: "I2g=" },
    { id: 1024, gp: "Abu Dhabi GP", country: "UAE", countryIso: "AE", circuit: "Yas Marina Circuit", date: "6 December 2026", time: "6:30 PM IST", kickoff: "2026-12-06T18:30:00+05:30", teams: f1Teams, streamLink: "I2g=" }
];

// Helper to safely decode obfuscated streaming links
function getStreamLink(encoded) {
    if (!encoded || encoded === "#" || encoded === "I2g=") return "#";
    try {
        return atob(encoded);
    } catch (e) {
        return encoded;
    }
}

// Helper to compute match status dynamically in real-time
function getMatchStatus(match) {
    const kickoffDate = new Date(match.kickoff);
    const diff = new Date() - kickoffDate; // positive if kickoff is in the past

    // If kickoff has started, and it's less than 2 hours (7200000 ms) since kickoff
    if (diff >= 0 && diff < 2 * 60 * 60 * 1000) {
        return "LIVE";
    } else if (diff >= 2 * 60 * 60 * 1000) {
        return "COMPLETED";
    } else {
        return "UPCOMING";
    }
}

// Helper for F1 Status
function getF1Status(race) {
    const kickoffDate = new Date(race.kickoff);
    const curTime = new Date();
    const diff = curTime - kickoffDate; // positive if kickoff is in the past

    // F1 races usually last around 2 hours
    if (diff >= 0 && diff < 2 * 60 * 60 * 1000) {
        return "LIVE";
    } else if (diff >= 2 * 60 * 60 * 1000) {
        return "COMPLETED";
    } else {
        return "UPCOMING";
    }
}

let currentFixturesStates = {};
let f1RacesStates = {};

document.addEventListener("DOMContentLoaded", () => {
    // Only execute homepage rendering if the target elements exist
    if (document.getElementById("live-root")) {
        renderMatchCards();
        renderF1Cards();
        startCountdownTimers();
        startLiveSimulation();
    }
    // Only execute accordion rendering if FAQ is present
    if (document.querySelector(".faq-question")) {
        initFaqAccordion();
    }
    // Sports tab switcher mechanism
    const tabFootball = document.getElementById("tab-football");
    const tabF1 = document.getElementById("tab-f1");
    const footballContent = document.getElementById("football-content");
    const f1Content = document.getElementById("f1-content");

    if (tabFootball && tabF1) {
        tabFootball.addEventListener("click", () => {
            tabFootball.classList.add("active");
            tabF1.classList.remove("active");
            footballContent.classList.remove("hidden-content");
            f1Content.classList.add("hidden-content");
        });

        tabF1.addEventListener("click", () => {
            tabF1.classList.add("active");
            tabFootball.classList.remove("active");
            footballContent.classList.add("hidden-content");
            f1Content.classList.remove("hidden-content");
        });
    }
});

function renderMatchCards() {
    const liveRoot = document.getElementById("live-root");
    const scheduleRoot = document.getElementById("schedule-root");

    if (!liveRoot || !scheduleRoot) return;

    let liveHtml = "";
    let scheduleHtml = "";

    currentFixturesData.forEach(match => {
        const status = getMatchStatus(match);
        currentFixturesStates[match.id] = status; // Record state

        if (status === "COMPLETED") {
            return; // Hide completed matches
        }

        const isLive = status === "LIVE";

        const cardLayout = `
            <div class="card">
                <div>
                    <div class="card-meta">
                        <span>${match.info}</span>
                        <span class="tag ${isLive ? 'live' : 'date'}">${isLive ? 'LIVE' : match.time}</span>
                    </div>
                    <div class="team-container">
                        <div class="team-line">
                            <div class="team-details">
                                <img class="flag-img" src="${getFlagUrl(match.homeIso)}" alt="Flag" loading="lazy" onerror="this.src='https://placehold.co/28x18?text=${match.homeIso}'">
                                <span class="team-name">${match.home}</span>
                            </div>
                        </div>
                        <div class="team-line">
                            <div class="team-details">
                                <img class="flag-img" src="${getFlagUrl(match.awayIso)}" alt="Flag" loading="lazy" onerror="this.src='https://placehold.co/28x18?text=${match.awayIso}'">
                                <span class="team-name">${match.away}</span>
                            </div>
                        </div>
                    </div>
                </div>
                ${isLive ? `
                    <a href="watch.html?id=${match.id}" class="btn" target="_blank">
                        <i class="fa-solid fa-play"></i> Watch Live Stream
                    </a>
                ` : `
                    <div class="badge-upcoming" data-kickoff="${match.kickoff}">
                        <i class="fa-regular fa-clock"></i> Loading Countdown...
                    </div>
                `}
            </div>
        `;

        if (isLive) liveHtml += cardLayout;
        else scheduleHtml += cardLayout;
    });

    liveRoot.innerHTML = liveHtml || `<p style="color: var(--text-dim); font-size: 14px; grid-column: 1/-1; text-align: center; padding: 24px 0;">No matches are currently live.</p>`;
    scheduleRoot.innerHTML = scheduleHtml;
}

function renderF1Cards() {
    const liveRoot = document.getElementById("f1-live-root");
    const scheduleRoot = document.getElementById("f1-schedule-root");

    if (!liveRoot || !scheduleRoot) return;

    let liveHtml = "";
    let scheduleHtml = "";

    f1RacesData.forEach(race => {
        const status = getF1Status(race);
        f1RacesStates[race.id] = status;

        const isLive = status === "LIVE";
        const isCompleted = status === "COMPLETED";
        const teamsList = race.teams.map(t => t.replace(" Formula 1 Team", "").replace(" F1 Team", "").replace(" Racing", "")).join(", ");

        const cardLayout = `
            <div class="card f1-card ${isCompleted ? 'completed-card' : ''}">
                <div>
                    <div class="card-meta">
                        <span>F1 2026 • Round ${race.id - 1000}</span>
                        <span class="tag ${isLive ? 'live' : (isCompleted ? 'completed' : 'date')}">${isLive ? 'LIVE' : (isCompleted ? 'COMPLETED' : race.time)}</span>
                    </div>
                    <div class="team-container" style="margin-top: 10px;">
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                            <img class="flag-img" src="https://flagsapi.com/${race.countryIso}/flat/64.png" alt="${race.country} flag" loading="lazy" onerror="this.src='https://placehold.co/32x24?text=${race.countryIso}'">
                            <span class="team-name" style="font-size: 16px; font-weight: 700; color: var(--text-light);">${race.gp}</span>
                        </div>
                        <div style="font-size: 12px; color: var(--text-dim); line-height: 1.45; margin-top: 8px;">
                            <strong>Venue:</strong> ${race.circuit}, ${race.country}<br>
                            <strong>Date:</strong> ${race.date}<br>
                            <strong>Teams:</strong> <span style="color: #cbd5e1;">${teamsList}</span>
                        </div>
                    </div>
                </div>
                ${isLive ? `
                    <a href="watch.html?id=${race.id}" class="btn" target="_blank" style="background: linear-gradient(135deg, var(--accent-red), #b91c1c); color: white; border-color: transparent; box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);">
                        <i class="fa-solid fa-play"></i> Watch Live Stream
                    </a>
                ` : (isCompleted ? `
                    <div class="badge-completed" style="font-size: 12px; color: var(--text-dim); padding: 8px 0; border-top: 1px solid var(--border); margin-top: 12px; display: flex; align-items: center; gap: 6px;">
                        <i class="fa-solid fa-circle-check" style="color: var(--accent-green);"></i> Race Session Completed
                    </div>
                ` : `
                    <div class="badge-upcoming" data-f1-kickoff="${race.kickoff}">
                        <i class="fa-regular fa-clock"></i> Loading Countdown...
                    </div>
                `)}
            </div>
        `;

        if (isLive) liveHtml += cardLayout;
        else scheduleHtml += cardLayout;
    });

    liveRoot.innerHTML = liveHtml || `<p style="color: var(--text-dim); font-size: 14px; grid-column: 1/-1; text-align: center; padding: 24px 0;">No Formula 1 sessions are currently live.</p>`;
    scheduleRoot.innerHTML = scheduleHtml;
}

// Live Countdown Timers for Upcoming Matches and Races
function startCountdownTimers() {
    updateTimers();
    setInterval(updateTimers, 1000);
}

function updateTimers() {
    const curTime = new Date();
    let needsReRender = false;

    // Check if any match transitioned status
    currentFixturesData.forEach(match => {
        const currentStatus = getMatchStatus(match);
        if (currentFixturesStates[match.id] !== currentStatus) {
            needsReRender = true;
        }
    });

    // Check F1 status transitions
    f1RacesData.forEach(race => {
        const currentStatus = getF1Status(race);
        if (f1RacesStates[race.id] !== currentStatus) {
            needsReRender = true;
        }
    });

    if (needsReRender) {
        renderMatchCards();
        renderF1Cards();
        return; 
    }

    const countdownElements = document.querySelectorAll("[data-kickoff]");
    countdownElements.forEach(el => {
        const kickoffStr = el.getAttribute("data-kickoff");
        if (!kickoffStr || kickoffStr === "undefined" || kickoffStr === "#") {
            el.innerHTML = `<i class="fa-regular fa-clock"></i> Upcoming`;
            return;
        }

        const kickoffDate = new Date(kickoffStr);
        const diff = kickoffDate - curTime;

        if (diff <= 0) {
            el.innerHTML = `<span class="live-dot" style="width: 8px; height: 8px; margin-right: 4px;"></span> Kickoff Time!`;
            el.style.color = "var(--accent-green)";
            el.style.borderColor = "rgba(16, 185, 129, 0.3)";
            el.style.backgroundColor = "rgba(16, 185, 129, 0.05)";
        } else {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((diff % (1000 * 60)) / 1000);

            let countdownText = "";
            if (days > 0) {
                countdownText += `${days}d ${hours}h `;
            } else {
                if (hours > 0) countdownText += `${hours}h `;
                countdownText += `${mins}m ${secs}s`;
            }

            el.innerHTML = `<i class="fa-regular fa-clock"></i> Starts in ${countdownText}`;
        }
    });

    const f1CountdownElements = document.querySelectorAll("[data-f1-kickoff]");
    f1CountdownElements.forEach(el => {
        const kickoffStr = el.getAttribute("data-f1-kickoff");
        if (!kickoffStr || kickoffStr === "undefined" || kickoffStr === "#") {
            el.innerHTML = `<i class="fa-regular fa-clock"></i> Upcoming`;
            return;
        }

        const kickoffDate = new Date(kickoffStr);
        const diff = kickoffDate - curTime;

        if (diff <= 0) {
            el.innerHTML = `<span class="live-dot" style="width: 8px; height: 8px; margin-right: 4px; background-color: var(--accent-red);"></span> Session Started!`;
            el.style.color = "var(--accent-red)";
            el.style.borderColor = "rgba(239, 68, 68, 0.3)";
            el.style.backgroundColor = "rgba(239, 68, 68, 0.05)";
        } else {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((diff % (1000 * 60)) / 1000);

            let countdownText = "";
            if (days > 0) {
                countdownText += `${days} days ${hours}h `;
            } else {
                if (hours > 0) countdownText += `${hours}h `;
                countdownText += `${mins}m ${secs}s`;
            }

            el.innerHTML = `<i class="fa-regular fa-clock"></i> Starts in ${countdownText}`;
        }
    });
}

// Dynamic score updater simulation
function startLiveSimulation() {
    // Score simulation removed as the score system is removed completely
}

// FAQ Accordion Toggle Mechanics
function initFaqAccordion() {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(q => {
        q.addEventListener("click", () => {
            const answer = q.nextElementSibling;
            const icon = q.querySelector("i");

            if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {
                answer.style.maxHeight = "0px";
                icon.style.transform = "rotate(0deg)";
            } else {
                // Collapse alternative panels
                document.querySelectorAll(".faq-answer").forEach(a => a.style.maxHeight = "0px");
                document.querySelectorAll(".faq-question i").forEach(i => i.style.transform = "rotate(0deg)");

                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.style.transform = "rotate(180deg)";
            }
        });
    });
}
