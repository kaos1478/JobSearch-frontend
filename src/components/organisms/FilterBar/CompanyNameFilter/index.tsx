// External libs
import { useState } from 'react'

// Assets

// Componentes
import Button from '@/components/atoms/Button'
import Checkbox from '@/components/atoms/Checkbox'

// Subcomponentes and style
import * as Styled from './styles'

// Services
import { setCompanyNameFilter } from '@/redux/slicers/jobs'
import { useAppDispatch, useAppSelector } from '@/redux/store'

// Types

const CompanyNameFilter: React.FC = () => {
  const dispatch = useAppDispatch()

  const { jobs, filters } = useAppSelector(state => state.jobsData)
  const [show, setShow] = useState(false)

  const handleCheckboxClick = (companyName: string) => {
    dispatch(setCompanyNameFilter(companyName))
  }

  const handleButtonClick = () => {
    setShow(!show)
  }

  return (
    <Styled.Container>
      <Button color="primaryReverse" onClick={handleButtonClick}>
        Filter by Company
      </Button>
      <Styled.Content show={show}>
        {jobs.map(job => (
          <Checkbox
            active={filters.companyName.includes(job.companyName)}
            checked={filters.companyName.includes(job.companyName)}
            key={`check-${job.jobId}`}
            label={job.companyName}
            onClick={() => handleCheckboxClick(job.companyName)}
          />
        ))}
      </Styled.Content>
    </Styled.Container>
  )
}

export default CompanyNameFilter
