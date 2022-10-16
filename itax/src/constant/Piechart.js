import {PieChart , Pie} from "recharts"

function PieChartGraph() {

    const data = [
        {name: 'Geeksforgeeks', students: 400},
        {name: 'Technical scripter', students: 700},
        {name: 'Geek-i-knack', students: 200},
        {name: 'Geek-o-mania', students: 1000}
      ];
        
        
      return (
              <PieChart width={500} height={500}>
                <Pie data={data} dataKey="students" outerRadius={250} fill="green" />
              </PieChart>
      );
}

export default PieChartGraph