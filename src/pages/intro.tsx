import { Particles } from '../components/Particles'
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Link } from 'react-router-dom'


export default function Intro() {

    const scrollToTop = () => {
        window.scrollTo(0,0)
      }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-transparent" style={{ height : "2000px", zIndex: 0 }}>
        <div className="absolute p-10 bg-neutral-500/25 rounded-xl border-t-3 border-b-3 border-gray-500 h-full" style={{ zIndex : 10 , left: '30%', top: '5%', transform: "translate(-20%, -5%)" }}>
        
        <div className='text-5xl font-bold mb-5 text-center'>
            Ce este astronomia?
        </div>
        <div className='text-2xl text-justify' style={{}}>
            De la începuturi, oamenii au admirat și au fost captivați de către stele și de către ce se află în afara atmosferei planetei noastre. Această curiozitate a dus la apariția studiului astronomiei. <br/>
            Astronomia este știința ce studiază universul. <br/>
            Toate obiectele și fenomenele care există în spațiul cosmic, dincolo de atmosfera Pământului, fac parte din domeniul de studiu al astronomiei. <br/>
            Astronomia este una dintre cele mai vechi științe naturale, fiind studiată încă din antichitate.
            Ea se bazează pe observarea mișcării corpurilor cerești și interacțiunilor dintre acestea pentru a înțelege structura, evoluția și legile care guvernează universul. <br/>
        </div>

        <div className='text-5xl font-bold mb-5 mt-10 text-center'>
            De ce este importantă?
        </div>
        <div className='text-2xl text-justify' style={{}}>
            Diferite fenomene astronomice determină schimbări pe Pământ. Anotimpurile sunt determinate de poziția și înclinarea planetei noastre față de Soare. Mareele sunt determinate de poziția Lunii față de Pământ. Furtunile solare (“Vânturi” solare puternice cauzate de erupții de plasmă la suprafața Soarelui, ce se desprind și se apropie de Pământ) pot produce efecte catastrofale asupra infrastructurii moderne. <br/>
            Pentru determinarea acestor evenimente, astronomia este necesară.
        </div>

        <div className="mt-5 grid gap-6 lg:grid-cols-3">
          <Card className="bg-white/10 border border-white/10 shadow-xl">
            <img
              src="https://destepti.ro/wp-content/uploads/2012/05/Primele-forme-de-telescoape.jpg"
              alt="Astronomia in antichitate"
              className="w-full object-cover"
            />
            <CardContent>
              <CardTitle>Astronomia în antichitate</CardTitle>
              <CardDescription>
                Civilizațiile antice foloseau mișcăriile Lunii și ale Soarelui în principal pentru a determina sezoanele potrivite pentru agricultură.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border border-white/10 shadow-xl">
            <img
              src="https://physics.ua.edu/wp-content/uploads/2016/05/astroparticle.jpg"
              alt="Astronomia în prezent"
              className="w-full object-cover"
            />
            <CardContent>
              <CardTitle>Astronomia în prezent</CardTitle>
              <CardDescription>
                Observarea diferitelor corpuri cerești și a interacțiunilor acestora cu spațiul din jurul lor a dus la formularea și fundamentarea multor principii fizice de bază.
              </CardDescription>
            </CardContent>
          </Card>

        <Card className="bg-white/10 border border-white/10 shadow-xl">
            <img
              src="https://substackcdn.com/image/fetch/$s_!3gh2!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8f980620-d2b8-4db0-a57b-4f44dbedc98f_3500x2625.jpeg"
              alt="Astronomia în viitor"
              className="w-full object-cover"
            />
            <CardContent>
              <CardTitle>Astronomia în viitor</CardTitle>
              <CardDescription>
                Pentru lumea modernă, spațiul cosmic mai este denumit și “Ultima Frontieră”. În viitor, oamenii vor fi nevoiți să exploreze și colonizeze spațiul pentru a se putea dezvolta în continuare.
              </CardDescription>
            </CardContent>
        </Card>
        </div>
        
        
        <div className='text-2xl text-justify mt-5'>
            Pentru fiecare dintre noi, astronomia are un rol important în realizarea noastră ca individ despre importanța și dorința fiecăruia de cunoaștere. <br/>
            Deși oamenii, ca specie, în fața enormității cosmosului, putem părea decât un punct ca un fir de nisip, fiecare dintre noi are un rol important.
        </div>

        <div className='text-5xl font-bold mb-5 mt-10 text-center'>
            Informații de bază despre astronomie
        </div>

        <div className='text-2xl text-justify mt-5'>
            Astronomia este un domeniu vast de studiu, cuprinzând atât recunoașterea diferitelor constelații și obiecte cerești, cât și cunoștințe teoretice despre fizică și chimie. <br/>
            Cele mai de bază lucruri de știut despre astronomie cuprind:

        </div>

        <div className="mt-5 grid gap-6 lg:grid-cols-3">
            <Link to="/constelatii" onClick={scrollToTop}>
                    <Card className="bg-white/10 border border-white/10 shadow-xl hover:scale-105 transition-transform duration-300">
                    <img
                    src="https://www.thoughtco.com/thmb/S17pmrJRniYPKsjcJjdT4x50-2Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/constellations-and-names-and-asterisms-58b82e3d5f9b58808097e2ac.jpg"
                    alt="Constelatii"
                    className="w-full object-cover"
                    />
                    <CardContent>
                    <CardTitle>Recunoașterea constelațiilor</CardTitle>
                    <CardDescription>
                        Recunoașterea constelațiilor și a altor obiecte cerești este o abilitate de bază în astronomie. Aceasta implică identificarea și memorarea modelelor formate de stele pe cer, precum și înțelegerea semnificației culturale și istorice a acestora.
                    </CardDescription>
                    </CardContent>
                    </Card>
            </Link>

            <Link to="/legi" onClick={scrollToTop}>
                <Card className="bg-white/10 border border-white/10 shadow-xl hover:scale-105 transition-transform duration-300">
                <img
                src="https://files.clickweb.home.pl/6d/3d/6d3dd853-fe66-4852-aa31-1979780aa449.png"
                alt="Legi și principii de bază"
                className="w-full object-cover"
                />
                <CardContent>
                <CardTitle>Cunoașterea legilor și principiilor de bază</CardTitle>
                <CardDescription>
                    Cunoașterea legilor și principiilor de bază ale universului, cum ar fi legile mișcării lui Kepler, legea gravitației universale a lui Newton și teoria relativității a lui Einstein, este esențială pentru înțelegerea modului în care funcționează cosmosul.
                </CardDescription>
                </CardContent>
                </Card>
            </Link>

            <Link to="/cosmologie" onClick={scrollToTop}> 
                <Card className="bg-white/10 border border-white/10 shadow-xl hover:scale-105 transition-transform duration-300">
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/CMB_Timeline300_no_WMAP.jpg/1280px-CMB_Timeline300_no_WMAP.jpg"
                alt="Big bang"
                className="w-full object-cover"
                />
                <CardContent>
                <CardTitle>Cunoașterea istoriei universului</CardTitle>
                <CardDescription>
                    Cunoașterea istoriei universului, de la Big Bang până în prezent, este crucială pentru înțelegerea modului în care s-a format și a evoluat cosmosul.
                </CardDescription>
                </CardContent>
                </Card>
            </Link>
        </div>

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
