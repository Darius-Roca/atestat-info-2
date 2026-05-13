import { Particles } from '../components/Particles'
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

export default function Realizari() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-transparent" style={{ height : "1200px", zIndex: 0 }}>
        <div className="absolute p-10 bg-neutral-500/25 rounded-xl border-t-3 border-b-3 border-gray-500 h-full" style={{ zIndex : 10 , left: '30%', top: '5%', transform: "translate(-20%, -5%)" }}>
        
        <div className='text-5xl font-bold mb-5 text-center'>
            Mari descoperiri și realizări în astronomie
        </div>
        <div className='text-2xl text-justify' style={{}}>
            De-a lungul istoriei, astronomia a fost martora unor descoperiri și realizări remarcabile care au schimbat fundamental înțelegerea noastră despre univers. De la descoperirea naturii adevărate a stelelor, până la aterizarea oamenilor pe Lună, aceste realizări au avut un impact profund asupra științei și culturii umane. <br/>
            Printre cele mai importante realizări în astronomie se numără:
        </div>
        <ul className='list-disc list-inside text-2xl mt-5 mb-10'>
            <li>Descoperirea heliocentrismului de către Nicolaus Copernic, care a propus că Soarele, și nu Pământul, este centrul sistemului solar.</li>
            <li>Descoperirea legilor mișcării planetare de către Johannes Kepler, care au descris modul în care planetele se mișcă în jurul Soarelui.</li>
            <li>Descoperirea gravitației universale de către Isaac Newton, care a explicat forța care guvernează mișcarea corpurilor cerești.</li>
            <li>Descoperirea galaxiilor și a expansiunii universului de către Edwin Hubble, care a demonstrat că universul este mult mai vast decât se credea anterior.</li>
            <li>Aterizarea oamenilor pe Lună în cadrul misiunii Apollo 11 în 1969, o realizare monumentală în explorarea spațiului.</li>
            <li>Descoperirea exoplanetelor, care a deschis noi perspective în căutarea vieții extraterestre.</li>
        </ul>

        <div className="mt-5 grid gap-6 lg:grid-cols-3">
                  <Card className="bg-white/10 border border-white/10 shadow-xl">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUi4OyozbsB8for1LiKEe22dqUMin003eayA&s"
                      alt="Apollo 11"
                      className="w-full object-cover"
                    />
                    <CardContent>
                      <CardTitle>Apollo 11</CardTitle>
                      <CardDescription>
                        Aterizarea oamenilor pe Lună în cadrul misiunii Apollo 11 în 1969 a fost o realizare monumentală în explorarea spațiului. Prin concurența spațială dintre Statele Unite și Uniunea Sovietică au fost realizate avansuri majore în știința materialelor și a creării de rachete și alte sisteme de transport spațial.
                      </CardDescription>
                    </CardContent>
                  </Card>
        
                  <Card className="bg-white/10 border border-white/10 shadow-xl">
                    <img
                      src="https://science.nasa.gov/wp-content/uploads/2023/05/jwst-v-hst-ttable-4k-woperson-tweek-jpg.webp"
                      alt="Telescoapele James Webb și Hubble"
                      className="w-full object-cover"
                    />
                    <CardContent>
                      <CardTitle>Telescoapele James Webb și Hubble</CardTitle>
                      <CardDescription>
                        Telescoapele James Webb și Hubble au fost instrumente esențiale în descoperirea și catalogarea unei mulțimi de exoplanete, sisteme stelare, nebuloase și chiar elemente chimice ce ar putea semnifica prezența unor forme primitive de viață în alte sisteme stelare. Acestea au reprezentat inovații majore în tehnologia de observare și analizare a universului.
                      </CardDescription>
                    </CardContent>
                  </Card>
        
                <Card className="bg-white/10 border border-white/10 shadow-xl">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR64Ri5Cd46jcE2UDuQlSh0cL-JIqprC9iTAQ&s"
                      alt="Roverele marțiene"
                      className="w-full object-cover"
                    />
                    <CardContent>
                      <CardTitle>Roverele marțiene</CardTitle>
                      <CardDescription>
                        Roverul Curiosity și roverul Perseverance au fost trimise pe Marte pentru a explora suprafața planetei și pentru a căuta semne de viață. Acestea au adus informații valoroase despre geologia, clima și potențialul de locuire al planetei roșii. <br/>
                        Roverele marțiene au fost echipate cu o varietate de instrumente științifice, inclusiv camere, spectrometre și brațe robotice, pentru a analiza solul și rocile marțiene. Acestea au descoperit dovezi ale existenței apei în trecutul planetei și au identificat compuși organici care ar putea fi asociați cu viața. <br/>
                      </CardDescription>
                    </CardContent>
                </Card>
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
