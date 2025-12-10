// ==================== DATA ====================
const portfolioItems = [
    { id: 1, title: "Echolocation Mechanic", category: "game development", description: "UE5 visual echolocation system with custom shader effects.", highlighted: true, image: "./assets/images/Portfolio/gifs/echo.gif", link: "https://github.com/KenanAegean/Echolocation-System", tags: ["UE 5", "Gameplay Mechanic"], iconType: "unreal" },
    { id: 3, title: "Echoes Of Stella", category: "game development", description: "Narrative horror game exploring isolation and memory.", highlighted: true, image: "./assets/images/Portfolio/gifs/eos.gif", link: "https://kenanege.itch.io/echoes-of-stella", tags: ["UE 5", "Group Project"], iconType: "unreal" },
    { id: 2, title: "Killwats League", category: "game development", description: "Fast-paced 1v1 sports game with dynamic cameras.", highlighted: true, image: "./assets/images/Portfolio/gifs/kw.gif", link: "https://kenanege.itch.io/killwats-league", tags: ["UE 5", "Group Project"], iconType: "unreal" },
    { id: 4, title: "Dark Descent", category: "game development", description: "Action-roguelite with spell-based combat.", highlighted: true, image: "./assets/images/Portfolio/gifs/dd.gif", link: "https://kenanege.itch.io/dark-descent", tags: ["Unity", "Group Project"], iconType: "unity" },
    { id: 5, title: "In A Bad Mewd", category: "game development", description: "Chaotic destruction platformer as a mischievous cat.", highlighted: true, image: "./assets/images/Portfolio/gifs/mewd.gif", link: "https://kenanege.itch.io/in-a-bad-mewd-webgltest", tags: ["Unity", "Group Project"], iconType: "unity" },
    { id: 7, title: "Swarmbreaker", category: "game development", description: "Arcade survivor game with orbital combat.", highlighted: true, image: "./assets/images/Portfolio/gifs/sboop2.gif", link: "https://kenanege.itch.io/swarmbreaker", tags: ["Unity", "Solo Project"], iconType: "unity" },
    { id: 9, title: "Riziko", category: "game development", description: "Digital board/card game adaptation with roguelike mechanics.", highlighted: true, image: "./assets/images/Portfolio/gifs/riziko.gif", link: "https://kenanaegean.github.io/Riziko_WebGL/", tags: ["Unity", "Solo Project"], iconType: "unity" },
    { id: 21, title: "GamerLog", category: "web application", description: "Django platform for tracking game collections with AI.", highlighted: true, image: "./assets/images/Portfolio/gamerlog.png", link: "#", tags: ["Django"], iconType: "django" },
    { id: 23, title: "Personal Website", category: "web application", description: "JSON-driven portfolio site with automated CI/CD.", highlighted: true, image: "./assets/images/Portfolio/website.png", link: "https://github.com/KenanAegean/KenanAegean.github.io", tags: ["HTML/JS"], iconType: "web" },
    { id: 27, title: "Steam Screenshot Tool", category: "windows application", description: "Python automation for organizing Steam screenshots.", highlighted: false, image: "./assets/images/Portfolio/steam.png", link: "https://github.com/KenanAegean/Steam-Screenshot-Tool", tags: ["Python"], iconType: "python" },
    { id: 14, title: "CRT TV Shader", category: "game development", description: "Custom shader recreating authentic retro CRT monitor visual effects.", highlighted: true, image: "./assets/images/Portfolio/gifs/shader1.gif", link: "https://github.com/KenanAegean/FG-Shader", tags: ["Unity", "Shader"], iconType: "unity" },
    { id: 30, title: "Scientific Calculator", category: "windows application", description: "Functional scientific calculator desktop application in C#.", highlighted: false, image: "./assets/images/Portfolio/calc.png", link: "https://github.com/KenanAegean/Calculator-WindowsForm", tags: ["C#"], iconType: "csharp" },
    { id: 33, title: "Euro 2022 Stadiums", category: "mobile application", description: "Android app with stadium guides and locations for Euro 2022.", highlighted: false, image: "./assets/images/Portfolio/stadium.png", link: "https://github.com/KenanAegean/World-Cup-2022-Stadiums-App-Android-Studio", tags: ["Android"], iconType: "android" }
];

const experience = [
    {
        id: 1, company: "Orion Innovation", url: "https://www.orioninc.com/",
        positions: [
            { title: "Software Engineer", date: "Mar 2023 - Sept 2024", desc: "Resolved critical bugs in Java apps, deployed Docker containers, and built an AI-based NBA match prediction app using Django." },
            { title: "Software Engineer - Intern", date: "Aug 2022 - Oct 2022", desc: "Developed a Java Spring Boot web app for test-environment reservations." }
        ]
    },
    {
        id: 2, company: "BDH - NETAŞ", url: "https://www.bdh.com.tr/",
        positions: [
            { title: "Software Engineer - Intern", date: "Aug 2021 - Sept 2021", desc: "Explored Salesforce Cloud Platform, Apex programming, and CRM solutions." }
        ]
    },
    {
        id: 3, company: "Biltek Design", url: "https://www.biltek.com.tr/",
        positions: [
            { title: "Volunteer Intern", date: "Sept 2018 - Nov 2019", desc: "Learned web development (PHP, MySQL) and assisted in full-stack projects." }
        ]
    }
];

const education = [
    { id: 1, school: "Futuregames Academy", degree: "Game Programming", date: "2024 - Present" },
    { id: 2, school: "University Of Lodz", degree: "Math & CS (Erasmus)", date: "2022" },
    { id: 3, school: "Doğuş University", degree: "Computer Engineering", date: "2018 - 2023" }
];

const gamesShowcase = [
    { id: 1, title: "Swarmbreaker", link: "https://kenanege.itch.io/swarmbreaker", image: "./assets/images/PlayableGames/playable_swoop.png" },
    { id: 2, title: "Killwats League", link: "https://kenanege.itch.io/killwats-league", image: "./assets/images/PlayableGames/playable_kw.png" },
    { id: 3, title: "Echoes Of Stella", link: "https://kenanege.itch.io/echoes-of-stella", image: "./assets/images/PlayableGames/playable_eos4.png" },
    { id: 4, title: "Dark Descent", link: "https://kenanege.itch.io/dark-descent", image: "./assets/images/PlayableGames/playable_ddph2.png" },
    { id: 5, title: "In A Bad Mewd", link: "https://kenanege.itch.io/in-a-bad-mewd-webgltest", image: "./assets/images/PlayableGames/playable_mewd.png" }
];

// ==================== THEMES ====================
const themes = {
    about: { hex: '#00f3ff' },
    games: { hex: '#ff0055' },
    portfolio: { hex: '#bc13fe' },
    experience: { hex: '#ffd700' },
    education: { hex: '#0051ff' }
};

let currentSection = 'about';
let currentFilter = 'all';
let themeColor = themes.about.hex;

// ==================== BACKGROUND ANIMATION ====================
function initBackground() {
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let time = 0;
    
    // Mouse tracking
    const mouse = { x: null, y: null, radius: 250 };
    
    document.addEventListener('mousemove', function(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    
    document.addEventListener('mouseleave', function() {
        mouse.x = null;
        mouse.y = null;
    });

    // Grid settings - MUCH denser
    const dotSpacing = 12;
    let gridDots = [];

    // 3D Shapes - Game and Coding themed (TRUE 3D with depth)
    // Random positions each page load + very slow smooth movement
    const shapes = [
        { 
            type: 'controller', 
            x: 0.1 + Math.random() * 0.25, 
            y: 0.15 + Math.random() * 0.3, 
            scale: 45 + Math.random() * 20, 
            rx: Math.random() * Math.PI, 
            ry: Math.random() * Math.PI, 
            speedX: 0.001 + Math.random() * 0.001, 
            speedY: 0.0012 + Math.random() * 0.001,
            // Movement properties - very slow
            vx: (Math.random() - 0.5) * 0.00003,
            vy: (Math.random() - 0.5) * 0.00002,
            baseX: 0,
            baseY: 0,
            driftAngle: Math.random() * Math.PI * 2,
            driftSpeed: 0.001 + Math.random() * 0.001,
            driftRadius: 0.005 + Math.random() * 0.005
        },
        { 
            type: 'codetag', 
            x: 0.65 + Math.random() * 0.25, 
            y: 0.2 + Math.random() * 0.35, 
            scale: 50 + Math.random() * 20, 
            rx: Math.random() * Math.PI, 
            ry: Math.random() * Math.PI, 
            speedX: -0.0008 - Math.random() * 0.001, 
            speedY: 0.001 + Math.random() * 0.001,
            vx: (Math.random() - 0.5) * 0.00003,
            vy: (Math.random() - 0.5) * 0.00002,
            baseX: 0,
            baseY: 0,
            driftAngle: Math.random() * Math.PI * 2,
            driftSpeed: 0.0008 + Math.random() * 0.001,
            driftRadius: 0.004 + Math.random() * 0.006
        },
        { 
            type: 'cube', 
            x: 0.7 + Math.random() * 0.2, 
            y: 0.6 + Math.random() * 0.25, 
            scale: 35 + Math.random() * 20, 
            rx: Math.random() * Math.PI, 
            ry: Math.random() * Math.PI, 
            speedX: 0.0012 + Math.random() * 0.001, 
            speedY: -0.0008 - Math.random() * 0.001,
            vx: (Math.random() - 0.5) * 0.00004,
            vy: (Math.random() - 0.5) * 0.00003,
            baseX: 0,
            baseY: 0,
            driftAngle: Math.random() * Math.PI * 2,
            driftSpeed: 0.0012 + Math.random() * 0.0008,
            driftRadius: 0.003 + Math.random() * 0.004
        },
        { 
            type: 'terminal', 
            x: 0.1 + Math.random() * 0.2, 
            y: 0.55 + Math.random() * 0.3, 
            scale: 40 + Math.random() * 20, 
            rx: Math.random() * Math.PI, 
            ry: Math.random() * Math.PI, 
            speedX: -0.0007 - Math.random() * 0.0008, 
            speedY: 0.001 + Math.random() * 0.001,
            vx: (Math.random() - 0.5) * 0.00003,
            vy: (Math.random() - 0.5) * 0.00002,
            baseX: 0,
            baseY: 0,
            driftAngle: Math.random() * Math.PI * 2,
            driftSpeed: 0.0007 + Math.random() * 0.0008,
            driftRadius: 0.005 + Math.random() * 0.005
        },
        { 
            type: 'potion', 
            x: 0.4 + Math.random() * 0.2, 
            y: 0.7 + Math.random() * 0.2, 
            scale: 30 + Math.random() * 15, 
            rx: Math.random() * Math.PI, 
            ry: Math.random() * Math.PI, 
            speedX: 0.0015 + Math.random() * 0.001, 
            speedY: -0.0005 - Math.random() * 0.001,
            vx: (Math.random() - 0.5) * 0.00004,
            vy: (Math.random() - 0.5) * 0.00003,
            baseX: 0,
            baseY: 0,
            driftAngle: Math.random() * Math.PI * 2,
            driftSpeed: 0.0009 + Math.random() * 0.001,
            driftRadius: 0.004 + Math.random() * 0.005
        }
    ];
    
    // Initialize base positions
    shapes.forEach(function(shape) {
        shape.baseX = shape.x;
        shape.baseY = shape.y;
    });

    // Game Controller (3D with depth)
    const controllerVerts = [
        // Main body front
        {x:-2, y:-0.5, z:0.3}, {x:-1.5, y:-0.8, z:0.3}, {x:1.5, y:-0.8, z:0.3}, {x:2, y:-0.5, z:0.3},
        {x:2, y:0.3, z:0.3}, {x:1.5, y:0.6, z:0.3}, {x:-1.5, y:0.6, z:0.3}, {x:-2, y:0.3, z:0.3},
        // Main body back
        {x:-2, y:-0.5, z:-0.3}, {x:-1.5, y:-0.8, z:-0.3}, {x:1.5, y:-0.8, z:-0.3}, {x:2, y:-0.5, z:-0.3},
        {x:2, y:0.3, z:-0.3}, {x:1.5, y:0.6, z:-0.3}, {x:-1.5, y:0.6, z:-0.3}, {x:-2, y:0.3, z:-0.3},
        // Left stick base
        {x:-1.2, y:-0.1, z:0.4}, {x:-0.8, y:-0.1, z:0.4}, {x:-0.8, y:0.3, z:0.4}, {x:-1.2, y:0.3, z:0.4},
        // Right buttons
        {x:1, y:0, z:0.4}, {x:1.3, y:-0.2, z:0.4}, {x:1.3, y:0.2, z:0.4}, {x:1, y:0.4, z:0.4},
        // D-pad hint
        {x:-1, y:-0.3, z:0.35}, {x:-1, y:0.1, z:0.35}, {x:-1.2, y:-0.1, z:0.35}, {x:-0.8, y:-0.1, z:0.35}
    ];
    const controllerEdges = [
        // Front face
        [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],
        // Back face
        [8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,8],
        // Connect front to back
        [0,8],[1,9],[2,10],[3,11],[4,12],[5,13],[6,14],[7,15],
        // Left stick
        [16,17],[17,18],[18,19],[19,16],
        // Right buttons
        [20,21],[21,22],[22,23],[23,20],
        // D-pad
        [24,25],[26,27]
    ];

    // Code Tag </> (3D extruded)
    const codetagVerts = [
        // < front
        {x:-1.5, y:0, z:0.2}, {x:-0.5, y:1, z:0.2}, {x:-0.5, y:0.6, z:0.2}, {x:-1.1, y:0, z:0.2}, {x:-0.5, y:-0.6, z:0.2}, {x:-0.5, y:-1, z:0.2},
        // < back
        {x:-1.5, y:0, z:-0.2}, {x:-0.5, y:1, z:-0.2}, {x:-0.5, y:0.6, z:-0.2}, {x:-1.1, y:0, z:-0.2}, {x:-0.5, y:-0.6, z:-0.2}, {x:-0.5, y:-1, z:-0.2},
        // / front
        {x:-0.15, y:1.2, z:0.2}, {x:0.15, y:1.2, z:0.2}, {x:0.15, y:-1.2, z:0.2}, {x:-0.15, y:-1.2, z:0.2},
        // / back
        {x:-0.15, y:1.2, z:-0.2}, {x:0.15, y:1.2, z:-0.2}, {x:0.15, y:-1.2, z:-0.2}, {x:-0.15, y:-1.2, z:-0.2},
        // > front
        {x:1.5, y:0, z:0.2}, {x:0.5, y:1, z:0.2}, {x:0.5, y:0.6, z:0.2}, {x:1.1, y:0, z:0.2}, {x:0.5, y:-0.6, z:0.2}, {x:0.5, y:-1, z:0.2},
        // > back
        {x:1.5, y:0, z:-0.2}, {x:0.5, y:1, z:-0.2}, {x:0.5, y:0.6, z:-0.2}, {x:1.1, y:0, z:-0.2}, {x:0.5, y:-0.6, z:-0.2}, {x:0.5, y:-1, z:-0.2}
    ];
    const codetagEdges = [
        // < front
        [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
        // < back
        [6,7],[7,8],[8,9],[9,10],[10,11],[11,6],
        // < connect
        [0,6],[1,7],[5,11],
        // / front
        [12,13],[13,14],[14,15],[15,12],
        // / back
        [16,17],[17,18],[18,19],[19,16],
        // / connect
        [12,16],[13,17],[14,18],[15,19],
        // > front
        [20,21],[21,22],[22,23],[23,24],[24,25],[25,20],
        // > back
        [26,27],[27,28],[28,29],[29,30],[30,31],[31,26],
        // > connect
        [20,26],[21,27],[25,31]
    ];

    // 3D Cube (game block/voxel)
    const cubeVerts = [
        {x:-1,y:-1,z:-1},{x:1,y:-1,z:-1},{x:1,y:1,z:-1},{x:-1,y:1,z:-1},
        {x:-1,y:-1,z:1},{x:1,y:-1,z:1},{x:1,y:1,z:1},{x:-1,y:1,z:1}
    ];
    const cubeEdges = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];

    // Terminal/Monitor (3D)
    const terminalVerts = [
        // Screen front
        {x:-1.5, y:-1, z:0.4}, {x:1.5, y:-1, z:0.4}, {x:1.5, y:1, z:0.4}, {x:-1.5, y:1, z:0.4},
        // Screen back
        {x:-1.5, y:-1, z:-0.2}, {x:1.5, y:-1, z:-0.2}, {x:1.5, y:1, z:-0.2}, {x:-1.5, y:1, z:-0.2},
        // Stand
        {x:-0.3, y:-1, z:0.1}, {x:0.3, y:-1, z:0.1}, {x:0.3, y:-1.5, z:0.1}, {x:-0.3, y:-1.5, z:0.1},
        // Base
        {x:-0.8, y:-1.5, z:0.3}, {x:0.8, y:-1.5, z:0.3}, {x:0.8, y:-1.5, z:-0.3}, {x:-0.8, y:-1.5, z:-0.3},
        // Code lines on screen
        {x:-1.2, y:0.6, z:0.45}, {x:0.5, y:0.6, z:0.45},
        {x:-1.2, y:0.2, z:0.45}, {x:1, y:0.2, z:0.45},
        {x:-1.2, y:-0.2, z:0.45}, {x:0, y:-0.2, z:0.45},
        {x:-1.2, y:-0.6, z:0.45}, {x:0.8, y:-0.6, z:0.45}
    ];
    const terminalEdges = [
        // Screen
        [0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],
        [0,4],[1,5],[2,6],[3,7],
        // Stand
        [8,9],[9,10],[10,11],[11,8],
        // Base
        [12,13],[13,14],[14,15],[15,12],
        // Code lines
        [16,17],[18,19],[20,21],[22,23]
    ];

    // Potion bottle (3D game item)
    const potionVerts = [
        // Bottle body front
        {x:-0.6, y:-1, z:0.3}, {x:0.6, y:-1, z:0.3}, {x:0.6, y:0.2, z:0.3}, {x:0.3, y:0.5, z:0.3},
        {x:0.3, y:0.8, z:0.3}, {x:-0.3, y:0.8, z:0.3}, {x:-0.3, y:0.5, z:0.3}, {x:-0.6, y:0.2, z:0.3},
        // Bottle body back
        {x:-0.6, y:-1, z:-0.3}, {x:0.6, y:-1, z:-0.3}, {x:0.6, y:0.2, z:-0.3}, {x:0.3, y:0.5, z:-0.3},
        {x:0.3, y:0.8, z:-0.3}, {x:-0.3, y:0.8, z:-0.3}, {x:-0.3, y:0.5, z:-0.3}, {x:-0.6, y:0.2, z:-0.3},
        // Cork
        {x:-0.25, y:0.8, z:0.2}, {x:0.25, y:0.8, z:0.2}, {x:0.25, y:1.1, z:0.2}, {x:-0.25, y:1.1, z:0.2},
        {x:-0.25, y:0.8, z:-0.2}, {x:0.25, y:0.8, z:-0.2}, {x:0.25, y:1.1, z:-0.2}, {x:-0.25, y:1.1, z:-0.2}
    ];
    const potionEdges = [
        // Front
        [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],
        // Back
        [8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,8],
        // Connect
        [0,8],[1,9],[2,10],[3,11],[4,12],[5,13],[6,14],[7,15],
        // Cork
        [16,17],[17,18],[18,19],[19,16],
        [20,21],[21,22],[22,23],[23,20],
        [16,20],[17,21],[18,22],[19,23]
    ];

    // Simple noise function for organic patterns
    function noise(x, y, t) {
        const n1 = Math.sin(x * 0.02 + t) * Math.cos(y * 0.02 - t * 0.5);
        const n2 = Math.sin(x * 0.015 - t * 0.7) * Math.sin(y * 0.025 + t * 0.3);
        const n3 = Math.cos(x * 0.01 + y * 0.01 + t * 0.2);
        return (n1 + n2 + n3) / 3;
    }

    function createGrid() {
        gridDots = [];
        const cols = Math.ceil(canvas.width / dotSpacing) + 1;
        const rows = Math.ceil(canvas.height / dotSpacing) + 1;
        
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                gridDots.push({
                    baseX: col * dotSpacing,
                    baseY: row * dotSpacing,
                    x: col * dotSpacing,
                    y: row * dotSpacing,
                    col: col,
                    row: row
                });
            }
        }
    }

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createGrid();
    }
    
    window.addEventListener('resize', resize);
    resize();

    // 3D rotation helper
    function rotatePoint(p, rx, ry) {
        let x = p.x * Math.cos(ry) - p.z * Math.sin(ry);
        let z = p.x * Math.sin(ry) + p.z * Math.cos(ry);
        let y = p.y * Math.cos(rx) - z * Math.sin(rx);
        z = p.y * Math.sin(rx) + z * Math.cos(rx);
        return { x: x, y: y, z: z };
    }

    // Project 3D to 2D
    function project(point, shape, w, h) {
        const fov = 400;
        const scale = fov / (fov + point.z + 300);
        return {
            x: (w * shape.x) + point.x * shape.scale * scale,
            y: (h * shape.y) + point.y * shape.scale * scale
        };
    }

    function drawGrid() {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);
        
        for (let i = 0; i < gridDots.length; i++) {
            const dot = gridDots[i];
            
            // Distance from center for vignette
            const distFromCenter = Math.sqrt(
                Math.pow(dot.baseX - centerX, 2) + 
                Math.pow(dot.baseY - centerY, 2)
            );
            
            // Noise-based variation for halftone pattern effect
            const noiseVal = noise(dot.baseX, dot.baseY, time);
            const noiseVal2 = noise(dot.baseX * 1.5, dot.baseY * 1.5, time * 0.5);
            
            // Base size varies with noise (halftone effect)
            let baseSize = 1 + (noiseVal + 1) * 1.2;
            
            // Radial gradient - larger/brighter toward center
            const radialFactor = 1 - (distFromCenter / maxDist);
            baseSize *= (0.5 + radialFactor * 0.8);
            
            // Base opacity with noise variation and radial falloff  
            let baseOpacity = 0.1 + (noiseVal2 + 1) * 0.15;
            baseOpacity *= (0.3 + radialFactor * 0.7);
            
            // Add wave patterns
            const wave1 = Math.sin(dot.baseX * 0.03 + time * 2) * 0.3;
            const wave2 = Math.cos(dot.baseY * 0.025 + time * 1.5) * 0.2;
            baseOpacity += (wave1 + wave2) * radialFactor * 0.15;
            
            let size = baseSize;
            let opacity = baseOpacity;
            
            // Mouse interaction
            let offsetX = 0;
            let offsetY = 0;
            
            if (mouse.x !== null && mouse.y !== null) {
                const dx = dot.baseX - mouse.x;
                const dy = dot.baseY - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouse.radius) {
                    const force = Math.pow((mouse.radius - distance) / mouse.radius, 1.5);
                    const angle = Math.atan2(dy, dx);
                    
                    // Push dots away
                    offsetX = Math.cos(angle) * force * 12;
                    offsetY = Math.sin(angle) * force * 12;
                    
                    // Increase size and brightness - ripple effect
                    const ripple = Math.sin(distance * 0.05 - time * 5) * 0.5 + 0.5;
                    size = baseSize + force * 3 * ripple;
                    opacity = Math.min(1, opacity + force * 0.7);
                }
            }
            
            // Smooth movement
            dot.x += ((dot.baseX + offsetX) - dot.x) * 0.2;
            dot.y += ((dot.baseY + offsetY) - dot.y) * 0.2;
            
            // Only draw if visible
            if (opacity > 0.02 && size > 0.3) {
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, Math.max(0.5, size), 0, Math.PI * 2);
                ctx.fillStyle = themeColor;
                ctx.globalAlpha = Math.max(0, Math.min(1, opacity));
                ctx.fill();
            }
        }
        ctx.globalAlpha = 1;
    }

    function draw3DShapes() {
        ctx.strokeStyle = themeColor;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = themeColor;
        ctx.shadowBlur = 15;
        ctx.globalAlpha = 0.55;
        
        shapes.forEach(function(shape) {
            // Update rotation
            shape.rx += shape.speedX;
            shape.ry += shape.speedY;
            
            // Smooth drifting movement
            shape.driftAngle += shape.driftSpeed;
            
            // Calculate drift offset (smooth circular/figure-8 motion)
            const driftX = Math.sin(shape.driftAngle) * shape.driftRadius;
            const driftY = Math.sin(shape.driftAngle * 0.7) * shape.driftRadius * 0.6;
            
            // Apply slow wandering velocity
            shape.baseX += shape.vx;
            shape.baseY += shape.vy;
            
            // Bounce off edges softly
            if (shape.baseX < 0.05 || shape.baseX > 0.95) {
                shape.vx *= -1;
                shape.baseX = Math.max(0.05, Math.min(0.95, shape.baseX));
            }
            if (shape.baseY < 0.05 || shape.baseY > 0.95) {
                shape.vy *= -1;
                shape.baseY = Math.max(0.05, Math.min(0.95, shape.baseY));
            }
            
            // Update position with drift
            shape.x = shape.baseX + driftX;
            shape.y = shape.baseY + driftY;
            
            let verts, edges;
            if (shape.type === 'controller') {
                verts = controllerVerts;
                edges = controllerEdges;
            } else if (shape.type === 'codetag') {
                verts = codetagVerts;
                edges = codetagEdges;
            } else if (shape.type === 'cube') {
                verts = cubeVerts;
                edges = cubeEdges;
            } else if (shape.type === 'terminal') {
                verts = terminalVerts;
                edges = terminalEdges;
            } else if (shape.type === 'potion') {
                verts = potionVerts;
                edges = potionEdges;
            }
            
            if (!verts || !edges) return;
            
            ctx.beginPath();
            edges.forEach(function(edge) {
                const p1 = rotatePoint(verts[edge[0]], shape.rx, shape.ry);
                const p2 = rotatePoint(verts[edge[1]], shape.rx, shape.ry);
                
                const proj1 = project(p1, shape, canvas.width, canvas.height);
                const proj2 = project(p2, shape, canvas.width, canvas.height);
                
                ctx.moveTo(proj1.x, proj1.y);
                ctx.lineTo(proj2.x, proj2.y);
            });
            ctx.stroke();
        });
        
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
    }

    function animate() {
        time += 0.016;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        drawGrid();
        draw3DShapes();
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// ==================== THEME UPDATE ====================
function updateTheme(section) {
    currentSection = section;
    themeColor = themes[section] ? themes[section].hex : themes.about.hex;
    document.documentElement.style.setProperty('--theme-color', themeColor);

    document.querySelectorAll('.nav-item').forEach(function(item) {
        const isActive = item.dataset.section === section;
        if (isActive) {
            item.classList.add('active', 'text-white');
            item.classList.remove('text-gray-500');
        } else {
            item.classList.remove('active', 'text-white');
            item.classList.add('text-gray-500');
        }
    });

    document.getElementById('avatar-ring').style.borderColor = themeColor;
    document.getElementById('avatar-ring').style.boxShadow = '0 0 20px ' + themeColor + '40';
    document.getElementById('status-badge').style.borderColor = themeColor + '60';
    document.getElementById('status-badge').style.boxShadow = '0 0 15px ' + themeColor + '20';
    
    var heroAccent = document.getElementById('hero-accent');
    heroAccent.style.color = themeColor;
    heroAccent.style.textShadow = '0 0 30px ' + themeColor + ', 0 0 60px ' + themeColor;
    
    document.getElementById('cta-primary').style.backgroundColor = themeColor;
    document.getElementById('cta-primary').style.boxShadow = '0 0 30px ' + themeColor + '60';

    ['games', 'portfolio', 'experience', 'education'].forEach(function(s) {
        var el = document.getElementById(s + '-subtitle');
        if (el) {
            el.style.color = themeColor;
            el.style.textShadow = '0 0 10px ' + themeColor;
        }
    });

    updateFilterStyles();
}

// ==================== RENDER FUNCTIONS ====================
function renderGames() {
    var grid = document.getElementById('games-grid');
    var html = '';
    gamesShowcase.forEach(function(game, idx) {
        html += '<a href="' + game.link + '" target="_blank" class="game-card group relative ' + (idx === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-video') + ' bg-black/60 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">' +
            '<div class="game-border absolute inset-0 border-2 border-transparent transition-colors duration-300 rounded-xl z-20 pointer-events-none"></div>' +
            '<div class="game-bg absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-700" style="background-image: url(' + game.image + ')"></div>' +
            '<div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>' +
            '<div class="absolute bottom-0 left-0 p-6 z-10">' +
                '<h3 class="text-2xl md:text-4xl font-black uppercase italic text-white mb-2 drop-shadow-lg">' + game.title + '</h3>' +
                '<div class="flex items-center gap-2 font-mono text-sm uppercase tracking-widest transition-colors duration-300" style="color: var(--theme-color); text-shadow: 0 0 10px var(--theme-color)">' +
                    '<i data-lucide="gamepad-2" class="w-4 h-4"></i> Click to Play' +
                '</div>' +
            '</div>' +
        '</a>';
    });
    grid.innerHTML = html;
    lucide.createIcons();
}

function renderPortfolio(filter) {
    filter = filter || 'all';
    var items = portfolioItems;
    if (filter === 'game') items = items.filter(function(i) { return i.category.indexOf('game') !== -1; });
    else if (filter === 'web') items = items.filter(function(i) { return i.category.indexOf('web') !== -1; });
    else if (filter === 'app') items = items.filter(function(i) { return i.category.indexOf('windows') !== -1 || i.category.indexOf('mobile') !== -1; });

    var grid = document.getElementById('portfolio-grid');
    var html = '';
    items.forEach(function(item) {
        var iconName = (item.iconType === 'unreal' || item.iconType === 'unity') ? 'gamepad-2' : 'code';
        html += '<a href="' + item.link + '" target="_blank" rel="noopener noreferrer" class="project-card group relative block bg-[#13111c]/80 backdrop-blur-md border border-white/10 rounded-lg h-full flex flex-col overflow-hidden transition-all duration-300">' +
            '<div class="card-border absolute inset-0 border border-transparent transition-colors duration-300 pointer-events-none rounded-lg z-20"></div>' +
            '<div class="aspect-video w-full bg-[#080808] relative overflow-hidden border-b border-white/5">' +
                '<img src="' + item.image + '" alt="' + item.title + '" class="card-image w-full h-full object-cover transition-transform duration-700 opacity-80" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\'">' +
                '<div class="w-full h-full items-center justify-center bg-[#0a0a0a] relative hidden" style="color: var(--theme-color)">' +
                    '<i data-lucide="gamepad-2" class="w-10 h-10 opacity-50 relative z-10 animate-pulse"></i>' +
                '</div>' +
                '<div class="absolute top-2 right-2 flex flex-col items-end gap-1">' +
                    item.tags.slice(0, 2).map(function(tag) { return '<span class="px-2 py-1 text-[8px] uppercase font-bold bg-black/80 text-white border border-white/10 shadow-[0_0_10px_black] backdrop-blur-sm">' + tag + '</span>'; }).join('') +
                '</div>' +
            '</div>' +
            '<div class="p-5 flex-grow flex flex-col relative z-10">' +
                '<h4 class="card-title text-lg font-bold text-white mb-2 leading-tight transition-colors">' + item.title + '</h4>' +
                '<p class="text-gray-400 text-xs mb-4 line-clamp-2 flex-grow font-mono leading-relaxed group-hover:text-gray-300">' + item.description + '</p>' +
                '<div class="flex items-center justify-between mt-auto pt-4 border-t border-white/5 font-bold text-[10px] uppercase tracking-wider transition-colors duration-300" style="color: var(--theme-color)">' +
                    '<span class="flex items-center gap-2">' +
                        '<i data-lucide="' + iconName + '" class="w-3 h-3"></i>' +
                        item.category +
                    '</span>' +
                    '<i data-lucide="external-link" class="w-3 h-3 group-hover:translate-x-1 transition-transform"></i>' +
                '</div>' +
            '</div>' +
        '</a>';
    });
    grid.innerHTML = html;
    lucide.createIcons();
}

function renderExperience() {
    var list = document.getElementById('experience-list');
    var html = '';
    experience.forEach(function(job) {
        html += '<div class="relative pl-8 group">' +
            '<div class="absolute -left-[9px] top-2 w-4 h-4 bg-[#050505] border-2 rounded-full group-hover:scale-125 transition-all duration-300" style="border-color: var(--theme-color); background-color: var(--theme-color); box-shadow: 0 0 10px var(--theme-color)"></div>' +
            '<h3 class="text-3xl font-bold text-white mb-1">' + job.company + '</h3>' +
            '<a href="' + job.url + '" target="_blank" class="text-xs font-mono hover:underline mb-6 block w-fit" style="color: var(--theme-color)">Visit Company Website →</a>' +
            '<div class="space-y-6">';
        job.positions.forEach(function(pos) {
            html += '<div class="exp-card bg-black/40 p-8 rounded-xl border border-white/5 transition-all duration-300 relative overflow-hidden">' +
                '<div class="flex flex-col md:flex-row md:justify-between md:items-center mb-4">' +
                    '<h4 class="exp-title text-xl font-bold text-white transition-colors">' + pos.title + '</h4>' +
                    '<span class="text-xs font-mono text-gray-400 bg-black/50 px-3 py-1 rounded border border-white/10">' + pos.date + '</span>' +
                '</div>' +
                '<p class="text-sm text-gray-300 leading-relaxed max-w-3xl">' + pos.desc + '</p>' +
            '</div>';
        });
        html += '</div></div>';
    });
    list.innerHTML = html;
}

function renderEducation() {
    var grid = document.getElementById('education-grid');
    var html = '';
    education.forEach(function(edu) {
        html += '<div class="edu-card group p-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300">' +
            '<div class="edu-icon mb-6 transition-colors duration-300 p-3 bg-white/5 w-fit rounded-lg" style="color: var(--theme-color)">' +
                '<i data-lucide="graduation-cap" class="w-8 h-8"></i>' +
            '</div>' +
            '<div class="text-xs font-bold uppercase text-gray-500 mb-2">' + edu.date + '</div>' +
            '<h4 class="edu-title text-xl font-bold text-white leading-tight mb-2 transition-colors">' + edu.degree + '</h4>' +
            '<div class="text-sm text-gray-400 font-mono">' + edu.school + '</div>' +
        '</div>';
    });
    grid.innerHTML = html;
    lucide.createIcons();
}

function updateFilterStyles() {
    document.querySelectorAll('.filter-btn').forEach(function(btn) {
        var isActive = btn.dataset.filter === currentFilter;
        if (isActive) {
            btn.style.backgroundColor = themeColor;
            btn.style.borderColor = themeColor;
            btn.style.color = 'black';
        } else {
            btn.style.backgroundColor = 'transparent';
            btn.style.borderColor = 'rgba(255,255,255,0.2)';
            btn.style.color = '#9ca3af';
        }
    });
}

// ==================== EVENT LISTENERS ====================
function initEventListeners() {
    window.addEventListener('scroll', function() {
        var sections = ['about', 'games', 'portfolio', 'experience', 'education'];
        var scrollPosition = window.scrollY + window.innerHeight * 0.3;

        for (var i = 0; i < sections.length; i++) {
            var section = sections[i];
            var el = document.getElementById(section);
            if (el) {
                var offsetTop = el.offsetTop;
                var offsetHeight = el.offsetHeight;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    if (currentSection !== section) {
                        updateTheme(section);
                    }
                    break;
                }
            }
        }
    });

    document.querySelectorAll('.nav-item').forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            var section = item.dataset.section;
            var el = document.getElementById(section);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            document.getElementById('sidebar').classList.add('-translate-x-full');
            document.getElementById('menu-icon').classList.remove('hidden');
            document.getElementById('close-icon').classList.add('hidden');
        });
    });

    document.getElementById('mobile-toggle').addEventListener('click', function() {
        var sidebar = document.getElementById('sidebar');
        var isOpen = !sidebar.classList.contains('-translate-x-full');
        if (isOpen) {
            sidebar.classList.add('-translate-x-full');
            document.getElementById('menu-icon').classList.remove('hidden');
            document.getElementById('close-icon').classList.add('hidden');
        } else {
            sidebar.classList.remove('-translate-x-full');
            document.getElementById('menu-icon').classList.add('hidden');
            document.getElementById('close-icon').classList.remove('hidden');
        }
    });

    document.querySelectorAll('.filter-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            currentFilter = btn.dataset.filter;
            updateFilterStyles();
            renderPortfolio(currentFilter);
        });
    });
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    initBackground();
    updateTheme('about');
    renderGames();
    renderPortfolio();
    renderExperience();
    renderEducation();
    initEventListeners();
});
