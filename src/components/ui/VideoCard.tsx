import React from 'react';

interface VideoCardProps {
    video: {
        id: number;
        url: string;
        title?: string;
        student?: string;
    };
    cardWidth?: string;
    interactive?: boolean;
    index?: number;
}

export const VideoCard = ({ video, cardWidth, interactive, index = 0}: VideoCardProps) => {
    const enhancedUrl = React.useMemo(() => {
        let url = video.url;

        if (!url) return '';

        const separator = url.includes('?') ? '&' : '?';

        interactive ? (
            url += `${separator}controls=1&autoplay=1&muted=0&loop=0&title=0&byline=0&portrait=0&badge=0&muted=1&dnt=1background=1`
        ) : (
            url += `${separator}autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&dnt=1&background=1`
        );

        return url;
    }, [video.url]);

    if (!enhancedUrl) {
        return (
            <div className={`${cardWidth} m-4 rounded-3xl overflow-hidden bg-gray-200 transition duration-300`}>
                <div className="relative pt-[56.25%] flex items-center justify-center">
                    <p className="text-gray-500 text-sm p-4">Video Placeholder</p>
                </div>
            </div>
        );
    }
    let borderClass = 'border-sage';
    borderClass = index % 2 === 0 ? 'border-sage' : 'border-terracotta';
    return (
        <div className={`${cardWidth} rounded-3xl overflow-hidden ${borderClass} border-5 bg-white transition duration-300 object-fill`}>
            {interactive ? (
                <div className="relative pt-[56.25%]">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={enhancedUrl}
                        title={video.title || "Student Creation Video"}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

            ) : (
                <div className="relative pt-[56.25%]">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full pointer-events-none"
                        src={enhancedUrl}
                        title={video.title || "Student Creation Video"}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    );
};