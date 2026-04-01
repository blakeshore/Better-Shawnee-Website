//old way to do the google translate feedbacks
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,es,fr,ca,',
        autoDisplay: false
    }, 'google_translate_element');
}
// if change to en
function googleTranslate(lang) {
    if (lang === 'en') {
        return location.reload();
    }
    const temgoogle = document.querySelector(".goog-te-combo");
    if (temgoogle) {
        temgoogle.value = lang;
        temgoogle.dispatchEvent(new Event("change"));
    }
}
// uhhhh hide google
function hidegooglefeedback() {
    document.body.style.top = "0px"; // telling it to stay hidden
    // telling google popup to disappear
    document.querySelectorAll(".skiptranslate, iframe.goog-te-banner-frame").forEach(el => {
        el.style.display = "none";
    });
}
// set interval to double check
setInterval(hidegooglefeedback, 300);