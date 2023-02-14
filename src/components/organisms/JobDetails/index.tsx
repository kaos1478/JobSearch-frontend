// External libs

// Assets

// Componentes

// Subcomponentes and style
import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import { useAppSelector } from '@/redux/store'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import * as Styled from './styles'

// Services

// Types

const JobDetails: React.FC = () => {
  const { selected } = useAppSelector(state => state.jobsData)
  const [imageURL, setImageURL] = useState(
    `/api/imageProxy?imageUrl=${selected?.companyLogo}`
  )

  useEffect(() => {
    setImageURL(`/api/imageProxy?imageUrl=${selected?.companyLogo}`)
  }, [selected?.companyLogo])

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
            src={imageURL}
            width={50}
            height={50}
            alt="test"
            objectFit="contain"
            onError={() =>
              setImageURL(
                '/api/imageProxy?imageUrl=http://www.cetegeducacao.com.br/wp-content/themes/cetegeducacao/assets/dist/img/no-image.png'
              )
            }
          />
          <Button
            color="primary"
            onClick={() => window.open(selected?.OBJurl, '_blank')}
          >
            View or Apply
          </Button>
        </Styled.Actions>
      </Styled.Header>
      <Styled.Description
        dangerouslySetInnerHTML={{ __html: selected?.jobDescription || '' }}
      />
    </Styled.Container>
  )
}

export default JobDetails
