element = new Vue({
    el: '#app',
    data: {
        exams: {
            first_exam:
            {
                turnedOn: true,
                name    : 'DPT I',
                question: [
                    {body: 'Divas būtiskākās datora komponentes augstākas veiktspējas nodrošināšanai.',
                     answer: 'RAM, CPU'},
                    {body: ' Datora montāžas secība.', answer: "1. Ieliek/iemontē mātesplati korpusā;\
2. Uzmontē CPU uz mātesplates;\
3. Uzmontē RAM uz mātesplates;\
4. Ieliek Barošanas bloku korpusā;\
5. Korpusā iemontē cieto disku un CD ROM;\
6. Pievieno priekšējā paneļa vadus mātesplatei;\
7. Savieno visas iekārtas ar mātesplati (CD Rom, HDD, floppy u.t.t)\
8. Pievieno mātesplatei un iekārtām visus vadus no barokļa."},
                    {body: 'Piecas ievades ierīces.', answer: 'Tastatūra, pele, skeneris, kamera, mikrofons'},
                    {body: 'Piecas izvades ierīces.',
                     answer: 'Skaļruņi, printeris, monitors, projektors, ploteris (printeris lielām lapām, plakātiem), austiņas'},
                    {body: 'Kādās mērvienībās mēra tīkla ātrdarbību?',
                     answer: 'Bitos un baitos. Tad attiecīgi palielinoties ātrumam tiek pielikts klāt k, m utt.'},
                    {body: 'Kā pieraksta tīkla ātrdarbību?', answer: 'bps – bits per second – biti sekundē, kbps-kilobits per second, Mbps. kbit/s = kb/s = kbps'},
                    {body: 'Populārākās tīkla tehnoloģijas Latvijā, lai piekļūtu internetam.', answer: 'Populārākā tīkla tehnoloģija ir kabelis, jo Latvija teritoriāli ir maza un ir iespēja izvilkt tiklu pa visu Latviju. Otrs populārākais ir wifi. Wi-fi, satelītinternets, mobilais modems, DSL'},
                    {body: 'Populārākā lokālā tīkla tehnoloģija.', answer: 'Ethernet (ar vītā pāra kabeļiem, darbojas OSI datu un fiziskajā slānī) un wi-fi (bezvadu tīkli)'},
                    {body: 'Kas ir tīkla protokols?', answer: 'Galvenais protokols, kas nodrošina interneta integritāti. Tas regulē, kā notiks datu apmaiņa starp diviem datoriem.'},
                    {body: 'Pieci Interneta servisu piemēri.', answer: 'Vnk, ko var darīt internetā! Videokonferences, Chat, Diskusiju grupas, Elektroniskais pasts, Failu pārraide FTP, Vispasaules tīmeklis'},
                    {body: 'Tīkla mērogojamība (scalability).', answer: 'Tīkla mērogojamība ir spēja „paplašināties”, pievienot jaunus klientus un aplikācijas, neietekmējot tīkla veiktspēju pakalpojumu piegādē esošajiem klientiem. \
horizontāla – pievienot sistēmai vairāk mezglu, piem., pievienot jaunu datoru, jaunu serveri. vertikāla – palielināt resursus esošai sistēmai (mezglam – node), piem., CPU'},
                    {body: 'Tīkla bojājumpiecietība (fault tolerance).', answer: 'Tīkla bojājumpiecietība ir tā, kas samazina aparatūras un programmatūras bojājumu ietekmi uz tīkla darbību un spēj ātri atgūties pēc šādiem bojājumiem. Dažādi ceļi, pa kuriem informācija var pārvietoties, ja kāds nojūk.'},
                    {body: 'Tīkla pakalpojumu kvalitāte (quality of service). (QoS)', answer: 'Tā kā palielinās audio, video utt. kvalitāte, tīklam jānodrošina tikpat laba kvalitāte, lai spētu pilnvērtīgi atskaņot šos datus. Kontroles mehānisms, ar ko var nodrošināt atšķirīgu piekļuvi dažādiem lietotājiem vai datu plūsmām (prioritātes). Piem., rūteris nodrošina, ka prioritātes saskan ar komunikācijas veidu (web lapām zemāka prioritāte, video/audio –augstāka). '},
                    {body: 'Tīkla drošība.', answer: 'Tā ka arvien vairāk tīklā notiek apmaiņa ar personīgiem un privātiem datiem, tiek ieguldīts liels darbs, lai nodrošinātu augstu tīkla drošību un nenotiktu nekāda datu noplūde. Lai pasargātu tīkla datorus no nesankcionētas piekļuves no ārpuses, izmanto speciālas programmas, kuras dēvē par ugunsmūri (firewall). Dažādi lietotāji, paroles, šifrēšana.Savienojumorientēts tīkls (circuit switched).'},
                    {body: 'Savienojumorientēts tīkls (circuit switched).', answer: 'Savienojumam tiek izveidots atsevišķs pastāvīgs kanāls – saslēgta elektriskā ķēde starp diviem sakaru tīkla mezgliem. Piem., analogais telefonu tīkls, kurā savienojums starp abonentu A un abonentu B tiek saslēgts nemainīgs uz visu savienojuma laiku. +Garantēta nemainīga frekvenču josla un datu pārraides ātrums; nemainīga un mazāka aizture nekā bezsavienojuma tīkls. --Neefektīva infrastruktūras resursu izmantošana.\
Savienojumu (connection oriented) orientēta pakešu komutācija – savienojums definēts katrā iesaistītajā mezglā visu savienojuma laiku. Paketes ietver savienojuma identifikatoru, nevis adreses informāciju, un tiek piegādātas stingri noteiktā kārtībā. Pirms sūtīšanas tiek izstrādāts ceļš un katram punktam tiek nodota saņēmēja informācija, nevis packetiem kā pirmajā variantā'},
                    {body: 'Bezsavienojuma tīkls (packet-switched).', answer: 'Visus nosūtītos datus, neatkarīgi no satura, veida vai struktūras sadala blokos, ko sauc par paketēm. Katra pakete tiek maršrutēta individuāli, vadoties no tajā esošās informācijas. Pakešu komutācija piegādā mainīga bitu ātruma datu plūsmu pa koplietošanas tīklu. Paketēm šķērsojot tīkla adapterus, tīkla komutatorus, maršrutētājus un citus tīkla mezglus, tās tiek buferizētas un rindotas, kā rezultātā tām ir mainīga aizkavēšanās.\
Bezsavienojuma (connectionless) pakešu komutācija – katra pakete iekļauj pilnu adresāciju (informācija par saņēmēju) vai maršrutēšanas informāciju. Paketes tiek maršrutētas individuāli, pa dažādiem ceļiem, galā nonāk dažādos laikos.'},
                    {body: 'Iezvanpieejas mīnusi.', answer: 'Iezvanpieejas datu apmaiņas ātrums nav liels un maksā par interneta lietošanu parasti ietilpst arī maksa par telefona sakaru izmantošanu. Maksā par laiku, nevis apjomu.'},
                    {body: 'Datu tipi tīklā ar augstāku prioritāti.', answer: 'Datu tipi tīklā ar augstāku prioritāti izpildās pirmie, tādā veidā tiek izveidota secība, lai tīkls netiktu noslogots (balss -> finanšu informācija->web lapa).'},
                    {body: 'Trīs datu pārraides vides.', answer: 'Metāla kabeļi, radioviļņi un optiskie kabeļi(gaisma)'},
                    {body: 'T568-A kategorijas krāsu izkārtojums montējot RJ45 konektoru uz 5Cat UTP kabeļa.', answer: 'gaiši zaļš, zaļš, gaiši oranžs, zils, gaiši zils, oranžs, gaiši brūns, brūns'},
                    {body: 'T568-B kategorijas krāsu izkārtojums montējot RJ45 konektoru uz 5Cat UTP kabeļa.', answer: 'gaiši oranžs, oranžs, gaiši zaļš, zils, gaiši zils, zaļš, gaiši brūns, brūns'},
                    {body: ' Izmantotās UTP vada dzīslas Ethernet un FastEthernet tehnoloģijai.', answer: 'KrustiskāsIzmantotās UTP vada dzīslas GigabitEthernet tehnoloģijai.'},
                    {body: 'Izmantotās UTP vada dzīslas GigabitEthernet tehnoloģijai.', answer: 'Taisnās'},
                    {body: 'Ko nozīmē UTP?', answer: 'Unshielded twisted pair. Tas ir neekranēts vīto pāru kabelis ar RJ45 spraudņiem abos galos. Kabelis, lai saslēgtos tīklā.'},
                    {body: 'Kas ir RJ45?', answer: 'RJ-45 ir ļoti kompakti kontakti, tiem ir plastmasas korpuss ar 8 maziem kontaktlaukumiem. UTP uzgalis, interneta vadiem'},
                    {body: 'Kādu iekārtu saslēgšanai izmanto vītā pāra "taisno" kabeli?', answer: 'dators – rūteris, dators – switch, dators – laptops (starp dažādām ierīcēm)'},
                    {body: '', answer: ''},
                    //{body: '', answer: ''},
                ]
            },

            second_exam:
            {
                turnedOn: true,
                name    : 'DPT II',
                question: [
                {body: 'Šis ir tests 21', answer: 'tests bija pareizs  21'},
                {body: 'Šis ir tests 22', answer: 'tests bija pareizs 22'},
                {body: 'Šis ir tests 23', answer: 'tests bija pareizs 23'},
                {body: 'Šis ir tests 24', answer: 'tests bija pareizs 24'}
            ]},

            third_exam:
            {
                turnedOn: true,
                name    : 'DPT III',
                question: [
                {body: 'Šis ir tests 31', answer: 'tests bija pareizs 31'},
                {body: 'Šis ir tests 32', answer: 'tests bija pareizs 32'},
                {body: 'Šis ir tests 33', answer: 'tests bija pareizs 33'},
                {body: 'Šis ir tests 34', answer: 'tests bija pareizs 34'}
            ]}
        }
        ,
        now: {body: 'Divas būtiskākās datora komponentes augstākas veiktspējas nodrošināšanai.',
         answer: 'RAM, CPU'},
        visible: false
    },

    methods: {
        getQuestion: function()
        {
           element1 = this.exams.first_exam;
           element2 = this.exams.second_exam;
           element3 = this.exams.third_exam;
           all      = [];

            element1.turnedOn ? all= all.concat(element1.question) : '';
            element2.turnedOn ? all= all.concat(element2.question) : '';
            element3.turnedOn ? all= all.concat(element3.question) : '';
           this.now = all[Math.floor(Math.random()* all.length)];
            this.visible = false;
        },
        toggleCourse: function(course)
        {
            course.turnedOn = !course.turnedOn;
        }
    }
});
