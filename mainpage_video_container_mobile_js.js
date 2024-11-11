        document.addEventListener('DOMContentLoaded', function () {
            const hiddencontrolDiv = document.getElementById('pc-vp-c-hiddencontrols');
            const controls = document.getElementById('pc-vp-controls');
            const currentTime = document.getElementById('pc-vp-c-time');
            const currentTimeDisplay = document.getElementById('pc-vp-c-t-ct-currenttime');
            const fullscreenFrame = document.getElementById('pc-vp-c-fullscreen');
            const pauseButton = document.getElementById('pc-vp-c-pp-paused');
            const playButton = document.getElementById('pc-vp-c-pp-playing');
            const pipFrame = document.getElementById('pc-vp-c-pipf-pip');
            const pipFrameReturn = document.getElementById('pc-vp-pipf-return');
            const progress = document.getElementById('pc-vp-c-t-progress');
            const soundOffButton = document.getElementById('pc-vp-c-s-soundoff');
            const soundOnButton = document.getElementById('pc-vp-c-s-soundon');
            const textSettings = document.getElementById('pc-vp-c-s-textfield');
            const textSubtitles = document.getElementById('pc-vp-c-st-textfield');
            const topInformation = document.getElementById('pc-vp-top-information');
            const video = document.getElementById('pc-advideo');
            const videoContainer = document.getElementById('pc-vp-c-videocontainer');
            const videoDescription = document.getElementById('pc-vp-vn-name');
            const videoLengthDisplay = document.getElementById('pc-vp-c-t-vl-videolength');
            const videoName = document.getElementById('pc-vp-videoname');
            const videoDiv = document.getElementById('pc-vp-video');
            const videoPlayer = document.getElementById('pc-videoplayer');
            const openerSettings = document.getElementById('pc-vp-c-settings');
            const openerSubtitles = document.getElementById('pc-vp-c-subtitles');

            // Description & Controls Timeout
            let mouseStillTimeout;
            let timeout;

            function isDivBlock(div) {
                return window.getComputedStyle(div).display === 'block';
            }

            window.onload = () => {
                timeout = setTimeout(() => {
                    if (!video.paused && !isDivBlock(textSettings)) {
                        hiddencontrolDiv.style.transform = 'translateY(30px)';
                        textSettings.style.display = 'none';
                        topInformation.style.transform = 'translateY(-30px)';
                    }
                }, 3000);
            };

            videoPlayer.addEventListener('mouseenter', () => {
                topInformation.style.transform = 'translateY(0)';
                hiddencontrolDiv.style.transform = 'translateY(0)';
                clearTimeout(timeout);
            });

            videoPlayer.addEventListener('mouseleave', () => {
                timeout = setTimeout(() => {
                    if (!video.paused && !isDivBlock(textSettings)) {
                        hiddencontrolDiv.style.transform = 'translateY(30px)';
                        textSettings.style.display = 'none';
                        topInformation.style.transform = 'translateY(-30px)';
                    }
                }, 1000);
            });

            videoPlayer.addEventListener('mousemove', () => {
                clearTimeout(timeout); 
                topInformation.style.transform = 'translateY(0)';
                hiddencontrolDiv.style.transform = 'translateY(0)';
                timeout = setTimeout(() => {
                    if (!video.paused && !isDivBlock(textSettings)) {
                        hiddencontrolDiv.style.transform = 'translateY(30px)';
                        textSettings.style.display = 'none';
                        topInformation.style.transform = 'translateY(-30px)';
                    }
                }, 3000);
            });

            video.addEventListener('ended', () => {
                clearTimeout(timeout);
                hiddencontrolDiv.style.transform = 'translateY(0)';
                topInformation.style.transform = 'translateY(0)';
            });
            
            // Play/Pause Buttons
            video.onplay = function() {
                playButton.style.display = "block";
                pauseButton.style.display = "none";
            };

            video.onpause = function() {
                playButton.style.display = "none";
                pauseButton.style.display = "block";
            };

            playButton.addEventListener('click', function () {
                textSettings.style.display = "none"
                video.pause();
            });

            video.addEventListener('ended', function () {
                playButton.style.display = 'none';
                pauseButton.style.display = 'block';
            });

            pauseButton.addEventListener('click', function () {
                textSettings.style.display = "none"
                video.play();
            });

            // Sound Buttons
            updateSoundButtons();

            soundOnButton.addEventListener('click', function () {
                textSettings.style.display = "none"
                video.muted = true;
                updateSoundButtons();
            });

            soundOffButton.addEventListener('click', function () {
                textSettings.style.display = "none"
                video.muted = false;
                updateSoundButtons();
            });

            function updateSoundButtons() {
                if (video.muted) {
                    soundOnButton.style.display = 'none';
                    soundOffButton.style.display = 'block';
                } else {
                    soundOnButton.style.display = 'block';
                    soundOffButton.style.display = 'none';
                }
            }

            // Time Buttons
            currentTime.addEventListener('click', function () {
                textSettings.style.display = "none"
            });

            video.addEventListener('timeupdate', function () {
                const value = (video.currentTime / video.duration) * 100;
                progress.style.width = value + '%';
                const currentTime = video.currentTime;
                currentTimeDisplay.textContent = formatTime(currentTime);
            });

                // Time formatter
                function formatTime(time) {
                    const minutes = Math.floor(time / 60);
                    const seconds = Math.floor(time % 60);
                    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                }

                video.addEventListener('loadedmetadata', function () {
                    if (!isNaN(video.duration)) {
                        const duration = video.duration;
                        videoLengthDisplay.textContent = formatTime(duration);
                    } else {
                        videoLengthDisplay.textContent = 'Could not load video length';
                    }
                });

                if (video.readyState >= 1) {
                    const duration = video.duration;
                    videoLengthDisplay.textContent = formatTime(duration);
                }

            // Subtitles Button
            openerSubtitles.addEventListener('mouseenter', function () {
                textSubtitles.style.display = 'block';
            });

            openerSubtitles.addEventListener('mouseleave', function () {
                textSubtitles.style.display = 'none';
            });

            openerSubtitles.addEventListener('click', function () {
                textSubtitles.style.display === 'block' ? textSubtitles.style.display = 'none' : textSubtitles.style.display = 'block';
                textSettings.style.display = "none"
            });

            // Settings Button
            openerSettings.addEventListener('click', function () {
                textSettings.style.display === 'block' ? textSettings.style.display = 'none' : textSettings.style.display = 'block';
            });

            videoDescription.addEventListener('click', function () {
                textSettings.style.display = "none"
            });

            videoDiv.addEventListener('click', function () {
                textSettings.style.display = "none"
            });

            video.addEventListener('click', function () {
                textSettings.style.display = "none"
            });

                // Speedchanger
                function setVideoSpeed(speed) {
                    if (video) {
                        video.playbackRate = speed;
                    }
                }

                function updateSelectedClass(selectedId, speedText) {
                    var selectors = document.getElementsByClassName('pc-vp-c-s-t-t-q-selector');
                    var selectedSelector = document.getElementsByClassName('pc-vp-c-s-t-t-q-selector-selected');

                    while (selectedSelector.length) {
                        selectedSelector[0].className = 'pc-vp-c-s-t-t-q-selector';
                    }

                    var selectedElement = document.getElementById(selectedId);
                    if (selectedElement) {
                        selectedElement.className = 'pc-vp-c-s-t-t-q-selector-selected';
                    }

                    var speedElements = document.getElementsByClassName('pc-vp-c-s-s-inner');
                    for (var i = 0; i < speedElements.length; i++) {
                        speedElements[i].getElementsByTagName('a')[0].innerHTML = speedText;
                    }
                }

                // Speed Variations
                document.getElementById('speedchanger025').addEventListener('click', function() {
                    setVideoSpeed(0.25);
                    updateSelectedClass('speedchanger025', '0.25');
                });

                document.getElementById('speedchanger05').addEventListener('click', function() {
                    setVideoSpeed(0.5);
                    updateSelectedClass('speedchanger05', '0.5');
                });

                document.getElementById('speedchanger075').addEventListener('click', function() {
                    setVideoSpeed(0.75);
                    updateSelectedClass('speedchanger075', '0.75');
                });

                document.getElementById('speedchanger1').addEventListener('click', function() {
                    setVideoSpeed(1);
                    updateSelectedClass('speedchanger1', '1.0');
                });

                document.getElementById('speedchanger125').addEventListener('click', function() {
                    setVideoSpeed(1.25);
                    updateSelectedClass('speedchanger125', '1.25');
                });

                document.getElementById('speedchanger15').addEventListener('click', function() {
                    setVideoSpeed(1.5);
                    updateSelectedClass('speedchanger15', '1.5');
                });

                document.getElementById('speedchanger175').addEventListener('click', function() {
                    setVideoSpeed(1.75);
                    updateSelectedClass('speedchanger175', '1.75');
                });

                document.getElementById('speedchanger2').addEventListener('click', function() {
                    setVideoSpeed(2);
                    updateSelectedClass('speedchanger2', '2.0');
                });

            // Picture-in-Picture Button
            pipFrame.addEventListener('click', async () => {
                textSettings.style.display = "none"
                if (video !== document.pictureInPictureElement) {
                    try {
                        await video.requestPictureInPicture();
                    } catch (error) {
                        console.error('Error when opening picture in picture', error);
                    }
                } else {
                    try {
                        await document.exitPictureInPicture();
                    } catch (error) {
                        console.error('Error when closing picture in picture', error);
                    }
                }
            });

            pipFrameReturn.addEventListener('click', async () => {
                textSettings.style.display = "none"
                if (video === document.pictureInPictureElement) {
                    try {
                        await document.exitPictureInPicture();
                    } catch (error) {
                        console.error('Error when closing picture in picture', error);
                    }
                } else {
                    try {
                        await video.requestPictureInPicture();
                    } catch (error) {
                        console.error('Error when opening picture in picture', error);
                    }
                }
            });

            video.addEventListener('enterpictureinpicture', () => {
                pipFrame.style.display = 'none';
                pipFrameReturn.style.display = 'block';
            });

            video.addEventListener('leavepictureinpicture', () => {
                pipFrame.style.display = 'block';
                pipFrameReturn.style.display = 'none';
            });

            if (video === document.pictureInPictureElement) {
                pipFrame.style.display = 'none';
                pipFrameReturn.style.display = 'block';
            } else {
                pipFrame.style.display = 'block';
                pipFrameReturn.style.display = 'none';
            }

            // Fullscreen Button
            document.addEventListener('fullscreenchange', function () {
                updateSoundButtons();
            });

            function setVideoSpeed(speed) {
                if (video) {
                    video.playbackRate = speed;
                }
            }

            fullscreenFrame.addEventListener('click', async () => {
                textSettings.style.display = "none"
                if (!document.fullscreenElement) {
                    try {
                        await video.requestFullscreen();
                    } catch (error) {
                        console.error('Error when opening picture in picture', error);
                    }
                    try {
                        video.webkitEnterFullScreen()
                    } catch (error) {
                        console.error('Error when opening picture in picture', error);
                    }
                } else {
                    try {
                        await document.exitFullscreen();
                    } catch (error) {
                        console.error('Error when closing picture in picture', error);
                    }
                }
            });
        });
