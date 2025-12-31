// Translations Configuration
const translations = {
    de: {
        nav_values: "Grundwerte",
        nav_communication: "Kommunikation",
        nav_dos_donts: "Dos & Don'ts",
        btn_back: "Zurück zur Übersicht",

        hero_subtitle: "Willkommen in der Zukunft",
        hero_title: "Der Knigge für das<br>Zeitalter der KI",
        hero_text: "Künstliche Intelligenz verändert, wie wir arbeiten und kommunizieren. Doch wie interagieren wir respektvoll, effizient und verantwortlich mit digitalen Vordenkern?",
        hero_cta: "Regeln entdecken",

        values_title: "Die 3 Säulen der KI-Interaktion",
        val_transparency_title: "Transparenz",
        val_transparency_text: "Offenheit ist der Schlüssel. Kennzeichnen Sie KI-generierte Inhalte und seien Sie ehrlich über den Einsatz von Tools. Vertrauen entsteht durch Klarheit.",
        val_responsibility_title: "Verantwortung",
        val_responsibility_text: "Die KI ist das Werkzeug, Sie sind der Autor. Überprüfen Sie Fakten, schützen Sie sensible Daten und übernehmen Sie die volle Verantwortung für das Ergebnis.",
        val_respect_title: "Respekt",
        val_respect_text: "Höflichkeit prägt den Charakter – auch gegenüber Maschinen. Ein respektvoller Ton fördert nicht nur bessere Ergebnisse, sondern kultiviert auch unsere eigene Haltung.",

        comm_title: "Die Kunst des Promptings",
        comm_subtitle: "Gute Kommunikation führt zu guten Ergebnissen. Wie man 'in den Wald hineinruft', so schallt es auch aus dem neuronalen Netz zurück.",
        comm_precision_title: "Präzision vor Annahme",
        comm_precision_text: "Vermeiden Sie vage Anweisungen. Seien Sie spezifisch bezüglich Format, Länge, Stil und Zielgruppe. Kontext ist für eine KI alles.",
        comm_dialog_title: "Iterativer Dialog",
        comm_dialog_text: "Betrachten Sie die Interaktion als Gespräch, nicht als Befehlsausgabe. Verfeinern Sie die Antworten durch Nachfragen und konstruktives Feedback.",
        comm_politeness_title: "Höflichkeit zahlt sich aus",
        comm_politeness_text: "Studien deuten darauf hin, dass höfliche Prompts oft detailliertere Antworten liefern. 'Bitte' und 'Danke' kosten nichts und strukturieren die Anfrage positiv.",

        dos_title: "Dos & Don'ts",
        dos_subtitle: "Ein kurzer Leitfaden für den täglichen Umgang.",

        do_header: "✅ Bitte tun",
        do_1_title: "Fakten prüfen",
        do_1_text: "Halluzinationen sind möglich. Verifizieren Sie Daten, Zitate und Fakten immer extern.",
        do_2_title: "Privatsphäre wahren",
        do_2_text: "Löschen Sie Namen, Adressen und Geheimnisse aus Prompts. KI vergisst nichts so einfach.",
        do_3_title: "Urheberschaft klären",
        do_3_text: "Respektieren Sie Copyrights und geben Sie KI als Quelle an, wo es angebracht ist.",

        dont_header: "❌ Bitte vermeiden",
        dont_1_title: "Blind vertrauen",
        dont_1_text: "Übernehmen Sie niemals medizinische, rechtliche oder finanzielle Ratschläge ungeprüft.",
        dont_2_title: "Menschlichkeit vortäuschen",
        dont_2_text: "Geben Sie einen Bot nicht als Menschen aus. Das untergräbt das Vertrauen massiv.",
        dont_3_title: "Bias ignorieren",
        dont_3_text: "KI-Modelle können Vorurteile reproduzieren. Seien Sie kritisch gegenüber stereotypen Darstellungen.",

        footer_imprint: "Impressum",
        footer_privacy: "Datenschutz",
        footer_contact: "Kontakt",
        footer_copy: "&copy; 2025 KI-Netiquette Initative. Open Source on GitHub.",

        // Detailed Content (DE)
        detail_transparency_title: "Transparenz in der KI-Nutzung",
        detail_transparency_body: `
            <h3>Warum ist Transparenz wichtig?</h3>
            <p>In einer Welt, in der KI-generierte Inhalte von menschlichen kaum noch zu unterscheiden sind, wird Ehrlichkeit zur harten Währung. Transparenz schafft nicht nur Vertrauen beim Publikum, sondern verhindert auch Missverständnisse über die Fähigkeiten und Limiten des verwendeten Systems.</p>
            
            <h3>Best Practices</h3>
            <ul>
                <li><strong>Kennzeichnung:</strong> Markieren Sie Texte, Bilder oder Code, die maßgeblich von einer KI erstellt wurden (z.B. "Erstellt mit Unterstützung von XYZ").</li>
                <li><strong>Prozess-Offenlegung:</strong> Seien Sie ehrlich darüber, wie KI in Ihrem Workflow integriert ist. Dient sie der Idefindung, der Strukturierung oder der finalen Ausformulierung?</li>
                <li><strong>Keine Täuschung:</strong> Versuchen Sie niemals aktiv zu verschleiern, dass eine KI involviert war, besonders nicht in professionellen oder akademischen Kontexten.</li>
            </ul>
            <p>Transparenz ist kein Zeichen von Schwäche, sondern von Professionalität im Umgang mit modernen Werkzeugen.</p>`,

        detail_responsibility_title: "Verantwortungsvolle Autorschaft",
        detail_responsibility_body: `
            <h3>Der "Human in the Loop"</h3>
            <p>Egal wie fortschrittlich eine KI ist, die letzte Verantwortung liegt immer beim Menschen. KI-Systeme können halluzinieren, veraltete Informationen wiedergeben oder Bias reproduzieren. Sie sind Werkzeuge, keine Ersatz-Verantwortlichen.</p>
            
            <h3>Kritische Bereiche</h3>
            <p>Besondere Vorsicht ist geboten bei:</p>
            <ul>
                <li><strong>Faktencheck:</strong> Vertrauen Sie niemals Zahlen, Daten oder historischen Fakten ohne externe Überprüfung. KIs sind Sprachmodelle, keine Wissensdatenbanken.</li>
                <li><strong>Datenschutz:</strong> Geben Sie keine vertraulichen Firmendaten, Passwörter oder persönliche Daten Dritter in öffentliche KI-Interfaces ein. Diese Daten könnten zum Training verwendet werden.</li>
                <li><strong>Urheberrecht:</strong> Prüfen Sie, ob der generierte Output Rechte Dritter verletzen könnte, insbesondere bei Bild-KIs.</li>
            </ul>`,

        detail_respect_title: "Respektvoller Umgang mit KI",
        detail_respect_body: `
            <h3>Warum höflich zu einer Maschine sein?</h3>
            <p>Es mag kontraintuitiv klingen, "Bitte" und "Danke" zu einem Algorithmus zu sagen. Doch die Art, wie wir kommunizieren, formt unser eigenes Denken. Ein respektvoller Umgangston trainiert uns darin, generell kooperativ und konstruktiv zu formulieren.</p>
            
            <h3>Anthropomorphismus vermeiden</h3>
            <p>Respekt bedeutet nicht, der KI Gefühle zuzuschreiben oder sie zu vermenschlichen. Es geht um eine professionelle Interaktionskultur. Beschimpfungen oder aggressive Prompts führen oft zu schlechteren Ergebnissen, da Sicherheitsmechanismen (Guardrails) der Modelle greifen können oder das Modell in einen "defensiven" Modus wechselt.</p>
            <p>Betrachten Sie die KI als einen sehr fähigen, aber wortwörtlichen Assistenten.</p>`,

        detail_precision_title: "Präzision im Prompt Engineering",
        detail_precision_body: `
            <h3>Garbage In, Garbage Out</h3>
            <p>Die Qualität der Antwort hängt direkt von der Qualität Ihrer Anfrage ab. Vage Fragen führen zu generischen Antworten. Präzision spart Zeit, Rechenleistung und Nerven.</p>
            
            <h3>Die 4 W-Fragen des Promptings</h3>
            <ul>
                <li><strong>WER (Rolle):</strong> Geben Sie der KI eine Persona ("Handle als erfahrener Senior Developer" oder "Antworte als geduldiger Lehrer"). Dies setzt den Ton und das Vokabular.</li>
                <li><strong>WAS (Aufgabe):</strong> Beschreiben Sie die Aufgabe so konkret wie möglich ("Schreibe eine Python-Funktion zum Sortieren von Listen" statt "Mach was mit Python").</li>
                <li><strong>WIE (Format):</strong> Definieren Sie das gewünschte Ausgabeformat ("Verwende Type Hints, Google-Style Docstrings und gib das Ergebnis als Markdown-Codeblock aus").</li>
                <li><strong>FÜR WEN (Kontext):</strong> Nennen Sie die Zielgruppe ("Erkläre es für Programmieranfänger ohne Vorwissen").</li>
            </ul>`,

        detail_dialog_title: "Iterativer Dialog",
        detail_dialog_body: `
            <h3>Vom Monolog zum Dialog</h3>
            <p>Erwarten Sie nicht den perfekten „One-Shot“ Treffer. Die Stärke moderner LLMs (Large Language Models) liegt im Kontextverständnis über mehrere Interaktionsschritte hinweg.</p>
            
            <h3>Veredelungstechniken</h3>
            <ul>
                <li><strong>Chain of Thought:</strong> Bitten Sie die KI, "Schritt für Schritt" zu denken, um logische Fehler zu minimieren. Dies hilft besonders bei komplexen Schlussfolgerungen.</li>
                <li><strong>Feedback Loop:</strong> Korrigieren Sie Fehler konstruktiv. Sagen Sie: "Das war fast richtig, aber X ist falsch. Bitte korrigiere das, indem du Y berücksichtigst."</li>
                <li><strong>Refinement:</strong> Nutzen Sie den Chatverlauf, um Details zu verfeinern ("Kürze den Text jetzt um 20%" oder "Mache den Tonfall professioneller"), statt immer wieder von vorne zu beginnen.</li>
            </ul>`,

        detail_politeness_title: "Macht Höflichkeit einen Unterschied?",
        detail_politeness_body: `
            <h3>Die Datenbasis der Höflichkeit</h3>
            <p>Sprachmodelle wurden mit riesigen Mengen an menschlicher Kommunikation trainiert. In diesen Trainingsdaten korreliert eine höfliche, strukturierte und grammatikalisch korrekte Sprache oft mit qualitativ hochwertigen Inhalten (Fachbücher, Papers, seriöse Artikel).</p>
            <p>Wenn Sie also höflich und artikuliert fragen, adressieren Sie - vereinfacht gesagt - jene Teile des neuronalen Netzes, die mit diesem hochwertigen Wissen verknüpft sind.</p>
            
            <h3>Positive Verstärkung</h3>
            <p>Studien haben gezeigt, dass emotionale Prompts ("Das ist sehr wichtig für meine Karriere") oder Höflichkeit die Sorgfalt der Modelle (z.B. bei der Code-Generierung) messbar verbessern können. Es lohnt sich also, nett zu sein!</p>`
    },
    en: {
        nav_values: "Core Values",
        nav_communication: "Communication",
        nav_dos_donts: "Dos & Don'ts",
        btn_back: "Back to Overview",

        hero_subtitle: "Welcome to the Future",
        hero_title: "Etiquette for the<br>Age of AI",
        hero_text: "Artificial Intelligence is changing how we work and communicate. But how do we interact respectfully, efficiently, and responsibly with digital minds?",
        hero_cta: "Discover Rules",

        values_title: "The 3 Pillars of AI Interaction",
        val_transparency_title: "Transparency",
        val_transparency_text: "Openness is key. Label AI-generated content and be honest about tool usage. Trust is built on clarity.",
        val_responsibility_title: "Responsibility",
        val_responsibility_text: "AI is the tool, you are the author. Verify facts, protect sensitive data, and take full responsibility for the results.",
        val_respect_title: "Respect",
        val_respect_text: "Politeness shapes character – even towards machines. A respectful tone not only yields better results but also cultivates our own mindset.",

        comm_title: "The Art of Prompting",
        comm_subtitle: "Good communication leads to good results. Treat the neural network as you would like to be treated.",
        comm_precision_title: "Precision over Assumption",
        comm_precision_text: "Avoid vague instructions. Be specific about format, length, style, and audience. Context is everything to an AI.",
        comm_dialog_title: "Iterative Dialogue",
        comm_dialog_text: "View interaction as a conversation, not command output. Refine answers through follow-up questions and constructive feedback.",
        comm_politeness_title: "Politeness Pays Off",
        comm_politeness_text: "Studies suggest civilized prompts often yield more detailed answers. 'Please' and 'Thank you' cost nothing and structure requests positively.",

        dos_title: "Dos & Don'ts",
        dos_subtitle: "A quick guide for daily interaction.",

        do_header: "✅ Do's",
        do_1_title: "Fact Check",
        do_1_text: "Hallucinations happen. Always verify data, quotes, and facts externally.",
        do_2_title: "Protect Privacy",
        do_2_text: "Remove names, addresses, and secrets from prompts. AI doesn't forget easily.",
        do_3_title: "Clarify Authorship",
        do_3_text: "Respect copyrights and cite AI as a source where appropriate.",

        dont_header: "❌ Don'ts",
        dont_1_title: "Blind Trust",
        dont_1_text: "Never accept medical, legal, or financial advice without verification.",
        dont_2_title: "Fake Humanity",
        dont_2_text: "Don't present a bot as a human. This massively undermines trust.",
        dont_3_title: "Ignore Bias",
        dont_3_text: "AI models can reproduce biases. Be critical of stereotypical representations.",

        footer_imprint: "Imprint",
        footer_privacy: "Privacy",
        footer_contact: "Contact",
        footer_copy: "&copy; 2025 AI Netiquette Initiative. Open Source on GitHub.",

        // Detailed Content (EN)
        detail_transparency_title: "Transparency in AI Usage",
        detail_transparency_body: `
            <h3>Why Transparency Matters</h3>
            <p>In a world where AI-generated content is becoming indistinguishable from human work, honesty becomes a hard currency. Transparency not only builds trust with your audience but also prevents misunderstandings about the capabilities and limitations of the system used.</p>
            
            <h3>Best Practices</h3>
            <ul>
                <li><strong>Labeling:</strong> Clearly mark text, images, or code that were significantly created by AI (e.g., "Created with assistance from XYZ").</li>
                <li><strong>Process Disclosure:</strong> Be honest about how AI is integrated into your workflow. Is it used for ideation, structuring, or final drafting?</li>
                <li><strong>No Deception:</strong> Never actively try to hide that AI was involved, especially in professional or academic contexts.</li>
            </ul>
            <p>Transparency is not a sign of weakness, but of professionalism in handling modern tools.</p>`,

        detail_responsibility_title: "Responsible Authorship",
        detail_responsibility_body: `
            <h3>The Human in the Loop</h3>
            <p>No matter how advanced an AI is, the final responsibility always lies with the human. AI systems can hallucinate, provide outdated information, or reproduce bias. They are tools, not substitute decision-makers.</p>
            
            <h3>Critical Areas</h3>
            <p>Exercise particular caution regarding:</p>
            <ul>
                <li><strong>Fact-Checking:</strong> Never trust numbers, dates, or historical facts without external verification. AI models are language predictors, not knowledge bases.</li>
                <li><strong>Data Privacy:</strong> Do not enter confidential company data, passwords, or personal third-party data into public AI interfaces. This data could be used for training.</li>
                <li><strong>Copyright:</strong> Check if the generated output might infringe on third-party rights, especially with image AIs.</li>
            </ul>`,

        detail_respect_title: "Respectful Interaction with AI",
        detail_respect_body: `
            <h3>Why be polite to a machine?</h3>
            <p>It may sound counterintuitive to say "please" and "thank you" to an algorithm. However, the way we communicate shapes our own thinking. A respectful tone trains us to formulate cooperatively and constructively in general.</p>
            
            <h3>Avoiding Anthropomorphism</h3>
            <p>Respect does not mean attributing feelings to the AI or anthropomorphizing it. It is about a professional culture of interaction. Insults or aggressive prompts often lead to poorer results as model safety mechanisms (guardrails) may trigger or the model shifts into a "defensive" mode.</p>
            <p>Treat the AI as a highly capable but literal-minded assistant.</p>`,

        detail_precision_title: "Precision in Prompt Engineering",
        detail_precision_body: `
            <h3>Garbage In, Garbage Out</h3>
            <p>The quality of the answer depends directly on the quality of your request. Vague questions lead to generic answers. Precision saves time, computing power, and nerves.</p>
            
            <h3>The 4 W's of Prompting</h3>
            <ul>
                <li><strong>WHO (Role):</strong> Give the AI a persona ("Act as an experienced Senior Developer" or "Answer as a patient teacher"). This sets the tone and vocabulary.</li>
                <li><strong>WHAT (Task):</strong> Describe the task specifically ("Write a Python function to sort lists" instead of "Do something with Python").</li>
                <li><strong>HOW (Format):</strong> Define the desired output format ("Use Type Hints, Google-Style Docstrings, and output as a markdown code block").</li>
                <li><strong>FOR WHOM (Context):</strong> Name the target audience ("Explain it for programming beginners with no prior knowledge").</li>
            </ul>`,

        detail_dialog_title: "Iterative Dialogue",
        detail_dialog_body: `
            <h3>From Monologue to Dialogue</h3>
            <p>Do not expect the perfect "one-shot" hit. The strength of modern LLMs (Large Language Models) lies in understanding context over multiple interaction steps.</p>
            
            <h3>Refining Techniques</h3>
            <ul>
                <li><strong>Chain of Thought:</strong> Ask the AI to think "step by step" to minimize logical errors. This helps especially with complex reasoning.</li>
                <li><strong>Feedback Loop:</strong> Correct errors constructively. Say: "That was almost right, but X is wrong. Please fix that by considering Y."</li>
                <li><strong>Refinement:</strong> Use chat history to refine details ("Shorten the text by 20%" or "Make the tone more professional") instead of starting over from scratch.</li>
            </ul>`,

        detail_politeness_title: "Does Politeness Make a Difference?",
        detail_politeness_body: `
            <h3>The Data Basis of Politeness</h3>
            <p>Language models were trained on vast amounts of human communication. In this training data, polite, structured, and grammatically correct language often correlates with high-quality content (textbooks, papers, serious articles).</p>
            <p>When you ask politely and articulately, you are statistically addressing parts of the neural network linked to higher-quality knowledge.</p>
            
            <h3>Positive Reinforcement</h3>
            <p>Studies have shown that emotional prompts ("This is very important for my career") or politeness can measurably improve the diligence of models (e.g., in code generation). So it pays to be nice!</p>`
    },
    fr: {
        nav_values: "Valeurs Fondamentales",
        nav_communication: "Communication",
        nav_dos_donts: "À Faire & À Éviter",
        btn_back: "Retour à l'aperçu",

        hero_subtitle: "Bienvenue dans le Futur",
        hero_title: "Le Savoir-Vivre à<br>l'Ère de l'IA",
        hero_text: "L'intelligence artificielle change notre façon de travailler. Comment interagir respectueusement, efficacement et de manière responsable avec les esprits numériques ?",
        hero_cta: "Découvrir les Règles",

        values_title: "Les 3 Piliers de l'Interaction IA",
        val_transparency_title: "Transparence",
        val_transparency_text: "L'ouverture est clé. Identifiez les contenus générés par l'IA et soyez honnête sur l'utilisation des outils. La confiance naît de la clarté.",
        val_responsibility_title: "Responsabilité",
        val_responsibility_text: "L'IA est l'outil, vous êtes l'auteur. Vérifiez les faits, protégez les données sensibles et assumez la pleine responsabilité des résultats.",
        val_respect_title: "Respect",
        val_respect_text: "La politesse façonne le caractère – même envers les machines. Un ton respectueux favorise de meilleurs résultats et cultive notre propre attitude.",

        comm_title: "L'Art du Prompting",
        comm_subtitle: "Une bonne communication mène à de bons résultats. Traitez le réseau neuronal comme vous aimeriez être traité.",
        comm_precision_title: "Précision avant Supposition",
        comm_precision_text: "Évitez les instructions vagues. Soyez précis sur le format, la longueur, le style et le public. Le contexte est tout pour une IA.",
        comm_dialog_title: "Dialogue Itératif",
        comm_dialog_text: "Voyez l'interaction comme une conversation. Affinez les réponses par des questions de suivi et un feedback constructif.",
        comm_politeness_title: "La Politesse Paye",
        comm_politeness_text: "Les études suggèrent que les prompts polis donnent souvent des réponses plus détaillées. 'S'il vous plaît' et 'Merci' ne coûtent rien.",

        dos_title: "À Faire & À Éviter",
        dos_subtitle: "Un guide rapide pour l'interaction quotidienne.",

        do_header: "✅ À Faire",
        do_1_title: "Vérifier les Faits",
        do_1_text: "Les hallucinations existent. Vérifiez toujours les données, citations et faits.",
        do_2_title: "Protéger la Vie Privée",
        do_2_text: "Supprimez noms, adresses et secrets des prompts. L'IA n'oublie pas facilement.",
        do_3_title: "Clarifier la Paternité",
        do_3_text: "Respectez les droits d'auteur et citez l'IA comme source lorsque c'est approprié.",

        dont_header: "❌ À Éviter",
        dont_1_title: "Confiance Aveugle",
        dont_1_text: "N'acceptez jamais de conseils médicaux, juridiques ou financiers sans vérification.",
        dont_2_title: "Fausses Apparences",
        dont_2_text: "Ne présentez pas un bot comme un humain. Cela mine considérablement la confiance.",
        dont_3_title: "Ignorer les Biais",
        dont_3_text: "Les modèles d'IA peuvent reproduire des préjugés. Soyez critique envers les stéréotypes.",

        footer_imprint: "Mentions Légales",
        footer_privacy: "Confidentialité",
        footer_contact: "Contact",
        footer_copy: "&copy; 2025 Initiative Netiquette IA. Open Source sur GitHub.",

        // Detailed Content (FR)
        detail_transparency_title: "La Transparence dans l'Usage de l'IA",
        detail_transparency_body: `
            <h3>Pourquoi la transparence est importante</h3>
            <p>Dans un monde où le contenu généré par l'IA devient indiscernable de l'œuvre humaine, l'honnêteté devient une monnaie forte. La transparence renforce non seulement la confiance avec votre public, mais évite également les malentendus sur les capacités et les limites du système utilisé.</p>
            
            <h3>Meilleures Pratiques</h3>
            <ul>
                <li><strong>Étiquetage :</strong> Marquez clairement les textes, images ou codes créés de manière significative par l'IA (par exemple, "Créé avec l'aide de XYZ").</li>
                <li><strong>Divulgation du Processus :</strong> Soyez honnête sur la façon dont l'IA est intégrée dans votre flux de travail. Est-ce pour l'idéation, la structuration ou la rédaction finale ?</li>
                <li><strong>Pas de Tromperie :</strong> N'essayez jamais de cacher activement l'implication de l'IA, surtout dans des contextes professionnels ou académiques.</li>
            </ul>
            <p>La transparence n'est pas un signe de faiblesse, mais de professionnalisme dans l'utilisation d'outils modernes.</p>`,

        detail_responsibility_title: "Paternité Responsable",
        detail_responsibility_body: `
            <h3>L'Humain dans la Boucle</h3>
            <p>Peu importe le niveau d'avancement d'une IA, la responsabilité finale incombe toujours à l'humain. Les systèmes d'IA peuvent halluciner, fournir des informations obsolètes ou reproduire des biais. Ce sont des outils, pas des décideurs de remplacement.</p>
            
            <h3>Zones Critiques</h3>
            <p>Faites preuve d'une prudence particulière concernant :</p>
            <ul>
                <li><strong>Vérification des Faits :</strong> Ne faites jamais confiance aux chiffres, dates ou faits historiques sans vérification externe. Les modèles sont des prédicteurs linguistiques, pas des bases de connaissances.</li>
                <li><strong>Confidentialité des Données :</strong> N'entrez pas de données confidentielles d'entreprise, de mots de passe ou de données personnelles dans des interfaces d'IA publiques. Ces données pourraient être utilisées pour l'entraînement.</li>
                <li><strong>Droits d'Auteur :</strong> Vérifiez si le résultat généré pourrait enfreindre les droits de tiers, en particulier avec les IA d'images.</li>
            </ul>`,

        detail_respect_title: "Interaction Respectueuse avec l'IA",
        detail_respect_body: `
            <h3>Pourquoi être poli avec une machine ?</h3>
            <p>Cela peut sembler contre-intuitif de dire "s'il vous plaît" et "merci" à un algorithme. Cependant, la façon dont nous communiquons façonne notre propre pensée. Un ton respectueux nous entraîne à formuler de manière coopérative et constructive en général.</p>
            
            <h3>Éviter l'Anthropomorphisme</h3>
            <p>Le respect ne signifie pas attribuer des sentiments à l'IA ou l'anthropomorphiser. Il s'agit d'une culture professionnelle d'interaction. Les insultes ou les prompts agressifs conduisent souvent à de moins bons résultats car les mécanismes de sécurité du modèle (guardrails) peuvent se déclencher ou le modèle passe en mode "défensif".</p>
            <p>Traitez l'IA comme un assistant très capable mais à l'esprit littéral.</p>`,

        detail_precision_title: "Précision dans le Prompt Engineering",
        detail_precision_body: `
            <h3>Garbage In, Garbage Out</h3>
            <p>La qualité de la réponse dépend directement de la qualité de votre demande. Les questions vagues mènent à des réponses génériques. La précision économise du temps, de la puissance de calcul et des nerfs.</p>
            
            <h3>Les 4 Questions du Prompting</h3>
            <ul>
                <li><strong>QUI (Rôle) :</strong> Donnez un personnage à l'IA ("Agis comme un développeur senior expérimenté" ou "Réponds comme un enseignant patient"). Cela définit le ton et le vocabulaire.</li>
                <li><strong>QUOI (Tâche) :</strong> Décrivez la tâche spécifiquement ("Écris une fonction Python pour trier des listes" au lieu de "Fais quelque chose avec Python").</li>
                <li><strong>COMMENT (Format) :</strong> Définissez le format de sortie souhaité ("Utilise des Type Hints, des Docstrings style Google et donne le résultat sous forme de bloc de code markdown").</li>
                <li><strong>POUR QUI (Contexte) :</strong> Nommez le public cible ("Explique-le pour des débutants en programmation sans connaissances préalables").</li>
            </ul>`,

        detail_dialog_title: "Dialogue Itératif",
        detail_dialog_body: `
            <h3>Du Monologue au Dialogue</h3>
            <p>N'attendez pas le coup parfait "one-shot". La force des LLM (Large Language Models) modernes réside dans la compréhension du contexte sur plusieurs étapes d'interaction.</p>
            
            <h3>Techniques d'Affinement</h3>
            <ul>
                <li><strong>Chain of Thought :</strong> Demandez à l'IA de penser "étape par étape" pour minimiser les erreurs logiques. Cela aide surtout pour les raisonnements complexes.</li>
                <li><strong>Boucle de Rétroaction :</strong> Corrigez les erreurs de manière constructive. Dites : "C'était presque ça, mais X est faux. Corrige cela en prenant Y en compte."</li>
                <li><strong>Affinement :</strong> Utilisez l'historique du chat pour affiner les détails ("Raccourcis le texte de 20%" ou "Rends le ton plus professionnel") au lieu de recommencer à zéro.</li>
            </ul>`,

        detail_politeness_title: "La Politesse Fait-elle une Différence ?",
        detail_politeness_body: `
            <h3>La Base de Données de la Politesse</h3>
            <p>Les modèles de langage ont été entraînés sur de vastes quantités de communication humaine. Dans ces données d'entraînement, un langage poli, structuré et grammaticalement correct est souvent corrélé avec du contenu de haute qualité (manuels, articles scientifiques, articles sérieux).</p>
            <p>Lorsque vous demandez poliment et de manière articulée, vous vous adressez statistiquement - pour simplifier - aux parties du réseau neuronal liées à ces connaissances de haute qualité.</p>
            
            <h3>Renforcement Positif</h3>
            <p>Des études ont montré que les prompts émotionnels ("C'est très important pour ma carrière") ou la politesse peuvent améliorer de manière mesurable la diligence des modèles (par exemple, dans la génération de code). Cela vaut donc la peine d'être gentil !</p>`
    }
};

function setLanguage(lang) {
    if (!translations[lang]) return;

    // Save preference
    localStorage.setItem('selectedLang', lang);
    document.documentElement.lang = lang;

    // Update Text Content on normal pages
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (translations[lang][key].includes('<')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // DETAIL PAGE LOGIC
    // If we are on details.html, we need to re-render the dynamic content when language changes
    const detailTitle = document.getElementById('detail-title');
    const detailBody = document.getElementById('detail-body');
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic');

    if (detailTitle && detailBody && topic) {
        const titleKey = `detail_${topic}_title`;
        const bodyKey = `detail_${topic}_body`;

        if (translations[lang][titleKey]) {
            detailTitle.innerHTML = translations[lang][titleKey];
            detailBody.innerHTML = translations[lang][bodyKey];
        } else {
            console.warn(`Translation missing for topic: ${topic} in language: ${lang}`);
        }

        // Update URL to reflect language (optional but nice)
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('lang', lang);
        window.history.replaceState({}, '', newUrl);
    }

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Fade-up animation for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all cards to animate which exist
    const cards = document.querySelectorAll('.glass-card, .list-item');
    if (cards.length > 0) {
        cards.forEach((card, index) => {
            // Set initial state
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            card.style.transitionDelay = `${(index % 3) * 100}ms`;

            observer.observe(card);
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Init Language
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    const savedLang = localStorage.getItem('selectedLang');

    // Priority: URL Param > LocalStorage > Default (de)
    const initialLang = (langParam && translations[langParam]) ? langParam : (savedLang || 'de');

    setLanguage(initialLang);
});
