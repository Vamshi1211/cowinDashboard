// Write your code here
import {BarChart, XAxis, YAxis, Legend, Bar} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {last7DaysData} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="coverage-container">
      <h1 className="vaccination-heading">Vaccination Coverage</h1>

      <BarChart data={last7DaysData} width={1000} height={300}>
        <XAxis dataKey="vaccine_date" tick={{stroke: 'grey', strokeWidth: 0}} />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{stroke: 'grey', strokeWidth: 0}}
        />
        <Legend wrappingStyle={{padding: 30}} />
        <Bar dataKey="dose_1" name="Dose1" fill="#5a8dee" barSize="20%" />
        <Bar dataKey="dose_2" name="Dose2" fill=" #f54394" barSize="20%" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
