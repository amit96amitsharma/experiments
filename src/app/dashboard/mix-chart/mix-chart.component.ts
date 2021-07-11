import { Component, OnInit } from '@angular/core';
import * as Chart from "chart.js";
import * as ChartAnnotation from "chartjs-plugin-annotation";

@Component({
  selector: 'app-mix-chart',
  templateUrl: './mix-chart.component.html',
  styleUrls: ['./mix-chart.component.css']
})
export class MixChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let namedChartAnnotation = ChartAnnotation;
    namedChartAnnotation["id"] = "annotation";
    Chart.pluginService.register(namedChartAnnotation);
    let ctx;
    const htmlElement = document.getElementById('my');
    ctx = (htmlElement as HTMLCanvasElement).getContext("2d");
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Bar Dataset',
          data: [10, 20, 30, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          yAxisID: "A",
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1,
          // this dataset is drawn below
          order: 1
        }, {
          label: 'Line Dataset',
          data: [10, 30, 5, 10],
          type: 'line',
          // this dataset is drawn on top
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          yAxisID: "B",
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          fill: '1',
          order: 2
        }],
        labels: ['January', 'February', 'March', 'April']
      },
      options: {
        scales: {
          yAxes: [{
            id: "A",
            type: "linear",
            position: "left",
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              display: false,
            },
            scaleLabel: {
              display: true,
              labelString: 'firstUSGraphViewTwo',
              fontColor: 'rgba(54, 162, 235, 0.2)',
              fontSize: 12.5,
            },
          },
          {
            id: "B",
            type: "linear",
            position: "right",
            ticks: {
              beginAtZero: true,
              max: 100
            },
            gridLines: {
              display: false,
            },
            scaleLabel: {
              display: true,
              labelString: 'firstUSGraphView',
              fontColor: 'rgba(255, 99, 132, 0.2)',
              fontSize: 12.5,
            },
          }],
          xAxes: [
            {
              // barThickness: 15;
              //               barPercentage: .6,
              // categoryPercentage: 1.0,
              // barThickness: 15,
              ticks: {
                maxRotation: 90,
                minRotation: 80,
                callback: (value, index, values) => {
                  return value;
                },
              },
              gridLines: {
                display: true,
              },
              scaleLabel: {
                display: true,
                labelString: 'hlo'
              }
            },
          ],
        },
        annotation: {
          annotations: [
            {
              type: "line",
              mode: "vertical",
              scaleID: "x-axis-0",
              value: "February",
              borderColor: "red",
              borderStyle: "dashed",
              label: {
                content: "TODAY",
                enabled: true,
                position: "top"
              }
            }
          ]
        }
      }
    });
  }
}
