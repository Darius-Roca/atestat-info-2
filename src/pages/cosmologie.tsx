import React from 'react'
import { Particles } from '../components/Particles'
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import YouTube, { type YouTubeProps } from 'react-youtube';

export default function Cosmologie() {


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


  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-transparent" style={{ height : "2600px", zIndex: 0 }}>
        <div className="absolute p-10 bg-neutral-500/25 rounded-xl border-t-3 border-b-3 border-gray-500 h-full" style={{ zIndex : 10 , left: '30%', top: '5%', transform: "translate(-20%, -5%)" }}>
        
        <div className='text-5xl font-bold mb-5 text-center'>
            Ce este cosmologia?
        </div>
        <div className='text-2xl text-justify' style={{}}>
            Cosmologia este ramura astronomiei care se ocupă cu studiul originii, structurii, evoluției și destinului universului. Ea încearcă să răspundă la întrebări fundamentale despre natura universului, cum ar fi cum a început totul, cum s-a format structura cosmică și care este soarta finală a universului.
        </div>

        <div className='text-5xl font-bold mb-5 mt-10 text-center'>
            Începuturile Universului
        </div>
        <div className='grid lg:grid-cols-2 gap-5 items-center align-middle mt-5 mb-10'>
            <div className='text-2xl text-justify' style={{}}>
                Există mai multe teorii despre crearea universului, dar cea mai acceptată este teoria Big Bang-ului. <br/>
                Conform acestei teorii, universul a început acum aproximativ 13.8 miliarde de ani dintr-un punct extrem de fierbinte și dens, care a început să se extindă rapid. Această expansiune a continuă și astăzi, iar universul se răcește pe măsură ce se extinde. <br/>
                În primele momente după Big Bang, universul a fost umplut cu o "supă" de particule elementare și radiație. Pe măsură ce universul s-a extins și s-a răcit, aceste particule au început să se combine pentru a forma atomi, iar apoi galaxii, stele și planete. <br/>
                Evidența pentru Big Bang este reprezentată de expansiunea universului și de radiația cosmică de fond, care poate fi interpretată ca o "amprentă" a momentului în care universul a început să se extindă.
            </div>
            <Card className="bg-white/10 border border-white/10 shadow-xl">
                    <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/CMB_Timeline300_no_WMAP.jpg/1280px-CMB_Timeline300_no_WMAP.jpg"
                    alt="Big bang"
                    className="w-full object-cover"
                    />
                    <CardContent>
                        <CardTitle>Teoria Big Bang-ului</CardTitle>
                            <CardDescription>
                                Înainte de a exista propriu-zis, universul era reprezentat de o particulă subatomică infinitesimal de mică ce conținea toată materia și energia pe care o observăm acum în Univers. <br/>
                                Datorită fluctuațiilor cuantice, această particulă a "explodat", începând să se extindă și să se răcească, continuând aceste procese până în prezent.
                            </CardDescription>
                        </CardContent>
            </Card>
        </div>

        <div className='text-5xl font-bold mb-5 mt-10 text-center'>
            Evoluția Universului
        </div>
        <div className='grid lg:grid-cols-2 gap-5 items-center align-middle mt-5 mb-10'>
            <div className='text-2xl text-justify' style={{}}>
                Pe măsură ce universul s-a extins și s-a răcit, materia a început să se adune în regiuni mai dense, formând galaxii, stele și planete. Acest proces a continuat de-a lungul a miliarde de ani, ducând la formarea structurilor cosmice complexe pe care le observăm astăzi. <br/>
                În prezent, teoriile curente afirmă că universul continuă să se extindă și să se răcească, la infinit, datorită energiei întunecate. <br/>
                La momentul actual nu există o teorie acceptată care să explice abundența materiei față de antimaterie. În teorie, acestea ar fi trebuit să fie produse în cantități egale. Singura explicație curentă este dată tot de mecanica cuantică, fiind teorizat că, datorită fluctuațiilor cuantice abundente de la Big Bang, o cantitate extraordinar de mică de materie în plus a fost produsă în loc de antimaterie, această cantitate foarte mică reprezentând toată materia pe care o observăm acum în univers. <br/>
                

            </div>
            <Card className="bg-white/10 border border-white/10 shadow-xl">
                    <img
                    src="https://www.scientia.ro/images/A2_2019/evolutie-filamente-galaxii.jpg"
                    alt="Evoluția Universului"
                    className="w-full object-cover"
                    />
                    <CardContent>
                        <CardTitle>Evoluția Universului</CardTitle>
                            <CardDescription>
                                Prin fluctuații cuantice și procese necunoscute în totalitate, Universul a ajuns în stadiul în care îl observăm noi astăzi. <br/>
                                Diferitele procese de acumulare și alte interacțiuni ale materiei au dus la formarea structurilor cosmice complexe pe care le observăm astăzi.
                            </CardDescription>
                        </CardContent>
            </Card>
        </div>


        <div className='text-5xl font-bold mb-5 mt-10 text-center'>
            Viitorul și sfârșitul Universului
        </div>
            <div className='text-2xl text-justify max-w-fit' style={{}}>
                Nici pentru finalul universului nu există o singură teorie acceptată, dar există mai multe scenarii posibile ce se bazează pe datele actuale și observațiile astronomice făcute până acum. <br/>
                Printre acestea se numără:
            <ul className='list-disc ml-5 mt-2'>
                    <li><b>Moartea Termică</b>: Universul continuă să se extindă și să se răcească, până când toate structurile cosmice se descompun mai întâi în conglomerate de fier sau găuri negre, apoi în particule subatomice și, dacă teoria descompunerii protonilor este corectă, aceștia se descompun mai departe în cuarci, universul devenind un spațiu întunecat și rece. Aceasta este cea mai credibilă teorie la momentul actual.</li>
                    <li><b>Big Rip</b>: Universul continuă să se extindă la un ritm accelerat, până când toate structurile fizice se "rup" datorită forțelor imense cauzate de accelerarea expansiunii universului. Această expansiune ar cauza ruperea tuturor legăturilor moleculare, până la cele subatomice, și ar ajunge posibil la distrugerea chiar a structurii spațiu-timp, rupând efectiv universul în bucăți. Această teorie nu este susținută momentan de cercetători, deși, datorită ratei verificate de accelerație a expansiunii universului, nu este imposibilă.</li>
                    <li><b>Big Crunch</b>: Universul începe să își încetinească expansiunea până la oprirea ei, urmând să se contracte, compresând din nou toată materia și energia într-o particulă subatomică, la fel ca la momentul Big Bang-ului. În alte teorii despre începutul universului, după această compresare, peste miliarde de ani sau poate chiar mai mult, apare din nou un Big Bang și universul începe din nou. Această teorie este mai puțin probabilă în prezent, dar rămâne o posibilitate în cadrul modelului standard al cosmologiei.</li>
                    <li><b>Dezintegrarea Vidului</b>: Această teorie susține că universul actual se află într-o stare meta-stabilă, un fel de "fals vid", ca un fel de stare de echilibru intermediar între starea de minimă energie adevărată și cea maximă. Datorită, din nou, unor fluctuații cuantice sau altor procese, este posibilă declanșarea unui proces de dezintegrare a vidului, astfel universul începând modificându-și proprietățile fizice curente, ducând la o reîncepere a sa. Această transformare ar avea loc în unele speculații instantaneu peste toate regiunile universului, în altele deplasându-se cu viteza luminii, în orice caz fiind un proces complet nedetectabil și inevitabil. Această teorie este majoritar pur speculativă, neexistând dovezi care să arate existența potențialului de a fi în această stare meta-stabilă.</li>
            </ul>
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
