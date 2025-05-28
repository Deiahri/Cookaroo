import { useEffect, useRef, useState } from "react";
import { Theme } from "../../utils/globals";
import Chef from "./chef.svg";

const ChefSueVisualizer = ({ audioSrc }: { audioSrc?: string }) => {
  const [volume, setVolume] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(performance.now());
  const [_, setRenderTick] = useState(0); // force re-renders

  useEffect(() => {
    const audio = new Audio(audioSrc);
    audio.volume = 0;
    audio.autoplay = true;

    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    const audioContext = new AudioCtx();
    const sourceNode = audioContext.createMediaElementSource(audio);
    const analyser = audioContext.createAnalyser();

    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    sourceNode.connect(analyser);
    analyser.connect(audioContext.destination);

    const update = () => {
      analyser.getByteFrequencyData(dataArray);
      const avg = dataArray.reduce((a, b) => a + b, 0) / bufferLength;
      setVolume(avg / 255);
      setRenderTick((t) => t + 1); // trigger re-render for time-based warping
      animationRef.current = requestAnimationFrame(update);
    };

    animationRef.current = requestAnimationFrame(update);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      audioContext.close();
    };
  }, [audioSrc]);

  const now = performance.now();
  const time = (now - startTimeRef.current) / 1000;

  // Sinusoidal warp + volume
  const warp = Math.sin(time * 2) * 0.5 + 0.5;
  const scale = 1 + (volume * 3 + warp * 0.2);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            margin: "40px auto",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            opacity: 0.9,
            backgroundColor: Theme.orange,
            transform: `scale(${Math.sin(scale) * 1.5})`,
            transition: "transform 0.05s ease-out",
            position: "relative",
            zIndex: 5,
          }}
        />
        <div
          style={{
            margin: "40px auto",
            width: "105px",
            height: "105px",
            borderRadius: "50%",
            opacity: 0.9,
            backgroundColor: Theme.orangeAccent,
            transform: `scale(${scale})`,
            transition: "transform 0.05s ease-out",
            position: "absolute",
            zIndex: 4,
          }}
        />
        <div
          style={{
            width: "5rem",
            height: "5rem",
            transform: `scale(${1 + volume * 3 - Math.sin(warp) * 0.1})`,
            borderRadius: "50%",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "absolute",
            zIndex: 6,
          }}
        >
          <img
            src={Chef}
            alt="Chef"
            width={60}
            height={60}
            style={{ borderRadius: "50%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChefSueVisualizer;
