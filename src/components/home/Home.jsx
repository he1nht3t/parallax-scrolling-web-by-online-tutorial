import "./home.css";
import { useEffect, useState } from "react";

const Home = () => {
    const [position, setPosition] = useState(0);

    const Stars = "/images/stars.png";
    const Moon = "/images/moon.png";
    const MountainsBehind = "/images/mountains_behind.png";
    const MountainsFront = "/images/mountains_front.png";

    useEffect(() => {
        const onScroll = () => {
            setPosition(window.scrollY);
        };
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
    const star = { left: position * 0.25 + "px" };

    const moon = {
        top: position * 1.05 + "px",
        mixBlendMode: "screen",
    };

    const mountains_behind = { top: position * 0.5 + "px" };

    const text = {
        marginRight: position * 4 + "px",
        position: "absolute",
        right: -350 + "px",
        color: "#fff",
        whiteSpace: "nowrap",
        letterSpacing: 0.5 + "rem",
        fontSize: 7.5 + "vw",
        zIndex: 9,
    };
    const mountains_front = {
        top: position * 0.3 + "px",
        zIndex: 10,
    };
    const btn = {
        marginTop: position * 1.5 + "px",
        display: "inline-block",
        padding: 8 + "px" + " " + 30 + "px",
        borderRadius: 40 + "px",
        background: "#fff",
        color: "#2b1055",
        fontSize: 1.5 + "rem",
        zIndex: 9,
        transform: "translateY(100px)",
    };

    return (
        <section className="home" id="home">
            <img src={Stars} style={star} alt="stars" id="stars" />
            <img src={Moon} style={moon} alt="moon" id="moon" />
            <img
                src={MountainsBehind}
                style={mountains_behind}
                alt="mountains"
                id="mountains_behind"
            />
            <h2 id="text" style={text}>
                Moon Light
            </h2>
            <a href="#info" id="btn" style={btn}>
                Explore
            </a>
            <img
                src={MountainsFront}
                style={mountains_front}
                alt="mountains"
                id="mountains_front"
            />
        </section>
    );
};

export default Home;
