var typed = new Typed("#typed", {
    strings: [
        "Automation",
        "3D Printed Houses",
        "Farming Technology",
        "Self-Driving Cars",
        "Warehouse Optimization",
        "Virtual Reality",
        "Healthcare Innovations",

    ],
    typeSpeed: 100,
    backSpeed: 85,
    loop: true,
});


var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);


function createCarousel() {
    var industriesCarousel = document.getElementById("carousel-industries");
    var itemCarousel = document.getElementById('carousel-items');
    var activeItems = industriesCarousel.getElementsByClassName("active");
    var activeOwlItems = [];

    for (let item of activeItems) {
        if (item.classList.contains("owl-item")) {
            activeOwlItems.push(item);
        }
    }
    var centerIndex = 0;
    if (vw > 1600) {
        centerIndex = 2;
    } else if (vw > 1200) {
        centerIndex = 1;
    }
    var currentItemActive =
        activeOwlItems[centerIndex].getElementsByClassName("item-active")[0];
    var currentItemNormal =
        activeOwlItems[centerIndex].getElementsByClassName("item-normal")[0];
    currentItemActive.style.display = "flex";
    currentItemNormal.style.display = "none";
    let videoTitle = "";
    let videoPath = "assets/video/";
    let poster = "assets/images/"
    console.log(currentItemActive.getElementsByClassName('item-title')[0].innerHTML);
    switch (currentItemActive.getElementsByClassName('item-title')[0].innerHTML) {
        case "Consumer":
            videoTitle = "5.mp4";
            poster += "5_Moment.jpg";
            break;
        case "Construction":
            videoTitle = "3.mp4";
            poster += "3_Moment.jpg";
            break;
        case "Agriculture":
            videoTitle = "3.mp4";
            poster += "3_Moment.jpg";
            break;
        case "Manufacturing":
            videoTitle = "2.mp4"
            poster += "2_Moment.jpg";
            break;
        case "Transportation":
            videoTitle = "4.mp4";
            poster += "4_Moment.jpg";
            break;
        case "Warehouse":
            videoTitle = "6.mp4";
            poster += "6_Moment.jpg";
            break;
        case "Healthcare":
            videoTitle = "3.mp4";
            poster += "3_Moment.jpg";
            break;
        case "Pick & Pack":
            videoTitle = "3.mp4";
            poster += "3_Moment.jpg";
            break;
        case "Virtual Reality":
            videoTitle = "2.mp4"
            poster += "2_Moment.jpg";
            break;
        case "Logistics":
            videoTitle = "4.mp4";
            poster += "4_Moment.jpg";
            break;
    }
    let video = document.getElementById('industry-video');
    video.setAttribute('poster', poster);
    videoPath += videoTitle;
    let source = document.getElementById('video-source');
    video.pause();
    source.src = videoPath;

    video.load();
    video.play();


    $('#carousel-industries .owl-next').click(function (event, status = true) {
        activeItems = industriesCarousel.getElementsByClassName("active");
        let owlItems = industriesCarousel.getElementsByClassName("owl-item");
        for (let owlItem of owlItems) {
            owlItem.getElementsByClassName("item-active")[0].style.display = 'none';
            owlItem.getElementsByClassName("item-normal")[0].style.display = 'flex';
        }
        activeOwlItems = [];
        for (let item of activeItems) {
            if (item.classList.contains("owl-item")) {
                activeOwlItems.push(item);
            }
        }

        if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 1600) {
            centerIndex = 2;

        } else if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 1200) {
            centerIndex = 1;
        } else {
            centerIndex = 0;
        }

        var newItemActive =
            activeOwlItems[centerIndex].getElementsByClassName("item-active")[0];
        var newItemNormal =
            activeOwlItems[centerIndex].getElementsByClassName("item-normal")[0];
        newItemActive.style.display = "flex";
        newItemNormal.style.display = "none";
        if (status) {
            itemCarousel.getElementsByClassName('owl-next')[0].click();
        }
    });

    // industriesCarousel.getElementsByClassName("owl-prev")[0].onclick =
    //   function (event,) {
    $('#carousel-industries .owl-prev').click(function (event, status = true) {
        let owlItems = industriesCarousel.getElementsByClassName("owl-item");
        for (let owlItem of owlItems) {
            owlItem.getElementsByClassName("item-active")[0].style.display = 'none';
            owlItem.getElementsByClassName("item-normal")[0].style.display = 'flex';
        }
        activeItems = industriesCarousel.getElementsByClassName("active");
        activeOwlItems = [];
        for (let item of activeItems) {
            if (item.classList.contains("owl-item")) {
                activeOwlItems.push(item);
            }
        }
        if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 1600) {
            centerIndex = 2;

        } else if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 1200) {
            centerIndex = 1;
        } else {
            centerIndex = 0;
        }

        var newItemActive =
            activeOwlItems[centerIndex].getElementsByClassName("item-active")[0];
        var newItemNormal =
            activeOwlItems[centerIndex].getElementsByClassName("item-normal")[0];
        newItemActive.style.display = "flex";
        newItemNormal.style.display = "none";
        if (status) {
            itemCarousel.getElementsByClassName('owl-prev')[0].click();
        }
    });

    let owlActiveItems = industriesCarousel.getElementsByClassName('active');
    let owlItems = industriesCarousel.getElementsByClassName("owl-item");

    for (let i = 0; i < owlItems.length; i++) {
        owlItems[i].addEventListener("click", (e) => {
            let indexOff = 0;
            for (let j = 0; j < owlActiveItems.length; j++) {
                if (owlActiveItems[j] === owlItems[i]) {
                    indexOff = j - centerIndex;
                }
            }
            switch (indexOff) {
                case 0:
                    break;
                case 1:
                    industriesCarousel.getElementsByClassName("owl-next")[0].click();
                    itemCarousel.getElementsByClassName("owl-next")[0].click();
                    break;
                case 2:
                    industriesCarousel.getElementsByClassName("owl-next")[0].click();
                    industriesCarousel.getElementsByClassName("owl-next")[0].click();
                    itemCarousel.getElementsByClassName("owl-next")[0].click();
                    itemCarousel.getElementsByClassName("owl-next")[0].click();
                    break;
                case -1:
                    industriesCarousel.getElementsByClassName("owl-prev")[0].click();
                    itemCarousel.getElementsByClassName("owl-prev")[0].click();
                    break;
                case -2:
                    industriesCarousel.getElementsByClassName("owl-prev")[0].click();
                    industriesCarousel.getElementsByClassName("owl-prev")[0].click();
                    itemCarousel.getElementsByClassName("owl-prev")[0].click();
                    itemCarousel.getElementsByClassName("owl-prev")[0].click();
                    break;
                default:
                    break;
            }
        });
    }
}

window.addEventListener("load", () => {
    createCarousel();
});

function getRandomPosition() {

    var introducingArea = document.getElementById('introducing-area');
    var centerTop = document.getElementById('dotArea').offsetHeight / 2;
    var centerLeft = document.getElementById('dotArea').offsetWidth / 2;
    var radius = introducingArea.offsetWidth / 2;


    if (introducingArea.offsetHeight > introducingArea.offsetWidth) {
        radius = introducingArea.offsetHeight / 2;
    }
    var rate = 1 / ((centerLeft / radius) - 1);
    var randomDis = radius * (1 + (Math.random() / rate));
    var randomAngle = Math.random() * Math.PI * 2;
    var randX = randomDis * Math.cos(randomAngle) + centerLeft;
    var randY = randomDis * Math.sin(randomAngle) + centerTop;
    pos = {x: randX, y: randY};
    return pos;
}

function createMovingDots() {


    let area = document.getElementById('dotArea');
    let introducingArea = document.getElementById('introducing-area');
    let dot__area = document.createElementNS("http://www.w3.org/2000/svg", "svg");


    dot__area.setAttribute('id', 'dot__area');
    dot__area.setAttribute("width", area.offsetWidth);
    dot__area.setAttribute('height', area.offsetHeight);

    dot__area.style.position = "relative";
    dot__area.style.display = 'block';
    dot__area.style.width = '100%';
    dot__area.style.height = '100%';
    dot__area.style.borderRadius = '50%';
    dot__area.style.overflow = 'hidden';
    area.appendChild(dot__area);


    for (let i = 0; i < 3000; i++) {
        var __dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        let curTop = getRandomPosition().y;
        let curLeft = getRandomPosition().x
        __dot.setAttribute('cx', curLeft);
        __dot.setAttribute('cy', curTop);
        __dot.setAttribute('fill', '#d0dbeb');
        __dot.setAttribute('r', Math.random() * 3);
        __dot.classList.add('moving-dot');
        __dot.setAttribute('id', 'dot-' + i);
        dot__area.appendChild(__dot);

        createAnimation("cx", "dot-" + i, "20s", document.getElementById("dot-" + i).cx.animVal.value, getRandomPosition().x);
        createAnimation("cy", "dot-" + i, "20s", document.getElementById("dot-" + i).cy.animVal.value, getRandomPosition().y);

    }
}

function createAnimation(attribute, playerID, duration, from, to) {
    var animation = document.createElementNS("http://www.w3.org/2000/svg", "animate")
    animation.setAttribute("attributeType", "XML")
    animation.setAttribute("attributeName", attribute)
    animation.setAttribute("dur", duration)
    animation.setAttribute("to", to)
    animation.setAttribute("from", from)
    animation.setAttribute("fill", "freeze")
    animation.setAttribute('repeatCount', "indefinite")
    animationID = playerID + "animation" + attribute
    animation.setAttribute("id", animationID)
    player = document.getElementById(playerID)
    previous_animation = document.getElementById(animationID)
    if (previous_animation != null) {
        player.removeChild(previous_animation)
    }
    player.appendChild(animation)
}


function updateDotMove() {
    document.getElementById('dot__area').remove();
    setTimeout(function () {
        createMovingDots();
    }, 100)
}


function callBack() {
    let owlItems = document.getElementById('carousel-industries').getElementsByClassName('owl-item');
    let activeOwlItems = [];
    let centerIndex = 0;
    if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 1600) {
        centerIndex = 2;

    } else if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 1200) {
        centerIndex = 1;
    }
    for (let item of owlItems) {
        if (item.getElementsByClassName('item-active')[0].style.display === 'flex') {
            item.getElementsByClassName('item-active')[0].style.display = 'none';
            item.getElementsByClassName('item-normal')[0].style.display = 'flex';
        }
        if (item.classList.contains('active')) {
            activeOwlItems.push(item);
        }
    }
    activeOwlItems[centerIndex].getElementsByClassName('item-normal')[0].style.display = 'none';
    activeOwlItems[centerIndex].getElementsByClassName('item-active')[0].style.display = 'flex';
    let currentIndex;
    for (let i = 0; i < owlItems.length; i++) {
        if (owlItems[i] == activeOwlItems[centerIndex]) {
            currentIndex = i
        }
        ;
    }
    triggerDragItems(currentIndex);
}

function changeVideo() {
    setTimeout(function () {
        let currentItem;
        let loaded = false;
        let items = document.getElementById('carousel-industries').getElementsByClassName('owl-item');
        for (let item of items) {
            if (item.classList.contains('active')) {
                loaded = true;
            }
        }
        if (!loaded) {
            return;
        }
        for (let item of items) {
            if (item.getElementsByClassName('item-active')[0].style.display == 'flex') {
                currentItem = item;
            }
        }
        if (!currentItem) {
            return
        }
        let itemTitle = currentItem.getElementsByClassName('item-title')[0].innerHTML;
        let videoTitle = "";
        let videoPath = "assets/video/";
        let poster = "assets/images/";
        switch (itemTitle) {
            case "Consumer":
                videoTitle = "5.mp4";
                poster += "5_Moment.jpg";
                break;
            case "Construction":
                videoTitle = "3.mp4";
                poster += "3_Moment.jpg";
                break;
            case "Agriculture":
                videoTitle = "3.mp4";
                poster += "3_Moment.jpg";
                break;
            case "Manufacturing":
                videoTitle = "2.mp4"
                poster += "2_Moment.jpg";
                break;
            case "Transportation":
                videoTitle = "4.mp4";
                poster += "4_Moment.jpg";
                break;
            case "Warehouse":
                videoTitle = "6.mp4";
                poster += "6_Moment.jpg";
                break;
            case "Healthcare":
                videoTitle = "3.mp4";
                poster += "3_Moment.jpg";
                break;
            case "Pick & Pack":
                videoTitle = "3.mp4";
                poster += "3_Moment.jpg";
                break;
            case "Virtual Reality":
                videoTitle = "2.mp4"
                poster += "2_Moment.jpg";
                break;
            case "Logistics":
                videoTitle = "4.mp4";
                poster += "4_Moment.jpg";
                break;
        }

        videoPath += videoTitle;
        let video = document.getElementById('industry-video');
        let source = document.getElementById('video-source');
        video.pause();
        source.src = videoPath;
        video.setAttribute('poster', poster);
        video.load();
        video.play();
    }, 100)
}

function triggerDragItems(i) {
    var itemCarousel = document.getElementById('carousel-items');
    let items = itemCarousel.getElementsByClassName('owl-item');
    let currentIndex = 0;

    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('active')) {
            currentIndex = i
        }
    }
    let offIndex = currentIndex - i;
    let dragStep = Math.abs(offIndex);
    for (let j = 0; j < dragStep; j++) {
        if (offIndex < 0) {
            itemCarousel.getElementsByClassName('owl-prev')[0].click();
        } else {
            itemCarousel.getElementsByClassName('owl-next')[0].click();
        }
    }
    ;
}

$('#carousel-items').on("dragged.owl.carousel", function (event) {

    if (event.relatedTarget._drag.direction == 'right') {
        $('#carousel-industries .owl-prev').trigger("click", [false]);
    } else if (event.relatedTarget._drag.direction == 'left') {
        $('#carousel-industries .owl-next').trigger("click", [false]);
    }
});


function handleResizeWindow() {
    var carousel1 = document.getElementById('carousel-industries');
    var carousel2 = document.getElementById('carousel-items');
    var prevActiveIndex = 0;
    var carouselItems = carousel1.getElementsByClassName('owl-item');
    var activeItems = [];
    let centerIndex = 0;
    let currentActiveIndex = 0;
    for (let i = 0; i < carouselItems.length; i++) {
        if (carouselItems[i].getElementsByClassName('item-active')[0].style.display == 'flex') {
            prevActiveIndex = i;
        }
        if (carouselItems[i].classList.contains('active')) {
            activeItems.push(carouselItems[i]);
        }
        carouselItems[i].getElementsByClassName('item-active')[0].style.display = "none";
        carouselItems[i].getElementsByClassName('item-normal')[0].style.display = "flex";
    }

    if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 1600) {
        centerIndex = 2;

    } else if (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) > 1200) {
        centerIndex = 1;
    }

    for (let j = 0; j < carouselItems.length; j++) {
        if (carouselItems[j] == activeItems[centerIndex]) {
            currentActiveIndex = j;
            carouselItems[j].getElementsByClassName('item-normal')[0].style.display = 'none';
            carouselItems[j].getElementsByClassName('item-active')[0].style.display = 'flex';
        }
    }
    for (let k = 0; k < Math.abs(currentActiveIndex - prevActiveIndex); k++) {
        if (k - prevActiveIndex < 0) {
            carousel2.getElementsByClassName('owl-prev')[0].click();
        } else {
            carousel2.getElementsByClassName('owl-next')[0].click();
        }
    }


    updateDotMove();
}


var timeOut = null;
window.onresize = function () {
    if (timeOut != null)
        clearTimeout(timeOut);

    timeOut = setTimeout(function () {
        handleResizeWindow();
    }, 100);
};


$(document).ready(function () {
    createMovingDots();
    $("#carousel-industries").owlCarousel({
        loop: true,
        nav: true,
        navText: ["<img src='assets/images/arrow-prev-sm.png'/>",
            "<img src='assets/images/arrow-next-sm.png'/>"],
        dots: false,
        responsive: {
            1600: {
                items: 5,
            },
            1200: {
                items: 3,
            },
            768: {
                items: 1,
            },
            480: {
                items: 1,
            },
            300: {
                items: 1
            }
        },
        onDragged: callBack,
        onChange: changeVideo,
    });


    $("#carousel-items").owlCarousel({
        loop: true,
        nav: true,
        navText: ["<div class='d-none'></div>", "<div class='d-none'></div>"],
        dots: false,
        responsive: {
            1600: {
                items: 1,
            },
            1200: {
                items: 1,
            },
            768: {
                items: 1,
            },
            480: {
                items: 1,
            },
            300: {
                items: 1
            }
        },
        // onDragged: triggerDragIndustries
    });


    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        navText: [
            "<div class='nav-button owl-prev'><img src='assets/images/arrow-prev.png'/></div>",
            "<div class='nav-button owl-next'><img src='assets/images/arrow-next.png'/></div>",
        ],
        dot: false,
        responsive: {
            1000: {
                items: 1,
            },
            500: {
                items: 1,
            },
            300: {
                items: 1,
            },
        },

    });
});
