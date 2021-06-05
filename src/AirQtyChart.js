import Chart from "react-apexcharts";
import {useEffect,useState} from "react";
import {getColorCode} from "./util";


const AirQtyChart = (props)=>{
    const {aiqData} = props;
    const [aiq,setAiq] = useState([]);
    const [aiqValue,setAiqValue] = useState([]);
    const [colorsCode,setColorsCode] = useState([]);
    useEffect(()=>{
        console.log(aiqData);
        setAiq(Object.keys(aiqData));
        let _aiqVal = [];
        let _colorCode = [];
        for(let item in aiqData){
            _aiqVal.push(aiqData[item].aqi.toFixed(2));
            _colorCode.push(getColorCode(aiqData[item].aqi));
        }
        setAiqValue(_aiqVal);
        setColorsCode(_colorCode);

    },[JSON.stringify(aiqData)])

    const series = [{
        data: aiqValue
      }];
    const options = {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function(chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },
        colors:colorsCode,
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false,         
        },
        yaxis:{
            show:true,
            labels:{
                 style:{
                colors:"#fff"
             }
            }
        },
        xaxis: {
          categories:aiq,
          labels: {
            style: {
              colors: "#fff",
              fontSize: '12px'
            }
          }
        }
      }
    

    return (<>
        <Chart options={options} series={series} type="bar" width="500"  />
    </>)
}

export default AirQtyChart;