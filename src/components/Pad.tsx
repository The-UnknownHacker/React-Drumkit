import React, { useCallback, useEffect, useRef, useState } from 'react';

type SoundTypes = {
    keyCode: string,
    name: string,
    sound: any,
    color: string
}

const Pad: React.FC<SoundTypes> = ({ keyCode, sound, color }: SoundTypes) => {
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const onPlay = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, []);

    const onPause = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    }, []);

    const onReplay = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === keyCode.toLowerCase()) {
                onPlay();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [keyCode, onPlay]);

    useEffect(() => {
        const audio = audioRef.current;

        const handlePlay = () => setPlaying(true);
        const handlePause = () => setPlaying(false);
        const handleEnded = () => setPlaying(false);

        if (audio) {
            audio.addEventListener('play', handlePlay);
            audio.addEventListener('pause', handlePause);
            audio.addEventListener('ended', handleEnded);
        }

        return () => {
            if (audio) {
                audio.removeEventListener('play', handlePlay);
                audio.removeEventListener('pause', handlePause);
                audio.removeEventListener('ended', handleEnded);
            }
        };
    }, []);

    return (
        <div
            style={{
                background: playing ? color : '',
                boxShadow: playing ? `0 0 10px ${color}` : '',
                padding: '20px',
                borderRadius: '10px',
                cursor: 'pointer'
            }}
            className={`pad ${playing ? "playing" : ""}`}
            onClick={onPlay}
        >
            <h2>{keyCode}</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                <button style={buttonStyle} onClick={(e) => { e.stopPropagation(); onPause(); }}>Pause</button>
                <button style={buttonStyle} onClick={(e) => { e.stopPropagation(); onReplay(); }}>Replay</button>
            </div>
            <audio ref={audioRef} src={sound} />
        </div>
    );
}

const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};

export default Pad;
