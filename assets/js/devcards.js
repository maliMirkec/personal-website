const Vue2 = window.Vue
let uri = window.location.search.substring(1)
let params = new URLSearchParams(uri)
let profile = {}

const madeUpFirstName = ['Aarav', 'Milena', 'Deonte', 'Neil', 'Adel', 'Iram', 'Elija', 'Aziah', 'Mesa', 'Jenna', 'Haya', 'Wendy', 'Laynie', 'Itzayana', 'Austen', 'Makiyah', 'Andria', 'Rena', 'Odelia', 'Giorgio', 'Ember', 'Casimir', 'Kaylanie', 'Yehudis', 'Kaelyn', 'Avian', 'Breya', 'Kara', 'Cam', 'Annaly', 'Yazaira', 'Wilhelmina', 'Demian', 'Anai', 'Ibrahim', 'Brighton', 'Emmanuel', 'Avi', 'Josslynn', 'Kreed', 'Chassidy', 'Kayceon', 'Audrina', 'Jayde', 'Josie', 'Yonael', 'Ivy', 'Vianney', 'Freya', 'Xia', 'Adalene', 'Aayan', 'Kinsler', 'Salman', 'Jovian', 'Renae', 'Vesper', 'Lakota', 'Elmer', 'Jaidah', 'Romell', 'Dayne', 'Cosmo', 'Kaylani', 'Farrah', 'Ezrah', 'Paizlee', 'Yohan', 'Malaika', 'Aariyah', 'Shrey', 'Burke', 'Kaori', 'Joel', 'Blaize', 'Ansel', 'Polly', 'Nikoli', 'Tessa', 'Camdyn', 'Seriyah', 'Ahmari', 'Shiloh', 'Kinley', 'Berenice', 'Annastyn', 'Elliot', 'Ean', 'Md', 'Reena', 'Romelo', 'Tylee', 'Gigi', 'Leighton', 'Dontay', 'Kahlia', 'Ollie', 'Aryn', 'Briar', 'Kasper']
const madeUpLastName = ['Herren', 'Gipson', 'Maxey', 'Koenig', 'Gwaltney', 'Derby', 'Niehaus', 'Rupp', 'Petterson', 'Oman', 'Stuck', 'Trawick', 'Back', 'Rosenblum', 'Joyce', 'Shaikh', 'Renteria', 'Alva', 'Armstrong', 'Infante', 'Tu', 'Frawley', 'Tatro', 'Swain', 'Geyer', 'Yao', 'Fan', 'Jeffery', 'Berens', 'Murphy', 'Laurence', 'Holbrook', 'Nilsen', 'Lim', 'Spiker', 'Betts', 'Paige', 'Falls', 'Spears', 'Densmore', 'Caudle', 'Agosto', 'Hewlett', 'Orcutt', 'Abe', 'Alba', 'Sloane', 'Lazaro', 'Petit', 'Heron', 'Quist', 'Hagerman', 'Sealey', 'Reese', 'Tuttle', 'Rockwell', 'Rost', 'Chipman', 'Caldwell', 'Gainey', 'Dinger', 'Schlabach', 'Wescott', 'Cottrell', 'Walton', 'Shoemaker', 'Essex', 'Everett', 'Banta', 'Duran', 'Weimer', 'Trevino', 'Aldridge', 'Teeter', 'Lennox', 'Turgeon', 'Harden', 'Hummer', 'Chang', 'Gamble', 'Magallon', 'Borja', 'Stevenson', 'Marquis', 'Mateo', 'Prasad', 'Jett', 'Fountain', 'Mulvaney', 'Mathers', 'Cantwell', 'Crespo', 'Russ', 'Wynne', 'Whisenant', 'Gusman', 'Settles', 'Stinnett', 'Stanger', 'Muniz']
const madeUpCities = ['Paris, France', 'Rome, Italy', 'London, UK', 'Berlin, Germany', 'Barcelona, Spain', 'Amsterdam, Netherlands', 'St. Petersburg, Russia', 'Istanbul, Turkey', 'Athens, Greece', 'Copenhagen, Denmark', 'Madrid, Spain', 'Brussels, Belgium', 'Budapest, Hungary', 'Munich, Germany', 'Edinburgh, UK', 'Prague, Czech', 'Milan, Italy', 'Vienna, Austria', 'Lisbon, Portugal', 'Stockholm, Sweden', 'Dublin, Ireland', 'Oslo, Norway', 'Florence, Italy', 'Oxford, UK', 'Cannes, France', 'Helsinki, Finland', 'Bruges, Belgium', 'Hamburg, Germany', 'Pisa, Italy', 'Dubrovnik, Croatia', 'Zagreb, Croatia', 'Tallinn, Estonia', 'Granada, Spain', 'Salzburg, Austria', 'Bergen, Norway', 'Manchester, UK', 'Bilbao, Spain', 'Strasbourg, France', 'Reykjavik, Island', 'Naples, Italy', 'New York, USA', 'Los Angeles, USA', 'Chicago, USA', 'Houston, USA', 'Phoenix, USA', 'Philadelphia, USA', 'San Antonio, USA', 'San Diego, USA', 'Dallas, USA', 'San Jose, USA', 'Austin, USA', 'Jacksonville, USA', 'Fort Worth, USA', 'Columbus, USA', 'San Francisco, USA', 'Charlotte, USA', 'Indianapolis, USA', 'Seattle, USA', 'Denver, USA', 'Boston, USA', 'El Paso, USA', 'Detroit, USA', 'Nashville, USA', 'Memphis, USA', 'Portland, USA', 'Oklahoma City, USA', 'Las Vegas, USA', 'Louisville, USA', 'Baltimore, USA', 'Milwaukee, USA', 'Albuquerque, USA', 'Tucson, USA', 'Fresno, USA', 'Mesa, USA', 'Sacramento, USA', 'Atlanta, USA', 'Kansas City, USA', 'Omaha, USA', 'Colorado Springs, USA', 'Raleigh, USA', 'Long Beach, USA', 'Miami, USA', 'Virginia Beach, USA', 'Minneapolis, USA', 'Oakland, USA', 'Tulsa, USA', 'Arlington, USA', 'Tampa, USA', 'New Orleans, USA', 'Wichita, USA', 'Sao Paulo, Brazil', 'Buenos Aires, Argentina', 'Rio de Janeiro, Brazil', 'Bogota, Colombia', 'Lima, Peru', 'Santiago, Chile', 'Belo Horizonte, Brazil', 'Brasilia, Brazil', 'Fortaleza, Brzil', 'Recife, Brazil']
const madeUpDegree = ['Bachelor’s in EE', 'Bachelor’s in in IT', 'Bachelor’s in CS', 'Bachelor’s in WD', 'Bachelor’s in in SE', 'Md in EE', 'Md in in IT', 'Md in CS', 'Md in WD', 'Md in in SE']
const madeUpProfile = [{
    position: 'Web developer',
    skills: 'HTML/CSS; JavaScript; PHP',
    weakness: 'Web design; SEO; QA',
    summary: 'Creates dynamic and interactive web experiences.',
  },
  {
    position: 'UI developer',
    skills: 'HTML/CSS; JavaScript; jQuery',
    weakness: 'Backend; Scripting; Web security',
    summary: 'Delivers visually appealing and user-friendly interfaces.',
  },
  {
    position: 'HTML developer',
    skills: 'HTML; CSS; Web standards',
    weakness: 'Backend; JavaScript; Web design',
    summary: 'Crafts websites with precision and accuracy.',
  },
  {
    position: 'CSS developer',
    skills: 'HTML/CSS; Sass/Less; RWD',
    weakness: 'JavaScript; Web design; Accessibility',
    summary: 'Shapes websites into visually stunning works of art.',
  },
  {
    position: 'JavaScript developer',
    skills: 'JavaScript; React/Vue/Angular',
    weakness: 'Backend; HTML/CSS; Web design',
    summary: 'Brings websites to life with dynamic interactions, animations, and real-time updates.',
  },
  {
    position: 'React developer',
    skills: 'JavaScript; React; Redux',
    weakness: 'HTML/CSS; Web design; Web security',
    summary: 'Builds complex user interfaces, delivering seamless and scalable web experiences.',
  },
  {
    position: 'WordPress developer',
    skills: 'HTML/CSS; WordPress; PHP',
    weakness: 'Web performance; Web security; Web design',
    summary: 'Creates versatile, dynamic, and user-friendly WordPress websites.',
  },
  {
    position: 'Full Stack developer',
    skills: 'JavaScript; Angular; Python',
    weakness: 'HTML/CSS; Web security; Web design',
    summary: 'Delivers dynamic and functional websites from end to end.',
  },
  {
    position: 'Frontend developer',
    skills: 'HTML/CSS; JavaScript; RWD',
    weakness: 'Backend; Web security; Web design',
    summary: 'Crafting aesthetically pleasing and highly functional websites.'
  },
  {
    position: 'Backend developer',
    skills: 'PHP/Ruby; MqSQL; APIs',
    weakness: 'Frontend; UX/UI; JS frameworks',
    summary: 'Builds robust and scalable systems that power the flow of data and drive web applications.'
  }
]

const random1 = Math.floor(Math.random() * 10)
const random2 = Math.floor(Math.random() * 100)
const random3 = Math.floor(Math.random() * 100)
const random4 = Math.floor(Math.random() * 9)

if (params.get('randomize') === 'true') {
  const madeUpName = `${madeUpFirstName[random2]} ${madeUpLastName[random3]}`
  const madeUpLink = `${madeUpFirstName[random2].toLowerCase()}-${madeUpLastName[random3].toLowerCase()}`
  const madeUpHref = `https://${madeUpLink}.dev`

  profile = {
    name: madeUpName,
    position: madeUpProfile[random1].position,
    src: `https://randomuser.me/api/portraits/lego/${random4}.jpg`,
    alt: `${madeUpName} profile image.`,
    details: `${1980 + random1}; ${madeUpCities[random2]}; ${madeUpDegree[random1]}`,
    skills: madeUpProfile[random1].skills,
    experience: `${random1 + 2}+ years`,
    summary: madeUpProfile[random1].summary,
    weakness: madeUpProfile[random1].weakness,
    href: madeUpLink,
    text: madeUpHref
  }
} else {
  profile = {
    name: 'Silvestar Bistrović',
    position: 'Web developer',
    src: 'https://res.cloudinary.com/starbist/image/upload/v1638533818/avatar-1024-green_jxswsw.jpg',
    alt: 'Silvestar Bistrović profile image.',
    details: '1986; Osijek, Croatia; MSc in EE',
    skills: 'HTML; CSS; JavaScript',
    experience: '10+ years',
    summary: 'Able to apply design in any dev environment.',
    weakness: 'TypeScript; JavaScript frameworks; GraphQL',
    href: 'https://www.silvestar.codes',
    text: 'silvestar.codes'
  }
}

const getParam = (param, fallback, allowEmpty) => {
  if(!param || !params || !fallback) {
    return false
  }

  const value = params.get(param);

  if(typeof value === 'string' && value.trim() === '' && allowEmpty) {
    return ''
  } else if(value) {
    return value
  } else {
    return fallback
  }
}

const getParamBool = (param, fallback) => {
  if(!param || !params) {
    return false
  }

  const value = params.get(param);

  if(typeof value === 'string' && value.trim() === 'true') {
    return true
  } else if(typeof value === 'string' && value.trim() === 'false') {
    return false
  } else {
    return fallback
  }
}

const checkMQ = window.matchMedia('screen and (max-width: 59.99em)')

const app = Vue2.createApp({
  data() {
    return {
      hideForm: checkMQ.matches || getParamBool('hideForm', true),
      name: getParam('name', profile.name),
      position: getParam('position', profile.position),
      image: {
        src: getParam('imagesrc', profile.src, true),
        alt: getParam('imagealt', profile.alt, true)
      },
      details: {
        list: getParam('details', profile.details, true)
      },
      skills: {
        list: getParam('skills', profile.skills, true),
        experience: getParam('experience', profile.experience, true),
        summary: getParam('summary', profile.summary, true)
      },
      weakness: {
        list: getParam('weakness', profile.weakness, true)
      },
      url: {
        href: getParam('urlhref', profile.href, true),
        text: getParam('urltext', profile.text, true)
      }
    }
  },
  computed: {
    detailsList() {
      return this.details.list ? this.details.list.split(';') : []
    },
    skillsList() {
      return this.skills.list ? this.skills.list.split(';') : []
    },
    weaknessList() {
      return this.weakness.list ? this.weakness.list.split(';') : []
    }
  },
})

app.config.compilerOptions.delimiters = ['${', '}']

window.devcards = app
