import { Particles } from '../components/Particles'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import YouTube, { type YouTubeProps } from 'react-youtube';

export default function Legi() {

        const onPlayerReady: YouTubeProps['onReady'] = (event) => {
            // access to player in all event handlers via event.target
            event.target.pauseVideo();
        }

        const opts: YouTubeProps['opts'] = {
            height: '390',
            width: '640',
            playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            },
        };

        const items1 = [
        {
            value: "legea1",
            trigger: "Legea I: Planeta se mișcă în jurul stelei pe o orbită eliptică, în care steaua reprezintă unul din focare.",
            content:
            <div>
                Astronomii, începând de la Ptolemeu până la Nicolaus Copernic, credeau că planetele se mișcă pe traiectorii circulare sau traiectorii care pot fi obținute din suprapunerea mai multor traiectorii circulare. Johannes Kepler, în 1609, a infirmat această presupunere. După studiul materialelor rezultate din observațiile minuțioase a lui Tycho Brahe, el a dedus că planetele se mișcă pe traiectorii eliptice.
            </div>,
        },
        {
            value: "legea2",
            trigger: "Legea II: Linia dreaptă care unește planeta cu steaua mătură arii egale în perioade de timp egale.",
            content:
            <div>
                Din această lege, numită „a ariilor egale”, rezultă că o planetă se deplasează cu atât mai repede cu cât este mai aproape de stea. În cazul Pământului, raza vectoare mătură într-o secundă o arie de peste 2 miliarde km2.
            </div>,        
        },
        {
            value: "legea3",
            trigger: "Legea III: Pătratul perioadei de revoluție a planetei este proporțional cu cubul semiaxei mari a orbitei.",
            content:
            <div>
                Această lege, numită „a perioadelor”, exprimă o relație matematică între perioada de revoluție a unei planete și distanța sa față de stea. Ea poate fi exprimată prin formula: T^2 = k * a^3, unde T este perioada de revoluție, a este semiaxa mare a orbitei și k este o constantă care depinde de masa stelei.
            </div>,
        },
        ]


  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-transparent" style={{ height : "2000px", zIndex: 0 }}>
        <div className="absolute p-10 bg-neutral-500/25 rounded-xl border-t-3 border-b-3 border-gray-500 h-full" style={{ zIndex : 10 , left: '30%', top: '5%', transform: "translate(-20%, -5%)" }}>
        
            <div className='text-5xl font-bold mb-5 text-center'>
                Legile lui Kepler
            </div>
            <div className='text-2xl text-justify' style={{}}>
                Legile lui Kepler reprezintă bazele calculelor și observațiilor sistemelor stelare simple. Aceste legi permit calculul perioadelor orbitale, distanțelor dintre planete și a mișcării acestora.
            </div>
            <div className='grid lg:grid-cols-2 gap-2 items-center align-middle mt-5 mb-10'>
                <Accordion
                type="multiple"
                className="max-w-fit"
                defaultValue={["notifications"]}
                >
                {items1.map((item) => (
                    <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger><p className='text-justify text-2xl font-bold'>{item.trigger}</p></AccordionTrigger>
                    <AccordionContent className='h-fit mb-1'><p className='text-justify text-xl'>{item.content}</p></AccordionContent>
                    </AccordionItem>
                ))}
                </Accordion>
                <YouTube className='' videoId="Dvoe8Ib5D1o" opts={opts} onReady={onPlayerReady} />
            </div>

            <div className='text-5xl font-bold mb-5 text-center'>
                Legea gravitației universale
            </div>
            <div className='grid lg:grid-cols-2 items-center align-center gap-2 mb-10'>

                <div className='text-2xl text-justify max-w-fit' style={{}}>
                    Legea gravitației universale, formulată de Isaac Newton, afirmă că orice două corpuri din univers se atrag reciproc cu o forță care este direct proporțională cu produsul maselor lor și invers proporțională cu pătratul distanței dintre ele. Această lege a fost esențială pentru înțelegerea mișcării planetelor și a altor obiecte cerești. <br/>
                    Legea atracției universale funcționează în sistemele simple precum sistemul Lună-Pământ sau Pământ-Soare, dar la scală mai mare efectele relativistice produc erori majore în precizia calculelor.
                </div>
                <YouTube className='' videoId="_b8Jy5RnAaQ" opts={opts} onReady={onPlayerReady} />
            </div>
            <div className='text-5xl font-bold mb-5 text-center'>
                Relativitatea generală și specială
            </div>
            <div className='grid lg:grid-cols-2 items-center align-center gap-2 mb-10'>
                <div className='text-2xl text-justify' style={{}}>
                    Teoria relativității generale, formulată de Albert Einstein, a revoluționat înțelegerea noastră asupra gravitației. Ea afirmă că gravitația nu este o forță în sensul clasic, ci o curbură a spațiului-timp cauzată de prezența masei și energiei. Această teorie a fost confirmată prin numeroase experimente și observații, cum ar fi devierea luminii de către gravitație și existența găurilor negre. <br/>
                    Teoria relativității speciale, de asemenea formulată de Einstein, se ocupă de mișcarea obiectelor la viteze apropiate de cea a luminii și introduce conceptul de dilatare a timpului și contracție a lungimii.
                </div>
                <YouTube className='' videoId="tzQC3uYL67U" opts={opts} onReady={onPlayerReady} />
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
