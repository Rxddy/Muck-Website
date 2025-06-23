// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Add wiggle animation keyframes to document
const style = document.createElement('style');
style.textContent = `
@keyframes wiggle {
    0% { transform: translateY(-15px) scale(1.05) rotate(0deg); }
    25% { transform: translateY(-15px) scale(1.05) rotate(1deg); }
    75% { transform: translateY(-15px) scale(1.05) rotate(-1deg); }
    100% { transform: translateY(-15px) scale(1.05) rotate(0deg); }
}
`;
document.head.appendChild(style);

// Enhanced card hover effects with BOUNCE
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.05) rotate(0deg)';
        this.style.animation = 'wiggle 0.5s ease-in-out';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-8px) scale(1) rotate(0.5deg)';
        this.style.animation = 'none';
    });
});

// Timeline item hover effects with EXTRA SPICE
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.borderLeftWidth = '8px';
        this.style.borderLeftColor = '#464655';
        this.style.transform = 'translateX(15px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.borderLeftWidth = '4px';
        this.style.borderLeftColor = '#94958B';
        this.style.transform = 'translateX(10px) scale(1)';
    });
});

// GOOFY background particles effect (new color scheme!)
function createParticle() {
    const particle = document.createElement('div');
    const colors = ['#464655', '#94958B', '#B7B6C1', '#D5CFE1', '#EDDFEF'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.position = 'fixed';
    particle.style.width = Math.random() * 8 + 4 + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = randomColor;
    particle.style.pointerEvents = 'none';
    particle.style.opacity = '0.6';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = '-10px';
    particle.style.zIndex = '1';
    particle.style.boxShadow = `0 0 10px ${randomColor}`;
    
    document.body.appendChild(particle);
    
    const animation = particle.animate([
        { 
            transform: 'translateY(0px) rotate(0deg)', 
            opacity: 0.6 
        },
        { 
            transform: `translateY(${window.innerHeight + 20}px) rotate(720deg)`, 
            opacity: 0 
        }
    ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'ease-out'
    });
    
    animation.onfinish = () => particle.remove();
}

// Create more particles for MAXIMUM CHAOS
setInterval(createParticle, 200);

// Add click sound effect simulation (visual feedback)
document.querySelectorAll('button, .cta-button, .card').forEach(element => {
    element.addEventListener('click', function() {
        // Create a fun visual "pop" effect
        const pop = document.createElement('div');
        pop.textContent = '💥';
        pop.style.position = 'absolute';
        pop.style.fontSize = '2rem';
        pop.style.pointerEvents = 'none';
        pop.style.zIndex = '9999';
        pop.style.left = '50%';
        pop.style.top = '50%';
        pop.style.transform = 'translate(-50%, -50%)';
        
        this.style.position = 'relative';
        this.appendChild(pop);
        
        pop.animate([
            { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
            { transform: 'translate(-50%, -50%) scale(2)', opacity: 0 }
        ], {
            duration: 500,
            easing: 'ease-out'
        }).onfinish = () => pop.remove();
    });
});

// Easter egg: Konami code for ULTIMATE MUCK MODE
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        activateUltimateMuckMode();
        konamiCode = [];
    }
});

function activateUltimateMuckMode() {
    // MAXIMUM CHAOS MODE
    document.body.style.animation = 'rainbow 0.5s infinite';
    
    // Add rainbow animation
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg) saturate(1.5); }
        100% { filter: hue-rotate(360deg) saturate(1.5); }
    }
    `;
    document.head.appendChild(rainbowStyle);
    
    // Show epic message
    const epicMessage = document.createElement('div');
    epicMessage.innerHTML = '🎉 Enhanced Mode Activated 🎉<br>All systems optimized for maximum efficiency';
    epicMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #94958B, #B7B6C1);
        padding: 2rem;
        border-radius: 20px;
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        z-index: 10000;
        border: 5px solid #464655;
        box-shadow: 0 0 50px rgba(148, 149, 139, 0.8);
        animation: bounce 1s ease-in-out infinite;
        color: #464655;
    `;
    
    document.body.appendChild(epicMessage);
    
    setTimeout(() => {
        epicMessage.remove();
        document.body.style.animation = '';
    }, 5000);
}

// Add a colorful progress indicator for reading
function updateProgressBar() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    let progressBar = document.getElementById('progress-bar');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.id = 'progress-bar';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 4px;
            background: linear-gradient(90deg, #464655, #94958B, #B7B6C1, #D5CFE1);
            z-index: 1001;
            transition: width 0.2s ease;
            box-shadow: 0 0 10px rgba(148, 149, 139, 0.5);
        `;
        document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateProgressBar);

// Mobile menu toggle (goofy version)
function createMobileMenu() {
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('nav');
        const navLinks = document.querySelector('.nav-links');
        
        if (!document.querySelector('.mobile-toggle')) {
            const mobileToggle = document.createElement('button');
            mobileToggle.className = 'mobile-toggle';
            mobileToggle.innerHTML = '🍔';
            mobileToggle.style.cssText = `
                display: block;
                background: linear-gradient(45deg, #94958B, #B7B6C1);
                border: 2px solid #464655;
                border-radius: 10px;
                color: #464655;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
                transition: all 0.3s ease;
            `;
            
            mobileToggle.addEventListener('click', () => {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(148, 149, 139, 0.95)';
                navLinks.style.padding = '1rem';
                navLinks.style.borderRadius = '0 0 15px 15px';
                mobileToggle.innerHTML = navLinks.style.display === 'flex' ? '❌' : '🍔';
            });
            
            nav.appendChild(mobileToggle);
        }
    }
}

window.addEventListener('resize', createMobileMenu);
createMobileMenu(); // Run on load

// Add some random encouraging messages that pop up
const encouragingMessages = [
    "Strategy looks solid 👍",
    "Chief Spear advantage confirmed 🗡️",
    "Good positioning for next phase 📍",
    "Resource management on track 📊",
    "Defense preparations ready 🛡️"
];

function showRandomEncouragement() {
    if (Math.random() < 0.1) { // 10% chance every 30 seconds
        const message = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
        const popup = document.createElement('div');
        popup.textContent = message;
        popup.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(45deg, #94958B, #B7B6C1);
            padding: 1rem;
            border-radius: 15px;
            font-weight: bold;
            z-index: 9999;
            border: 2px solid #464655;
            box-shadow: 0 5px 15px rgba(70, 70, 85, 0.3);
            animation: slideInRight 0.5s ease;
            color: #464655;
        `;
        
        document.body.appendChild(popup);
        
        setTimeout(() => {
            popup.style.animation = 'slideOutRight 0.5s ease';
            setTimeout(() => popup.remove(), 500);
        }, 3000);
    }
}

// Add slide animations for encouragement popups
const slideAnimations = document.createElement('style');
slideAnimations.textContent = `
@keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}
@keyframes slideOutRight {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
}
`;
document.head.appendChild(slideAnimations);

// Show random encouragement every 30 seconds
setInterval(showRandomEncouragement, 30000);