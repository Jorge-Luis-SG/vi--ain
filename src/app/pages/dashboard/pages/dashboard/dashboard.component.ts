import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {
//     var dom = document.getElementById('chart-container');
// var myChart = echarts.init(dom, null, {
//   renderer: 'canvas',
//   useDirtyRect: false
// });
// var app = {};

// var option;

// option = {
//   xAxis: {
//     type: 'category',
//     boundaryGap: false,
//     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   },
//   yAxis: {
//     type: 'value'
//   },
//   series: [
//     {
//       data: [820, 932, 901, 934, 1290, 1330, 1320],
//       type: 'line',
//       areaStyle: {}
//     }
//   ]
// };



// if (option && typeof option === 'object') {
//   myChart.setOption(option);
// }

// window.addEventListener('resize', myChart.resize);
  }


  fullscreen = 'Full Width';
   fullWidth() {
      let full = document.getElementById('fullWidth');
      full?.classList.toggle('transactions-box2-active');
      document.querySelector('.dashboard')?.classList.toggle('dashboard-active')
      if (full?.classList.contains('transactions-box2-active')) {
        this.fullscreen = 'Min Width';
        document.body.style.overflow="hidden";
      } else {
        this.fullscreen = 'Full Width';
        document.body.style.overflow="auto";
      }
   }

  ngOnInit(): void {
  }

}
