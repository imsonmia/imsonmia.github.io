// Jump Commands to switch between pages
function jumpGitHubHome() {
    location.assign('https://github.com/imsonmia')
}
function userAgentThings() {
    var txt = "";
    txt += "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
    txt += "<p>Browser Name: " + navigator.appName + "</p>";
    txt += "<p>Browser Version: " + navigator.appVersion + "</p>";
    txt += "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
    txt += "<p>Browser Language: " + navigator.language + "</p>";
    txt += "<p>Browser Online: " + navigator.onLine + "</p>";
    txt += "<p>Platform: " + navigator.platform + "</p>";
    txt += "<p>User-agent header: " + navigator.userAgent + "</p>";
    document.getElementById('useragent').innerHTML = txt
}