// Complete Bilingual Translation System for AVM Plastics
// English (en) and Tamil (ta) translations

export type Language = 'en' | 'ta';

export const translations = {
  // ─── HEADER / NAVBAR ───
  companyName: {
    en: "AVM PLASTICS",
    ta: "ஏவிஎம் பிளாஸ்டிக்ஸ்"
  },
  tagline: {
    en: "Trusted Since 1986",
    ta: "1986 முதல் நம்பிக்கையுடன்"
  },

  // Navigation Menu
  nav: {
    home: { en: "Home", ta: "முகப்பு" },
    about: { en: "About", ta: "எங்களைப் பற்றி" },
    products: { en: "Products", ta: "தயாரிப்புகள்" },
    leadership: { en: "Leadership", ta: "தலைமை" },
    gallery: { en: "Gallery", ta: "காட்சியகம்" },
    contact: { en: "Contact", ta: "தொடர்புகொள்ள" }
  },

  // ─── HERO SECTION ───
  hero: {
    badge: { en: "TRUSTED SINCE 1986", ta: "1986 முதல் நம்பிக்கையுடன்" },
    headingStart: {
      en: "Serving Homes, Farmers & Businesses For ",
      ta: "குடும்பங்கள், விவசாயிகள் மற்றும் வணிகர்களுக்கு "
    },
    headingHighlight: {
      en: "Nearly Four Decades",
      ta: "கிட்டத்தட்ட நான்கு தசாப்தங்களாக"
    },
    headingSuffix: {
      en: "",
      ta: " சேவை"
    },
    subheading: {
      en: "Krishnagiri's trusted destination for premium ropes, agriculture utility products, plastic goods and wholesale distribution since 1986.",
      ta: "1986 முதல் உயர்தர கயிறுகள், விவசாய பயன்பாட்டு பொருட்கள், பிளாஸ்டிக் பொருட்கள் மற்றும் மொத்த விற்பனைக்கான கிருஷ்ணகிரியின் நம்பகமான இடம்."
    },
    exploreProducts: { en: "Explore Products", ta: "தயாரிப்புகளை காண்க" },
    callNow: { en: "Call Now", ta: "இப்போது அழைக்கவும்" },
    getDirections: { en: "Get Directions", ta: "வழிகாட்டியை பெறுங்கள்" },
    credentialsTitle: { en: "AVM PLASTICS CREDENTIALS", ta: "ஏவிஎம் பிளாஸ்டிக்ஸ் தகுதிகள்" }
  },

  // Hero Credentials
  credentials: [
    {
      value: { en: "38+ Years", ta: "38+ ஆண்டுகள்" },
      label: { en: "Legacy Business", ta: "பாரம்பரிய வணிகம்" },
      desc: { en: "Serving quality since 1986", ta: "1986 முதல் தரமான சேவை" }
    },
    {
      value: { en: "10,000+", ta: "10,000+" },
      label: { en: "Customers Served", ta: "வாடிக்கையாளர்கள்" },
      desc: { en: "Wholesale & retail support", ta: "மொத்த மற்றும் சில்லறை ஆதரவு" }
    },
    {
      value: { en: "1,000+", ta: "1,000+" },
      label: { en: "Products Available", ta: "தயாரிப்புகள் உள்ளன" },
      desc: { en: "Large in-stock utility goods", ta: "பெரிய அளவிலான கையிருப்பு பொருட்கள்" }
    },
    {
      value: { en: "Tamil Nadu", ta: "தமிழ்நாடு" },
      label: { en: "Trusted Across", ta: "நம்பிக்கை பெற்றது" },
      desc: { en: "Deep agricultural roots", ta: "ஆழமான விவசாய வேர்கள்" }
    }
  ],

  // ─── TRUST CARDS (below hero) ───
  trustCards: [
    {
      title: { en: "Established 1986", ta: "1986 இல் நிறுவப்பட்டது" },
      desc: { en: "Nearly four decades of business integrity & trust.", ta: "கிட்டத்தட்ட நான்கு தசாப்த வணிக நேர்மை மற்றும் நம்பிக்கை." }
    },
    {
      title: { en: "Agriculture Utility Supplier", ta: "விவசாய பயன்பாட்டு பொருட்கள் சப்ளையர்" },
      desc: { en: "High-grade ropes & utility tools for farmers.", ta: "விவசாயிகளுக்கான உயர்தர கயிறுகள் மற்றும் பயன்பாட்டு கருவிகள்." }
    },
    {
      title: { en: "Wholesale Plastic Distributor", ta: "மொத்த பிளாஸ்டிக் விநியோகஸ்தர்" },
      desc: { en: "Serving retail markets across South India.", ta: "தென்னிந்தியா முழுவதும் சில்லறை சந்தைகளுக்கு சேவை." }
    },
    {
      title: { en: "Trusted Local Business", ta: "நம்பகமான உள்ளூர் வணிகம்" },
      desc: { en: "5-star reputation in Krishnagiri and beyond.", ta: "கிருஷ்ணகிரி மற்றும் அதற்கு அப்பாலும் 5-நட்சத்திர நற்பெயர்." }
    }
  ],

  // ─── ABOUT / FOUNDER SECTION ───
  about: {
    badge: { en: "Our Heritage & Foundation", ta: "எங்கள் பாரம்பரியம் மற்றும் அடித்தளம்" },
    heading: { en: "Four Decades of South Indian Business Excellence", ta: "தென்னிந்திய வணிக சிறப்பின் நான்கு தசாப்தங்கள்" },
    subheading: {
      en: "Established in 1986, AVM Plastics has been a pillar of commercial excellence and retail reliability in Krishnagiri, Tamil Nadu.",
      ta: "1986 இல் நிறுவப்பட்ட ஏவிஎம் பிளாஸ்டிக்ஸ், கிருஷ்ணகிரி, தமிழ்நாட்டில் வணிக சிறப்பு மற்றும் சில்லறை நம்பகத்தன்மையின் தூணாக விளங்குகிறது."
    },
    founderBadge: { en: "Founder", ta: "நிறுவனர்" },
    founderTitle: { en: "Former TNCSC Superintendent", ta: "முன்னாள் TNCSC கண்காணிப்பாளர்" },
    founderName: { en: "Mr. K. Arumugam", ta: "திரு. கே. ஆறுமுகம்" },
    founderSubtitle: { en: "Founder of AVM Plastics (1986)", ta: "ஏவிஎம் பிளாஸ்டிக்ஸ் நிறுவனர் (1986)" },
    founderQuote: {
      en: "\"Since 1986, AVM Plastics has been built on trust, discipline, and integrity. Every customer relationship is founded on honesty, fair pricing, and unwavering commitment. The trust of our customers is our greatest achievement and the legacy we proudly continue.\"",
      ta: "\"1986 முதல், ஏவிஎம் பிளாஸ்டிக்ஸ் நம்பிக்கை, ஒழுக்கம் மற்றும் நேர்மையின் அடிப்படையில் கட்டமைக்கப்பட்டுள்ளது. ஒவ்வொரு வாடிக்கையாளர் உறவும் நேர்மை, நியாயமான விலை மற்றும் உறுதியான அர்ப்பணிப்பின் அடிப்படையில் அமைந்துள்ளது. எங்கள் வாடிக்கையாளர்களின் நம்பிக்கையே எங்கள் மிகப்பெரிய சாதனையும், நாங்கள் பெருமையுடன் தொடர்கின்ற மரபும் ஆகும்.\""
    },
    founderSignName: { en: "— K. Arumugam", ta: "— கே. ஆறுமுகம்" },
    founderSignTitle: { en: "Founder", ta: "நிறுவனர்" }
  },

  // ─── LEADERSHIP / MD SECTION ───
  leadership: {
    badge: { en: "Active Leadership", ta: "செயலில் உள்ள தலைமை" },
    heading: { en: "Managing Director", ta: "நிர்வாக இயக்குநர்" },
    subheading: {
      en: "Driving technology and operations forward while maintaining our decades-long trust foundation.",
      ta: "எங்கள் பல தசாப்த நம்பிக்கை அடித்தளத்தைப் பேணிக்காத்தபடி தொழில்நுட்பத்தையும் செயல்பாடுகளையும் முன்னெடுத்துச் செல்கிறார்."
    },
    mdBadge: { en: "Managing Director", ta: "நிர்வாக இயக்குநர்" },
    mdName: { en: "Mr. Dhamodharan Arumugam", ta: "திரு. தாமோதரன் அருமுகம்" },
    mdSubtitle: { en: "Operations & Customer Relations", ta: "செயல்பாடுகள் மற்றும் வாடிக்கையாளர் உறவுகள்" },
    mdProverbTranslation: { en: "(Patience is greater than the ocean.)", ta: "(பொறுமை கடலினும் பெரிது.)" },
    mdQuote: {
      en: "\"Guided by our founder's values, we combine tradition with innovation to serve our customers better every day. Through continuous improvement, reliable service, and customer-focused growth, we remain committed to delivering quality, value, and trust across Tamil Nadu.\"",
      ta: "\"எங்கள் நிறுவனரின் மதிப்புகளால் வழிநடத்தப்பட்டு, ஒவ்வொரு நாளும் எங்கள் வாடிக்கையாளர்களுக்கு சிறப்பாக சேவை செய்ய பாரம்பரியத்தை புதுமையுடன் இணைக்கிறோம். தொடர்ச்சியான மேம்பாடு, நம்பகமான சேவை மற்றும் வாடிக்கையாளர் மையமான வளர்ச்சி மூலம், தமிழ்நாடு முழுவதும் தரம், மதிப்பு மற்றும் நம்பிக்கையை வழங்குவதில் உறுதியாக இருக்கிறோம்.\""
    },
    mdSignName: { en: "— Dhamodharan Arumugam", ta: "— தாமோதரன் அருமுகம்" },
    mdSignTitle: { en: "Managing Director", ta: "நிர்வாக இயக்குநர்" }
  },

  // ─── DIRECTOR SECTION ───
  director: {
    badge: { en: "Administration & Finance", ta: "நிர்வாகம் மற்றும் நிதி" },
    heading: { en: "Director – Administration & Finance", ta: "இயக்குநர் – நிர்வாகம் மற்றும் நிதி" },
    subheading: {
      en: "Spearheading administration, financial strategy, and long-term planning for sustainable business growth.",
      ta: "நிலையான வணிக வளர்ச்சிக்கான நிர்வாகம், நிதி உத்தி மற்றும் நீண்டகால திட்டமிடலை முன்னெடுக்கிறார்."
    },
    directorBadge: { en: "Director", ta: "இயக்குநர்" },
    directorDept: { en: "Administration & Finance", ta: "நிர்வாகம் மற்றும் நிதி" },
    directorName: { en: "Mrs. Anusha Dhamodharan", ta: "திருமதி. அனுஷா தாமோதரன்" },
    directorSubtitle: { en: "Administration, Finance & Strategic Planning", ta: "நிர்வாகம், நிதி மற்றும் மூலோபாய திட்டமிடல்" },
    directorQuote: {
      en: "\"Careful planning, financial discipline, and strategic decision-making are essential for sustainable growth. At AVM Plastics, we focus on responsible management, operational excellence, and long-term value creation while preserving the trust our customers have placed in us since 1986.\"",
      ta: "\"நிலையான வளர்ச்சிக்கு கவனமான திட்டமிடல், நிதி ஒழுக்கம் மற்றும் மூலோபாய முடிவெடுத்தல் இன்றியமையாதவை. ஏவிஎம் பிளாஸ்டிக்ஸில், 1986 முதல் எங்கள் வாடிக்கையாளர்கள் எங்களிடம் வைத்திருக்கும் நம்பிக்கையைப் பாதுகாப்பதுடன், பொறுப்பான நிர்வாகம், செயல்பாட்டு சிறப்பு மற்றும் நீண்டகால மதிப்பு உருவாக்கத்தில் கவனம் செலுத்துகிறோம்.\""
    },
    directorSignName: { en: "— Mrs. Anusha Dhamodharan", ta: "— திருமதி. அனுஷா தாமோதரன்" },
    directorSignTitle: { en: "Director – Administration & Finance", ta: "இயக்குநர் – நிர்வாகம் மற்றும் நிதி" }
  },

  // ─── PRODUCTS SECTION ───
  products: {
    badge: { en: "Wholesale Inventory", ta: "மொத்த விற்பனை கையிருப்பு" },
    heading: { en: "Premium Product Collections", ta: "உயர்தர தயாரிப்பு தொகுப்புகள்" },
    subheading: {
      en: "We maintain massive stock categories for instant wholesale supply and heavy-duty utility applications.",
      ta: "உடனடி மொத்த விற்பனை மற்றும் கனரக பயன்பாட்டு தேவைகளுக்கான பெரும் கையிருப்பு வகைகளை நாங்கள் பராமரிக்கிறோம்."
    },
    premiumQuality: { en: "Premium Quality", ta: "உயர்தரம்" },
    learnDetails: { en: "Learn Details", ta: "விவரங்களை அறிக" }
  },

  // Product Categories
  categories: [
    {
      id: "household",
      title: { en: "Household Products", ta: "வீட்டு உபயோகப் பொருட்கள்" },
      desc: {
        en: "Premium plastic organizers, kitchenware, dining accessories, and daily utilities.",
        ta: "உயர்தர பிளாஸ்டிக் ஒழுங்குபடுத்திகள், சமையலறை பொருட்கள், சாப்பாட்டு துணைக்கருவிகள் மற்றும் அன்றாட பயன்பாட்டு பொருட்கள்."
      },
      details: {
        en: "Our household collection features food-grade containers, elegant organizers, dishware, and functional home storage solutions designed to last for years. We source from the country's leading manufacturers to guarantee durability and safety.",
        ta: "எங்கள் வீட்டு உபயோகப் பொருட்கள் தொகுப்பில் உணவு-தர கொள்கலன்கள், நேர்த்தியான ஒழுங்குபடுத்திகள், பாத்திரங்கள் மற்றும் நீண்ட ஆண்டுகள் நீடிக்கும் வகையில் வடிவமைக்கப்பட்ட செயல்பாட்டு வீட்டு சேமிப்பு தீர்வுகள் உள்ளன. நீடித்த தன்மை மற்றும் பாதுகாப்பை உறுதிப்படுத்த நாட்டின் முன்னணி உற்பத்தியாளர்களிடமிருந்து பொருட்களை பெறுகிறோம்."
      }
    },
    {
      id: "brooms",
      title: { en: "Brooms & Mops", ta: "விளக்குமாறுகள் மற்றும் துடைப்பான்கள்" },
      desc: {
        en: "High-density clean utilities, soft & hard brooms, premium cotton mops, and dusters.",
        ta: "அதிக அடர்த்தியான சுத்தம் செய்யும் பொருட்கள், மென்மையான மற்றும் கடினமான விளக்குமாறுகள், உயர்தர பருத்தி துடைப்பான்கள் மற்றும் தூசி தட்டிகள்."
      },
      details: {
        en: "Designed for commercial, household, and industrial cleaning. Our brooms and mops are built with premium materials to ensure high durability, efficient dust trapping, and comfortable ergonomics.",
        ta: "வணிக, வீட்டு மற்றும் தொழிற்சாலை சுத்தம் செய்வதற்காக வடிவமைக்கப்பட்டவை. எங்கள் விளக்குமாறுகள் மற்றும் துடைப்பான்கள் உயர்தர நீடித்த தன்மை, திறமையான தூசி பிடிப்பு மற்றும் வசதியான பயன்பாட்டை உறுதிப்படுத்த உயர்தரப் பொருட்களால் தயாரிக்கப்படுகின்றன."
      }
    },
    {
      id: "buckets",
      title: { en: "Buckets & Storage", ta: "வாளிகள் மற்றும் சேமிப்பு" },
      desc: {
        en: "Heavy-duty plastic buckets, basins, mugs, dustbins, and commercial storage drums.",
        ta: "கனரக பிளாஸ்டிக் வாளிகள், தொட்டிகள், குவளைகள், குப்பை தொட்டிகள் மற்றும் வணிக சேமிப்பு டிரம்கள்."
      },
      details: {
        en: "From standard 10L household buckets to 200L commercial water drums, our storage range handles high loads and weather extremes. Perfect for homes, construction sites, and warehouses.",
        ta: "நிலையான 10 லிட்டர் வீட்டு வாளிகள் முதல் 200 லிட்டர் வணிக தண்ணீர் டிரம்கள் வரை, எங்கள் சேமிப்பு வரிசை அதிக சுமைகள் மற்றும் தீவிர வானிலை நிலைகளை சமாளிக்கும். வீடுகள், கட்டுமான தளங்கள் மற்றும் கிடங்குகளுக்கு ஏற்றது."
      }
    },
    {
      id: "borewell",
      title: { en: "Borewell Ropes", ta: "போர்வெல் கயிறுகள்" },
      desc: {
        en: "Ultra-tensile strength borewell safety ropes, nylon hoisting cords, and braided cables.",
        ta: "மிக உயர் இழுவிசை போர்வெல் பாதுகாப்பு கயிறுகள், நைலான் தூக்கும் கயிறுகள் மற்றும் பின்னப்பட்ட கேபிள்கள்."
      },
      details: {
        en: "Specially treated ropes designed to support heavy submersible pumps in deep borewells. Resists moisture, chemical corrosion, and high friction, ensuring decades of safe deployment.",
        ta: "ஆழமான போர்வெல்களில் கனமான நீர்மூழ்கி பம்புகளை ஆதரிக்க வடிவமைக்கப்பட்ட சிறப்பு சிகிச்சை செய்யப்பட்ட கயிறுகள். ஈரப்பதம், ரசாயன அரிப்பு மற்றும் அதிக உராய்வை எதிர்க்கும், பல தசாப்தங்களுக்கு பாதுகாப்பான பயன்பாட்டை உறுதிப்படுத்துகிறது."
      }
    },
    {
      id: "nandi",
      title: { en: "Nandi Brand Ropes", ta: "நந்தி பிராண்ட் கயிறுகள்" },
      desc: {
        en: "Flagship premium ropes, weather-resistant polymer ropes, and heavy hauling cables.",
        ta: "முதன்மை உயர்தர கயிறுகள், வானிலை எதிர்ப்பு பாலிமர் கயிறுகள் மற்றும் கனரக இழுவை கேபிள்கள்."
      },
      details: {
        en: "Authorized dealer of Nandi ropes - the industry standard for durability, tight weave, and tear resistance. Trusted by logistic companies and heavy contractors across South India.",
        ta: "நந்தி கயிறுகளின் அங்கீகரிக்கப்பட்ட விநியோகஸ்தர் - நீடித்த தன்மை, இறுக்கமான பின்னல் மற்றும் கிழிப்பு எதிர்ப்புக்கான தொழில்துறை தரநிலை. தென்னிந்தியா முழுவதும் தளவாட நிறுவனங்கள் மற்றும் கனரக ஒப்பந்தக்காரர்களால் நம்பப்படுகிறது."
      }
    },
    {
      id: "agriculture",
      title: { en: "Agriculture Utility Ropes", ta: "விவசாய பயன்பாட்டு கயிறுகள்" },
      desc: {
        en: "High-grade HDPE ropes, crop binding threads, and tractor pulling cables.",
        ta: "உயர்தர HDPE கயிறுகள், பயிர் கட்டும் நூல்கள் மற்றும் டிராக்டர் இழுவை கேபிள்கள்."
      },
      details: {
        en: "Affordable, lightweight, and incredibly strong ropes tailored specifically for agricultural applications like climbing support, crop bunching, and livestock management.",
        ta: "ஏறுதல் ஆதரவு, பயிர் கட்டுதல் மற்றும் கால்நடை மேலாண்மை போன்ற விவசாய பயன்பாடுகளுக்காக குறிப்பாக வடிவமைக்கப்பட்ட மலிவான, இலகுரக மற்றும் நம்பமுடியாத அளவு வலிமையான கயிறுகள்."
      }
    },
    {
      id: "jallikattu",
      title: { en: "Jallikattu Specialty Ropes", ta: "ஜல்லிக்கட்டு சிறப்பு கயிறுகள்" },
      desc: {
        en: "Handcrafted traditional cotton, hemp, and jute ceremonial ropes.",
        ta: "கைவினைப் பாரம்பரிய பருத்தி, சணல் மற்றும் சாணை விழா கயிறுகள்."
      },
      details: {
        en: "Preserving Tamil heritage with specially made, soft-weave colorful ropes designed for traditional cattle festivals. Combines cultural authenticity with maximum animal safety.",
        ta: "பாரம்பரிய மாட்டு விழாக்களுக்காக வடிவமைக்கப்பட்ட சிறப்பாக தயாரிக்கப்பட்ட, மென்மையான நெசவு வண்ணமயமான கயிறுகளால் தமிழ் பாரம்பரியத்தைப் பாதுகாக்கிறோம். கலாச்சார நேர்மையை அதிகபட்ச விலங்கு பாதுகாப்புடன் இணைக்கிறது."
      }
    },
    {
      id: "industrial",
      title: { en: "Industrial Utility Products", ta: "தொழிற்சாலை பயன்பாட்டு பொருட்கள்" },
      desc: {
        en: "Packing nets, industrial tarpaulins, safety belts, and bulk packaging materials.",
        ta: "பேக்கிங் வலைகள், தொழிற்சாலை தார்ப்பாய்கள், பாதுகாப்பு பெல்ட்கள் மற்றும் பெருமளவிலான பேக்கிங் பொருட்கள்."
      },
      details: {
        en: "Equipping manufacturing and logistics businesses with reliable packing cords, heavy cargo nets, waterproof tarpaulins, and safety straps built for heavy-duty commercial transit.",
        ta: "நம்பகமான பேக்கிங் கயிறுகள், கனரக சரக்கு வலைகள், நீர்ப்புகா தார்ப்பாய்கள் மற்றும் கனரக வணிக போக்குவரத்துக்காக தயாரிக்கப்பட்ட பாதுகாப்பு பட்டைகளுடன் உற்பத்தி மற்றும் தளவாட வணிகங்களை ஆயத்தப்படுத்துகிறோம்."
      }
    }
  ],

  // ─── WHY TRUST US SECTION ───
  trust: {
    badge: { en: "Heritage & Trust Values", ta: "பாரம்பரியம் மற்றும் நம்பிக்கை மதிப்புகள்" },
    heading: { en: "Why Customers Rely On Us", ta: "வாடிக்கையாளர்கள் ஏன் எங்களை நம்புகிறார்கள்" },
    subheading: {
      en: "Over 38 years, our operational discipline has defined our wholesale legacy.",
      ta: "38 ஆண்டுகளுக்கும் மேலாக, எங்கள் செயல்பாட்டு ஒழுக்கம் எங்கள் மொத்த விற்பனை மரபை வரையறுத்துள்ளது."
    },
    valueCorePrefix: { en: "Value Core", ta: "மதிப்பு மையம்" }
  },

  trustReasons: [
    {
      title: { en: "38+ Years Legacy", ta: "38+ ஆண்டுகள் பாரம்பரியம்" },
      desc: {
        en: "Established in 1986, AVM Plastics has stood the test of time, serving multiple generations with honor, discipline, and customer-first values.",
        ta: "1986 இல் நிறுவப்பட்ட ஏவிஎம் பிளாஸ்டிக்ஸ், காலத்தின் சோதனையை எதிர்கொண்டு, கௌரவம், ஒழுக்கம் மற்றும் வாடிக்கையாளர் முதன்மை மதிப்புகளுடன் பல தலைமுறைகளுக்கு சேவை செய்கிறது."
      }
    },
    {
      title: { en: "Trusted Wholesale Dealer", ta: "நம்பகமான மொத்த விற்பனையாளர்" },
      desc: {
        en: "We support retail stores, distributors, and bulk buyers across Tamil Nadu with fast supply lines, wholesale price brackets, and robust inventory.",
        ta: "விரைவான விநியோக வழிகள், மொத்த விலை வரம்புகள் மற்றும் வலுவான கையிருப்புடன் தமிழ்நாடு முழுவதும் சில்லறை கடைகள், விநியோகஸ்தர்கள் மற்றும் பெரிய அளவு வாங்குபவர்களை ஆதரிக்கிறோம்."
      }
    },
    {
      title: { en: "Premium Quality Products", ta: "உயர்தர தயாரிப்புகள்" },
      desc: {
        en: "Every item in our catalogue is handpicked and quality-verified. We deal only with brands that promise durability and top-tier materials.",
        ta: "எங்கள் பட்டியலில் உள்ள ஒவ்வொரு பொருளும் கையால் தேர்ந்தெடுக்கப்பட்டு தரம் சரிபார்க்கப்பட்டது. நீடித்த தன்மை மற்றும் உயர்தரப் பொருட்களை உறுதியளிக்கும் பிராண்டுகளை மட்டுமே நாங்கள் கையாளுகிறோம்."
      }
    },
    {
      title: { en: "Agricultural Product Expertise", ta: "விவசாய தயாரிப்பு நிபுணத்துவம்" },
      desc: {
        en: "We understand farming requirements intimately. Our custom agricultural ropes and tools are designed to assist farmers under harsh field conditions.",
        ta: "விவசாய தேவைகளை நாங்கள் ஆழமாக புரிந்துகொள்கிறோம். எங்கள் தனிப்பயன் விவசாய கயிறுகள் மற்றும் கருவிகள் கடினமான வயல் நிலைகளில் விவசாயிகளுக்கு உதவ வடிவமைக்கப்பட்டுள்ளன."
      }
    },
    {
      title: { en: "Competitive Honest Pricing", ta: "போட்டித்தன்மையான நேர்மையான விலை" },
      desc: {
        en: "We believe in transparent billing and honest trade. Enjoy wholesale advantages and fair pricing on both single and bulk purchases.",
        ta: "வெளிப்படையான பில்லிங் மற்றும் நேர்மையான வர்த்தகத்தில் நாங்கள் நம்புகிறோம். தனி மற்றும் மொத்த கொள்முதல் இரண்டிலும் மொத்த விற்பனை நன்மைகள் மற்றும் நியாயமான விலையை அனுபவியுங்கள்."
      }
    },
    {
      title: { en: "Unmatched Customer Satisfaction", ta: "ஒப்பற்ற வாடிக்கையாளர் திருப்தி" },
      desc: {
        en: "Over 10,000 families, retailers, and farmers return to us annually because of our friendly service, direct phone support, and lifetime trust.",
        ta: "எங்கள் நட்புரீதியான சேவை, நேரடி தொலைபேசி ஆதரவு மற்றும் வாழ்நாள் நம்பிக்கை காரணமாக 10,000 க்கும் மேற்பட்ட குடும்பங்கள், சில்லறை விற்பனையாளர்கள் மற்றும் விவசாயிகள் ஆண்டுதோறும் எங்களிடம் திரும்புகிறார்கள்."
      }
    }
  ],

  // ─── TIMELINE SECTION ───
  timeline: {
    badge: { en: "History", ta: "வரலாறு" },
    heading: { en: "Our Journey Through Time", ta: "காலத்தின் வழியே எங்கள் பயணம்" },
    subheading: {
      en: "A timeline showing how we established commercial excellence in South India.",
      ta: "தென்னிந்தியாவில் வணிக சிறப்பை எவ்வாறு நிலைநாட்டினோம் என்பதைக் காட்டும் காலவரிசை."
    }
  },

  milestones: [
    {
      year: "1986",
      title: { en: "Business Founded", ta: "வணிகம் நிறுவப்பட்டது" },
      desc: {
        en: "Established by Mr. K. Arumugam with a focus on trust and absolute quality.",
        ta: "நம்பிக்கை மற்றும் முழுமையான தரத்தில் கவனம் செலுத்தி திரு. கே. ஆறுமுகம் அவர்களால் நிறுவப்பட்டது."
      }
    },
    {
      year: "1995",
      title: { en: "Expanded Categories", ta: "விரிவாக்கப்பட்ட வகைகள்" },
      desc: {
        en: "Introduced wide range of household products and domestic utility items.",
        ta: "பரந்த அளவிலான வீட்டு உபயோகப் பொருட்கள் மற்றும் உள்நாட்டு பயன்பாட்டு பொருட்கள் அறிமுகப்படுத்தப்பட்டன."
      }
    },
    {
      year: "2005",
      title: { en: "Leading Rope Supplier", ta: "முன்னணி கயிறு சப்ளையர்" },
      desc: {
        en: "Secured key wholesale rope distributorships, including premium Nandi ropes.",
        ta: "உயர்தர நந்தி கயிறுகள் உட்பட முக்கிய மொத்த விற்பனை கயிறு விநியோகங்களைப் பெற்றோம்."
      }
    },
    {
      year: "2015",
      title: { en: "Modern Expansion", ta: "நவீன விரிவாக்கம்" },
      desc: {
        en: "Upgraded logistics, expanded local showroom, and integrated automatic billing systems.",
        ta: "தளவாடங்களை மேம்படுத்தினோம், உள்ளூர் காட்சியகத்தை விரிவுபடுத்தினோம், தானியங்கி பில்லிங் அமைப்புகளை ஒருங்கிணைத்தோம்."
      }
    },
    {
      year: "2025",
      title: { en: "Serving Thousands", ta: "ஆயிரக்கணக்கானோருக்கு சேவை" },
      desc: {
        en: "Now trusted by over 10,000 retail and wholesale clients across Tamil Nadu.",
        ta: "தற்போது தமிழ்நாடு முழுவதும் 10,000 க்கும் மேற்பட்ட சில்லறை மற்றும் மொத்த விற்பனை வாடிக்கையாளர்களால் நம்பப்படுகிறது."
      }
    }
  ],

  // ─── GALLERY SECTION ───
  gallery: {
    badge: { en: "Showcase", ta: "காட்சி" },
    heading: { en: "Our Showroom & Legacy Gallery", ta: "எங்கள் காட்சியகம் மற்றும் பாரம்பரிய தொகுப்பு" },
    subheading: {
      en: "View the physical environment, extensive product inventory, and operational scale of our wholesale showrooms.",
      ta: "எங்கள் மொத்த விற்பனை காட்சியகங்களின் இயற்பியல் சூழல், விரிவான தயாரிப்பு கையிருப்பு மற்றும் செயல்பாட்டு அளவைக் காணுங்கள்."
    },
    filterAll: { en: "All Showcase", ta: "அனைத்து காட்சிகள்" },
    filterStore: { en: "Our Showroom", ta: "எங்கள் காட்சியகம்" },
    filterProduct: { en: "Premium Products", ta: "உயர்தர தயாரிப்புகள்" },
    filterWarehouse: { en: "Warehouse & Logistics", ta: "கிடங்கு மற்றும் தளவாடம்" },
    categoryShowroom: { en: "Showroom", ta: "காட்சியகம்" },
    categoryProduct: { en: "Product", ta: "தயாரிப்பு" },
    categoryWarehouse: { en: "Warehouse", ta: "கிடங்கு" },
    clickToView: { en: "Click to view", ta: "காண கிளிக் செய்க" }
  },

  // ─── TESTIMONIALS SECTION ───
  testimonials: {
    heading: { en: "Trusted By Thousands of Clients", ta: "ஆயிரக்கணக்கான வாடிக்கையாளர்களால் நம்பப்படுகிறது" },
    subheading: {
      en: "What farmers, retailers, and local partners say about our wholesale quality and pricing.",
      ta: "எங்கள் மொத்த விற்பனை தரம் மற்றும் விலை குறித்து விவசாயிகள், சில்லறை விற்பனையாளர்கள் மற்றும் உள்ளூர் கூட்டாளர்கள் என்ன சொல்கிறார்கள்."
    }
  },

  testimonialItems: [
    {
      name: "K. Selvam",
      role: { en: "Agriculturalist, Krishnagiri", ta: "விவசாயி, கிருஷ்ணகிரி" },
      quote: {
        en: "We have been buying borewell and agricultural ropes from AVM Plastics for over 20 years. The Nandi brand ropes they supply are extremely durable and survive years of harsh weather. Their advice is highly valuable.",
        ta: "நாங்கள் 20 ஆண்டுகளுக்கும் மேலாக ஏவிஎம் பிளாஸ்டிக்ஸிலிருந்து போர்வெல் மற்றும் விவசாய கயிறுகளை வாங்குகிறோம். அவர்கள் வழங்கும் நந்தி பிராண்ட் கயிறுகள் மிகவும் நீடித்தவை மற்றும் கடுமையான வானிலையையும் தாங்கும். அவர்களின் ஆலோசனை மிகவும் மதிப்புமிக்கது."
      }
    },
    {
      name: "R. Prakash",
      role: { en: "Retail Dealer, Salem", ta: "சில்லறை வணிகர், சேலம்" },
      quote: {
        en: "As a retail dealer of plastic goods, finding a wholesaler who is both honest and has immediate stock is tough. Mr. Dhamodharan manages operations so smoothly, and their automatic WhatsApp billing makes bookkeeping easy.",
        ta: "பிளாஸ்டிக் பொருட்களின் சில்லறை வணிகராக, நேர்மையான மற்றும் உடனடி கையிருப்பு உள்ள மொத்த விற்பனையாளரைக் கண்டுபிடிப்பது கடினம். திரு. தாமோதரன் செயல்பாடுகளை மிகவும் சீராக நிர்வகிக்கிறார், மேலும் அவர்களின் தானியங்கி WhatsApp பில்லிங் கணக்கு பராமரிப்பை எளிதாக்குகிறது."
      }
    },
    {
      name: "Meenakshi Sundaram",
      role: { en: "Homemaker, Krishnagiri", ta: "இல்லத்தரசி, கிருஷ்ணகிரி" },
      quote: {
        en: "AVM Plastics is a household name here. Whether it's buckets, organizers, or cleaning mops, we know we will get premium quality that doesn't break in two months. Friendly owners and fair prices.",
        ta: "ஏவிஎம் பிளாஸ்டிக்ஸ் இங்கு ஒரு பிரபலமான பெயர். வாளிகள், ஒழுங்குபடுத்திகள் அல்லது துடைப்பான்கள் என எதுவாக இருந்தாலும், இரண்டு மாதங்களில் உடையாத உயர்தரத்தை பெறுவோம் என்று எங்களுக்குத் தெரியும். நட்புரீதியான உரிமையாளர்கள் மற்றும் நியாயமான விலைகள்."
      }
    }
  ],

  // ─── PREMIUM CTA SECTION ───
  cta: {
    badge: { en: "DIRECT DISTRIBUTOR CONNECT", ta: "நேரடி விநியோகஸ்தர் தொடர்பு" },
    heading: { en: "Need Quality Products? Visit AVM Plastics Today", ta: "தரமான பொருட்கள் தேவையா? இன்றே ஏவிஎம் பிளாஸ்டிக்ஸை பாருங்கள்" },
    subheading: {
      en: "Contact Mr. Dhamodharan directly for current price sheets, wholesale distribution terms, and customized agricultural rope requirements.",
      ta: "தற்போதைய விலைப்பட்டியல், மொத்த விற்பனை விநியோக விதிமுறைகள் மற்றும் தனிப்பயன் விவசாய கயிறு தேவைகளுக்கு திரு. தாமோதரனை நேரடியாக தொடர்பு கொள்ளுங்கள்."
    },
    callNow: { en: "Call Now: +91 94434 15251", ta: "இப்போது அழைக்கவும்: +91 94434 15251" },
    whatsappInquiry: { en: "WhatsApp Inquiry", ta: "WhatsApp விசாரணை" },
    getDirections: { en: "Get Directions", ta: "வழிகாட்டியை பெறுங்கள்" }
  },

  // ─── CONTACT SECTION ───
  contact: {
    badge: { en: "Contact Center", ta: "தொடர்பு மையம்" },
    heading: { en: "Visit Our Wholesale Outlet", ta: "எங்கள் மொத்த விற்பனை நிலையத்தை பாருங்கள்" },
    subheading: {
      en: "We are conveniently located on Salem Main Road in Krishnagiri. Our doors are open for both bulk commercial enquiries and retail supplies.",
      ta: "கிருஷ்ணகிரி சேலம் மெயின் ரோட்டில் வசதியான இடத்தில் அமைந்துள்ளோம். மொத்த வணிக விசாரணைகள் மற்றும் சில்லறை பொருட்கள் இரண்டிற்கும் எங்கள் கதவுகள் திறந்திருக்கும்."
    },
    addressTitle: { en: "AVM Plastics", ta: "ஏவிஎம் பிளாஸ்டிக்ஸ்" },
    addressLine1: { en: "Krishnagiri Courts Complex", ta: "கிருஷ்ணகிரி கோர்ட்ஸ் வளாகம்" },
    addressLine2: { en: "Opposite New Saravana Textiles", ta: "நியூ சரவணா டெக்ஸ்டைல்ஸ் எதிரே" },
    addressLine3: { en: "Krishnagiri, Tamil Nadu - 635001", ta: "கிருஷ்ணகிரி, தமிழ்நாடு - 635001" },
    registeredDomains: { en: "Registered Business Domains", ta: "பதிவு செய்யப்பட்ட வணிகத் துறைகள்" },
    domains: [
      { en: "Plastic Material Distributor", ta: "பிளாஸ்டிக் பொருட்கள் விநியோகஸ்தர்" },
      { en: "Agriculture Utility Products Supplier", ta: "விவசாய பயன்பாட்டு பொருட்கள் சப்ளையர்" },
      { en: "Wholesale Rope Supplier", ta: "மொத்த கயிறு சப்ளையர்" },
      { en: "Plastic Utility Goods Distributor", ta: "பிளாஸ்டிக் பயன்பாட்டு பொருட்கள் விநியோகஸ்தர்" }
    ],
    businessHours: { en: "Business Hours", ta: "வணிக நேரம்" },
    monSat: { en: "Mon - Sat", ta: "திங்கள் - சனி" },
    hours: { en: "9:30 AM - 8:30 PM", ta: "காலை 9:30 - இரவு 8:30" },
    closedSundays: { en: "Closed Sundays", ta: "ஞாயிறு விடுமுறை" },
    directContact: { en: "Direct Contact", ta: "நேரடி தொடர்பு" },
    contactPerson: { en: "Mr. Dhamodharan", ta: "திரு. தாமோதரன்" },
    yearsInBusiness: { en: "36+ Years in Business", ta: "36+ ஆண்டுகள் வணிகத்தில்" },
    callBtn: { en: "Call 94434 15251", ta: "94434 15251 அழைக்கவும்" },
    whatsappBtn: { en: "WhatsApp Query", ta: "WhatsApp விசாரணை" },
    mapTitle: { en: "AVM PLASTICS", ta: "ஏவிஎம் பிளாஸ்டிக்ஸ்" },
    mapSubtitle: { en: "Salem Main Road, Krishnagiri Courts Area", ta: "சேலம் மெயின் ரோடு, கிருஷ்ணகிரி கோர்ட்ஸ் பகுதி" },
    openInMaps: { en: "Open in Google Maps", ta: "Google Maps இல் திறக்க" }
  },

  // ─── FOOTER ───
  footer: {
    companyName: { en: "AVM PLASTICS", ta: "ஏவிஎம் பிளாஸ்டிக்ஸ்" },
    footerTagline: {
      en: "Serving Homes, Farmers & Businesses for Generations Since 1986.",
      ta: "1986 முதல் பல தலைமுறைகளாக குடும்பங்கள், விவசாயிகள் மற்றும் வணிகர்களுக்கு சேவை."
    },
    ownerPortal: { en: "Owner Portal", ta: "உரிமையாளர் போர்டல்" },
    copyright: {
      en: "AVM Plastics. All Rights Reserved.",
      ta: "ஏவிஎம் பிளாஸ்டிக்ஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
    },
    footerAddress: {
      en: "Opposite New Saravana Textiles, Near Krishnagiri Courts, Salem Main Road, Krishnagiri",
      ta: "நியூ சரவணா டெக்ஸ்டைல்ஸ் எதிரே, கிருஷ்ணகிரி கோர்ட்ஸ் அருகில், சேலம் மெயின் ரோடு, கிருஷ்ணகிரி"
    }
  },

  // ─── MODALS ───
  modal: {
    wholesaleProfile: { en: "Wholesale Profile", ta: "மொத்த விற்பனை விவரம்" },
    closeWindow: { en: "Close Window", ta: "சாளரத்தை மூடு" },
    whatsappInquiry: { en: "WhatsApp Inquiry", ta: "WhatsApp விசாரணை" },
    expandedView: { en: "Expanded Showcase View", ta: "விரிவாக்கப்பட்ட காட்சி" }
  },

  // ─── MOBILE MENU ───
  mobile: {
    callNow: { en: "Call Now: +91 94434 15251", ta: "இப்போது அழைக்கவும்: +91 94434 15251" },
    ownerPortal: { en: "Owner Portal Access", ta: "உரிமையாளர் போர்டல் அணுகல்" }
  },

  // ─── LANGUAGE SWITCHER ───
  langSwitch: {
    english: "English",
    tamil: "தமிழ்"
  }
} as const;

// Helper function to get text in current language
export function t(textObj: { en: string; ta: string }, lang: Language): string {
  return textObj[lang];
}
