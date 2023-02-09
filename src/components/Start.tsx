import Button from './Button';

const Start = (
    props: {
        level: number;
        changeLevel: (value: number) => void;
        setgameStatus: (value: number) => void;
        maxLevel: number;
    }
    ) => {

    return (<section className="startscreen">
    <Button title="Start" id="startbutton" onClick={() => props.setgameStatus(1)} />
    <div className="slidercontainer">
        <h1>Begin at Level:</h1>
        <input type="range" min="1" max={props.maxLevel} value={props.level} className="slider" id="levelslider" step="1" autoComplete="off" 
        onChange={(e) => {props.changeLevel(Number(e.target.value));}}
        />
        <h1 id="leveldisplay">{props.level}</h1>
    </div>
    </section>)
};

export default Start;