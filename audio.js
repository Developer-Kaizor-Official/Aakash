document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("audioContainer");
  if (!container) return;

  fetch("audio.html")
    .then((response) => response.text())
    .then((html) => {
      container.innerHTML = html;

      const playPauseBtn = document.getElementById("playPauseBtn");
      const bgAudio = document.getElementById("bgAudio");

      // Restore playback state from sessionStorage
      const wasPlaying = sessionStorage.getItem("audioPlaying") === "true";

      if (wasPlaying) {
        bgAudio.play().catch(() => {});
        playPauseBtn.textContent = "⏸️ Pause";
      }

      playPauseBtn.addEventListener("click", () => {
        if (bgAudio.paused) {
          bgAudio.play();
          playPauseBtn.textContent = "⏸️ Pause";
          sessionStorage.setItem("audioPlaying", "true");
        } else {
          bgAudio.pause();
          playPauseBtn.textContent = "▶️ Play";
          sessionStorage.setItem("audioPlaying", "false");
        }
      });
    })
    .catch((err) => console.error("Error loading audio:", err));
});
