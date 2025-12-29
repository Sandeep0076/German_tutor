import type { DayPlan } from './syllabus';

export const day34PerfectReview: DayPlan = {
    day: 34,
    title: "Perfect Tense - Comprehensive Review",
    focus: "Complete review and mastery of all perfect tense types",
    activities: [
        "Review all perfect tense formations",
        "Practice mixed exercises with all verb types",
        "Master haben vs sein distinction",
        "Error correction and real-world application"
    ],
    homework: ["Complete 50 comprehensive perfect tense review questions"],
    details: {
        sections: [
            {
                title: "1. Perfect Tense Overview - All Types Summary",
                content: "Let's review everything you've learned about perfect tense (Perfekt) in German:\n\n**Formation: haben/sein + past participle**\n\n**Type 1: Regular Verbs (ge-...-t)**\n* Pattern: ge + stem + t\n* Examples: machen → gemacht, kaufen → gekauft, lernen → gelernt\n* Auxiliary: haben (most cases)\n\n**Type 2: Irregular Verbs (ge-...-en)**\n* Pattern: ge + changed stem + en\n* Examples: essen → gegessen, trinken → getrunken, schreiben → geschrieben\n* Auxiliary: haben or sein (depends on verb)\n* **Must memorize these forms!**\n\n**Type 3: Separable Prefix Verbs (prefix-ge-stem-t/en)**\n* Pattern: prefix + ge + stem + t/en\n* Examples: aufstehen → aufgestanden, einkaufen → eingekauft, anrufen → angerufen\n* The **ge-** goes BETWEEN prefix and stem\n* Auxiliary: haben or sein (depends on base verb)\n\n**Type 4: Inseparable Prefix Verbs (NO ge-!)**\n* Prefixes: be-, emp-, ent-, er-, ge-, ver-, zer-\n* Pattern: prefix + stem + t/en (NO ge-!)\n* Examples: besuchen → besucht, verstehen → verstanden, erzählen → erzählt\n* Auxiliary: haben (almost always)\n\n**Type 5: Verbs ending in -ieren (NO ge-!)**\n* Pattern: stem + t (NO ge-!)\n* Examples: studieren → studiert, telefonieren → telefoniert, reparieren → repariert\n* Auxiliary: haben (always)\n\n**HABEN vs SEIN Decision:**\n\n**Use SEIN when the verb indicates:**\n1. **Movement from A to B:** gehen, fahren, fliegen, kommen, laufen, schwimmen, reisen\n2. **Change of state:** werden, sterben, wachsen, einschlafen, aufwachen\n3. **Special verbs:** sein, bleiben, passieren, geschehen\n\n**Use HABEN for:**\n* All other verbs (majority!)\n* All reflexive verbs\n* All modal verbs\n* All transitive verbs (verbs with direct object)",
                examples: [
                    { german: "Ich habe Deutsch gelernt. (regular, haben)", english: "I learned German." },
                    { german: "Sie hat ein Buch gelesen. (irregular, haben)", english: "She read a book." },
                    { german: "Wir sind nach Berlin gefahren. (irregular, sein - movement)", english: "We drove to Berlin." },
                    { german: "Er ist früh aufgestanden. (separable, sein - change)", english: "He got up early." },
                    { german: "Ich habe meine Freunde besucht. (inseparable, haben)", english: "I visited my friends." },
                    { german: "Sie hat Informatik studiert. (-ieren, haben)", english: "She studied computer science." },
                    { german: "Wir haben viel eingekauft. (separable, haben)", english: "We shopped a lot." },
                    { german: "Das ist gestern passiert. (sein - special verb)", english: "That happened yesterday." }
                ]
            },
            {
                title: "2. Common Mistakes and How to Avoid Them",
                content: "Here are the most common errors learners make with perfect tense:\n\n**Mistake 1: Adding ge- to inseparable verbs**\n* ❌ WRONG: Ich habe meine Oma *gebesucht*.\n* ✅ CORRECT: Ich habe meine Oma **besucht**.\n* **Rule:** Inseparable prefixes (be-, er-, ver-, etc.) = NO ge-!\n\n**Mistake 2: Adding ge- to -ieren verbs**\n* ❌ WRONG: Ich habe Deutsch *gestudiert*.\n* ✅ CORRECT: Ich habe Deutsch **studiert**.\n* **Rule:** Verbs ending in -ieren = NO ge-!\n\n**Mistake 3: Wrong position of ge- in separable verbs**\n* ❌ WRONG: Ich habe *geaufgestanden*.\n* ✅ CORRECT: Ich bin **aufgestanden**.\n* **Rule:** ge- goes BETWEEN prefix and stem!\n\n**Mistake 4: Using haben instead of sein (or vice versa)**\n* ❌ WRONG: Ich *habe* nach Berlin gefahren.\n* ✅ CORRECT: Ich **bin** nach Berlin gefahren.\n* **Rule:** Movement verbs use sein!\n\n**Mistake 5: Forgetting vowel changes in irregular verbs**\n* ❌ WRONG: Ich habe *getrinkt*.\n* ✅ CORRECT: Ich habe **getrunken**.\n* **Rule:** Irregular verbs change vowels - must memorize!\n\n**Mistake 6: Using wrong auxiliary with reflexive verbs**\n* ❌ WRONG: Ich *bin* mich gewaschen.\n* ✅ CORRECT: Ich **habe** mich gewaschen.\n* **Rule:** ALL reflexive verbs use haben!\n\n**Mistake 7: Confusing separable and inseparable prefixes**\n* ❌ WRONG: Ich habe den Text *geübersetzt*. (for 'translated')\n* ✅ CORRECT: Ich habe den Text **übersetzt**.\n* **Rule:** übersetzt (inseparable) = translate; übergesetzt (separable) = ferry across\n\n**Quick Check Strategy:**\n1. Check for inseparable prefix → NO ge-\n2. Check for -ieren ending → NO ge-\n3. Check if separable → ge- in middle\n4. Check for movement/change → use sein\n5. When in doubt → use haben (it's more common!)",
                examples: [
                    { german: "Ich habe meine Hausaufgaben gemacht. ✓", english: "I did my homework. ✓" },
                    { german: "Sie ist nach Hause gegangen. ✓", english: "She went home. ✓" },
                    { german: "Wir haben Pizza bestellt. ✓ (inseparable, NO ge-)", english: "We ordered pizza. ✓" },
                    { german: "Er hat Biologie studiert. ✓ (-ieren, NO ge-)", english: "He studied biology. ✓" },
                    { german: "Ich bin um 7 Uhr aufgestanden. ✓ (separable, sein)", english: "I got up at 7 o'clock. ✓" },
                    { german: "Sie hat sich die Zähne geputzt. ✓ (reflexive, haben)", english: "She brushed her teeth. ✓" }
                ]
            },
            {
                title: "3. Essential Irregular Verbs - Master List",
                content: "These are the most important irregular verbs you MUST know for A1 level. Memorize these!\n\n**Movement Verbs (use SEIN):**\n* gehen → **ist gegangen** (to go)\n* fahren → **ist gefahren** (to drive/travel)\n* kommen → **ist gekommen** (to come)\n* fliegen → **ist geflogen** (to fly)\n* laufen → **ist gelaufen** (to run/walk)\n* schwimmen → **ist geschwommen** (to swim)\n* reisen → **ist gereist** (to travel)\n\n**Change of State Verbs (use SEIN):**\n* werden → **ist geworden** (to become)\n* aufstehen → **ist aufgestanden** (to get up)\n* einschlafen → **ist eingeschlafen** (to fall asleep)\n* aufwachen → **ist aufgewacht** (to wake up)\n* sterben → **ist gestorben** (to die)\n\n**Special SEIN Verbs:**\n* sein → **ist gewesen** (to be)\n* bleiben → **ist geblieben** (to stay)\n* passieren → **ist passiert** (to happen)\n\n**Common Irregular Verbs (use HABEN):**\n* essen → **hat gegessen** (to eat)\n* trinken → **hat getrunken** (to drink)\n* schreiben → **hat geschrieben** (to write)\n* lesen → **hat gelesen** (to read)\n* sehen → **hat gesehen** (to see)\n* nehmen → **hat genommen** (to take)\n* geben → **hat gegeben** (to give)\n* sprechen → **hat gesprochen** (to speak)\n* helfen → **hat geholfen** (to help)\n* finden → **hat gefunden** (to find)\n* schlafen → **hat geschlafen** (to sleep)\n* tragen → **hat getragen** (to wear/carry)\n* waschen → **hat gewaschen** (to wash)\n* beginnen → **hat begonnen** (to begin)\n* singen → **hat gesungen** (to sing)\n* bringen → **hat gebracht** (to bring)\n* denken → **hat gedacht** (to think)\n* kennen → **hat gekannt** (to know)\n* wissen → **hat gewusst** (to know)\n\n**Memorization Tip:** Create flashcards with infinitive on one side and perfect form on the other!",
                examples: [
                    { german: "Ich bin gestern ins Kino gegangen.", english: "I went to the cinema yesterday." },
                    { german: "Wir sind mit dem Zug gefahren.", english: "We traveled by train." },
                    { german: "Sie ist um 6 Uhr aufgestanden.", english: "She got up at 6 o'clock." },
                    { german: "Er hat ein Buch gelesen.", english: "He read a book." },
                    { german: "Ich habe Pizza gegessen.", english: "I ate pizza." },
                    { german: "Wir haben Deutsch gesprochen.", english: "We spoke German." },
                    { german: "Sie hat mir geholfen.", english: "She helped me." },
                    { german: "Das ist gestern passiert.", english: "That happened yesterday." }
                ]
            },
            {
                title: "4. Real-World Application and Error Correction",
                content: "Let's practice identifying and correcting errors in real-world contexts:\n\n**Error Correction Practice:**\n\n**Example 1:**\n* ❌ Ich habe nach Berlin gegeht.\n* ✅ Ich bin nach Berlin gegangen.\n* **Errors:** Wrong auxiliary (haben → sein), wrong participle (gegeht → gegangen)\n\n**Example 2:**\n* ❌ Sie hat ihre Freunde gebesucht.\n* ✅ Sie hat ihre Freunde besucht.\n* **Error:** Added ge- to inseparable verb (gebesucht → besucht)\n\n**Example 3:**\n* ❌ Wir haben um 7 Uhr geaufgestanden.\n* ✅ Wir sind um 7 Uhr aufgestanden.\n* **Errors:** Wrong auxiliary (haben → sein), wrong ge- position (geaufgestanden → aufgestanden)\n\n**Example 4:**\n* ❌ Er hat Informatik gestudiert.\n* ✅ Er hat Informatik studiert.\n* **Error:** Added ge- to -ieren verb (gestudiert → studiert)\n\n**Example 5:**\n* ❌ Ich bin ein Buch gelesen.\n* ✅ Ich habe ein Buch gelesen.\n* **Error:** Wrong auxiliary (bin → habe) - lesen is not a movement verb!\n\n**Real-World Scenarios:**\n\n**Scenario 1: Talking about your day**\n* Heute bin ich um 7 Uhr aufgestanden.\n* Ich habe gefrühstückt und bin zur Arbeit gefahren.\n* Ich habe viel gearbeitet und habe in der Mittagspause gegessen.\n* Am Abend bin ich nach Hause gekommen und habe ferngesehen.\n\n**Scenario 2: Describing a weekend**\n* Am Samstag habe ich lange geschlafen.\n* Dann bin ich in die Stadt gefahren und habe eingekauft.\n* Ich habe meine Freunde getroffen und wir sind ins Kino gegangen.\n* Der Film hat uns sehr gut gefallen!\n\n**Scenario 3: Vacation story**\n* Letzten Sommer bin ich nach Spanien geflogen.\n* Ich habe in einem Hotel übernachtet.\n* Jeden Tag bin ich am Strand gewesen und habe geschwommen.\n* Ich habe viele Fotos gemacht und habe neue Leute kennengelernt.",
                examples: [
                    { german: "Heute bin ich um 7 Uhr aufgestanden. ✓", english: "Today I got up at 7 o'clock. ✓" },
                    { german: "Ich habe gefrühstückt und bin zur Arbeit gefahren. ✓", english: "I had breakfast and drove to work. ✓" },
                    { german: "Am Samstag habe ich lange geschlafen. ✓", english: "On Saturday I slept late. ✓" },
                    { german: "Wir sind ins Kino gegangen. ✓", english: "We went to the cinema. ✓" },
                    { german: "Ich bin nach Spanien geflogen. ✓", english: "I flew to Spain. ✓" },
                    { german: "Ich habe viele Fotos gemacht. ✓", english: "I took many photos. ✓" }
                ]
            }
        ],
        homework: [
            {
                id: "d34-q1",
                type: "choice",
                question: "Which is correct? 'I learned German.'",
                options: ["Ich habe Deutsch gelernt.", "Ich bin Deutsch gelernt.", "Ich habe Deutsch gelernet."],
                answer: "Ich habe Deutsch gelernt.",
                explanation: "lernen → gelernt (regular) with haben"
            },
            {
                id: "d34-q2",
                type: "text",
                question: "Correct the error: 'Sie hat nach Berlin gegeht.'",
                answer: "Sie ist nach Berlin gegangen.",
                explanation: "gehen → gegangen (irregular) with sein (movement)"
            },
            {
                id: "d34-q3",
                type: "choice",
                question: "Complete: 'Wir _____ Pizza _____.' (essen)",
                options: ["haben gegessen", "sind gegessen", "haben geessen"],
                answer: "haben gegessen",
                explanation: "essen → gegessen (irregular) with haben"
            },
            {
                id: "d34-q4",
                type: "text",
                question: "Correct the error: 'Ich habe meine Oma gebesucht.'",
                answer: "Ich habe meine Oma besucht.",
                explanation: "besuchen → besucht (inseparable, NO ge-!)"
            },
            {
                id: "d34-q5",
                type: "choice",
                question: "Which is correct? 'He got up at 6 o'clock.'",
                options: ["Er ist um 6 Uhr aufgestanden.", "Er hat um 6 Uhr aufgestanden.", "Er ist um 6 Uhr geaufgestanden."],
                answer: "Er ist um 6 Uhr aufgestanden.",
                explanation: "aufstehen → aufgestanden (separable) with sein (change of state)"
            },
            {
                id: "d34-q6",
                type: "text",
                question: "Translate: 'She read a book.' (lesen)",
                answer: "Sie hat ein Buch gelesen.",
                explanation: "lesen → gelesen (irregular) with haben"
            },
            {
                id: "d34-q7",
                type: "choice",
                question: "Correct the error: 'Ich habe Informatik gestudiert.'",
                options: ["Ich habe Informatik studiert.", "Ich bin Informatik studiert.", "Ich habe Informatik gestudieren."],
                answer: "Ich habe Informatik studiert.",
                explanation: "studieren → studiert (-ieren verb, NO ge-!)"
            },
            {
                id: "d34-q8",
                type: "text",
                question: "Complete: 'Wir _____ mit dem Zug _____.' (fahren)",
                answer: "sind gefahren",
                explanation: "fahren → gefahren (irregular) with sein (movement)"
            },
            {
                id: "d34-q9",
                type: "choice",
                question: "Which is correct? 'I visited my friends.'",
                options: ["Ich habe meine Freunde besucht.", "Ich bin meine Freunde besucht.", "Ich habe meine Freunde gebesucht."],
                answer: "Ich habe meine Freunde besucht.",
                explanation: "besuchen → besucht (inseparable, NO ge-!) with haben"
            },
            {
                id: "d34-q10",
                type: "text",
                question: "Correct the error: 'Sie haben nach Hause gegeht.'",
                answer: "Sie sind nach Hause gegangen.",
                explanation: "gehen → gegangen (irregular) with sein (movement)"
            },
            {
                id: "d34-q11",
                type: "choice",
                question: "Complete: 'Er _____ mir _____.' (helfen)",
                options: ["hat geholfen", "ist geholfen", "hat gehelft"],
                answer: "hat geholfen",
                explanation: "helfen → geholfen (irregular) with haben"
            },
            {
                id: "d34-q12",
                type: "text",
                question: "Translate: 'We went shopping.' (einkaufen gehen)",
                answer: "Wir sind einkaufen gegangen.",
                explanation: "einkaufen gehen → einkaufen gegangen with sein (movement)"
            },
            {
                id: "d34-q13",
                type: "choice",
                question: "Correct the error: 'Ich bin ein Buch gelesen.'",
                options: ["Ich habe ein Buch gelesen.", "Ich bin ein Buch lesen.", "Ich habe ein Buch gelesenen."],
                answer: "Ich habe ein Buch gelesen.",
                explanation: "lesen → gelesen (irregular) with haben (not a movement verb!)"
            },
            {
                id: "d34-q14",
                type: "text",
                question: "Complete: 'Sie _____ die Geschichte _____.' (erzählen)",
                answer: "hat erzählt",
                explanation: "erzählen → erzählt (inseparable, NO ge-!) with haben"
            },
            {
                id: "d34-q15",
                type: "choice",
                question: "Which is correct? 'I flew to Spain.'",
                options: ["Ich bin nach Spanien geflogen.", "Ich habe nach Spanien geflogen.", "Ich bin nach Spanien gefliegt."],
                answer: "Ich bin nach Spanien geflogen.",
                explanation: "fliegen → geflogen (irregular) with sein (movement)"
            },
            {
                id: "d34-q16",
                type: "text",
                question: "Correct the error: 'Wir haben um 7 Uhr geaufgestanden.'",
                answer: "Wir sind um 7 Uhr aufgestanden.",
                explanation: "aufstehen → aufgestanden (separable, ge- in middle) with sein"
            },
            {
                id: "d34-q17",
                type: "choice",
                question: "Complete: 'Ich _____ viele Fotos _____.' (machen)",
                options: ["habe gemacht", "bin gemacht", "habe gemachen"],
                answer: "habe gemacht",
                explanation: "machen → gemacht (regular) with haben"
            },
            {
                id: "d34-q18",
                type: "text",
                question: "Translate: 'She forgot her key.' (vergessen)",
                answer: "Sie hat ihren Schlüssel vergessen.",
                explanation: "vergessen → vergessen (inseparable, NO ge-!) with haben"
            },
            {
                id: "d34-q19",
                type: "choice",
                question: "Correct the error: 'Das hat gestern gepassiert.'",
                options: ["Das ist gestern passiert.", "Das hat gestern passiert.", "Das ist gestern gepassieren."],
                answer: "Das ist gestern passiert.",
                explanation: "passieren → passiert (-ieren, NO ge-!) with sein (special verb)"
            },
            {
                id: "d34-q20",
                type: "text",
                question: "Complete: 'Wir _____ Deutsch _____.' (sprechen)",
                answer: "haben gesprochen",
                explanation: "sprechen → gesprochen (irregular) with haben"
            },
            {
                id: "d34-q21",
                type: "choice",
                question: "Which is correct? 'I called my parents.' (anrufen)",
                options: ["Ich habe meine Eltern angerufen.", "Ich bin meine Eltern angerufen.", "Ich habe meine Eltern geangerufen."],
                answer: "Ich habe meine Eltern angerufen.",
                explanation: "anrufen → angerufen (separable) with haben"
            },
            {
                id: "d34-q22",
                type: "text",
                question: "Correct the error: 'Er hat sein Auto geverkauft.'",
                answer: "Er hat sein Auto verkauft.",
                explanation: "verkaufen → verkauft (inseparable, NO ge-!)"
            },
            {
                id: "d34-q23",
                type: "choice",
                question: "Complete: 'Sie _____ im Hotel _____.' (übernachten)",
                options: ["hat übernachtet", "ist übernachtet", "hat geübernachtet"],
                answer: "hat übernachtet",
                explanation: "übernachten → übernachtet (inseparable, NO ge-!) with haben"
            },
            {
                id: "d34-q24",
                type: "text",
                question: "Translate: 'We stayed at home.' (zu Hause bleiben)",
                answer: "Wir sind zu Hause geblieben.",
                explanation: "bleiben → geblieben (irregular) with sein (special verb)"
            },
            {
                id: "d34-q25",
                type: "choice",
                question: "Is this correct? 'Ich habe mich gewaschen.'",
                options: ["Yes, it's correct.", "No, it should be 'Ich bin mich gewaschen.'", "No, it should be 'Ich habe mich gewaschenen.'"],
                answer: "Yes, it's correct.",
                explanation: "sich waschen → hat sich gewaschen (reflexive verbs ALWAYS use haben)"
            },
            {
                id: "d34-q26",
                type: "text",
                question: "Complete: 'Er _____ den Text _____.' (übersetzen - translate)",
                answer: "hat übersetzt",
                explanation: "übersetzen → übersetzt (inseparable, NO ge-!) with haben"
            },
            {
                id: "d34-q27",
                type: "choice",
                question: "Which is correct? 'I took the bus.' (nehmen)",
                options: ["Ich habe den Bus genommen.", "Ich bin den Bus genommen.", "Ich habe den Bus genommt."],
                answer: "Ich habe den Bus genommen.",
                explanation: "nehmen → genommen (irregular) with haben"
            },
            {
                id: "d34-q28",
                type: "text",
                question: "Correct the error: 'Wir haben ins Kino gegangen.'",
                answer: "Wir sind ins Kino gegangen.",
                explanation: "gehen → gegangen (irregular) with sein (movement)"
            },
            {
                id: "d34-q29",
                type: "choice",
                question: "Complete: 'Sie _____ ihre Reise _____.' (beschreiben)",
                options: ["hat beschrieben", "ist beschrieben", "hat gebeschrieben"],
                answer: "hat beschrieben",
                explanation: "beschreiben → beschrieben (inseparable, NO ge-!) with haben"
            },
            {
                id: "d34-q30",
                type: "text",
                question: "Translate: 'I became a teacher.' (werden)",
                answer: "Ich bin Lehrer geworden.",
                explanation: "werden → geworden (irregular) with sein (change of state)"
            },
            {
                id: "d34-q31",
                type: "choice",
                question: "Correct: 'Er hat nach Berlin gegeht und hat seine Freunde gebesucht.'",
                options: ["Er ist nach Berlin gegangen und hat seine Freunde besucht.", "Er hat nach Berlin gegangen und hat seine Freunde besucht.", "Er ist nach Berlin gegangen und ist seine Freunde besucht."],
                answer: "Er ist nach Berlin gegangen und hat seine Freunde besucht.",
                explanation: "gehen uses sein, besuchen uses haben and NO ge-!"
            },
            {
                id: "d34-q32",
                type: "text",
                question: "Complete: 'Ich _____ um 23 Uhr _____.' (einschlafen)",
                answer: "bin eingeschlafen",
                explanation: "einschlafen → eingeschlafen (separable) with sein (change of state)"
            },
            {
                id: "d34-q33",
                type: "choice",
                question: "Which is correct? 'We ordered pizza.' (bestellen)",
                options: ["Wir haben Pizza bestellt.", "Wir sind Pizza bestellt.", "Wir haben Pizza gebestellt."],
                answer: "Wir haben Pizza bestellt.",
                explanation: "bestellen → bestellt (inseparable, NO ge-!) with haben"
            },
            {
                id: "d34-q34",
                type: "text",
                question: "Translate: 'She sang a song.' (singen)",
                answer: "Sie hat ein Lied gesungen.",
                explanation: "singen → gesungen (irregular) with haben"
            },
            {
                id: "d34-q35",
                type: "choice",
                question: "Correct the error: 'Ich habe mein Zimmer geaufgeräumt.'",
                options: ["Ich habe mein Zimmer aufgeräumt.", "Ich bin mein Zimmer aufgeräumt.", "Ich habe mein Zimmer aufräumen."],
                answer: "Ich habe mein Zimmer aufgeräumt.",
                explanation: "aufräumen → aufgeräumt (separable, ge- in middle) with haben"
            },
            {
                id: "d34-q36",
                type: "text",
                question: "Complete: 'Das Essen _____ sehr gut _____!' (schmecken)",
                answer: "hat geschmeckt",
                explanation: "schmecken → geschmeckt (regular) with haben"
            },
            {
                id: "d34-q37",
                type: "choice",
                question: "Which is correct? 'I found my key.' (finden)",
                options: ["Ich habe meinen Schlüssel gefunden.", "Ich bin meinen Schlüssel gefunden.", "Ich habe meinen Schlüssel gefinden."],
                answer: "Ich habe meinen Schlüssel gefunden.",
                explanation: "finden → gefunden (irregular) with haben"
            },
            {
                id: "d34-q38",
                type: "text",
                question: "Correct the error: 'Wir haben lange geschlaft.'",
                answer: "Wir haben lange geschlafen.",
                explanation: "schlafen → geschlafen (irregular, vowel change a→a)"
            },
            {
                id: "d34-q39",
                type: "choice",
                question: "Complete: 'Sie _____ uns für das Restaurant _____.' (sich entscheiden)",
                options: ["hat sich entschieden", "ist sich entschieden", "hat sich geentschieden"],
                answer: "hat sich entschieden",
                explanation: "sich entscheiden → hat sich entschieden (inseparable, NO ge-!, reflexive uses haben)"
            },
            {
                id: "d34-q40",
                type: "text",
                question: "Translate: 'We brought wine.' (bringen)",
                answer: "Wir haben Wein gebracht.",
                explanation: "bringen → gebracht (irregular) with haben"
            },
            {
                id: "d34-q41",
                type: "choice",
                question: "Correct the error: 'Ich bin Kaffee getrunken.'",
                options: ["Ich habe Kaffee getrunken.", "Ich bin Kaffee trinken.", "Ich habe Kaffee getrinkt."],
                answer: "Ich habe Kaffee getrunken.",
                explanation: "trinken → getrunken (irregular) with haben (not a movement verb!)"
            },
            {
                id: "d34-q42",
                type: "text",
                question: "Complete: 'Der Kurs _____ um 9 Uhr _____.' (beginnen)",
                answer: "hat begonnen",
                explanation: "beginnen → begonnen (inseparable, NO ge-!) with haben"
            },
            {
                id: "d34-q43",
                type: "choice",
                question: "Which is correct? 'I swam in the sea.' (schwimmen)",
                options: ["Ich bin im Meer geschwommen.", "Ich habe im Meer geschwommen.", "Ich bin im Meer geschwimmt."],
                answer: "Ich bin im Meer geschwommen.",
                explanation: "schwimmen → geschwommen (irregular) with sein (movement)"
            },
            {
                id: "d34-q44",
                type: "text",
                question: "Translate: 'She gave me a gift.' (geben)",
                answer: "Sie hat mir ein Geschenk gegeben.",
                explanation: "geben → gegeben (irregular) with haben"
            },
            {
                id: "d34-q45",
                type: "choice",
                question: "Complete: 'Ich _____ gestern im Park spazieren _____.' (spazieren gehen)",
                options: ["bin gegangen", "habe gegangen", "bin gegeht"],
                answer: "bin gegangen",
                explanation: "spazieren gehen → spazieren gegangen with sein (movement)"
            },
            {
                id: "d34-q46",
                type: "text",
                question: "Correct the error: 'Sie hat den Computer gebenutzt.'",
                answer: "Sie hat den Computer benutzt.",
                explanation: "benutzen → benutzt (inseparable, NO ge-!)"
            },
            {
                id: "d34-q47",
                type: "choice",
                question: "Which is correct? 'I thought about it.' (denken)",
                options: ["Ich habe darüber gedacht.", "Ich bin darüber gedacht.", "Ich habe darüber gedenkt."],
                answer: "Ich habe darüber gedacht.",
                explanation: "denken → gedacht (irregular) with haben"
            },
            {
                id: "d34-q48",
                type: "text",
                question: "Complete: 'Wir _____ neue Leute _____.' (kennenlernen)",
                answer: "haben kennengelernt",
                explanation: "kennenlernen → kennengelernt (separable) with haben"
            },
            {
                id: "d34-q49",
                type: "choice",
                question: "Final mixed practice: 'Ich _____ früh _____, _____ gefrühstückt und _____ zur Uni _____.'",
                options: ["bin aufgestanden, habe, bin gefahren", "habe aufgestanden, habe, habe gefahren", "bin aufgestanden, bin, bin gefahren"],
                answer: "bin aufgestanden, habe, bin gefahren",
                explanation: "aufstehen (sein), frühstücken (haben), fahren (sein)"
            },
            {
                id: "d34-q50",
                type: "text",
                question: "Write a complete sentence: 'Yesterday I visited my grandmother and we talked a lot.' (besuchen, reden)",
                answer: "Gestern habe ich meine Oma besucht und wir haben viel geredet.",
                explanation: "besuchen → besucht (inseparable, NO ge-!), reden → geredet (regular), both with haben"
            }
        ]
    }
};