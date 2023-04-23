function toggleMenu() {
    const menu=document.querySelector('.menu-links');
    const icon=document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}
const themeToggleBtn = document.querySelector('.theme-toggle');
const handleThemeToggle = () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        theme_icon.src="./assets/sun.png"
        varun_pic.src="./assets/Varun_picc_black.png"
        icon_linkedin.src="./assets/linkedin-white.png"
        icon_github.src="./assets/github-white.png"
        edhhu.src ="./assets/education-white.png"
        certii.src ="./assets/certii-white.png"
        arroww_1.src="./assets/arrow-white.png"
        arroww_2.src="./assets/arrow-white.png"
        arroww_3.src="./assets/arrow-white.png"
        gmail_icon.src="./assets/Gmail-white.png"
        linkedin_icon_white.src="./assets/linkedin-white.png"

    }else{
        theme_icon.src="./assets/moon.png"
        varun_pic.src="./assets/Varun_picc_white.png"
        edhhu.src="./assets/education-black.png"
        certii.src="./assets/certi-black.png"
        icon_linkedin.src="./assets/linkedin-black.png"
        icon_github.src="./assets/github-black.png"
        arroww_1.src="./assets/arrow-black.png"
        arroww_2.src="./assets/arrow-black.png"
        arroww_3.src="./assets/arrow-black.png"
        gmail_icon.src="./assets/email.png"
        linkedin_icon_white.src="./assets/linkedin-black.png"
    }
};
themeToggleBtn.addEventListener('click', handleThemeToggle);

// const navtogg = document.querySelector('.theme-toggle');
// const handleThemeToggle = () => {
//     document.body.classList.toggle('dark-mode');
// };
// themeToggleBtn.addEventListener('click', handleThemeToggle);