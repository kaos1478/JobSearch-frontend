// External libs

// Assets

// Componentes

// Subcomponentes and style
import JobListItem from '@/components/molecules/JobListItem'
import { useAppSelector } from '@/redux/store'
import * as Styled from './styles'

// Services

// Types

const JobsList: React.FC = () => {
  const { jobs, filters } = useAppSelector(state => state.jobsData)

  return (
    <Styled.Container>
      {jobs.map(job => {
        if (
          filters.companyName.length &&
          filters.companyName.includes(job.companyName)
        ) {
          return <JobListItem job={job} />
        } else if (!filters.companyName.length) {
          return <JobListItem job={job} />
        } else {
          return null
        }
      })}
    </Styled.Container>
  )
}

export default JobsList
