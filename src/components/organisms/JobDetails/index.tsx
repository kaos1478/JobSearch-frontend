// External libs
import Image from 'next/image'

// Assets

// Componentes
import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'

// Services
import { toggleModal } from '@/redux/slicers/jobs'
import { useAppDispatch, useAppSelector } from '@/redux/store'

// Types

const JobDetails: React.FC = () => {
  const { selected } = useAppSelector(state => state.jobsData)
  const dispatch = useAppDispatch()

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Texts>
          <Typography as="heading1" marginBottom=".5rem">
            {selected?.jobTitle}
          </Typography>
          <Typography as="heading2" marginBottom=".5rem">
            {selected?.companyName}
          </Typography>
          <Typography as="body2">{selected?.location}</Typography>
          <Typography as="body1" marginTop=".5rem">
            {selected?.estimatedSalary}
          </Typography>
        </Styled.Texts>
        <Styled.Actions>
          <Image
            src={`/api/imageProxy?imageUrl=${selected?.companyLogo}`}
            width={50}
            height={50}
            alt="logo"
            objectFit="contain"
          />
          <Styled.Buttons>
            <Button
              color="primaryReverse"
              onClick={() => dispatch(toggleModal())}
              margin="0 .5rem 0 0"
            >
              Back
            </Button>
            <Button
              color="primary"
              onClick={() => window.open(selected?.OBJurl, '_blank')}
            >
              View or Apply
            </Button>
          </Styled.Buttons>
        </Styled.Actions>
      </Styled.Header>
      <Styled.Description
        dangerouslySetInnerHTML={{ __html: selected?.jobDescription || '' }}
      />
    </Styled.Container>
  )
}

export default JobDetails
