// ==================== GLOBAL DATA ====================
let portfolioItems = [];
let experience = [];
let education = [];
let gamesShowcase = [];
let themes = {};

let currentSection = 'about';
let currentFilter = 'all';
let themeColor = '#00f3ff';
let dataLoaded = false;

// ==================== DATA LOADING ====================
async function loadData() {
    try {
        const response = await fetch('./data.json');
        if (!response.ok) {
            throw new Error('Failed to load data.json');
        }
        const data = await response.json();
        
        portfolioItems = data.portfolioItems || [];
        experience = data.experience || [];
        education = data.education || [];
        gamesShowcase = data.gamesShowcase || [];
        themes = data.themes || {
            about: { hex: '#00f3ff' },
            games: { hex: '#ff0055' },
            portfolio: { hex: '#bc13fe' },
            experience: { hex: '#ffd700' },
            education: { hex: '#0051ff' }
        };
        
        // Initial theme default (will be overridden by init scroll check)
        themeColor = themes.about.hex;
        dataLoaded = true;
        
        console.log('Data loaded successfully');
        return true;
    } catch (error) {
        console.error('Error loading data:', error);
        // Fallback to default empty arrays
        dataLoaded = false;
        return false;
    }
}

// ==================== BACKGROUND ANIMATION ====================
function initBackground() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return; // Guard clause
    
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
        {x:-2, y:-0.5, z:0.3}, {x:-1.5, y:-0.8, z:0.3}, {x:1.5, y:-0.8, z:0.3}, {x:2, y:-0.5, z:0.3},
        {x:2, y:0.3, z:0.3}, {x:1.5, y:0.6, z:0.3}, {x:-1.5, y:0.6, z:0.3}, {x:-2, y:0.3, z:0.3},
        {x:-2, y:-0.5, z:-0.3}, {x:-1.5, y:-0.8, z:-0.3}, {x:1.5, y:-0.8, z:-0.3}, {x:2, y:-0.5, z:-0.3},
        {x:2, y:0.3, z:-0.3}, {x:1.5, y:0.6, z:-0.3}, {x:-1.5, y:0.6, z:-0.3}, {x:-2, y:0.3, z:-0.3},
        {x:-1.2, y:-0.1, z:0.4}, {x:-0.8, y:-0.1, z:0.4}, {x:-0.8, y:0.3, z:0.4}, {x:-1.2, y:0.3, z:0.4},
        {x:1, y:0, z:0.4}, {x:1.3, y:-0.2, z:0.4}, {x:1.3, y:0.2, z:0.4}, {x:1, y:0.4, z:0.4},
        {x:-1, y:-0.3, z:0.35}, {x:-1, y:0.1, z:0.35}, {x:-1.2, y:-0.1, z:0.35}, {x:-0.8, y:-0.1, z:0.35}
    ];
    const controllerEdges = [
        [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],
        [8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,8],
        [0,8],[1,9],[2,10],[3,11],[4,12],[5,13],[6,14],[7,15],
        [16,17],[17,18],[18,19],[19,16],
        [20,21],[21,22],[22,23],[23,20],
        [24,25],[26,27]
    ];

    // Code Tag </> (3D extruded)
    const codetagVerts = [
        {x:-1.5, y:0, z:0.2}, {x:-0.5, y:1, z:0.2}, {x:-0.5, y:0.6, z:0.2}, {x:-1.1, y:0, z:0.2}, {x:-0.5, y:-0.6, z:0.2}, {x:-0.5, y:-1, z:0.2},
        {x:-1.5, y:0, z:-0.2}, {x:-0.5, y:1, z:-0.2}, {x:-0.5, y:0.6, z:-0.2}, {x:-1.1, y:0, z:-0.2}, {x:-0.5, y:-0.6, z:-0.2}, {x:-0.5, y:-1, z:-0.2},
        {x:-0.15, y:1.2, z:0.2}, {x:0.15, y:1.2, z:0.2}, {x:0.15, y:-1.2, z:0.2}, {x:-0.15, y:-1.2, z:0.2},
        {x:-0.15, y:1.2, z:-0.2}, {x:0.15, y:1.2, z:-0.2}, {x:0.15, y:-1.2, z:-0.2}, {x:-0.15, y:-1.2, z:-0.2},
        {x:1.5, y:0, z:0.2}, {x:0.5, y:1, z:0.2}, {x:0.5, y:0.6, z:0.2}, {x:1.1, y:0, z:0.2}, {x:0.5, y:-0.6, z:0.2}, {x:0.5, y:-1, z:0.2},
        {x:1.5, y:0, z:-0.2}, {x:0.5, y:1, z:-0.2}, {x:0.5, y:0.6, z:-0.2}, {x:1.1, y:0, z:-0.2}, {x:0.5, y:-0.6, z:-0.2}, {x:0.5, y:-1, z:-0.2}
    ];
    const codetagEdges = [
        [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
        [6,7],[7,8],[8,9],[9,10],[10,11],[11,6],
        [0,6],[1,7],[5,11],
        [12,13],[13,14],[14,15],[15,12],
        [16,17],[17,18],[18,19],[19,16],
        [12,16],[13,17],[14,18],[15,19],
        [20,21],[21,22],[22,23],[23,24],[24,25],[25,20],
        [26,27],[27,28],[28,29],[29,30],[30,31],[31,26],
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
        {x:-1.5, y:-1, z:0.4}, {x:1.5, y:-1, z:0.4}, {x:1.5, y:1, z:0.4}, {x:-1.5, y:1, z:0.4},
        {x:-1.5, y:-1, z:-0.2}, {x:1.5, y:-1, z:-0.2}, {x:1.5, y:1, z:-0.2}, {x:-1.5, y:1, z:-0.2},
        {x:-0.3, y:-1, z:0.1}, {x:0.3, y:-1, z:0.1}, {x:0.3, y:-1.5, z:0.1}, {x:-0.3, y:-1.5, z:0.1},
        {x:-0.8, y:-1.5, z:0.3}, {x:0.8, y:-1.5, z:0.3}, {x:0.8, y:-1.5, z:-0.3}, {x:-0.8, y:-1.5, z:-0.3},
        {x:-1.2, y:0.6, z:0.45}, {x:0.5, y:0.6, z:0.45},
        {x:-1.2, y:0.2, z:0.45}, {x:1, y:0.2, z:0.45},
        {x:-1.2, y:-0.2, z:0.45}, {x:0, y:-0.2, z:0.45},
        {x:-1.2, y:-0.6, z:0.45}, {x:0.8, y:-0.6, z:0.45}
    ];
    const terminalEdges = [
        [0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],
        [0,4],[1,5],[2,6],[3,7],
        [8,9],[9,10],[10,11],[11,8],
        [12,13],[13,14],[14,15],[15,12],
        [16,17],[18,19],[20,21],[22,23]
    ];

    // Potion bottle (3D game item)
    const potionVerts = [
        {x:-0.6, y:-1, z:0.3}, {x:0.6, y:-1, z:0.3}, {x:0.6, y:0.2, z:0.3}, {x:0.3, y:0.5, z:0.3},
        {x:0.3, y:0.8, z:0.3}, {x:-0.3, y:0.8, z:0.3}, {x:-0.3, y:0.5, z:0.3}, {x:-0.6, y:0.2, z:0.3},
        {x:-0.6, y:-1, z:-0.3}, {x:0.6, y:-1, z:-0.3}, {x:0.6, y:0.2, z:-0.3}, {x:0.3, y:0.5, z:-0.3},
        {x:0.3, y:0.8, z:-0.3}, {x:-0.3, y:0.8, z:-0.3}, {x:-0.3, y:0.5, z:-0.3}, {x:-0.6, y:0.2, z:-0.3},
        {x:-0.25, y:0.8, z:0.2}, {x:0.25, y:0.8, z:0.2}, {x:0.25, y:1.1, z:0.2}, {x:-0.25, y:1.1, z:0.2},
        {x:-0.25, y:0.8, z:-0.2}, {x:0.25, y:0.8, z:-0.2}, {x:0.25, y:1.1, z:-0.2}, {x:-0.25, y:1.1, z:-0.2}
    ];
    const potionEdges = [
        [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],
        [8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,8],
        [0,8],[1,9],[2,10],[3,11],[4,12],[5,13],[6,14],[7,15],
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
            
            const distFromCenter = Math.sqrt(
                Math.pow(dot.baseX - centerX, 2) + 
                Math.pow(dot.baseY - centerY, 2)
            );
            
            const noiseVal = noise(dot.baseX, dot.baseY, time);
            const noiseVal2 = noise(dot.baseX * 1.5, dot.baseY * 1.5, time * 0.5);
            
            let baseSize = 1 + (noiseVal + 1) * 1.2;
            
            const radialFactor = 1 - (distFromCenter / maxDist);
            baseSize *= (0.5 + radialFactor * 0.8);
            
            let baseOpacity = 0.1 + (noiseVal2 + 1) * 0.15;
            baseOpacity *= (0.3 + radialFactor * 0.7);
            
            const wave1 = Math.sin(dot.baseX * 0.03 + time * 2) * 0.3;
            const wave2 = Math.cos(dot.baseY * 0.025 + time * 1.5) * 0.2;
            baseOpacity += (wave1 + wave2) * radialFactor * 0.15;
            
            let size = baseSize;
            let opacity = baseOpacity;
            
            let offsetX = 0;
            let offsetY = 0;
            
            if (mouse.x !== null && mouse.y !== null) {
                const dx = dot.baseX - mouse.x;
                const dy = dot.baseY - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouse.radius) {
                    const force = Math.pow((mouse.radius - distance) / mouse.radius, 1.5);
                    const angle = Math.atan2(dy, dx);
                    
                    offsetX = Math.cos(angle) * force * 12;
                    offsetY = Math.sin(angle) * force * 12;
                    
                    const ripple = Math.sin(distance * 0.05 - time * 5) * 0.5 + 0.5;
                    size = baseSize + force * 3 * ripple;
                    opacity = Math.min(1, opacity + force * 0.7);
                }
            }
            
            dot.x += ((dot.baseX + offsetX) - dot.x) * 0.2;
            dot.y += ((dot.baseY + offsetY) - dot.y) * 0.2;
            
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
            shape.rx += shape.speedX;
            shape.ry += shape.speedY;
            
            shape.driftAngle += shape.driftSpeed;
            
            const driftX = Math.sin(shape.driftAngle) * shape.driftRadius;
            const driftY = Math.sin(shape.driftAngle * 0.7) * shape.driftRadius * 0.6;
            
            shape.baseX += shape.vx;
            shape.baseY += shape.vy;
            
            if (shape.baseX < 0.05 || shape.baseX > 0.95) {
                shape.vx *= -1;
                shape.baseX = Math.max(0.05, Math.min(0.95, shape.baseX));
            }
            if (shape.baseY < 0.05 || shape.baseY > 0.95) {
                shape.vy *= -1;
                shape.baseY = Math.max(0.05, Math.min(0.95, shape.baseY));
            }
            
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
    // Always update, even if same section (fixes color issues)
    currentSection = section;
    themeColor = themes[section] ? themes[section].hex : themes.about.hex;
    document.documentElement.style.setProperty('--theme-color', themeColor);

    // Update nav items
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

    // Update sidebar elements
    const avatarRing = document.getElementById('avatar-ring');
    if (avatarRing) {
        avatarRing.style.borderColor = themeColor;
        avatarRing.style.boxShadow = '0 0 20px ' + themeColor + '40';
    }
    
    const statusBadge = document.getElementById('status-badge');
    if (statusBadge) {
        statusBadge.style.borderColor = themeColor + '60';
        statusBadge.style.boxShadow = '0 0 15px ' + themeColor + '20';
    }
    
    // Update hero accent
    const heroAccent = document.getElementById('hero-accent');
    if (heroAccent) {
        heroAccent.style.color = themeColor;
        heroAccent.style.textShadow = '0 0 30px ' + themeColor + ', 0 0 60px ' + themeColor;
    }
    
    // Update CTA button
    const ctaPrimary = document.getElementById('cta-primary');
    if (ctaPrimary) {
        ctaPrimary.style.backgroundColor = themeColor;
        ctaPrimary.style.boxShadow = '0 0 30px ' + themeColor + '60';
    }

    // Update section subtitles
    ['games', 'portfolio', 'experience', 'education'].forEach(function(s) {
        const el = document.getElementById(s + '-subtitle');
        if (el) {
            el.style.color = themeColor;
            el.style.textShadow = '0 0 10px ' + themeColor;
        }
    });

    // Update status badge ping animation colors
    const pingElements = document.querySelectorAll('#status-badge .animate-ping');
    pingElements.forEach(function(el) {
        el.style.backgroundColor = themeColor;
    });
    
    const pingDot = document.querySelector('#status-badge .relative.inline-flex');
    if (pingDot) {
        pingDot.style.backgroundColor = themeColor;
    }

    // Update filter styles
    updateFilterStyles();
    
    // Force re-render of dynamically colored elements
    updateDynamicColors();
}

// ==================== UPDATE DYNAMIC COLORS ====================
function updateDynamicColors() {
    // Update all elements that use inline style with theme color
    document.querySelectorAll('[style*="var(--theme-color)"]').forEach(function(el) {
        // Force style recalculation
        el.style.setProperty('--theme-color', themeColor);
    });
    
    // Update game cards "Click to Play" text
    document.querySelectorAll('.game-card .font-mono').forEach(function(el) {
        el.style.color = themeColor;
        el.style.textShadow = '0 0 10px ' + themeColor;
    });
    
    // Update portfolio card category colors
    document.querySelectorAll('.project-card .flex.items-center.justify-between').forEach(function(el) {
        el.style.color = themeColor;
    });
    
    // Update education card icons
    document.querySelectorAll('.edu-icon').forEach(function(el) {
        el.style.color = themeColor;
    });
    
    // Update experience timeline dots
    document.querySelectorAll('#experience-list .absolute.border-2').forEach(function(el) {
        el.style.borderColor = themeColor;
        el.style.backgroundColor = themeColor;
        el.style.boxShadow = '0 0 10px ' + themeColor;
    });
    
    // Update experience company links
    document.querySelectorAll('#experience-list a[target="_blank"]').forEach(function(el) {
        el.style.color = themeColor;
    });
    
    // Update map pin icon color in sidebar
    const mapPinIcon = document.querySelector('.nav-icon[data-lucide="map-pin"]');
    if (mapPinIcon) {
        mapPinIcon.style.color = themeColor;
    }
}

// ==================== RENDER FUNCTIONS ====================
function renderGames() {
    const grid = document.getElementById('games-grid');
    if (!grid || gamesShowcase.length === 0) return;
    
    let html = '';
    gamesShowcase.forEach(function(game, idx) {
        html += '<a href="' + game.link + '" target="_blank" class="game-card group relative ' + (idx === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-video') + ' bg-black/60 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">' +
            '<div class="game-border absolute inset-0 border-2 border-transparent transition-colors duration-300 rounded-xl z-20 pointer-events-none"></div>' +
            '<div class="game-bg absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-700" style="background-image: url(' + game.image + ')"></div>' +
            '<div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>' +
            '<div class="absolute bottom-0 left-0 p-6 z-10">' +
                '<h3 class="text-2xl md:text-4xl font-black uppercase italic text-white mb-2 drop-shadow-lg">' + game.title + '</h3>' +
                '<div class="flex items-center gap-2 font-mono text-sm uppercase tracking-widest transition-colors duration-300" style="color: ' + themeColor + '; text-shadow: 0 0 10px ' + themeColor + '">' +
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
    let items = portfolioItems;
    if (filter === 'game') items = items.filter(function(i) { return i.category.indexOf('game') !== -1; });
    else if (filter === 'web') items = items.filter(function(i) { return i.category.indexOf('web') !== -1; });
    else if (filter === 'app') items = items.filter(function(i) { return i.category.indexOf('windows') !== -1 || i.category.indexOf('mobile') !== -1; });

    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;
    
    let html = '';
    items.forEach(function(item) {
        const iconName = (item.iconType === 'unreal' || item.iconType === 'unity') ? 'gamepad-2' : 'code';
        html += '<a href="' + item.link + '" target="_blank" rel="noopener noreferrer" class="project-card group relative block bg-[#13111c]/80 backdrop-blur-md border border-white/10 rounded-lg h-full flex flex-col overflow-hidden transition-all duration-300">' +
            '<div class="card-border absolute inset-0 border border-transparent transition-colors duration-300 pointer-events-none rounded-lg z-20"></div>' +
            '<div class="aspect-video w-full bg-[#080808] relative overflow-hidden border-b border-white/5">' +
                '<img src="' + item.image + '" alt="' + item.title + '" class="card-image w-full h-full object-cover transition-transform duration-700 opacity-80" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\'">' +
                '<div class="w-full h-full items-center justify-center bg-[#0a0a0a] relative hidden" style="color: ' + themeColor + '">' +
                    '<i data-lucide="gamepad-2" class="w-10 h-10 opacity-50 relative z-10 animate-pulse"></i>' +
                '</div>' +
                '<div class="absolute top-2 right-2 flex flex-col items-end gap-1">' +
                    item.tags.slice(0, 2).map(function(tag) { return '<span class="px-2 py-1 text-[8px] uppercase font-bold bg-black/80 text-white border border-white/10 shadow-[0_0_10px_black] backdrop-blur-sm">' + tag + '</span>'; }).join('') +
                '</div>' +
            '</div>' +
            '<div class="p-5 flex-grow flex flex-col relative z-10">' +
                '<h4 class="card-title text-lg font-bold text-white mb-2 leading-tight transition-colors">' + item.title + '</h4>' +
                '<p class="text-gray-400 text-xs mb-4 line-clamp-2 flex-grow font-mono leading-relaxed group-hover:text-gray-300">' + item.description + '</p>' +
                '<div class="flex items-center justify-between mt-auto pt-4 border-t border-white/5 font-bold text-[10px] uppercase tracking-wider transition-colors duration-300" style="color: ' + themeColor + '">' +
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
    const list = document.getElementById('experience-list');
    if (!list || experience.length === 0) return;
    
    let html = '';
    experience.forEach(function(job) {
        html += '<div class="relative pl-8 group">' +
            '<div class="absolute -left-[9px] top-2 w-4 h-4 bg-[#050505] border-2 rounded-full group-hover:scale-125 transition-all duration-300" style="border-color: ' + themeColor + '; background-color: ' + themeColor + '; box-shadow: 0 0 10px ' + themeColor + '"></div>' +
            '<h3 class="text-3xl font-bold text-white mb-1">' + job.company + '</h3>' +
            '<a href="' + job.url + '" target="_blank" class="text-xs font-mono hover:underline mb-6 block w-fit" style="color: ' + themeColor + '">Visit Company Website →</a>' +
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
    const grid = document.getElementById('education-grid');
    if (!grid || education.length === 0) return;
    
    let html = '';
    education.forEach(function(edu) {
        html += '<div class="edu-card group p-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300">' +
            '<div class="edu-icon mb-6 transition-colors duration-300 p-3 bg-white/5 w-fit rounded-lg" style="color: ' + themeColor + '">' +
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
        const isActive = btn.dataset.filter === currentFilter;
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
function handleScroll() {
    const sections = ['about', 'games', 'portfolio', 'experience', 'education'];
    const scrollPosition = window.scrollY + window.innerHeight * 0.3;

    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const el = document.getElementById(section);
        if (el) {
            const offsetTop = el.offsetTop;
            const offsetHeight = el.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                // FIXED: Removed the check "if (currentSection !== section)" 
                // to allow the theme to refresh constantly and fix color glitches,
                // matching the developer's intent in updateTheme comment.
                updateTheme(section);
                break;
            }
        }
    }
}

function initEventListeners() {
    window.addEventListener('scroll', handleScroll);

    document.querySelectorAll('.nav-item').forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const section = item.dataset.section;
            const el = document.getElementById(section);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            document.getElementById('sidebar').classList.add('-translate-x-full');
            document.getElementById('menu-icon').classList.remove('hidden');
            document.getElementById('close-icon').classList.add('hidden');
        });
    });

    document.getElementById('mobile-toggle').addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        const isOpen = !sidebar.classList.contains('-translate-x-full');
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
async function init() {
    // Load data from JSON first
    await loadData();
    
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Initialize background animation
    initBackground();
    
    // Render all sections
    renderGames();
    renderPortfolio();
    renderExperience();
    renderEducation();
    
    // Initialize event listeners
    initEventListeners();

    // FIXED: Trigger initial scroll check to set correct theme if page is loaded scrolled down
    handleScroll();
}

document.addEventListener('DOMContentLoaded', init);