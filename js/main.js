// ====================================================
// main.js — Main Interactivity Script
// Scroll animations, smooth scrolling, navbar behavior
// ====================================================

document.addEventListener("DOMContentLoaded", () => {
    // ---- Scroll-triggered fade-in animations ----
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15,
    };

    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-visible");
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        animateOnScroll.observe(el);
    });

    // ---- Smooth scrolling for anchor links ----
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navbarHeight =
                    document.querySelector(".navbar")?.offsetHeight || 0;
                const targetPosition =
                    target.getBoundingClientRect().top + window.scrollY - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                });

                // Collapse mobile menu if open
                const navCollapse = document.querySelector(".navbar-collapse");
                if (navCollapse?.classList.contains("show")) {
                    const bsCollapse =
                        bootstrap.Collapse.getInstance(navCollapse) ||
                        new bootstrap.Collapse(navCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // ---- Navbar background on scroll ----
    const navbar = document.querySelector(".navbar");
    const handleNavbarScroll = () => {
        if (window.scrollY > 50) {
            navbar?.classList.add("navbar-scrolled");
        } else {
            navbar?.classList.remove("navbar-scrolled");
        }
    };
    window.addEventListener("scroll", handleNavbarScroll);
    handleNavbarScroll(); // Initial check

    // ---- Counter animation for stats ----
    const counters = document.querySelectorAll(".stat-number");
    const counterObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = el.getAttribute("data-count");
                    const num = parseInt(target);
                    if (isNaN(num)) return;

                    // Save the localized final text to restore at the end
                    const finalText = el.textContent;

                    let current = 0;
                    const increment = Math.ceil(num / 60);
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= num) {
                            current = num;
                            clearInterval(timer);
                            el.textContent = finalText;
                            return;
                        }
                        el.textContent = current + (target.includes("+") ? "+" : target.includes("%") ? "%" : "");
                    }, 30);

                    counterObserver.unobserve(el);
                }
            });
        },
        { threshold: 0.5 }
    );

    counters.forEach((c) => counterObserver.observe(c));

    // ---- Parallax effect on hero ----
    const hero = document.querySelector(".hero-section");
    if (hero) {
        window.addEventListener("scroll", () => {
            const scrolled = window.scrollY;
            hero.style.backgroundPositionY = `${scrolled * 0.4}px`;
        });
    }

    // ---- Active nav link highlight on scroll ----
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    const highlightNav = () => {
        const scrollPos = window.scrollY + 100;
        sections.forEach((section) => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    };

    window.addEventListener("scroll", highlightNav);
    highlightNav();
});
