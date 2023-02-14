// External libs
import { useAppSelector } from '@/redux/store'

// Assets

// Componentes
import JobListItem from '@/components/molecules/JobListItem'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const JobsList: React.FC = () => {
  const { filteredJobs, filters } = useAppSelector(state => state.jobsData)

  return (
    <Styled.Container>
      {filteredJobs.map(job => {
        if (
          filters.companyName.length &&
          filters.companyName.includes(job.companyName)
        ) {
          return <JobListItem key={`jobs-list-${job.jobId}`} job={job} />
        } else if (!filters.companyName.length) {
          return <JobListItem key={`jobs-list-${job.jobId}`} job={job} />
        } else {
          return null
        }
      })}
    </Styled.Container>
  )
}

export default JobsList
