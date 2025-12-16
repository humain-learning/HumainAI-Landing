'use client';
import React, { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';

interface VideoCardProps {
    video: {
        id: number;
        url: string;
        title?: string;
        student?: string;
    };
    cardWidth?: string;
    index?: number;
}

export const VideoCard = ({ video, cardWidth = 'w-full', index = 0 }: VideoCardProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const playerRef = useRef<any>(null);

    const enhancedUrl = React.useMemo(() => {
        let url = video.url;
        if (!url) return '';
        const separator = url.includes('?') ? '&' : '?';
        const params = 'autoplay=0&muted=0&loop=1&title=0&byline=0&portrait=0&dnt=1&background=1';
        return url + separator + params;
    }, [video.url]);

    useEffect(() => {
        if (!enhancedUrl) return;

        const iframe = iframeRef.current;
        if (!iframe) return;

        // Initialize Vimeo Player for programmatic control for all videos
        playerRef.current = new Player(iframe);

        // Ensure paused by default
        playerRef.current.pause().catch(() => {});
        // Reduce default volume to 20%
        playerRef.current.setVolume && playerRef.current.setVolume(1).catch(() => {});

        // initialize muted state from player if available
        (async () => {
            try {
                if (playerRef.current.getMuted) {
                    const muted = await playerRef.current.getMuted();
                    setIsMuted(!!muted);
                } else if (playerRef.current.getVolume) {
                    const vol = await playerRef.current.getVolume();
                    setIsMuted(typeof vol === 'number' ? vol === 0 : false);
                }
            } catch (e) {
                // ignore
            }
        })();

        const onPlay = () => setIsPlaying(true);
        const onPause = () => setIsPlaying(false);

        playerRef.current.on('play', onPlay);
        playerRef.current.on('pause', onPause);

        return () => {
            if (playerRef.current) {
                try {
                    playerRef.current.unload && playerRef.current.unload();
                } catch (e) {}
                playerRef.current = null;
            }
        };
    }, [enhancedUrl]);

    const togglePlay = async () => {
        const player = playerRef.current;
        if (!player) return;
        try {
            // ensure a low default volume just before playback
            player.setVolume && (await player.setVolume(1).catch(() => {}));
            const paused = await player.getPaused();
            if (paused) {
                await player.play();
                setIsPlaying(true);
            } else {
                await player.pause();
                setIsPlaying(false);
            }
        } catch (e) {}
    };

    const toggleMute = async () => {
        const player = playerRef.current;
        if (!player) return;
        try {
            // prefer setMuted when available
            if (player.getMuted && player.setMuted) {
                const muted = await player.getMuted();
                await player.setMuted(!muted);
                setIsMuted(!muted);
            } else if (player.getVolume && player.setVolume) {
                const vol = await player.getVolume();
                if (vol === 0) {
                    await player.setVolume(0.2);
                    setIsMuted(false);
                } else {
                    await player.setVolume(0);
                    setIsMuted(true);
                }
            }
        } catch (e) {}
    };

    if (!enhancedUrl) {
        return (
            <div className={`${cardWidth} m-4 rounded-3xl overflow-hidden bg-gray-200 transition duration-300`}>
                <div className="relative pt-[56.25%] flex items-center justify-center">
                    <p className="text-gray-500 text-sm p-4">Video Placeholder</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`${cardWidth} rounded-4xl bg-white transition duration-300 object-fill overflow-hidden`}>
            <div className="relative pt-[56.25%]">
                <iframe
                    ref={iframeRef}
                    className="absolute top-0 left-0 w-full h-full pointer-events-none "
                    src={enhancedUrl}
                    title={video.title || 'Student Creation Video'}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                ></iframe>

                {/* Mute/unmute button top-right */}
                <button
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    onClick={toggleMute}
                    className="absolute top-3 right-2 z-20 bg-transparent p-2 rounded-full flex items-center justify-center transition hover:scale-105 "
                >
                    {isMuted ? (
                        <img src="/assets/icons/muted.svg" alt="Muted" className="h-7 w-7 drop-shadow-[0_0_6px_rgba(0,0,0,0.35)]" />
                    ) : (
                        <img src="/assets/icons/unmuted.svg" alt="Unmuted" className="h-7 w-7 drop-shadow-[0_0_6px_rgba(0,0,0,0.35)]" />
                    )}
                </button>

                {/* Custom play button bottom-right */}
                <button
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    onClick={togglePlay}
                    className="absolute bottom-4 right-4 z-20 bg-transparent p-2 rounded-full flex items-center justify-center transition hover:scale-105   "
                >
                    {isPlaying ? (
                        <img src="/assets/icons/pauseButton.svg" alt="Pause" className="h-5 w-5 drop-shadow-[0_0_6px_rgba(0,0,0,0.35)]" />
                    ) : (
                        <img src="/assets/icons/playButton.svg" alt="Play" className="h-5 w-5 drop-shadow-[0_0_6px_rgba(0,0,0,0.35)]" />
                    )}
                </button>
            </div>
        </div>
    );
};
