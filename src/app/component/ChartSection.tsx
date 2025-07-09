"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { getChartPrice } from "../service/api";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartSection = () => {
  const [series, setSeries] = useState<any[]>([]);
  const [options, setOptions] = useState<any>({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await getChartPrice();
  //       const formatted = res.map((item: any) => ({
  //         x: new Date(item.time * 1000),
  //         y: [
  //           parseFloat(item.open.toFixed(2)),
  //           parseFloat(item.high.toFixed(2)),
  //           parseFloat(item.low.toFixed(2)),
  //           parseFloat(item.close.toFixed(2)),
  //         ],
  //       }));

  //       setSeries([{ data: formatted }]);

  //       setOptions({
  //         chart: {
  //           type: "candlestick",
  //           height: 400,
  //           background: "#1e1e1e",
  //           toolbar: {
  //             show: true,
  //           },
  //         },
  //         title: {
  //           text: "ETH/USDC Price Chart",
  //           align: "left",
  //           style: {
  //             color: "#ffffff",
  //           },
  //         },
  //         xaxis: {
  //           type: "datetime",
  //           labels: {
  //             style: {
  //               colors: "#ffffff",
  //             },
  //           },
  //         },
  //         yaxis: {
  //           tooltip: {
  //             enabled: true,
  //           },
  //           labels: {
  //             style: {
  //               colors: "#ffffff",
  //             },
  //           },
  //         },
  //         plotOptions: {
  //           candlestick: {
  //             colors: {
  //               upward: "#00ff88",
  //               downward: "#ff4976",
  //             },
  //           },
  //         },
  //         theme: {
  //           mode: "dark",
  //         },
  //       });
  //     } catch (error) {
  //       console.error("Error fetching chart data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = require("../../app/priceData.json");
        const formatted = res.map((item: any) => ({
          x: new Date(item[0]),
        y: [
          parseFloat(parseFloat(item[1]).toFixed(2)),
          parseFloat(parseFloat(item[2]).toFixed(2)),
          parseFloat(parseFloat(item[3]).toFixed(2)),
          parseFloat(parseFloat(item[4]).toFixed(2)),
        ],
        }));

        setSeries([{ data: formatted }]);

        setOptions({
          chart: {
            type: "candlestick",
            height: 400,
            background: "#1e1e1e",
            toolbar: {
              show: true,
            },
          },
          title: {
            text: "ETH/USDC Price Chart",
            align: "left",
            style: {
              color: "#ffffff",
            },
          },
          xaxis: {
            type: "datetime",
            labels: {
              style: {
                colors: "#ffffff",
              },
            },
          },
          yaxis: {
            tooltip: {
              enabled: true,
            },
            labels: {
              style: {
                colors: "#ffffff",
              },
            },
          },
          plotOptions: {
            candlestick: {
              colors: {
                upward: "#00ff88",
                downward: "#ff4976",
              },
            },
          },
          theme: {
            mode: "dark",
          },
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full">
      <div id="chart">
        {series.length > 0 && (
          <Chart
            options={options}
            series={series}
            type="candlestick"
            height={400}
          />
        )}
      </div>
    </div>
  );
};

export default ChartSection;
