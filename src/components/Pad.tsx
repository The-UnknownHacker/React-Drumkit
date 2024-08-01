import React, { useCallback, useEffect, useRef, useState } from 'react';

type SoundTypes = {
    keyCode: string,
    name: string,
    sound: string,
    color: string
}

const Pad: React.FC<SoundTypes> = ({ keyCode, sound, color }: SoundTypes) => {
    const [playing, setPlaying] = useState(false);
    const audioRefs = useRef<HTMLAudioElement[]>([]);

    const onPlay = useCallback(() => {
        const audio = new Audio(sound);
        audioRefs.current.push(audio);
        audio.play();
        setPlaying(true);

        audio.addEventListener('ended', () => {
            const index = audioRefs.current.indexOf(audio);
            if (index > -1) {
                audioRefs.current.splice(index, 1);
            }
            if (audioRefs.current.length === 0) {
                setPlaying(false);
            }
        });
    }, [sound]);

    const onPause = useCallback(() => {
        audioRefs.current.forEach((audio) => {
            audio.pause();
            audio.currentTime = 0;
        });
        audioRefs.current = [];
        setPlaying(false);
    }, []);

    const onReplay = useCallback(() => {
        onPause();
        onPlay();
    }, [onPause, onPlay]);

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
                <button style={buttonStyle} onClick={(e) => { e.stopPropagation(); onPause(); }}>Stop</button>
                <button style={buttonStyle} onClick={(e) => { e.stopPropagation(); onReplay(); }}>Start</button>
            </div>
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
