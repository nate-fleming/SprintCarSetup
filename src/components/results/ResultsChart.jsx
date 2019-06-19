import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import moment from 'moment'




export default class ResultsChart extends Component {

    render() {
        const dates = this.props.races.map(race => moment(race.date).format('MMM-DD'))
        const featureResult = this.props.races.map(race => (race.featureResult) ? race.featureResult.replace(/(^\d+)(.+$)/i, '$1') : 'enter result')
        const heatRaceResult = this.props.races.map(race => (race.featureResult) ? race.heatRaceResult.replace(/(^\d+)(.+$)/i, '$1') : 'enter result')

        const data = {
            labels: dates,
            datasets: [
                {
                    label: 'Feature Result',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'orange',
                    borderColor: 'orange',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'black',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'orange',
                    pointHoverBorderColor: 'black',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: featureResult
                },
                {
                    label: 'Heat Race Result',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'black',
                    borderColor: 'black',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'orange',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'black',
                    pointHoverBorderColor: 'orange',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: heatRaceResult
                }
            ]

        };

        const displayName = '2019Results'
        console.log(featureResult)
        return (
            <div>
                <h2>2019</h2>
                <Line data={data} />
            </div>
        )
    }
}
