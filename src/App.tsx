import { Heading, Box, Image, Text } from '@chakra-ui/react'
import './App.css'
import Content from './components/Content'

function App() {
  return (
    <main>
      <Box
        display={'flex'} flexDirection={'column'} backgroundColor={'transparent'} alignItems={'center'}
        gap={'1.5rem'}
        >
        {/* TODO: Change image... */}
        <Image borderRadius={'full'} boxSize={'200px'} src='/thumbnaill.png' alt='Roberto Carrichi' fallbackSrc='https://via.placeholder.com/200'/>
        <Heading size={'2xl'} textAlign={'center'}>Hey! I'm Carrichi.</Heading>
        <Text fontSize={'2xl'}>a Software Developer</Text>
        <Content />
        
        <Text fontSize={'3xl'}>I'm working on it, okay?</Text>
      </Box>
    </main>
  )
}

export default App
