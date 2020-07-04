import React from 'react';
import { 
    VictoryChart,
    VictoryTheme,
    VictoryLine,
    VictoryTooltip,
    VictorySharedEvents,
    VictoryBar,
    VictoryLabel,
    VictoryPie,
    createContainer 
} from 'victory';

import { 
    graphData,
    graphData1,
    graphData2 
} from './data/line.data'

/**
 * TO-DO: Replicate the shared events behavior with line graphs.
 * Line graph has only one element - line, unlike bar graph(data bars), pie(data slices).
 * I would like to have a shared event with cursor. When I hover over one time(x1) in one graph,
 * I would also like to see the according cursor over the same time(x2) but on the second graph.
 * Is it even possible?
 */

const VictoryCursorVoronoiContainer = createContainer("cursor", "voronoi");

function SharedEventsGraph() {
    return (
        <>
            <VictoryChart
                name="bar"
                theme={VictoryTheme.material}
                width={1000}
                height={200}
                scale={{x: "time", y: "linear"}}
                containerComponent={
                <VictoryCursorVoronoiContainer
                    labelComponent={<VictoryTooltip/>}
                    labels={({ datum }) => `y: ${datum.y}`}
                />
                }
            >
                <VictoryLine
                    style={{
                        data: { stroke: "#195e83" },
                        parent: { border: "1px solid #ccc"}
                    }}

                    // Optional. Use domains to define the range of data as min and max values for both axis
                    // Format ==> { x: [low, high], y: [low, high] }
                    domain={{x: [1593747213, 1593891213], y: [0, 100]}}

                    //Self explanatory, graph data.
                    data={graphData}

                    // Interpolation. There few options for this one
                    interpolation="cardinal"
                />
            </VictoryChart>    

            <VictoryChart
                theme={VictoryTheme.material}
                width={1000}
                height={200}
                scale={{x: "time", y: "linear"}}
                containerComponent={
                <VictoryCursorVoronoiContainer
                    labelComponent={<VictoryTooltip/>}
                    labels={({ datum }) => `y: ${datum.y}`}
                />
                }
            >
                <VictoryLine
                    style={{
                        data: { stroke: "#5dbcd2" },
                        parent: { border: "1px solid #ccc"}
                    }}

                    // Optional. Use domains to define the range of data as min and max values for both axis
                    // Format ==> { x: [low, high], y: [low, high] }
                    domain={{x: [1593747213, 1593891213], y: [0, 100]}}

                    //Self explanatory, graph data.
                    data={graphData1}

                    // Interpolation. There few options for this one
                    interpolation="cardinal"
                    
                    />
            </VictoryChart>
        
            <svg viewBox="0 0 500 450">
                <VictorySharedEvents
                    events={[{
                    childName: ["pie", "bar"],
                    target: "data",
                    eventHandlers: {
                        onMouseOver: () => {
                        return [{
                            childName: ["pie", "bar"],
                            mutation: (props) => {
                            return {
                                style: Object.assign({}, props.style, {fill: "tomato"})
                            };
                            }
                        }];
                        },
                        onMouseOut: () => {
                        return [{
                            childName: ["pie", "bar"],
                            mutation: () => {
                            return null;
                            }
                        }];
                        }
                    }
                    }]}
                >
                    <g transform={"translate(150, 50)"}>
                    <VictoryBar name="bar"
                        width={300}
                        standalone={false}
                        style={{
                        data: { width: 20 },
                        labels: {fontSize: 25}
                        }}
                        data={[
                        {x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}, {x: "d", y: 4}
                        ]}
                        labels={["a", "b", "c", "d"]}
                        labelComponent={<VictoryLabel y={280}/>}
                    />
                    </g>
                    <g transform={"translate(0, -75)"}>
                    <VictoryPie name="pie"
                        width={250}
                        standalone={false}
                        style={{ labels: {fontSize: 25, padding: 10}}}
                        data={[
                        {x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}, {x: "d", y: 7}
                        ]}
                    />
                    </g>
                </VictorySharedEvents>
            </svg>
        </>
    );
}

export default SharedEventsGraph;