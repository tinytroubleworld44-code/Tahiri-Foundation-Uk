import { Article } from '../types';

export const ARTICLES: Article[] = [
  // ==========================================
  // 1. FOUNDATIONS OF SUFISM
  // ==========================================
  {
    id: 'preface',
    title: 'Preface',
    category: 'Foundations of Sufism',
    categorySlug: 'foundations-of-sufism',
    subtitle: 'An introduction to the spiritual discourses of The Splendid Abode of the Friend',
    arabicTitle: 'مُقَدِّمَةُ جَلْوَةِ گَاهِ دُوسْت',
    readTime: '6 min read',
    summary: 'The origin, spiritual necessity, and purpose of recording the sacred counsels of the Naqshbandi Mujaddidi masters for the spiritual benefit of sincere seekers.',
    sections: [
      {
        heading: 'In the Name of Allah, the Most Compassionate, the Most Merciful',
        arabicText: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ • الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ وَالصَّلَاةُ وَالسَّلَامُ عَلَى سَيِّدِ الْأَنْبِيَاءِ وَالْمُرْسَلِينَ',
        translation: 'In the name of Allah, the Most Gracious, the Most Merciful. All praise belongs to Allah, Lord of all the worlds, and peace and blessings be upon the Master of the Prophets and Messengers.',
        paragraphs: [
          'The human soul has been created with an inherent yearning for the Divine Presence. Just as the physical body requires sustenance, medicine, and hygiene to maintain health, the inner heart (Qalb) necessitates continuous spiritual nourishment and purification from the destructive ailments of pride, ostentation, malice, and heedlessness.',
          'The treatise "The Splendid Abode of the Friend" (جلوہ گاہِ دوست) represents an authentic compilation of discourses, spiritual precepts, and letters of the venerable masters of the Naqshbandi Mujaddidi Tahiri path. Its sole objective is to guide the earnest traveler (Salik) towards sincere devotion, steadfast adherence to the Sunnah, and intimate communion with Allah Almighty.'
        ],
        keyQuote: 'Tasawwuf is neither mere outward renunciation nor philosophical speculation; it is the living realization of the Prophetic station of Ihsan.'
      },
      {
        heading: 'Preserving the Prophetic Heritage',
        paragraphs: [
          'In an age characterized by materialism, distraction, and superficiality, the need for an authentic spiritual compass is more pressing than ever. True Tasawwuf as taught by the Naqshbandi masters is not an addition to the religion, but the spiritual core of the religion itself—illuminating the Shari’ah from within.',
          'May Allah Almighty grant every reader the sincerity of intention (Ikhlas), grant us the blessings of the righteous masters, and allow these teachings to serve as a luminous lamp upon the path of spiritual return.'
        ]
      }
    ],
    relatedArticleIds: ['need-for-sufism', 'need-for-murshid-kamil', 'superiority-of-naqshbandi-way']
  },
  {
    id: 'need-for-sufism',
    title: 'The Need for Sufism (Tassawuf)',
    category: 'Foundations of Sufism',
    categorySlug: 'foundations-of-sufism',
    subtitle: 'Why the purification of the heart is an absolute obligation upon every Muslim',
    arabicTitle: 'حَاجَةُ الْإِنْسَانِ إِلَى التَّصَوُّفِ',
    readTime: '8 min read',
    summary: 'Exploring the Qur’anic and prophetic foundations of Tasawwuf as the science of Ihsan, spiritual purification (Tazkiyah), and inner righteousness.',
    sections: [
      {
        heading: 'The Definition of Tasawwuf in Light of the Sunnah',
        arabicText: 'قَدْ أَفْلَحَ مَن زَكَّاهَا • وَقَدْ خَابَ مَن دَسَّاهَا',
        translation: 'He has succeeded who purifies it, and he has failed who corrupts it. (Surah Ash-Shams, 91:9-10)',
        paragraphs: [
          'The science of Sufism (Tasawwuf), also known classically as Tazkiyah (purification of the self) or Ihsan (spiritual excellence), is the discipline concerned with cleansing the heart of moral maladies such as arrogance (Kibr), jealousy (Hasad), ostentation (Riya), and love of the worldly life (Hubb ad-Dunya).',
          'When the Angel Jibril (A.S.) asked the Holy Prophet (S.A.W.) about Ihsan, the Prophet replied: "It is to worship Allah as though you see Him, and if you do not see Him, then know that He sees you." Achieving this perpetual awareness of the Divine gaze is the ultimate objective of the Sufi path.'
        ],
        bulletPoints: [
          'The body obeys Islamic Law (Shari’ah) through outward actions.',
          'The intellect understands Divine Wisdom through sacred knowledge.',
          'The heart experiences the Divine Reality through Tasawwuf and inward sincerity.'
        ]
      },
      {
        heading: 'The Inner Reality and Outward Conformity',
        paragraphs: [
          'Imam Malik (Rah.) famously declared: "Whoever studies jurisprudence without Sufism becomes corrupt, and whoever practices Sufism without jurisprudence becomes a heretic. But whoever combines the two achieves true realization."',
          'The Naqshbandi Mujaddidi order emphasizes that spiritual heights can never be separated from scrupulous observance of the sacred law. Tasawwuf is the spirit (Ruh) of Shari’ah, bringing warm life to outward religious forms.'
        ],
        keyQuote: 'Without inner purification, prayer risks becoming mere physical motion and fasting mere hunger. Tasawwuf restores life to worship.'
      }
    ],
    relatedArticleIds: ['preface', 'need-for-murshid-kamil', 'signs-of-a-perfect-guide']
  },
  {
    id: 'need-for-murshid-kamil',
    title: 'The Need for a Perfect Guide (Murshid Kamil)',
    category: 'Foundations of Sufism',
    categorySlug: 'foundations-of-sufism',
    subtitle: 'Why an experienced spiritual physician is essential for traversing the inner path',
    arabicTitle: 'ضَرُورَةُ الْمُرْشِدِ الْكَامِلِ',
    readTime: '7 min read',
    summary: 'The necessity of taking guidance from an authentic Sheikh whose heart is connected with the prophetic lineage to cure the subtle deceits of the ego.',
    sections: [
      {
        heading: 'The Analogy of the Spiritual Physician',
        paragraphs: [
          'A person suffering from a grave physical illness does not attempt to cure themselves merely by reading medical textbooks; they seek out a qualified, licensed physician who can accurately diagnose the root disease and prescribe appropriate remedies.',
          'In the spiritual realm, the diseases of the soul—hidden arrogance, latent malice, subtle vanity—are far more deceptive. The carnal ego (Nafs) routinely deceives the seeker into believing they are righteous. Only an enlightened spiritual guide (Murshid Kamil) who has traversed the perilous valleys of the soul can detect these hidden snares and guide the seeker safely.'
        ]
      },
      {
        heading: 'Qur’anic Injunction to Accompany the Truthful',
        arabicText: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللّٰهَ وَكُونُوا مَعَ الصَّادِقِينَ',
        translation: 'O you who have believed, be mindful of Allah and remain in the company of the truthful. (Surah At-Tawbah, 9:119)',
        paragraphs: [
          'The Holy Qur’an commands believers not only to fear Allah, but to remain in the constant companionship of the "Sadiqin" (the truthful ones). The Murshid Kamil is one whose very presence instills remembrance of Allah, whose words impart spiritual wisdom, and whose spiritual focus (Tawajjuh) cleanses the hearts of his companions.'
        ],
        keyQuote: 'The Sheikh does not stand between the servant and Allah; rather, he is the guide who removes the obstacles standing between the servant and his Lord.'
      }
    ],
    relatedArticleIds: ['signs-of-a-perfect-guide', 'key-signs-of-a-spiritual-guide', 'pledge-of-allegiance']
  },
  {
    id: 'signs-of-a-perfect-guide',
    title: 'The Signs of a Perfect Guide (Murshid Kamil)',
    category: 'Foundations of Sufism',
    categorySlug: 'foundations-of-sufism',
    subtitle: 'Authentic criteria established by the classical masters to distinguish true guides from pretenders',
    arabicTitle: 'عَلَامَاتُ الْمُرْشِدِ الْكَامِلِ الْمُكَمِّلِ',
    readTime: '9 min read',
    summary: 'Comprehensive signs and qualities that distinguish an authentic master of spiritual realization from those who falsely claim authority.',
    sections: [
      {
        heading: 'Crucial Distinctions in Spiritual Authority',
        paragraphs: [
          'Due to the sacred importance of the Murshid, our masters have set forth strict, unmistakable criteria to verify a guide’s authenticity. True masters do not boast, do not seek worldly riches, and do not perform displays for public entertainment.',
          'Imam Rabbani Mujaddid Alf Thani (Rah.) states that the greatest miracle (Karamah) is not walking on water or flying in the air, but steadfast adherence to the Sunnah of the Prophet Muhammad (S.A.W.) under every circumstance.'
        ],
        bulletPoints: [
          'Sound knowledge of the Islamic faith and adherence to the creed of Ahl al-Sunnah wa’l-Jamā‘ah.',
          'Steadfast practice and love of the Sunnah in outward dress, manners, speech, and worship.',
          'Complete detachment from worldly wealth, political prestige, and praise.',
          'An unbroken, verified chain of spiritual authorization (Ijazah) tracing back to the Holy Prophet (S.A.W.).',
          'The ability of their company to inspire fear of Allah and genuine distaste for sin in the hearts of visitors.'
        ]
      }
    ],
    relatedArticleIds: ['key-signs-of-a-spiritual-guide', 'companionship-of-a-sheikh', 'superiority-of-naqshbandi-way']
  },
  {
    id: 'key-signs-of-a-spiritual-guide',
    title: 'Key Signs of a Perfect Spiritual Guide (Sheikh)',
    category: 'Foundations of Sufism',
    categorySlug: 'foundations-of-sufism',
    subtitle: 'A focused summary of the vital markers of true spiritual guardianship',
    arabicTitle: 'أَبْرَزُ عَلَامَاتِ الشَّيْخِ الْمُرْشِدِ',
    readTime: '6 min read',
    summary: 'A direct synthesis of the core traits of an authorized Sheikh: piety, modesty, wisdom, and transformative spiritual presence.',
    sections: [
      {
        heading: 'The Test of Spiritual Fruit',
        paragraphs: [
          'The authentic Sheikh is identified by the spiritual transformation observed in his disciples. Under his guidance, thieves repent, the heedless awaken to Tahajjud prayers, arrogance softens into humility, and family ties are restored.',
          'He demands nothing for himself. When you sit in his gathering, you are not impressed by him, but humbled before the majesty of Allah. His heart acts as a polished mirror receiving and reflecting Divine Faiz.'
        ],
        keyQuote: 'The true Sheikh is he whose sight reminds you of Allah, whose speech increases your knowledge, and whose action reminds you of the Hereafter.'
      }
    ],
    relatedArticleIds: ['signs-of-a-perfect-guide', 'pledge-of-allegiance', 'teachings-of-naqshbandi-sheikhs']
  },
  {
    id: 'superiority-of-naqshbandi-way',
    title: 'The Superiority of the Naqshbandī Way',
    category: 'Foundations of Sufism',
    categorySlug: 'foundations-of-sufism',
    subtitle: 'Why the Siddiqi path is described by scholars as the most direct and safest spiritual order',
    arabicTitle: 'مَزَايَا الطَّرِيقَةِ النَّقْشَبَنْدِيَّةِ الْعَلِيَّةِ',
    readTime: '9 min read',
    summary: 'Distinctive characteristics of the Naqshbandi path: silent remembrance, beginning where other paths end, adherence to Sunnah, and companionship.',
    sections: [
      {
        heading: 'End In The Beginning (Indirāj al-Nihāyah fī al-Bidāyah)',
        paragraphs: [
          'One of the most profound maxims of the Naqshbandi tariqah is that "Our end is folded into our beginning." While many spiritual paths begin with arduous physical mortifications and solitary retreats for decades before granting spiritual openings, the Naqshbandi master immediately connects the seeker’s heart to the Divine Light through spiritual focus (Tawajjuh).',
          'The seeker tastes the sweetness of divine absorption (Jadhbah) from the very start, empowering them to gladly fulfill the requirements of Shari’ah with natural joy and ease.'
        ]
      },
      {
        heading: 'The Way of the Companions (Sahabah)',
        paragraphs: [
          'The Naqshbandi order traces its primary chain directly to Hadhrat Abu Bakr as-Siddiq (R.A.). The Companions did not engage in vocal drum-beating, strange dances, or withdrawal from society. They engaged in silent remembrance while actively leading righteous, productive lives as fathers, scholars, traders, and guardians of truth.',
          'Therefore, the Naqshbandi path is the closest in method and spirit to the noble Companions of the Messenger of Allah (S.A.W.).'
        ],
        keyQuote: 'Our path is companionship (Suhbah), and good lies in the gathering.'
      }
    ],
    relatedArticleIds: ['teachings-of-naqshbandi-sheikhs', 'zikr-e-qalbi', 'khalwat-dar-anjuman']
  },
  {
    id: 'teachings-of-naqshbandi-sheikhs',
    title: 'Teachings of the Naqshbandi Sheikhs',
    category: 'Foundations of Sufism',
    categorySlug: 'foundations-of-sufism',
    subtitle: 'Core counsels of the venerable masters regarding worship, livelihood, and conduct',
    arabicTitle: 'تَعَالِيمُ مَشَايِخِ النَّقْشَبَنْدِيَّةِ',
    readTime: '8 min read',
    summary: 'The eternal advice of the masters: pure intention, lawful earning (Halal Rizq), preservation of time, and continuous internal remembrance.',
    sections: [
      {
        heading: 'Foundational Pillars of Conduct',
        paragraphs: [
          'The masters of the Naqshbandi Mujaddidi Tahiri path have summarized the essential lifestyle of the seeker into four cardinal counsels:',
          '1. Absolute scrupulousness regarding lawful food: The food one consumes directly affects the spiritual inclinations of the heart. Contaminated or doubtful earnings harden the heart and render prayer dry.',
          '2. Guarding the tongue and senses: Avoiding backbiting, slander, argumentation, and sinful gazes, which extinguish the light of remembrance.',
          '3. Diligence in obligatory acts before voluntary acts: Never prioritizing optional spiritual practices while neglecting compulsory obligations or family duties.',
          '4. Constant internal connection with the Murshid and continuous silent repetition of the Divine Name.'
        ]
      }
    ],
    relatedArticleIds: ['pledge-of-allegiance', 'companionship-of-a-sheikh', 'method-of-remembering-allah']
  },
  {
    id: 'pledge-of-allegiance',
    title: 'Pledge of Allegiance (Bay’ah)',
    category: 'Foundations of Sufism',
    categorySlug: 'foundations-of-sufism',
    subtitle: 'The authentic Prophetic precedent and spiritual significance of taking the hand of guidance',
    arabicTitle: 'الْبَيْعَةُ وَمَكَانَتُهَا فِي السُّنَّةِ النَّبَوِيَّةِ',
    readTime: '7 min read',
    summary: 'The scriptural evidence for Bay’ah in the Qur’an and Hadith as a sacred covenant of repentance, obedience to Allah, and sincere commitment to the Sunnah.',
    sections: [
      {
        heading: 'Scriptural Precedent for Bay’ah',
        arabicText: 'إِنَّ الَّذِينَ يُبَايِعُونَكَ إِنَّمَا يُبَايِعُونَ اللّٰهَ يَدُ اللّٰهِ فَوْقَ أَيْدِيهِمْ',
        translation: 'Indeed, those who pledge allegiance to you are only pledging allegiance to Allah; the Hand of Allah is over their hands. (Surah Al-Fath, 48:10)',
        paragraphs: [
          'The tradition of Bay’ah is established by mass-transmitted prophetic traditions. The noble Companions pledged allegiance to the Messenger of Allah (S.A.W.) not only for governance, but for repentance, adherence to Islam, endurance through trials, and abstinence from sins.',
          'When a seeker places their hand in the hand of an authorized Murshid Kamil, they are entering a covenant of sincere repentance before Allah, promising to renounce wrongdoing and dedicate their life to piety.'
        ]
      }
    ],
    relatedArticleIds: ['companionship-of-a-sheikh', 'need-for-murshid-kamil', 'connection-with-sheikh']
  },
  {
    id: 'companionship-of-a-sheikh',
    title: 'The Companionship of a Sheikh',
    category: 'Foundations of Sufism',
    categorySlug: 'foundations-of-sufism',
    subtitle: 'How the physical and spiritual presence of a righteous master transforms the seeker',
    arabicTitle: 'صُحْبَةُ الشَّيْخِ وَآثَارُهَا الرُّوحِيَّةُ',
    readTime: '8 min read',
    summary: 'The transformative power of Suhbah (companionship). Spiritual illumination transfers heart-to-heart more effectively than intellectual discourse alone.',
    sections: [
      {
        heading: 'The Power of Spiritual Transmission (Suhbah)',
        paragraphs: [
          'Shah Bahauddin Naqshband (Rah.) famously declared: "Tariqatuna as-Suhbah wa’l-khayru fi’l-jam’iyyah" (Our path is companionship, and all goodness resides in the spiritual assembly).',
          'Books can impart information, but they cannot transmit spiritual state (Hal). When iron stays near a blazing fire, it takes on the heat and glow of the fire. In the same way, the cold, heedless heart of the seeker warms and illuminates when sitting in the presence of an enlightened saint.'
        ],
        keyQuote: 'One moment spent in the company of a saint is superior to a hundred years of insincere solitary worship.'
      }
    ],
    relatedArticleIds: ['teachings-of-naqshbandi-sheikhs', 'rabitah-al-shaykh', 'benefits-of-company-of-righteous']
  },

  // ==========================================
  // 2. DHIKR & SPIRITUAL PRACTICE
  // ==========================================
  {
    id: 'method-of-remembering-allah',
    title: 'Method of Remembering Allah',
    category: 'Dhikr & Spiritual Practice',
    categorySlug: 'dhikr-and-spiritual-practice',
    subtitle: 'The precise manner of performing Dhikr according to the Naqshbandi Mujaddidi guidelines',
    arabicTitle: 'كَيْفِيَّةُ ذِكْرِ اسْمِ الذَّاتِ',
    readTime: '8 min read',
    summary: 'Practical step-by-step instructions for sitting, focusing, breathing, and directing the Divine Name upon the subtle centers of the soul.',
    sections: [
      {
        heading: 'Etiquettes Before Commencing Dhikr',
        paragraphs: [
          '1. Purification: Perform ritual ablution (Wudu) meticulously, apply light permissible fragrance, and choose a clean, quiet space free from worldly distractions.',
          '2. Posture: Sit facing the Qiblah in the position of Tashahhud (two-knees) or cross-legged with utmost humility and reverence.',
          '3. Sincere Repentance (Istighfar): Recite Astaghfirullah at least three to twenty-five times with genuine remorse for past shortcomings.',
          '4. Rabita: Visualize your heart standing directly opposite the luminous heart of your Murshid, asking Allah for spiritual Faiz through this unbroken golden chain.'
        ]
      },
      {
        heading: 'The Silent Inscription (Naqsh)',
        paragraphs: [
          'Close your eyes, seal your lips, press your tongue against the roof of the mouth, and disconnect the mind from external noises.',
          'Direct all mental attention, yearning, and consciousness downward to the physical heart—two fingers beneath the left breast. Do not speak with vocal cords; let the silent inner voice repeat: "ALLAH, ALLAH, ALLAH" with every heartbeat, feeling the coldness of heedlessness melt away under the warmth of the Divine Name.'
        ]
      }
    ],
    relatedArticleIds: ['zikr-e-qalbi', 'virtues-of-zikr-e-qalbi', 'dhikr-meditation-circles']
  },
  {
    id: 'zikr-e-qalbi',
    title: 'Remembering Allah in the Heart (Zikr-e-Qalbi)',
    category: 'Dhikr & Spiritual Practice',
    categorySlug: 'dhikr-and-spiritual-practice',
    subtitle: 'The nature, reality, and perpetual beat of the spiritual heart illuminated by the Divine Name',
    arabicTitle: 'حَقِيقَةُ الذِّكْرِ الْقَلْبِيِّ الْخَفِيِّ',
    readTime: '10 min read',
    summary: 'A deep exposition of silent internal remembrance, its Scriptural roots, and how the spiritual heart begins to beat with the remembrance of Allah.',
    sections: [
      {
        heading: 'The Heart as the King of the Organs',
        arabicText: 'أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً إِذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ وَإِذَا فَسَدَتْ فَسَدَ الْجَسَدُ كُلُّهُ أَلَا وَهِيَ الْقَلْبُ',
        translation: 'Beware! There is a piece of flesh in the body: if it is sound, the whole body is sound; if it is corrupt, the whole body is corrupt. Truly, it is the heart. (Sahih al-Bukhari)',
        paragraphs: [
          'Zikr-e-Qalbi is the remembrance of Allah that occurs in the heart without sound, tongue movement, or vocalization. The angels who record vocal deeds do not even hear it, keeping it purely between the servant and the Almighty.',
          'When Zikr enters the core of the heart (Suwayda al-Qalb), it penetrates the blood vessels and permeates every cell. The seeker’s heart continues to recite "ALLAH" even while walking, speaking, trading in the marketplace, or sleeping.'
        ],
        keyQuote: 'Vocal remembrance is good, but silent remembrance of the heart is seventy times more exalted in the sight of Allah.'
      }
    ],
    relatedArticleIds: ['virtues-of-zikr-e-qalbi', 'method-of-remembering-allah', 'hosh-dar-dam']
  },
  {
    id: 'virtues-of-zikr-e-qalbi',
    title: 'Virtues of Zikr-e-Qalbi',
    category: 'Dhikr & Spiritual Practice',
    categorySlug: 'dhikr-and-spiritual-practice',
    subtitle: 'The spiritual rewards, protection, and divine proximity earned through silent inner remembrance',
    arabicTitle: 'فَضَائِلُ الذِّكْرِ الْخَفِيِّ الْقَلْبِيِّ',
    readTime: '7 min read',
    summary: 'Compiling authentic traditions and teachings showing why silent heart remembrance shields the believer from hypocrisy and grants tranquility.',
    sections: [
      {
        heading: 'Freedom from Ostentation (Riya)',
        paragraphs: [
          'Vocal remembrance is exposed to the danger of ostentation, where one may subconsciously desire others to witness their piety. In contrast, Zikr-e-Qalbi is completely invisible to human onlookers.',
          'The Prophet (S.A.W.) stated: "The best remembrance is the hidden one (al-Khafi), and the best sustenance is that which suffices."'
        ]
      },
      {
        heading: 'Inner Peace and Divine Accompaniment',
        arabicText: 'الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللّٰهِ أَلَا بِذِكْرِ اللّٰهِ تَطْمَئِنُّ الْقُلُوبُ',
        translation: 'Those who have believed and whose hearts find rest in the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured. (Surah Ar-Ra’d, 13:28)',
        paragraphs: [
          'No psychological counseling or material luxury can satisfy the restless human heart. Only when the heart establishes its continuous rhythm with the Creator does it achieve unshakable serenity (Itmi’nan).'
        ]
      }
    ],
    relatedArticleIds: ['zikr-e-qalbi', 'perseverance-in-dhikr', 'method-of-remembering-allah']
  },
  {
    id: 'dhikr-meditation-circles',
    title: 'Dhikr & Meditation Circles',
    category: 'Dhikr & Spiritual Practice',
    categorySlug: 'dhikr-and-spiritual-practice',
    subtitle: 'The etiquette, spiritual power, and collective grace of gathering for Muraqabah and remembrance',
    arabicTitle: 'حِلَقُ الذِّكْرِ وَالْمُرَاقَبَةِ',
    readTime: '8 min read',
    summary: 'The virtues of congregational spiritual circles, how angels surround the gatherers, and how collective Tawajjuh accelerates progress.',
    sections: [
      {
        heading: 'The Gardens of Paradise on Earth',
        arabicText: 'إِذَا مَرَرْتُمْ بِرِيَاضِ الْجَنَّةِ فَارْتَعُوا قَالُوا: وَمَا رِيَاضُ الْجَنَّةِ؟ قَالَ: حِلَقُ الذِّكْرِ',
        translation: 'The Messenger of Allah (S.A.W.) said: "When you pass by the gardens of Paradise, feast therein." They asked: "What are the gardens of Paradise?" He replied: "The circles of Dhikr." (Jami at-Tirmidhi)',
        paragraphs: [
          'When sincere seekers gather in a circle, close their eyes, and immerse themselves in silent meditation (Muraqabah), their individual spiritual lights merge into a mighty beacon. Divine peace (Sakinah) descends, angels envelope them up to the heavenly throne, and Allah mentions them with pride in the highest assembly.'
        ]
      }
    ],
    relatedArticleIds: ['method-of-remembering-allah', 'virtues-of-zikr-e-qalbi', 'khalwat-dar-anjuman']
  },

  // ==========================================
  // 3. TERMS OF THE EXALTED NAQSHBANDI PATH
  // ==========================================
  {
    id: 'hosh-dar-dam',
    title: 'Hosh Dar Dam',
    category: 'Terms of the Exalted Naqshbandi Path',
    categorySlug: 'terms-of-the-path',
    subtitle: 'Conscious Breathing — Guarding every breath from heedlessness and negligence',
    arabicTitle: 'هُوش دَرْ دَمْ (الْوَعْيُ بِكُلِّ نَفَسٍ)',
    readTime: '7 min read',
    summary: 'The first foundational principle: bringing conscious mindfulness to every inhalation and exhalation so no breath leaves without the presence of Allah.',
    sections: [
      {
        heading: 'Every Breath is a Jewel',
        paragraphs: [
          'Khwaja Abdul Khaliq Ghijdwani (Rah.) taught that the lifespan of a human being is measured not in years, but in allotted breaths. A breath taken in heedlessness (Ghaflah) is dead, while a breath taken with the remembrance of Allah is alive with eternal value.',
          'Hosh Dar Dam requires the seeker to observe their breathing. With inhalation, one draws in the awareness of the Divine Presence; with exhalation, one expels the impurities of the lower self. If one maintains this discipline, the heart becomes an unbroken conduit of light.'
        ],
        keyQuote: 'Do not allow even a single breath to enter or depart in heedlessness.'
      }
    ],
    relatedArticleIds: ['nazar-bar-qadam', 'safar-dar-watan', 'yad-kard']
  },
  {
    id: 'nazar-bar-qadam',
    title: 'Nazar Bar Qadam',
    category: 'Terms of the Exalted Naqshbandi Path',
    categorySlug: 'terms-of-the-path',
    subtitle: 'Watching Your Step — Lowering the physical gaze and guarding the spiritual intention',
    arabicTitle: 'نَظَر بَرْ قَدَمْ (حِفْظُ الْبَصَرِ وَالْخُطُوَاتِ)',
    readTime: '6 min read',
    summary: 'The second principle: keeping the eyes cast down toward the toes while walking to shield the mind from illicit glances and idle curiosity.',
    sections: [
      {
        heading: 'Guarding the Window of the Soul',
        paragraphs: [
          'The eye is the chief portal to the heart. Whatever the eye gazes upon, an image is instantly transferred onto the canvas of the heart. If one looks around casually at market displays, attractive faces, and worldly vanities, the heart becomes cluttered with chaotic images.',
          'By practicing Nazar Bar Qadam, the seeker keeps their gaze fixed upon their footwear while walking. Outwardly, this protects from tripping and maintains dignified humility; inwardly, it prevents distraction from the path to Allah.'
        ]
      }
    ],
    relatedArticleIds: ['hosh-dar-dam', 'khalwat-dar-anjuman', 'nigahdasht']
  },
  {
    id: 'safar-dar-watan',
    title: 'Safar Dar Watan',
    category: 'Terms of the Exalted Naqshbandi Path',
    categorySlug: 'terms-of-the-path',
    subtitle: 'Journey within the Homeland — Inward migration from blameworthy to praiseworthy traits',
    arabicTitle: 'سَفَر دَرْ وَطَنْ (السِّيَاحَةُ فِي الْبَاطِنِ)',
    readTime: '7 min read',
    summary: 'The third principle: traveling inwardly from the natural homeland of the carnal ego towards the divine homeland of spiritual purity.',
    sections: [
      {
        heading: 'The True Spiritual Migration',
        paragraphs: [
          'Physical travel across mountains and deserts is of little benefit if the inner soul remains captive to anger and pride. Safar Dar Watan means the seeker embarks upon an inward pilgrimage, migrating from:',
          '1. Arrogance to Humility',
          '2. Greed to Contentment',
          '3. Impatience to Grateful Steadfastness',
          '4. Ignorance to Gnosis of Allah'
        ]
      }
    ],
    relatedArticleIds: ['khalwat-dar-anjuman', 'yad-kard', 'baz-gasht']
  },
  {
    id: 'khalwat-dar-anjuman',
    title: 'Khalwat Dar Anjuman',
    category: 'Terms of the Exalted Naqshbandi Path',
    categorySlug: 'terms-of-the-path',
    subtitle: 'Solitude in the Crowd — Outwardly with people, inwardly alone with the Creator',
    arabicTitle: 'خَلْوَت دَرْ أَنْجُمَنْ (الْعُزْلَةُ فِي الْمَلَأِ)',
    readTime: '9 min read',
    summary: 'The crown jewel of Naqshbandi lifestyle: living in the midst of society, fulfilling family and professional duties, while the heart rests in unbroken solitude with Allah.',
    sections: [
      {
        heading: 'The Balance of Sacred Presence',
        arabicText: 'رِجَالٌ لَّا تُلْهِيهِمْ تِجَارَةٌ وَلَا بَيْعٌ عَن ذِكْرِ اللّٰهِ وَإِقَامِ الصَّلَاةِ',
        translation: 'Men whom neither commerce nor sale distracts from the remembrance of Allah and performance of prayer. (Surah An-Nur, 24:37)',
        paragraphs: [
          'Shah Bahauddin Naqshband (Rah.) was once asked: "On what is your path founded?" He answered: "On Khalwat Dar Anjuman: outwardly to be with creation, but inwardly to be with God."',
          'The Naqshbandi master does not encourage monastic seclusion in caves or abandonment of society. The real spiritual victory is to run a business, raise children, and engage in civil life, while the needle of the heart never wavers from its North Star—Allah Almighty.'
        ],
        keyQuote: 'Hands at work, heart with the Beloved.'
      }
    ],
    relatedArticleIds: ['hosh-dar-dam', 'yad-kard', 'outwardly-well-mannered']
  },
  {
    id: 'yad-kard',
    title: 'Yad Kard',
    category: 'Terms of the Exalted Naqshbandi Path',
    categorySlug: 'terms-of-the-path',
    subtitle: 'Continuous Remembrance — Incessant repetition of the Divine Name in the heart',
    arabicTitle: 'يَادْ كَرْدْ (مُدَاوَمَةُ الذِّكْرِ)',
    readTime: '6 min read',
    summary: 'The fourth principle: holding the tongue of the heart in continuous engagement with the affirmation of the negation and the affirmation of Allah.',
    sections: [
      {
        heading: 'Perpetual Awakening',
        paragraphs: [
          'Yad Kard is the diligent, rhythmic invocation taught by the Sheikh. Through persistent repetition, the remembrance moves from an effort of will to an effortless reflex, until every heartbeat reverberates with the Divine Name without conscious labor.'
        ]
      }
    ],
    relatedArticleIds: ['baz-gasht', 'nigahdasht', 'yad-dasht']
  },
  {
    id: 'baz-gasht',
    title: 'Baz Gasht',
    category: 'Terms of the Exalted Naqshbandi Path',
    categorySlug: 'terms-of-the-path',
    subtitle: 'The Return — Returning to God with the sincere prayer: You are my goal, and Your pleasure is my quest',
    arabicTitle: 'بَازْ گَشْتْ (الرُّجُوعُ إِلَى اللّٰهِ)',
    readTime: '7 min read',
    summary: 'The fifth principle: periodically interrupting meditation to declare: Ilahi Anta Maqsudi wa Ridaka Matlubi, purifying the intention from spiritual pride.',
    sections: [
      {
        heading: 'The Great Supplication of Sincerity',
        arabicText: 'إِلٰهِي أَنْتَ مَقْصُودِي وَرِضَاكَ مَطْلُوبِي',
        translation: 'My God, You alone are my objective, and Your good pleasure is my sole desire.',
        paragraphs: [
          'During meditation, the seeker may experience spiritual visions, celestial lights, or sweet ecstasy. The ego can easily become fascinated with these experiences, turning spiritual gifts into idols.',
          'The master commands the seeker to constantly return (Baz Gasht) to the primary truth: We do not worship for visions or spiritual powers; we seek only Allah and His divine satisfaction.'
        ]
      }
    ],
    relatedArticleIds: ['yad-kard', 'nigahdasht', 'spiritual-sweetness-not-essential']
  },
  {
    id: 'nigahdasht',
    title: 'Nigahdasht',
    category: 'Terms of the Exalted Naqshbandi Path',
    categorySlug: 'terms-of-the-path',
    subtitle: 'Vigilance over Thoughts — Stationing a spiritual guard at the threshold of the heart',
    arabicTitle: 'نِگَاهْدَاشْتْ (حِرَاسَةُ الْخَوَاطِرِ)',
    readTime: '8 min read',
    summary: 'The sixth principle: actively guarding the heart against intrusive worldly thoughts (Khatir) so the sanctuary remains dedicated solely to the Creator.',
    sections: [
      {
        heading: 'The Citadel of the Heart',
        paragraphs: [
          'Nigahdasht means stationing a vigilant sentry at the gateway of the heart. The moment an illicit, vain, or distracting thought attempts to enter, the seeker strikes it down with the sword of Zikr before it can take root.',
          'Achieving this state grants profound mental clarity, shielding the intellect from anxiety and despair.'
        ]
      }
    ],
    relatedArticleIds: ['yad-dasht', 'wuquf-qalbi', 'baz-gasht']
  },
  {
    id: 'yad-dasht',
    title: 'Yad Dasht',
    category: 'Terms of the Exalted Naqshbandi Path',
    categorySlug: 'terms-of-the-path',
    subtitle: 'Recollection — Perpetual, unmediated witnessing of the Divine Presence',
    arabicTitle: 'يَادْ دَاشْتْ (دَوَامُ شُهُودِ الْحَضْرَةِ)',
    readTime: '8 min read',
    summary: 'The seventh principle: reaching the supreme station where the remembrance becomes an effortless, continuous witnessing of Allah without separation.',
    sections: [
      {
        heading: 'From Effort to Abiding Presence',
        paragraphs: [
          'While Yad Kard is the active recitation, Yad Dasht is the fruit: an abiding state of direct perception of the Divine Glory. In this station, forgetfulness (Ghaflah) is eradicated, and the seeker’s inner eye perceives the light of Allah in all created things.'
        ]
      }
    ],
    relatedArticleIds: ['wuquf-qalbi', 'wuquf-zamani', 'hosh-dar-dam']
  },
  {
    id: 'wuquf-zamani',
    title: 'Wuquf Zamani',
    category: 'Terms of the Exalted Naqshbandi Path',
    categorySlug: 'terms-of-the-path',
    subtitle: 'Temporal Awareness — Taking regular accounting of one’s hours and moments',
    arabicTitle: 'وُقُوفْ زَمَانِي (مُحَاسَبَةُ الْوَقْتِ)',
    readTime: '6 min read',
    summary: 'The eighth principle (added by Shah Naqshband): regularly auditing whether the past two or three hours were spent in gratitude or heedlessness.',
    sections: [
      {
        heading: 'The Spiritual Balance Sheet',
        paragraphs: [
          'Every few hours, the seeker pauses to review the passage of time. If the hours were spent in obedience, remembrance, and lawful service, one renders heartfelt gratitude (Shukr). If any moments lapsed into negligence or fault, one immediately offers sincere repentance (Istighfar).'
        ]
      }
    ],
    relatedArticleIds: ['wuquf-adadi', 'wuquf-qalbi', 'value-your-free-time']
  },
  {
    id: 'wuquf-adadi',
    title: 'Wuquf Adadi',
    category: 'Terms of the Exalted Naqshbandi Path',
    categorySlug: 'terms-of-the-path',
    subtitle: 'Numerical Awareness — Exactitude and presence in counting litanies',
    arabicTitle: 'وُقُوفْ عَدَدِي (الْوَعْيُ بِالْعَدَدِ)',
    readTime: '6 min read',
    summary: 'The ninth principle: maintaining strict numerical accuracy in prescribed repetitions so the mind does not wander into daydreaming.',
    sections: [
      {
        heading: 'Precision as an Anchor for Presence',
        paragraphs: [
          'Counting is not for the sake of mere arithmetic, but to hold the roving mind captive. When the mind is forced to track the exact count of repetitions, it cannot easily drift into worldly daydreams.'
        ]
      }
    ],
    relatedArticleIds: ['wuquf-zamani', 'wuquf-qalbi', 'method-of-remembering-allah']
  },
  {
    id: 'wuquf-qalbi',
    title: 'Wuquf Qalbi',
    category: 'Terms of the Exalted Naqshbandi Path',
    categorySlug: 'terms-of-the-path',
    subtitle: 'Heart Awareness — Directing total consciousness toward the spiritual heart',
    arabicTitle: 'وُقُوفْ قَلْبِي (تَوَجُّهُ الْقَلْبِ إِلَى اللّٰهِ)',
    readTime: '7 min read',
    summary: 'The tenth principle: gathering all fragmented thoughts and anchoring them firmly within the heart, keeping it perpetually attentive to the Divine Gaze.',
    sections: [
      {
        heading: 'The Focus of the Inner Eye',
        paragraphs: [
          'Wuquf Qalbi is the essence of Naqshbandi contemplation. It means keeping the spiritual heart awake, expectant, and attentive to Allah, knowing that the Creator is perpetually observing its secret chambers.'
        ]
      }
    ],
    relatedArticleIds: ['zikr-e-qalbi', 'hosh-dar-dam', 'yad-dasht']
  },

  // ==========================================
  // 4. MAKTUBAT SHAREEF
  // ==========================================
  {
    id: 'key-means-of-attaining-closeness',
    title: 'The Key Means of Attaining Closeness to Allah',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'From the epistles of Imam Rabbani Mujaddid Alf Thani on the path of proximity',
    arabicTitle: 'أَعْظَمُ الْوَسَائِلِ لِنَيْلِ الْقُرْبِ الْإِلٰهِيِّ',
    readTime: '8 min read',
    summary: 'Clarifying that the highest degree of closeness to Allah is attained through perfect compliance with the compulsory religious obligations (Fara’id).',
    sections: [
      {
        heading: 'The Superiority of Obligatory Acts',
        arabicText: 'وَمَا تَقَرَّبَ إِلَيَّ عَبْدِي بِشَيْءٍ أَحَبَّ إِلَيَّ مِمَّا افْتَرَضْتُ عَلَيْهِ',
        translation: 'My servant does not draw near to Me with anything more beloved to Me than the religious duties I have obligated upon him. (Hadith Qudsi, Sahih al-Bukhari)',
        paragraphs: [
          'In his Maktubat, Imam Rabbani emphasizes that giving a single penny in obligatory Zakat is spiritually superior to giving thousands of gold coins in voluntary charity, and praying two units of obligatory Fajr with congregation is greater than staying awake all night in optional prayers while missing the congregational Fajr.',
          'True spiritual closeness is grounded upon fulfilling what Allah has commanded, not upon personal whims masked as piety.'
        ]
      }
    ],
    relatedArticleIds: ['congregational-prayer', 'observing-etiquettes-of-prayer', 'following-the-sunnah']
  },
  {
    id: 'congregational-prayer',
    title: 'Congregational Prayer',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'The vital station of Salah in Jama’ah in the Naqshbandi methodology',
    arabicTitle: 'أَهَمِّيَّةُ صَلَاةِ الْجَمَاعَةِ فِي الطَّرِيقِ',
    readTime: '7 min read',
    summary: 'Why no spiritual progress is conceivable for a traveler who neglects the five daily congregational prayers in the mosque.',
    sections: [
      {
        heading: 'The Foundation of All Spiritual Stations',
        paragraphs: [
          'Prayer in congregation is the clearest distinguishing sign of the believer. The masters of the Naqshbandi path never permitted any seeker to substitute solitary spiritual exercises for participation in the first row of congregational prayer.'
        ]
      }
    ],
    relatedArticleIds: ['observing-etiquettes-of-prayer', 'consistency-in-prayer', 'key-means-of-attaining-closeness']
  },
  {
    id: 'observing-etiquettes-of-prayer',
    title: 'Observing the Etiquettes of Prayer',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'Perfection in bowing, prostration, tranquility, and presence during Salah',
    arabicTitle: 'رِعَايَةُ آدَابِ الصَّلَاةِ وَتَعْدِيلُ الْأَرْكَانِ',
    readTime: '7 min read',
    summary: 'The necessity of Ta’dil al-Arkan (tranquility in every movement) and inner presence during conversation with the Lord of the worlds.',
    sections: [
      {
        heading: 'Salah is the Ascension of the Believer',
        paragraphs: [
          'Imam Rabbani writes that Salah is the heavenly ascension (Mi’raj) of the believer. When performing Ruku and Sujud, one must pause until the bones rest in their places, savoring the glorification of Allah without haste.'
        ]
      }
    ],
    relatedArticleIds: ['congregational-prayer', 'consistency-in-prayer', 'following-the-sunnah']
  },
  {
    id: 'knowledge-is-struggle',
    title: 'Knowledge Is the Name of Struggle',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'True sacred knowledge demands relentless exertion against the base ego',
    arabicTitle: 'الْعِلْمُ هُوَ الْمُجَاهَدَةُ الْحَقِيقِيَّةُ',
    readTime: '6 min read',
    summary: 'Knowledge without spiritual practice is a heavy burden on the Day of Judgment; genuine knowledge is that which births fear of Allah.',
    sections: [
      {
        heading: 'The Purpose of Learning',
        paragraphs: [
          'Knowledge is not acquired merely to debate or accumulate titles. The fruit of knowledge is the struggle (Mujahadah) to align one’s conduct with the commandments of Allah and His Messenger (S.A.W.).'
        ]
      }
    ],
    relatedArticleIds: ['following-the-sunnah', 'importance-of-humility', 'path-to-salvation']
  },
  {
    id: 'benefits-of-company-of-righteous',
    title: 'Benefits of the Company of the Righteous',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'How sitting with the friends of Allah cures heart illnesses and infuses spiritual energy',
    arabicTitle: 'بَرَكَاتُ مُجَالَسَةِ الصَّالِحِينَ',
    readTime: '7 min read',
    summary: 'The spiritual contagion of good: righteous company naturally draws the heart towards virtuous deeds and protects from spiritual lethargy.',
    sections: [
      {
        heading: 'The Metaphor of the Perfume Seller',
        paragraphs: [
          'The Prophet (S.A.W.) likened good companionship to a seller of musk: either he gives you some perfume, or you purchase some, or at least you enjoy its sweet scent. Sitting with the Awliya purifies the inner breath of the soul.'
        ]
      }
    ],
    relatedArticleIds: ['companionship-of-a-sheikh', 'rabitah-al-shaykh', 'love-for-the-shaykh']
  },
  {
    id: 'perseverance-in-dhikr',
    title: 'Perseverance in Dhikr',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'Steadfastness over spectacular miracles: the secret to true realization',
    arabicTitle: 'الِاسْتِقَامَةُ فِي الذِّكْرِ',
    readTime: '7 min read',
    summary: 'The beloved deed to Allah is that which is continuous, even if small. Consistency in daily litanies unlocks divine intimacy.',
    sections: [
      {
        heading: 'The Power of Unbroken Practice',
        paragraphs: [
          'A drop of water falling consistently upon stone hollows it out, while a torrential flood passing once leaves it unchanged. A daily routine of Dhikr, performed with sincerity every morning and evening, will inevitably soften the hardest heart.'
        ]
      }
    ],
    relatedArticleIds: ['method-of-remembering-allah', 'virtues-of-zikr-e-qalbi', 'wuquf-zamani']
  },
  {
    id: 'rabitah-al-shaykh',
    title: 'Connection with the Shaykh (Rābiṭah al-Shaykh)',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'The spiritual umbilical cord between the seeker’s heart and the master’s realization',
    arabicTitle: 'رَابِطَةُ الشَّيْخِ وَحَقِيقَتُهَا',
    readTime: '8 min read',
    summary: 'Understanding Rabitah: holding the image and spiritual reverence of the Murshid in the heart to facilitate the flow of prophetic blessings.',
    sections: [
      {
        heading: 'The Conduit of Prophetic Faiz',
        paragraphs: [
          'Rabitah is not worship of the master; it is love, reverence, and spiritual tuning. Just as a television antenna must be aligned precisely with the broadcasting tower to receive the signal, the seeker’s heart aligns with the heart of the Sheikh to receive the spiritual transmission originating from the Holy Prophet (S.A.W.).'
        ]
      }
    ],
    relatedArticleIds: ['companionship-of-a-sheikh', 'love-for-the-shaykh', 'contemplation-and-spiritual-connection']
  },
  {
    id: 'following-the-sunnah',
    title: 'Following the Sunnah',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'The sole criterion of divine acceptance in the Naqshbandi Mujaddidi way',
    arabicTitle: 'اتِّبَاعُ السُّنَّةِ النَّبَوِيَّةِ الشَّرِيفَةِ',
    readTime: '9 min read',
    summary: 'Why adherence to the Prophet’s Sunnah in dress, manners, worship, and character is the highest attainable station of Wilayah.',
    sections: [
      {
        heading: 'The Criterion of Truth',
        arabicText: 'قُلْ إِن كُنتُمْ تُحِبُّونَ اللّٰهَ فَاتَّبِعُونِي يُحْبِبْكُمُ اللّٰهُ وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ',
        translation: 'Say, [O Muhammad], "If you should love Allah, then follow me, [so] Allah will love you and forgive you your sins." (Surah Ali Imran, 3:31)',
        paragraphs: [
          'Imam Rabbani asserted that if an individual performed spiritual austerities until their skin dried to their bones and performed countless miracles, but neglected even a single confirmed Sunnah of the Prophet (S.A.W.), they would not be considered a true saint in our path.',
          'Every action—eating with the right hand, smiling at brethren, entering with the right foot, sleeping upon the right side—is transformed into worship when done in emulation of the Beloved (S.A.W.).'
        ]
      }
    ],
    relatedArticleIds: ['components-of-shariah', 'distinctive-feature-naqshbandi-path', 'following-sunnah-in-order']
  },
  {
    id: 'consistency-in-prayer',
    title: 'Consistency in Prayer',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'Maintaining unshakeable vigilance in times of ease and adversity',
    arabicTitle: 'الْمُحَافَظَةُ عَلَى الصَّلَوَاتِ',
    readTime: '6 min read',
    summary: 'The five daily prayers as the uncompromised anchor of the believer’s daily schedule.',
    sections: [
      {
        heading: 'Anchoring Time in the Divine',
        paragraphs: [
          'The worldly person arranges prayer around their business; the spiritual traveler arranges their business around prayer. When the Adhan calls, all worldly chatter must cease.'
        ]
      }
    ],
    relatedArticleIds: ['congregational-prayer', 'observing-etiquettes-of-prayer', 'worship-in-youth']
  },
  {
    id: 'worship-in-youth',
    title: 'Worship in Youth',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'The unmatched station of a young heart dedicated to the Creator before the arrival of old age',
    arabicTitle: 'عِبَادَةُ الشَّبَابِ وَفَضْلُهَا',
    readTime: '7 min read',
    summary: 'Encouraging young seekers to dedicate their energetic years to Allah, escaping the deception of postponing repentance until retirement.',
    sections: [
      {
        heading: 'Under the Shade of the Divine Throne',
        paragraphs: [
          'The youth who grows up in the worship of Allah is granted shade under the Divine Throne on the day when there is no shade but His. Turning to Allah in old age when energy has faded is good, but turning to Him in youth when passions run high is supreme heroism.'
        ]
      }
    ],
    relatedArticleIds: ['value-your-free-time', 'path-to-salvation', 'following-the-sunnah']
  },
  {
    id: 'importance-of-humility',
    title: 'The Importance of Humility',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'Viewing oneself as inferior to every created being: the doorway to divine elevation',
    arabicTitle: 'أَهَمِّيَّةُ التَّوَاضُعِ وَالِانْكِسَارِ',
    readTime: '7 min read',
    summary: 'How genuine humility (Tawadu) demolishes the fortress of pride and draws down the boundless mercy of Allah.',
    sections: [
      {
        heading: 'Water Flows to the Lowest Valley',
        paragraphs: [
          'Rainwater does not collect on high mountain peaks; it rushes down to gather in the humble, low valleys. In the same way, the rain of Divine Grace does not alight upon proud, puffed-up souls; it gathers in the heart that considers itself the least of all creation.'
        ]
      }
    ],
    relatedArticleIds: ['knowledge-is-struggle', 'path-to-salvation', 'outwardly-well-mannered']
  },
  {
    id: 'path-to-salvation',
    title: 'The Path to Salvation',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'The essential synthesis of sound creed, righteous deeds, and spiritual sincerity',
    arabicTitle: 'طَرِيقُ النَّجَاةِ فِي الدَّارَيْنِ',
    readTime: '8 min read',
    summary: 'The three essential requirements for eternal salvation: correct orthodox belief, conformity to Shari’ah, and purification of the inner intention.',
    sections: [
      {
        heading: 'The Three Essential Wings of Faith',
        paragraphs: [
          'Salvation rests upon three foundational pillars:',
          '1. Correcting one’s creed according to the consensus of Ahl al-Sunnah wa’l-Jamā‘ah.',
          '2. Learning and implementing the practical rulings of Shari’ah regarding lawful and prohibited matters.',
          '3. Cleansing the heart of moral blemishes through the path of Tasawwuf so that worship is performed solely for Allah.'
        ]
      }
    ],
    relatedArticleIds: ['creed-of-ahl-al-sunnah', 'components-of-shariah', 'tariqah-and-shariah']
  },
  {
    id: 'following-sunnah-in-order',
    title: 'Following the Sunnah in the Naqshbandi Sufi Order',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'How the Naqshbandi Tariqah embodies the exact Sunnah of the Prophet (S.A.W.)',
    arabicTitle: 'الِاعْتِصَامُ بِالسُّنَّةِ فِي السِّلْسِلَةِ النَّقْشَبَنْدِيَّةِ',
    readTime: '8 min read',
    summary: 'Rejecting baseless innovations (Bid’ah) and grounding every spiritual practice upon verified Prophetic precedent.',
    sections: [
      {
        heading: 'Purity from Innovations',
        paragraphs: [
          'The Naqshbandi order is uniquely distinguished by its absolute rejection of unsanctioned innovations. It relies neither upon loud music nor ecstatic dancing, adhering strictly to the sober, luminous path of the Prophet (S.A.W.) and his noble Companions.'
        ]
      }
    ],
    relatedArticleIds: ['following-the-sunnah', 'distinctive-feature-naqshbandi-path', 'superiority-of-naqshbandi-way']
  },
  {
    id: 'components-of-shariah',
    title: 'The Components of the Sharīʿah',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'Understanding the integral relationship between Knowledge, Action, and Sincerity',
    arabicTitle: 'أَرْكَانُ الشَّرِيعَةِ الْغَرَّاءِ',
    readTime: '7 min read',
    summary: 'Imam Rabbani’s profound explanation of the tripartite structure of Shari’ah: ‘Ilm (Knowledge), ‘Amal (Action), and Ikhlas (Sincerity).',
    sections: [
      {
        heading: 'Shari’ah Encompasses All Realities',
        paragraphs: [
          'Imam Rabbani writes that Shari’ah has three components: Knowledge, Action, and Sincerity. When all three are realized, the Shari’ah is perfected. The entire purpose of Tariqah and Haqiqah is nothing other than the attainment of true Sincerity (Ikhlas) within the Shari’ah.'
        ]
      }
    ],
    relatedArticleIds: ['tariqah-and-shariah', 'path-to-salvation', 'distinctive-feature-naqshbandi-path']
  },
  {
    id: 'following-the-prophetic-sunnah',
    title: 'Following the Prophetic Sunnah',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'Loving the Messenger of Allah through meticulous emulation',
    arabicTitle: 'مَحَبَّةُ النَّبِيِّ صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ فِي اتِّبَاعِهِ',
    readTime: '7 min read',
    summary: 'True love for the Messenger of Allah is proven by prioritizing his Sunnah in every facet of personal and community life.',
    sections: [
      {
        heading: 'The Proof of Love',
        paragraphs: [
          'Love is not merely poetic words; love is emulating the beloved in speech, silence, character, and conduct. The Naqshbandi master demonstrates this love through meticulous imitation of the Prophetic manner.'
        ]
      }
    ],
    relatedArticleIds: ['attributes-of-beloveds-beloved', 'following-the-sunnah', 'love-for-the-shaykh']
  },
  {
    id: 'attributes-of-beloveds-beloved',
    title: 'The Attributes of the Beloved’s Beloved',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'Reflections on the sublime prophetic character that illuminated humanity',
    arabicTitle: 'شَمَائِلُ الْحَبِيبِ الْمُصْطَفَى',
    readTime: '8 min read',
    summary: 'Contemplating the gentle manners, boundless generosity, and luminous compassion of the Messenger of Allah (S.A.W.).',
    sections: [
      {
        heading: 'The Living Qur’an',
        paragraphs: [
          'When Sayyidah Aisha (R.A.) was asked about the character of the Prophet (S.A.W.), she replied: "His character was the Qur’an." The seeker studies these sublime qualities to mirror them in daily dealings.'
        ]
      }
    ],
    relatedArticleIds: ['following-the-prophetic-sunnah', 'following-the-sunnah', 'outwardly-well-mannered']
  },
  {
    id: 'tariqah-and-shariah',
    title: 'Ṭarīqah and Sharīʿah',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'Clarifying the inseparable unity of the sacred law and the spiritual path',
    arabicTitle: 'عَلَاقَةُ الطَّرِيقَةِ بِالشَّرِيعَةِ',
    readTime: '8 min read',
    summary: 'Definitive refutation of the misconception that Tariqah is separate from or higher than Shari’ah. Tariqah is the servant of Shari’ah.',
    sections: [
      {
        heading: 'The Vessel and the Elixir',
        paragraphs: [
          'Shari’ah is like the crystal vessel, and Tariqah is the sweet, life-giving water within it. Without the vessel, the water spills and is lost. Any "spiritual experience" that contradicts the sacred law is a deception from Satan.'
        ]
      }
    ],
    relatedArticleIds: ['components-of-shariah', 'distinctive-feature-naqshbandi-path', 'path-to-salvation']
  },
  {
    id: 'distinctive-feature-naqshbandi-path',
    title: 'The Distinctive Feature of the Naqshbandi Path: Adherence to Sharīʿah and Sunnah',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'Why the Naqshbandi order is known as the highway of religious scrupulousness',
    arabicTitle: 'خَصِيصَةُ الطَّرِيقَةِ النَّقْشَبَنْدِيَّةِ فِي الِاسْتِقَامَةِ',
    readTime: '8 min read',
    summary: 'The hallmark of this path is Azimah (strict adherence to legal rulings) rather than seeking compromises (Rukhsah).',
    sections: [
      {
        heading: 'The Path of High Resolve (Azimah)',
        paragraphs: [
          'While common believers may look for minimal requirements and exemptions, the Naqshbandi master trains seekers to adopt the highest resolve (Azimah), avoiding doubtful matters and maintaining immaculate scrupulousness.'
        ]
      }
    ],
    relatedArticleIds: ['following-the-sunnah', 'superiority-of-naqshbandi-way', 'tariqah-and-shariah']
  },
  {
    id: 'gratitude-to-the-lord',
    title: 'Gratitude to the Lord',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'The spiritual alchemy of recognizing divine bounties and giving thanks in all states',
    arabicTitle: 'الشُّكْرُ لِلّٰهِ تَعَالَى وَحَقِيقَتُهُ',
    readTime: '6 min read',
    summary: 'Gratitude (Shukr) of the tongue, heart, and limbs, and how it protects blessings and unlocks continuous spiritual increase.',
    sections: [
      {
        heading: 'The Guarantee of Increase',
        arabicText: 'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ',
        translation: 'If you are grateful, I will surely increase you [in favor]. (Surah Ibrahim, 14:7)',
        paragraphs: [
          'Gratitude is not merely saying "Alhamdulillah"; it is using every faculty—eyes, ears, tongue, wealth—solely in that which pleases the Giver of the bounty.'
        ]
      }
    ],
    relatedArticleIds: ['value-your-free-time', 'wuquf-zamani', 'perseverance-in-dhikr']
  },
  {
    id: 'value-your-free-time',
    title: 'Value Your Free Time',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'Preserving the irreplaceable capital of life before the arrival of death',
    arabicTitle: 'اغْتِنَامُ الْفَرَاغِ وَالْوَقْتِ',
    readTime: '6 min read',
    summary: 'Time is the seeker’s gold. Spending hours in frivolous amusement drains the soul of spiritual vitality.',
    sections: [
      {
        heading: 'The Two Overlooked Bounties',
        paragraphs: [
          'The Prophet (S.A.W.) stated: "Two blessings are neglected by many people: health and free time." In the Naqshbandi path, every minute of leisure is seized for silent heart remembrance.'
        ]
      }
    ],
    relatedArticleIds: ['wuquf-zamani', 'worship-in-youth', 'gratitude-to-the-lord']
  },
  {
    id: 'companionship-more-beneficial-than-efforts',
    title: 'The Companionship of the Shaykh Is More Beneficial Than Making Spiritual Efforts',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'Why one hour with an authentic guide achieves what decades of solitary struggle cannot',
    arabicTitle: 'فَضْلُ صُحْبَةِ الشَّيْخِ عَلَى الْمُجَاهَدَاتِ الْمُنْفَرِدَةِ',
    readTime: '8 min read',
    summary: 'Solitary effort often feeds subtle pride, while the master’s gaze directly melts the ego and transmits spiritual absorption.',
    sections: [
      {
        heading: 'Direct Heart-to-Heart Alchemy',
        paragraphs: [
          'Imam Rabbani notes that when an untrained seeker attempts extreme solitary fasts, their ego secretly congratulates them on being righteous. In the companionship of the master, the ego is starved of admiration and directly cleansed by the Sheikh’s Tawajjuh.'
        ]
      }
    ],
    relatedArticleIds: ['companionship-of-a-sheikh', 'rabitah-al-shaykh', 'love-for-the-shaykh']
  },
  {
    id: 'contemplation-and-spiritual-connection',
    title: 'Contemplation and Spiritual Connection with the Shaykh',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'The inner mechanics of Muraqabah and heart-to-heart alignment',
    arabicTitle: 'التَّأَمُّلُ وَالِاتِّصَالُ الْبَاطِنِيُّ بِالشَّيْخِ',
    readTime: '7 min read',
    summary: 'How mental stillness and reverent recollection of the Murshid bridge distance and channel divine tranquility.',
    sections: [
      {
        heading: 'Overcoming Physical Separation',
        paragraphs: [
          'Physical distance is irrelevant in the realm of spirits. When the disciple turns their heart in sincere love toward their guide, the spiritual light flows immediately without barrier.'
        ]
      }
    ],
    relatedArticleIds: ['rabitah-al-shaykh', 'dhikr-meditation-circles', 'love-for-the-shaykh']
  },
  {
    id: 'spiritual-sweetness-not-essential',
    title: 'Spiritual Sweetness Is Not Essential',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'Steadfast worship during periods of spiritual dryness and contraction (Qabd)',
    arabicTitle: 'عَدَمُ اشْتِرَاطِ حَلَاوَةِ الْحَالِ الرُّوحِيِّ',
    readTime: '8 min read',
    summary: 'A crucial consolation for seekers: feeling dryness in worship is often a divine test to purify intention from seeking emotional highs.',
    sections: [
      {
        heading: 'Worshiping Allah, Not Good Feelings',
        paragraphs: [
          'Many seekers mistakenly panic when the sweet ecstasy of early days subsides into spiritual dryness (Qabd). The masters teach that persisting in prayer during periods of dryness is more sincere, because you are worshiping Allah purely for His sake, not for your own emotional pleasure.'
        ]
      }
    ],
    relatedArticleIds: ['perseverance-in-dhikr', 'baz-gasht', 'key-means-of-attaining-closeness']
  },
  {
    id: 'dhikr-is-vast-and-encompassing',
    title: 'Dhikr Is Vast and All-Encompassing',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'How every act performed for Allah’s sake constitutes living remembrance',
    arabicTitle: 'سَعَةُ مَفْهُومِ الذِّكْرِ فِي الْإِسْلَامِ',
    readTime: '7 min read',
    summary: 'Expanding the definition of Dhikr: lawful trading, caring for one’s family, seeking knowledge, and smiling with kindness are all forms of remembrance.',
    sections: [
      {
        heading: 'Life as a Living Sanctuary',
        paragraphs: [
          'Whenever you choose honesty over deceit because of Allah, you have remembered Him. Whenever you restrain anger because of Allah, you have remembered Him. Dhikr encompasses all of life.'
        ]
      }
    ],
    relatedArticleIds: ['khalwat-dar-anjuman', 'outwardly-well-mannered', 'following-the-sunnah']
  },
  {
    id: 'outwardly-well-mannered',
    title: 'Outwardly Well-Mannered, Inwardly Devoted to God',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'The noble balance of social excellence and divine contemplation',
    arabicTitle: 'حُسْنُ الْخُلُقِ مَعَ الْخَلْقِ وَدَوَامُ الصِّلَةِ بِالْحَقِّ',
    readTime: '7 min read',
    summary: 'The Naqshbandi traveler never displays sullen detachment or spiritual pride; they bring warmth and joy to all people while keeping their secret with Allah.',
    sections: [
      {
        heading: 'The Mask of Ordinary Dignity',
        paragraphs: [
          'The perfected gnostic wears the clothing of regular people, speaks with gentle clarity, and treats every creation with compassion. No one guessing from their exterior would know that their heart is ablaze with the love of Allah.'
        ]
      }
    ],
    relatedArticleIds: ['khalwat-dar-anjuman', 'attributes-of-beloveds-beloved', 'virtue-of-companionship-naqshbandi-masters']
  },
  {
    id: 'virtue-of-companionship-naqshbandi-masters',
    title: 'The Virtue of the Companionship of the Naqshbandī Masters',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'Historical testimonies to the transformative aura of the masters of this golden chain',
    arabicTitle: 'فَضَائِلُ صُحْبَةِ سَادَاتِ النَّقْشَبَنْدِيَّةِ',
    readTime: '8 min read',
    summary: 'The testimony of scholars throughout the centuries regarding the unique spiritual efficacy and sober guidance of the Naqshbandi guides.',
    sections: [
      {
        heading: 'Scholars Flocking to the Feet of Saints',
        paragraphs: [
          'From Bukhara to Delhi and Damascus, the greatest jurists and hadith masters humbled themselves before Naqshbandi saints to seek the illumination of their inner faculties.'
        ]
      }
    ],
    relatedArticleIds: ['superiority-of-naqshbandi-way', 'companionship-of-a-sheikh', 'teachings-of-naqshbandi-sheikhs']
  },
  {
    id: 'only-following-sunnah-benefits',
    title: 'Only Following the Sunnah Will Benefit in the End',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'The ultimate reality awaiting every soul beyond the veil of this world',
    arabicTitle: 'لَنْ يَنْفَعَ فِي الْعَاقِبَةِ إِلَّا اتِّبَاعُ السُّنَّةِ',
    readTime: '7 min read',
    summary: 'All human philosophies, claims, and worldly titles evaporate in the grave; only actions molded upon the Prophetic Sunnah bear fruit.',
    sections: [
      {
        heading: 'The Final Weighing',
        paragraphs: [
          'When we stand before the Lord of Majesty, no innovation or worldly vanity will be accepted. Only what was done according to the Sunnah of Muhammad (S.A.W.) will carry weight upon the Scales.'
        ]
      }
    ],
    relatedArticleIds: ['following-the-sunnah', 'path-to-salvation', 'distinctive-feature-naqshbandi-path']
  },
  {
    id: 'creed-of-ahl-al-sunnah',
    title: 'The Creed of Ahl al-Sunnah wa’l-Jamā‘ah',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'The orthodox doctrinal fortress upon which authentic spirituality is erected',
    arabicTitle: 'عَقِيدَةُ أَهْلِ السُّنَّةِ وَالْجَمَاعَةِ',
    readTime: '8 min read',
    summary: 'Imam Rabbani’s steadfast defense of orthodox Sunni theology (Maturidi and Ash’ari) as the indispensable prerequisite for true Sufism.',
    sections: [
      {
        heading: 'Sound Belief Precedes Spiritual Practice',
        paragraphs: [
          'If a person spends their entire life in asceticism but harbors deviations in basic Islamic creed regarding Allah’s attributes, the prophets, or the noble Companions, their efforts are entirely in vain. The Naqshbandi path is built squarely upon pristine orthodoxy.'
        ]
      }
    ],
    relatedArticleIds: ['path-to-salvation', 'components-of-shariah', 'tariqah-and-shariah']
  },
  {
    id: 'love-for-the-shaykh',
    title: 'Love for the Shaykh',
    category: 'Maktubat Shareef',
    categorySlug: 'maktubat-shareef',
    subtitle: 'The golden bridge carrying the disciple across the turbulent sea of selfhood',
    arabicTitle: 'مَحَبَّةُ الشَّيْخِ وَآدَابُهَا',
    readTime: '7 min read',
    summary: 'Spiritual love for the guide is not worship; it is the natural affinity that dissolves resistance and opens the heart to divine light.',
    sections: [
      {
        heading: 'The Vehicle of Annihilation in the Master (Fana fi ash-Shaykh)',
        paragraphs: [
          'Through sincere, respectful love for the Shaykh, the disciple naturally adopts his manners, his piety, and his love for the Prophet (S.A.W.). This leads sequentially to Fana fi ar-Rasul and ultimately to Fana fillah (Annihilation in the Divine).'
        ]
      }
    ],
    relatedArticleIds: ['rabitah-al-shaykh', 'companionship-of-a-sheikh', 'connection-with-sheikh']
  },

  // ==========================================
  // 5. LESSONS & GUIDANCE
  // ==========================================
  {
    id: 'lessons-of-naqshbandi-order',
    title: 'The Lessons of the Naqshbandi Order',
    category: 'Lessons & Guidance',
    categorySlug: 'lessons-and-guidance',
    subtitle: 'The systematic stages of internal awakening: the subtle spiritual centers (Lata’if)',
    arabicTitle: 'دُرُوسُ السِّلْسِلَةِ النَّقْشَبَنْدِيَّةِ وَاللَّطَائِفُ الْعَشْرُ',
    readTime: '10 min read',
    summary: 'A structured overview of the spiritual curriculum: awakening the five heavenly centers of the Heart (Qalb, Ruh, Sirr, Khafi, Akhfa), the Nafs, and the physical elements.',
    sections: [
      {
        heading: 'The Ten Subtle Centers (Lata’if)',
        paragraphs: [
          'In the Naqshbandi Mujaddidi curriculum, human reality consists of ten subtle points of consciousness (Lata’if): five originating from the World of Command (Alam al-Amr) and five from the World of Creation (Alam al-Khalq).',
          '1. Latifah Qalb (The Heart) — Located two fingers below the left breast. Associated with Adam (A.S.) and yellow light. Its virtue is peace and liberation from heedlessness.',
          '2. Latifah Ruh (The Spirit) — Located two fingers below the right breast. Associated with Ibrahim and Nuh (A.S.) and red light. Its virtue is love and longing for the Divine.',
          '3. Latifah Sirr (The Secret) — Located two fingers above the left breast toward the middle. Associated with Musa (A.S.) and white light. Its virtue is contemplation and spiritual witnessing.',
          '4. Latifah Khafi (The Hidden) — Located two fingers above the right breast toward the middle. Associated with Isa (A.S.) and black light. Its virtue is divine presence and awe.',
          '5. Latifah Akhfa (The Most Hidden) — Located directly in the center of the chest. Associated with the Prophet Muhammad (S.A.W.) and green light. Its virtue is total intimacy and realization of Oneness.'
        ]
      },
      {
        heading: 'The World of Creation',
        paragraphs: [
          'Following the purification of the five Lata’if of Alam al-Amr, the master directs spiritual Tawajjuh upon the Latifah Nafs (located between the eyebrows or at the navel), transforming it from the commanding self (Nafs Ammarah) into the serene, contented self (Nafs Mutma’innah), followed by spiritualization of the physical elements (Earth, Water, Fire, Air).'
        ]
      }
    ],
    relatedArticleIds: ['connection-with-sheikh', 'zikr-e-qalbi', 'method-of-remembering-allah']
  },
  {
    id: 'connection-with-sheikh',
    title: 'Connection with the Sheikh',
    category: 'Lessons & Guidance',
    categorySlug: 'lessons-and-guidance',
    subtitle: 'Maintaining constant inner communication and seeking spiritual focus from the master',
    arabicTitle: 'الِاتِّصَالُ الرُّوحِيُّ بِالْمُرْشِدِ',
    readTime: '7 min read',
    summary: 'Practical guidance on keeping one’s heart turned towards the guide during daily tasks and in times of trial.',
    sections: [
      {
        heading: 'The Unbroken Spiritual Ray',
        paragraphs: [
          'A true disciple does not restrict their connection to physical visits. In prayer, in hardship, and in spiritual practice, they remember their master, visualizing their heart receiving Faiz from the Sheikh’s heart, which in turn receives from the Prophet (S.A.W.).'
        ]
      }
    ],
    relatedArticleIds: ['rabitah-al-shaykh', 'love-for-the-shaykh', 'lessons-of-naqshbandi-order']
  },
  {
    id: 'some-specific-khatams',
    title: 'Some Specific Khatams',
    category: 'Lessons & Guidance',
    categorySlug: 'lessons-and-guidance',
    subtitle: 'Prescribed spiritual recitations and litanies for general spiritual upliftment and protection',
    arabicTitle: 'أَدْعِيَةٌ وَأَوْرَادٌ خَاصَّةٌ',
    readTime: '8 min read',
    summary: 'Authorized litanies passed down through the Naqshbandi Mujaddidi line for relief from grief, seeking forgiveness, and spiritual blessings.',
    sections: [
      {
        heading: 'The Treasury of Prophetic Prayers',
        paragraphs: [
          'The masters have designated specific formulas of Durood Shareef (Salawat), Istighfar, and Qur’anic surahs (such as Surah Ya-Sin and Surah Al-Mulk) to be recited with specific counts for spiritual shielding and illumination of the home.'
        ]
      }
    ],
    relatedArticleIds: ['naqshbandi-khatm-e-khawajgan', 'lessons-of-naqshbandi-order', 'perseverance-in-dhikr']
  },
  {
    id: 'naqshbandi-khatm-e-khawajgan',
    title: 'The Naqshbandi Khatm-e-Khawajgan for Resolving Difficulties',
    category: 'Lessons & Guidance',
    categorySlug: 'lessons-and-guidance',
    subtitle: 'The traditional congregational litany of the Naqshbandi masters for alleviating distress',
    arabicTitle: 'خَتْمُ الْخَوَاجَگَانِ لِتَفْرِيجِ الْكُرُوبِ',
    readTime: '9 min read',
    summary: 'The classical sequence of Khatm-e-Khawajgan: Salawat, Surah Al-Inshirah, Surah Al-Ikhlas, and heartfelt supplication for the removal of all distress and difficulty.',
    sections: [
      {
        heading: 'The Tradition of Khatm-e-Khawajgan',
        paragraphs: [
          'Dating back to Khwaja Abdul Khaliq Ghijdwani and Shah Bahauddin Naqshband, Khatm-e-Khawajgan is one of the most celebrated corporate spiritual practices of the order. When communities face hardship, illness, or trials, gathering for this litany brings swift divine ease.'
        ],
        bulletPoints: [
          'Recitation of Durood Shareef (Salawat) upon the Prophet (S.A.W.).',
          'Recitation of Surah Al-Inshirah (Alam Nashrah) 360 or 79 times.',
          'Recitation of Surah Al-Ikhlas (Qul Huwa Allahu Ahad) 1,001 times.',
          'Concluding Durood Shareef followed by sincere collective Dua seeking Allah’s relief through the spiritual intercession of the righteous masters.'
        ]
      }
    ],
    relatedArticleIds: ['some-specific-khatams', 'lessons-of-naqshbandi-order', 'dhikr-meditation-circles']
  }
];
