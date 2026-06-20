document.addEventListener("DOMContentLoaded", () => {
    initWatchPage();
});

function initWatchPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const matchId = parseInt(urlParams.get('id'));
    const cardContainer = document.getElementById("match-detail-card");

    if (!matchId || isNaN(matchId)) {
        renderError("No Match ID provided in URL.");
        return;
    }

    // Support finding in both databases
    const match = currentFixturesData.find(f => f.id === matchId) || f1RacesData.find(f => f.id === matchId);

    if (!match) {
        renderError(`Fixture with ID #${matchId} could not be found.`);
        return;
    }

    const isF1 = matchId >= 1000;

    if (isF1) {
        // 1. Dynamic Page Metadata Title for F1
        document.title = `Stream: ${match.gp} - KickOff LIVE`;

        // 2. Set Up status tag
        const status = getF1Status(match);
        const isLive = status === "LIVE";
        const statusHtml = isLive 
            ? `<span class="hero-tag live" style="background-color: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.25); color: var(--accent-red);"><span class="live-dot" style="background-color: var(--accent-red);"></span> LIVE NOW</span>` 
            : `<span class="hero-tag upcoming" id="watch-countdown" data-kickoff="${match.kickoff}"><i class="fa-regular fa-clock"></i> Loading Countdown...</span>`;

        // 3. Set Up Link section below match card
        let linkHtml = "";
        if (isLive) {
            linkHtml = `
                <a href="${getStreamLink(match.streamLink)}" class="watch-live-link" target="_blank" style="background: linear-gradient(135deg, var(--accent-red), #b91c1c); color: white; border-color: transparent; box-shadow: 0 6px 20px rgba(239, 68, 68, 0.3);">
                    <i class="fa-solid fa-circle-play"></i> Watch F1 Live
                </a>
                <p class="watch-disclaimer">Official broadcast simulation. Click the button above to launch the live stream feed. <br><strong style="color: var(--accent-amber);">Please Note:</strong> The watch link may sometimes be activated 5 minutes after the start of the match (e.g. if the match is at 9:30, our links will be activated by 9:35). Thank you for understanding.</p>
            `;
        } else {
            linkHtml = `
                <a href="${getStreamLink(match.streamLink)}" class="watch-upcoming-link" target="_blank">
                    <i class="fa-solid fa-circle-play"></i> Watch Live
                </a>
                <p class="watch-disclaimer">Session begins at <strong>${match.time}</strong>. The streaming server link will connect once the session is active.</p>
            `;
        }

        const teamsList = match.teams.map(t => t.replace(" Formula 1 Team", "").replace(" F1 Team", "").replace(" Racing", "")).join(", ");

        // 4. Render everything to the card
        cardContainer.innerHTML = `
            <div class="hero-status">
                ${statusHtml}
            </div>
            <div class="f1-hero-details" style="text-align: center; margin-bottom: 24px; width: 100%;">
                <img class="hero-flag-img" src="https://flagsapi.com/${match.countryIso}/flat/64.png" alt="${match.country} flag" style="width: 80px; height: 53px; margin: 0 auto 16px auto; border-radius: 6px; box-shadow: 0 4px 15px rgba(0,0,0,0.4);" onerror="this.src='https://placehold.co/80x53?text=${match.countryIso}'">
                <h2 style="font-family: var(--font-heading); font-size: 26px; font-weight: 900; margin-bottom: 6px; color: var(--text-light);">${match.gp}</h2>
                <p style="color: var(--accent-red); font-weight: 700; text-transform: uppercase; font-size: 13px; letter-spacing: 0.8px; margin-bottom: 16px;">${match.circuit}</p>
                <div style="font-size: 13px; color: var(--text-dim); max-width: 450px; margin: 0 auto; line-height: 1.5; border-top: 1px solid var(--border); padding-top: 14px; text-align: left;">
                    <strong>Country:</strong> ${match.country}<br>
                    <strong>Competing Teams:</strong> <span style="color: var(--text-light);">${teamsList}</span>
                </div>
            </div>
            <p class="hero-match-info">F1 2026 World Championship • Round ${match.id - 1000}${!isLive ? ` • ${match.time}` : ''}</p>
            
            <div class="watch-link-wrapper">
                ${linkHtml}
            </div>
        `;

        // 5. Start countdown timer
        if (!isLive) {
            startWatchCountdown();
        }
        return;
    }

    // 1. Dynamic Page Metadata Title for Football
    document.title = `Stream: ${match.home} vs ${match.away} - KickOff LIVE`;

    // 2. Set Up status tag
    const status = getMatchStatus(match);
    const isLive = status === "LIVE";
    const statusHtml = isLive 
        ? `<span class="hero-tag live"><span class="live-dot"></span> LIVE NOW</span>` 
        : `<span class="hero-tag upcoming" id="watch-countdown" data-kickoff="${match.kickoff}"><i class="fa-regular fa-clock"></i> Loading Countdown...</span>`;

    // 3. Set Up Score Center area
    const scoreCenterHtml = `<span class="hero-vs">vs</span>`;

    // 4. Set Up Link section below match card
    let linkHtml = "";
    if (isLive) {
        linkHtml = `
            <a href="${getStreamLink(match.streamLink)}" class="watch-live-link" target="_blank">
                <i class="fa-solid fa-circle-play"></i> Watch Live
            </a>
            <p class="watch-disclaimer">Official broadcast simulation. Click the button above to launch the live stream feed. <br><strong style="color: var(--accent-amber);">Please Note:</strong> The watch link may sometimes be activated 5 minutes after the start of the match (e.g. if the match is at 9:30, our links will be activated by 9:35). Thank you for understanding.</p>
        `;
    } else {
        linkHtml = `
            <a href="${getStreamLink(match.streamLink)}" class="watch-upcoming-link" target="_blank">
                <i class="fa-solid fa-circle-play"></i> Watch Live
            </a>
            <p class="watch-disclaimer">Match begins at <strong>${match.time}</strong>. The streaming server link will connect once the match kickoff is active.</p>
        `;
    }

    // 5. Render everything to the card
    cardContainer.innerHTML = `
        <div class="hero-status">
            ${statusHtml}
        </div>
        <div class="hero-teams-wrap">
            <div class="hero-team">
                <img class="hero-flag-img" src="${getFlagUrl(match.homeIso)}" alt="${match.home} flag" onerror="this.src='https://placehold.co/72x48?text=${match.homeIso}'">
                <span class="hero-team-name">${match.home}</span>
            </div>
            <div class="hero-score-center">
                ${scoreCenterHtml}
            </div>
            <div class="hero-team">
                <img class="hero-flag-img" src="${getFlagUrl(match.awayIso)}" alt="${match.away} flag" onerror="this.src='https://placehold.co/72x48?text=${match.awayIso}'">
                <span class="hero-team-name">${match.away}</span>
            </div>
        </div>
        <p class="hero-match-info">${match.info}${!isLive ? ` • ${match.time}` : ''}</p>
        
        <div class="watch-link-wrapper">
            ${linkHtml}
        </div>
    `;

    // 6. Start watch page countdown timer
    if (!isLive) {
        startWatchCountdown();
    }
}

function startWatchCountdown() {
    const el = document.getElementById("watch-countdown");
    if (!el) return;

    let timerInterval;

    const updateTimer = () => {
        const kickoffStr = el.getAttribute("data-kickoff");
        if (!kickoffStr || kickoffStr === "undefined" || kickoffStr === "#") {
            el.innerHTML = `<i class="fa-regular fa-clock"></i> Upcoming`;
            if (timerInterval) clearInterval(timerInterval);
            return;
        }

        const kickoffDate = new Date(kickoffStr);
        const now = new Date();
        const diff = kickoffDate - now;

        if (diff <= 0) {
            if (timerInterval) clearInterval(timerInterval);
            initWatchPage();
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
    };

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

function renderError(message) {
    const cardContainer = document.getElementById("match-detail-card");
    cardContainer.innerHTML = `
        <div class="hero-status" style="margin-bottom: 16px;">
            <span class="hero-tag upcoming" style="background-color: rgba(239, 68, 68, 0.1); border-color: rgba(239, 68, 68, 0.3); color: var(--accent-red);">
                <i class="fa-solid fa-circle-exclamation"></i> ERROR
            </span>
        </div>
        <h4 style="font-size: 18px; font-weight: 700; margin-bottom: 10px;">Unable to Load Match</h4>
        <p style="color: var(--text-dim); font-size: 14px; margin-bottom: 24px;">${message}</p>
        <a href="index.html" class="watch-live-link" style="max-width: 240px; font-size: 14px; padding: 10px 20px;">
            <i class="fa-solid fa-arrow-left"></i> Return to Schedule
        </a>
    `;
}
