// JavaScript for Drivehub Website

document.addEventListener('DOMContentLoaded', function() {
    // Language selector functionality
    const initLanguageSelector = () => {
        const languageOptions = document.querySelectorAll('.language-option');
        
        languageOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                const selectedLang = this.getAttribute('data-lang');
                const selectedText = this.querySelector('span').textContent;
                const selectedFlag = this.querySelector('img').src;
                
                // Update current language display
                const currentLang = document.querySelector('.current-language');
                const currentSpan = currentLang.querySelector('.lang-text');
                const currentImg = currentLang.querySelector('.flag-icon');
                
                currentSpan.textContent = selectedText;
                currentImg.src = selectedFlag;
                
                // Change page language
                changeLanguage(selectedLang);
            });
        });
    };

    // Language switching function
    const changeLanguage = (lang) => {
        console.log('Changing language to:', lang);
        
        if (lang === 'en') {
            alert('Switching to English... (This is a demo)');
        } else if (lang === 'th') {
            alert('เปลี่ยนเป็นภาษาไทย... (นี่เป็นตัวอย่าง)');
        }
    };

    // Initialize language selector
    initLanguageSelector();

    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get the tab type
            const tabType = this.getAttribute('data-tab');
            
            // Update content based on tab
            updateContentForTab(tabType);
        });
    });
    
    // Function to update content based on selected tab
    const updateContentForTab = (tabType) => {
        const heroTitle = document.getElementById('hero-title');
        const heroSubtitle = document.getElementById('hero-subtitle');
        const locationLabel = document.getElementById('location-label');
        const locationText = document.getElementById('location-text');
        const pickupLabel = document.getElementById('pickup-label');
        const returnLabel = document.getElementById('return-label');
        
        if (tabType === 'self-drive') {
            // Self-drive content
            heroTitle.textContent = 'ค้นหารถเช่าราคาถูกที่สุด';
            heroSubtitle.textContent = 'รถเช่า เริ่มต้นเพียง 550 บาท';
            locationLabel.textContent = 'จุดรับ-คืนรถ';
            locationText.textContent = 'โปรดเลือกจุดรับ-คืนรถ';
            pickupLabel.textContent = 'วัน-เวลารับรถ';
            returnLabel.textContent = 'วัน-เวลาคืนรถ';
        } else if (tabType === 'with-driver') {
            // With driver content
            heroTitle.textContent = 'ค้นหารถเช่าราคาถูกที่สุด';
            heroSubtitle.textContent = 'รถเช่า เริ่มต้นเพียง 550 บาท';
            locationLabel.textContent = 'จุดรับผู้โดยสาร';
            locationText.textContent = 'สนามบินดอนเมือง';
            pickupLabel.textContent = 'วัน-เวลารับ';
            returnLabel.textContent = 'วัน-เวลากลับ';
        }
    };

    // Search form functionality
    const searchForm = document.querySelector('.search-form');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Get form data
            const formData = new FormData();
            const inputs = searchForm.querySelectorAll('input, select');
            
            inputs.forEach(input => {
                if (input.value) {
                    formData.append(input.previousElementSibling.textContent, input.value);
                }
            });
            
            // Simulate search (you can replace this with actual API call)
            console.log('Searching for cars...', Object.fromEntries(formData));
            alert('กำลังค้นหารถเช่า... (นี่เป็นตัวอย่าง)');
        });
    }

    // Booking check functionality
    const checkForm = document.querySelector('.check-form');
    const checkBtn = document.querySelector('.check-input button');
    
    if (checkBtn) {
        checkBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const bookingCode = document.querySelector('.check-input input').value;
            
            if (bookingCode.trim() === '') {
                alert('กรุณากรอกรหัสการจอง');
                return;
            }
            
            // Simulate booking check (you can replace this with actual API call)
            console.log('Checking booking:', bookingCode);
            alert(`กำลังตรวจสอบการจอง: ${bookingCode} (นี่เป็นตัวอย่าง)`);
        });
    }

    // Smooth scrolling for anchor links
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

    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .promotion-card, .section-header').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Mobile menu functionality
    const initMobileMenu = () => {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileMenuClose = document.querySelector('.mobile-menu-close');
        const mobileDropdowns = document.querySelectorAll('.mobile-nav .dropdown');

        // Toggle mobile menu
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', function() {
                mobileMenu.classList.add('active');
                mobileMenuToggle.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        }

        // Close mobile menu
        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        // Close mobile menu when clicking outside
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Mobile dropdown functionality
        mobileDropdowns.forEach(dropdown => {
            const dropdownToggle = dropdown.querySelector('a');
            const dropdownMenu = dropdown.querySelector('.mobile-dropdown-menu');

            dropdownToggle.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
                
                if (dropdown.classList.contains('active')) {
                    dropdownMenu.classList.add('active');
                } else {
                    dropdownMenu.classList.remove('active');
                }
            });
        });
    };

    // Initialize mobile menu
    initMobileMenu();

    // Add sample car data for demonstration
    const addSampleCars = () => {
        const carGrid = document.querySelector('.car-grid');
        if (!carGrid) return;

            const sampleCars = [
            {
                name: 'Toyota Camry',
                price: '1,200',
                image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzAwNzhGRiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VG95b3RhIENhbXJ5PC90ZXh0Pjwvc3ZnPg==',
                features: ['4 ที่นั่ง', 'แอร์', 'GPS']
            },
            {
                name: 'Honda Civic',
                price: '1,000',
                image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzAwNzhGRiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SG9uZGEgQ2l2aWM8L3RleHQ+PC9zdmc+',
                features: ['4 ที่นั่ง', 'แอร์', 'Bluetooth']
            },
            {
                name: 'Nissan Almera',
                price: '900',
                image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzAwNzhGRiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Tmlzc2FuIEFsbWVyYTwvdGV4dD48L3N2Zz4=',
                features: ['4 ที่นั่ง', 'แอร์', 'USB']
            }
        ];

        sampleCars.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'car-card';
            carCard.innerHTML = `
                <div class="car-image">
                    <img src="${car.image}" alt="${car.name}">
                </div>
                <div class="car-info">
                    <h3>${car.name}</h3>
                    <div class="car-price">฿${car.price}/วัน</div>
                    <div class="car-features">
                        ${car.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                    </div>
                    <button class="book-btn">จองเลย</button>
                </div>
            `;
            carGrid.appendChild(carCard);
        });

        // Add car card styles
        const carStyles = `
            .car-card {
                background: white;
                border-radius: 15px;
                overflow: hidden;
                box-shadow: 0 5px 20px rgba(0,0,0,0.1);
                transition: transform 0.3s;
            }
            
            .car-card:hover {
                transform: translateY(-5px);
            }
            
            .car-image img {
                width: 100%;
                height: 200px;
                object-fit: cover;
            }
            
            .car-info {
                padding: 20px;
            }
            
            .car-info h3 {
                font-size: 20px;
                font-weight: 600;
                margin-bottom: 10px;
                color: #333;
            }
            
            .car-price {
                font-size: 24px;
                font-weight: 700;
                color: #0078FF;
                margin-bottom: 15px;
            }
            
            .car-features {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-bottom: 20px;
            }
            
            .feature-tag {
                background: #f8f9fa;
                color: #666;
                padding: 4px 8px;
                border-radius: 12px;
                font-size: 12px;
            }
            
            .book-btn {
                width: 100%;
                background: #0078FF;
                color: white;
                border: none;
                padding: 12px;
                border-radius: 8px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: background 0.3s;
            }
            
            .book-btn:hover {
                background: #0056CC;
            }
        `;
        
        const carStyleSheet = document.createElement('style');
        carStyleSheet.textContent = carStyles;
        document.head.appendChild(carStyleSheet);
    };

    // Add sample partners
    const addSamplePartners = () => {
        const partnersGrid = document.querySelector('.partners-grid');
        if (!partnersGrid) return;

        const partners = [
            'Avis', 'Budget', 'Hertz', 'Enterprise', 'National', 'Alamo'
        ];

        partners.forEach(partner => {
            const partnerCard = document.createElement('div');
            partnerCard.className = 'partner-card';
            partnerCard.innerHTML = `
                <div class="partner-logo">
                    <span>${partner}</span>
                </div>
            `;
            partnersGrid.appendChild(partnerCard);
        });

        // Add partner styles
        const partnerStyles = `
            .partner-card {
                background: white;
                border-radius: 10px;
                padding: 30px;
                text-align: center;
                box-shadow: 0 3px 10px rgba(0,0,0,0.1);
                transition: transform 0.3s;
            }
            
            .partner-card:hover {
                transform: translateY(-3px);
            }
            
            .partner-logo {
                font-size: 18px;
                font-weight: 600;
                color: #333;
            }
        `;
        
        const partnerStyleSheet = document.createElement('style');
        partnerStyleSheet.textContent = partnerStyles;
        document.head.appendChild(partnerStyleSheet);
    };

    // Add sample regions
    const addSampleRegions = () => {
        const regionsGrid = document.querySelector('.regions-grid');
        if (!regionsGrid) return;

        const regions = [
            { name: 'กรุงเทพฯ', count: '150+ รถ' },
            { name: 'เชียงใหม่', count: '80+ รถ' },
            { name: 'ภูเก็ต', count: '60+ รถ' },
            { name: 'พัทยา', count: '40+ รถ' },
            { name: 'ขอนแก่น', count: '30+ รถ' },
            { name: 'อุดรธานี', count: '25+ รถ' }
        ];

        regions.forEach(region => {
            const regionCard = document.createElement('div');
            regionCard.className = 'region-card';
            regionCard.innerHTML = `
                <h3>${region.name}</h3>
                <p>${region.count}</p>
            `;
            regionsGrid.appendChild(regionCard);
        });

        // Add region styles
        const regionStyles = `
            .region-card {
                background: white;
                border-radius: 15px;
                padding: 30px;
                text-align: center;
                box-shadow: 0 5px 20px rgba(0,0,0,0.1);
                transition: transform 0.3s;
                cursor: pointer;
            }
            
            .region-card:hover {
                transform: translateY(-5px);
            }
            
            .region-card h3 {
                font-size: 20px;
                font-weight: 600;
                color: #333;
                margin-bottom: 10px;
            }
            
            .region-card p {
                color: #0078FF;
                font-weight: 500;
            }
        `;
        
        const regionStyleSheet = document.createElement('style');
        regionStyleSheet.textContent = regionStyles;
        document.head.appendChild(regionStyleSheet);
    };

    // Location dropdown functionality
    function initLocationDropdown() {
        const locationPicker = document.getElementById('location-picker');
        const locationDropdown = document.getElementById('location-dropdown');
        const hiddenSelect = document.getElementById('pickup-location');
        const locationText = document.getElementById('location-text');

        if (!locationPicker || !locationDropdown) return;

        // Initialize displayed text from current select value
        if (hiddenSelect && locationText) {
            const initial = hiddenSelect.options[hiddenSelect.selectedIndex]?.text || '';
            if (initial) locationText.textContent = initial;
        }

        // Open location dropdown when clicking location picker
        locationPicker.addEventListener('click', function(e) {
            e.stopPropagation();
            if (locationDropdown.classList.contains('show')) {
                locationDropdown.classList.remove('show');
                setTimeout(() => { locationDropdown.style.display = 'none'; }, 200);
            } else {
                locationDropdown.style.display = 'block';
                setTimeout(() => { locationDropdown.classList.add('show'); }, 10);
            }
        });

        // Location dropdown functionality
        
        // Close location dropdown
        function closeLocationDropdown() {
            locationDropdown.classList.remove('show');
            setTimeout(() => {
                locationDropdown.style.display = 'none';
            }, 300);
        }

        // Location option selection
        const locationOptions = document.querySelectorAll('.location-option');
        locationOptions.forEach(option => {
            option.addEventListener('click', function() {
                const location = this.getAttribute('data-location');
                
                // Update location text
                locationText.textContent = location;
                
                // Sync hidden select value for form submission
                if (hiddenSelect) {
                    hiddenSelect.value = location;
                    hiddenSelect.dispatchEvent(new Event('change'));
                }

                // Update selected state
                locationOptions.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
                
                // Close dropdown
                closeLocationDropdown();
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!locationPicker.contains(e.target) && !locationDropdown.contains(e.target)) {
                closeLocationDropdown();
            }
        });
    }

    // Initialize sample data
    addSampleCars();
    addSamplePartners();
    addSampleRegions();
    
    // Initialize default tab content
    updateContentForTab('self-drive');

    // Initialize location dropdown functionality
    initLocationDropdown();
    
    // Initialize scroll indicator functionality
    initScrollIndicator();

    // Initialize date picker functionality
    initDatePickerFunctionality();

    // Add click handlers for booking buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('book-btn')) {
            e.preventDefault();
            alert('กำลังนำไปยังหน้าจอง... (นี่เป็นตัวอย่าง)');
        }
    });

    // Add click handlers for region cards
    document.addEventListener('click', function(e) {
        if (e.target.closest('.region-card')) {
            const regionName = e.target.closest('.region-card').querySelector('h3').textContent;
            alert(`กำลังค้นหารถเช่าใน${regionName}... (นี่เป็นตัวอย่าง)`);
        }
    });

    console.log('Drivehub website initialized successfully!');
});

// Global function to toggle location dropdown
function toggleLocationDropdown(e) {
    e && e.stopPropagation();
    const dropdown = document.getElementById('location-dropdown');
    const picker = document.getElementById('location-picker');
    if (!dropdown || !picker) {
        console.log('Elements not found!');
        return;
    }
    
    console.log('Toggling dropdown...', dropdown.style.display, dropdown.classList.contains('show'));
    
    if (dropdown.classList.contains('show')) {
        // Close dropdown
        dropdown.classList.remove('show');
        setTimeout(() => { 
            dropdown.style.display = 'none'; 
            console.log('Dropdown closed');
        }, 200);
    } else {
        // Open dropdown
        dropdown.style.display = 'block';
        dropdown.style.opacity = '0';
        dropdown.style.visibility = 'hidden';
        dropdown.style.transform = 'translateY(-10px)';
        
        setTimeout(() => { 
            dropdown.classList.add('show');
            console.log('Dropdown opened');
        }, 10);
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('location-dropdown');
    const picker = document.getElementById('location-picker');
    if (dropdown && picker && !picker.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
        setTimeout(() => { dropdown.style.display = 'none'; }, 200);
    }
});

// Handle location option selection
document.addEventListener('click', function(e) {
    if (e.target.closest('.location-option')) {
        const option = e.target.closest('.location-option');
        const location = option.getAttribute('data-location');
        const locationText = document.getElementById('location-text');
        const hiddenSelect = document.getElementById('pickup-location');
        
        if (locationText) locationText.textContent = location;
        if (hiddenSelect) {
            hiddenSelect.value = location;
            hiddenSelect.dispatchEvent(new Event('change'));
        }
        
        // Update selected state
        document.querySelectorAll('.location-option').forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        
        // Close dropdown
        const dropdown = document.getElementById('location-dropdown');
        if (dropdown) {
            dropdown.classList.remove('show');
            setTimeout(() => { dropdown.style.display = 'none'; }, 200);
        }
    }
});

// Date Picker functionality
let pickupDate = new Date(2025, 9, 12); // October 12, 2025
let returnDate = new Date(2025, 9, 14); // October 14, 2025
let pickupTime = '10:00';
let returnTime = '10:00';

function initDatePickerFunctionality() {
    console.log('Initializing date picker functionality...');
    // Initialize pickup date picker
    initDatePicker('pickup', pickupDate, pickupTime);
    
    // Initialize return date picker
    initDatePicker('return', returnDate, returnTime);
}

function initDatePicker(type, initialDate, initialTime) {
    console.log(`Initializing ${type} date picker...`);
    const picker = document.getElementById(`${type}-datetime-picker`);
    const modal = document.getElementById(`${type}-datetime-modal`);
    const closeBtn = document.getElementById(`${type}-close-btn`);
    const cancelBtn = document.getElementById(`${type}-cancel-btn`);
    const confirmBtn = document.getElementById(`${type}-confirm-btn`);
    const display = document.getElementById(`${type}-datetime-display`);
    const calendar = document.getElementById(`${type}-calendar`);
    const monthDisplay = document.getElementById(`${type}-month-display`);
    const prevBtn = document.getElementById(`${type}-prev-month`);
    const nextBtn = document.getElementById(`${type}-next-month`);
    const timeSelect = document.getElementById(`${type}-time-select`);

    console.log(`Picker element:`, picker);
    console.log(`Modal element:`, modal);
    
    if (!picker || !modal) {
        console.log(`Missing elements for ${type}: picker=${!!picker}, modal=${!!modal}`);
        return;
    }

    let currentDate = new Date(initialDate);
    let selectedDate = new Date(initialDate);

    // Open modal
    picker.addEventListener('click', function() {
        console.log('Date picker clicked:', type);
        modal.style.display = 'block';
        generateCalendar(type, currentDate, selectedDate);
    });

    // Close modal
    function closeModal() {
        modal.style.display = 'none';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentDate.setMonth(currentDate.getMonth() - 1);
            generateCalendar(type, currentDate, selectedDate);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentDate.setMonth(currentDate.getMonth() + 1);
            generateCalendar(type, currentDate, selectedDate);
        });
    }

    // Time display update
    const timeDisplay = document.getElementById(`${type}-time-display`);
    const timeValue = timeDisplay ? timeDisplay.querySelector('.time-value') : null;
    const timePickerModal = document.getElementById(`${type}-time-picker`);
    
    function updateTimeDisplay(time) {
        if (timeValue) timeValue.textContent = time;
        
        // Update time options
        const timeOptions = document.querySelectorAll(`#${type}-time-picker .time-option`);
        timeOptions.forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-time') === time) {
                option.classList.add('active');
            }
        });
        
        // Update suggestion buttons
        const suggestionBtns = document.querySelectorAll(`#${type}-datetime-modal .suggestion-btn`);
        suggestionBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-time') === time) {
                btn.classList.add('active');
            }
        });
    }

    // Open time picker
    if (timeDisplay) {
        timeDisplay.addEventListener('click', function() {
            if (timePickerModal) {
                timePickerModal.style.display = 'block';
                setTimeout(() => {
                    timePickerModal.classList.add('show');
                }, 10);
            }
        });
    }

    // Close time picker
    if (timePickerModal) {
        const timePickerClose = timePickerModal.querySelector('.time-picker-close');
        if (timePickerClose) {
            timePickerClose.addEventListener('click', function() {
                timePickerModal.classList.remove('show');
                setTimeout(() => {
                    timePickerModal.style.display = 'none';
                }, 300);
            });
        }
    }

    // Time option selection
    const timeOptions = document.querySelectorAll(`#${type}-time-picker .time-option`);
    timeOptions.forEach(option => {
        option.addEventListener('click', function() {
            const time = this.getAttribute('data-time');
            updateTimeDisplay(time);
            if (timePickerModal) {
                timePickerModal.classList.remove('show');
                setTimeout(() => {
                    timePickerModal.style.display = 'none';
                }, 300);
            }
        });
    });

    // Close time picker when clicking outside
    document.addEventListener('click', function(e) {
        if (timeDisplay && timePickerModal && !timeDisplay.contains(e.target) && !timePickerModal.contains(e.target)) {
            timePickerModal.classList.remove('show');
            setTimeout(() => {
                timePickerModal.style.display = 'none';
            }, 300);
        }
    });

    // Suggestion buttons
    const suggestionBtns = document.querySelectorAll(`#${type}-datetime-modal .suggestion-btn`);
    suggestionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const time = this.getAttribute('data-time');
            updateTimeDisplay(time);
        });
    });

    // Confirm selection
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function() {
            const time = timeValue ? timeValue.textContent : initialTime;
            const dateStr = formatDate(selectedDate);
            const timeStr = formatTime(time);
            
            if (display) display.textContent = `${dateStr} ${timeStr}`;
            
            // Update global variables
    if (type === 'pickup') {
                pickupDate = new Date(selectedDate);
                pickupTime = time;
    } else {
                returnDate = new Date(selectedDate);
                returnTime = time;
            }
            
            closeModal();
        });
    }
}

function generateCalendar(type, currentDate, selectedDate) {
    const calendar = document.getElementById(`${type}-calendar`);
    const monthDisplay = document.getElementById(`${type}-month-display`);
    
    if (!calendar || !monthDisplay) return;

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Update month display
    const monthNames = [
        'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
        'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
    ];
    monthDisplay.textContent = `${monthNames[month]} ${year}`;
    
    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    // Day headers
    const dayHeaders = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'];
    
    let calendarHTML = '';
    
    // Add day headers
    dayHeaders.forEach(day => {
        calendarHTML += `<div class="calendar-day-header">${day}</div>`;
    });
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
        const prevMonthDay = new Date(year, month, -startingDayOfWeek + i + 1);
        calendarHTML += `<div class="calendar-day other-month">${prevMonthDay.getDate()}</div>`;
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const isSelected = isSameDate(date, selectedDate);
        const isWeekend = date.getDay() === 0 || date.getDay() === 6;
        const isWeekday = date.getDay() >= 1 && date.getDay() <= 5;
        const isToday = isSameDate(date, new Date());
        
        let classes = 'calendar-day';
        if (isSelected) classes += ' selected';
        else if (isToday) classes += ' today';
        else if (isWeekend) classes += ' weekend';
        else if (isWeekday) classes += ' weekday';
        
        calendarHTML += `<div class="${classes}" data-date="${date.toISOString()}">${day}</div>`;
    }
    
    // Add empty cells for days after the last day of the month
    const remainingCells = 42 - (startingDayOfWeek + daysInMonth);
    for (let i = 1; i <= remainingCells; i++) {
        const nextMonthDay = new Date(year, month + 1, i);
        calendarHTML += `<div class="calendar-day other-month">${nextMonthDay.getDate()}</div>`;
    }

    calendar.innerHTML = calendarHTML;

    // Add click listeners to calendar days
    calendar.addEventListener('click', function(e) {
        if (e.target.classList.contains('calendar-day') && !e.target.classList.contains('other-month')) {
            const dateStr = e.target.getAttribute('data-date');
            if (dateStr) {
                selectedDate = new Date(dateStr);
                generateCalendar(type, currentDate, selectedDate);
            }
        }
    });
}

function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
    
function formatTime(time) {
    return `${time} น.`;
}

function isSameDate(date1, date2) {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
}

// Initialize scroll indicator functionality
function initScrollIndicator() {
    const scrollArrow = document.querySelector('.scroll-arrow');
    
    if (!scrollArrow) return;

    scrollArrow.addEventListener('click', function() {
        // Find the next section (promotions section)
        const promotionsSection = document.querySelector('.promotions');
        
        if (promotionsSection) {
            // Smooth scroll to promotions section
            promotionsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
        });
    }
});

    // Add scroll event listener to hide/show scroll indicator
    window.addEventListener('scroll', function() {
        const heroSection = document.querySelector('.hero');
        const scrollIndicator = document.querySelector('.scroll-indicator');
        
        if (heroSection && scrollIndicator) {
            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
            const scrollTop = window.pageYOffset;
            
            // Hide scroll indicator when user scrolls past hero section
            if (scrollTop > heroBottom - 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.transform = 'translateY(-20px)';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.transform = 'translateY(0)';
            }
        }
    });
}