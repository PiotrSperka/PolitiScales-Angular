"use strict";

var questions = [
    // Constructivism/Essentialism
    {
        question: "“Człowiek nie rodzi się kobietą, raczej staje się nią z czasem.”",
        answer: 0,
        valuesYes: [
            {
                axis: "c0",
                value: 3
            },
            {
                axis: "femi",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "c1",
                value: 3
            }
        ]
    },
    {
        question:
            "Różnice w leczeniu i jakości życia w naszym społeczeństwie pokazują, że rasizm jest w dalszym ciągu wszechobecny.",
        answer: 0,
        valuesYes: [
            {
                axis: "c0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "c1",
                value: 3
            }
        ]
    },
    {
        question:
            "Wszystkie dziedziny, nawet takie jak chemia i biologia nie są bezwzględne i są uwarunkowane przez nasze społeczeństwo.",
        answer: 0,
        valuesYes: [
            {
                axis: "c0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "c1",
                value: 3
            }
        ]
    },
    {
        question:
            "Podział na \"kobiety\" i \"mężczyzn\" to konstrukty społeczne które powinniśmy porzucić.",
        answer: 0,
        valuesYes: [
            {
                axis: "c0",
                value: 3
            },
            {
                axis: "femi",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "c1",
                value: 3
            }
        ]
    },
    {
        question: "Nikt z natury nie ma predyspozycji do przestępczości.",
        answer: 0,
        valuesYes: [
            {
                axis: "c0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "c1",
                value: 3
            }
        ]
    },
    {
        question: "Orientacja seksualna jest konstruktem społecznym.",
        answer: 0,
        valuesYes: [
            {
                axis: "c0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "c1",
                value: 3
            }
        ]
    },
    {
        question:
            "Różnice społeczne pomiędzy grupami etnicznymi nie mogą być wytłumaczone przez biologię.",
        answer: 0,
        valuesYes: [
            {
                axis: "c0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "c1",
                value: 3
            }
        ]
    },
    {
        question:
            "Role społeczne kobiet i mężczyzn mogą być częściowo wytłumaczone przez różnice biologiczne.",
        answer: 0,
        valuesYes: [
            {
                axis: "c1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "c0",
                value: 3
            },
            {
                axis: "femi",
                value: 3
            }
        ]
    },
    {
        question:
            "Różnice hormonalne mogą wytłumaczyć pewne różnice w indywidualnych cechach pomiędzy kobietami a mężczyznami.",
        answer: 0,
        valuesYes: [
            {
                axis: "c1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "c0",
                value: 3
            },
            {
                axis: "femi",
                value: 3
            }
        ]
    },
    {
        question: "Ataki na tle seksualnym są częściowo spowodowane przez naturalny impuls.",
        answer: 0,
        valuesYes: [
            {
                axis: "c1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "c0",
                value: 3
            },
            {
                axis: "femi",
                value: 3
            }
        ]
    },
    {
        question:
            "Osoby transpłciowe tak naprawdę nigdy nie będą płcią, którą chciałyby być.",
        answer: 0,
        valuesYes: [
            {
                axis: "c1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "c0",
                value: 3
            }
        ]
    },
    {
        question:
            "Osoby będące częścią danego narodu lub kultury mają pewne niezmienne cechy które ich definiują.",
        answer: 0,
        valuesYes: [
            {
                axis: "c1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "c0",
                value: 3
            }
        ]
    },
    {
        question: "Biologicznie, istoty ludzkie są zaprojektowane do heteroseksualizmu.",
        answer: 0,
        valuesYes: [
            {
                axis: "c1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "c0",
                value: 3
            }
        ]
    },
    {
        question:
            "Egoizm jest nadrzędnym napędem gatunku ludzkiego, bez względu na kontekst.",
        answer: 0,
        valuesYes: [
            {
                axis: "c1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "c0",
                value: 3
            }
        ]
    },
    // Internationalism/Nationalism
    {
        question: "Granice pomiędzy krajami ostatecznie powinny zostać zniesione.",
        answer: 0,
        valuesYes: [
            {
                axis: "b0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "b1",
                value: 3
            }
        ]
    },
    {
        question:
            "Ludzie muszą stawać w obronie swoich ideałów, nawet jeśli prowadzi to do zdrady ich kraju.",
        answer: 0,
        valuesYes: [
            {
                axis: "b0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "b1",
                value: 3
            }
        ]
    },
    {
        question:
            "Mój kraj musi zapłacić za szkody, które wyrządził innym krajom w wyniku przestępstw.",
        answer: 0,
        valuesYes: [
            {
                axis: "b0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "b1",
                value: 3
            }
        ]
    },
    {
        question:
            "W wypadku, gdy dwa państwa mają podobną ekonomie, system społeczny jak i normy ochrony środowiska, wolny rynek pomiędzy nimi nie powinien mieć negatywnych skutków.",
        answer: 0,
        valuesYes: [
            {
                axis: "b0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "b1",
                value: 3
            }
        ]
    },
    {
        question:
            "Szowinizm Narodowy podczas zawodów sportowych jest nie do przyjęcia.",
        answer: 0,
        valuesYes: [
            {
                axis: "b0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "b1",
                value: 3
            }
        ]
    },
    {
        question:
            "Jestem równie zainteresowany losem mieszkańców mojego kraju, jak i tych z innych krajów.",
        answer: 0,
        valuesYes: [
            {
                axis: "b0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "b1",
                value: 3
            }
        ]
    },
    {
        question:
            "Obcokrajowcy żyjący w moim kraju powinni mieć takie same prawo do działań politycznych, jak osoby które posiadają obywatelstwo.",
        answer: 0,
        valuesYes: [
            {
                axis: "b0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "b1",
                value: 3
            }
        ]
    },
    {
        question: "Obywatele powinni stanowić priorytet ponad obcokrajowców.",
        answer: 0,
        valuesYes: [
            {
                axis: "b1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "b0",
                value: 3
            }
        ]
    },
    {
        question:
            "Wartości mojego kraju są lepsze od wartości innych krajów.",
        answer: 0,
        valuesYes: [
            {
                axis: "b1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "b0",
                value: 3
            }
        ]
    },
    {
        question: "Wielokulturowość jest zagrożeniem dla naszego społeczeństwa.",
        answer: 0,
        valuesYes: [
            {
                axis: "b1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "b0",
                value: 3
            }
        ]
    },
    {
        question: "Dobry obywatel musi być patriotą.",
        answer: 0,
        valuesYes: [
            {
                axis: "b1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "b0",
                value: 3
            }
        ]
    },
    {
        question:
            "Interwencja wojskowa kraju jest uzasadniona, gdy służy obronie jego interesów ekonomicznych.",
        answer: 0,
        valuesYes: [
            {
                axis: "b1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "b0",
                value: 3
            }
        ]
    },
    {
        question:
            "Nauka historii jest niezbędna, aby wytworzyć poczucie przynależności do narodu.",
        answer: 0,
        valuesYes: [
            {
                axis: "b1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "b0",
                value: 3
            }
        ]
    },
    {
        question:
            "Badania prowadzone przez mój naród nie powinny być dostępne dla innych krajów.",
        answer: 0,
        valuesYes: [
            {
                axis: "b1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "b0",
                value: 3
            }
        ]
    },
    // Communism/Capitalism
    {
        question:
            "Nikt nie powinien zostać bogatym dzięki posiadaniu biznesu, ziemi lub domu.",
        answer: 0,
        valuesYes: [
            {
                axis: "p0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "p1",
                value: 3
            }
        ]
    },
    {
        question: "Praca zarobkowa jest formą okradania pracowników przez pracodawców.",
        answer: 0,
        valuesYes: [
            {
                axis: "p0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "p1",
                value: 3
            }
        ]
    },
    {
        question: "Jest ważne, aby zdrowie pozostało sprawą publiczną.",
        answer: 0,
        valuesYes: [
            {
                axis: "p0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "p1",
                value: 3
            }
        ]
    },
    {
        question: "Energia i transport powinny być sprawą publiczną.",
        answer: 0,
        valuesYes: [
            {
                axis: "p0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "p1",
                value: 3
            }
        ]
    },
    {
        question: "Patenty nie powinny istnieć.",
        answer: 0,
        valuesYes: [
            {
                axis: "p0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "p1",
                value: 3
            }
        ]
    },
    {
        question:
            "Niezbędne jest wprowadzenie zespołów do racjonowania naszej produkcji zgodnie z potrzebami konsumentów.",
        answer: 0,
        valuesYes: [
            {
                axis: "p0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "p1",
                value: 3
            }
        ]
    },
    {
        question: "Rynek pracy zniewala pracowników.",
        answer: 0,
        valuesYes: [
            {
                axis: "p0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "p1",
                value: 3
            }
        ]
    },
    {
        question: "Dążenie do własnego zysku jest zdrowe dla gospodarki.",
        answer: 0,
        valuesYes: [
            {
                axis: "p1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "p0",
                value: 3
            }
        ]
    },
    {
        question:
            "Różnice w zamożności wywodzą się z zasług i zalet.",
        answer: 0,
        valuesYes: [
            {
                axis: "p1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "p0",
                value: 3
            }
        ]
    },
    {
        question:
            "Fakt, że niektóre szkoły i uniwersytety są prywatne, nie jest żadnym problemem.",
        answer: 0,
        valuesYes: [
            {
                axis: "p1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "p0",
                value: 3
            }
        ]
    },
    {
        question:
            "Offshoring i outsourcing to zło konieczne dla zwiększania produkcji.",
        answer: 0,
        valuesYes: [
            {
                axis: "p1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "p0",
                value: 3
            }
        ]
    },
    {
        question: "Jest to do zaakceptowania, że są ludzie bogaci i biedni.",
        answer: 0,
        valuesYes: [
            {
                axis: "p1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "p0",
                value: 3
            }
        ]
    },
    {
        question: "Jest to do zaakceptowania, że niektóre branże są prywatne.",
        answer: 0,
        valuesYes: [
            {
                axis: "p1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "p0",
                value: 3
            }
        ]
    },
    {
        question: "Banki powinny pozostać prywatne.",
        answer: 0,
        valuesYes: [
            {
                axis: "p1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "p0",
                value: 3
            }
        ]
    },
    // Regulation/Laissez-faire
    {
        question: "Przychody i kapitał powinny być opodatkowane aby redystrybuować bogactwo.",
        answer: 0,
        valuesYes: [
            {
                axis: "m0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "m1",
                value: 3
            }
        ]
    },
    {
        question: "Wiek emerytalny powinien zostać obniżony.",
        answer: 0,
        valuesYes: [
            {
                axis: "m0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "m1",
                value: 3
            }
        ]
    },
    {
        question:
            "Zwolnienia pracowników powinny być zabronione, z wyjątkiem, gdy jest to uzasadnione.",
        answer: 0,
        valuesYes: [
            {
                axis: "m0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "m1",
                value: 3
            }
        ]
    },
    {
        question:
            "Należy zapewnić minimalne płace, aby pracownik mógł utrzymać się ze swojej pracy.",
        answer: 0,
        valuesYes: [
            {
                axis: "m0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "m1",
                value: 3
            }
        ]
    },
    {
        question: "Konieczne jest unikanie monopoli prywatnych.",
        answer: 0,
        valuesYes: [
            {
                axis: "m0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "m1",
                value: 3
            }
        ]
    },
    {
        question:
            "Pożyczki zaciągnięte w sferze publicznej (państwo, województwa, gminy) niekoniecznie muszą być zwracane.",
        answer: 0,
        valuesYes: [
            {
                axis: "m0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "m1",
                value: 3
            }
        ]
    },
    {
        question:
            "Niektóre sektory gospodarki lub zawody powinny być wspierane finansowo.",
        answer: 0,
        valuesYes: [
            {
                axis: "m0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "m1",
                value: 3
            }
        ]
    },
    {
        question: "Gospodarka rynkowa jest optymalna, gdy nie jest regulowana.",
        answer: 0,
        valuesYes: [
            {
                axis: "m1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "m0",
                value: 3
            }
        ]
    },
    {
        question:
            "W dzisiejszych czasach pracownicy mają swobodę wyboru przy podpisywaniu umowy z ich przyszłym pracodawcą.",
        answer: 0,
        valuesYes: [
            {
                axis: "m1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "m0",
                value: 3
            }
        ]
    },
    {
        question:
            "Należy koniecznie usunąć przepisy prawa pracy, aby zachęcić firmy do zatrudniania.",
        answer: 0,
        valuesYes: [
            {
                axis: "m1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "m0",
                value: 3
            }
        ]
    },
    {
        question:
            "Maksymalny czas pracy powinien zostać zwiększony.",
        answer: 0,
        valuesYes: [
            {
                axis: "m1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "m0",
                value: 3
            }
        ]
    },
    {
        question:
            "Normy środowiskowe powinny podlegać samoregulacji rynkowej, a nie pochodzić od władzy.",
        answer: 0,
        valuesYes: [
            {
                axis: "m1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "m0",
                value: 3
            }
        ]
    },
    {
        question: "Pomoc społeczna odstrasza ludzi od pracy.",
        answer: 0,
        valuesYes: [
            {
                axis: "m1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "m0",
                value: 3
            }
        ]
    },
    {
        question:
            "Przedsiębiorstwa państwowe powinny być zarządzane tak jak te prywatne i postępować zgodnie z logiką rynku (konkurencja, rentowność...).",
        answer: 0,
        valuesYes: [
            {
                axis: "m1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "m0",
                value: 3
            }
        ]
    },
    // Progressive/Conservative
    {
        question: "Tradycje powinny być kwestionowane.",
        answer: 0,
        valuesYes: [
            {
                axis: "s0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "s1",
                value: 3
            }
        ]
    },
    {
        question:
            "I do not have any problem if other official languages are added or replace the already existing official language in my country.Nie byłoby to problemem, gdyby w moim państwie dodano inne języki urzędowe, lub zastąpiono nimi obecny.",
        answer: 0,
        valuesYes: [
            {
                axis: "s0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "s1",
                value: 3
            }
        ]
    },
    {
        question: "Instytucja małżeństwa powinna być zniesiona.",
        answer: 0,
        valuesYes: [
            {
                axis: "s0",
                value: 3
            },
            {
                axis: "femi",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "s1",
                value: 3
            }
        ]
    },
    {
        question: "Obcokrajowcy wzbogacają naszą kulturę.",
        answer: 0,
        valuesYes: [
            {
                axis: "s0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "s1",
                value: 3
            }
        ]
    },
    {
        question: "Należy zmniejszyć wpływy religii.",
        answer: 0,
        valuesYes: [
            {
                axis: "s0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "s1",
                value: 3
            }
        ]
    },
    {
        question: "Język jest definiowany przez użytkowników, a nie przez uczonych.",
        answer: 0,
        valuesYes: [
            {
                axis: "s0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "s1",
                value: 3
            }
        ]
    },
    {
        question: "Eutanazja powinna być dozwolona.",
        answer: 0,
        valuesYes: [
            {
                axis: "s0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "s1",
                value: 3
            }
        ]
    },
    {
        question:
            "Homoseksualiści nie powinni być traktowani tak jak heteroseksualiści względem małżeństw, rodzicielstwa, adopcji czy prokreacji.",
        answer: 0,
        valuesYes: [
            {
                axis: "s1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "s0",
                value: 3
            }
        ]
    },
    {
        question: "W niektórych szczególnych warunkach, kara śmierci jest uzasadniona.",
        answer: 0,
        valuesYes: [
            {
                axis: "s1",
                value: 3
            },
            {
                axis: "j1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "s0",
                value: 3
            },
            {
                axis: "j0",
                value: 3
            }
        ]
    },
    {
        question: "Postęp techniczny nie powinien zmieniać społeczeństwa zbyt szybko.",
        answer: 0,
        valuesYes: [
            {
                axis: "s1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "s0",
                value: 3
            }
        ]
    },
    {
        question:
            "Szkoły powinny nas uczyć w głównej mierze naszych wartości, tradycji i podstawowej wiedzy.",
        answer: 0,
        valuesYes: [
            {
                axis: "s1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "s0",
                value: 3
            }
        ]
    },
    {
        question: "Aborcja powinna być ograniczona tylko do szczególnych wypadków.",
        answer: 0,
        valuesYes: [
            {
                axis: "s1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "s0",
                value: 3
            },
            {
                axis: "femi",
                value: 3
            }
        ]
    },
    {
        question: "Głównym celem pary jest spłodzenie minimum jednego dziecka.",
        answer: 0,
        valuesYes: [
            {
                axis: "s1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "s0",
                value: 3
            }
        ]
    },
    {
        question:
            "Abstynencja powinna być preferowana ponad antykoncepcję w celu zachowania prawdziwej natury aktu seksualnego.",
        answer: 0,
        valuesYes: [
            {
                axis: "s1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "s0",
                value: 3
            }
        ]
    },
    // Ecology/Production
    {
        question:
            "Wymieranie gatunków spowodowane ludzkimi działaniami jest nieakceptowalne.",
        answer: 0,
        valuesYes: [
            {
                axis: "e0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "e1",
                value: 3
            }
        ]
    },
    {
        question: "GMO powinny być zakazane poza badaniami i celami medycznymi.",
        answer: 0,
        valuesYes: [
            {
                axis: "e0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "e1",
                value: 3
            }
        ]
    },
    {
        question: "Musimy walczyć z gobalnym ociepleniem.",
        answer: 0,
        valuesYes: [
            {
                axis: "e0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "e1",
                value: 3
            }
        ]
    },
    {
        question:
            "Musimy zmienić nasz sposób żywienia, aby ograniczyć eksploatację środowiska.",
        answer: 0,
        valuesYes: [
            {
                axis: "e0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "e1",
                value: 3
            }
        ]
    },
    {
        question:
            "Ważne jest, aby wspierać rolnictwo, które utrzymuje różnorodność biologiczną żywności, nawet jeśli jej produkcja jest niższa.",
        answer: 0,
        valuesYes: [
            {
                axis: "e0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "e1",
                value: 3
            }
        ]
    },
    {
        question:
            "Zachowanie ekosystemów innych niż miejskie jest dużo ważniejsze niż tworzenie miejsc pracy.",
        answer: 0,
        valuesYes: [
            {
                axis: "e0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "e1",
                value: 3
            }
        ]
    },
    {
        question: "Ograniczenie odpadów powinno być dokonywane poprzez ograniczenie produkcji.",
        answer: 0,
        valuesYes: [
            {
                axis: "e0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "e1",
                value: 3
            }
        ]
    },
    {
        question:
            "Kolonizacja kosmosu jest dobrym rozwiązaniem dla problemu niedoboru surowców na Ziemi (żelazo, metale ziem rzadkich, paliwo...).",
        answer: 0,
        valuesYes: [
            {
                axis: "e1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "e0",
                value: 3
            }
        ]
    },
    {
        question:
            "Trwała transformacja ekosystemów w celu poprawy jakości życia ludzi jest uzasadniona.",
        answer: 0,
        valuesYes: [
            {
                axis: "e1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "e0",
                value: 3
            }
        ]
    },
    {
        question:
            "Aby zwiększyć produktywność, konieczne są ogromne inwestycje w badania.",
        answer: 0,
        valuesYes: [
            {
                axis: "e1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "e0",
                value: 3
            }
        ]
    },
    {
        question:
            "Transhumanizm będzie korzystny, ponieważ pozwoli on na zwiększenie ludzkich zdolności.",
        answer: 0,
        valuesYes: [
            {
                axis: "e1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "e0",
                value: 3
            }
        ]
    },
    {
        question:
            "Elektrownie atomowe, jeśli dobrze utrzymane, są bardzo dobrym źródłem energii.",
        answer: 0,
        valuesYes: [
            {
                axis: "e1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "e0",
                value: 3
            }
        ]
    },
    {
        question: "Konieczne jest wykorzystanie paliw kopalnych.",
        answer: 0,
        valuesYes: [
            {
                axis: "e1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "e0",
                value: 3
            }
        ]
    },
    {
        question:
            "Utrzymanie silnego wzrostu gospodarczego powinno być celem dla rządu.",
        answer: 0,
        valuesYes: [
            {
                axis: "e1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "e0",
                value: 3
            }
        ]
    },
    // Rehabilitative Justice/Punitive Justice
    {
        question: "Więzienia nie powinny istnieć.",
        answer: 0,
        valuesYes: [
            {
                axis: "j0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "j1",
                value: 3
            }
        ]
    },
    {
        question:
            "Ustanawianie minimalnych kar za wykroczenie lub przestępstwo jest niesprawiedliwe.",
        answer: 0,
        valuesYes: [
            {
                axis: "j0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "j1",
                value: 3
            }
        ]
    },
    {
        question:
            "Byli więźniowie powinni mieć wsparcie w ich readaptacji społecznej.",
        answer: 0,
        valuesYes: [
            {
                axis: "j0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "j1",
                value: 3
            }
        ]
    },
    {
        question:
            "Sąd zawsze powinien brać pod uwagę kontekst i przeszłość skazanego, i odpowiednio dostosować do tego karę.",
        answer: 0,
        valuesYes: [
            {
                axis: "j0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "j1",
                value: 3
            }
        ]
    },
    {
        question: "Warunki życia w więzieniu powinny być znacznie poprawione.",
        answer: 0,
        valuesYes: [
            {
                axis: "j0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "j1",
                value: 3
            }
        ]
    },
    {
        question:
            "Zakres rejestracji i przechowywania danych osobowych powinien być ściśle ograniczony, a kontrole krzyżowe baz danych powinny być zabronione.",
        answer: 0,
        valuesYes: [
            {
                axis: "j0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "j1",
                value: 3
            }
        ]
    },
    {
        question: "Prawo do pozostania anonimowym w internecie powinno być zagwarantowane każdemu.",
        answer: 0,
        valuesYes: [
            {
                axis: "j0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "j1",
                value: 3
            }
        ]
    },
    {
        question:
            "Celem wymiaru sprawiedliwości jest ukaranie tych, którzy łamali prawo.",
        answer: 0,
        valuesYes: [
            {
                axis: "j1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "j0",
                value: 3
            }
        ]
    },
    {
        question: "Policja powinna być uzbrojona.",
        answer: 0,
        valuesYes: [
            {
                axis: "j1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "j0",
                value: 3
            }
        ]
    },
    {
        question:
            "Poświęcenie niektórych praw i swobód obywatelskich jest niezbędne w celu ochrony przed atakami terrorystycznymi.",
        answer: 0,
        valuesYes: [
            {
                axis: "j1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "j0",
                value: 3
            }
        ]
    },
    {
        question: "Porządek i władza powinny być respektowane we wszystkich okolicznościach.",
        answer: 0,
        valuesYes: [
            {
                axis: "j1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "j0",
                value: 3
            }
        ]
    },
    {
        question: "Wysokie kary są skuteczne, ponieważ są one odstraszające.",
        answer: 0,
        valuesYes: [
            {
                axis: "j1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "j0",
                value: 3
            }
        ]
    },
    {
        question:
            "Lepiej jest profilaktycznie aresztować kogoś potencjalnie niebezpiecznego niż podejmować ryzyko popełnienia przez niego przestępstwa.",
        answer: 0,
        valuesYes: [
            {
                axis: "j1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "j0",
                value: 3
            }
        ]
    },
    // Revolution/Reform
    {
        question: "Masowy strajk jest dobrym sposobem uzyskania nowych praw.",
        answer: 0,
        valuesYes: [
            {
                axis: "t0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "t1",
                value: 3
            }
        ]
    },
    {
        question: "Czasami konieczna jest walka zbrojna w kraju.",
        answer: 0,
        valuesYes: [
            {
                axis: "t0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "t1",
                value: 3
            }
        ]
    },
    {
        question: "Powstania przeciw władzy są niezbędne, aby dogłębnie zmienić społeczeństwo.",
        answer: 0,
        valuesYes: [
            {
                axis: "t0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "t1",
                value: 3
            }
        ]
    },
    {
        question:
            "Zaangażowanie w istniejące organizacje polityczne nie jest ważne dla zmiany społeczeństwa.",
        answer: 0,
        valuesYes: [
            {
                axis: "t0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "t1",
                value: 3
            }
        ]
    },
    {
        question:
            "Wybory organizowane przez państwo nie mogą podważyć systemu władzy.",
        answer: 0,
        valuesYes: [
            {
                axis: "t0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "t1",
                value: 3
            }
        ]
    },
    {
        question: "Hacking ma uzasadnione miejsce w walce politycznej.",
        answer: 0,
        valuesYes: [
            {
                axis: "t0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "t1",
                value: 3
            }
        ]
    },
    {
        question: "Sabotaż w pewnych warunkach jest uzasadniony.",
        answer: 0,
        valuesYes: [
            {
                axis: "t0",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "t1",
                value: 3
            }
        ]
    },
    {
        question: "Aktywiści zawsze muszą działać zgodnie z prawem.",
        answer: 0,
        valuesYes: [
            {
                axis: "t1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "t0",
                value: 3
            }
        ]
    },
    {
        question: "Rewolucje zawsze źle się kończą.",
        answer: 0,
        valuesYes: [
            {
                axis: "t1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "t0",
                value: 3
            }
        ]
    },
    {
        question:
            "Radykalne zmiany systemu są nieproduktywne. Raczej należy przekształcać go stopniowo.",
        answer: 0,
        valuesYes: [
            {
                axis: "t1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "t0",
                value: 3
            }
        ]
    },
    {
        question: "Przemoc wobec jednostki nigdy nie przyniesie dobrych rezultatów.",
        answer: 0,
        valuesYes: [
            {
                axis: "t1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "t0",
                value: 3
            }
        ]
    },
    {
        question:
            "Powinniśmy odcinać się od protestujących, którzy używają przemocy.",
        answer: 0,
        valuesYes: [
            {
                axis: "t1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "t0",
                value: 3
            }
        ]
    },
    {
        question:
            "Musimy zawsze iść na kompromis z opozycją, aby wcielić w życie nasze pomysły.",
        answer: 0,
        valuesYes: [
            {
                axis: "t1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "t0",
                value: 3
            }
        ]
    },
    {
        question:
            "Zmiany w życiu jednostki mogą wywołać zmiany w społeczeństwie.",
        answer: 0,
        valuesYes: [
            {
                axis: "t1",
                value: 3
            }
        ],
        valuesNo: [
            {
                axis: "t0",
                value: 3
            }
        ]
    },
    // Bonus Badges
    {
        question: "Moja religia musi zostać rozpowszechniona jak najdalej jak to jest możliwe.",
        answer: 0,
        valuesYes: [
            {
                axis: "reli",
                value: 3
            }
        ],
        valuesNo: []
    },
    {
        question: "Dobrą polityką jest polityka pragmatyczna, bez ideologii.",
        answer: 0,
        valuesYes: [
            {
                axis: "prag",
                value: 3
            }
        ],
        valuesNo: []
    },
    {
        question:
            "Musimy ustanowić monarchię, aby łączyć ludzi i zachować naszą suwerenność.",
        answer: 0,
        valuesYes: [
            {
                axis: "mona",
                value: 3
            }
        ],
        valuesNo: []
    },
    {
        question: "Ludzie nie powinni jeść ani wykorzystwać zwierząt.",
        answer: 0,
        valuesYes: [
            {
                axis: "vega",
                value: 3
            }
        ],
        valuesNo: []
    },
    {
        question: "Państwo powinno zostać zniesione.",
        answer: 0,
        valuesYes: [
            {
                axis: "anar",
                value: 3
            }
        ],
        valuesNo: []
    }
];

var qn = 0; // Question number
var prev_answer = null;

function shuffle(array) {
    var i = 0,
        j = 0,
        temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffle(questions);

init_question();

function init_question() {
    document.getElementById("question-text").innerHTML = questions[qn].question;
    document.getElementById(
        "question-number"
    ).innerHTML = "Pytanie %num% z %sum%"
        .replace("%num%", qn + 1)
        .replace("%sum%", questions.length);
    if (qn == 0) {
        document.getElementById("back_button").style.display = "none";
        document.getElementById("back_button_off").style.display = "block";
    } else {
        document.getElementById("back_button").style.display = "block";
        document.getElementById("back_button_off").style.display = "none";
    }
}

function next_question(mult) {
    questions[qn].answer = mult;
    qn++;

    if (qn < questions.length) {
        init_question();
    } else {
        results();
    }
}

function prev_question() {
    if (qn == 0) {
        return;
    }
    qn--;
    init_question();
}

function calc_score(score, max_value) {
    return ((100 * score) / max_value).toFixed(0);
}

function results() {
    var axes = {};

    for (var i = 0; i < questions.length; i++) {
        var q = questions[i];

        for (var j = 0; j < q.valuesYes.length; j++) {
            var a = q.valuesYes[j];
            if (!(a.axis in axes)) {
                axes[a.axis] = {
                    val: 0,
                    sum: 0
                };
            }

            if (q.answer > 0) {
                axes[a.axis].val += q.answer * a.value;
            }
            axes[a.axis].sum += Math.max(a.value, 0);
        }

        for (var j = 0; j < q.valuesNo.length; j++) {
            var a = q.valuesNo[j];
            if (!(a.axis in axes)) {
                axes[a.axis] = {
                    val: 0,
                    sum: 0
                };
            }

            if (q.answer < 0) {
                axes[a.axis].val -= q.answer * a.value;
            }
            axes[a.axis].sum += Math.max(a.value, 0);
        }
    }

    var url = "";
    for (var aK in axes) {
        if (axes[aK].val > 0) {
            if (url != "") url += "&";
            url += aK + "=" + calc_score(axes[aK].val, axes[aK].sum);
        }
    }
    url = window.btoa(url);
    url = "/results/?" + url;

    location.href = url;
}
