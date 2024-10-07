// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import { ARTICLES } from './consts/articles'

export const SITE_TITLE = 'Sarinskovic'
export const SITE_DESCRIPTION =
	'Avete bisogno di indicizzarvi o di contenuti creativi? Il copywriting è molto più della SEO. Scoprite di più su di me, su quello che fa un copywriter e come rimanere sempre tra i primi su Google'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/sara-stefanovic-92708b123/'
export const INSTAGRAM_URL = 'https://www.instagram.com/sarinskovic?igsh=MTB6OXR1Mmxiams1cQ=='
export const DEV_PORTFOLIO = 'https://locatandre.github.io/portfolio'

export const MAIL = 'stefanovicsara03@gmail.com'
export const PHONE = '+39 340 376 3978'

export const INDEX_DESC =
	"Da sempre con la testa tra le parole e lo sguardo puntato al futuro, mi sono laureata magistrale in Lingue e Comunicazione. Il mio percorso nel mondo del copywriting è iniziato collaborando con testate e magazine online, dove ho avuto l'occasione di scrivere praticamente di tutto: dal cinema, alle nuove tecnologie, passando per la storia e la sostenibilità. Ma non mi sono fermata lì! Nel frattempo, tra un articolo e l’altro, ho dato sfogo alla mia creatività collaborando su diversi progetti social media, dove ho imparato a destreggiarmi tra hashtag e copy ad effetto. La passione per il digital mi ha portato a specializzarmi nella creazione di testi SEO, dove il linguaggio incontra l’algoritmo in una danza perfetta, dando vita a contenuti che non solo piacciono agli utenti, ma fanno anche gola ai motori di ricerca. Oggi, con un pizzico di ironia, aiuto brand e progetti a farsi notare nel vasto mondo online."

export const COMPANY = [
	{
		order: 1,
		rotation: '-rotate-4',
		title: 'Elle Decor',
		logo: 'elleDecor',
		path: 'elleDecor',
		service: 'Copywriting per il Web',
		description:
			'Gli articoli e copy scritti per Elle Decor si sono concentrati principalmente sul mondo dell’arte e sul turismo culturale.',
		articles: ARTICLES.elleDecor
	},
	{
		order: 2,
		rotation: 'rotate-3 sm:-translate-x-20 sm:-translate-y-4',
		title: "Harper's Bazaar",
		logo: 'harper',
		path: 'harper',
		service: 'Copywriting per il Web',
		description:
			'Per questo magazine ho scritto contenuti che si focalizzano principalmente sul tema ‘viaggi’, oltre che alcune analisi di opere e monumenti simbolo di varie città.',
		articles: ARTICLES.harper
	},
	{
		order: 3,
		rotation: '-rotate-6',
		title: 'Esquire',
		logo: 'esquire',
		path: 'esquire',
		service: 'Copywriting SEO',
		description:
			'La collaborazione con Esquire si è concentrata sulla scrittura di articoli indicizzabili su temi di vario genere. Dalla fisica ai viaggi fino ad arrivare al mondo del cinema e del wellness.',
		articles: ARTICLES.esquire
	},
	{
		order: 4,
		rotation: 'rotate-2',
		title: 'Cosmopolitan',
		logo: 'cosmopolitan',
		path: 'cosmopolitan',
		service: 'Copywriting per il Web',
		description:
			'Cosmopolitan è un magazine che si rivolge a un pubblico femminile e sempre aggiornato sulle nuove tendenze. In questo caso mi sono occupata di contenuti inerenti all’attualità, alla moda e al lifestyle.',
		articles: ARTICLES.cosmopolitan
	},
	{
		order: 5,
		rotation: 'sm:translate-x-10',
		title: 'Marie Claire',
		logo: 'marie',
		path: 'marie',
		service: 'Copywriting per il Web',
		description:
			'Il mio lavoro per Marie Claire è stato legato alla stesura di articoli sul mondo beauty e sul lifestyle in generale, senza disdegnare un po’ di cucina e benessere.',
		articles: ARTICLES.marie
	},
	{
		order: 6,
		rotation: 'rotate-2 sm:translate-y-6 sm:-translate-x-4',
		title: "Gruppo L'Oréal",
		logo: 'loreal',
		path: 'loreal',
		service: 'Copywriting SEO',
		description:
			'Il mio lavoro per il Gruppo L’Oréal (L’Oréal Paris, Vichy, La Roche Posay e Garnier) si è incentrato sulla creazione di articoli ottimizzati in ottica SEO per i magazine dei vari brand menzionati.',
		articles: ARTICLES.loreal
	}
]
