import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as D3 from "d3";

import { Data } from './data';

export interface Margin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

@Component({
  selector: 'app-group-bar-chart',
  templateUrl: './group-bar-chart.component.html',
  styleUrls: ['./group-bar-chart.component.scss']
})
export class GroupBarChartComponent implements OnInit {
  title = 'Group Chart';

  private width: number;
  private height: number;
  private host: any;
  private htmlElement: HTMLElement;
  private margin: Margin;

  private svg: any;     // TODO replace all `any` by the right type
  private svgLegend;
  private legendRectSize = 20;
  private legendSpacing = 7;
  private legendHeight = this.legendRectSize + this.legendSpacing;

  private radius: number;

  private arc: any;
  private pie: any;
  private color: any;
  private x: any;
  private x2: any;
  private y: any;
  private y2: any;

  private g: any;

  constructor() { }

  ngOnInit() {
    this.initMargins();

    this.initSvg();
  }

  private initMargins() {
    this.margin = { top: 20, right: 20, bottom: 30, left: 40 };
  }

  private initSvg() {
    this.svg = d3.select('svg');

    //TODO fix these values
    this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
    this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
    this.g = this.svg.append('g').attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    ////
    var y = d3Scale.scaleLinear()
      .domain([0, 1])
      .range([this.height, 0]);

    var x0 = d3Scale.scaleLinear()
      .rangeRound([0, this.width])
      // .domain(d3.range(n))
      // .rangeBands([0, width], .2);

    // var x1 = d3Scale.scaleLinear()
    //   .domain(d3.range(m))
    //   .rangeBands([0, x0.rangeBand()]);

    // var z = d3.scale.category10();

    // var xAxis = d3.svg.axis()
    //   .scale(x0)
    //   .orient("bottom");

    // var yAxis = d3.svg.axis()
    //   .scale(y)
    //   .orient("left");
    ////
    this.x = d3Scale.scaleLinear()
      .range([0, this.width])

    this.y = d3Scale.scaleLinear()
      .domain([0, 1])
      .range([this.height, 0]);
  }
}
