function openTab(tabName) {
    // Get all tab content elements
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].classList.remove("active");
    }
    // Get all tab buttons
    var tabButtons = document.getElementsByClassName("tab-btn");
    for (var i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove("active");
    }
    // Show the selected tab content
    document.getElementById(tabName + "-content").classList.add("active");
    // Highlight the selected tab button
    document.getElementById(tabName + "-tab").classList.add("active");
}


