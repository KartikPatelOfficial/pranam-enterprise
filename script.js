/* Pranam Enterprise — micro-interactions + i18n */
(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 0. Translations ---------- */
  const translations = {
    en: {
      'meta.title': 'Pranam Enterprise — Industrial Hardware, Stocked & Ready · Ankleshwar',
      'meta.description': 'Pranam Enterprise supplies industrial hardware, valves, glands, gaskets, hoses, fasteners and METACARE coatings to Chemical, Pharma, Power and Infrastructure industries from Ankleshwar, Gujarat.',
      'meta.ogTitle': 'Pranam Enterprise — Precision, Stocked and Ready',
      'meta.ogDescription': "Authorized supplier for Asian Paints PPG METACARE range, plus a 13-brand industrial hardware catalogue serving Gujarat's industrial belt since 1998.",

      'nav.skip': 'Skip to content',
      'nav.brandAria': 'Pranam Enterprise — home',
      'nav.openMenu': 'Open menu',
      'nav.closeMenu': 'Close menu',
      'nav.about': 'About',
      'nav.offerings': 'Offerings',
      'nav.metacare': 'METACARE',
      'nav.partners': 'Partners',
      'nav.contact': 'Contact',
      'nav.getQuote': 'Get a Quote',
      'nav.language': 'Language',

      'hero.location': 'EST. ANKLESHWAR · GUJARAT',
      'hero.eyebrow': 'Industrial Hardware Supply',
      'hero.titleLine1': 'Precision,',
      'hero.titleLine2': '<em>stocked</em> &amp; ready.',
      'hero.sub': 'A deep, ready inventory of glands, valves, fittings, fasteners and METACARE coatings — serving the Chemical, Pharma, Power and Infrastructure belts of Gujarat with the punctuality your line cannot do without.',
      'hero.ctaPrimary': 'Request a quote',
      'hero.ctaSecondary': 'Explore the range',
      'hero.scroll': 'scroll',

      'manifesto.01Title': 'Stocked',
      'manifesto.01Sub': 'deep.',
      'manifesto.02Title': 'Ready',
      'manifesto.02Sub': 'always.',
      'manifesto.03Title': 'Trusted',
      'manifesto.03Sub': 'wide.',

      'about.eyebrow': 'About',
      'about.title': 'A supplier the line never has to chase.',
      'about.lede': 'Based in the GIDC estate of Ankleshwar, Pranam Enterprise has built its reputation on one principle: the part you need is already on the shelf. Across decades, we have earned trust by carrying inventory others won’t — and delivering it before the next shift.',
      'about.body': 'We serve the Chemical, Pharma, Power and Infrastructure industries that anchor Bharuch district — partnering with India’s most respected hardware and coatings houses to put what you need within an hour’s reach.',
      'about.specLocated': 'Located',
      'about.specLocatedV': 'Ankleshwar, Bharuch · Gujarat',
      'about.specAddress': 'Address',
      'about.specAddressV': 'Shed A2/2502, GIDC Estate',
      'about.specSectors': 'Sectors',
      'about.specSectorsV': 'Chemical · Pharma · Power · Infra',
      'about.specAuthorized': 'Authorized',
      'about.specBrandHouse': 'Brand house',
      'about.specBrandHouseV': '13 trusted partners',
      'about.specPartner': 'Partner',
      'about.specLeadTime': 'Lead time',
      'about.specLeadTimeV': 'Same day, in-stock',

      'offerings.eyebrow': 'The Range',
      'offerings.titleHtml': 'A product universe, <em>in stock.</em>',
      'offerings.sub': 'Ten categories. Hundreds of SKUs. One delivery van.',

      'tile.sealing.label': '01 / sealing &amp; glands',
      'tile.sealing.title': 'Glands, packings &amp; gaskets',
      'tile.sealing.desc': 'Asbestos & non-asbestos · graphited · PTFE · zero-leak · fire-resistant.',
      'tile.valves.label': '02 / valves &amp; cocks',
      'tile.valves.title': 'Valves &amp; flow control',
      'tile.valves.desc': 'Butterfly · ball · check · plug · DRP cocks · Parth PP/HDPE — flanged or wafer.',
      'tile.pipes.label': '03 / pipes',
      'tile.pipes.title': 'Pipes &amp; fittings',
      'tile.pipes.desc': 'PVC · CPVC · PPR · carbon & stainless steel — full bore range.',
      'tile.hoses.label': '04 / hoses &amp; clamps',
      'tile.hoses.title': 'Hoses, tubes &amp; clamps',
      'tile.hoses.desc': 'PVC suction · braided · hydraulic — Klipco worm-drive clamps.',
      'tile.fasteners.label': '05 / fasteners',
      'tile.fasteners.title': 'Fasteners',
      'tile.fasteners.desc': 'Anchor bolts · U/J bolts · Unbrako high-tensile.',
      'tile.power.label': '06 / power transmission',
      'tile.power.title': 'Drives &amp; couplings',
      'tile.power.desc': 'Pulleys · pin-bush couplings · Safe-Ring · Fenner belts.',
      'tile.strainers.label': '07 / strainers',
      'tile.strainers.title': 'Strainers &amp; sight glass',
      'tile.strainers.desc': 'Basket · Y-type · sight glass · diaphragms.',
      'tile.meters.label': '08 / instrumentation',
      'tile.meters.title': 'Water meters',
      'tile.meters.desc': 'Domestic flow · bulk industrial — Kranti authorized.',
      'tile.tools.label': '09 / hand tools',
      'tile.tools.title': 'Hand tools',
      'tile.tools.desc': 'Taparia full line — pliers, drivers, hex keys, kits.',
      'tile.structural.label': '10 / structural',
      'tile.structural.title': 'Structural steel',
      'tile.structural.desc': 'Angles · channels · pipes · rebar — to spec.',

      'coatings.eyebrow': 'Industrial Coatings',
      'coatings.title': 'METACARE — the surface-tolerant range.',
      'coatings.sub': 'As the authorized supplier for Asian Paints PPG (Industrial Paints), Pranam Enterprise stocks the full METACARE range of acrylic, epoxy, tank, heat-resistant and floor coatings.',
      'coating.asiacryl.kind': 'acrylic',
      'coating.asiacryl.desc': 'Fast-drying acrylic finish for general industrial & structural surfaces.',
      'coating.apcodur.kind': 'epoxy',
      'coating.apcodur.desc': 'High-build epoxy protection for severe chemical environments.',
      'coating.apcoguard.kind': 'tank',
      'coating.apcoguard.desc': 'Linings for storage tanks holding chemicals, solvents and water.',
      'coating.apcotherm.kind': 'heat',
      'coating.apcotherm.desc': 'Heat-resistant coatings for hot insulation, stacks and exhausts.',
      'coating.acrysil.kind': 'heat',
      'coating.acrysil.desc': 'Silicone-acrylic finishes for sustained high-temperature exposure.',
      'coating.apcoflor.kind': 'floor',
      'coating.apcoflor.desc': 'Hard-wearing floor systems for plants, warehouses and workshops.',

      'partners.eyebrow': 'Authorized Houses',
      'partners.titleHtml': 'The brands that trust us, <em>at the counter.</em>',
      'partners.sub': 'Thirteen of India’s most respected hardware, paint and tooling brands, stocked & supplied as authorized partners.',

      'sectors.eyebrow': 'Sectors',
      'sectors.title': 'The industries we keep moving.',
      'sector.chemical.title': 'Chemical',
      'sector.chemical.desc': 'Process plants, batch reactors, solvent handling.',
      'sector.pharma.title': 'Pharma',
      'sector.pharma.desc': 'Sanitary lines, sealing for clean-room critical service.',
      'sector.power.title': 'Power',
      'sector.power.desc': 'Steam, condensate, cooling water — high-cycle valves & gaskets.',
      'sector.infra.title': 'Infrastructure',
      'sector.infra.desc': 'Civil structural, water meters, piping & protective coatings.',

      'why.eyebrow': 'Why Pranam',
      'why.title': 'Numbers that arrive on time.',
      'why.brands.suffix': 'brand partners',
      'why.brands.desc': 'Authorized to stock and supply across hardware, paints & tooling.',
      'why.sectors.suffix': 'core sectors',
      'why.sectors.desc': 'Chemical, Pharma, Power and Infrastructure — purpose-stocked.',
      'why.skus.suffix': '+ SKUs',
      'why.skus.desc': 'From a single washer to a full-bore butterfly valve, on the shelf.',
      'why.despatch.suffix': 'hour despatch',
      'why.despatch.desc': 'Same-day for in-stock items across the Bharuch industrial belt.',

      'contact.eyebrow': 'Get in touch',
      'contact.title': 'Tell us what you need on the line.',
      'contact.sub': 'Drop a message or call directly — quotes are usually back the same day.',
      'contact.cardTag': '// SUPPLY · SINCE BEFORE YOU NEEDED IT',
      'contact.partnerLabel': 'partner',
      'contact.addressLabel': 'address',
      'contact.addressValue': 'Shed No. A2/2502, GIDC Estate<br>Ankleshwar · Gujarat · India',
      'contact.phoneLabel': 'phone',
      'contact.emailLabel': 'email',
      'contact.webLabel': 'web',

      'form.label': '// REQUEST · 001',
      'form.name': 'Your name',
      'form.email': 'Email address',
      'form.phone': 'Phone (optional)',
      'form.message': 'What do you need?',
      'form.submit': 'Send the request',
      'form.fine': 'By sending you confirm we may contact you about your enquiry. No marketing.',
      'form.sending': 'Sending…',
      'form.success': "Thanks — we'll get back within one working day.",
      'form.error': 'Could not send. Please try again or call/email us.',
      'form.errorOffline': 'You appear to be offline. Please check your connection and try again.',

      'footer.tag': 'Industrial hardware, stocked & ready — from Ankleshwar, Gujarat.',
      'footer.menu': '// menu',
      'footer.reach': '// reach',
      'footer.addressShort': 'Shed A2/2502, GIDC Estate, Ankleshwar',
      'footer.copyright': '© PRANAM ENTERPRISE · ANKLESHWAR · GUJARAT',
      'footer.tagline': 'PRECISION · STOCKED · READY',
    },

    hi: {
      'meta.title': 'प्रणाम एंटरप्राइज़ — औद्योगिक हार्डवेयर, स्टॉक में और तैयार · अंकलेश्वर',
      'meta.description': 'प्रणाम एंटरप्राइज़ अंकलेश्वर, गुजरात से रसायन, फार्मा, पावर और अवसंरचना उद्योगों के लिए औद्योगिक हार्डवेयर, वाल्व, ग्रंथि, गैस्केट, होज़, फास्टनर और METACARE कोटिंग्स की आपूर्ति करता है।',
      'meta.ogTitle': 'प्रणाम एंटरप्राइज़ — सटीकता, स्टॉक में और तैयार',
      'meta.ogDescription': 'Asian Paints PPG METACARE रेंज के अधिकृत आपूर्तिकर्ता, साथ ही 13 ब्रांड की औद्योगिक हार्डवेयर सूची — 1998 से गुजरात के औद्योगिक क्षेत्र की सेवा में।',

      'nav.skip': 'मुख्य सामग्री पर जाएँ',
      'nav.brandAria': 'प्रणाम एंटरप्राइज़ — मुखपृष्ठ',
      'nav.openMenu': 'मेनू खोलें',
      'nav.closeMenu': 'मेनू बंद करें',
      'nav.about': 'हमारे बारे में',
      'nav.offerings': 'उत्पाद',
      'nav.metacare': 'METACARE',
      'nav.partners': 'साझेदार',
      'nav.contact': 'संपर्क',
      'nav.getQuote': 'कोटेशन प्राप्त करें',
      'nav.language': 'भाषा',

      'hero.location': 'स्थापित · अंकलेश्वर · गुजरात',
      'hero.eyebrow': 'औद्योगिक हार्डवेयर आपूर्ति',
      'hero.titleLine1': 'सटीकता,',
      'hero.titleLine2': '<em>स्टॉक</em> में और तैयार।',
      'hero.sub': 'ग्रंथि, वाल्व, फिटिंग, फास्टनर और METACARE कोटिंग्स का गहरा, तैयार स्टॉक — गुजरात के रसायन, फार्मा, पावर और अवसंरचना क्षेत्रों की उस समय-निष्ठा से सेवा जिसके बिना आपकी लाइन नहीं चल सकती।',
      'hero.ctaPrimary': 'कोटेशन का अनुरोध करें',
      'hero.ctaSecondary': 'रेंज देखें',
      'hero.scroll': 'स्क्रॉल',

      'manifesto.01Title': 'स्टॉक्ड',
      'manifesto.01Sub': 'गहरा।',
      'manifesto.02Title': 'तैयार',
      'manifesto.02Sub': 'हमेशा।',
      'manifesto.03Title': 'विश्वसनीय',
      'manifesto.03Sub': 'व्यापक।',

      'about.eyebrow': 'हमारे बारे में',
      'about.title': 'वह आपूर्तिकर्ता जिसका लाइन को कभी पीछा नहीं करना पड़ता।',
      'about.lede': 'अंकलेश्वर के GIDC इस्टेट में स्थित, प्रणाम एंटरप्राइज़ ने एक सिद्धांत पर अपनी प्रतिष्ठा बनाई है: जो पुर्ज़ा आपको चाहिए वह पहले से ही शेल्फ पर है। दशकों से, हमने वह स्टॉक रखकर विश्वास अर्जित किया है जो दूसरे नहीं रखते — और उसे अगली पाली से पहले पहुँचा दिया है।',
      'about.body': 'हम भरूच ज़िले के रसायन, फार्मा, पावर और अवसंरचना उद्योगों की सेवा करते हैं — भारत के सबसे प्रतिष्ठित हार्डवेयर और कोटिंग्स घरानों के साथ साझेदारी करके आपकी ज़रूरत को एक घंटे की पहुँच में रखते हैं।',
      'about.specLocated': 'स्थान',
      'about.specLocatedV': 'अंकलेश्वर, भरूच · गुजरात',
      'about.specAddress': 'पता',
      'about.specAddressV': 'शेड A2/2502, GIDC इस्टेट',
      'about.specSectors': 'क्षेत्र',
      'about.specSectorsV': 'रसायन · फार्मा · पावर · अवसंरचना',
      'about.specAuthorized': 'अधिकृत',
      'about.specBrandHouse': 'ब्रांड घराने',
      'about.specBrandHouseV': '13 विश्वसनीय साझेदार',
      'about.specPartner': 'साझेदार',
      'about.specLeadTime': 'लीड समय',
      'about.specLeadTimeV': 'उसी दिन, स्टॉक में',

      'offerings.eyebrow': 'रेंज',
      'offerings.titleHtml': 'एक उत्पाद ब्रह्मांड, <em>स्टॉक में।</em>',
      'offerings.sub': 'दस श्रेणियाँ। सैकड़ों SKU। एक डिलीवरी वैन।',

      'tile.sealing.label': '01 / सीलिंग और ग्रंथि',
      'tile.sealing.title': 'ग्रंथि, पैकिंग और गैस्केट',
      'tile.sealing.desc': 'एस्बेस्टस और गैर-एस्बेस्टस · ग्रेफाइटेड · PTFE · शून्य-रिसाव · आग प्रतिरोधी।',
      'tile.valves.label': '02 / वाल्व और कॉक',
      'tile.valves.title': 'वाल्व और प्रवाह नियंत्रण',
      'tile.valves.desc': 'बटरफ्लाई · बॉल · चेक · प्लग · DRP कॉक · Parth PP/HDPE — फ्लैंज्ड या वेफर।',
      'tile.pipes.label': '03 / पाइप',
      'tile.pipes.title': 'पाइप और फिटिंग',
      'tile.pipes.desc': 'PVC · CPVC · PPR · कार्बन और स्टेनलेस स्टील — पूर्ण रेंज।',
      'tile.hoses.label': '04 / होज़ और क्लैंप',
      'tile.hoses.title': 'होज़, ट्यूब और क्लैंप',
      'tile.hoses.desc': 'PVC सक्शन · ब्रेडेड · हाइड्रोलिक — Klipco वर्म-ड्राइव क्लैंप।',
      'tile.fasteners.label': '05 / फास्टनर',
      'tile.fasteners.title': 'फास्टनर',
      'tile.fasteners.desc': 'एंकर बोल्ट · U/J बोल्ट · Unbrako हाई-टेन्साइल।',
      'tile.power.label': '06 / पावर ट्रांसमिशन',
      'tile.power.title': 'ड्राइव और कपलिंग',
      'tile.power.desc': 'पुली · पिन-बुश कपलिंग · Safe-Ring · Fenner बेल्ट।',
      'tile.strainers.label': '07 / स्ट्रेनर',
      'tile.strainers.title': 'स्ट्रेनर और साइट ग्लास',
      'tile.strainers.desc': 'बास्केट · Y-टाइप · साइट ग्लास · डायाफ्राम।',
      'tile.meters.label': '08 / उपकरण',
      'tile.meters.title': 'वॉटर मीटर',
      'tile.meters.desc': 'घरेलू प्रवाह · बल्क औद्योगिक — Kranti अधिकृत।',
      'tile.tools.label': '09 / हस्त उपकरण',
      'tile.tools.title': 'हस्त उपकरण',
      'tile.tools.desc': 'Taparia की पूरी रेंज — प्लायर, ड्राइवर, हेक्स की, किट।',
      'tile.structural.label': '10 / स्ट्रक्चरल',
      'tile.structural.title': 'स्ट्रक्चरल स्टील',
      'tile.structural.desc': 'एंगल · चैनल · पाइप · रिबार — स्पेक के अनुसार।',

      'coatings.eyebrow': 'औद्योगिक कोटिंग्स',
      'coatings.title': 'METACARE — सतह-सहनशील रेंज।',
      'coatings.sub': 'Asian Paints PPG (Industrial Paints) के अधिकृत आपूर्तिकर्ता के रूप में, प्रणाम एंटरप्राइज़ एक्रिलिक, ईपॉक्सी, टैंक, ताप-प्रतिरोधी और फ्लोर कोटिंग्स की पूरी METACARE रेंज स्टॉक करता है।',
      'coating.asiacryl.kind': 'एक्रिलिक',
      'coating.asiacryl.desc': 'सामान्य औद्योगिक और संरचनात्मक सतहों के लिए तेज़-सूखने वाला एक्रिलिक फिनिश।',
      'coating.apcodur.kind': 'ईपॉक्सी',
      'coating.apcodur.desc': 'गंभीर रासायनिक वातावरण के लिए हाई-बिल्ड ईपॉक्सी सुरक्षा।',
      'coating.apcoguard.kind': 'टैंक',
      'coating.apcoguard.desc': 'रसायन, सॉल्वेंट और पानी रखने वाले स्टोरेज टैंक के लिए लाइनिंग।',
      'coating.apcotherm.kind': 'ताप',
      'coating.apcotherm.desc': 'गर्म इंसुलेशन, स्टैक और एग्ज़ॉस्ट के लिए ताप-प्रतिरोधी कोटिंग।',
      'coating.acrysil.kind': 'ताप',
      'coating.acrysil.desc': 'निरंतर उच्च-तापमान एक्सपोज़र के लिए सिलिकॉन-एक्रिलिक फिनिश।',
      'coating.apcoflor.kind': 'फ्लोर',
      'coating.apcoflor.desc': 'प्लांट, गोदाम और कार्यशाला के लिए टिकाऊ फ्लोर सिस्टम।',

      'partners.eyebrow': 'अधिकृत घराने',
      'partners.titleHtml': 'वे ब्रांड जो हम पर भरोसा करते हैं, <em>काउंटर पर।</em>',
      'partners.sub': 'भारत के तेरह सबसे प्रतिष्ठित हार्डवेयर, पेंट और टूलिंग ब्रांड, अधिकृत साझेदारों के रूप में स्टॉक और आपूर्ति।',

      'sectors.eyebrow': 'क्षेत्र',
      'sectors.title': 'वे उद्योग जिन्हें हम चलाते रहते हैं।',
      'sector.chemical.title': 'रसायन',
      'sector.chemical.desc': 'प्रोसेस प्लांट, बैच रिएक्टर, सॉल्वेंट हैंडलिंग।',
      'sector.pharma.title': 'फार्मा',
      'sector.pharma.desc': 'सैनिटरी लाइन, क्लीन-रूम क्रिटिकल सेवा के लिए सीलिंग।',
      'sector.power.title': 'पावर',
      'sector.power.desc': 'स्टीम, कंडेनसेट, कूलिंग वॉटर — हाई-साइकल वाल्व और गैस्केट।',
      'sector.infra.title': 'अवसंरचना',
      'sector.infra.desc': 'सिविल स्ट्रक्चरल, वॉटर मीटर, पाइपिंग और सुरक्षात्मक कोटिंग्स।',

      'why.eyebrow': 'प्रणाम क्यों',
      'why.title': 'आँकड़े जो समय पर पहुँचते हैं।',
      'why.brands.suffix': 'ब्रांड साझेदार',
      'why.brands.desc': 'हार्डवेयर, पेंट और टूलिंग में स्टॉक और आपूर्ति के लिए अधिकृत।',
      'why.sectors.suffix': 'मुख्य क्षेत्र',
      'why.sectors.desc': 'रसायन, फार्मा, पावर और अवसंरचना — विशेष रूप से स्टॉक्ड।',
      'why.skus.suffix': '+ SKU',
      'why.skus.desc': 'एक वॉशर से लेकर पूर्ण-बोर बटरफ्लाई वाल्व तक, शेल्फ पर।',
      'why.despatch.suffix': 'घंटे में डिस्पैच',
      'why.despatch.desc': 'भरूच औद्योगिक क्षेत्र में स्टॉक आइटम के लिए उसी दिन।',

      'contact.eyebrow': 'संपर्क करें',
      'contact.title': 'बताइए लाइन पर क्या चाहिए।',
      'contact.sub': 'संदेश छोड़िए या सीधे कॉल कीजिए — कोटेशन आमतौर पर उसी दिन वापस आ जाते हैं।',
      'contact.cardTag': '// आपूर्ति · आपकी ज़रूरत से पहले से',
      'contact.partnerLabel': 'साझेदार',
      'contact.addressLabel': 'पता',
      'contact.addressValue': 'शेड नं. A2/2502, GIDC इस्टेट<br>अंकलेश्वर · गुजरात · भारत',
      'contact.phoneLabel': 'फ़ोन',
      'contact.emailLabel': 'ईमेल',
      'contact.webLabel': 'वेब',

      'form.label': '// अनुरोध · 001',
      'form.name': 'आपका नाम',
      'form.email': 'ईमेल पता',
      'form.phone': 'फ़ोन (वैकल्पिक)',
      'form.message': 'आपको क्या चाहिए?',
      'form.submit': 'अनुरोध भेजें',
      'form.fine': 'भेजकर आप पुष्टि करते हैं कि हम आपकी पूछताछ के बारे में आपसे संपर्क कर सकते हैं। कोई मार्केटिंग नहीं।',
      'form.sending': 'भेजा जा रहा है…',
      'form.success': 'धन्यवाद — हम एक कार्य दिवस के भीतर आपसे संपर्क करेंगे।',
      'form.error': 'भेजा नहीं जा सका। कृपया पुनः प्रयास करें या हमें कॉल/ईमेल करें।',
      'form.errorOffline': 'ऐसा लगता है कि आप ऑफ़लाइन हैं। कृपया अपना कनेक्शन जांचें और पुनः प्रयास करें।',

      'footer.tag': 'औद्योगिक हार्डवेयर, स्टॉक में और तैयार — अंकलेश्वर, गुजरात से।',
      'footer.menu': '// मेनू',
      'footer.reach': '// संपर्क',
      'footer.addressShort': 'शेड A2/2502, GIDC इस्टेट, अंकलेश्वर',
      'footer.copyright': '© प्रणाम एंटरप्राइज़ · अंकलेश्वर · गुजरात',
      'footer.tagline': 'सटीकता · स्टॉक्ड · तैयार',
    },

    gu: {
      'meta.title': 'પ્રણામ એન્ટરપ્રાઇઝ — ઔદ્યોગિક હાર્ડવેર, સ્ટોકમાં અને તૈયાર · અંકલેશ્વર',
      'meta.description': 'પ્રણામ એન્ટરપ્રાઇઝ અંકલેશ્વર, ગુજરાતથી રસાયણ, ફાર્મા, પાવર અને ઇન્ફ્રાસ્ટ્રક્ચર ઉદ્યોગો માટે ઔદ્યોગિક હાર્ડવેર, વાલ્વ, ગ્લેન્ડ, ગેસ્કેટ, હોઝ, ફાસ્ટનર અને METACARE કોટિંગ્સ સપ્લાય કરે છે.',
      'meta.ogTitle': 'પ્રણામ એન્ટરપ્રાઇઝ — ચોકસાઈ, સ્ટોકમાં અને તૈયાર',
      'meta.ogDescription': 'Asian Paints PPG METACARE શ્રેણીના અધિકૃત સપ્લાયર, સાથે 13 બ્રાન્ડની ઔદ્યોગિક હાર્ડવેર સૂચિ — 1998થી ગુજરાતના ઔદ્યોગિક પટ્ટાની સેવામાં.',

      'nav.skip': 'મુખ્ય સામગ્રી પર જાઓ',
      'nav.brandAria': 'પ્રણામ એન્ટરપ્રાઇઝ — હોમ',
      'nav.openMenu': 'મેનુ ખોલો',
      'nav.closeMenu': 'મેનુ બંધ કરો',
      'nav.about': 'અમારા વિશે',
      'nav.offerings': 'ઉત્પાદનો',
      'nav.metacare': 'METACARE',
      'nav.partners': 'ભાગીદારો',
      'nav.contact': 'સંપર્ક',
      'nav.getQuote': 'ભાવ મેળવો',
      'nav.language': 'ભાષા',

      'hero.location': 'સ્થાપિત · અંકલેશ્વર · ગુજરાત',
      'hero.eyebrow': 'ઔદ્યોગિક હાર્ડવેર સપ્લાય',
      'hero.titleLine1': 'ચોકસાઈ,',
      'hero.titleLine2': '<em>સ્ટોક</em> અને તૈયાર.',
      'hero.sub': 'ગ્લેન્ડ, વાલ્વ, ફિટિંગ, ફાસ્ટનર અને METACARE કોટિંગ્સનો ઊંડો, તૈયાર સ્ટોક — ગુજરાતના રસાયણ, ફાર્મા, પાવર અને ઇન્ફ્રાસ્ટ્રક્ચર પટ્ટાઓની એ સમય-પાલનતાથી સેવા જેના વિના તમારી લાઇન ચાલી શકતી નથી.',
      'hero.ctaPrimary': 'ભાવ માટે વિનંતી કરો',
      'hero.ctaSecondary': 'શ્રેણી જુઓ',
      'hero.scroll': 'સ્ક્રોલ',

      'manifesto.01Title': 'સ્ટોક્ડ',
      'manifesto.01Sub': 'ઊંડું.',
      'manifesto.02Title': 'તૈયાર',
      'manifesto.02Sub': 'હંમેશા.',
      'manifesto.03Title': 'ભરોસાપાત્ર',
      'manifesto.03Sub': 'વ્યાપક.',

      'about.eyebrow': 'અમારા વિશે',
      'about.title': 'એક સપ્લાયર જેની પાછળ લાઇને ક્યારેય દોડવું ન પડે.',
      'about.lede': 'અંકલેશ્વરના GIDC એસ્ટેટમાં સ્થિત, પ્રણામ એન્ટરપ્રાઇઝે એક સિદ્ધાંત પર પોતાની પ્રતિષ્ઠા બાંધી છે: જે ભાગ તમને જોઈએ છે તે પહેલેથી જ શેલ્ફ પર છે. દાયકાઓથી, અમે એ ઇન્વેન્ટરી રાખીને વિશ્વાસ કમાવ્યો છે જે બીજાઓ રાખતા નથી — અને તેને આગલી શિફ્ટ પહેલા પહોંચાડી છે.',
      'about.body': 'અમે ભરૂચ જિલ્લાના રસાયણ, ફાર્મા, પાવર અને ઇન્ફ્રાસ્ટ્રક્ચર ઉદ્યોગોની સેવા કરીએ છીએ — ભારતના સૌથી પ્રતિષ્ઠિત હાર્ડવેર અને કોટિંગ્સ ઘરો સાથે ભાગીદારી કરીને તમારી જરૂરિયાતને એક કલાકની પહોંચમાં મૂકીએ છીએ.',
      'about.specLocated': 'સ્થાન',
      'about.specLocatedV': 'અંકલેશ્વર, ભરૂચ · ગુજરાત',
      'about.specAddress': 'સરનામું',
      'about.specAddressV': 'શેડ A2/2502, GIDC એસ્ટેટ',
      'about.specSectors': 'ક્ષેત્રો',
      'about.specSectorsV': 'રસાયણ · ફાર્મા · પાવર · ઇન્ફ્રા',
      'about.specAuthorized': 'અધિકૃત',
      'about.specBrandHouse': 'બ્રાન્ડ ઘરો',
      'about.specBrandHouseV': '13 ભરોસાપાત્ર ભાગીદારો',
      'about.specPartner': 'ભાગીદાર',
      'about.specLeadTime': 'લીડ ટાઇમ',
      'about.specLeadTimeV': 'એ જ દિવસે, સ્ટોકમાં',

      'offerings.eyebrow': 'શ્રેણી',
      'offerings.titleHtml': 'એક ઉત્પાદ બ્રહ્માંડ, <em>સ્ટોકમાં.</em>',
      'offerings.sub': 'દસ શ્રેણીઓ. સેંકડો SKU. એક ડિલિવરી વાન.',

      'tile.sealing.label': '01 / સીલિંગ અને ગ્લેન્ડ',
      'tile.sealing.title': 'ગ્લેન્ડ, પેકિંગ અને ગેસ્કેટ',
      'tile.sealing.desc': 'એસ્બેસ્ટોસ અને નોન-એસ્બેસ્ટોસ · ગ્રેફાઇટેડ · PTFE · શૂન્ય-લીક · આગ-પ્રતિરોધક.',
      'tile.valves.label': '02 / વાલ્વ અને કોક',
      'tile.valves.title': 'વાલ્વ અને ફ્લો કંટ્રોલ',
      'tile.valves.desc': 'બટરફ્લાય · બોલ · ચેક · પ્લગ · DRP કોક · Parth PP/HDPE — ફ્લેંજ્ડ અથવા વેફર.',
      'tile.pipes.label': '03 / પાઇપ',
      'tile.pipes.title': 'પાઇપ અને ફિટિંગ',
      'tile.pipes.desc': 'PVC · CPVC · PPR · કાર્બન અને સ્ટેનલેસ સ્ટીલ — સંપૂર્ણ શ્રેણી.',
      'tile.hoses.label': '04 / હોઝ અને ક્લેમ્પ',
      'tile.hoses.title': 'હોઝ, ટ્યુબ અને ક્લેમ્પ',
      'tile.hoses.desc': 'PVC સક્શન · બ્રેઇડેડ · હાઇડ્રોલિક — Klipco વોર્મ-ડ્રાઇવ ક્લેમ્પ.',
      'tile.fasteners.label': '05 / ફાસ્ટનર',
      'tile.fasteners.title': 'ફાસ્ટનર',
      'tile.fasteners.desc': 'એન્કર બોલ્ટ · U/J બોલ્ટ · Unbrako હાઇ-ટેન્સાઇલ.',
      'tile.power.label': '06 / પાવર ટ્રાન્સમિશન',
      'tile.power.title': 'ડ્રાઇવ અને કપ્લિંગ',
      'tile.power.desc': 'પુલી · પિન-બુશ કપ્લિંગ · Safe-Ring · Fenner બેલ્ટ.',
      'tile.strainers.label': '07 / સ્ટ્રેનર',
      'tile.strainers.title': 'સ્ટ્રેનર અને સાઇટ ગ્લાસ',
      'tile.strainers.desc': 'બાસ્કેટ · Y-ટાઇપ · સાઇટ ગ્લાસ · ડાયાફ્રામ.',
      'tile.meters.label': '08 / ઇન્સ્ટ્રુમેન્ટેશન',
      'tile.meters.title': 'વોટર મીટર',
      'tile.meters.desc': 'ઘરેલું ફ્લો · બલ્ક ઔદ્યોગિક — Kranti અધિકૃત.',
      'tile.tools.label': '09 / હેન્ડ ટૂલ્સ',
      'tile.tools.title': 'હેન્ડ ટૂલ્સ',
      'tile.tools.desc': 'Taparia ની સંપૂર્ણ શ્રેણી — પ્લાયર, ડ્રાઇવર, હેક્સ કી, કિટ.',
      'tile.structural.label': '10 / સ્ટ્રક્ચરલ',
      'tile.structural.title': 'સ્ટ્રક્ચરલ સ્ટીલ',
      'tile.structural.desc': 'એંગલ · ચેનલ · પાઇપ · રિબાર — સ્પેક મુજબ.',

      'coatings.eyebrow': 'ઔદ્યોગિક કોટિંગ્સ',
      'coatings.title': 'METACARE — સપાટી-સહનશીલ શ્રેણી.',
      'coatings.sub': 'Asian Paints PPG (Industrial Paints) ના અધિકૃત સપ્લાયર તરીકે, પ્રણામ એન્ટરપ્રાઇઝ એક્રિલિક, એપોક્સી, ટેંક, ગરમી-પ્રતિરોધક અને ફ્લોર કોટિંગ્સની સંપૂર્ણ METACARE શ્રેણી સ્ટોક કરે છે.',
      'coating.asiacryl.kind': 'એક્રિલિક',
      'coating.asiacryl.desc': 'સામાન્ય ઔદ્યોગિક અને માળખાકીય સપાટીઓ માટે ઝડપથી સુકાતું એક્રિલિક ફિનિશ.',
      'coating.apcodur.kind': 'એપોક્સી',
      'coating.apcodur.desc': 'ગંભીર રાસાયણિક વાતાવરણ માટે હાઇ-બિલ્ડ એપોક્સી સુરક્ષા.',
      'coating.apcoguard.kind': 'ટેંક',
      'coating.apcoguard.desc': 'રસાયણ, સોલ્વેન્ટ અને પાણી રાખતા સ્ટોરેજ ટેંક માટે લાઇનિંગ.',
      'coating.apcotherm.kind': 'ગરમી',
      'coating.apcotherm.desc': 'ગરમ ઇન્સ્યુલેશન, સ્ટેક અને એક્ઝોસ્ટ માટે ગરમી-પ્રતિરોધક કોટિંગ.',
      'coating.acrysil.kind': 'ગરમી',
      'coating.acrysil.desc': 'સતત ઊંચા-તાપમાન એક્સપોઝર માટે સિલિકોન-એક્રિલિક ફિનિશ.',
      'coating.apcoflor.kind': 'ફ્લોર',
      'coating.apcoflor.desc': 'પ્લાન્ટ, વેરહાઉસ અને વર્કશોપ માટે ટકાઉ ફ્લોર સિસ્ટમ.',

      'partners.eyebrow': 'અધિકૃત ઘરો',
      'partners.titleHtml': 'જે બ્રાન્ડ્સ અમારા પર ભરોસો કરે છે, <em>કાઉન્ટર પર.</em>',
      'partners.sub': 'ભારતના તેર સૌથી પ્રતિષ્ઠિત હાર્ડવેર, પેઇન્ટ અને ટૂલિંગ બ્રાન્ડ્સ, અધિકૃત ભાગીદારો તરીકે સ્ટોક અને સપ્લાય.',

      'sectors.eyebrow': 'ક્ષેત્રો',
      'sectors.title': 'જે ઉદ્યોગોને અમે ચાલતા રાખીએ છીએ.',
      'sector.chemical.title': 'રસાયણ',
      'sector.chemical.desc': 'પ્રોસેસ પ્લાન્ટ, બેચ રિએક્ટર, સોલ્વેન્ટ હેન્ડલિંગ.',
      'sector.pharma.title': 'ફાર્મા',
      'sector.pharma.desc': 'સેનિટરી લાઇન, ક્લીન-રૂમ ક્રિટિકલ સેવા માટે સીલિંગ.',
      'sector.power.title': 'પાવર',
      'sector.power.desc': 'સ્ટીમ, કન્ડેન્સેટ, કૂલિંગ વોટર — હાઇ-સાઇકલ વાલ્વ અને ગેસ્કેટ.',
      'sector.infra.title': 'ઇન્ફ્રાસ્ટ્રક્ચર',
      'sector.infra.desc': 'સિવિલ સ્ટ્રક્ચરલ, વોટર મીટર, પાઇપિંગ અને રક્ષણાત્મક કોટિંગ્સ.',

      'why.eyebrow': 'પ્રણામ શા માટે',
      'why.title': 'આંકડા જે સમયસર પહોંચે છે.',
      'why.brands.suffix': 'બ્રાન્ડ ભાગીદારો',
      'why.brands.desc': 'હાર્ડવેર, પેઇન્ટ અને ટૂલિંગમાં સ્ટોક અને સપ્લાય માટે અધિકૃત.',
      'why.sectors.suffix': 'મુખ્ય ક્ષેત્રો',
      'why.sectors.desc': 'રસાયણ, ફાર્મા, પાવર અને ઇન્ફ્રાસ્ટ્રક્ચર — ખાસ કરીને સ્ટોક્ડ.',
      'why.skus.suffix': '+ SKU',
      'why.skus.desc': 'એક વોશરથી લઈને સંપૂર્ણ-બોર બટરફ્લાય વાલ્વ સુધી, શેલ્ફ પર.',
      'why.despatch.suffix': 'કલાકમાં ડિસ્પેચ',
      'why.despatch.desc': 'ભરૂચ ઔદ્યોગિક પટ્ટામાં સ્ટોક આઇટમ માટે એ જ દિવસે.',

      'contact.eyebrow': 'સંપર્ક કરો',
      'contact.title': 'જણાવો લાઇન પર શું જોઈએ છે.',
      'contact.sub': 'સંદેશ મૂકો અથવા સીધો કોલ કરો — ભાવ સામાન્ય રીતે એ જ દિવસે પાછા આવે છે.',
      'contact.cardTag': '// સપ્લાય · તમારી જરૂરિયાત પહેલાંથી',
      'contact.partnerLabel': 'ભાગીદાર',
      'contact.addressLabel': 'સરનામું',
      'contact.addressValue': 'શેડ નં. A2/2502, GIDC એસ્ટેટ<br>અંકલેશ્વર · ગુજરાત · ભારત',
      'contact.phoneLabel': 'ફોન',
      'contact.emailLabel': 'ઇમેઇલ',
      'contact.webLabel': 'વેબ',

      'form.label': '// વિનંતી · 001',
      'form.name': 'તમારું નામ',
      'form.email': 'ઇમેઇલ સરનામું',
      'form.phone': 'ફોન (વૈકલ્પિક)',
      'form.message': 'તમને શું જોઈએ છે?',
      'form.submit': 'વિનંતી મોકલો',
      'form.fine': 'મોકલીને તમે પુષ્ટિ કરો છો કે અમે તમારી પૂછપરછ વિશે તમારો સંપર્ક કરી શકીએ. કોઈ માર્કેટિંગ નહીં.',
      'form.sending': 'મોકલાઈ રહ્યું છે…',
      'form.success': 'આભાર — અમે એક કાર્યદિવસમાં તમારો સંપર્ક કરીશું.',
      'form.error': 'મોકલી શકાયું નથી. કૃપા કરી ફરી પ્રયાસ કરો અથવા અમને કૉલ/ઇમેઇલ કરો.',
      'form.errorOffline': 'એવું લાગે છે કે તમે ઑફલાઇન છો. કૃપા કરી તમારું કનેક્શન તપાસો અને ફરી પ્રયાસ કરો.',

      'footer.tag': 'ઔદ્યોગિક હાર્ડવેર, સ્ટોકમાં અને તૈયાર — અંકલેશ્વર, ગુજરાતથી.',
      'footer.menu': '// મેનુ',
      'footer.reach': '// સંપર્ક',
      'footer.addressShort': 'શેડ A2/2502, GIDC એસ્ટેટ, અંકલેશ્વર',
      'footer.copyright': '© પ્રણામ એન્ટરપ્રાઇઝ · અંકલેશ્વર · ગુજરાત',
      'footer.tagline': 'ચોકસાઈ · સ્ટોક્ડ · તૈયાર',
    },
  };

  const STORAGE_KEY = 'pranam-lang';
  const SUPPORTED = ['en', 'hi', 'gu'];
  let currentLang = 'en';

  function detectInitialLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.includes(saved)) return saved;
    } catch (_) { /* private mode */ }
    const navLang = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(navLang) ? navLang : 'en';
  }

  function applyLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = 'en';
    currentLang = lang;
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.getAttribute('data-i18n');
      if (dict[k] != null) el.textContent = dict[k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const k = el.getAttribute('data-i18n-html');
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const k = el.getAttribute('data-i18n-placeholder');
      if (dict[k] != null) el.setAttribute('placeholder', dict[k]);
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
      const k = el.getAttribute('data-i18n-aria-label');
      if (dict[k] != null) el.setAttribute('aria-label', dict[k]);
    });
    document.querySelectorAll('[data-i18n-content]').forEach((el) => {
      const k = el.getAttribute('data-i18n-content');
      if (dict[k] != null) el.setAttribute('content', dict[k]);
    });

    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) {
      const k = titleEl.getAttribute('data-i18n');
      if (dict[k] != null) document.title = dict[k];
    }

    // Refresh nav-toggle aria-label to reflect current open/closed state
    const toggleBtn = document.querySelector('.nav-toggle');
    if (toggleBtn) {
      const open = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-label', dict[open ? 'nav.closeMenu' : 'nav.openMenu']);
    }

    // Update switcher state
    const cur = document.querySelector('.lang-current');
    if (cur) cur.textContent = lang.toUpperCase();
    document.querySelectorAll('.lang-menu [role="option"]').forEach((li) => {
      li.setAttribute('aria-selected', String(li.dataset.lang === lang));
    });
    document.querySelectorAll('.drawer-lang-btn').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* private mode */ }
  }

  function wireSwitcher() {
    const wrap = document.querySelector('.lang-switch');
    const btn = wrap && wrap.querySelector('.lang-btn');
    if (!wrap || !btn) return;

    const close = () => {
      wrap.dataset.open = 'false';
      btn.setAttribute('aria-expanded', 'false');
    };

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = wrap.dataset.open === 'true';
      wrap.dataset.open = String(!open);
      btn.setAttribute('aria-expanded', String(!open));
    });

    wrap.querySelectorAll('[role="option"]').forEach((li) => {
      li.addEventListener('click', () => {
        applyLang(li.dataset.lang);
        close();
      });
    });

    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && wrap.dataset.open === 'true') {
        close();
        btn.focus();
      }
    });

    document.querySelectorAll('.drawer-lang-btn').forEach((b) => {
      b.addEventListener('click', () => applyLang(b.dataset.lang));
    });
  }

  // Apply chosen language as early as possible
  applyLang(detectInitialLang());
  wireSwitcher();

  /* ---------- 1. Header scroll state ---------- */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (!header) return;
    header.dataset.state = window.scrollY > 24 ? 'scrolled' : 'top';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 2. Mobile nav toggle ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      const dict = translations[currentLang] || translations.en;
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? dict['nav.openMenu'] : dict['nav.closeMenu']);
      nav.dataset.open = String(!open);
    });
    nav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        const dict = translations[currentLang] || translations.en;
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', dict['nav.openMenu']);
        nav.dataset.open = 'false';
      });
    });
  }

  /* ---------- 3. Hero ken-burns rotation ---------- */
  const frames = document.querySelectorAll('.hero-frame');
  if (frames.length > 1 && !reduceMotion) {
    let i = 0;
    setInterval(() => {
      frames[i].classList.remove('is-active');
      i = (i + 1) % frames.length;
      frames[i].classList.add('is-active');
    }, 6500);
  }

  /* ---------- 4. Scroll reveals ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- 5. Animated counters ---------- */
  const counters = document.querySelectorAll('.counter-num');
  const animateCount = (el) => {
    const target = parseInt(el.dataset.target || '0', 10);
    if (reduceMotion || target === 0) {
      el.textContent = target;
      return;
    }
    const duration = 1400;
    const start = performance.now();
    const startVal = 0;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = Math.round(startVal + (target - startVal) * eased);
      el.textContent = val;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if ('IntersectionObserver' in window) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          co.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(el => co.observe(el));
  } else {
    counters.forEach(animateCount);
  }

  /* ---------- 6. Magnetic tilt on bento tiles ---------- */
  if (!reduceMotion && window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.tile').forEach((tile) => {
      let rect = null;
      const onEnter = () => { rect = tile.getBoundingClientRect(); };
      const onMove = (e) => {
        if (!rect) rect = tile.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        tile.style.transform = `translateY(-2px) rotateX(${(-y * 2.4).toFixed(2)}deg) rotateY(${(x * 2.4).toFixed(2)}deg)`;
        const img = tile.querySelector('.tile-media img');
        if (img) img.style.transform = `scale(1.06) translate(${(x * 8).toFixed(1)}px, ${(y * 8).toFixed(1)}px)`;
      };
      const onLeave = () => {
        tile.style.transform = '';
        const img = tile.querySelector('.tile-media img');
        if (img) img.style.transform = '';
        rect = null;
      };
      tile.addEventListener('mouseenter', onEnter);
      tile.addEventListener('mousemove', onMove);
      tile.addEventListener('mouseleave', onLeave);
    });
    const bento = document.querySelector('.bento');
    if (bento) bento.style.perspective = '1200px';
  }

  /* ---------- 7. Smooth focus on anchor click ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });

  /* ---------- 8. Contact form submit ---------- */
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  if (contactForm && formStatus) {
    const statusMsg = formStatus.querySelector('.form-status-msg');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const submitLabel = submitBtn && submitBtn.querySelector('span:not([aria-hidden])');
    const tr = (key) => {
      const dict = translations[currentLang] || translations.en;
      return dict[key] || translations.en[key] || '';
    };

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (contactForm.botcheck && contactForm.botcheck.checked) return;

      formStatus.hidden = false;
      formStatus.dataset.state = 'sending';
      statusMsg.textContent = tr('form.sending');
      submitBtn.disabled = true;
      const originalLabel = submitLabel ? submitLabel.textContent : '';
      if (submitLabel) submitLabel.textContent = tr('form.sending');

      if (!navigator.onLine) {
        formStatus.dataset.state = 'error';
        statusMsg.textContent = tr('form.errorOffline');
        submitBtn.disabled = false;
        if (submitLabel) submitLabel.textContent = originalLabel;
        return;
      }

      try {
        const data = Object.fromEntries(new FormData(contactForm));
        const res = await fetch(contactForm.action, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(data),
        });
        const json = await res.json().catch(() => ({}));
        if (res.ok && json.success) {
          formStatus.dataset.state = 'success';
          statusMsg.textContent = tr('form.success');
          contactForm.reset();
        } else {
          throw new Error(json.message || res.statusText || 'send failed');
        }
      } catch (err) {
        formStatus.dataset.state = 'error';
        const base = tr('form.error');
        statusMsg.textContent = err && err.message ? base + ' (' + err.message + ')' : base;
      } finally {
        submitBtn.disabled = false;
        if (submitLabel) submitLabel.textContent = originalLabel;
      }
    });
  }
})();
