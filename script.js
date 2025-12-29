// ==================== LOADING SCREEN ====================
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.getElementById('progress-bar');
    const welcomeMessage = document.getElementById('welcome-message');
    const mainContent = document.getElementById('main-content');
    const checkpoints = [
        document.getElementById('checkpoint1'),
        document.getElementById('checkpoint2'),
        document.getElementById('checkpoint3'),
        document.getElementById('checkpoint4'),
        document.getElementById('checkpoint5'),
        document.getElementById('checkpoint6')
    ];
    
    // Hide main content initially
    mainContent.style.display = 'none';
    
    let progress = 0;
    const totalTime = 5000; // 5 seconds total
    const checkpointTime = totalTime / checkpoints.length;
    const progressIncrement = 100 / (totalTime / 100);
    
    // Start loading process
    const startLoading = () => {
        const interval = setInterval(() => {
            progress += progressIncrement;
            progressBar.style.width = `${Math.min(progress, 100)}%`;
            
            // Activate checkpoints
            const activeCheckpoint = Math.floor(progress / (100 / checkpoints.length));
            for (let i = 0; i <= activeCheckpoint && i < checkpoints.length; i++) {
                if (!checkpoints[i].classList.contains('active')) {
                    checkpoints[i].classList.add('active');
                }
            }
            
            // When loading is complete
            if (progress >= 100) {
                clearInterval(interval);
                
                // Show welcome message
                setTimeout(() => {
                    welcomeMessage.classList.add('show');
                    
                    // Hide loading screen and show main content
                    setTimeout(() => {
                        loadingScreen.style.opacity = '0';
                        setTimeout(() => {
                            loadingScreen.style.display = 'none';
                            mainContent.style.display = 'block';
                            
                            // Fade in main content
                            setTimeout(() => {
                                mainContent.classList.add('show');
                                initializeMainPage();
                            }, 50);
                        }, 500);
                    }, 1500);
                }, 300);
            }
        }, totalTime / 100);
    };
    
    // Start loading after short delay
    setTimeout(startLoading, 300);
});

// ==================== GAME DATA WITH ALL LINKS ====================
const GAME_DATA = {
    // Game ID: {name, pin, image, description, rating, size, category, links[]}
    "1": {
        name: "GOD HAND",
        pin: "111111",
        image: "hand.jpg",
        description: "Be Hero in your imaginary life with horror battle on your ways.",
        rating: "4.9/5",
        size: "2.4 GB",
        category: "Fighting",
        links: [
            "https://www.mediafire.com/file/fhyh2jtzk4rk1rb/AetherSX2-v1.5-4248-Aethersx2apk.com.apk/file",
            "https://www.mediafire.com/file/9gefs9uyr0o5co7/GOD_HAND_HACK_EDITION.iso/file"
        ]
    },
    "2": {
        name: "GOD OF WAR",
        pin: "007486",
        image: "image.jpg",
        description: "Pass on an unforgettable adventure through enchanted Warfare.",
        rating: "4.9/5",
        size: "2.1 GB",
        category: "RPG • Adventure",
        links: [
            "https://www.mediafire.com/file/fhyh2jtzk4rk1rb/AetherSX2-v1.5-4248-Aethersx2apk.com.apk/file",
            "https://www.mediafire.com/file/zsj8ckt6ftdlhrq/God_of_War_1_Vampire_Edition.iso/file"
        ]
    },
    "3": {
        name: "BRIGHT MEMORY INFINITE",
        pin: "338901",
        image: "bright.jpg",
        description: "Embark on an unforgettable adventure through enchanted forests.",
        rating: "4.9/5",
        size: "2.2 GB",
        category: "RPG • Adventure",
        links: [
            "https://www.mediafire.com/file/ghlrxx9796q3w7g/bright-memory-infinite-1.31-mod-menu-5play.apk/file"
        ]
    },
    "4": {
        name: "GTA V",
        pin: "640551",
        image: "gtav.jpg",
        description: "Experience the thrill of GTA V with realistic gameplay.",
        rating: "4.7/5",
        size: "4.5 GB",
        category: "Realistic",
        links: [
            "https://www.rockstargames.com/V/",
            "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/"
        ]
    },
    "5": {
        name: "TOMB RIDER",
        pin: "552222",
        image: "tom.jpg",
        description: "Engage war and rescue people from violence.",
        rating: "4.5/5",
        size: "1.8 GB",
        category: "Action",
        links: [
            "https://www.mediafire.com/file/fyljdncqwdugwik/Tomb+Raider+-+Anniversary+(USA)+(PSP)+(PSN).zip/file"
        ]
    },
    "6": {
        name: "FTS Tz",
        pin: "607650",
        image: "ft.jpg",
        description: "Enjoy Football feeling with your favorite African Teams.",
        rating: "4.3/5",
        size: "1.2 GB",
        category: "Football",
        links: [
            "https://www.mediafire.com/file/xrmg05osa5jbktu/FTS+25+NBC+aPLAY.zip/file"
        ]
    },
    "7": {
        name: "MALEO BUS Tanga map",
        pin: "000617",
        image: "ma.jpg",
        description: "Survive terrifying encounters in a mysterious Road.",
        rating: "4.7/5",
        size: "900 MB",
        category: "Driving",
        links: [
            "https://www.mediafire.com/file/6zvue8ep7n6n46q/BUS+TANZANIA+GAME+LA+BUS+FILE+ZOTE+NIPO+HAPA+KUPATA+PASSWORD+TUMA+NENO+BUS+KWENDA+NAMBA+0686350237+AU+0672550237+RAMANI+ZIPO.7z/file?dkey=f03vf19h2m6&r=236"
        ]
    },
    "8": {
        name: "GTA V SAN ANDREA MODE",
        pin: "211815",
        image: "gt.jpeg",
        description: "Futuristic lifestyle with advanced Mission.",
        rating: "4.8/5",
        size: "600 MB",
        category: "Action • FPS",
        links: [
            "https://cpu-z.en.uptodown.com/android/download",
            "https://www.mediafire.com/file/2or50sx49aow4xx/Power_Vr_-_GTA_V_Style_Graphics_v2.7z/file?dkey=i2sfwj2y7xd&r=460",
            "https://www.mediafire.com/file/1sxzv4mforgbl0u/Aderno_-_GTA_V_Style_Graphics_v2.7z/file?dkey=cps0io69k3o&r=1078",
            "https://www.mediafire.com/file/3notfc5soutg2ve/Mali_-_GTA_V_Style_Graphics_v2.7z/file?dkey=865i6iypxzq&r=1488"
        ]
    },
    "9": {
        name: "DLS 26",
        pin: "999999",
        image: "W.jpg",
        description: "Enjoy football with your ultimate teams.",
        rating: "4.6/5",
        size: "2.0 GB",
        category: "Football",
        links: [
            "https://download2392.mediafire.com/hrrbl08q9c5ganLfqAcLZqlSOOYrdSZl4jeUS_xlXdd8WOWTn9RiamPem88lbiTTwb5aIu_PgaxM8rnrFoRytDgxRcuwzOt-2lfSYywz_4bSJRCJxqWb6bF_Z1thNrtzf9Xqgqm4E13I6Ir6pId1OpWcQquB-nIHYTT6zPN1GRiR/ych8v382crfk77g/DLS+26+MOD+WYDAD+AC.zip",
            "https://download2287.mediafire.com/v96tc4u4v3ygHeSk24jxX0tKD5ySW6EjbhnyEBl_v-S6IWAbSn2LwiPZRNP2T_UUVr6GyRf-PklbELfBEygas60yax_-n6jVFSSc5Y8VufVu68jZjZ5apx4QnX-2PWFh-c8EJ_9ZRi2-uXWkLZNP9TQ571NAtNDWpJGCVYR4eZQS/6htq8qj0n3g88dz/OBB+DLS+ARABIC+COMMENTARY+BY+DZ+HACKER.zip"
        ]
    },
    "10": {
        name: "eFOOTBALL PSP",
        pin: "101010",
        image: "EF.jpg",
        description: "Build, explore and swim in this realistic Football Game.",
        rating: "4.9/5",
        size: "700 MB",
        category: "Football",
        links: [
            "https://www.mediafire.com/file/xet3s2ofesp5do4/eFootball_2026_GAME.zip/file"
        ]
    },
    "11": {
        name: "SPIDER MAN AMAZING 2",
        pin: "345412",
        image: "spi.jpeg",
        description: "Swing through New York City as Spider-Man.",
        rating: "4.8/5",
        size: "1.5 GB",
        category: "Action • Adventure",
        links: [
            "https://www.mediafire.com/file/04eqg7wh64a099x/Obb_Amazing_Spider_Man_2_-_RisTechy.com.rar/file",
            "https://www.mediafire.com/file/g33rxqm5qhzz3gp/Spider+MaN+2+Mod+-+RisTechy.com.7z/file"
        ]
    },
    "12": {
        name: "COD WARFARE",
        pin: "130003",
        image: "COD.jpeg",
        description: "Experience intense modern warfare combat.",
        rating: "4.8/5",
        size: "3.0 GB",
        category: "Action • FPS",
        links: [
            "https://www.mediafire.com/file/6fm25f39to92gjy/Call_of_Duty_-_Modern_Warfare_3_%2528USA%2529.7z/file"
        ]
    },
    "13": {
        name: "FIFA 26 MOD",
        pin: "141414",
        image: "fifa.jpeg",
        description: "Experience the ultimate football simulation.",
        rating: "4.9/5",
        size: "4.4 GB",
        category: "Football • Sports",
        links: [
            "https://www.mediafire.com/file/lrahi23ghicyk00/data.rar/file",
            "https://www.mediafire.com/file/h7bkoro46k3aope/obb.rar/file",
            "https://www.mediafire.com/file/a633irr1qjx6vtl/EA_FC_MOD_26_BY_ZEOL.apk/file"
        ]
    },
    "14": {
        name: "DEAD TO RIGHT PSP",
        pin: "697775",
        image: "dead.jpeg",
        description: "Intense action-adventure game for PSP.",
        rating: "4.7/5",
        size: "100 MB",
        category: "Action • Adventure",
        links: [
            "https://www.mediafire.com/file/377a674hls5m492/Dead_to_Rights_-_Reckoning_%2528USA%2529.zip/file"
        ]
    },
    "15": {
        name: "SOULCALIBUR PSP",
        pin: "161600",
        image: "so.png",
        description: "Classic fighting game for PSP.",
        rating: "2.9/5",
        size: "400 MB",
        category: "Fighting",
        links: [
            "https://sto.romsfast.com/PSP-Complete/Redump/Soulcalibur%20-%20Broken%20Destiny%20(Europe)%20(EnJaFrDeEsItRu).zip"
        ]
    },
    "16": {
        name: "MARVEL NEMESIS PSP",
        pin: "770717",
        image: "ma.png",
        description: "Marvel superhero fighting game for PSP.",
        rating: "2.9/5",
        size: "100 MB",
        category: "Fighting",
        links: [
            "https://sto.romsfast.com/PSP-Complete/Redump/Marvel%20Nemesis%20-%20Rise%20of%20the%20Imperfects%20(Europe)%20(EnFrDeIt).zip"
        ]
    },
    "17": {
        name: "GTA V DEFINITY EDITION",
        pin: "181818",
        image: "g.png",
        description: "Enhanced version of GTA V.",
        rating: "4.9/5",
        size: "500 MB",
        category: "Action • Open World",
        links: [
            "https://play.google.com/store/apps/details?id=com.rockstargames.gta3.de"
        ]
    },
    "18": {
        name: "T8 Mod PSP",
        pin: "196679",
        image: "t8.jpg",
        description: "Enhanced Tekken 8 experience for PSP with modded gameplay and characters.",
        rating: "4.8/5",
        size: "850 MB",
        category: "Fighting • Modded",
        links: [
            "https://www.mediafire.com/file/sample/file.zip"
        ]                                                                                            
    },  // Add this with the other games in GAME_DATA object
"19": {
    name: "SHADOW GUN",
    pin: "202020",
    image: "shadowgun.jpg",
    description: "Experience intense third-person shooter combat with stunning graphics and immersive gameplay.",
    rating: "4.7/5",
    size: "1.8 GB",
    category: "Shooter • Action",
    links: [
        "https://www.mediafire.com/file/yzorzzvrgv8t48d/SHADOWGUN_1.7.0-Max_Gfx-140Fps.apk/file"
    ]
	
	},
	"20": {
    name: "COD PSP",
    pin: "000001",
    image: "call.jpg",
    description: "Experience intense third-person shooter combat with stunning graphics and immersive gameplay.",
    rating: "4.7/5",
    size: "300 MB",
    category: "Shooter • Action",
    links: [
        "https://www.mediafire.com/file/42cngwlqkyaevy4/Call_of_Duty_-_Roads_to_Victory_%2528Europe%2529.7z/file?dkey=5bajgkxsofb&r=201"
    ]
	},
	"21": {
    name: "MORTAL COMBAT PSP",
    pin: "165409",
    image: "mat.jpg",
    description: "Experience intense third-person Fighting agaist other combat with stunning graphics and immersive gameplay",
    rating: "4.7/5",
    size: "600 MB",
    category: "Fighting",
    links: [
        "https://www.mediafire.com/file/par831qvb13r6mm/elkingofthemusicall%252C_Inc.rar/file"
    ]
	},
	"22": {
    name: "UNBROKEN SURVIVAL",
    pin: "160009",
    image: "bro.jpg",
    description: "Enter If you dare. Survive the unthinkable. Outlast the rest",
    rating: "5/5",
    size: "3.29 GB",
    category: "Fighting",
    links: [
        "https://dl.apkvision.org/unbroken-survival/Unbroken-Survival-v0.2.2-full-apkvision.apk"
    ]
	},
	"23": {
    name: "SUBWAY HACKED",
    pin: "161645",
    image: "sub.jpg",
    description: "Run till the End.long way unlimited coins",
    rating: "3/5",
    size: "230 MB",
    category: "Running",
    links: [
        "https://www.mediafire.com/file/z9vnsdhkrg7kz1t/Subway-surfers-v3.56.13-mod-RisTechy.com.apk/file?dkey=95b59o75kyg&r=1324"
    ]
	
}
};

// ==================== GAME CARDS RENDERER ====================
function renderGameCards() {
    const gamesContainer = document.getElementById('games-container');
    if (!gamesContainer) return;
    
    gamesContainer.innerHTML = '';
    
    Object.keys(GAME_DATA).forEach(gameId => {
        const game = GAME_DATA[gameId];
        
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.setAttribute('data-game-id', gameId);
        gameCard.setAttribute('data-game', game.name.toLowerCase());
        
        gameCard.innerHTML = `
            <div class="card-front">
                <img src="${game.image}" alt="${game.name}" class="game-img" onerror="this.src='https://via.placeholder.com/300x200/1a1a2e/ffffff?text=${game.name}'">
                <div class="game-content">
                    <h3 class="game-title">${game.name} <span class="pin-badge">🔐 PIN</span></h3>
                    <p class="game-description">${game.description}</p>
                    <div class="game-meta">
                        <span><i class="fas fa-star"></i> ${game.rating}</span>
                        <span><i class="fas fa-download"></i> ${game.size}</span>
                        <span class="game-category">${game.category}</span>
                    </div>
                    <div class="download-container">
                        <button class="download-btn" onclick="openPinInterface('${gameId}')">
                            <i class="fas fa-lock"></i> Enter PIN to Download
                        </button>
                    </div>
                </div>
            </div>
            <div class="card-back">
                <div class="pin-interface" id="pin-interface-${gameId}">
                    <div class="pin-icon">🔒</div>
                    <h3 class="pin-title">Enter PIN to Download ${game.name}</h3>
                    <p style="color: #666; margin-bottom: 20px; font-size: 14px;">Enter the correct 6-digit PIN</p>
                    <div class="pin-input-container">
                        <input type="password" class="pin-dot-input" id="pinInput-${gameId}" 
                               maxlength="6" placeholder="Enter 6-digit PIN">
                    </div>
                    <div class="pin-error" id="pin-error-${gameId}"></div>
                    <div class="pin-success" id="pin-success-${gameId}"></div>
                    <div class="pin-actions">
                        <button class="unlock-btn" id="unlock-btn-${gameId}" onclick="validatePin('${gameId}')">
                            <i class="fas fa-key"></i> Unlock & Download
                        </button>
                        <button class="back-btn" onclick="closeInterface('${gameId}')">
                            <i class="fas fa-arrow-left"></i> Back
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        gamesContainer.appendChild(gameCard);
        
        // Add input listener
        const pinInput = document.getElementById(`pinInput-${gameId}`);
        if (pinInput) {
            pinInput.addEventListener('input', function() {
                this.value = this.value.replace(/\D/g, '').slice(0, 6);
                const errorEl = document.getElementById(`pin-error-${gameId}`);
                if (errorEl) {
                    errorEl.textContent = '';
                    errorEl.classList.remove('show');
                }
            });
        }
    });
    
    console.log(`✅ Rendered ${Object.keys(GAME_DATA).length} game cards`);
}

// ==================== PIN FUNCTIONS ====================
let currentExpandedCard = null;

function openPinInterface(gameId) {
    console.log(`🎮 Opening PIN for game ${gameId}`);
    
    // Close previous card
    if (currentExpandedCard && currentExpandedCard !== gameId) {
        closeInterface(currentExpandedCard);
    }
    
    const card = document.querySelector(`[data-game-id="${gameId}"]`);
    if (!card) return;
    
    // Expand card
    card.classList.add('expanded');
    currentExpandedCard = gameId;
    
    // Focus input and clear it
    setTimeout(() => {
        const pinInput = document.getElementById(`pinInput-${gameId}`);
        if (pinInput) {
            pinInput.value = '';
            pinInput.focus();
        }
        
        // Clear messages
        const errorEl = document.getElementById(`pin-error-${gameId}`);
        const successEl = document.getElementById(`pin-success-${gameId}`);
        if (errorEl) {
            errorEl.textContent = '';
            errorEl.classList.remove('show');
        }
        if (successEl) successEl.textContent = '';
    }, 100);
}

function closeInterface(gameId) {
    const card = document.querySelector(`[data-game-id="${gameId}"]`);
    if (card) {
        card.classList.remove('expanded');
        if (currentExpandedCard === gameId) {
            currentExpandedCard = null;
        }
    }
}

function validatePin(gameId) {
    const pinInput = document.getElementById(`pinInput-${gameId}`);
    const errorEl = document.getElementById(`pin-error-${gameId}`);
    const successEl = document.getElementById(`pin-success-${gameId}`);
    const unlockBtn = document.getElementById(`unlock-btn-${gameId}`);
    
    if (!pinInput) return;
    
    const enteredPin = pinInput.value.trim();
    
    // Clear messages
    if (errorEl) {
        errorEl.textContent = '';
        errorEl.classList.remove('show');
    }
    if (successEl) successEl.textContent = '';
    
    // Check PIN length
    if (enteredPin.length !== 6) {
        if (errorEl) {
            errorEl.textContent = '❌ PIN must be 6 digits';
            errorEl.classList.add('show');
        }
        return;
    }
    
    // Get correct PIN
    const game = GAME_DATA[gameId];
    if (!game) {
        if (errorEl) {
            errorEl.textContent = '❌ Game not found';
            errorEl.classList.add('show');
        }
        return;
    }
    
    const correctPin = game.pin;
    
    console.log(`🔐 PIN Check: Entered="${enteredPin}", Correct="${correctPin}"`);
    
    // Simple comparison
    if (enteredPin === correctPin) {
        console.log(`✅ PIN CORRECT for ${game.name}!`);
        
        // Show success
        if (successEl) {
            successEl.innerHTML = '<span class="pin-loading"></span> PIN verified! Loading downloads...';
        }
        
        if (unlockBtn) {
            unlockBtn.innerHTML = '<i class="fas fa-check"></i> Verified';
            unlockBtn.disabled = true;
        }
        
        // Show download options after delay
        setTimeout(() => {
            showDownloadOptions(gameId);
            if (successEl) {
                successEl.innerHTML = '✅ Select download option below';
            }
        }, 1000);
        
    } else {
        console.log(`❌ PIN WRONG for ${game.name}!`);
        
        // Show error
        if (errorEl) {
            errorEl.textContent = '❌ Wrong PIN! Try again';
            errorEl.classList.add('show');
        }
        
        // Shake animation
        const card = document.querySelector(`[data-game-id="${gameId}"]`);
        if (card) {
            card.style.animation = 'shake 0.5s';
            setTimeout(() => {
                card.style.animation = '';
            }, 500);
        }
        
        // Clear input
        setTimeout(() => {
            pinInput.value = '';
            pinInput.focus();
        }, 300);
    }
}

function showDownloadOptions(gameId) {
    const pinInterface = document.getElementById(`pin-interface-${gameId}`);
    if (!pinInterface) return;
    
    const game = GAME_DATA[gameId];
    if (!game) return;
    
    const links = game.links || [];
    
    if (links.length === 0) {
        const errorEl = document.getElementById(`pin-error-${gameId}`);
        if (errorEl) {
            errorEl.textContent = '❌ No download links available';
            errorEl.classList.add('show');
        }
        return;
    }
    
    console.log(`📥 Showing ${links.length} download links for ${game.name}`);
    
    // Get link names based on game
    function getLinkName(gameId, index) {
        const linkNames = {
            "1": ["Emulator APK", "Game ISO"],			
            "2": ["Emulator APK", "Game ISO"],
			"4": ["COMING SOON","COMING SOON"],
			"5": ["PIN 2 ON UTUBE"],
			"6": ["PN 2 DM"],
			"7": ["PIN 2 DM"],
            "8": ["CPU-Z App", "POWER VR GRPH", "ADERNO GRPH", "MALI GRPH"],
            "9": ["Game APK", "OBB Data"],
            "11": ["Game OBB", "Game APK"],
            "13": ["Game Data", "OBB File", "Game APK"]
        };
        
        return linkNames[gameId] && linkNames[gameId][index] 
            ? linkNames[gameId][index] 
            : `Download ${index + 1}`;
    }
    
    pinInterface.innerHTML = `
        <div class="download-icon">🎮</div>
        <h3 class="download-title">Download ${game.name}</h3>
        <p style="color: #666; margin-bottom: 20px; font-size: 14px;">Select download option:</p>
        
        <div class="download-options-container">
            ${links.map((link, index) => `
                <button class="download-option-btn ${index % 2 === 0 ? '' : 'secondary'}" 
                        onclick="startDownload('${gameId}', ${index})">
                    <i class="fas fa-download"></i> ${getLinkName(gameId, index)}
                </button>
            `).join('')}
        </div>
        
        <div class="pin-actions">
            <button class="back-btn" onclick="goBackToPin('${gameId}')">
                <i class="fas fa-arrow-left"></i> Back to PIN
            </button>
            <button class="back-btn" onclick="closeInterface('${gameId}')" style="margin-top: 10px;">
                <i class="fas fa-times"></i> Close
            </button>
        </div>
    `;
}

function startDownload(gameId, linkIndex) {
    const game = GAME_DATA[gameId];
    if (!game || !game.links || linkIndex >= game.links.length) {
        alert("Download link not available.");
        return;
    }
    
    const link = game.links[linkIndex];
    console.log(`⬇️ Opening download: ${link}`);
    
    // Open in new tab
    window.open(link, '_blank');
    
    // Show success message
    const optionsContainer = document.querySelector(`#pin-interface-${gameId} .download-options-container`);
    if (optionsContainer) {
        const successMsg = document.createElement('div');
        successMsg.style.color = '#00b894';
        successMsg.style.textAlign = 'center';
        successMsg.style.marginTop = '10px';
        successMsg.style.fontSize = '14px';
        successMsg.innerHTML = '✅ Download started in new tab!';
        optionsContainer.appendChild(successMsg);
        
        setTimeout(() => {
            if (successMsg.parentNode) {
                successMsg.parentNode.removeChild(successMsg);
            }
        }, 3000);
    }
}

function goBackToPin(gameId) {
    const pinInterface = document.getElementById(`pin-interface-${gameId}`);
    if (!pinInterface) return;
    
    const game = GAME_DATA[gameId];
    if (!game) return;
    
    pinInterface.innerHTML = `
        <div class="pin-icon">🔒</div>
        <h3 class="pin-title">Enter PIN to Download ${game.name}</h3>
        <p style="color: #666; margin-bottom: 20px; font-size: 14px;">Enter the correct 6-digit PIN</p>
        <div class="pin-input-container">
            <input type="password" class="pin-dot-input" id="pinInput-${gameId}" 
                   maxlength="6" placeholder="Enter 6-digit PIN">
        </div>
        <div class="pin-error" id="pin-error-${gameId}"></div>
        <div class="pin-success" id="pin-success-${gameId}"></div>
        <div class="pin-actions">
            <button class="unlock-btn" id="unlock-btn-${gameId}" onclick="validatePin('${gameId}')">
                <i class="fas fa-key"></i> Unlock & Download
            </button>
            <button class="back-btn" onclick="closeInterface('${gameId}')">
                <i class="fas fa-arrow-left"></i> Back
            </button>
        </div>
    `;
    
    // Re-add input listener
    const pinInput = document.getElementById(`pinInput-${gameId}`);
    if (pinInput) {
        pinInput.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '').slice(0, 6);
            const errorEl = document.getElementById(`pin-error-${gameId}`);
            if (errorEl) {
                errorEl.textContent = '';
                errorEl.classList.remove('show');
            }
        });
        pinInput.focus();
    }
}

// ==================== MAIN PAGE ====================
function initializeMainPage() {
    console.log('🚀 Initializing main page...');
    
    // Render games
    renderGameCards();
    
    // Settings modal
    document.getElementById('open-settings').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('settings-modal').classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    document.getElementById('close-settings').addEventListener('click', function() {
        document.getElementById('settings-modal').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    document.getElementById('save-settings').addEventListener('click', function() {
        // Save theme
        const activeTheme = document.querySelector('.theme-option.active');
        if (activeTheme) {
            const theme = activeTheme.dataset.theme;
            if (theme === 'dark') {
                document.body.classList.remove('light-theme');
                document.body.classList.add('dark-theme');
            } else {
                document.body.classList.remove('dark-theme');
                document.body.classList.add('light-theme');
            }
            localStorage.setItem('aplay-theme', theme);
        }
        
        // Save other settings
        const settings = {
            vibration: document.getElementById('vibration-toggle').checked,
            blinking: document.getElementById('blinking-toggle').checked,
            autoScroll: document.getElementById('scrolling-toggle').checked,
            autoMusic: document.getElementById('music-toggle').checked,
            soundEffects: document.getElementById('sound-toggle').checked
        };
        localStorage.setItem('aplay-settings', JSON.stringify(settings));
        
        // Show notification
        const notification = document.createElement('div');
        notification.innerHTML = '<i class="fas fa-check"></i> Settings saved!';
        notification.style.cssText = 'position:fixed;top:80px;right:20px;background:#00ccff;color:white;padding:15px 25px;border-radius:10px;z-index:1000;';
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
        
        document.getElementById('settings-modal').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('aplay-theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        document.querySelector('[data-theme="dark"]').classList.add('active');
        document.querySelector('[data-theme="light"]').classList.remove('active');
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        document.querySelector('[data-theme="light"]').classList.add('active');
        document.querySelector('[data-theme="dark"]').classList.remove('active');
    }
    
    // Theme selection
    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Search functionality
    const searchBox = document.getElementById('search-box');
    if (searchBox) {
        searchBox.addEventListener('input', function() {
            const term = this.value.toLowerCase().trim();
            const cards = document.querySelectorAll('.game-card');
            
            if (term === '') {
                cards.forEach(card => {
                    card.style.display = 'block';
                });
                return;
            }
            
            cards.forEach(card => {
                const gameName = card.getAttribute('data-game').toLowerCase();
                const title = card.querySelector('.game-title').textContent.toLowerCase();
                
                if (gameName.includes(term) || title.includes(term)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    // Music control
    const musicBtn = document.getElementById('music-btn');
    const backgroundMusic = document.getElementById('background-music');
    if (musicBtn && backgroundMusic) {
        backgroundMusic.volume = 0.3;
        
        // Check auto-music setting
        const savedSettings = JSON.parse(localStorage.getItem('aplay-settings') || '{}');
        if (savedSettings.autoMusic !== false) {
            setTimeout(() => {
                backgroundMusic.play().catch(e => {
                    console.log('Auto-play blocked. Click music button to play.');
                });
            }, 1000);
        }
        
        musicBtn.addEventListener('click', function() {
            if (backgroundMusic.paused) {
                backgroundMusic.play();
                this.innerHTML = '<i class="fas fa-pause"></i>';
                this.classList.add('playing');
            } else {
                backgroundMusic.pause();
                this.innerHTML = '<i class="fas fa-music"></i>';
                this.classList.remove('playing');
            }
        });
    }
    
    // AI Assistant
    const aiInput = document.getElementById('ai-input');
    const aiSend = document.getElementById('ai-send');
    const aiChatBox = document.getElementById('ai-chat-box');
    
    if (aiInput) aiInput.style.color = '#FFD700';
    
    if (aiSend && aiInput && aiChatBox) {
        aiSend.addEventListener('click', function() {
            const message = aiInput.value.trim();
            if (!message) return;
            
            // Add user message
            const userMsg = document.createElement('div');
            userMsg.className = 'ai-message';
            userMsg.style.background = 'rgba(255, 140, 0, 0.2)';
            userMsg.innerHTML = `<p><strong>You:</strong> ${message}</p>`;
            aiChatBox.appendChild(userMsg);
            
            // Simple AI responses
            let response = "I can help with game downloads, PINs, and general questions.";
            const lowerMsg = message.toLowerCase();
            
            if (lowerMsg.includes('pin') || lowerMsg.includes('password')) {
                response = "All games require a 6-digit PIN. Example: GOD HAND = 111111, GOD OF WAR = 222222";
            } else if (lowerMsg.includes('download')) {
                response = "Click any game, enter the correct PIN, then select a download option.";
            } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
                response = "Hello! Welcome to aPLAY Gaming Hub! How can I help you?";
            } else if (lowerMsg.includes('contact')) {
                response = "Contact via WhatsApp: +255 691009179 or YouTube: aPLAY Channel";
            }
            
            // Add AI response
            setTimeout(() => {
                const aiMsg = document.createElement('div');
                aiMsg.className = 'ai-message';
                aiMsg.innerHTML = `<p><strong>AI:</strong> ${response}</p>`;
                aiChatBox.appendChild(aiMsg);
                aiChatBox.scrollTop = aiChatBox.scrollHeight;
                
                // Update question count
                const questionCount = document.getElementById('question-count');
                if (questionCount) {
                    const count = parseInt(questionCount.textContent) + 1;
                    questionCount.textContent = count;
                }
            }, 500);
            
            aiInput.value = '';
        });
        
        aiInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') aiSend.click();
        });
    }
    
    // Update visitor stats
    setInterval(() => {
        const visitorCount = document.getElementById('visitor-count');
        const downloadCount = document.getElementById('download-count');
        
        if (visitorCount) {
            let visitors = parseInt(visitorCount.textContent.replace(/,/g, '')) || 12847;
            visitors += Math.floor(Math.random() * 3);
            visitorCount.textContent = visitors.toLocaleString();
        }
        
        if (downloadCount) {
            let downloads = parseInt(downloadCount.textContent.replace(/,/g, '')) || 8429;
            downloads += Math.floor(Math.random() * 2);
            downloadCount.textContent = downloads.toLocaleString();
        }
    }, 5000);
    
    // Welcome notification
    setTimeout(() => {
        const notification = document.createElement('div');
        notification.innerHTML = '<i class="fas fa-gamepad"></i> Welcome to aPLAY! Test PIN: GOD HAND = 111111';
        notification.style.cssText = 'position:fixed;top:80px;right:20px;background:linear-gradient(to right, #ff0080, #ff8c00);color:white;padding:15px 25px;border-radius:10px;z-index:1000;font-weight:600;';
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 5000);
    }, 1000);
    
    console.log('✅ Main page initialized successfully');
}

// ==================== DEBUG HELPERS ====================
window.testPIN = function(gameId, pin) {
    const game = GAME_DATA[gameId];
    if (!game) {
        console.log(`❌ Game ${gameId} not found`);
        return false;
    }
    
    const correct = game.pin;
    const result = pin === correct;
    console.log(`Game ${gameId} (${game.name}): ${result ? '✅ Correct' : '❌ Wrong'} (Entered: ${pin}, Correct: ${correct})`);
    return result;
};

window.showGameInfo = function(gameId) {
    const game = GAME_DATA[gameId];
    if (game) {
        console.log(`Game ${gameId}: ${game.name}`);
        console.log(`PIN: ${game.pin}`);
        console.log(`Links:`, game.links);
    } else {
        console.log(`Game ${gameId} not found`);
    }
};
