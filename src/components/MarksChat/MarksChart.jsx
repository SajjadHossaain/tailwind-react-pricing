import React, { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
//   console.log(marksPromise);
  const marksData = marksDataRes.data;
//   data processing for the chart

const marksChartData = marksData.map(studentData => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry
    };
    const avg = (student.chemistry + student.physics)/2

    student.avg = avg;

    return student;
})
console.log(marksChartData)
  return(
    <div>
        <BarChart width={500} height={600} data={marksChartData}>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Bar dataKey="avg" fill='yellow'></Bar>
        </BarChart>
    </div>
  )
};

export default MarksChart;
