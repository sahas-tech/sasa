const mobile_Nav = document.querySelector(".fas")
const navBar = document.querySelector(".nav_coloum")
const navLinks = document.querySelector(".navlinks li")
const link1 = document.querySelectorAll(".links")
const nav = document.querySelector("body")



nav.addEventListener("scroll", () => {
    console.log("scroll")
    // if (window.scrollY === 200) {
    //     nav.style.backgroundColor = "white"
    //     console(offsetTop)
    // } else {
    //     console.log('Not Working')
    // }
})



mobile_Nav.addEventListener("click", () => {
    if (navBar.classList.contains("nav_coloum")) {
        navBar.classList.remove("nav_coloum")
        navBar.classList.toggle("active")
        navBar.style.transition = "1s ease "
    } else {
        navBar.classList.add("nav_coloum")
        navBar.classList.toggle("active")
        navBar.style.transition = "1s ease "
    }
})




document.querySelectorAll("li a").forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const scrolTo = e.target.innerText
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: "#section" + index
            },
            offsetY: 100
        });

    });
});


(function () {
    var options = {
        whatsapp: "919380136721", // WhatsApp number
        call_to_action: "Message us", // Call to action
        position: "right", // Position may be 'right' or 'left'
    };
    var proto = document.location.protocol,
        host = "whatshelp.io",
        url = proto + "//static." + host;
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () {
        WhWidgetSendButton.init(host, proto, options);
    };
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
})();