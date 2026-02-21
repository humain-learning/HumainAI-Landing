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
    autoplay?: boolean;
    pausable?: boolean;
    mutable?: boolean;
    startTime?: number; // in seconds
    endTime?: number;   // in seconds
}

export const VideoCard = ({ video, cardWidth = 'w-full', index = 0, autoplay = false, pausable = !autoplay, mutable = !autoplay, startTime, endTime }: VideoCardProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const playerRef = useRef<any>(null);

    const enhancedUrl = React.useMemo(() => {
        let url = video.url;
        if (!url) return '';
        const separator = url.includes('?') ? '&' : '?';
        const params = `autoplay=${autoplay ? 1 : 0}&muted=${autoplay ? 1 : 0}&loop=1&title=0&byline=0&portrait=0&dnt=1&background=1`;
        let finalUrl = url + separator + params;
        // Add time fragment if provided (format: #t=start,end)
        if (startTime !== undefined || endTime !== undefined) {
            const start = startTime ?? 0;
            const end = endTime !== undefined ? `,${endTime}s` : '';
            finalUrl += `#t=${start}s${end}`;
        }
        return finalUrl;
    }, [video.url, autoplay, startTime, endTime]);

    useEffect(() => {
        if (!enhancedUrl) return;

        const iframe = iframeRef.current;
        if (!iframe) return;

        playerRef.current = new Player(iframe);

        (async () => {
            try {
                if (autoplay) {
                    // Ensure muted autoplay is allowed by browsers, then play
                    playerRef.current.setMuted && await playerRef.current.setMuted(true).catch(() => {});
                    await playerRef.current.play().catch(() => {});
                    setIsPlaying(true);
                    setIsMuted(true);
                } else {
                    // Non-autoplay: pause and set a reasonable default volume
                    await playerRef.current.pause().catch(() => {});
                    playerRef.current.setVolume && await playerRef.current.setVolume(0.2).catch(() => {});
                    // initialize muted state from player if available
                    if (playerRef.current.getMuted) {
                        const muted = await playerRef.current.getMuted().catch(() => false);
                        setIsMuted(!!muted);
                    } else if (playerRef.current.getVolume) {
                        const vol = await playerRef.current.getVolume().catch(() => 0.2);
                        setIsMuted(typeof vol === 'number' ? vol === 0 : false);
                    }
                }
            } catch (e) {
                // ignore initialization errors
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
    }, [enhancedUrl, autoplay]);

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

    const borderColor = index % 2 === 0 ? 'border-sage' : 'border-terracotta';

    return (
        <div className={`${cardWidth} rounded-4xl bg-white transition duration-300 object-fill overflow-hidden ${autoplay ? `${borderColor} border-2 md:border-3 lg:border-4` : ''}`}>
            <div className="relative pt-[56.25%]">
                <iframe
                    ref={iframeRef}
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    src={enhancedUrl}
                    title={video.title || 'Student Creation Video'}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                ></iframe>

                {/* Mute/unmute button top-right */}
                {mutable && (
                    <button
                        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                        onClick={toggleMute}
                        className="absolute top-3 right-2 z-20 bg-transparent p-2 rounded-full flex items-center justify-center transition hover:scale-105"
                    >
                        {isMuted ? (
                            <img src="/assets/icons/muted.svg" alt="Muted" className="h-7 w-7 drop-shadow-[0_0_6px_rgba(0,0,0,0.35)]" />
                        ) : (
                            <img src="/assets/icons/unmuted.svg" alt="Unmuted" className="h-7 w-7 drop-shadow-[0_0_6px_rgba(0,0,0,0.35)]" />
                        )}
                    </button>
                )}

                {/* Custom play button bottom-right */}
                {pausable && (
                    <button
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        onClick={togglePlay}
                        className="absolute bottom-4 right-4 z-20 bg-transparent p-2 rounded-full flex items-center justify-center transition hover:scale-105"
                    >
                        {isPlaying ? (
                            <img src="/assets/icons/pauseButton.svg" alt="Pause" className="h-5 w-5 drop-shadow-[0_0_6px_rgba(0,0,0,0.35)]" />
                        ) : (
                            <img src="/assets/icons/playButton.svg" alt="Play" className="h-5 w-5 drop-shadow-[0_0_6px_rgba(0,0,0,0.35)]" />
                        )}
                    </button>
                )}
            </div>
        </div>
    );
};
