"use client";
import DemoSlider from '@/components/Slider/DemoSlider'
import { Box, Typography, FormGroup } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import dataSlider from "@/consts/slider-data.json";

const dataSliderMT = dataSlider.filter(thisEl => [1,2,3,21].includes(thisEl.id))
const dataSliderEM = dataSlider.filter(thisEl => [5,6,7,10,16,18,20,22].includes(thisEl.id))
const dataSliderII = dataSlider.filter(thisEl => [17,24].includes(thisEl.id))
const dataSliderQS = dataSlider.filter(thisEl => [4,9,11,12,13,14,15,19,23,25].includes(thisEl.id))

const itemTitleStyle = { textAlign: 'center' }

const Home = () => {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down('tablet'))
  const laptop = useMediaQuery(theme.breakpoints.down('laptop'))
  const itemContainerStyle = { height: '100vh', pt: tablet ? 5 : 10 }
  const itemBodyStyle = { mt: 4, mb: 6, mx: 'auto', maxWidth: tablet ? '100%' : '80%' }

  return (
    <Box sx={{ maxWidth: 1280, marginX: 'auto' }}>
      <Box sx={{ height: '100vh', pt: tablet ? 15 : 10 }}>
        <Typography variant='h1' sx={{ fontWeight: 500 }}>MG Plastics</Typography>
        <Typography variant='h3' sx={{ mt: laptop ? 5 : 12 }}>Willkommen bei MG Plastics - die Zukunft der Kunststofftechnik beginnt hier!</Typography>
        <Typography variant='h5' sx={{ mt: laptop ? 5 : 12 }}>Als neues Unternehmen in der Branche sind wir bei MG Plastics bereit, die Welt der Kunststoffproduktion mit frischen Ideen und modernsten Technologien zu revolutionieren. Unsere Mission ist es, von Anfang an innovative und zuverlässige Lösungen für Ihre Kunststoffanforderungen zu bieten.</Typography>
        <Typography variant='h3' sx={{ mt: laptop ? 5 : 10 }}>Was wir bieten:</Typography>
      </Box>
      <Box sx={{ ...itemContainerStyle }} id='Modernste Technologie'>
        <Typography variant='h4' sx={{ ...itemTitleStyle }}>Modernste Technologie</Typography>
        <Typography variant='body1' sx={{ ...itemBodyStyle }}>
          Wir investieren in die neuesten CNC-Dreh- und Fräsmaschinen, um präzise und effiziente Bearbeitung zu gewährleisten. Unsere Anlagen sind auf dem neuesten Stand der Technik und bereit, den Anforderungen moderner Produkte gerecht zu werden.
        </Typography>
        <DemoSlider data={dataSliderMT} />
      </Box>
      <Box sx={{ ...itemContainerStyle }} id='Engagierte Montage'>
        <Typography variant='h4' sx={{ ...itemTitleStyle }}>Engagierte Montage</Typography>
        <Typography variant='body1' sx={{ ...itemBodyStyle }}>
          Trotz unserer kurzen Geschichte legen wir großen Wert auf die Qualität der Montage. Jedes Teil wird sorgfältig geprüft und montiert, um höchste Leistung und Zuverlässigkeit zu gewährleisten.
        </Typography>
        <DemoSlider data={dataSliderEM} />
      </Box>
      <Box sx={{ ...itemContainerStyle }} id='Qualifiziertes Schweißen'>
        <Typography variant='h4' sx={{ ...itemTitleStyle }}>Qualifiziertes Schweißen</Typography>
        <Typography variant='body1' sx={{ ...itemBodyStyle }}>
          Wir verstehen die Bedeutung einer starken und haltbaren Verbindung in Kunststoffprodukten. Unsere Schweißexperten arbeiten mit den neuesten Verfahren, um sicherzustellen, dass jedes Produkt lange hält.
        </Typography>
        <DemoSlider data={dataSliderQS} />
      </Box>
      <Box sx={{ ...itemContainerStyle }} id='Innovative Ingenieurarbeit'>
        <Typography variant='h4' sx={{ ...itemTitleStyle }}>Innovative Ingenieurarbeit</Typography>
        <Typography variant='body1' sx={{ ...itemBodyStyle }}>
          Unser Team besteht aus leidenschaftlichen Ingenieuren, die ständig nach innovativen Wegen suchen, um die Produktivität zu steigern und die Kosten zu senken. Wir sind hier, um mit Ihnen zusammenzuarbeiten und maßgeschneiderte Lösungen zu entwickeln, die Ihren spezifischen Bedürfnissen entsprechen.
        </Typography>
        <DemoSlider data={dataSliderII} />
      </Box>
      <Box sx={{ height: '100vh', pt: 14 }}>
        <Typography variant='h3'>Unser Engagement:</Typography>
        <Typography variant='body1' sx={{ mt: 14 }}>
          <strong>Qualität von Anfang an:</strong> Wir glauben, dass Qualität nicht verhandelbar ist. Auch als neues Unternehmen setzen wir strenge Qualitätsstandards und Prüfverfahren, um sicherzustellen, dass jedes Produkt unseren hohen Erwartungen entspricht.
        </Typography>
        <Typography variant='body1' sx={{ mt: 1 }}>
          <strong>Kundenorientierung:</strong> Ihre Zufriedenheit steht für uns an erster Stelle. Wir sind bestrebt, eng mit unseren Kunden zusammenzuarbeiten, um sicherzustellen, dass alle Produkte genau Ihren Wünschen entsprechen.
        </Typography>
        <Typography variant='body1' sx={{ mt: 1 }}>
          <strong>Flexibilität und Anpassungsfähigkeit:</strong> Als neues Unternehmen sind wir flexibel und schnell anpassbar an die sich schnell ändernden Marktanforderungen. Wir sind bereit, neue Herausforderungen anzunehmen und innovative Lösungen für die komplexesten Probleme zu finden.
        </Typography>
        <Typography variant='body1' sx={{ mt: 14 }}>Kontaktieren Sie uns heute, um mehr darüber zu erfahren, wie MG Plastics Ihnen helfen kann, Ihre Ziele in der Kunststoffproduktion zu erreichen. Wir sind begeistert von der Möglichkeit, mit Ihnen an spannenden Projekten zu arbeiten und die Zukunft der Kunststofftechnik gemeinsam zu gestalten!</Typography>
      </Box>
      <Box>
        <FormGroup>

        </FormGroup>
      </Box>
    </Box>
  )
}

export default Home
