import React from 'react';
import Grid from '@material-ui/core/Grid';
import { 
    VictoryChart,
    VictoryTheme,
    VictoryLine,
    VictoryTooltip,
    createContainer 
} from 'victory';

import { 
    graphData,
    graphData1,
    graphData2 
} from './data/line.data'

const VictoryCursorVoronoiContainer = createContainer("cursor", "voronoi");

function SimpleLines() {
    return (
        <Grid container spacing={1}>
            <Grid container item >
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
            </Grid>
        <Grid item >
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
        </Grid>
        <Grid item >
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
                        data: { stroke: "#e8d19b" },
                        parent: { border: "1px solid #ccc"}
                    }}

                    // Optional. Use domains to define the range of data as min and max values for both axis
                    // Format ==> { x: [low, high], y: [low, high] }
                    domain={{x: [1593747213, 1593891213], y: [0, 100]}}

                    //Self explanatory, graph data.
                    data={graphData2}

                    // Interpolation. There few options for this one
                    interpolation="cardinal"
                />
            </VictoryChart>
        </Grid>
      </Grid>
    );
}

export default SimpleLines;