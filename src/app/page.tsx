import Slider from '@/components/Slider/Slider'
import { imgParams } from '@/consts/imgParams'
import { Box, Typography, FormGroup } from '@mui/material'

const Home = () => {
  return (
    <Box>
      <Box sx={{ height: '100vh', pt: 14 }}>
        <Typography variant='h1' sx={{  }}>MG – Plastics</Typography>
        <Typography variant='h3' sx={{ mt: 14 }}>Willkommen bei MG Plastics - die Zukunft der Kunststofftechnik beginnt hier!</Typography>
        <Typography variant='h5' sx={{ mt: 14, textAlign: 'center' }}>Als neues Unternehmen in der Branche sind wir bei MG Plastics bereit, die Welt der Kunststoffproduktion mit frischen Ideen und modernsten Technologien zu revolutionieren. Unsere Mission ist es, von Anfang an innovative und zuverlässige Lösungen für Ihre Kunststoffanforderungen zu bieten.</Typography>
      </Box>
      <Box sx={{ height: '100vh', pt: 14 }} id='Modernste Technologie'>
        <Typography variant='h3'>Was wir bieten:</Typography>
        <Typography variant='body1' sx={{ mt: 14 }}>
          Modernste Technologie: Wir investieren in die neuesten CNC-Dreh- und Fräsmaschinen, um präzise und effiziente Bearbeitung zu gewährleisten. Unsere Anlagen sind auf dem neuesten Stand der Technik und bereit, den Anforderungen moderner Produkte gerecht zu werden.
        </Typography>
        <Slider images={['/img/Modernste-Technologie/1.jpg','/img/Modernste-Technologie/2.jpg','/img/Modernste-Technologie/3.jpg','/img/Modernste-Technologie/21.jpg']} imgParams={imgParams} heightDefault={500} key={'slider-1'} />
      </Box>
      <Box sx={{ height: '100vh', pt: 14 }} id='Engagierte Montage'>
        <Typography variant='body1' sx={{ mt: 14 }}>
          Engagierte Montage: Trotz unserer kurzen Geschichte legen wir großen Wert auf die Qualität der Montage. Jedes Teil wird sorgfältig geprüft und montiert, um höchste Leistung und Zuverlässigkeit zu gewährleisten.
        </Typography>
      </Box>
      <Box sx={{ height: '100vh', pt: 14 }} id='Qualifiziertes Schweißen'>
        <Typography variant='body1' sx={{ mt: 14 }}>
          Qualifiziertes Schweißen: Wir verstehen die Bedeutung einer starken und haltbaren Verbindung in Kunststoffprodukten. Unsere Schweißexperten arbeiten mit den neuesten Verfahren, um sicherzustellen, dass jedes Produkt lange hält.
        </Typography>
      </Box>
      <Box sx={{ height: '100vh', pt: 14 }} id='Innovative Ingenieurarbeit'>
        <Typography variant='body1' sx={{ mt: 14 }}>
          Innovative Ingenieurarbeit: Unser Team besteht aus leidenschaftlichen Ingenieuren, die ständig nach innovativen Wegen suchen, um die Produktivität zu steigern und die Kosten zu senken. Wir sind hier, um mit Ihnen zusammenzuarbeiten und maßgeschneiderte Lösungen zu entwickeln, die Ihren spezifischen Bedürfnissen entsprechen.
        </Typography>
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
