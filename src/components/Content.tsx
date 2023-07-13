import { Tabs, TabList, TabPanels, Tab, TabPanel, Text } from '@chakra-ui/react'

export default function Content() {
  return (
    <Tabs>
      <TabList>
        <Tab>About me</Tab>
        <Tab>Core Abilities</Tab>
        <Tab>My projects</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Text>
            ¡Hola! Mi nombre es Roberto y soy un desarrollador con conocimientos integrales en el desarrollo de Software y en la gestión de proyectos. 😄
          </Text>

          <Text>
            Soy estudiante en la Facultad de Ingeniería en la Universidad Nacional Autónoma de México, Support Technician en Debmedia y también un desarrollador Freelance. ✨
          </Text>

          <Text>
            Soy un chico que siempre ha mostrado la iniciativa para mejorar los procesos e implementar cosas nuevas por el futuro del equipo. Un chico entusiasta por aprender y tener nuevos retos.
          </Text>

          <Text>
            Si gustas puedes ponerte en contacto conmigo puedes enviarme un correo a roberto@carrichi.com, ¡será un gusto colaborar!
          </Text>
        </TabPanel>
        <TabPanel>My Abilitiessss / Experience</TabPanel>
        <TabPanel>My projects</TabPanel>
      </TabPanels>
    </Tabs>
  )
}