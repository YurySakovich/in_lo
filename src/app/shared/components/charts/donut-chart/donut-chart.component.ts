import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as D3 from "d3";

import { POPULATION } from './data';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DonutChartComponent implements OnInit {
  title = 'Donut Chart';

  private width: number;
  private height: number;
  private host: any;
  private htmlElement: HTMLElement;

  private svg: any;     // TODO replace all `any` by the right type
  private svgLegend;
  private legendRectSize = 20;
  private legendSpacing = 7;
  private legendHeight = this.legendRectSize + this.legendSpacing;

  private radius: number;

  private arc: any;
  private pie: any;
  private color: any;

  private g: any;

  constructor(private elementRef: ElementRef) {
    this.htmlElement = elementRef.nativeElement;
    this.host = D3.select(this.htmlElement);
  }

  ngOnInit() {
      this.initSvg();
      this.drawChart(POPULATION);
  }

  private initSvg() {
    this.svg = d3.select('svg');

    //TODO fix these values
    this.width = 200;
    this.height = 200;
    this.radius = Math.min(this.width, this.height) / 2;

    this.color = d3Scale.scaleOrdinal()
      .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);

    this.arc = d3Shape.arc()
      .outerRadius(this.radius - 10)
      .innerRadius(this.radius - 70);

    this.pie = d3Shape.pie()
      .sort(null)
      .value((d: any) => d.population);

    this.svg = this.host.select('svg')
      .append('g')
      .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');

    this.svgLegend = this.host.select('.legend')
      .append('g')
      .attr('transform', 'translate(' + this.width / 8 + ',' + this.height / 8 + ')');
  }

  private drawChart(data: any[]) {
    let g = this.svg.selectAll('.arc')
      .data(this.pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    g.append('path')
      .attr('d', this.arc)
      .style('fill', d => this.color(d.data.age));

    this.drawLegend(POPULATION);

  }

  private drawLegend(data: any) {
    // draw legend
    var legend =
      this.svgLegend.selectAll('.legend')
        .data(this.color.domain())
        .enter()
        .append('g')
        .attr('class', 'legend')
        .attr('text-anchor', 'start')
        .attr('transform', (d, i) => 'translate(0,' + i * 22 + ')');

    //legend
    legend.append('rect')
      .attr('width', this.legendRectSize)
      .attr('height', this.legendRectSize)
      .attr('rx', 20)
      .attr('ry', 20)
      .attr('fill', this.color);

    legend.append('text')
      .attr('width', this.legendRectSize)
      .attr('height', this.legendRectSize)
      .attr('x', 30)
      .attr('y', 15)
      .text(function (d) {
        return d;
      })
  }

  prepare(data) {
    return data.map(el => el.age)
  }
}
