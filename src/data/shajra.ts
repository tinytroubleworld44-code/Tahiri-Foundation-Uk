export interface ShajraNode {
  number: number;
  name: string;
  arabicName?: string;
  title?: string;
  era?: string;
  restingPlace?: string;
  description?: string;
}

export const SHAJRA_AUTHOR = "Hadhrat Khwaja Muhammad Tahir Abbasi Naqshbandi alias Mahboob Sajjan Saeen";
export const SHAJRA_TRANSLATOR = "Abdul Rahim Nizamani";
export const SHAJRA_INTRO = "The blessed spiritual genealogy of the Shaikhs of Naqshbandi Mujaddidi Tahiri tariqah.";
export const SHAJRA_HONORIFICS = "S.A.W: Sallalah-u-Alaih-i-wasallam (Peace and Blessings of Allah be upon him)\nR.A: Radi Allahu Ta'ala Anhu (May Allah be pleased with him)\nRah.: Rahmatullah Alayh (May Allah's mercy be upon him)\nM.A.: Maddazilluhul Aali (May his exalted shade be prolonged)";

export const SHAJRA_CHAIN: ShajraNode[] = [
  {
    number: 1,
    name: "Sayyiduna Muhammad al-Mustafa",
    arabicName: "سَيِّدُنَا مُحَمَّدٌ الْمُصْطَفَى صَلَّى اللّٰهُ عَلَيْهِ وَسَلَّمَ",
    title: "Khatam an-Nabiyyin, Habibullah",
    restingPlace: "Al-Madinah al-Munawwarah",
    description: "The Seal of the Prophets, Mercy unto the worlds, from whom all spiritual light and Divine gnosis emanate directly to the hearts of the seekers."
  },
  {
    number: 2,
    name: "Hadhrat Abu Bakr as-Siddiq",
    arabicName: "سَيِّدُنَا أَبُو بَكْرٍ الصِّدِّيقُ رَضِيَ اللّٰهُ عَنْهُ",
    title: "Siddiq-e-Akbar, Afdal al-Bashar ba'd al-Anbiya",
    restingPlace: "Al-Madinah al-Munawwarah",
    description: "The closest companion and foremost in truthfulness, who received the hidden, silent remembrance (Zikr-e-Khafi) inside the Cave of Thawr from the Prophet (S.A.W)."
  },
  {
    number: 3,
    name: "Hadhrat Salman al-Farsi",
    arabicName: "سَيِّدُنَا سَلْمَانُ الْفَارِسِيُّ رَضِيَ اللّٰهُ عَنْهُ",
    title: "Min Ahl al-Bayt, The Seeker of Divine Truth",
    restingPlace: "Mada'in, Iraq",
    description: "Endowed with spiritual lineage directly into the Prophet's household, linking the Persian and Arab seekers in profound inner discipline."
  },
  {
    number: 4,
    name: "Hadhrat Qasim bin Muhammad bin Abi Bakr",
    arabicName: "الْإِمَامُ الْقَاسِمُ بْنُ مُحَمَّدِ بْنِ أَبِي بَكْرٍ رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "One of the Seven Jurists of Madinah (Fuqaha Sab'ah)",
    restingPlace: "Al-Qudayd, near Makkah",
    description: "The grandson of Siddiq-e-Akbar and nephew of Sayyidah Aisha (R.A.), carrying both external mastery of sacred law and inner transmission of spiritual purity."
  },
  {
    number: 5,
    name: "Imam Ja'far as-Sadiq",
    arabicName: "الْإِمَامُ جَعْفَرُ الصَّادِقُ رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Imam of the Ahl al-Bayt, Crown of Gnostics",
    restingPlace: "Jannat al-Baqi, Madinah",
    description: "Great-grandson of Imam Husayn and maternal descendant of Abu Bakr as-Siddiq, uniting the prophetic household and the Siddiqi path of silent illumination."
  },
  {
    number: 6,
    name: "Hadhrat Sultan Bayazid al-Bistami",
    arabicName: "سُلْطَانُ الْعَارِفِينَ أَبُو يَزِيدَ الْبِسْطَامِيُّ رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Sultan al-Arifin (Sultan of the Gnostics)",
    restingPlace: "Bistam, Iran",
    description: "Renowned for supreme spiritual ecstasy, complete annihilation in Allah (Fana), and deep adherence to the inner realities of Tawhid."
  },
  {
    number: 7,
    name: "Khwaja Abul Hasan al-Khirqani",
    arabicName: "الشَّيْخُ أَبُو الْحَسَنِ الْخِرْقَانِيُّ رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Ghawth of His Time, Qutb al-Awliya",
    restingPlace: "Khirqan, Iran",
    description: "The spiritual inheritor connected through Uwaysi transmission, famed for profound humility, divine love, and self-effacement."
  },
  {
    number: 8,
    name: "Khwaja Abul Qasim Gurgani",
    arabicName: "الشَّيْخُ أَبُو الْقَاسِمِ الْگُرْگَانِيُّ رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Master of Spiritual Horizons",
    restingPlace: "Gurgan, Iran",
    description: "Guide of many illustrious saints and an anchor of the golden chain during the transition toward Central Asia."
  },
  {
    number: 9,
    name: "Khwaja Abu Ali al-Farmadi",
    arabicName: "الشَّيْخُ أَبُو عَلِيٍّ الْفَارْمَدِيُّ رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Lisan al-Waqt (Spokesman of the Era)",
    restingPlace: "Farmad, Tus (Khorasan)",
    description: "Spiritual master of Hujjat al-Islam Imam Abu Hamid al-Ghazali, renowned for blending scholastic mastery with profound spiritual realization."
  },
  {
    number: 10,
    name: "Khwaja Abu Yaqub Yusuf al-Hamadani",
    arabicName: "الْخَوَاجَه يُوسُفُ الْهَمَدَانِيُّ رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Ka'ba of Khorasan, Pillar of the Path",
    restingPlace: "Marv (Turkmenistan)",
    description: "The great saint from whom four primary branches branched out, including the predecessors of Khwaja Bahauddin Naqshband and Khwaja Ahmad Yasawi."
  },
  {
    number: 11,
    name: "Khwaja Abdul Khaliq Ghijdwani",
    arabicName: "الْخَوَاجَه عَبْدُ الْخَالِقِ الْغُجْدُوَانِيُّ رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Imam of the Khwajagan, Reviver of Silent Dhikr",
    restingPlace: "Ghijdwan, Bukhara",
    description: "Formulated the foundational eight sacred principles of the Naqshbandi path (such as Hosh Dar Dam, Nazar Bar Qadam, and Safar Dar Watan) by guidance from Khidr (A.S.)."
  },
  {
    number: 12,
    name: "Khwaja Arif Riwgari",
    arabicName: "الْخَوَاجَه عَارِفُ الرِّيْوَگَرِي رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Master of Divine Luminosity",
    restingPlace: "Riwgar, Bukhara",
    description: "Foremost disciple of Ghijdwani who maintained the strict adherence to silent remembrance and upright Sunnah practice."
  },
  {
    number: 13,
    name: "Khwaja Mahmood Anjir Faghnawi",
    arabicName: "الْخَوَاجَه مَحْمُود أَنْجِير فَغْنَوِي رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Pillar of Guidance",
    restingPlace: "Wabkent, Bukhara",
    description: "Celebrated for spiritual generosity, awakening the slumbering hearts of the seekers through sincere devotion."
  },
  {
    number: 14,
    name: "Khwaja Ali Ramitani",
    arabicName: "الْخَوَاجَه عَلِي الرَّامِيتَنِي (حَضْرَت عَزِيزَان) رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Hadhrat Azizan",
    restingPlace: "Khwarezm (Uzbekistan)",
    description: "Beloved weaver and master known for immense spiritual authority, teaching that real spiritual effort is to keep the heart with Allah while hands work in lawful livelihood."
  },
  {
    number: 15,
    name: "Khwaja Muhammad Baba as-Sammasi",
    arabicName: "الْخَوَاجَه مُحَمَّد بَابَا السَّمَّاسِي رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "The Seer of Bukhara",
    restingPlace: "Sammas, Bukhara",
    description: "Forefather of the masters who prophesied the birth and arrival of Shah Bahauddin Naqshband when passing through the village of Qasr-e-Hinduran."
  },
  {
    number: 16,
    name: "Sayyid Amir Kulal",
    arabicName: "السَّيِّدُ أَمِيرُ كُلَال رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Shaykh of the Masters, As-Sayyid",
    restingPlace: "Sukhari, Bukhara",
    description: "Direct spiritual preceptor of Shah Naqshband, famous for wrestling physical ego into absolute spiritual submission."
  },
  {
    number: 17,
    name: "Khwaja Bahauddin Naqshband",
    arabicName: "الْإِمَامُ خَوَاجَه بَهَاءُ الدِّينِ النَّقْشَبَنْدِ الْبُخَارِيّ رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Imam-ut-Tariqah, Shah-e-Naqshband",
    restingPlace: "Qasr-e-Arifan, Bukhara (Uzbekistan)",
    description: "The eponym of the Naqshbandi Tariqah who inscribed the Divine Name upon hearts ('Naqsh-band'). He added the final three principles (Wuquf Zamani, Wuquf Adadi, Wuquf Qalbi), perfecting the eleven principles."
  },
  {
    number: 18,
    name: "Khwaja Ala'uddin Attar",
    arabicName: "الْخَوَاجَه عَلَاءُ الدِّينِ الْعَطَّار رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Qutb al-Irshad, Successor of Shah Naqshband",
    restingPlace: "Chaghaniyan, Denov (Uzbekistan)",
    description: "Son-in-law and premier inheritor of Shah Naqshband, praised for rapidly raising seekers to the station of spiritual absorption."
  },
  {
    number: 19,
    name: "Hadhrat Yaqub al-Charkhi",
    arabicName: "الْخَوَاجَه يَعْقُوبُ الْجَرْخِي رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Mufassir of the Quran, Master of Knowledge",
    restingPlace: "Halatu, near Dushanbe (Tajikistan)",
    description: "Eminent scholar of hadith and Quranic exegesis who authored classical expositions on the spiritual path and guided Khwaja Ubaidullah Ahrar."
  },
  {
    number: 20,
    name: "Khwaja Ubaidullah Ahrar",
    arabicName: "حَضْرَت خَوَاجَه عُبَيْدُ اللّٰهِ أَحْرَار رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Nasir al-Din, Master of Central Asia",
    restingPlace: "Samarkand (Uzbekistan)",
    description: "A transformative statesman and spiritual titan who harnessed political influence to establish justice, protect the weak, and enforce the Sunnah across kingdoms."
  },
  {
    number: 21,
    name: "Hadhrat Muhammad Zahid Wakhshi",
    arabicName: "الْخَوَاجَه مُحَمَّد زَاهِد الْوَخْشِي رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "The Ascetic of Wakhsh",
    restingPlace: "Wakhsh (Tajikistan)",
    description: "Renowned for rigorous ascetic discipline, immense piety, and absolute contentment with Divine Decree."
  },
  {
    number: 22,
    name: "Shaikh Durvesh Muhammad",
    arabicName: "الشَّيْخُ دَرْوِيش مُحَمَّد رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Pillar of Spiritual Diligence",
    restingPlace: "Askarar, Samarkand",
    description: "Maternal nephew of Muhammad Zahid, persevered through years of spiritual solitude until achieving full realization."
  },
  {
    number: 23,
    name: "Khwaja Muhammad Amkanki",
    arabicName: "الْخَوَاجَه مُحَمَّد الْأَمْكَنَگِي رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Ghawth of Amkana",
    restingPlace: "Amkana, Bukhara",
    description: "Blessed teacher who dispatched his leading disciple Khwaja Baqi Billah to India with the prophecy that the Divine Light would illuminate the subcontinent."
  },
  {
    number: 24,
    name: "Khwaja Muhammad Baqi Billah",
    arabicName: "الْخَوَاجَه مُحَمَّد بَاقِي بِاللّٰه رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "The Illuminator of the Subcontinent",
    restingPlace: "Delhi, India",
    description: "Brought the exalted Naqshbandi Tariqah to India and recognized the peerless spiritual destiny of Shaikh Ahmad Sirhindi."
  },
  {
    number: 25,
    name: "Imam Rabbani Mujaddid Alf Thani",
    arabicName: "الْإِمَامُ الرَّبَّانِي أَحْمَدُ الْفَارُوقِي السِّرْهِنْدِي رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Mujaddid-e-Alf-e-Thani (Reviver of the Second Millennium)",
    restingPlace: "Sirhind Sharif, Punjab, India",
    description: "The great reviver who defeated heresy, stood fearlessly against Emperor Akbar's heterodoxy, authored the monumental Maktubat-e-Imam Rabbani, and unified Tariqah under the undisputed authority of Shari'ah."
  },
  {
    number: 26,
    name: "Hadhrat Khwaja Muhammad Masoom Faruqi",
    arabicName: "حَضْرَت خَوَاجَه مُحَمَّد مَعْصُوم الْفَارُوقِي رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Urwat-ul-Wuthqa (The Firm Handhold)",
    restingPlace: "Sirhind Sharif, India",
    description: "The fifth son and supreme spiritual heir of Mujaddid Alf Thani, under whose guidance hundreds of thousands attained perfection and nine hundred khalifas spread across the Islamic world."
  },
  {
    number: 27,
    name: "Shaikh Saifuddin Faruqi",
    arabicName: "الشَّيْخُ سَيْفُ الدِّينِ الْفَارُوقِي رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Sun of Guidance, Sword of Faith",
    restingPlace: "Sirhind Sharif, India",
    description: "Son of Khwaja Masoom, spiritual advisor to Emperor Aurangzeb Alamgir, who ensured the complete institutional enforcement of prophetic Sunnah."
  },
  {
    number: 28,
    name: "Hafiz Muhammad Mohsin Dehlavi"
  },
  {
    number: 29,
    name: "Hadhrat Sayyid Nur Muhammad Badayuni",
    arabicName: "حَضْرَت السَّيِّد نُور مُحَمَّد الْبَدَايُونِي رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Master of Pure Scrupulousness (Wara')",
    restingPlace: "Delhi, India",
    description: "Exemplar of ultimate legal scrupulousness and spiritual vigilance, whose light attracted seekers throughout the land."
  },
  {
    number: 30,
    name: "Mirza Mazhar Jan-e-Janan",
    arabicName: "الشَّيْخُ حَبِيبُ اللّٰهِ مِيرْزَا مَظْهَر جَانِ جَانَان رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Shaheed-e-Ishq (Martyr of Divine Love), Shamsuddin",
    restingPlace: "Delhi, India",
    description: "Eminent poet, master of spiritual aesthetics, strict adherent of the Sunnah who was martyred in Delhi, leaving four great spiritual deputies."
  },
  {
    number: 31,
    name: "Khwaja Shah Abdullah alias Ghulam Ali Dehlavi",
    arabicName: "حَضْرَت شَاه غُلَام عَلِي الدِّهْلَوِي رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Qutb al-Aqtab, The Light of Delhi",
    restingPlace: "Dargah Mirza Mazhar, Delhi, India",
    description: "Whose Khanqah attracted seekers from Baghdad, Damascus, Rum, and Samarkand. Spiritual preceptor of Mawlana Khalid al-Baghdadi."
  },
  {
    number: 32,
    name: "Khwaja Abu Saeed Faruqi Dehlavi",
    arabicName: "حَضْرَت خَوَاجَه أَبُو سَعِيد الشَّيْخ أَحْمَد الدِّهْلَوِي رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Inheritor of Sirhind",
    restingPlace: "Sirhind Sharif, India",
    description: "Successor of Shah Ghulam Ali who preserved the sacred teachings during turbulent eras in Delhi."
  },
  {
    number: 33,
    name: "Hadhrat Shah Ahmad Saeed Faruqi",
    arabicName: "حَضْرَت شَاه أَحْمَد سَعِيد الْفَارُوقِي رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Muhajir-e-Madinah, Beacon of Orthodoxy",
    restingPlace: "Jannat al-Baqi, Madinah",
    description: "Migrated to the holy city of Madinah al-Munawwarah after 1857, where he illuminated the sanctuary with the Mujaddidi teachings."
  },
  {
    number: 34,
    name: "Hadhrat Khwaja Dost Muhammad Qandahari",
    arabicName: "حَضْرَت خَوَاجَه دُوسْت مُحَمَّد الْقَنْدَهَارِي رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Founder of Khanqah Ahmadiyyah Sa'idiyyah",
    restingPlace: "Musazai Sharif, Dera Ismail Khan, Pakistan",
    description: "Established the grand spiritual center in Musazai Sharif which became the mother khanqah for the frontier lands and Sindh."
  },
  {
    number: 35,
    name: "Hadhrat Khwaja Muhammad Uthman Damani",
    arabicName: "حَضْرَت خَوَاجَه مُحَمَّد عُثْمَان الدَّامَانِي رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Ghawth-e-Zaman, Crown of Musazai",
    restingPlace: "Musazai Sharif, KPK, Pakistan",
    description: "Famed for immense spiritual absorption and producing hundreds of enlightened masters who spread throughout the Indus valley."
  },
  {
    number: 36,
    name: "Sayyad Laal Shah Hamdani"
  },
  {
    number: 37,
    name: "Hadhrat Khwaja Muhammad Sirajuddin",
    arabicName: "حَضْرَت خَوَاجَه مُحَمَّد سِرَاجُ الدِّينِ رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Pir Sirajuddin (Hadhrat Muhammad Laal)",
    restingPlace: "Musazai Sharif, KPK, Pakistan",
    description: "Beloved master of divine love and spiritual wisdom, who nurtured the next generation of revivalist guides."
  },
  {
    number: 38,
    name: "Hadhrat Khwaja Pir Fazal Ali Qureshi",
    arabicName: "حَضْرَت خَوَاجَه فِضْل عَلِي الْقُرَيْشِي رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Founder of Khanqah Faqirpur Sharif",
    restingPlace: "Miskeenpur Sharif, Muzaffargarh, Pakistan",
    description: "Revived the Naqshbandi way across Punjab and Sindh, emphasizing relentless adherence to Shari'ah and spreading Dhikr circles far and wide."
  },
  {
    number: 39,
    name: "Hadhrat Khwaja Muhammad Abdul Ghaffar (Pir Mitha Saeen)",
    arabicName: "حَضْرَت خَوَاجَه مُحَمَّد عَبْدُ الْغَفَّار (پِير مِٹّھَا سَائِیں) رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Pir Mitha Saeen",
    restingPlace: "Dargah Rahmatpur Sharif, Larkana, Sindh, Pakistan",
    description: "The beloved spiritual master of Sindh whose sweetness of character brought thousands into repentance, establishing widespread Zikr-e-Qalbi in every village and town."
  },
  {
    number: 40,
    name: "Hadhrat Khwaja Allah Bakhsh Abbasi (Huzoor Sohna Saeen)",
    arabicName: "حَضْرَت خَوَاجَه اللّٰه بَخْش عَبَّاسِي (سُوہݨَا سَائِیں) رَحْمَةُ اللّٰهِ عَلَيْهِ",
    title: "Huzoor Sohna Saeen",
    restingPlace: "Dargah Allahabad Sharif, Kandiaro, Sindh, Pakistan",
    description: "The illustrious founder of Dargah Allahabad Sharif and Jamaat Islahulmuslimeen. His life was an embodiment of the Prophetic Sunnah, spiritual warmth, compassion, and the revitalization of Sufi spirituality in our era."
  },
  {
    number: 41,
    name: "Hadhrat Khwaja Muhammad Tahir Abbasi Naqshbandi (Mahboob Sajjan Saeen)",
    arabicName: "حَضْرَت خَوَاجَه مُحَمَّد طَاهِر عَبَّاسِي نَقْشَبَنْدِي (مَحْبُوب سَجَّن سَائِیں) مَدَّ ظِلُّهُ الْعَالِي",
    title: "Mahboob Sajjan Saeen (Allah'Abadi)",
    restingPlace: "Living Master & Patron, Dargah Allahabad Sharif, Sindh",
    description: "The current guiding master of the Naqshbandi Mujaddidi Tahiri path, carrying forward the spiritual mission of Huzoor Sohna Saeen through extensive spiritual education, institutional social welfare, and spiritual guidance."
  }
];
