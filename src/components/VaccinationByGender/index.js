// Write your code here
import {PieChart, Pie, Cell, Legend} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props

  return (
    <div className="gender-container">
      <h1 className="vaccination-heading">Vaccination by gender</h1>
      <PieChart height={300} width={1000}>
        <Pie
          cx="50%"
          cy="50%"
          data={vaccinationByGender}
          startAngle={0}
          endAngle={180}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#5a8dee" />
          <Cell name="Female" fill="#f54394" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend iconType="circle" layout="horizontal" align="center" />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
