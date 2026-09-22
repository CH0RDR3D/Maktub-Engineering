export const GREEN_ENERGY_SECTORS = [
  {
    id: 'all',
    name: 'All Solutions',
    icon: 'ti ti-layout-grid',
    tagline: 'Comprehensive renewable energy & infrastructure portfolio'
  },
  {
    id: 'commercial-industrial',
    name: 'Commercial & Industrial',
    icon: 'ti ti-building-factory',
    tagline: 'High-yield solar, storage, and efficiency for enterprises and commercial facilities'
  },
  {
    id: 'mining',
    name: 'Mining & Heavy Industry',
    icon: 'ti ti-pick',
    tagline: 'Resilient multi-megawatt hybrid plants and high-availability power for extractive industries'
  },
  {
    id: 'agriculture',
    name: 'Agriculture & Agribusiness',
    icon: 'ti ti-plant-2',
    tagline: 'Solar irrigation, water pumping, cold storage, milling, and agro microgrids'
  },
  {
    id: 'government-public',
    name: 'Government & Public Sector',
    icon: 'ti ti-building-bank',
    tagline: 'Sustainable infrastructure, solar lighting, healthcare, education, and institutional PPPs'
  },
  {
    id: 'communities-offgrid',
    name: 'Communities & Off-Grid',
    icon: 'ti ti-home-eco',
    tagline: 'Mini-grids, microgrids, and productive-use energy bringing reliable power to rural areas'
  },
  {
    id: 'telecommunications',
    name: 'Telecommunications',
    icon: 'ti ti-antenna',
    tagline: 'Continuous solar-hybrid power and backup storage for remote tower sites and critical networks'
  },
  {
    id: 'epc-advisory',
    name: 'EPC, PPAs & Advisory',
    icon: 'ti ti-certificate',
    tagline: 'Turnkey engineering, project development, Energy-as-a-Service, and asset management'
  }
];

export const GREEN_ENERGY_SOLUTIONS = [
  {
    id: 'commercial-industrial-solar',
    num: 1,
    title: 'Commercial & Industrial Solar Energy',
    shortTitle: 'C&I Solar Energy',
    slug: 'commercial-industrial-solar',
    sector: 'commercial-industrial',
    icon: 'ti ti-solar-panel',
    badge: 'Solar Generation',
    tagline: 'High-performance solar PV systems for commercial and industrial clients.',
    overview:
      'Maktub Engineering designs and implements high-performance solar photovoltaic (PV) systems tailored for commercial and industrial clients across Zambia and the Southern African region. We provide turnkey solutions ranging from small commercial rooftop installations to large-scale multi-megawatt ground-mounted projects that dramatically reduce electricity overheads and eliminate operational downtime.',
    highlights: [
      'Rooftop solar PV systems for factories, warehouses, and shopping malls',
      'Ground-mounted solar PV systems and commercial solar farms',
      'Industrial solar installations for heavy manufacturing and processing plants',
      'Solar carports and parking canopy generation structures',
      'Solar systems for schools, universities, hospitals, and healthcare facilities',
      'Solar-powered water pumping and commercial public-sector facilities'
    ],
    applications: [
      'Rooftop solar PV systems',
      'Ground-mounted solar PV systems',
      'Commercial solar farms',
      'Industrial solar installations',
      'Solar systems for factories and warehouses',
      'Solar systems for shopping centres and office complexes',
      'Solar systems for schools and universities',
      'Solar systems for hospitals and healthcare facilities',
      'Solar systems for hotels and hospitality facilities',
      'Solar systems for farms and agricultural enterprises',
      'Solar systems for mines and mining contractors',
      'Solar-powered water pumping systems',
      'Solar carports and parking structures',
      'Solar systems for public-sector facilities'
    ],
    scale: 'From small commercial installations (20kW–100kW) to multi-megawatt utility and industrial arrays (1MW–20MW+).'
  },
  {
    id: 'battery-storage-bess',
    num: 2,
    title: 'Battery Energy Storage Systems (BESS)',
    shortTitle: 'BESS Battery Storage',
    slug: 'battery-storage-bess',
    sector: 'commercial-industrial',
    icon: 'ti ti-battery-charging',
    badge: 'Energy Storage',
    tagline: 'Store energy. Improve reliability. Reduce peak demand energy costs.',
    overview:
      'Maktub provides advanced Battery Energy Storage System (BESS) solutions for organisations seeking greater energy security, resilience against load shedding, and tariff optimisation. Our battery solutions integrate seamlessly with solar PV, the national grid, and backup generators to deliver uninterrupted clean power.',
    highlights: [
      'Commercial & industrial lithium-ion BESS integration',
      'Solar-plus-storage hybrid configurations for 24/7 power autonomy',
      'Peak-demand shaving and time-of-use tariff energy shifting',
      'Critical-load backup and seamless sub-cycle UPS switching',
      'Microgrid stabilization and renewable intermittency smoothing'
    ],
    applications: [
      'Commercial and industrial battery storage',
      'Solar-plus-storage systems',
      'Peak-demand management',
      'Backup power & UPS systems',
      'Energy shifting (arbitrage)',
      'Critical-load protection',
      'Microgrid applications',
      'Mining operations',
      'Data centres',
      'Hospitals & surgical suites',
      'Manufacturing facilities',
      'Telecommunications infrastructure',
      'Government facilities',
      'Rural electrification projects'
    ],
    regulatoryNote:
      'Battery storage is increasingly important in modern renewable-energy projects because it enables renewable power to be available beyond periods of solar generation. Zambia’s emerging renewable-energy financing programmes place particular emphasis on renewable projects paired with battery storage.'
  },
  {
    id: 'hybrid-power-systems',
    num: 3,
    title: 'Hybrid Power Systems',
    shortTitle: 'Hybrid Power Systems',
    slug: 'hybrid-power-systems',
    sector: 'mining',
    icon: 'ti ti-arrows-shuffle',
    badge: 'Power Architecture',
    tagline: 'Engineered multi-source energy systems combining solar, storage, grid, and generators.',
    overview:
      'We engineer intelligent hybrid energy systems combining multiple energy sources to provide continuous, reliable, and cost-effective electricity. Our objective is to drastically reduce dependence on expensive, carbon-intensive diesel backup generation while maintaining 100% reliable power availability.',
    formula: 'Solar PV + Battery Storage + Grid + Generator + Other Renewable Sources',
    highlights: [
      'Smart generator-diesel displacement algorithms (saving up to 80% fuel)',
      'Automated dynamic synchronization and source load-switching',
      'Scalable architecture designed for harsh African environmental conditions',
      'High-uptime engineering for energy-intensive remote and grid-tied operations'
    ],
    applications: [
      'Mines & mineral processing plants',
      'Commercial farms & agro-processing complexes',
      'Government facilities & administrative complexes',
      'Remote communities & islanded microgrids',
      'Hospitals & provincial health centers',
      'Schools & universities',
      'Industrial manufacturing facilities',
      'Telecommunications sites & repeater towers',
      'Construction camps & temporary project bases',
      'Commercial properties & shopping complexes',
      'Rural infrastructure'
    ]
  },
  {
    id: 'solar-minigrids-rural',
    num: 4,
    title: 'Solar Mini-Grids & Rural Electrification',
    shortTitle: 'Solar Mini-Grids',
    slug: 'solar-minigrids-rural',
    sector: 'communities-offgrid',
    icon: 'ti ti-home-bolt',
    badge: 'Rural Electrification',
    tagline: 'Bringing reliable clean energy to underserved rural and off-grid communities.',
    overview:
      'Maktub develops, supplies, and deploys renewable-energy mini-grids and microgrid systems for rural and off-grid communities across Zambia and the region. We support projects across every phase—from preliminary feasibility and community load profiling through to financing structuring, procurement, construction, commissioning, and long-term operations.',
    highlights: [
      'Off-grid solar mini-grids with distributed low-voltage reticulation',
      'Containerized solar-battery microgrids for rapid community deployment',
      'Productive-use energy systems enabling local commerce, milling, and cold chains',
      'Electrification of rural schools, clinics, and clean water delivery points'
    ],
    applications: [
      'Solar mini-grids',
      'Solar-battery microgrids',
      'Community energy systems',
      'Rural electrification schemes',
      'Solar-powered public infrastructure',
      'Productive-use energy systems',
      'Solar-powered schools',
      'Solar-powered health centres',
      'Solar street lighting',
      'Solar water supply systems',
      'Rural commercial power systems'
    ],
    regulatoryNote:
      "Zambia's off-grid regulatory framework provides established pathways for solar generation and mini-grid distribution, including tariffs and licenses for supplying electricity directly to consumers."
  },
  {
    id: 'government-public-sector',
    num: 5,
    title: 'Government & Public-Sector Energy Solutions',
    shortTitle: 'Government & Public Sector',
    slug: 'government-public-sector',
    sector: 'government-public',
    icon: 'ti ti-building-bank',
    badge: 'Institutional Energy',
    tagline: 'Sustainable energy infrastructure for ministries, local authorities, and parastatals.',
    overview:
      'Maktub partners with Government Ministries, Local Authorities, Parastatals, Public Institutions, Development Agencies, and Public-Private Partnerships (PPPs) to deliver sustainable, resilient, and compliant energy infrastructure.',
    highlights: [
      'National institution decarbonization and solarization programmes',
      'Healthcare and emergency hospital power resilience',
      'Public lighting, street lighting, and water utility pumping solutions',
      'Versatile procurement & delivery models compliant with ZPPA & CEEC standards'
    ],
    deliveryModels: ['EPC', 'Design & Build', 'Turnkey Delivery', 'PPP', 'BOOT', 'Energy-as-a-Service', 'O&M'],
    applications: [
      'Government office complexes & civic centres',
      'Ministries and national agencies',
      'Hospitals and provincial health centres',
      'Schools, colleges, and national universities',
      'Police, correctional, and defence infrastructure',
      'Local authority municipal infrastructure',
      'Water utilities and water treatment plants',
      'Public street and highway lighting',
      'Government housing schemes',
      'Rural development programmes',
      'Public transport and terminal infrastructure',
      'Public facilities and community hubs'
    ]
  },
  {
    id: 'mining-heavy-industry',
    num: 6,
    title: 'Mining & Heavy Industry Energy Solutions',
    shortTitle: 'Mining & Heavy Industry',
    slug: 'mining-heavy-industry',
    sector: 'mining',
    icon: 'ti ti-pick',
    badge: 'Heavy Industry',
    tagline: 'Reliable, high-availability power engineered for energy-intensive operations.',
    overview:
      'Mining operations require high availability, predictable energy costs, operational resilience, and scalable infrastructure. Maktub provides renewable and hybrid power solutions engineered specifically around the client operational profile rather than simply selling standard equipment.',
    highlights: [
      'Large-scale behind-the-meter solar PV farms (MW scale)',
      'Solar + High-Capacity BESS for peak shaving and spinning reserve',
      'Dynamic power quality management and harmonic mitigation',
      'Dedicated remote mining camp, workshop, and pumping electrification'
    ],
    applications: [
      'Large-scale solar PV',
      'Solar + BESS hybrid plants',
      'Behind-the-meter generation',
      'Hybrid power plants (Solar-Diesel-Grid)',
      'Energy management systems (EMS)',
      'Peak-demand reduction & maximum demand control',
      'Solar-powered mining camps & staff housing',
      'Solar-powered industrial workshops',
      'Solar-powered dewatering and process pumping',
      'Remote-site and greenfield exploration power',
      'Industrial backup systems',
      'Energy monitoring and operational optimisation'
    ]
  },
  {
    id: 'solar-agriculture',
    num: 7,
    title: 'Solar Energy for Agriculture & Agribusiness',
    shortTitle: 'Agriculture & Agribusiness',
    slug: 'solar-agriculture',
    sector: 'agriculture',
    icon: 'ti ti-plant-2',
    badge: 'Agro-Energy',
    tagline: 'Powering the future of sustainable, productive agriculture and agro-processing.',
    overview:
      'Maktub delivers renewable-energy solutions for commercial farms, agricultural processors, farming cooperatives, and agribusinesses. Our objective is to drastically reduce agricultural operating costs, eliminate diesel pumping expenses, and increase crop yields through energy independence.',
    highlights: [
      'High-yield solar irrigation & borehole pumping for pivot and drip schemes',
      'Solar-powered cold storage and packhouse temperature management',
      'Solar grain drying, milling, and livestock processing power',
      'Agricultural microgrids providing continuous power for farm operations'
    ],
    applications: [
      'Solar irrigation systems (Centre pivot, drip, sprinkler)',
      'Solar water borehole pumping & livestock watering',
      'Solar-powered cold storage & packhouse cooling',
      'Solar-powered grain storage & aeration',
      'Solar-powered commercial milling plants',
      'Solar-powered processing plants',
      'Solar-powered poultry operations (climate control & lighting)',
      'Solar-powered dairy operations & milk chilling',
      'Solar-powered greenhouses',
      'Agricultural mini-grids for farming communities',
      'Battery energy storage for evening farm loads',
      'Complete farm electrification'
    ]
  },
  {
    id: 'energy-efficient-infrastructure',
    num: 8,
    title: 'Energy-Efficient Infrastructure',
    shortTitle: 'Energy Efficiency',
    slug: 'energy-efficient-infrastructure',
    sector: 'commercial-industrial',
    icon: 'ti ti-bulb',
    badge: 'Efficiency & Audits',
    tagline: 'Green energy is not only about generating electricity—it is about using it efficiently.',
    overview:
      'Maktub helps commercial, industrial, and public organisations use energy more efficiently. We identify opportunities to eliminate waste and reduce unnecessary energy consumption before determining the optimum renewable-energy sizing.',
    highlights: [
      'Level 1, 2, and 3 comprehensive building and industrial energy audits',
      'Smart LED commercial and street lighting retrofits with motion controls',
      'Power-factor correction (PFC) banks to eliminate utility penalties',
      'Variable Speed Drives (VSDs) and high-efficiency electric motors'
    ],
    applications: [
      'LED lighting systems & retrofits',
      'Smart lighting controls & daylight harvesting',
      'Energy-efficient electrical distribution systems',
      'Building energy audits & thermal imaging',
      'Industrial process energy audits',
      'Continuous energy monitoring',
      'Smart metering systems',
      'Power-factor correction (PFC)',
      'Efficient industrial motors and variable speed drives (VFD)',
      'Building Energy Management Systems (BEMS)',
      'Efficient HVAC systems & heat pumps',
      'Solar thermal water heating',
      'Building envelope energy optimisation'
    ]
  },
  {
    id: 'smart-energy-management',
    num: 9,
    title: 'Smart Energy Management & Monitoring',
    shortTitle: 'Smart Energy Monitoring',
    slug: 'smart-energy-management',
    sector: 'commercial-industrial',
    icon: 'ti ti-dashboard',
    badge: 'Digital Intelligence',
    tagline: 'Turn live energy data into actionable business intelligence and cost savings.',
    overview:
      'Maktub deploys smart energy monitoring and management technologies that allow facility managers and executives to understand and optimise their energy consumption in real time. Clients monitor system performance, asset health, and carbon reductions to support better financial decisions.',
    highlights: [
      'Cloud-connected smart meters and sub-metering circuits',
      'Interactive executive dashboards with live kWh tracking and alerts',
      'Automated load management, shedding, and peak shaving',
      'Remote fault detection, thermal anomaly alerts, and preventive maintenance'
    ],
    applications: [
      'Smart utility & sub-meters',
      'Remote cloud-based monitoring',
      'Solar PV array generation monitoring',
      'Battery storage health & cycle monitoring',
      'Interactive energy dashboards (Web & Mobile)',
      'Automated load management',
      'Energy consumption analytics & reporting',
      'Performance ratio (PR) monitoring',
      'Remote fault detection & automated alerts',
      'Preventive maintenance scheduling',
      'ESG and carbon accounting reporting'
    ]
  },
  {
    id: 'net-metering',
    num: 10,
    title: 'Net-Metering Solutions',
    shortTitle: 'Net-Metering Solutions',
    slug: 'net-metering',
    sector: 'commercial-industrial',
    icon: 'ti ti-arrows-exchange',
    badge: 'Grid Interconnection',
    tagline: 'Generate clean electricity for your own use and export surplus power to the grid.',
    overview:
      'Maktub supports eligible commercial, industrial, and institutional customers seeking to generate their own renewable electricity and export eligible surplus energy to the national grid under the official Zambian Net-Metering Framework.',
    workflow:
      'Assessment → System Design → Engineering → Equipment Supply → Installation → Documentation → Net-Metering Support → Commissioning → Monitoring',
    highlights: [
      'Comprehensive grid-tie engineering compliant with ZESCO standards',
      'Bi-directional smart metering integration and protective relaying',
      'Full regulatory liaison, license documentation, and utility inspection support',
      'Financial ROI modeling incorporating ERB reference feed-in tariffs'
    ],
    applications: [
      'Commercial grid-tied rooftop solar',
      'Industrial grid-connected solar installations',
      'Institutional & university campus net-metering',
      'Export tariff financial analysis & tracking'
    ],
    regulatoryNote:
      "Zambia's net-metering framework enables customers to generate renewable electricity for self-consumption and export surplus electricity to the grid. ZESCO provides an online application and tracking platform, while the Energy Regulation Board (ERB) has established the regulatory framework and 2026 reference tariffs."
  },
  {
    id: 'renewable-project-development',
    num: 11,
    title: 'Renewable Energy Project Development',
    shortTitle: 'Project Development',
    slug: 'renewable-project-development',
    sector: 'epc-advisory',
    icon: 'ti ti-compass',
    badge: 'Development & Finance',
    tagline: 'Supporting project owners, developers, and investors from concept to bankability.',
    overview:
      'Maktub supports investors, institutions, project owners, and development finance institutions (DFIs) in developing renewable-energy projects from initial concept through to bankable feasibility, financial close, and full implementation.',
    highlights: [
      'Site solar resource assessment and LiDAR topography',
      'Bankable yield simulations (P50/P90) using industry-standard tools',
      'Off-taker engagement, PPA negotiations, and financial structuring',
      'Statutory permitting (ZEMA, ERB, Local Authority, Ministry)'
    ],
    applications: [
      'Project identification & land acquisition',
      'Preliminary & bankable feasibility studies',
      'Technical & geotechnical assessments',
      'Energy-resource assessment & meteorological logging',
      'Site & grid interconnection assessment',
      'Load profiling & power flow assessment',
      'Conceptual & detailed engineering design',
      'Financial modelling (IRR, NPV, LCOE)',
      'CAPEX/OPEX project costing',
      'Investment & equity structuring',
      'Technology selection (Panels, Inverters, BESS)',
      'EPC contract structuring & tendering',
      'Investor & debt financier coordination',
      'Off-taker engagement & PPA drafting',
      'Regulatory & environmental (ZEMA) coordination',
      'Project implementation & Owner’s Engineer role',
      'Long-term operations and maintenance setup'
    ]
  },
  {
    id: 'epc-turnkey-delivery',
    num: 12,
    title: 'Engineering, Procurement & Construction (EPC)',
    shortTitle: 'Turnkey EPC Delivery',
    slug: 'epc-turnkey-delivery',
    sector: 'epc-advisory',
    icon: 'ti ti-briefcase',
    badge: 'Turnkey Delivery',
    tagline: 'One partner. One integrated delivery platform for renewable infrastructure.',
    overview:
      'Maktub provides turnkey EPC project delivery for renewable-energy and electrical infrastructure projects across Southern Africa. We take single-point responsibility for engineering, global Tier-1 equipment procurement, certified construction, and post-commissioning performance guarantees.',
    highlights: [
      'Multi-disciplinary in-house electrical, civil, and structural engineering',
      'Direct Tier-1 OEM partnerships for solar modules, inverters, and BESS',
      'Rigorous quality control, IEC standards compliance, and grid interconnection testing',
      'Comprehensive warranty backing and lifecycle asset management'
    ],
    phases: [
      {
        phase: 'Engineering',
        items: [
          'Electrical engineering & single-line diagrams',
          'Civil works & foundations engineering',
          'Structural engineering & wind load modeling',
          'Solar PV string & array system design',
          'Battery storage design & thermal management',
          'Grid interconnection & SCADA integration'
        ]
      },
      {
        phase: 'Procurement',
        items: [
          'Tier-1 Solar PV modules',
          'Central & string inverters',
          'Lithium iron phosphate (LFP) batteries',
          'Step-up transformers & medium-voltage switchgear',
          'Specialized cabling & DC disconnects',
          'Certified mounting structures & tracker systems',
          'Protection equipment & surge arrestors',
          'SCADA & weather monitoring stations'
        ]
      },
      {
        phase: 'Construction',
        items: [
          'Site preparation & perimeter security',
          'Civil foundation & trenching works',
          'Mounting structure installation & alignment',
          'Electrical installation & DC/AC terminations',
          'Cabling & containment',
          'Grid connection & substation tie-in',
          'Testing, pre-commissioning & live commissioning'
        ]
      },
      {
        phase: 'After-Sales & Asset Care',
        items: [
          'Full-service operations & preventive maintenance',
          'Remote telemetry & performance ratio monitoring',
          'Rapid response repair services',
          'System upgrades & repowering',
          'Performance optimisation'
        ]
      }
    ],
    applications: [
      'Turnkey solar PV power plants',
      'Utility-scale and distributed BESS',
      'Commercial rooftop installations',
      'Industrial microgrids and substations'
    ]
  },
  {
    id: 'energy-as-a-service',
    num: 13,
    title: 'Energy-as-a-Service & Power Purchase Solutions',
    shortTitle: 'Energy-as-a-Service (PPAs)',
    slug: 'energy-as-a-service',
    sector: 'commercial-industrial',
    icon: 'ti ti-coins',
    badge: 'Zero-CAPEX Models',
    tagline: 'Access clean renewable energy with zero or reduced upfront capital expenditure.',
    overview:
      'For clients that prefer not to make large upfront capital investments, Maktub explores innovative project financing structures with leading local and international investors. Clients access state-of-the-art renewable energy infrastructure, immediate cost savings, and hedge against rising grid tariffs.',
    highlights: [
      'Zero-CAPEX models with predictable per-kWh electricity billing',
      'Long-term Power Purchase Agreements (PPAs) and flexible solar leasing',
      'Build-Own-Operate-Transfer (BOOT) structures for industrial clients',
      'Performance-based energy savings guarantees'
    ],
    financingModels: [
      'Energy-as-a-Service (EaaS)',
      'Solar Equipment Leasing',
      'Build-Own-Operate-Transfer (BOOT)',
      'Power Purchase Agreements (PPAs)',
      'Public-Private Partnerships (PPPs)',
      'Project-financed renewable energy packages',
      'Performance-based energy savings contracts'
    ],
    applications: [
      'Manufacturing plants & factories',
      'Shopping malls & commercial real estate',
      'Mining and processing operations',
      'Agribusinesses & agro-processing facilities',
      'Universities & private healthcare complexes'
    ]
  },
  {
    id: 'electric-mobility-ev',
    num: 14,
    title: 'Electric Mobility & EV Charging Infrastructure',
    shortTitle: 'EV Charging Infrastructure',
    slug: 'electric-mobility-ev',
    sector: 'commercial-industrial',
    icon: 'ti ti-charging-pile',
    badge: 'Clean Mobility',
    tagline: 'Building the clean charging infrastructure for the future of transportation in Zambia.',
    overview:
      'Maktub is positioning itself to support the emerging electric-mobility ecosystem across Zambia and the Southern African region. We engineer and install robust Level 2 AC and Level 3 DC Fast EV charging stations integrated with solar PV, battery storage, and smart billing software.',
    highlights: [
      'Commercial EV charging hubs powered by solar + battery storage',
      'Mining and industrial heavy fleet charging systems',
      'Workplace, hospitality, and shopping centre guest charging stations',
      'Integrated payment gateways and fleet charge management software'
    ],
    applications: [
      'Public & commercial EV charging stations',
      'Commercial solar-powered EV charging hubs',
      'Solar-powered EV charging shade structures',
      'Battery-backed DC fast charging for grid-constrained areas',
      'Fleet charging infrastructure (Buses, Delivery vans, Light trucks)',
      'Workplace & corporate office charging',
      'Hospitality, lodge & hotel charging stations',
      'Shopping-centre & retail park charging',
      'Mining and industrial electric fleet charging',
      'National electric vehicle infrastructure planning'
    ]
  },
  {
    id: 'solar-street-lighting',
    num: 15,
    title: 'Solar Street Lighting & Smart Public Lighting',
    shortTitle: 'Solar Public Lighting',
    slug: 'solar-street-lighting',
    sector: 'government-public',
    icon: 'ti ti-sun-high',
    badge: 'Public Infrastructure',
    tagline: 'Modern, autonomous, and zero-energy solar-powered lighting infrastructure.',
    overview:
      'We supply and install modern solar-powered lighting infrastructure for municipal roads, highways, industrial parks, and public facilities. Our integrated all-in-one and split systems combine high-efficiency LED luminaires, long-life Lithium batteries, and smart remote controls to ensure reliable lighting from dusk to dawn.',
    formula: 'Solar Lighting + High-Output LED + Battery Storage + Smart Controls + Remote Monitoring',
    highlights: [
      'Autonomous solar street lights with intelligent dimming sensors',
      'High-durability structural poles and anti-theft battery enclosures',
      'Smart IoT remote monitoring and automated fault detection',
      'Zero monthly electricity costs for municipalities and developers'
    ],
    applications: [
      'Public roads & highways',
      'Townships & urban street lighting',
      'Residential housing developments & gated estates',
      'Industrial parks & logistics centres',
      'Mining haul roads, perimeters & plant sites',
      'Schools, colleges & universities',
      'Hospitals & provincial health clinics',
      'Public markets & trading centres',
      'Airports & transport terminals',
      'Public institutions & civic complexes',
      'Perimeter security & high-mast floodlighting'
    ]
  },
  {
    id: 'solar-water-wastewater',
    num: 16,
    title: 'Solar Water & Wastewater Solutions',
    shortTitle: 'Solar Water & Pumping',
    slug: 'solar-water-wastewater',
    sector: 'agriculture',
    icon: 'ti ti-droplet-bolt',
    badge: 'Water Infrastructure',
    tagline: 'Renewable-energy solutions powering clean water access and wastewater systems.',
    overview:
      'Maktub provides engineered renewable-energy solutions for municipal, commercial, and rural water infrastructure. These solutions are particularly suited for areas where the national electrical grid is unreliable, unavailable, or prohibitively expensive.',
    highlights: [
      'Solar borehole pumping stations delivering high-volume community water supply',
      'Solar-powered water treatment, purification, and chlorination plants',
      'Municipal water distribution pumping without expensive diesel generator runs',
      'Wastewater aeration and effluent treatment powered by dedicated solar arrays'
    ],
    applications: [
      'Solar borehole pumping for communities and institutions',
      'High-volume solar agricultural irrigation pumping',
      'Water treatment & filtration facilities',
      'Water distribution & booster pumping systems',
      'Municipal water utility infrastructure',
      'Rural water supply schemes',
      'Wastewater treatment & aeration facilities',
      'Solar-powered pumping stations'
    ]
  },
  {
    id: 'telecom-clean-energy',
    num: 17,
    title: 'Clean Energy for Telecommunications',
    shortTitle: 'Telecom Clean Energy',
    slug: 'telecom-clean-energy',
    sector: 'telecommunications',
    icon: 'ti ti-antenna',
    badge: 'Telecom Infrastructure',
    tagline: 'Reliable renewable and hybrid power solutions for mission-critical telecom sites.',
    overview:
      'We engineer and deploy high-reliability renewable and hybrid power solutions for telecommunications operators, tower companies (TowerCos), and network providers across Zambia and neighbouring markets. Our systems ensure 99.99% network uptime while slashing diesel refueling logistics.',
    highlights: [
      'Hybrid solar-diesel-battery systems for off-grid tower sites',
      'High-cycle lithium battery energy storage banks',
      'Remote telemetry, fuel monitoring, and live alarm dashboards',
      'Drastic reduction in OPEX, generator run-time, and site visits'
    ],
    applications: [
      'Solar telecom power systems',
      'High-cycle battery storage retrofits',
      'Hybrid telecom power (Solar + BESS + Genset)',
      'Remote monitoring and automated NOC telemetry',
      'Tower site energy optimisation',
      'Critical backup power for exchange hubs and data nodes',
      'Off-grid remote repeater tower solutions'
    ]
  },
  {
    id: 'carbon-sustainability',
    num: 18,
    title: 'Carbon & Sustainability Solutions',
    shortTitle: 'Carbon & Sustainability',
    slug: 'carbon-sustainability',
    sector: 'epc-advisory',
    icon: 'ti ti-leaf',
    badge: 'Climate Finance',
    tagline: 'Support for renewable energy projects with carbon monetization and ESG finance.',
    overview:
      'Maktub supports renewable energy project owners and corporate clients in accessing carbon markets and climate finance. We assist in quantifying verified greenhouse gas reductions, ESG reporting, and aligning projects with national and international carbon mechanisms.',
    highlights: [
      'Carbon project screening and baseline emissions reduction calculations',
      'Liaison with national frameworks (Ministry of Green Economy and Environment)',
      'Support for the Zambian Carbon Feed-In Premium Programme',
      'Corporate ESG energy roadmaps and international certification alignment'
    ],
    applications: [
      'Carbon project screening & feasibility',
      'Renewable-energy project carbon documentation',
      'Emissions-reduction assessments & Scope 1/2/3 baselines',
      'ESG-oriented energy planning',
      'Sustainability and corporate carbon reporting support',
      'Climate-finance project preparation',
      'Carbon-market partner and verifier coordination',
      'Green investment project development'
    ],
    regulatoryNote:
      "This is an emerging opportunity in Zambia. The Ministry of Green Economy and Environment's Carbon Feed-In Premium Programme is designed to provide additional incentives for qualifying renewable-energy projects through payments linked to verified emissions reductions."
  },
  {
    id: 'energy-auditing-advisory',
    num: 19,
    title: 'Energy Auditing & Advisory',
    shortTitle: 'Energy Auditing & Advisory',
    slug: 'energy-auditing-advisory',
    sector: 'epc-advisory',
    icon: 'ti ti-report-analytics',
    badge: 'Technical Advisory',
    tagline: 'Understand where your energy is consumed and unlock substantial cost savings.',
    overview:
      'Before investing in an energy project, Maktub helps clients thoroughly understand where their energy is being consumed, where waste occurs, and where the highest financial savings can be achieved. We provide vendor-neutral technical due diligence and actionable decarbonisation roadmaps.',
    workflow: 'Assess → Analyse → Design → Finance → Implement → Monitor → Optimise',
    highlights: [
      'On-site power quality logging and thermal imaging audits',
      'Tariff analysis and maximum demand profile optimization',
      'Bankable solar and battery storage feasibility studies',
      'Decarbonization roadmaps with clear CAPEX, OPEX, and payback periods'
    ],
    applications: [
      'Investment-grade energy audits',
      'Electrical load profiling & data logging',
      'Electricity-cost & tariff structure analysis',
      'Solar PV feasibility assessments',
      'Battery-storage techno-economic assessments',
      'Energy-efficiency assessments',
      'Renewable-energy roadmaps',
      'Corporate decarbonisation planning',
      'Energy investment advisory',
      'Technical due diligence for lenders and project buyers'
    ]
  },
  {
    id: 'operations-maintenance',
    num: 20,
    title: 'Operations, Maintenance & Asset Management',
    shortTitle: 'Operations & Maintenance',
    slug: 'operations-maintenance',
    sector: 'epc-advisory',
    icon: 'ti ti-tool',
    badge: 'Asset Care',
    tagline: 'Long-term operational support to maximise system availability, asset life, and ROI.',
    overview:
      'Our relationship with clients does not end at commissioning. Maktub provides comprehensive long-term operations, preventive maintenance (O&M), and asset management services to ensure renewable energy installations operate at peak efficiency throughout their 25+ year design life.',
    highlights: [
      'Scheduled preventive inspections and robotic/manual panel cleaning',
      'Inverter servicing, thermal scans, and battery capacity balancing',
      '24/7 cloud SCADA monitoring and rapid fault response teams',
      'Guaranteed system availability SLAs and comprehensive spare-parts inventory'
    ],
    applications: [
      'Preventive maintenance programs',
      'Corrective maintenance & emergency dispatch',
      'Solar panel cleaning & vegetation management',
      'Inverter testing, calibration & maintenance',
      'Battery-system state-of-health testing & maintenance',
      'Electrical & thermal infrared inspections',
      'Live performance ratio (PR) monitoring',
      'Remote system monitoring & alert tracking',
      'Rapid on-site fault response',
      'Spare-parts warehousing & management',
      'System upgrades & repowering',
      'Asset performance reporting & yield optimisation'
    ]
  }
];

export const PROJECT_DELIVERY_MODEL = [
  {
    step: '01',
    title: 'DISCOVER',
    subtitle: 'Understand Requirements',
    icon: 'ti ti-search',
    desc: 'Understand the client’s energy requirements, current operational bottlenecks, challenges, future expansion plans, and sustainability objectives.'
  },
  {
    step: '02',
    title: 'ASSESS',
    subtitle: 'Site & Load Feasibility',
    icon: 'ti ti-clipboard-data',
    desc: 'Conduct detailed on-site solar irradiance logging, load profiling, structural roof and soil tests, grid availability analysis, and commercial feasibility.'
  },
  {
    step: '03',
    title: 'DESIGN',
    subtitle: 'Engineered Precision',
    icon: 'ti ti-pencil-bolt',
    desc: 'Develop a custom-engineered solution matching the client’s exact operational profile, electrical topology, and statutory grid connection codes.'
  },
  {
    step: '04',
    title: 'STRUCTURE',
    subtitle: 'Commercial & Finance Model',
    icon: 'ti ti-businessplan',
    desc: 'Determine the most suitable commercial, procurement, financing, or project-development model (Direct EPC, PPA, Leasing, BOOT, or PPP).'
  },
  {
    step: '05',
    title: 'DELIVER',
    subtitle: 'Turnkey Construction',
    icon: 'ti ti-truck-loading',
    desc: 'Procure Tier-1 equipment, manage civil/structural construction, complete certified electrical installation, test, and safely commission the system.'
  },
  {
    step: '06',
    title: 'MONITOR',
    subtitle: 'Real-Time Digital SCADA',
    icon: 'ti ti-activity',
    desc: 'Monitor real-time energy production, consumption, battery health, and grid parameters 24/7 through advanced digital telemetry and SCADA dashboards.'
  },
  {
    step: '07',
    title: 'MAINTAIN',
    subtitle: 'Proactive Asset Care',
    icon: 'ti ti-tool',
    desc: 'Provide ongoing preventive inspections, automated fault response, module cleaning, calibration, and spare-parts management.'
  },
  {
    step: '08',
    title: 'OPTIMISE',
    subtitle: 'Continuous Efficiency Yield',
    icon: 'ti ti-trending-up',
    desc: 'Continuously analyze telemetry to identify operational opportunities, improve yield, reduce peak demand, and lower energy costs over the lifecycle.'
  }
];

export const REGULATORY_FRAMEWORKS = [
  {
    id: 'zesco-net-metering',
    institution: 'ZESCO Limited',
    title: 'Net-Metering & Grid Interconnection',
    badge: 'Active Framework',
    icon: 'ti ti-plug-connected',
    desc: "Zambia's Net-Metering framework enables commercial and institutional customers to generate renewable electricity for self-consumption and export surplus power to the grid. ZESCO provides an online application and tracking platform.",
    highlights: [
      'Surplus renewable export credited against monthly utility electricity bills',
      'Formal technical compliance & bi-directional smart metering integration',
      'Maktub handles full end-to-end grid interconnection documentation and utility liaison'
    ]
  },
  {
    id: 'erb-tariffs',
    institution: 'Energy Regulation Board (ERB)',
    title: 'Regulatory Oversight & 2026 Reference Tariffs',
    badge: 'Regulatory Body',
    icon: 'ti ti-gavel',
    desc: 'The ERB establishes the regulatory standards, licensing guidelines, safety codes, and 2026 reference feed-in tariffs for renewable energy generation and distributed power in Zambia.',
    highlights: [
      'Clear reference tariff framework for energy feed-in and mini-grids',
      'Licensing support for captive generation and distributed systems',
      'Standardized Power Purchase Agreement (PPA) guidelines'
    ]
  },
  {
    id: 'mgee-carbon',
    institution: 'Ministry of Green Economy and Environment',
    title: 'Carbon Feed-In Premium Programme',
    badge: 'Climate Finance',
    icon: 'ti ti-leaf',
    desc: "Zambia's emerging Carbon Feed-In Premium Programme provides additional commercial incentives for qualifying renewable projects through monetized payments linked to verified greenhouse gas emissions reductions.",
    highlights: [
      'Additional revenue streams linked to verified metric tonnes of CO₂ offset',
      'Alignment with Article 6 of the Paris Agreement and national NDC targets',
      'Maktub assists in carbon baseline documentation and project screening'
    ]
  },
  {
    id: 'offgrid-hub',
    institution: 'Off-Grid Information Hub & REA',
    title: 'Off-Grid & Mini-Grid Framework',
    badge: 'Rural Electrification',
    icon: 'ti ti-building-community',
    desc: 'Zambia’s off-grid framework provides dedicated policy, licensing, and grant pathways for solar mini-grids and microgrid activities, supplying clean electricity to underserved communities.',
    highlights: [
      'Standardized light-touch regulatory licensing for community mini-grids',
      'Integration with Rural Electrification Authority (REA) masterplans',
      'Support for productive-use agro and commercial power hubs'
    ]
  }
];

export const ADVISORY_APPROACH_STEPS = [
  { step: 'Assess', num: '01', desc: 'Conduct comprehensive energy consumption, site, and infrastructure assessments.' },
  { step: 'Analyse', num: '02', desc: 'Analyze electrical load profiles, tariff structures, and thermal imaging data.' },
  { step: 'Design', num: '03', desc: 'Engineer custom solar, battery, and hybrid system architectures.' },
  { step: 'Finance', num: '04', desc: 'Structure CAPEX, PPA, EaaS, or leasing financing models.' },
  { step: 'Implement', num: '05', desc: 'Deliver turnkey procurement, installation, and commissioning.' },
  { step: 'Monitor', num: '06', desc: 'Deploy cloud IoT telemetry and 24/7 automated performance tracking.' },
  { step: 'Optimise', num: '07', desc: 'Continuously fine-tune systems to maximize ROI and lower lifecycle costs.' }
];

export const GREEN_COMMITMENT = {
  quote:
    "At Maktub Engineering & General Supply Limited, we believe Africa's energy future requires solutions that are reliable, commercially viable, environmentally responsible and scalable. We are committed to helping our clients transition from energy uncertainty to energy resilience through innovative renewable-energy and sustainable infrastructure solutions.",
  pillars: [
    { title: 'From Solar to Storage', icon: 'ti ti-solar-panel-2' },
    { title: 'From Energy Efficiency to Smart Infrastructure', icon: 'ti ti-cpu' },
    { title: 'From Project Concept to Commissioning', icon: 'ti ti-rocket' }
  ]
};
