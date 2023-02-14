// External libs
import { useMemo } from 'react'

// Assets

// Componentes
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'

// Services
import { setSelected, TJob, toggleModal } from '@/redux/slicers/jobs'
import { useAppDispatch, useAppSelector } from '@/redux/store'

// Types
interface IJobsListItem {
  job: TJob
}

const JobListItem: React.FC<IJobsListItem> = ({ job }) => {
  const dispatch = useAppDispatch()
  const { selected } = useAppSelector(state => state.jobsData)

  const handleClick = () => {
    dispatch(setSelected(job))
    dispatch(toggleModal())
  }

  const active = useMemo(() => {
    return selected?.jobId === job.jobId
  }, [selected, job.jobId])

  return (
    <Styled.Container onClick={handleClick} active={active}>
      <Typography as="heading1" marginBottom=".5rem">
        {job?.jobTitle}
      </Typography>
      <Typography as="heading2" marginBottom=".5rem">
        {job?.companyName}
      </Typography>
      <Typography as="body1" marginBottom=".5rem">
        {job?.location}
      </Typography>
      <Typography as="body1">{job?.estimatedSalary}</Typography>
      <Styled.PostedAt>
        <Typography as="body1">{job?.postedDate}</Typography>
      </Styled.PostedAt>
    </Styled.Container>
  )
}

export default JobListItem
