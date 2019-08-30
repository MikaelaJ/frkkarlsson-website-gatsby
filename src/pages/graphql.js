import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';


export default ({ data }) => {
    console.log(data)
    console.log(data.allFile.edges.length + ' length')
    console.log(data.allFile.edges[0].node.size + " hej data.allFile.edges.map")

    let sizes = [];
    let sizeLabels = [];
    let hexcode = [];

    for (let i = 0; i < data.allFile.edges.length; i++) {
        sizes.push(data.allFile.edges[i].node.size);
    }
    for (let i = 0; i < data.allFile.edges.length; i++) {
        sizeLabels.push(data.allFile.edges[i].node.extension);
        hexcode.push('#' + (Math.random() * 0xFFFFFF << 0).toString(16));
    }

    console.log(hexcode);

    let datan = {
        labels: sizeLabels,
        datasets: [
            {
                label: "File Sizes",
                backgroundColor: hexcode,
                data: sizes
            }
        ]
    };

    let voteYear = [1973, 1976, 1979, 1982, 1985, 1988, 1991, 1994, 1998, 2002, 2006, 2010, 2014, 2018];
    let votedata = [90.8, 91.8, 90.7, 91.4, 89.9, 86, 86.7, 86.8, 81.4, 80.1, 82, 84.6, 85.8, 87.2];
    let linedatan = {
        labels: voteYear,
        datasets: [
            {
                fill: false,
                label: "Votes",
                backgroundColor: hexcode,
                data: votedata
            }
        ]
    };


    return (
        <Layout>
            <div>
                <h2>My Site's Files | Bar</h2>
                <h3>Size of file</h3>
                <table>
                    <Bar
                        data={datan}
                        width={1000}
                        /* height={50} */
                        options={{ maintainAspectRatio: false }}
                    />

                    <br></br>
                </table>
                <h4>File extension</h4>
            </div>
            <hr></hr>
            <div>
                <h2>My Site's Files | Doughnut</h2>
                <h4>File extension</h4>

                <table>
                    <Doughnut
                        data={datan}
                        width={1000}
                        /* height={50} */
                        options={{ maintainAspectRatio: false }}
                    />
                </table>
                <h4>Size of file</h4>

            </div>
            <hr></hr>
            <div>
                <h2>Valdeltagande i riksdagsval, procent | Line</h2>
                <h3>Procent</h3>
                <table>
                    <Line
                        data={linedatan}
                        width={1000}
                        /* height={50} */
                        options={{ maintainAspectRatio: false }}
                    />

                </table>
                <h4>Year</h4>

            </div>
        </Layout>
    )
}

export const query = graphql
    `
query MyQuery {
  allFile {
    edges {
      node {
        size
        extension
      }
    }
  }
}

`