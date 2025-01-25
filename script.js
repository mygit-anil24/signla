
document.getElementById("translateBtn").addEventListener("click", function() {
    var signInput = document.getElementById("signInput").value;
    var translation = "";

    // Beispiel einer Übersetzung (simuliert)
    if (signInput.toLowerCase() === "hallo") {
        translation = "Hallo (auf Gebärdensprache)";
    } else {
        translation = "Keine Übersetzung gefunden!";
    }

    document.getElementById("translationResult").textContent = translation;
});
