import  { useState } from 'react'
import { Particles } from '../components/Particles'
import {
  Card,
  CardTitle,

  CardContent,
} from '@/components/ui/card'
import CircularGallery from '@/components/CircularGallery'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"


const images1: { image: string; text: string; description: string }[] = [
    {
        image: "https://www.star-registration.co.uk/cdn/shop/articles/24_Grosser-Baer_00dd08e1-4f0b-4241-93a2-ee9fa92c3c6c_1200x1200.jpg?v=1748065012",
        text: "Ursa Mare",
        description: "Ursa Mare este o constelație circumpolară în emisfera nordică. Aceasta conține un asterism cunoscut sub numele de \"Carul Mare\". Este una dintre cele mai recunoscute constelații de pe cerul nopții."
    },
    {
        image: "https://www.star-registration.com/cdn/shop/articles/36_Kleiner-Baer_6fc0d4a1-9019-4e00-aa53-cbc3713e1d1c_1200x1200.jpg?v=1748064870",
        text: "Ursa Mică",
        description: "Ursa Mică este o constelație circumpolară care conține Steaua Polară. Este o stea extrem de importantă pentru navigație și determinarea direcției nord."
    },
    {
        image: "https://www.star-registration.com/cdn/shop/articles/11_Drache_c6d41b51-cc5d-4f27-a7c3-689c7d64f5d1_1200x1200.jpg?v=1748064010",
        text: "Draco",
        description: "Draco este o constelație circumpolară care înconjoară Polul Nord Ceresc. Aceasta este o constelație foarte întinsă și conține o mulțime de stele deși nu sunt foarte luminoase."
    },
    {
        image: "https://www.star-registration.com/cdn/shop/articles/33_Kepheus_1200x1200.jpg?v=1681382015",
        text: "Cepheus",
        description: "Cepheus este o constelație circumpolară din emisfera nordică. Este o constelație relativ mare și conține Steaua Delta Cephei, o stea variabilă importantă pentru astronomia modernă."
    },
    {
        image: "https://www.star-registration.com/cdn/shop/articles/32_Kassiopeia_ENGLISCH_1200x1200.jpg?v=1681377965",
        text: "Cassiopeia",
        description: "Cassiopeia este o constelație circumpolară cu o formă foarte distinctivă asemănătoare literei \"W\". Este ușor de recunoscut pe cerul nopții și conține mai multe stele luminoase."
    },
    {
        image: "https://www.star-registration.com/cdn/shop/articles/55_Perseus_323b8b3e-0ee8-45df-9b03-f22ea2748571_1200x1200.jpg?v=1748064510",
        text: "Perseus",
        description: "Perseus este o constelație din emisfera nordică din apropierea Cassiopeii. Aceasta conține o stea variabilă binară eclipsantă celebră numită Algol."
    },
    {
        image: "https://www.star-registration.com/cdn/shop/articles/65_Schwan_1200x1200.jpg?v=1681971086",
        text: "Cygnus",
        description: "Cygnus este o constelație circumpolară ascunzând o formă distinctivă asemănătoare unei lebede. Aceasta conține steaua Deneb, una dintre cele trei stele ale Triunghiului de Vară."
    },
    {
        image: "https://www.star-registration.com/cdn/shop/articles/20_Fuhrmann_1200x1200.jpg?v=1680678306",
        text: "Auriga",
        description: "Auriga este o constelație circumpolară din emisfera nordică cunoscută sub numele de \"Vizitiul\". Aceasta conține Capella, o stea extrem de luminoasă și sistemul de stele binare."
    },
    {
        image: "https://www.star-registration.com/cdn/shop/articles/28_Herkules_c0efdffc-296f-471f-b437-e1dc34b99f22_1200x1200.jpg?v=1748064133",
        text: "Hercule",
        description: "Hercule este o constelație circumpolară mare din emisfera nordică cu o formă ciudată. Aceasta conține M13, unul dintre cele mai impresionante roiuri de stele globulare vizibile."
    },
]

const images2: { image: string; text: string } [] = 
[
    {
        image: "https://www.star-registration.com/cdn/shop/articles/83_Widder_1200x1200.jpg?v=1682353402",
        text: "Berbec",
    },
    {
        image: "https://www.star-registration.com/cdn/shop/articles/71_Stier_42f5f1e3-52f3-410e-af94-d8e14dd98337_1200x1200.jpg?v=1748064751",
        text: "Taur",
    },
    {
        image: "https://www.star-registration.com/cdn/shop/articles/88_Zwillinge_b10e8f56-b3f6-4627-878b-08b23320f88d_1200x1200.jpg?v=1748064094",
        text: "Gemeni",
    },
    {
        image: "https://www.star-registration.com/cdn/shop/articles/40_Krebs_1200x1200.jpg?v=1681456204",
        text: "Rac",
    },
    {
        image: "https://www.star-registration.com/cdn/shop/articles/43_Loewe_ae6af638-f980-4d30-b667-dbf4fb7d3479_1200x1200.jpg?v=1748064192",
        text: "Leu",
    },
    {
        image: "https://www.star-registration.com/cdn/shop/articles/31_Jungfrau_58000cd9-338c-4315-9d4b-9b1355a4fb60_1200x1200.jpg?v=1748064975",
        text: "Fecioara",
    },
    {
        image: "https://www.star-registration.com/cdn/shop/articles/79_Waage_6674c693-791a-4c73-af1d-7fb5d0604ba3_1200x1200.jpg?v=1748064266",
        text: "Balanța",
    },
    {
        image: "https://www.star-registration.com/cdn/shop/articles/69_Skorpion_bf8cb997-5b99-426d-96c5-019832ad47fe_1200x1200.jpg?v=1748064689",
        text: "Scorpion",
    },
    {
        image: "https://www.star-registration.com/cdn/shop/articles/64_Schuetze_9742c5c4-0c46-4b36-80de-fd827a2b7372_1200x1200.jpg?v=1748064611",
        text: "Săgetător",
    },
    {
        image: "https://www.star-registration.com/cdn/shop/articles/70_Steinbock_1200x1200.jpg?v=1681998386",
        text: "Capricorn",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB1-_79b5FTeXIvJySqG1OZigAR7yfmqszxg&s",
        text: "Vărsător",
    },
    {
        image: "https://www.star-registration.com/cdn/shop/articles/16_Fische_885f87a6-2b35-45c5-88e5-c1047a842dc6_1200x1200.jpg?v=1748064889",
        text: "Pești",
    },
        {
        image: "https://www.star-registration.com/cdn/shop/articles/63_Schlangentraeger_12e5c1d1-d491-423f-a035-d30e708e1c82_1200x1200.jpg?v=1748064423",
        text: "Ophiuchus",
    },
]

export default function Constelatii() {
  const [selectedConstellation, setSelectedConstellation] = useState<typeof images1[0] | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-transparent" style={{ height : "2400px", zIndex: 0 }}>
        <div className="absolute p-10 bg-neutral-500/25 rounded-xl border-t-3 border-b-3 border-gray-500 h-full" style={{ zIndex : 10 , left: '30%', top: '5%', transform: "translate(-20%, -5%)" }}>
        
        <div className='text-5xl font-bold mb-5 text-center'>
            Ce sunt constelațiile?
        </div>
        <div className='text-2xl text-justify mb-10' style={{}}>
            <p className='mb-3'>
            Constelațiile sunt grupări aparente de stele care, unite printr-o linie imaginară, seamănă cu un anumit obiect, animal sau anumite creaturi mitologice. Constelațiile nu reprezintă grupări reale de stele, ci doar aparente, în anumite constelații stelele aflându-se la distanțe reale de zeci sau chiar sute de ani-lumină. <br/>
            </p>
            <p className='mb-3'>
            În astronomia modernă, constelațiile se mai referă și la cele 88 de zone în care este împărțită bolta cerească.
            </p>
            <p className='mb-3'>
            Denumirile majorității constelațiilor nordice provin din diferitele culturi din antichitate ce le-au observat și înregistrat, iar cele sudice au fost alese de către navigatori și astronomi din epoca Marilor descoperiri geografice.
            </p>
            <p className='mb-3'>
            Constelațiile în astronomie sunt foarte importante pentru orientarea în spațiu și pentru clasificarea pozițiilor anumitor obiecte în funcție de aparența lor pe cerul nostru. 
            </p>
            Cele mai importante constelații în astronomie sunt constelațiile circumpolare și constelațiile zodiacale/ecliptice.
        </div>
        
        <div className='text-5xl font-bold mb-5 text-center'>
            Constelațiile circumpolare
        </div>
        <div className='text-2xl text-justify mb-5' style={{}}>
            Constelațiile circumpolare sunt constelațiile care nu apun niciodată. Denumirea acestora provine de la Cercul de circumpolaritate, o zonă variabilă în funcție de latitudine care este permanent vizibilă pe cerul nopții în acea regiune. În Emisfera Nordică, cele mai cunoscute sunt Ursa Mare și Ursa Mică.       
        </div>

        <div className=''>
            <Carousel className="w-full max-w-2xl mx-auto" opts={{align: "start",loop: true,}}>
                <CarouselContent>
                    {images1.map((item, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                        <Card className="bg-white/10 border border-white/10 shadow-xl cursor-pointer scale-90 hover:scale-95 transition-transform" onClick={() => {
                          setSelectedConstellation(item)
                          setIsOpen(true)
                        }}>
                            <img
                              src={item.image}
                              alt={item.text}
                              className="w-full h-fit object-cover "
                            />
                            <CardContent className="pt-4">
                            <CardTitle>{item.text}</CardTitle>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>

        <div className='text-5xl font-bold mb-5 text-center'>
            Constelațiile zodiacale
        </div>
        <div className='text-2xl text-justify mb-5' style={{}}>
            Constelațiile zodiacale sau ecliptice sunt constelațiile ce se află în apropierea eclipticii. Ecliptica este linia imaginară pe care o trasează Soarele, Luna și planetele din Sistemul Solar pe cer. Clasificarea constelațiilor zodiacale diferă în astronomie față de cele cunoscute în zodiac, adăugându-se ca și constelație principală Ophiucus pe lângă cele deja cunoscute.       
        </div>

        <div className='border-l-2 border-r-2 border-gray-500 rounded-xl' style={{ height: '600px', position: 'relative' }}>
            <CircularGallery
            bend={3}
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.05}
            items={images2}
            />
        </div>

        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{selectedConstellation?.text}</AlertDialogTitle>
              <AlertDialogDescription>
                {selectedConstellation?.description}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={() => setIsOpen(false)}>Inchide</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>


        
        </div>
        
     <Particles 
        className="bg-transparent absolute w-full h-full z-0"
        particleColors={['#ffffff', '#ffffff']}
        particleCount={6000}
        particleSpread={50}
        speed={0.1}
        particleBaseSize={200}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
        pixelRatio={1}
      />

    </div>
  )
}
