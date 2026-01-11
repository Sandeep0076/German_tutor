/**
 * Day 13: Writing + Speaking - Work & Office
 * Focus: Job applications, workplace communication, office situations
 * 
 * Skills: Writing (Teil 1 & 2), Speaking (all 3 parts)
 * Topics: Job search, office communication, workplace requests, professional emails
 */

import type {
  ExamDay,
  WritingPractice,
  SpeakingPractice,
  VocabularyTheme
} from '../examTypes';

// ============================================================================
// WRITING PRACTICE - Work and Office Communication
// ============================================================================

const writingPractice0: WritingPractice = {
  part: 1,
  title: 'Teil 1: Job Application Form',
  description: 'Fill in a job application form',
  instructions: 'Complete the job application form with your information. Fill in all the required fields. Time: ~10 minutes.',
  prompt: `**BEWERBUNGSFORMULAR / JOB APPLICATION FORM**

Bitte füllen Sie das Formular aus:

Persönliche Daten:
Vorname: _______________
Nachname: _______________
Geburtsdatum: _______________
Staatsangehörigkeit: _______________

Kontaktdaten:
Adresse: _______________
Postleitzahl, Ort: _______________
Telefonnummer: _______________
E-Mail-Adresse: _______________

Berufserfahrung:
Aktueller Beruf: _______________
Arbeitgeber: _______________
Seit wann: _______________

Ausbildung:
Höchster Schulabschluss: _______________
Studium/Ausbildung: _______________

Sprachkenntnisse:
Deutsch: _______________
Englisch: _______________
Weitere Sprachen: _______________

Verfügbarkeit:
Ab wann können Sie anfangen? _______________
Vollzeit oder Teilzeit? _______________

Datum: _______________
Unterschrift: _______________`,
  sampleAnswer: `Persönliche Daten:
Vorname: Maria
Nachname: Schmidt
Geburtsdatum: 15.06.1990
Staatsangehörigkeit: deutsch

Kontaktdaten:
Adresse: Hauptstraße 45
Postleitzahl, Ort: 10115 Berlin
Telefonnummer: 030-12345678
E-Mail-Adresse: maria.schmidt@email.de

Berufserfahrung:
Aktueller Beruf: Verkäuferin
Arbeitgeber: Kaufhaus Müller
Seit wann: 01.03.2020

Ausbildung:
Höchster Schulabschluss: Abitur
Studium/Ausbildung: Ausbildung zur Einzelhandelskauffrau

Sprachkenntnisse:
Deutsch: Muttersprache
Englisch: Gut
Weitere Sprachen: Spanisch (Grundkenntnisse)

Verfügbarkeit:
Ab wann können Sie anfangen? 01.04.2026
Vollzeit oder Teilzeit? Vollzeit

Datum: 11.01.2026
Unterschrift: Maria Schmidt`,
  keyPhrases: [
    'Bewerbung (application)',
    'Berufserfahrung (work experience)',
    'Ausbildung (education/training)',
    'Sprachkenntnisse (language skills)',
    'Verfügbarkeit (availability)',
    'Vollzeit (full-time)',
    'Teilzeit (part-time)'
  ]
};

const writingPractice1: WritingPractice = {
  part: 2,
  title: 'Teil 2: Email to Colleague about Meeting',
  description: 'Write an email to a colleague about a meeting',
  instructions: 'You need to arrange a meeting with your colleague. Write an email. Write 1-2 sentences for each point (~30 words total). Time: ~15 minutes.',
  prompt: `Sie möchten ein Meeting mit Ihrem Kollegen haben. Schreiben Sie an Ihren Kollegen:
- Warum brauchen Sie das Meeting?
- Wann haben Sie Zeit?
- Wo können Sie sich treffen?`,
  sampleAnswer: `Hallo Thomas,

ich möchte mit dir über das neue Projekt sprechen. Hast du morgen Zeit für ein Meeting?
Wir können uns um 14 Uhr in Raum 301 treffen.

Viele Grüße
Maria`,
  keyPhrases: [
    'Ich möchte... besprechen (I would like to discuss...)',
    'Hast du Zeit für...? (Do you have time for...?)',
    'Wir können uns... treffen (We can meet...)',
    'das Meeting (the meeting)',
    'das Projekt (the project)'
  ]
};

const writingPractice2: WritingPractice = {
  part: 2,
  title: 'Teil 2: Absence Notification',
  description: 'Write an email to inform about absence',
  instructions: 'You cannot come to work tomorrow. Write to your boss. Write 1-2 sentences for each point (~30 words total). Time: ~15 minutes.',
  prompt: `Sie können morgen nicht zur Arbeit kommen. Schreiben Sie an Ihren Chef:
- Warum können Sie nicht kommen?
- Wie lange sind Sie weg?
- Wer kann Ihre Arbeit machen?`,
  sampleAnswer: `Sehr geehrter Herr Müller,

ich bin leider krank und kann morgen nicht zur Arbeit kommen. Ich habe Fieber und gehe zum Arzt.
Ich bin wahrscheinlich zwei Tage krank. Mein Kollege Thomas kann meine Aufgaben übernehmen.

Mit freundlichen Grüßen
Anna Schmidt`,
  keyPhrases: [
    'Ich bin krank (I am sick)',
    'Ich kann nicht kommen (I cannot come)',
    'Ich bin... Tage weg (I will be away for... days)',
    '... kann meine Aufgaben übernehmen (... can take over my tasks)',
    'Sehr geehrter Herr/Frau... (Dear Mr./Ms...)'
  ]
};

const writingPractice3: WritingPractice = {
  part: 2,
  title: 'Teil 2: Request for Information about Job',
  description: 'Write an email asking about a job position',
  instructions: 'You saw a job advertisement. Write to the company. Write 1-2 sentences for each point (~30 words total). Time: ~15 minutes.',
  prompt: `Sie haben eine Stellenanzeige gesehen. Schreiben Sie an die Firma:
- Für welche Stelle interessieren Sie sich?
- Welche Erfahrung haben Sie?
- Wann können Sie anfangen?`,
  sampleAnswer: `Sehr geehrte Damen und Herren,

ich interessiere mich für die Stelle als Verkäuferin in Ihrem Geschäft.
Ich habe drei Jahre Erfahrung im Einzelhandel. Ich kann ab dem 1. Mai anfangen.

Mit freundlichen Grüßen
Lisa Weber`,
  keyPhrases: [
    'Ich interessiere mich für die Stelle als... (I\'m interested in the position as...)',
    'Ich habe... Jahre Erfahrung (I have... years of experience)',
    'Ich kann ab... anfangen (I can start from...)',
    'die Stellenanzeige (job advertisement)',
    'die Bewerbung (application)'
  ]
};

// ============================================================================
// SPEAKING PRACTICE - Work and Office Situations
// ============================================================================

const speakingPractice1: SpeakingPractice = {
  part: 1,
  title: 'Teil 1: Talk about Your Job',
  description: 'Introduce your work and professional background',
  instructions: 'Answer questions about your job, work experience, and career. Time: ~3 minutes.',
  prompts: [
    'Was sind Sie von Beruf?',
    'Wo arbeiten Sie?',
    'Was machen Sie bei der Arbeit?',
    'Wie lange arbeiten Sie schon dort?',
    'Arbeiten Sie Vollzeit oder Teilzeit?',
    'Wie kommen Sie zur Arbeit?'
  ],
  sampleResponses: [
    'Ich bin Verkäuferin. / Ich arbeite als Lehrerin.',
    'Ich arbeite bei einer Firma in Berlin. / Ich arbeite in einem Büro.',
    'Ich verkaufe Kleidung und berate Kunden. / Ich unterrichte Deutsch.',
    'Ich arbeite seit drei Jahren dort.',
    'Ich arbeite Vollzeit, von Montag bis Freitag.',
    'Ich komme mit dem Bus zur Arbeit. / Ich fahre mit dem Fahrrad.'
  ]
};

const speakingPractice2: SpeakingPractice = {
  part: 2,
  title: 'Teil 2: Ask and Answer about Work',
  description: 'Discuss work and career topics',
  instructions: 'You receive a theme card about "Arbeit" (Work). Ask your partner 3 questions, then answer 3 questions. Time: ~6 minutes.',
  prompts: [
    'Theme: Arbeit - Ask about: job, working hours, workplace',
    'Sample questions you might ask:',
    '- Was arbeitest du?',
    '- Wie sind deine Arbeitszeiten?',
    '- Magst du deinen Job?',
    'Sample questions you might be asked:',
    '- Wo arbeitest du?',
    '- Was machst du bei der Arbeit?',
    '- Wie lange arbeitest du schon dort?'
  ],
  sampleResponses: [
    'Was arbeitest du? - Ich bin Ingenieur und arbeite bei einer Technologiefirma.',
    'Wie sind deine Arbeitszeiten? - Ich arbeite von 9 bis 17 Uhr, Montag bis Freitag.',
    'Magst du deinen Job? - Ja, sehr! Die Arbeit ist interessant und meine Kollegen sind nett.',
    'Wo arbeitest du? - Ich arbeite in einem Büro in der Stadtmitte.',
    'Was machst du bei der Arbeit? - Ich entwickle Software und arbeite an verschiedenen Projekten.',
    'Wie lange arbeitest du schon dort? - Ich arbeite seit fünf Jahren bei dieser Firma.'
  ]
};

const speakingPractice3: SpeakingPractice = {
  part: 2,
  title: 'Teil 2: Talk about Work-Life Balance',
  description: 'Discuss work schedule and free time',
  instructions: 'Answer questions about your work schedule and how you balance work and free time. Time: ~3 minutes.',
  prompts: [
    'Wie viele Stunden arbeiten Sie pro Woche?',
    'Haben Sie viel Stress bei der Arbeit?',
    'Was machen Sie nach der Arbeit?',
    'Arbeiten Sie auch am Wochenende?'
  ],
  sampleResponses: [
    'Ich arbeite 40 Stunden pro Woche, von Montag bis Freitag.',
    'Manchmal habe ich Stress, aber meistens ist die Arbeit okay.',
    'Nach der Arbeit gehe ich nach Hause, koche und entspanne mich. Manchmal treffe ich Freunde.',
    'Nein, am Wochenende habe ich frei. Ich arbeite nur von Montag bis Freitag.'
  ]
};

const speakingPractice4: SpeakingPractice = {
  part: 3,
  title: 'Teil 3: Make Requests at Work',
  description: 'Practice making polite requests in office situations',
  instructions: 'Make polite requests to colleagues and supervisors. Time: ~6 minutes.',
  prompts: [
    'Ask a colleague for help',
    'Ask your boss for a day off',
    'Ask for information about a meeting',
    'Ask to borrow office supplies'
  ],
  sampleResponses: [
    'Entschuldigung, kannst du mir bitte helfen? Ich verstehe dieses Programm nicht. - Ja, natürlich! Was ist das Problem?',
    'Herr Müller, kann ich bitte nächsten Freitag frei haben? Ich habe einen Arzttermin. - Ja, kein Problem. Bitte schreiben Sie mir eine E-Mail.',
    'Entschuldigung, wann ist das Meeting morgen? - Das Meeting ist um 10 Uhr in Raum 205.',
    'Hast du einen Stift? Ich habe meinen vergessen. - Ja, hier bitte. - Danke!'
  ]
};

const speakingPractice5: SpeakingPractice = {
  part: 3,
  title: 'Teil 3: Office Conversations',
  description: 'Practice common office dialogues',
  instructions: 'Have short conversations about typical office situations. Time: ~3 minutes.',
  prompts: [
    'Greet a colleague in the morning',
    'Ask about weekend plans',
    'Discuss a project deadline',
    'Say goodbye at the end of the day'
  ],
  sampleResponses: [
    'Guten Morgen! Wie geht es dir? - Guten Morgen! Mir geht es gut, danke. Und dir?',
    'Was machst du am Wochenende? - Ich gehe wandern. Und du? - Ich besuche meine Familie.',
    'Wann ist die Deadline für das Projekt? - Die Deadline ist nächsten Montag. - Okay, danke!',
    'Schönen Feierabend! Bis morgen! - Danke, dir auch! Bis morgen!'
  ]
};

// ============================================================================
// VOCABULARY THEME - Work & Office
// ============================================================================

const vocabulary: VocabularyTheme = {
  theme: 'Work & Office (Arbeit & Büro)',
  items: [
    // Jobs & Professions
    {
      german: 'der Beruf',
      english: 'profession/job',
      example: 'Was ist Ihr Beruf?'
    },
    {
      german: 'die Arbeit',
      english: 'work',
      example: 'Ich gehe zur Arbeit.'
    },
    {
      german: 'der Job',
      english: 'job',
      example: 'Ich suche einen neuen Job.'
    },
    {
      german: 'der Lehrer / die Lehrerin',
      english: 'teacher',
      example: 'Sie ist Lehrerin.'
    },
    {
      german: 'der Arzt / die Ärztin',
      english: 'doctor',
      example: 'Er ist Arzt.'
    },
    {
      german: 'der Ingenieur / die Ingenieurin',
      english: 'engineer',
      example: 'Ich bin Ingenieur.'
    },
    {
      german: 'der Verkäufer / die Verkäuferin',
      english: 'salesperson',
      example: 'Sie arbeitet als Verkäuferin.'
    },
    {
      german: 'der Programmierer / die Programmiererin',
      english: 'programmer',
      example: 'Er ist Programmierer.'
    },
    {
      german: 'der Koch / die Köchin',
      english: 'cook/chef',
      example: 'Mein Bruder ist Koch.'
    },
    {
      german: 'der Kellner / die Kellnerin',
      english: 'waiter/waitress',
      example: 'Sie arbeitet als Kellnerin.'
    },
    // Workplace
    {
      german: 'das Büro',
      english: 'office',
      example: 'Ich arbeite in einem Büro.'
    },
    {
      german: 'die Firma',
      english: 'company',
      example: 'Ich arbeite bei einer großen Firma.'
    },
    {
      german: 'das Unternehmen',
      english: 'company/enterprise',
      example: 'Das Unternehmen ist international.'
    },
    {
      german: 'der Arbeitsplatz',
      english: 'workplace',
      example: 'Mein Arbeitsplatz ist modern.'
    },
    {
      german: 'der Schreibtisch',
      english: 'desk',
      example: 'Mein Schreibtisch ist groß.'
    },
    {
      german: 'der Computer',
      english: 'computer',
      example: 'Ich arbeite am Computer.'
    },
    {
      german: 'das Meeting / die Besprechung',
      english: 'meeting',
      example: 'Das Meeting beginnt um 10 Uhr.'
    },
    {
      german: 'das Projekt',
      english: 'project',
      example: 'Ich arbeite an einem neuen Projekt.'
    },
    // Work Schedule
    {
      german: 'die Arbeitszeit',
      english: 'working hours',
      example: 'Meine Arbeitszeiten sind flexibel.'
    },
    {
      german: 'Vollzeit',
      english: 'full-time',
      example: 'Ich arbeite Vollzeit.'
    },
    {
      german: 'Teilzeit',
      english: 'part-time',
      example: 'Sie arbeitet Teilzeit.'
    },
    {
      german: 'die Pause',
      english: 'break',
      example: 'Ich mache eine Pause.'
    },
    {
      german: 'die Mittagspause',
      english: 'lunch break',
      example: 'Die Mittagspause ist von 12 bis 13 Uhr.'
    },
    {
      german: 'der Feierabend',
      english: 'end of work day',
      example: 'Um 17 Uhr habe ich Feierabend.'
    },
    {
      german: 'der Urlaub',
      english: 'vacation',
      example: 'Ich habe zwei Wochen Urlaub.'
    },
    {
      german: 'der freie Tag',
      english: 'day off',
      example: 'Morgen habe ich einen freien Tag.'
    },
    {
      german: 'die Überstunden',
      english: 'overtime',
      example: 'Ich mache heute Überstunden.'
    },
    // Colleagues & Hierarchy
    {
      german: 'der Kollege / die Kollegin',
      english: 'colleague',
      example: 'Meine Kollegen sind nett.'
    },
    {
      german: 'der Chef / die Chefin',
      english: 'boss',
      example: 'Mein Chef ist streng.'
    },
    {
      german: 'der Mitarbeiter / die Mitarbeiterin',
      english: 'employee',
      example: 'Die Firma hat 100 Mitarbeiter.'
    },
    {
      german: 'das Team',
      english: 'team',
      example: 'Ich arbeite in einem Team.'
    },
    // Job Search & Application
    {
      german: 'die Stellenanzeige',
      english: 'job advertisement',
      example: 'Ich habe eine Stellenanzeige gelesen.'
    },
    {
      german: 'die Bewerbung',
      english: 'application',
      example: 'Ich schreibe eine Bewerbung.'
    },
    {
      german: 'der Lebenslauf',
      english: 'CV/resume',
      example: 'Mein Lebenslauf ist aktuell.'
    },
    {
      german: 'das Vorstellungsgespräch',
      english: 'job interview',
      example: 'Ich habe morgen ein Vorstellungsgespräch.'
    },
    {
      german: 'die Erfahrung',
      english: 'experience',
      example: 'Ich habe fünf Jahre Erfahrung.'
    },
    {
      german: 'die Ausbildung',
      english: 'training/education',
      example: 'Ich habe eine Ausbildung als Verkäuferin.'
    },
    // Work Verbs
    {
      german: 'arbeiten',
      english: 'to work',
      example: 'Ich arbeite bei einer Firma.'
    },
    {
      german: 'anfangen',
      english: 'to start',
      example: 'Ich fange um 9 Uhr an.'
    },
    {
      german: 'aufhören',
      english: 'to finish/stop',
      example: 'Ich höre um 17 Uhr auf.'
    },
    {
      german: 'verdienen',
      english: 'to earn',
      example: 'Ich verdiene 2000 Euro pro Monat.'
    },
    {
      german: 'suchen',
      english: 'to search/look for',
      example: 'Ich suche einen neuen Job.'
    },
    {
      german: 'sich bewerben',
      english: 'to apply',
      example: 'Ich bewerbe mich für die Stelle.'
    },
    {
      german: 'kündigen',
      english: 'to quit/resign',
      example: 'Ich möchte kündigen.'
    },
    // Office Supplies
    {
      german: 'der Stift',
      english: 'pen',
      example: 'Ich brauche einen Stift.'
    },
    {
      german: 'das Papier',
      english: 'paper',
      example: 'Wo ist das Papier?'
    },
    {
      german: 'der Drucker',
      english: 'printer',
      example: 'Der Drucker funktioniert nicht.'
    },
    {
      german: 'der Ordner',
      english: 'folder/binder',
      example: 'Die Dokumente sind im Ordner.'
    },
    {
      german: 'das Telefon',
      english: 'telephone',
      example: 'Das Telefon klingelt.'
    },
    // Useful Phrases
    {
      german: 'Ich arbeite als...',
      english: 'I work as...',
      example: 'Ich arbeite als Lehrer.'
    },
    {
      german: 'Ich bin... von Beruf.',
      english: 'I am a... by profession.',
      example: 'Ich bin Ingenieur von Beruf.'
    },
    {
      german: 'Ich habe... Jahre Erfahrung.',
      english: 'I have... years of experience.',
      example: 'Ich habe drei Jahre Erfahrung.'
    },
    {
      german: 'Kann ich frei haben?',
      english: 'Can I have time off?',
      example: 'Kann ich morgen frei haben?'
    },
    {
      german: 'Schönen Feierabend!',
      english: 'Have a nice evening! (after work)',
      example: 'Tschüss! Schönen Feierabend!'
    }
  ]
};

// ============================================================================
// EXAM DAY ASSEMBLY
// ============================================================================

const day13: ExamDay = {
  day: 13,
  skills: ['Writing', 'Speaking'],
  practices: [
    writingPractice0,
    writingPractice1,
    writingPractice2,
    writingPractice3,
    speakingPractice1,
    speakingPractice2,
    speakingPractice3,
    speakingPractice4,
    speakingPractice5
  ],
  vocabulary,
  focus: 'Work and office'
};

export default day13;