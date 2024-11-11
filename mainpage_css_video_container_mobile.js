        body {
            font-family: "Roboto", sans-serif;
            /* Non selectable text */
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        .pc-videocontainer {
            border: 0.5px solid #ccc;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            height: 157.5px;
            overflow: hidden;
            width: 280px;
        }

        .pc-videoplayer {
            height: 157.5px;
            overflow: hidden;
            position: absolute;
            width: 280px;
        }

        .pc-vp-video {
            height: 157.5px;
            position: absolute;
            width: 280px;
        }

        /* Top Header */
        .pc-vp-top-information {
            width: 100%;
            height: 25px;
            transition: opacity 0.75s, transform 0.75s;
        }

            /* Video Title */
            .pc-vp-videoname {
                color: #ccc;
                font-size: 12.5px;
                height: 25px;
                position: absolute;
                width: 165px;
            }

            .pc-vp-videoname.hidden {
                opacity: 0;
                transform: translateY(-10px);
            }

            .pc-vp-vn-name {
                height: 25px;
                margin: 5px;
            }

            /* YouTube Linkout */
            .pc-vp-yt_linkout {
                cursor: pointer;
                height: 25px;
                position: absolute;
                margin-left: 233.47px;
            }

            .pc-vp-ytl-inner {
                cursor: pointer;
                height: 25px;
            } 

        /* Controls */
        .pc-vp-controls {
            height: 30px;
            position: absolute;
            top: 126.25px;
            width: 280px;
            transition: opacity 0.75s, transform 0.75s;
        }

        .pc-vp-c-hiddencontrols {
            height: 30px;
            width: 280px;
            transition: opacity 0.5s, transform 0.5s;
        }

        /* Play/Pause */
        .pc-vp-c-playpause {
            cursor: pointer;
            height: 30px;
            margin-right: 250px;
            position: absolute;
            width: 30px;
        }

        .pc-vp-c-pp-playing {
            height: 30px;
            position: absolute;
            width: 30px;
        }

        .pc-vp-c-pp-paused {
            height: 30px;
            position: absolute;
            display: none;
        }

        /* Time Updater */
        .pc-vp-c-time {
            color: #fff;
            height: 30px;
            margin-left: 60px;
            margin-right: 120px;
            position: absolute;
            width: 100px;
        }

        .pc-vp-c-t-currenttime {
            font-size: 15px;
            height: 18px;
            margin-bottom: 6px;
            margin-top: 6.25px;
            width: 100px;
        }

        /* Sound */
        .pc-vp-c-sound {
            cursor: pointer;
            height: 30px;
            margin-left: 30px;
            margin-right: 220px;
            position: absolute;
            width: 30px;
        }

        .pc-vp-c-s-soundon {
            height: 30px;
            position: absolute;
            width: 30px;
        }

        .pc-vp-c-s-soundoff {
            height: 30px;
            position: absolute;
            width: 30px;
        }

        /* Subtitles */
        .pc-vp-c-subtitles {
            cursor: not-allowed;
            height: 30px;
            margin-left: 160px;
            margin-right: 90px;
            position: absolute;
            width: 30px;
        }

        .pc-vp-c-st-svg {
            height: 30px;
            position: absolute;
            width: 30px;
        }

        .pc-vp-c-st-textfield {
            display: none;
            height: 13.5px;
            margin-left: -48.75px;
            margin-top: -10px;
            width: 131px;
        }

        .pc-vp-c-st-t-text {
            background-color: #191919;
            border-radius: 2.5px;
            color: #fff;
            font-size: 7.5px;
            height: 8.5px;
            padding: 2.5px;
            width: 126px;
        }

        .pc-vp-c-st-t-triangle {
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid #191919;
            height: 0;
            margin-left: 58.5px;
            width: 0;
        }

        /* Settings */
        .pc-vp-c-settings {
            height: 30px;
            margin-left: 190px;
            margin-right: 60px;
            position: absolute;
            width: 30px;
        }

        .pc-vp-c-s-svg {
            height: 30px;
            position: absolute;
            width: 30px;
        }

        .pc-vp-c-s-svg:hover {
            animation: rotation 1s;
        }

        @keyframes rotation {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(720deg);
            }
        }

        .pc-vp-c-s-textfield {
            display: none;
            height: 106.5px;
            margin-left: -11.25px;
            margin-top: -103.5px;
            width: 51px;
        }

        .pc-vp-c-s-t-text {
            background-color: #191919;
            border-radius: 2.5px;
            color: #fff;
            font-size: 7.5px;
            height: 101.5px;
            padding: 2.5px;
            position: absolute;
            width: 46px;
        }

        .pc-vp-c-s-t-triangle {
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid #191919;
            height: 0;
            position: absolute;
            margin-left: 21px;
            margin-top: 106px;
            width: 0;
        }

        .pc-vp-c-s-speed {
            background-color: #FF0000;
            border-radius: 0.75px;
            font-size: 3.75px;
            height: 5px;
            margin-left: 19.5px;
            margin-top: 7px;
            position: absolute;
            width: 10.5px;
        }

        .pc-vp-c-s-s-inner {
            color: #fff;
            height: 4px;
            padding-bottom: 0.88px;
            padding-top: 0.165px;
            text-align: center;
            width: 10.5px;
        }

        .pc-vp-c-s-t-t-q-header {
            border-bottom: 0.5px solid #ccc;
            height: 20.5px;
            margin-bottom: 2.5px;
            text-align: center;
            width: 46px;
        }

        .pc-vp-c-s-t-t-q-selector {
            cursor: pointer;
            color: #fff;
            font-size: 6px;
            height: 7.75px;
            padding: 1px;
            padding: 1px;
        }

        .pc-vp-c-s-t-t-q-selector-selected {
            cursor: pointer;
            color: #fff;
            font-size: 6px;
            height: 7.75px;
            text-decoration: underline;
            padding: 1px;
            padding: 1px;
        }

        /* Picture-in-Picture */
        .pc-vp-c-pipframe {
            cursor: pointer;
            height: 30px;
            margin-left: 220px;
            margin-right: 30px;
            position: absolute;
            width: 30px;
        }

        .pc-vp-c-pipf-pip {
            height: 23.325px;
            margin: 3.3375px;
            position: absolute;
            width: 23.325px;
        }

        .pip-small-screen {
            background-color: #fff;
            width: 2.5px;
            position: absolute;
            height: 2.5px;
            margin-top: -16.25px;
            margin-left: 11px;
            height: 3.885px;
            width: 5.2px;
        }

        .pc-vp-c-pipframe:hover .pip-small-screen {
            animation: changewidth 1s;
        }

        @keyframes changewidth {
            0%,
            100% {
                transform: translate(0px, 0px);
            }
            40%,
            60% {
                height: 6.4px;
                transform: translate(-3.75px, -2.625px);
                width: 8.885px;
            }
        }

        .pc-vp-pipf-return {
            display: none;
            height: 15px;
            padding: 7.5px;
            position: absolute;
            width: 15px;
        }

        /* Fullscreen */
        .pc-vp-c-fullscreenbtns {
            cursor: pointer;
            height: 30px;
            margin-left: 250px;
            position: absolute;
            width: 30px;
        }

        .pc-vp-c-fullscreen {
            height: 30px;
            position: absolute;
            width: 30px;
        }

        .pc-vp-c-f-fullscreenopener {
            height: 30px;
            position: absolute;
            width: 30px;
        }

        .pc-vp-c-f-fullscreencloser {
            height: 30px;
            position: absolute;
            display: none;
            width: 30px;
        }

        .pc-vp-c-fullscreenbtns:hover .fullscreen1 {
            animation: stretch1 0.5s;
        }

        @keyframes stretch1 {
            0% {
                transform: translateX(0px);
                transform: translateY(0px);
            }
            50% {
                transform: translate(-1px,-1px);
            }
            100% {
                transform:translateX(0px);
                transform: translateY(0px);
            }
        }
        
        .pc-vp-c-fullscreenbtns:hover .fullscreen2 {
            animation: stretch2 0.5s;
        }

        @keyframes stretch2 {
            0% {
                transform: translateX(0px);
                transform: translateY(0px);
            }
            50% {
                transform: translate(1px,-1px);
            }
            100% {
                transform:translateX(0px);
                transform: translateY(0px);
            }
        }

        .pc-vp-c-fullscreenbtns:hover .fullscreen3 {
            animation: stretch3 0.5s;
        }

        @keyframes stretch3 {
            0% {
                transform: translateX(0px);
                transform: translateY(0px);
            }
            50% {
                transform: translate(1px, 1px);
            }
            100% {
                transform:translateX(0px);
                transform: translateY(0px);
            }
        }

        .pc-vp-c-fullscreenbtns:hover .fullscreen4 {
            animation: stretch4 0.5s;
        }

        @keyframes stretch4 {
            0% {
                transform: translateX(0px);
                transform: translateY(0px);
            }
            50% {
                transform: translate(-1px, 1px);
            }
            100% {
                transform:translateX(0px);
                transform: translateY(0px);
            }
        }

        /* Timeline */
        .pc-vp-c-timeline {
            background-color: #ccc;
            height: 1.25px;
            position: absolute;
            margin-top: 0px;
            width: 280px;
        }

        .pc-vp-c-t-progress {
            background-color: #FF0000;
            position: absolute;
            height: 100%;
            width: 0%;
        }
