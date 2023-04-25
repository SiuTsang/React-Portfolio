import React from "react";

function Portfolio() {
    return (
        <div classname="container" id="content">
            <div classname="row">
                <div classname="col">
                    <h1>Portfolio</h1>
                </div>
            </div>
            
            <div classname="row">
                <div classname="col">
                    <a href="https://siutsang.github.io/Password-Generator/" alt="Password Generator Project">
                        <h2>Password Generator</h2>
                    </a>
                </div>

                <div classname="col">
                    <a href=" https://morgankn.github.io/Project-one/" alt="Workout-&-Post-Meal-Decider">
                        <h2>Workout & Post Meal Decider</h2>
                    </a>
                </div>
            </div>

            <div classname="row">
                <div classname="col">
                    <a href="https://siutsang.github.io/Work-Day-Scheduler/" alt="Work Day Scheduler">
                        <h2>Work Day Scheduler</h2>
                    </a>
                </div>
                
                <div classname="col">
                    <a href="https://enigmatic-island-78855.herokuapp.com/" alt="myPlaylist">
                        <h2>myPlaylist</h2>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
