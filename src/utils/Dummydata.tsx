import { BiWorld, BiServer, BiLogoDiscord } from "react-icons/bi";
import { IoLogoGameControllerB } from "react-icons/io";
import { AiOutlineInstagram, AiFillYoutube, AiOutlineDesktop, AiOutlineTwitter, AiFillCloseCircle } from "react-icons/ai";
import { Games, Hosting, Vpn, Roket, Hero, Pengu, Samsungpro, amd, Samsungetc, Farming, Valheim, Panel, Penguin } from "../assets";
import { TiTick } from "react-icons/ti";
import { SlBasket } from "react-icons/sl";
import { CgMail } from "react-icons/cg";
import { BsSpeedometer2, BsGit } from "react-icons/bs";
import { FaShieldVirus, FaServer, FaPlug } from "react-icons/fa";

export const fituresHosting = [
  {
    icon: <FaShieldVirus size={30} />,
    title: "DDoS Schutz",
    desc: "Unsere Server sind vor DDoS attacken gesichert. dadurch werden Angriffe rausgefiltert und vermieden.",
  },
  {
    icon: <FaServer size={30} />,
    title: "KVM Virtualisierung",
    desc: "Eigener Kernel mit garantierter Leistung, nahezu grenzenlose Skalierbarkeit genießen.",
  },
  {
    icon: <FaPlug size={30} />,
    title: "Ausfall Sicherheit",
    desc: "Das Datencenter hat eine Unterbrechungsfreie Stromversorgung mit einem dieselgenerator als backup.",
  },
  {
    icon: <BsSpeedometer2 size={30} />,
    title: "Schnelle Server ",
    desc: "Unsere Server stehen im höchverfügbarkeitsrechenzentrum in Falkenstein Deutschland.",
  },
  {
    icon: <BsGit size={30} />,
    title: "Blitzschnell",
    desc: "Dein Game Server ist in nur ein paar Minuten online und wird auf unseren Servern aufgesetzt.",
  },
  {
    icon: <AiOutlineDesktop size={30} />,
    title: "Einfaches Design",
    desc: "Unser Kundenpanel wurde so entwickelt das man alles wichtige was man für seinen eigenen server braucht schnell findet und bedienen kann.",
  },
];

export const domain = [
  { name: ".com", price: "€5" },
  { name: ".de", price: "€5" },
  { name: ".org", price: "€5" },
  { name: ".club", price: "€5" },
  { name: ".design", price: "€5" },
  { name: ".io", price: "€5" },
];

export const footerLink = [
  {
    title: "produkte",
    link: [
      { name: "gameserver", href: "/gameserver" },
      { name: "webhosting", href: "/webhosting" },
      { name: "domains", href: "/domain" },
      { name: "VPS", href: "/vpn-hosting" },
    ],
  },
  {
    title: "informationen",
    link: [
      { name: "blog", href: "/blog" },
      { name: "rechenzentrum", href: "/gameserver" },
      { name: "DDoS Schutz", href: "/gameserver" },
      { name: "Hardware und Technik", href: "/gameserver" },
      { name: "Ceph Cluster", href: "/gameserver" },
    ],
  },
  {
    title: "infrastruktur",
    link: [
      { name: "status", href: "/gameserver" },
      { name: "smokeping", href: "/gameserver" },
    ],
  },
  {
    title: "Rechtliches",
    link: [
      { name: "impressum", href: "/impressum" },
      { name: "AGB", href: "/webhosting" },
      { name: "Datenschutz", href: "/datenschutz" },
      { name: "kontakt", href: "/contact" },
    ],
  },
];

export const navbarLink = [
  { url: "webhosting", name: "Webhosting" },
  { url: "gameserver", name: "Gameserver" },
  { url: "vps-hosting", name: "VPS Hosting" },
  { url: "domain", name: "Domain" },
];
export const sosialMedia = [
  { className: "bg-pink-500 hover:bg-pink-600", icon: <AiOutlineInstagram />, name: "instagram", url: "https://www.instagram.com/penguhosting/" },
  { className: "bg-blue-500/80 hover:bg-blue-600", icon: <AiOutlineTwitter />, name: "twitter", url: "https://twitter.com/penguhosting" },
  { className: "bg-red-500 hover:bg-red-600", icon: <AiFillYoutube />, name: "youtube", url: "https://www.youtube.com/channel/UCiwCeWD5sFJS3Od1mLnmueQ" },
  { className: "bg-blue-600 hover:bg-blue-700", icon: <BiLogoDiscord />, name: "discord", url: "https://discord.gg/rxRhb7msbs" },
  { className: "bg-red-700 hover:bg-red-900", icon: <CgMail />, name: "mail", url: "mailto:kontakt@penguhosting.com" },
];
export const cardHome = [
  { name: "WebHosting", price: "2,99€", url: "webhosting", icon: <BiWorld size={55} />, image: Hosting },
  { name: "GameServer", price: "3,99€", url: "webhosting", icon: <IoLogoGameControllerB size={55} />, image: Games },
  { name: "VPN", price: "4,99€", url: "vpn-hosting", icon: <BiServer size={55} />, image: Vpn },
];
export const gameMaster = [
  { name: "Minecraft Server", price: "2,99€", image: Games },
  { name: "Landwirtschafts Server", price: "3,99€", image: Farming },
  { name: "Vilheim", price: "4,99€", image: Valheim },
];

export const fitureOffer = [
  {
    title: "DDos Protection",
    descriptionOne: "PenguHosting hat Hervorragenden DDos Schutz und davon profitiert auch Ihr!",
    descriptionTwo: "Unser DDoS-Schutz von Arbor Networks, schützt vor allen Angriffen bis zu 750 GBit/s.",
    image: Roket,
  },
  {
    title: "Hohe Verfügbarkeit",
    descriptionOne: "Unsere Serverangebote überzeugen durch herausragende Qualität und eine hohe Verfügbarkeit, die durch unseren Proxmox- und CEPH-Cluster gewährleistet wird.",
    descriptionTwo: "Wir stellen sicher, dass Ihre Server jederzeit erreichbar ist und Ihnen eine zuverlässige Performance bietet. Entscheiden Sie sich für uns und profitieren Sie von unseren erstklassigen Serverlösungen.",
    image: Hero,
  },
  {
    title: "Hervoragender Kundensupport",
    descriptionOne: "  Unser herausragender Kundensupport steht Ihnen jederzeit zur Verfügung. Sie können uns über verschiedene Kanäle wie WhatsApp,  E-Mail, Ticket-System, Twitter oder unseren Discord-Server erreichen.",
    descriptionTwo: "Wir sind stets bemüht, Ihre Anliegen schnell und effizient zu bearbeiten. Zögern Sie nicht, uns zu kontaktieren - wir sind für Sie da und helfen Ihnen gerne weiter.",
    image: Pengu,
  },
];
export const gameFitureOffer = [
  {
    title: "DDos Protection",
    descriptionOne: "PenguHosting hat Hervorragenden DDos Schutz und davon profitiert auch Ihr!",
    descriptionTwo: "Unser DDoS-Schutz von Arbor Networks, schützt vor allen Angriffen bis zu 750 GBit/s.",
    image: Panel,
  },
  {
    title: "Hohe Verfügbarkeit",
    descriptionOne: "Unsere Serverangebote überzeugen durch herausragende Qualität und eine hohe Verfügbarkeit, die durch unseren Proxmox- und CEPH-Cluster gewährleistet wird.",
    descriptionTwo: "Wir stellen sicher, dass Ihre Server jederzeit erreichbar ist und Ihnen eine zuverlässige Performance bietet. Entscheiden Sie sich für uns und profitieren Sie von unseren erstklassigen Serverlösungen.",
    image: Hero,
  },
  {
    title: "Hervoragender Kundensupport",
    descriptionOne: "  Unser herausragender Kundensupport steht Ihnen jederzeit zur Verfügung. Sie können uns über verschiedene Kanäle wie WhatsApp,  E-Mail, Ticket-System, Twitter oder unseren Discord-Server erreichen.",
    descriptionTwo: "Wir sind stets bemüht, Ihre Anliegen schnell und effizient zu bearbeiten. Zögern Sie nicht, uns zu kontaktieren - wir sind für Sie da und helfen Ihnen gerne weiter.",
    image: Penguin,
  },
];

export const server = [
  { title: "AMD EPYC", titleblue: "7702", description: "Unsere Server sind mit dem Leistungstarken AMD EPYC 7702 CPUs ausgestattet die ganze 64 Kerne und 128 Threads hat.", image: amd },
  { title: "Samsung 980 PRO", titleblue: "NVMe SSD", description: "Es sind auch Hochqualitätivem Samsung 980 PRO NVMe M.2 SSDs verbaut die eine Lese und Schreibgewschindigkeit von 5.000Mb/s + hat.", image: Samsungpro },
  { title: "Samsung ECC RAM", titleblue: "3200MHz", description: "Die Server sind ausgestattet mit Hoch qualitativem Samsung ECC Server Ram der einer Taktfrequenz von 3200MHz besitzt.", image: Samsungetc },
];

export const testimonial = [
  {
    title: "super webhosting",
    description:
      "Ich bin mit den Hosting-Diensten von PenguHosting sehr zufrieden. Sie bieten hervorragende Zugriffsgeschwindigkeiten und eine sehr hohe Betriebszeit. Darüber hinaus ist das technische Support-Team sehr reaktionsschnell und hilft mir schnell, wenn ich auf Probleme stoße. Ich empfehle ABC Hosting jedem, der eine zuverlässige Hosting-Lösung sucht.",
    author: "bullet",
  },
  {
    title: "super webhosting",
    description:
      "Als Webentwickler habe ich schon einige Hosting-Dienste ausprobiert, aber seit ich zu PenguHosting gewechselt bin, habe ich nie mehr zurückgeschaut. Die Zuverlässigkeit und Geschwindigkeit ihrer Server ist wirklich beeindruckend. Außerdem ist ihr Bedienfeld sehr einfach zu bedienen und die zusätzlichen Funktionen, die sie bieten, sind für meine Projekte sehr nützlich. Ich kann PenguHosting jedem wärmstens empfehlen, der zuverlässiges, entwicklerfreundliches Hosting sucht",
    author: "saskia",
  },
  {
    title: "die besten minecraft server",
    description: "Pengu Hosting bietet beeindruckende Minecraft-Server und bietet einen fantastischen Kundensupport. Stabil, leistungsstark und freundlich – sie sind der perfekte Hosting-Partner. Sehr empfehlenswert",
    author: "sebastian",
  },
  {
    title: "sehr gutes Webhosting",
    description:
      "Ich nutze PenguHosting nun schon seit einigen Jahren und bin mit dem Service sehr zufrieden. Dank der hervorragenden Betriebszeit, der schnellen Zugriffsgeschwindigkeit und den erweiterten Funktionen läuft meine Website reibungslos. Darüber hinaus ist der Kundenservice einfach großartig. Sie waren immer ansprechbar und halfen mir bei allen Fragen und Problemen, die ich hatte. Ich würde PenguHosting jedem wärmstens empfehlen, der auf der Suche nach qualitativ hochwertigem Hosting ist",
    author: "george",
  },
  {
    title: "super webhosting",
    description:
      "Ich bin mit den Hosting-Diensten von PenguHosting sehr zufrieden. Sie bieten hervorragende Zugriffsgeschwindigkeiten und eine sehr hohe Betriebszeit. Darüber hinaus ist das technische Support-Team sehr reaktionsschnell und hilft mir schnell, wenn ich auf Probleme stoße. Ich empfehle ABC Hosting jedem, der eine zuverlässige Hosting-Lösung sucht.",
    author: "bullet",
  },
  {
    title: "super webhosting",
    description:
      "Als Webentwickler habe ich schon einige Hosting-Dienste ausprobiert, aber seit ich zu PenguHosting gewechselt bin, habe ich nie mehr zurückgeschaut. Die Zuverlässigkeit und Geschwindigkeit ihrer Server ist wirklich beeindruckend. Außerdem ist ihr Bedienfeld sehr einfach zu bedienen und die zusätzlichen Funktionen, die sie bieten, sind für meine Projekte sehr nützlich. Ich kann PenguHosting jedem wärmstens empfehlen, der zuverlässiges, entwicklerfreundliches Hosting sucht",
    author: "saskia",
  },
  {
    title: "die besten minecraft server",
    description: "Pengu Hosting bietet beeindruckende Minecraft-Server und bietet einen fantastischen Kundensupport. Stabil, leistungsstark und freundlich – sie sind der perfekte Hosting-Partner. Sehr empfehlenswert",
    author: "sebastian",
  },
  {
    title: "sehr gutes Webhosting",
    description:
      "Ich nutze PenguHosting nun schon seit einigen Jahren und bin mit dem Service sehr zufrieden. Dank der hervorragenden Betriebszeit, der schnellen Zugriffsgeschwindigkeit und den erweiterten Funktionen läuft meine Website reibungslos. Darüber hinaus ist der Kundenservice einfach großartig. Sie waren immer ansprechbar und halfen mir bei allen Fragen und Problemen, die ich hatte. Ich würde PenguHosting jedem wärmstens empfehlen, der auf der Suche nach qualitativ hochwertigem Hosting ist",
    author: "george",
  },
];

export const Faq = [
  {
    question: "Welche Arten von Gameservern unterstutzt PenguHosting?",
    answer:
      "PenguHosting unterstützt eine Vielzahl von Gameservern, darunter beliebte Spiele wie Minecraft, Counter-Strike: Global Offensive, ARK: Survival Evolved und viele mehr. Wir bieten maßgeschneiderte Lösungen, um sicherzustellen, dass Ihr Gameserver reibungslos läuft.",
  },
  {
    question: "Kann ich meine bereits bestehende Website zu PenguHosting umziehen?",
    answer: "Ja, bei PenguHosting haben wir einen einfachen Umzugsservice, um Ihre bestehende Website zu uns zu transferieren. Unser Support-Team steht Ihnen dabei zur Seite und hilft Ihnen gerne bei der nahtlosen Migration Ihrer Website.",
  },
  {
    question: "Welche Vorteile bietet ein VPS-Hosting bei PenguHosting?",
    answer:
      "Mit unserem VPS-Hosting haben Sie die volle Kontrolle über Ihre virtuelle Serverumgebung. Sie profitieren von dedizierten Ressourcen, Skalierbarkeit und Flexibilität. Unser Support-Team steht Ihnen bei Fragen oder Problemen rund um Ihr VPS zur Seite.",
  },
  {
    question: "Bietet PenguHosting SSL-Zertifikate für Website an?",
    answer:
      "Ja, bei PenguHosting bieten wir SSL-Zertifikate an, um die Sicherheit Ihrer Website zu gewährleisten. Durch die Verschlüsselung der Datenübertragung schützen Sie Ihre Besucher und verbessern gleichzeitig das Vertrauen und die Glaubwürdigkeit Ihrer Website.",
  },
];

export const webHosting = [
  {
    background: "bg-gradient-to-r from-sky-300 to-blue-400",
    title: "Starter",
    price: "1,99",
    diskon: "40%",
    normalPrice: "€3,59 ",
    description: "Für kleine und Simple Webseiten",
    desc: [
      {
        first: "10 GB",
        second: "SSD Speicher",
      },
      { first: "Normaler", second: "CPU" },
      { first: "24/7", second: "Customer Support" },
      { first: "Free", second: "cPanel" },
      { first: "Free SSL", second: "(Let's Encrypt)" },
      { first: "Multi-site", second: "Management" },
      { first: "Seamless Update", second: "(optional)" },
      { first: "Staging", second: "Site" },
      { first: "Security 360", second: "(optional)" },
    ],
  },
  {
    background: "bg-gradient-to-r from-yellow-500 to-orange-500",
    title: "Medium",
    price: "3,99",
    diskon: "65%",
    normalPrice: "€7,39 ",
    description: "Für Unternhmen oder Größere Blogs etc.",
    desc: [
      {
        first: "50 GB",
        second: "SSD Storage",
      },
      { first: "Premium", second: "CPU" },
      { first: "24/7", second: "Customer Support" },
      { first: "Free", second: "cPanel" },
      { first: "Free SSL", second: "(Let's Encrypt)" },
      { first: "Multi-site", second: "Management" },
      { first: "Seamless Update", second: "(optional)" },
      { first: "Staging", second: "Site" },
      { first: "Security 360", second: "(optional)" },
    ],
  },
  {
    background: "bg-blue-700/70",
    title: "Pro",
    price: "9,99 ",
    diskon: "50%",
    normalPrice: "€19,99",
    description: "Für Websiten oder kleine Unternhmen.",
    desc: [
      {
        first: "250 GB",
        second: "SSD Storage",
      },
      { first: "Premium", second: "CPU" },
      { first: "24/7", second: "Customer Support" },
      { first: "Free CDN", second: " Included" },
      { first: "Free SSL", second: "(Let's Encrypt)" },
      { first: "Multi-site", second: "Management" },
      { first: "Seamless Update", second: "(optional)" },
      { first: "Staging", second: "Site" },
    ],
  },
];
export const vpnHosting = [
  {
    background: "bg-gradient-to-r from-sky-300 to-blue-400",
    title: "Starter",
    price: "1,99",
    diskon: "40%",
    normalPrice: "€3,59 ",
    description: "Für kleine und Simple Webseiten",
    desc: [
      {
        first: "10 GB",
        second: "SSD Speicher",
      },
      { first: "Normaler", second: "CPU" },
      { first: "24/7", second: "Customer Support" },
      { first: "Free", second: "cPanel" },
      { first: "Free SSL", second: "(Let's Encrypt)" },
      { first: "Multi-site", second: "Management" },
      { first: "Seamless Update", second: "(optional)" },
      { first: "Staging", second: "Site" },
      { first: "Security 360", second: "(optional)" },
    ],
  },
  {
    background: "bg-gradient-to-r from-yellow-500 to-orange-500",
    title: "Medium",
    price: "3,99",
    diskon: "65%",
    normalPrice: "€7,39 ",
    description: "Für Unternhmen oder Größere Blogs etc.",
    desc: [
      {
        first: "50 GB",
        second: "SSD Storage",
      },
      { first: "Premium", second: "CPU" },
      { first: "24/7", second: "Customer Support" },
      { first: "Free", second: "cPanel" },
      { first: "Free SSL", second: "(Let's Encrypt)" },
      { first: "Multi-site", second: "Management" },
      { first: "Seamless Update", second: "(optional)" },
      { first: "Staging", second: "Site" },
      { first: "Security 360", second: "(optional)" },
    ],
  },
  {
    background: "bg-blue-700/70",
    title: "Pro",
    price: "9,99 ",
    diskon: "50%",
    normalPrice: "€19,99",
    description: "Für Websiten oder kleine Unternhmen.",
    desc: [
      {
        first: "250 GB",
        second: "SSD Storage",
      },
      { first: "Premium", second: "CPU" },
      { first: "24/7", second: "Customer Support" },
      { first: "Free CDN", second: " Included" },
      { first: "Free SSL", second: "(Let's Encrypt)" },
      { first: "Multi-site", second: "Management" },
      { first: "Seamless Update", second: "(optional)" },
      { first: "Staging", second: "Site" },
    ],
  },
  {
    background: "bg-gradient-to-r from-pink-400 to-rose-500",
    title: "Business",
    price: "29,99 ",
    diskon: "40%",
    normalPrice: "45,99",
    description: "Für Große Websiten oder Unternhmen.",
    desc: [
      {
        first: "1 TB",
        second: "SSD Storage",
      },
      { first: "Premium", second: "CPU" },
      { first: "24/7", second: "Customer Support" },
      { first: "Free CDN", second: " Included" },
      { first: "Free SSL", second: "(Let's Encrypt)" },
      { first: "Multi-site", second: "Management" },
      { first: "Seamless Update", second: "included" },
      { first: "Staging", second: "Site" },
    ],
  },
];

export const paketeHosting = [
  {
    title: "#Pack",
    price: "Price",
    wordPress: "WordPress installs",
    visit: "Monthly visits",
    storage: "SSD storage",
    cdn: "Free CDN",
    googleCloud: "Google Cloud Platform",
    support: "Multisite Support",
    backup: "Backup retention",
    ssh: "SSH access",
    order: "Order",
  },
  {
    title: "Starter",
    price: "$9.99",
    wordPress: "1",
    visit: "20,000",
    storage: "10 GB",
    cdn: "50 GB",
    googleCloud: <TiTick className="text-[18px] md:text-[21px] text-green-500" />,
    support: <AiFillCloseCircle className="text-[18px] md:text-[21px] text-red-500" />,
    backup: "14 Days",
    ssh: <TiTick className="text-[18px] md:text-[21px] text-green-500" />,
    order: <SlBasket className="text-[18px] md:text-[21px] text-black hover:text-yellow-500" />,
  },
  {
    title: "Pro",
    price: "$19.99",
    wordPress: "2",
    visit: "40,000",
    storage: "20 GB",
    cdn: "60 GB",
    googleCloud: <TiTick className="text-[18px] md:text-[21px] text-green-500" />,
    support: <TiTick className="text-[18px] md:text-[21px] text-green-500" />,
    backup: "14 Days",
    ssh: <TiTick className="text-[18px] md:text-[21px] text-green-500" />,
    order: <SlBasket className="text-[18px] md:text-[21px] text-black hover:text-yellow-500" />,
  },
  {
    title: "Business",
    price: "$29.99",
    wordPress: "3",
    visit: "60,000",
    storage: "30 GB",
    cdn: "70 GB",
    googleCloud: <TiTick className="text-[18px] md:text-[21px] text-green-500" />,
    support: <AiFillCloseCircle className="text-[18px] md:text-[21px] text-red-500" />,
    backup: "14 Days",
    ssh: <TiTick className="text-[18px] md:text-[21px] text-green-500" />,
    order: <SlBasket className="text-[18px] md:text-[21px] text-black hover:text-yellow-500" />,
  },
];
export const vpnPaketeHosting = [
  {
    title: "#Pack",
    price: "Price",
    wordPress: "WordPress installs",
    visit: "Monthly visits",
    storage: "SSD storage",
    cdn: "Free CDN",
    googleCloud: "Google Cloud Platform",
    support: "Multisite Support",
    backup: "Backup retention",
    ssh: "SSH access",
    order: "Order",
  },
  {
    title: "Starter",
    price: "$9.99",
    wordPress: "1",
    visit: "20,000",
    storage: "10 GB",
    cdn: "50 GB",
    googleCloud: <TiTick className="text-[18px] md:text-[21px] text-green-500" />,
    support: <AiFillCloseCircle className="text-[18px] md:text-[21px] text-red-500" />,
    backup: "14 Days",
    ssh: <TiTick className="text-[18px] md:text-[21px] text-green-500" />,
    order: <SlBasket className="text-[18px] md:text-[21px] text-black hover:text-yellow-500" />,
  },
  {
    title: "Pro",
    price: "$19.99",
    wordPress: "2",
    visit: "40,000",
    storage: "20 GB",
    cdn: "60 GB",
    googleCloud: <TiTick className="text-[18px] md:text-[21px] text-green-500" />,
    support: <TiTick className="text-[18px] md:text-[21px] text-green-500" />,
    backup: "14 Days",
    ssh: <TiTick className="text-[18px] md:text-[21px] text-green-500" />,
    order: <SlBasket className="text-[18px] md:text-[21px] text-black hover:text-yellow-500" />,
  },
  {
    title: "Business",
    price: "$29.99",
    wordPress: "3",
    visit: "60,000",
    storage: "30 GB",
    cdn: "70 GB",
    googleCloud: <TiTick className="text-[18px] md:text-[21px] text-green-500" />,
    support: <AiFillCloseCircle className="text-[18px] md:text-[21px] text-red-500" />,
    backup: "14 Days",
    ssh: <TiTick className="text-[18px] md:text-[21px] text-green-500" />,
    order: <SlBasket className="text-[18px] md:text-[21px] text-black hover:text-yellow-500" />,
  },
];
