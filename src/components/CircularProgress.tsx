import React from "react";
import { ITask } from "./data/Task.type";
type Props = {
    percentage: number;
    circleWidth: number;
    task: ITask;
    toggleProgress: (task:ITask) => void
}
const CircularProgress = (props: Props) => {
    const { percentage, circleWidth, task, toggleProgress } = props;
    const radius:number = 85;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray*percentage)/100;
    return(
        <div className="circle-progressbar" onClick={() => toggleProgress(task)}>
            <svg 
            width={circleWidth}
            height={circleWidth}
            viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
                <circle 
                cx={circleWidth/2}
                cy={circleWidth/2}
                strokeWidth="151"
                r={radius}
                className="circle__background"
                />
                <circle 
                cx={circleWidth/2}
                cy={circleWidth/2}
                strokeWidth="151"
                r={radius}
                className="circle__progress"
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset,
                }}
                transform={`rotate(-90 ${circleWidth/2}  ${circleWidth/2})`}
                />
                
            </svg>
        </div>
    )
}

export default CircularProgress