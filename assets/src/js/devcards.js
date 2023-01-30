const Vue = window.Vue
let uri = window.location.search.substring(1)
let params = new URLSearchParams(uri)
const noForm = params.get('no-form') ? params.get('no-form') !== 'false' : true

const app = Vue.createApp({
  data() {
    return {
      hideForm: noForm,
      name: params.get("name") || 'Silvestar Bistrović',
      position: params.get("position") || 'Web developer',
      image: {
        src: params.get("imagesrc") ||
          'https://res.cloudinary.com/starbist/image/upload/v1638533818/avatar-1024-green_jxswsw.jpg',
        alt: params.get("imagealt") || 'Silvestar Bistrović profile image in green hue.'
      },
      details: {
        list: params.get('details') || '1986; Osijek, Croatia; MSc in EE'
      },
      skills: {
        list: params.get('skills') || 'HTML; CSS; JavaScript',
        experience: params.get("experience") || '10+ years',
        summary: params.get("summary") || 'Able to apply design in any dev environment.'
      },
      weakness: {
        list: params.get('weakness') || 'TypeScript; JavaScript frameworks; GraphQL'
      },
      url: {
        href: params.get("urlhref") || 'https://www.silvestar.codes',
        text: params.get("urltext") || 'silvestar.codes'
      }
    }
  },
  computed: {
    detailsList() {
      return this.details.list.split(';')
    },
    skillsList() {
      return this.skills.list.split(';')
    },
    weaknessList() {
      return this.weakness.list.split(';')
    }
  },
})

app.config.compilerOptions.delimiters = ['${', '}']

window.devcards = app
