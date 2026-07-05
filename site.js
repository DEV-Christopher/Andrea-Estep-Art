// ANDREA ESTEP — shared behavior for index.html and collection.html.
// Every block guards on element existence so both pages can use this file.

// Venice local time in the header, with a blinking timestamp colon
(function () {
    const el = document.getElementById('venice-time');
    if (!el) return;
    const fmt = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric', minute: '2-digit', timeZone: 'America/Los_Angeles'
    });
    const tick = () => {
        const parts = fmt.formatToParts(new Date());
        const get = (type) => (parts.find((p) => p.type === type) || {}).value || '';
        el.innerHTML = '· ' + get('hour') + '<span class="tick">:</span>' +
            get('minute') + ' ' + get('dayPeriod');
    };
    tick();
    setInterval(tick, 30000);
})();

// Venice current temperature (open-meteo, no API key; silent if unreachable)
(function () {
    const el = document.getElementById('venice-temp');
    if (!el) return;
    fetch('https://api.open-meteo.com/v1/forecast?latitude=33.985&longitude=-118.469&current=temperature_2m&temperature_unit=fahrenheit')
        .then((r) => r.json())
        .then((d) => {
            const t = Math.round(d.current.temperature_2m);
            if (!isNaN(t)) el.textContent = '· ' + t + '°F';
        })
        .catch(() => {});
})();

// Header hairline on scroll
(function () {
    const header = document.getElementById('site-header');
    if (!header) return;
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();

// Scroll reveals
(function () {
    const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
})();

// Contact prefill: on-page message field if present, otherwise stash the
// inquiry so the contact page can pick it up after navigation.
const messageField = document.getElementById('message');

(function () {
    if (!messageField) return;
    const stored = sessionStorage.getItem('inquiry');
    if (stored) {
        messageField.value = stored;
        sessionStorage.removeItem('inquiry');
    }
})();

function setInquiry(text) {
    if (!text) return;
    if (messageField) messageField.value = text;
    else sessionStorage.setItem('inquiry', text);
}

// Lightbox
(function () {
    const box = document.getElementById('lightbox');
    if (!box) return;
    const media = document.getElementById('lightbox-media');
    const title = document.getElementById('lightbox-title');
    const meta = document.getElementById('lightbox-meta');
    const price = document.getElementById('lightbox-price');
    const blurb = document.getElementById('lightbox-blurb');
    const inquire = document.getElementById('lightbox-inquire');

    const close = () => {
        box.classList.remove('open');
        document.body.style.overflow = '';
    };

    document.querySelectorAll('.work').forEach((work) => {
        work.addEventListener('click', (ev) => {
            ev.preventDefault();
            const collected = work.dataset.status === 'collected';
            const collector = work.dataset.collector;
            media.innerHTML = work.querySelector('.work-media').innerHTML;
            title.textContent = work.dataset.title;
            meta.textContent = work.dataset.meta;
            price.textContent = collected
                ? 'Collected' + (collector ? ' by ' + collector : '')
                : work.dataset.price;
            blurb.textContent = work.dataset.blurb;
            inquire.dataset.inquiry = collected
                ? "I love '" + work.dataset.title + "'. Is there similar work available or in progress?"
                : "I'm interested in '" + work.dataset.title + "' (" + work.dataset.price + "). Is it still available?";
            box.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    });

    inquire.addEventListener('click', () => {
        setInquiry(inquire.dataset.inquiry);
        close();
    });

    document.getElementById('lightbox-close').addEventListener('click', close);
    box.addEventListener('click', (e) => { if (e.target === box) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();

// Prefill from any element with data-inquiry (e.g. "Request a viewing")
document.querySelectorAll('[data-inquiry]').forEach((el) => {
    if (el.id === 'lightbox-inquire') return;
    el.addEventListener('click', () => setInquiry(el.dataset.inquiry));
});
